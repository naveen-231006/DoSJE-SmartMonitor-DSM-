import { useState, useMemo } from 'react';
import { Shield } from 'lucide-react';
import { indianStates } from '../data/mockData';
import './RiskScoring.css';

const factors = [
  { key: 'violations', label: 'Past Violations', min: 0, max: 10, weight: 0.3, unit: '' },
  { key: 'grant', label: 'Grant Amount', min: 0, max: 200, weight: 0.2, unit: '₹ Lakhs', threshold: 50 },
  { key: 'beneficiaries', label: 'Beneficiary Count', min: 0, max: 500, weight: 0.15, unit: '', threshold: 100 },
  { key: 'daysSince', label: 'Days Since Last Inspection', min: 0, max: 180, weight: 0.2, unit: 'days', threshold: 90 },
  { key: 'anomalyFlags', label: 'AI Anomaly Flags (30 days)', min: 0, max: 15, weight: 0.15, unit: '' },
];

const defaultValues = { violations: 4, grant: 65, beneficiaries: 150, daysSince: 45, anomalyFlags: 3 };

// Generate deterministic heatmap data
const heatmapData = indianStates.map(state => ({
  state,
  months: Array.from({ length: 6 }, (_, i) => {
    const seed = state.charCodeAt(0) * 7 + state.charCodeAt(1) * 13 + i * 17;
    return Math.floor((seed % 60) + 20);
  }),
}));

const monthLabels = ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'];

