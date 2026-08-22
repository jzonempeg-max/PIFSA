import { useEffect, useState } from 'react';
import { supabase, isSupabaseConfigured } from '../../lib/supabase.js';

const STAGES = ['Prospect', 'Lead', 'Valid Lead', 'Applicant', 'Admitted', 'Enrollee'];

export default function Dashboard() {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    const load = async () => {
      if (!isSupabaseConfigured) { setLoading(false); return; }
      const { data, error } = await supabase.from('leads').select('*');
      if (!error) { setLeads(data || []); setConnected(true); }
      setLoading(false);
    };
    load();
  }, []);

  if (loading) return <div className="panel-loading">Loading…</div>;

  const total = leads.length;
  const enrollees = leads.filter((l) => l.stage === 'Enrollee').length;
  const applicants = leads.filter((l) => l.stage === 'Applicant').length;
  // Conversion = enrollees / total leads (PNTC formula: total leads vs enrollees)
  const conversion = total ? ((enrollees / total) * 100).toFixed(1) : '0.0';
  const lostRate = total ? (((total - enrollees - applicants) / total) * 100).toFixed(1) : '0.0';

  const kpis = [
    { label: 'Total Leads', value: total },
    { label: 'Enrollees', value: enrollees },
    { label: 'Conversion Rate', value: `${conversion}%` },
    { label: 'Lost Rate', value: `${lostRate}%` },
  ];

  const byStage = STAGES.map((s) => ({ stage: s, count: leads.filter((l) => l.stage === s).length }));
  const max = Math.max(1, ...byStage.map((b) => b.count));

  return (
    <div>
      {!connected && (
        <div className="notice">
          Connect Supabase to populate these dashboards with live enrollment data. Targets and formulas mirror the PNTC portal.
        </div>
      )}
      <div className="kpi-grid">
        {kpis.map((k) => (
          <div className="kpi-card" key={k.label}>
            <div className="kpi-value">{k.value}</div>
            <div className="kpi-label">{k.label}</div>
          </div>
        ))}
      </div>

      <div className="panel">
        <h3>Leads by stage</h3>
        <div className="bar-chart">
          {byStage.map((b) => (
            <div className="bar-row" key={b.stage}>
              <div className="bar-label">{b.stage}</div>
              <div className="bar-track"><div className="bar-fill" style={{ width: `${(b.count / max) * 100}%` }} /></div>
              <div className="bar-count">{b.count}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
