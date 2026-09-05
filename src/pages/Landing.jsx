import { Link } from 'react-router-dom';
import {
  Shield, Eye, Wifi, WifiOff, Users, Brain,
  Camera, ArrowRight, ChevronRight, BarChart3,
  Lock, Layers, Check, X, Clock, IndianRupee,
  TrendingUp, Target, Timer, Building2
} from 'lucide-react';
import './Landing.css';

const tiers = [
  {
    tier: 1, label: 'High Risk', color: 'var(--red)',
    bg: 'var(--red-muted)', ngos: '1,000', percent: '10%',
    cameras: 4, cost: '₹25,000', opex: '₹2,000/mo',
    features: ['Live CCTV streaming', 'Real-time AI analysis', 'Weekly random VC', 'Weekly surprise inspections', 'Blockchain evidence']
  },
  {
    tier: 2, label: 'Medium Risk', color: 'var(--amber)',
    bg: 'var(--amber-muted)', ngos: '4,000', percent: '40%',
    cameras: 2, cost: '₹15,000', opex: '₹800/mo',
    features: ['Scheduled uploads (4x/day)', 'Daily AI analysis', 'Monthly on-demand VC', 'Monthly surprise inspections', 'Selective blockchain']
  },
  {
    tier: 3, label: 'Low Risk', color: 'var(--green)',
    bg: 'var(--green-muted)', ngos: '5,000', percent: '50%',
    cameras: 1, cost: '₹8,000', opex: '₹300/mo',
    features: ['Local recording only', 'Monthly AI analysis', 'No VC available', 'Quarterly inspections', 'SMS helpline']
  },
];

const features = [
  { label: 'CCTV Cameras', t1: '4 cameras, live', t2: '2 cameras, 4x daily', t3: '1 camera, local' },
  { label: 'AI People Counting', t1: 'Real-time 24/7', t2: '4x daily', t3: 'Monthly' },
  { label: 'Random VC', t1: 'Weekly', t2: 'Monthly', t3: '—' },
  { label: 'Physical Inspections', t1: 'Weekly surprise', t2: 'Monthly surprise', t3: 'Quarterly' },
  { label: 'Offline Mode', t1: 'Auto-failover', t2: 'Auto-failover', t3: 'Always offline' },
  { label: 'Blockchain Evidence', t1: true, t2: 'Selective', t3: false },
  { label: 'Beneficiary App', t1: 'Full access', t2: 'Grievance only', t3: 'SMS helpline' },
];

const innovations = [
  { icon: Target, title: 'Risk-Based Tiering', desc: 'Resources allocated intelligently based on actual risk scores, not political considerations.' },
  { icon: Lock, title: 'Privacy by Design', desc: 'On-device face blurring, data minimization, and independent oversight built into the architecture.' },
  { icon: WifiOff, title: 'Offline-First', desc: 'Works in rural India\'s connectivity reality with store-and-forward and SMS fallback.' },
  { icon: Brain, title: 'Human-in-the-Loop AI', desc: 'AI assists officials with continuous feedback loops — avoids automation bias.' },
  { icon: IndianRupee, title: 'Sustainable PPP Model', desc: 'Public-private partnership ensures long-term financial viability beyond annual budgets.' },
  { icon: Layers, title: 'Modular Architecture', desc: 'Swap cameras, AI models, or cloud providers without rebuilding the system.' },
];

const outcomes = [
  { label: 'Faster Inspections', value: '37%', sub: '4 hrs → 2.5 hrs', icon: Timer },
  { label: 'Anomalies Detected', value: '3×', sub: '50 → 150/month', icon: Eye },
  { label: 'Cost Savings', value: '60%', sub: '₹2,000 → ₹800/visit', icon: TrendingUp },
  { label: 'Fraud Prevented', value: '5×', sub: '₹5Cr → ₹25Cr/year', icon: Shield },
  { label: 'NGO Compliance', value: '85%', sub: 'Up from 65%', icon: Building2 },
  { label: 'ROI (3 years)', value: '36%', sub: '₹20 Cr net benefit', icon: BarChart3 },
];

