import { useState } from 'react';
import {
  AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer, Legend
} from 'recharts';
import { TrendingUp, Eye, IndianRupee, Clock, Shield, Target, Users, AlertTriangle } from 'lucide-react';
import { fraudTrend, statePerformance } from '../data/mockData';
import './Analytics.css';

const metrics = [
  { label: 'Total Inspections', value: '4,280', change: '+12%', icon: Clock, color: 'var(--accent)' },
  { label: 'Anomalies Detected', value: '227', change: '+38%', icon: Eye, color: 'var(--red)' },
  { label: 'Fraud Prevented', value: '₹25.3 Cr', change: '+5×', icon: Shield, color: 'var(--green)' },
  { label: 'Cost Savings', value: '₹8.4 Cr', change: '60%', icon: IndianRupee, color: 'var(--violet)' },
  { label: 'Active Inspectors', value: '342', change: '+15%', icon: Users, color: 'var(--amber)' },
  { label: 'Avg. Inspection Time', value: '2.5 hrs', change: '-37%', icon: TrendingUp, color: 'var(--accent)' },
  { label: 'Compliance Score', value: '85%', change: '+20pt', icon: Target, color: 'var(--green)' },
  { label: 'False Positive Rate', value: '12%', change: '-8pt', icon: AlertTriangle, color: 'var(--amber)' },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="chart-tooltip">
      <div className="chart-tooltip__label">{label}</div>
      {payload.map((p, i) => (
        <div key={i} style={{ color: p.color, fontSize: '0.8rem', fontWeight: 500 }}>
          {p.name}: {p.value}
        </div>
      ))}
    </div>
  );
};

export default function Analytics() {
  const [savingsInput, setSavingsInput] = useState({ ngos: 1000, costPerInspection: 2000, inspectionsPerYear: 12 });

  const dsmCost = savingsInput.costPerInspection * 0.4;
  const manualTotal = savingsInput.ngos * savingsInput.costPerInspection * savingsInput.inspectionsPerYear;
  const dsmTotal = savingsInput.ngos * dsmCost * savingsInput.inspectionsPerYear;
  const savings = manualTotal - dsmTotal;

  return (
    <div className="analytics-page">
      <div className="page-header">
        <h1 className="page-title">Analytics</h1>
        <span className="page-subtitle">System performance and impact metrics</span>
      </div>

      {/* Metric Cards */}
      <div className="metrics-grid">
        {metrics.map((m, i) => {
          const Icon = m.icon;
          return (
            <div key={i} className="metric-card">
              <div className="metric-card__top">
                <span className="metric-card__label">{m.label}</span>
                <Icon size={15} style={{ color: m.color, opacity: 0.7 }} />
              </div>
              <div className="metric-card__value">{m.value}</div>
              <div className="metric-card__change" style={{ color: m.color }}>{m.change}</div>
            </div>
          );
        })}
      </div>

      <div className="analytics-grid-2">
        {/* Fraud Detection Trend */}
        <div className="card">
          <div className="card__header">
            <h3 className="card__title">Fraud Detection Trend</h3>
            <span className="card__sub">Last 12 months</span>
          </div>
          <div className="card__body" style={{ height: 260 }}>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={fraudTrend} margin={{ top: 8, right: 8, left: -20, bottom: 0 }}>
                <CartesianGrid stroke="var(--border-muted)" strokeDasharray="3 3" />
                <XAxis dataKey="month" tick={{ fill: 'var(--text-muted)', fontSize: 11 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fill: 'var(--text-muted)', fontSize: 11 }} axisLine={false} tickLine={false} />
                <Tooltip content={<CustomTooltip />} />
                <defs>
                  <linearGradient id="detectGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="var(--red)" stopOpacity={0.2} />
                    <stop offset="100%" stopColor="var(--red)" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="preventGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="var(--green)" stopOpacity={0.2} />
                    <stop offset="100%" stopColor="var(--green)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <Area type="monotone" dataKey="detected" name="Detected" stroke="var(--red)" fill="url(#detectGrad)" strokeWidth={2} dot={false} />
                <Area type="monotone" dataKey="prevented" name="Prevented" stroke="var(--green)" fill="url(#preventGrad)" strokeWidth={2} dot={false} />
                <Legend wrapperStyle={{ fontSize: '0.72rem', color: 'var(--text-muted)' }} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Cost Savings Calculator */}
        <div className="card">
          <div className="card__header">
            <h3 className="card__title">Cost Savings Calculator</h3>
          </div>
          <div className="card__body">
            <div className="calc-inputs">
              <div className="calc-field">
                <label>Number of NGOs</label>
                <input type="number" value={savingsInput.ngos} onChange={e => setSavingsInput({ ...savingsInput, ngos: Number(e.target.value) })} />
              </div>
              <div className="calc-field">
                <label>Cost per Inspection (₹)</label>
                <input type="number" value={savingsInput.costPerInspection} onChange={e => setSavingsInput({ ...savingsInput, costPerInspection: Number(e.target.value) })} />
              </div>
              <div className="calc-field">
                <label>Inspections/Year</label>
                <input type="number" value={savingsInput.inspectionsPerYear} onChange={e => setSavingsInput({ ...savingsInput, inspectionsPerYear: Number(e.target.value) })} />
              </div>
            </div>
            <div className="calc-results">
              <div className="calc-result">
                <span className="calc-result__label">Manual System Cost</span>
                <span className="calc-result__value" style={{ color: 'var(--red)' }}>₹{(manualTotal / 10000000).toFixed(1)} Cr</span>
              </div>
              <div className="calc-result">
                <span className="calc-result__label">DSM System Cost</span>
                <span className="calc-result__value" style={{ color: 'var(--green)' }}>₹{(dsmTotal / 10000000).toFixed(1)} Cr</span>
              </div>
              <div className="calc-result calc-result--highlight">
                <span className="calc-result__label">Annual Savings</span>
                <span className="calc-result__value" style={{ color: 'var(--accent)', fontSize: '1.3rem' }}>₹{(savings / 10000000).toFixed(1)} Cr</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* State-wise Performance */}
      <div className="card">
        <div className="card__header">
          <h3 className="card__title">State-wise Compliance Performance</h3>
          <span className="card__sub">{statePerformance.length} states</span>
        </div>
        <div className="card__body" style={{ height: 360 }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={statePerformance} layout="vertical" margin={{ top: 4, right: 20, left: 80, bottom: 4 }}>
              <CartesianGrid stroke="var(--border-muted)" strokeDasharray="3 3" horizontal={false} />
              <XAxis type="number" domain={[0, 100]} tick={{ fill: 'var(--text-muted)', fontSize: 11 }} axisLine={false} tickLine={false} />
              <YAxis type="category" dataKey="state" tick={{ fill: 'var(--text-secondary)', fontSize: 11 }} axisLine={false} tickLine={false} width={80} />
              <Tooltip content={<CustomTooltip />} />
              <Bar dataKey="compliance" name="Compliance %" fill="var(--accent)" radius={[0, 4, 4, 0]} barSize={16} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
