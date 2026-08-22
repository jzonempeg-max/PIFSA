import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../lib/AuthContext.jsx';
import '../styles/portal.css';
import CRM from '../components/portal/CRM.jsx';
import Dashboard from '../components/portal/Dashboard.jsx';
import Calendar from '../components/portal/Calendar.jsx';

const TABS = [
  { id: 'dashboard', label: 'Enrollment Reports', icon: '\u25A6' },
  { id: 'crm', label: 'Enrollment CRM', icon: '\u2637' },
  { id: 'calendar', label: 'Marketing Calendar', icon: '\u25A4' },
];

export default function Portal() {
  const [tab, setTab] = useState('dashboard');
  const [navOpen, setNavOpen] = useState(false);
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const logout = async () => { await signOut(); navigate('/'); };

  return (
    <div className="portal">
      <aside className={'portal-side' + (navOpen ? ' open' : '')}>
        <div className="portal-brand">
          <img src="images/logo.png" alt="PIFSA" />
          <div>
            <div className="portal-brand-name">PIFSA</div>
            <div className="portal-brand-sub">Marketing Portal</div>
          </div>
        </div>
        <nav className="portal-nav">
          {TABS.map((t) => (
            <button key={t.id} className={'portal-nav-item' + (tab === t.id ? ' active' : '')}
              onClick={() => { setTab(t.id); setNavOpen(false); }}>
              <span className="portal-nav-icon">{t.icon}</span>{t.label}
            </button>
          ))}
        </nav>
        <div className="portal-user">
          <div className="portal-user-email">{user?.email}</div>
          <button className="portal-signout" onClick={logout}>Sign out</button>
        </div>
      </aside>

      <div className="portal-main">
        <header className="portal-top">
          <button className="portal-hamburger" onClick={() => setNavOpen((v) => !v)} aria-label="Menu">
            <span></span><span></span><span></span>
          </button>
          <h1>{TABS.find((t) => t.id === tab)?.label}</h1>
        </header>
        <div className="portal-content">
          {tab === 'dashboard' && <Dashboard />}
          {tab === 'crm' && <CRM />}
          {tab === 'calendar' && <Calendar />}
        </div>
      </div>
      {navOpen && <div className="portal-backdrop" onClick={() => setNavOpen(false)} />}
    </div>
  );
}
