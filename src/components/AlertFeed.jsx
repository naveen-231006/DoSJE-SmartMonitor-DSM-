import { AlertTriangle, AlertCircle, Info } from 'lucide-react';
import './AlertFeed.css';

const severityConfig = {
  critical: { icon: AlertCircle, class: 'badge-critical', label: 'Critical' },
  warning: { icon: AlertTriangle, class: 'badge-warning', label: 'Warning' },
  info: { icon: Info, class: 'badge-info', label: 'Info' },
};

export default function AlertFeed({ alerts, limit = 6 }) {
  const displayed = alerts.slice(0, limit);

  return (
    <div className="alert-feed">
      <div className="alert-feed__header">
        <h3 className="alert-feed__title">Recent Alerts</h3>
        <span className="alert-feed__count">{alerts.length} total</span>
      </div>
      <div className="alert-feed__list">
        {displayed.map(alert => {
          const config = severityConfig[alert.severity];
          const Icon = config.icon;
          return (
            <div key={alert.id} className="alert-feed__item">
              <div className="alert-feed__item-icon" style={{ color: `var(--${alert.severity === 'critical' ? 'red' : alert.severity === 'warning' ? 'amber' : 'accent'})` }}>
                <Icon size={14} />
              </div>
              <div className="alert-feed__item-content">
                <div className="alert-feed__item-top">
                  <span className="alert-feed__item-msg">{alert.message}</span>
                  <span className={`badge ${config.class}`}>{config.label}</span>
                </div>
                <div className="alert-feed__item-meta">
                  <span className="mono">{alert.ngo}</span>
                  <span>·</span>
                  <span>{alert.time}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