const phases = [
  { phase: 1, title: 'Pilot', months: '1–6', ngos: 100, budget: '₹50L', states: 5 },
  { phase: 2, title: 'State-Wide', months: '7–18', ngos: '1,000', budget: '₹5Cr', states: 10 },
  { phase: 3, title: 'National', months: '19–36', ngos: '10,000', budget: '₹50Cr', states: 'All' },
];

export default function Landing() {
  return (
    <div className="landing">
      {/* ── Navbar ── */}
      <nav className="landing-nav">
        <div className="landing-nav__inner">
          <Link to="/" className="landing-nav__logo">
            <div className="landing-nav__logo-mark">D</div>
            <span>DoSJE SmartMonitor</span>
          </Link>
          <div className="landing-nav__links">
            <a href="#tiers">Tiers</a>
            <a href="#architecture">Architecture</a>
            <a href="#roadmap">Roadmap</a>
            <Link to="/dashboard" className="landing-nav__cta">
              Dashboard <ChevronRight size={14} />
            </Link>
          </div>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="hero">
        <div className="hero__content">
          <div className="hero__badge">SIH 2026 · Department of Social Justice & Empowerment</div>
          <h1 className="hero__title">
            Transparent Governance<br />Through Smart Surveillance
          </h1>
          <p className="hero__desc">
            A phased, risk-based monitoring system for 10,000+ NGOs — combining AI-powered
            CCTV analysis, blockchain evidence chains, and offline-first design to prevent
            fraud while protecting privacy.
          </p>
          <div className="hero__actions">
            <Link to="/dashboard" className="hero__btn hero__btn--primary">
              Explore Dashboard <ArrowRight size={16} />
            </Link>
            <a href="#architecture" className="hero__btn hero__btn--ghost">
              View Architecture
            </a>
          </div>
          <div className="hero__stats">
            <div className="hero__stat">
              <span className="hero__stat-val">10,000+</span>
              <span className="hero__stat-label">NGOs Monitored</span>
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <span className="hero__stat-val">36%</span>
              <span className="hero__stat-label">ROI in 3 Years</span>
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <span className="hero__stat-val">₹25Cr</span>
              <span className="hero__stat-label">Fraud Prevented/Year</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Three-Tier Model ── */}
      <section id="tiers" className="section">
        <div className="section__header">
          <h2 className="section__title">Three-Tier Monitoring Model</h2>
          <p className="section__desc">Resources allocated based on risk — not one-size-fits-all.</p>
        </div>
        <div className="tier-grid">
          {tiers.map(t => (
            <div key={t.tier} className="tier-card" style={{ '--tier-color': t.color }}>
              <div className="tier-card__header">
                <span className="tier-card__badge" style={{ background: t.bg, color: t.color }}>
                  Tier {t.tier}
                </span>
                <span className="tier-card__label">{t.label}</span>
              </div>
              <div className="tier-card__stats">
                <div>
                  <span className="tier-card__stat-val">{t.ngos}</span>
                  <span className="tier-card__stat-label">NGOs ({t.percent})</span>
                </div>
                <div>
                  <span className="tier-card__stat-val">{t.cameras}</span>
                  <span className="tier-card__stat-label">Cameras/site</span>
                </div>
              </div>
              <div className="tier-card__cost">
                <span>Setup: <strong>{t.cost}</strong></span>
                <span>OPEX: <strong>{t.opex}</strong></span>
              </div>
              <ul className="tier-card__features">
                {t.features.map((f, i) => (
                  <li key={i}><Check size={14} style={{ color: t.color }} /> {f}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ── Feature Comparison ── */}
      <section className="section">
        <div className="section__header">
          <h2 className="section__title">Feature Comparison</h2>
        </div>
        <div className="table-wrap">
          <table className="feature-table">
            <thead>
              <tr>
                <th>Feature</th>
                <th style={{ color: 'var(--red)' }}>Tier 1</th>
                <th style={{ color: 'var(--amber)' }}>Tier 2</th>
                <th style={{ color: 'var(--green)' }}>Tier 3</th>
              </tr>
            </thead>
            <tbody>
              {features.map((f, i) => (
                <tr key={i}>
                  <td className="feature-table__label">{f.label}</td>
                  <td>{renderCell(f.t1)}</td>
                  <td>{renderCell(f.t2)}</td>
                  <td>{renderCell(f.t3)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Architecture ── */}
      <section id="architecture" className="section">
        <div className="section__header">
          <h2 className="section__title">System Architecture</h2>
          <p className="section__desc">Modular, microservices-based, future-proof.</p>
        </div>
        <div className="arch-stack">
          <div className="arch-layer">
            <div className="arch-layer__label">Frontend</div>
            <div className="arch-layer__items">
              <span>Inspector App</span><span>NGO App</span><span>Beneficiary App</span><span>Admin Dashboard</span>
            </div>
            <div className="arch-layer__tech">Flutter (Mobile) · React (Web) · Offline-first with auto-sync</div>
          </div>
          <div className="arch-arrow">↓ REST API + WebSocket ↓</div>
          <div className="arch-layer">
            <div className="arch-layer__label">Backend Services</div>
            <div className="arch-layer__items">
              <span>Auth (Keycloak)</span><span>CCTV (Mediamtx)</span><span>AI (YOLOv8)</span>
              <span>Inspection</span><span>VC (Jitsi)</span><span>Notifications</span><span>Analytics</span>
            </div>
            <div className="arch-layer__tech">Node.js · TensorFlow Serving · Grafana + Prometheus</div>
          </div>
          <div className="arch-arrow">↓ Encrypted ↓</div>
          <div className="arch-layer">
            <div className="arch-layer__label">Storage</div>
            <div className="arch-layer__items">
              <span>PostgreSQL</span><span>MinIO (S3)</span><span>Redis</span><span>India Chain</span>
            </div>
            <div className="arch-layer__tech">MeghRaj Gov Cloud · Hybrid AWS India for burst</div>
          </div>
        </div>
      </section>

      {/* ── Innovation Highlights ── */}
      <section className="section">
        <div className="section__header">
          <h2 className="section__title">Why This Solution Wins</h2>
          <p className="section__desc">Innovation backed by pragmatism.</p>
        </div>
        <div className="innovation-grid">
          {innovations.map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} className="innovation-card">
                <div className="innovation-card__icon"><Icon size={20} /></div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── Expected Outcomes ── */}
      <section className="section">
        <div className="section__header">
          <h2 className="section__title">Expected Outcomes</h2>
          <p className="section__desc">Quantified impact after 3 years of deployment.</p>
        </div>
        <div className="outcomes-grid">
          {outcomes.map((o, i) => {
            const Icon = o.icon;
            return (
              <div key={i} className="outcome-card">
                <Icon size={18} className="outcome-card__icon" />
                <div className="outcome-card__value">{o.value}</div>
                <div className="outcome-card__label">{o.label}</div>
                <div className="outcome-card__sub">{o.sub}</div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── Roadmap ── */}
      <section id="roadmap" className="section">
        <div className="section__header">
          <h2 className="section__title">Implementation Roadmap</h2>
        </div>
        <div className="roadmap">
          {phases.map((p, i) => (
            <div key={i} className="roadmap__phase">
              <div className="roadmap__dot" />
              <div className="roadmap__content">
                <div className="roadmap__top">
                  <span className="roadmap__phase-label">Phase {p.phase}</span>
                  <span className="roadmap__months">Months {p.months}</span>
                </div>
                <h3 className="roadmap__title">{p.title} Rollout</h3>
                <div className="roadmap__meta">
                  <span>{typeof p.ngos === 'number' ? p.ngos.toLocaleString() : p.ngos} NGOs</span>
                  <span>·</span>
                  <span>{p.states} States</span>
                  <span>·</span>
                  <span>{p.budget}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section cta-section">
        <h2>See the Dashboard in Action</h2>
        <p>Explore the working demo with mock data — risk scoring, live alerts, NGO monitoring, and analytics.</p>
        <Link to="/dashboard" className="hero__btn hero__btn--primary">
          Open Dashboard <ArrowRight size={16} />
        </Link>
      </section>

      {/* ── Footer ── */}
      <footer className="landing-footer">
        <div className="landing-footer__inner">
          <span>DoSJE SmartMonitor · SIH 2026</span>
          <span>Built for the Department of Social Justice & Empowerment</span>
        </div>
      </footer>
    </div>
  );
}

function renderCell(val) {
  if (val === true) return <Check size={16} style={{ color: 'var(--green)' }} />;
  if (val === false) return <X size={16} style={{ color: 'var(--text-muted)' }} />;
  return <span>{val}</span>;
}