export default function RiskScoring() {
  const [values, setValues] = useState(defaultValues);

  const score = useMemo(() => {
    const v = (values.violations / 10) * 100 * 0.3;
    const g = (values.grant > 50 ? 100 : (values.grant / 50) * 100) * 0.2;
    const b = (values.beneficiaries > 100 ? 100 : (values.beneficiaries / 100) * 100) * 0.15;
    const d = (values.daysSince > 90 ? 100 : (values.daysSince / 90) * 100) * 0.2;
    const a = (values.anomalyFlags / 10) * 100 * 0.15;
    return Math.round(v + g + b + d + a);
  }, [values]);

  const tier = score > 70 ? 1 : score > 40 ? 2 : 3;
  const tierLabel = tier === 1 ? 'HIGH RISK' : tier === 2 ? 'MEDIUM RISK' : 'LOW RISK';
  const tierColor = tier === 1 ? 'var(--red)' : tier === 2 ? 'var(--amber)' : 'var(--green)';

  const handleChange = (key, val) => {
    setValues(prev => ({ ...prev, [key]: Number(val) }));
  };

  return (
    <div className="risk-page">
      <div className="page-header">
        <h1 className="page-title">Risk Scoring</h1>
        <span className="page-subtitle">Calculate NGO monitoring tier based on risk factors</span>
      </div>

      <div className="risk-layout">
        {/* Sliders */}
        <div className="risk-sliders card">
          <div className="card__header">
            <h3 className="card__title">Risk Factors</h3>
          </div>
          <div className="card__body">
            {factors.map(f => (
              <div key={f.key} className="slider-group">
                <div className="slider-group__top">
                  <label className="slider-group__label">
                    {f.label}
                    <span className="slider-group__weight">{(f.weight * 100)}%</span>
                  </label>
                  <span className="slider-group__value mono">
                    {values[f.key]}{f.unit ? ` ${f.unit}` : ''}
                  </span>
                </div>
                <input
                  type="range"
                  min={f.min}
                  max={f.max}
                  value={values[f.key]}
                  onChange={e => handleChange(f.key, e.target.value)}
                  className="risk-slider"
                  style={{ '--fill': `${((values[f.key] - f.min) / (f.max - f.min)) * 100}%` }}
                />
                <div className="slider-group__range">
                  <span>{f.min}</span>
                  <span>{f.max}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Score Result */}
        <div className="risk-result">
          <div className="card">
            <div className="card__body" style={{ textAlign: 'center', padding: '32px 24px' }}>
              <div className="score-gauge">
                <svg viewBox="0 0 120 120" className="score-gauge__svg">
                  <circle cx="60" cy="60" r="52" fill="none" stroke="var(--border-muted)" strokeWidth="6" />
                  <circle
                    cx="60" cy="60" r="52" fill="none"
                    stroke={tierColor}
                    strokeWidth="6"
                    strokeLinecap="round"
                    strokeDasharray={`${(score / 100) * 327} 327`}
                    transform="rotate(-90 60 60)"
                    style={{ transition: 'stroke-dasharray 0.4s ease, stroke 0.3s ease' }}
                  />
                </svg>
                <div className="score-gauge__inner">
                  <div className="score-gauge__value">{score}</div>
                  <div className="score-gauge__label">Risk Score</div>
                </div>
              </div>

              <div className="tier-badge" style={{ background: tier === 1 ? 'var(--red-muted)' : tier === 2 ? 'var(--amber-muted)' : 'var(--green-muted)', color: tierColor }}>
                <Shield size={14} />
                TIER {tier} — {tierLabel}
              </div>

              <div className="score-formula">
                <h4>Score Formula</h4>
                <code>
                  (Violations × 30%) + (Grant &gt; ₹50L? × 20%)<br />
                  + (Beneficiaries &gt; 100? × 15%)<br />
                  + (Days &gt; 90? × 20%) + (AI Flags × 15%)
                </code>
              </div>
            </div>
          </div>

          {/* Tier Thresholds */}
          <div className="card" style={{ marginTop: 16 }}>
            <div className="card__body">
              <h4 style={{ fontSize: '0.82rem', fontWeight: 600, marginBottom: 12 }}>Tier Assignment</h4>
              <div className="tier-thresholds">
                <div className={`tier-threshold ${tier === 1 ? 'tier-threshold--active' : ''}`} style={{ '--tc': 'var(--red)' }}>
                  <span className="tier-threshold__range">70 – 100</span>
                  <span>Tier 1 · High Risk</span>
                </div>
                <div className={`tier-threshold ${tier === 2 ? 'tier-threshold--active' : ''}`} style={{ '--tc': 'var(--amber)' }}>
                  <span className="tier-threshold__range">40 – 70</span>
                  <span>Tier 2 · Medium Risk</span>
                </div>
                <div className={`tier-threshold ${tier === 3 ? 'tier-threshold--active' : ''}`} style={{ '--tc': 'var(--green)' }}>
                  <span className="tier-threshold__range">0 – 40</span>
                  <span>Tier 3 · Low Risk</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Risk Heatmap */}
      <div className="card" style={{ marginTop: 16 }}>
        <div className="card__header">
          <h3 className="card__title">State-wise Risk Heatmap</h3>
          <span className="card__sub">Average risk scores by month</span>
        </div>
        <div className="card__body heatmap-wrap">
          <table className="heatmap-table">
            <thead>
              <tr>
                <th>State</th>
                {monthLabels.map(m => <th key={m}>{m}</th>)}
              </tr>
            </thead>
            <tbody>
              {heatmapData.map(row => (
                <tr key={row.state}>
                  <td className="heatmap-table__state">{row.state}</td>
                  {row.months.map((val, i) => (
                    <td key={i}>
                      <div
                        className="heatmap-cell"
                        style={{ background: heatColor(val), color: val > 55 ? 'white' : 'var(--text-primary)' }}
                        title={`${row.state} · ${monthLabels[i]}: ${val}`}
                      >
                        {val}
                      </div>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function heatColor(val) {
  if (val > 65) return 'rgba(248, 81, 73, 0.7)';
  if (val > 50) return 'rgba(210, 153, 34, 0.5)';
  if (val > 35) return 'rgba(210, 153, 34, 0.25)';
  return 'rgba(63, 185, 80, 0.25)';
}
