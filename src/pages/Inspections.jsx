import { useState } from 'react';
import { Clock, CheckCircle, PlayCircle, Hash, Shuffle } from 'lucide-react';
import { inspections } from '../data/mockData';
import './Inspections.css';

const statusConfig = {
  'scheduled': { class: 'badge-info', icon: Clock },
  'in-progress': { class: 'badge-warning', icon: PlayCircle },
  'completed': { class: 'badge-success', icon: CheckCircle },
};

export default function Inspections() {
  const [showBlockchain, setShowBlockchain] = useState(false);
  const [hashGenerated, setHashGenerated] = useState(false);

  const handleVerify = () => {
    setShowBlockchain(true);
    setTimeout(() => setHashGenerated(true), 1500);
  };

  return (
    <div className="inspections-page">
      <div className="page-header">
        <h1 className="page-title">Inspections</h1>
        <span className="page-subtitle">Manage inspection schedules and verify evidence</span>
      </div>

      {/* Inspections Table */}
      <div className="card" style={{ marginBottom: 16 }}>
        <div className="card__header">
          <h3 className="card__title">Inspection Schedule</h3>
          <span className="card__sub">{inspections.length} inspections</span>
        </div>
        <table className="insp-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>NGO</th>
              <th>Inspector</th>
              <th>Date & Time</th>
              <th>Type</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {inspections.map(ins => {
              const config = statusConfig[ins.status];
              const Icon = config.icon;
              return (
                <tr key={ins.id}>
                  <td className="mono">{ins.id}</td>
                  <td>
                    <div style={{ fontWeight: 500, color: 'var(--text-primary)' }}>{ins.ngoName}</div>
                    <div className="mono" style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>{ins.ngoId}</div>
                  </td>
                  <td>{ins.inspector}</td>
                  <td className="mono">{ins.date} · {ins.time}</td>
                  <td><span className="badge badge-info">{ins.type}</span></td>
                  <td>
                    <span className={`badge ${config.class}`}>
                      <Icon size={12} style={{ marginRight: 4 }} />
                      {ins.status}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="insp-grid-2">
        {/* Blockchain Verification Demo */}
        <div className="card">
          <div className="card__header">
            <h3 className="card__title">Blockchain Evidence Verification</h3>
          </div>
          <div className="card__body blockchain-demo">
            <p className="blockchain-demo__desc">
              Every inspection photo is hashed with SHA-256 and timestamped on India Chain — making tampering detectable.
            </p>
            <div className="blockchain-demo__flow">
              <div className="blockchain-demo__step">
                <div className="blockchain-demo__step-num">1</div>
                <span>Inspector uploads photo</span>
              </div>
              <div className="blockchain-demo__arrow">→</div>
              <div className="blockchain-demo__step">
                <div className="blockchain-demo__step-num">2</div>
                <span>SHA-256 hash generated</span>
              </div>
              <div className="blockchain-demo__arrow">→</div>
              <div className="blockchain-demo__step">
                <div className="blockchain-demo__step-num">3</div>
                <span>Hash stored on India Chain</span>
              </div>
            </div>

            {!showBlockchain ? (
              <button className="blockchain-demo__btn" onClick={handleVerify}>
                <Hash size={14} /> Simulate Verification
              </button>
            ) : (
              <div className="blockchain-demo__result">
                <div className="blockchain-demo__hash">
                  <span className="blockchain-demo__hash-label">Photo Hash (SHA-256):</span>
                  <code>a7f3c8d2e1b4f6a9...3e2d1c0b9a8f7e6d</code>
                </div>
                <div className="blockchain-demo__hash">
                  <span className="blockchain-demo__hash-label">Blockchain Hash:</span>
                  {hashGenerated ? (
                    <>
                      <code>a7f3c8d2e1b4f6a9...3e2d1c0b9a8f7e6d</code>
                      <span className="badge badge-success" style={{ marginLeft: 8 }}>✓ Match</span>
                    </>
                  ) : (
                    <span className="blockchain-demo__loading">Verifying on India Chain...</span>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Triple Random Assignment */}
        <div className="card">
          <div className="card__header">
            <h3 className="card__title">Triple Random Assignment</h3>
          </div>
          <div className="card__body">
            <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginBottom: 16 }}>
              Three layers of randomization prevent predictability and reduce collusion risk.
            </p>
            <div className="random-assign">
              <div className="random-assign__layer">
                <Shuffle size={16} className="random-assign__icon" />
                <div>
                  <div className="random-assign__title">Random NGO</div>
                  <div className="random-assign__desc">Weighted by risk score</div>
                </div>
              </div>
              <div className="random-assign__connector">↓</div>
              <div className="random-assign__layer">
                <Shuffle size={16} className="random-assign__icon" />
                <div>
                  <div className="random-assign__title">Random Inspector</div>
                  <div className="random-assign__desc">From pool of 5 nearest</div>
                </div>
              </div>
              <div className="random-assign__connector">↓</div>
              <div className="random-assign__layer">
                <Shuffle size={16} className="random-assign__icon" />
                <div>
                  <div className="random-assign__title">Random Time Window</div>
                  <div className="random-assign__desc">Within next 48 hours</div>
                </div>
              </div>
            </div>
            <div className="random-assign__note">
              10% of inspections are randomly re-audited by a different inspector
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
