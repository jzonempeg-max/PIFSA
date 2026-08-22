export default function Calendar() {
  return (
    <div className="panel">
      <h3>Marketing Calendar</h3>
      <p className="muted" style={{ marginTop: 8 }}>
        This is where PIFSA's marketing calendar will live — the same structure as the PNTC portal
        (campaigns, content schedule, and enrollment-push milestones). Wire it to a Supabase
        <code> calendar_events </code> table and it will populate here.
      </p>
    </div>
  );
}
