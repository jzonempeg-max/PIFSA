import { useEffect, useState } from 'react';
import { supabase, isSupabaseConfigured } from '../../lib/supabase.js';

const STAGES = ['Prospect', 'Lead', 'Valid Lead', 'Applicant', 'Admitted', 'Enrollee'];

// Sample rows so the CRM is visible before Supabase is connected.
const SAMPLE = [
  { id: 1, full_name: 'Sample Prospect', email: 'prospect@example.com', preferred_course: 'Criminal Investigation', stage: 'Prospect', source: 'landing_page' },
  { id: 2, full_name: 'Sample Lead', email: 'lead@example.com', preferred_course: 'Cyber Security & Investigation', stage: 'Lead', source: 'landing_page' },
  { id: 3, full_name: 'Sample Applicant', email: 'applicant@example.com', preferred_course: 'Fraud Investigation', stage: 'Applicant', source: 'referral' },
];

export default function CRM() {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('All');
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    let active = true;
    const load = async () => {
      if (!isSupabaseConfigured) {
        setLeads(SAMPLE);
        setLoading(false);
        return;
      }
      const { data, error } = await supabase
        .from('leads')
        .select('*')
        .order('created_at', { ascending: false });
      if (!active) return;
      if (error) {
        setLeads(SAMPLE);
      } else {
        setLeads(data || []);
        setConnected(true);
      }
      setLoading(false);
    };
    load();
    return () => { active = false; };
  }, []);

  const updateStage = async (id, stage) => {
    setLeads((ls) => ls.map((l) => (l.id === id ? { ...l, stage } : l)));
    if (isSupabaseConfigured && connected) {
      await supabase.from('leads').update({ stage }).eq('id', id);
    }
  };

  const counts = STAGES.reduce((acc, s) => {
    acc[s] = leads.filter((l) => l.stage === s).length;
    return acc;
  }, {});

  const shown = filter === 'All' ? leads : leads.filter((l) => l.stage === filter);

  if (loading) return <div className="panel-loading">Loading leads…</div>;

  return (
    <div>
      {!connected && (
        <div className="notice">
          Showing sample data. Connect Supabase (a <code>leads</code> table) to see live enrollment leads.
        </div>
      )}

      {/* Funnel */}
      <div className="funnel">
        {STAGES.map((s, i) => (
          <div key={s} className={'funnel-stage' + (filter === s ? ' active' : '')} onClick={() => setFilter(filter === s ? 'All' : s)}>
            <div className="funnel-count">{counts[s]}</div>
            <div className="funnel-label">{s}</div>
            {i < STAGES.length - 1 && <div className="funnel-arrow">→</div>}
          </div>
        ))}
      </div>

      {/* Table */}
      <div className="table-head-row">
        <h3>{filter === 'All' ? 'All leads' : filter} <span className="muted">({shown.length})</span></h3>
        {filter !== 'All' && <button className="chip-clear" onClick={() => setFilter('All')}>Clear filter</button>}
      </div>

      <div className="table-wrap">
        <table className="crm-table">
          <thead>
            <tr>
              <th>Name</th><th>Email</th><th>Preferred course</th><th>Source</th><th>Stage</th>
            </tr>
          </thead>
          <tbody>
            {shown.length === 0 && (
              <tr><td colSpan={5} className="empty-row">No leads in this stage yet.</td></tr>
            )}
            {shown.map((l) => (
              <tr key={l.id}>
                <td>{l.full_name}</td>
                <td className="muted">{l.email}</td>
                <td>{l.preferred_course || '—'}</td>
                <td><span className="source-tag">{l.source || 'direct'}</span></td>
                <td>
                  <select className="stage-select" value={l.stage} onChange={(e) => updateStage(l.id, e.target.value)}>
                    {STAGES.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
