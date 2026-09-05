import { Building2, Camera, AlertTriangle, TrendingUp } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import StatCard from '../components/StatCard';
import AlertFeed from '../components/AlertFeed';
import { alerts, complianceTrend, ngos } from '../data/mockData';
import './Dashboard.css';

const tierCounts = [
  { name: 'Tier 1', value: ngos.filter(n => n.tier === 1).length, color: 'var(--red)' },
  { name: 'Tier 2', value: ngos.filter(n => n.tier === 2).length, color: 'var(--amber)' },
  { name: 'Tier 3', value: ngos.filter(n => n.tier === 3).length, color: 'var(--green)' },
];

const RADIAN = Math.PI / 180;
const renderLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, name, value }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);
  return (
    <text x={x} y={y} fill="var(--text-primary)" textAnchor="middle" dominantBaseline="central" fontSize={11} fontWeight={600}>
      {value}
    </text>
  );
};

const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="chart-tooltip">
      <div className="chart-tooltip__label">{label}</div>
      <div className="chart-tooltip__value">{payload[0].value}%</div>
    </div>
  );
};

export default function Dashboard() {
  return (
    <div className="dashboard-page">
      <div className="page-header">
        <h1 className="page-title">Overview</h1>
        <span className="page-subtitle">System health and monitoring summary</span>
      </div>

      {/* Stat Cards */}
      <div className="stat-grid">
        <StatCard label="Total NGOs" value="10,000" sub="Across 28 states" icon={Building2} color="var(--accent)" />
        <StatCard label="Active Cameras" value="8,500" sub="85% online" icon={Camera} color="var(--green)" />
        <StatCard label="Alerts Today" value="23" sub="3 critical" icon={AlertTriangle} color="var(--red)" />
        <StatCard label="Compliance Rate" value="85%" sub="+3% this month" icon={TrendingUp} color="var(--violet)" />
      </div>

      {/* Middle Row */}
      <div className="dashboard-grid-2">
        {/* Tier Distribution */}
        <div className="card">
          <div className="card__header">
            <h3 className="card__title">Risk Tier Distribution</h3>
          </div>
          <div className="card__body" style={{ height: 220 }}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={tierCounts}
                  cx="50%"
                  cy="50%"
                  innerRadius={55}
                  outerRadius={85}
                  dataKey="value"
                  labelLine={false}
                  label={renderLabel}
                  stroke="var(--bg-secondary)"
                  strokeWidth={2}
                >
                  {tierCounts.map((entry, i) => (
                    <Cell key={i} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="tier-legend">
            {tierCounts.map(t => (
              <div key={t.name} className="tier-legend__item">
                <span className="tier-legend__dot" style={{ background: t.color }} />
                <span>{t.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Alerts */}
        <AlertFeed alerts={alerts} />
      </div>

      {/* Compliance Trend */}
      <div className="card">
        <div className="card__header">
          <h3 className="card__title">Compliance Trend</h3>
          <span className="card__sub">Last 12 months</span>
        </div>
        <div className="card__body" style={{ height: 240 }}>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={complianceTrend} margin={{ top: 8, right: 8, left: -20, bottom: 0 }}>
              <CartesianGrid stroke="var(--border-muted)" strokeDasharray="3 3" />
              <XAxis dataKey="month" tick={{ fill: 'var(--text-muted)', fontSize: 11 }} axisLine={{ stroke: 'var(--border-muted)' }} tickLine={false} />
              <YAxis domain={[50, 100]} tick={{ fill: 'var(--text-muted)', fontSize: 11 }} axisLine={false} tickLine={false} />
              <Tooltip content={<CustomTooltip />} />
              <defs>
                <linearGradient id="compGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="var(--accent)" stopOpacity={0.3} />
                  <stop offset="100%" stopColor="var(--accent)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <Area type="monotone" dataKey="value" stroke="var(--accent)" strokeWidth={2} fill="url(#compGrad)" dot={false} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
