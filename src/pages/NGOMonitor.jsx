import { useState } from 'react';
import { Search, X, Camera } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';
import { ngos, dailyPeopleCounts } from '../data/mockData';
import './NGOMonitor.css';

const tierClass = { 1: 'badge-tier1', 2: 'badge-tier2', 3: 'badge-tier3' };

export default function NGOMonitor() {
  const [search, setSearch] = useState('');
  const [tierFilter, setTierFilter] = useState('all');
  const [selected, setSelected] = useState(null);

  const filtered = ngos.filter(n => {
    const matchSearch = n.name.toLowerCase().includes(search.toLowerCase()) || n.id.toLowerCase().includes(search.toLowerCase());
    const matchTier = tierFilter === 'all' || n.tier === Number(tierFilter);
    return matchSearch && matchTier;
  });

  const radarData = selected ? [
    { factor: 'Violations', value: (selected.violations / 10) * 100 },
    { factor: 'Grant Amt', value: Math.min((selected.grantAmount / 100) * 100, 100) },
    { factor: 'Beneficiaries', value: Math.min((selected.beneficiaryCount / 400) * 100, 100) },
    { factor: 'Days Gap', value: Math.min(((new Date() - new Date(selected.lastInspection)) / (1000 * 60 * 60 * 24 * 120)) * 100, 100) },
    { factor: 'AI Flags', value: (selected.anomalyFlags / 10) * 100 },
  ] : [];

  return (
    <div className="ngo-page">
      <div className="page-header">
        <h1 className="page-title">NGO Monitor</h1>
        <span className="page-subtitle">Track and manage all registered NGOs</span>
      </div>

      {/* Filters */}
      <div className="ngo-filters">
        <div className="ngo-search">
          <Search size={15} className="ngo-search__icon" />
          <input
            type="text"
            placeholder="Search NGOs by name or ID..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="ngo-search__input"
          />
        </div>
        <select value={tierFilter} onChange={e => setTierFilter(e.target.value)} className="ngo-filter-select">
          <option value="all">All Tiers</option>
          <option value="1">Tier 1</option>
          <option value="2">Tier 2</option>
          <option value="3">Tier 3</option>
        </select>
      </div>

      <div className="ngo-layout">
        {/* Table */}
        <div className="ngo-table-wrap">
          <table className="ngo-table">
            <thead>
              <tr>
                <th>NGO</th>
                <th>State</th>
                <th>Tier</th>
                <th>Risk</th>
                <th>Compliance</th>
                <th>Status</th>
                <th>Last Inspection</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(ngo => (
                <tr
                  key={ngo.id}
                  className={`ngo-table__row ${selected?.id === ngo.id ? 'ngo-table__row--selected' : ''}`}
                  onClick={() => setSelected(selected?.id === ngo.id ? null : ngo)}
                >
                  <td>
                    <div className="ngo-table__name">{ngo.name}</div>
                    <div className="ngo-table__id mono">{ngo.id}</div>
                  </td>
                  <td>{ngo.state}</td>
                  <td><span className={`badge ${tierClass[ngo.tier]}`}>Tier {ngo.tier}</span></td>
                  <td>
                    <div className="risk-bar">
                      <div className="risk-bar__fill" style={{ width: `${ngo.riskScore}%`, background: ngo.riskScore > 70 ? 'var(--red)' : ngo.riskScore > 40 ? 'var(--amber)' : 'var(--green)' }} />
                    </div>
                    <span className="risk-bar__val mono">{ngo.riskScore}</span>
                  </td>
                  <td>{ngo.compliance}%</td>
                  <td>
                    <span className={`status-dot ${ngo.status === 'active' ? 'status-dot--active' : 'status-dot--inactive'}`} />
                    {ngo.status}
                  </td>
                  <td className="mono">{ngo.lastInspection}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Detail Panel */}
        {selected && (
          <div className="ngo-detail">
            <div className="ngo-detail__header">
              <div>
                <h3>{selected.name}</h3>
                <span className="mono" style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{selected.id}</span>
              </div>
              <button className="ngo-detail__close" onClick={() => setSelected(null)}>
                <X size={16} />
              </button>
            </div>

            {/* Camera Feed */}
            <div className="camera-feed">
              <div className="camera-feed__overlay">
                <Camera size={28} />
                <span>CCTV Feed</span>
              </div>
              <div className="camera-feed__badge">● LIVE</div>
              <div className="camera-feed__time mono">{new Date().toLocaleTimeString()}</div>
            </div>

            {/* People Count Chart */}
            <div className="ngo-detail__section">
              <h4>Daily People Count</h4>
              <div style={{ height: 140 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={dailyPeopleCounts} margin={{ top: 4, right: 4, left: -20, bottom: 0 }}>
                    <XAxis dataKey="day" tick={{ fill: 'var(--text-muted)', fontSize: 10 }} axisLine={false} tickLine={false} />
                    <YAxis tick={{ fill: 'var(--text-muted)', fontSize: 10 }} axisLine={false} tickLine={false} />
                    <Bar dataKey="count" fill="var(--accent)" radius={[3, 3, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Risk Breakdown */}
            <div className="ngo-detail__section">
              <h4>Risk Score Breakdown</h4>
              <div style={{ height: 180 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart data={radarData}>
                    <PolarGrid stroke="var(--border)" />
                    <PolarAngleAxis dataKey="factor" tick={{ fill: 'var(--text-secondary)', fontSize: 10 }} />
                    <PolarRadiusAxis tick={false} axisLine={false} domain={[0, 100]} />
                    <Radar dataKey="value" stroke="var(--accent)" fill="var(--accent)" fillOpacity={0.2} strokeWidth={2} />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="ngo-detail__stats">
              <div><span className="ngo-detail__stat-val">{selected.cameras}</span><span>Cameras</span></div>
              <div><span className="ngo-detail__stat-val">₹{selected.grantAmount}L</span><span>Grant</span></div>
              <div><span className="ngo-detail__stat-val">{selected.beneficiaryCount}</span><span>Beneficiaries</span></div>
              <div><span className="ngo-detail__stat-val">{selected.violations}</span><span>Violations</span></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
