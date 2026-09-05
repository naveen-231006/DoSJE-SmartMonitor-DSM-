import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Building2, ClipboardCheck, BarChart3, Shield, ChevronLeft, ChevronRight } from 'lucide-react';
import './Sidebar.css';

const navItems = [
  { path: '/dashboard', label: 'Overview', icon: LayoutDashboard },
  { path: '/dashboard/ngos', label: 'NGO Monitor', icon: Building2 },
  { path: '/dashboard/inspections', label: 'Inspections', icon: ClipboardCheck },
  { path: '/dashboard/analytics', label: 'Analytics', icon: BarChart3 },
  { path: '/dashboard/risk', label: 'Risk Scoring', icon: Shield },
];

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  return (
    <aside className={`sidebar ${collapsed ? 'sidebar--collapsed' : ''}`}>
      <div className="sidebar__header">
        <Link to="/" className="sidebar__logo">
          <div className="sidebar__logo-icon">D</div>
          {!collapsed && <span className="sidebar__logo-text">DSM</span>}
        </Link>
      </div>

      <nav className="sidebar__nav">
        {navItems.map(item => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`sidebar__link ${isActive ? 'sidebar__link--active' : ''}`}
              title={collapsed ? item.label : undefined}
            >
              <Icon size={18} />
              {!collapsed && <span>{item.label}</span>}
            </Link>
          );
        })}
      </nav>

      <button
        className="sidebar__toggle"
        onClick={() => setCollapsed(!collapsed)}
        aria-label="Toggle sidebar"
      >
        {collapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
      </button>
    </aside>
  );
}
