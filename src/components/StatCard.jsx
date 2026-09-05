import './StatCard.css';

export default function StatCard({ label, value, sub, icon: Icon, color = 'var(--accent)' }) {
  return (
    <div className="stat-card">
      <div className="stat-card__top">
        <span className="stat-card__label">{label}</span>
        {Icon && (
          <div className="stat-card__icon" style={{ color }}>
            <Icon size={18} />
          </div>
        )}
      </div>
      <div className="stat-card__value">{value}</div>
      {sub && <div className="stat-card__sub">{sub}</div>}
      <div className="stat-card__bar" style={{ background: color }} />
    </div>
  );
}
