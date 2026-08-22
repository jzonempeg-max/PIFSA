import { useState } from 'react';
import { supabase, isSupabaseConfigured } from '../lib/supabase.js';

const EMPTY = { full_name: '', email: '', contact_number: '', preferred_course: '' };

export default function EnrollForm({ courses = [] }) {
  const [form, setForm] = useState(EMPTY);
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [message, setMessage] = useState('');

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async () => {
    if (!form.full_name.trim() || !form.email.trim()) {
      setStatus('error');
      setMessage('Please enter your name and email.');
      return;
    }
    setStatus('submitting');
    setMessage('');

    if (!isSupabaseConfigured) {
      // No backend wired yet — succeed locally so the UI is testable.
      setStatus('success');
      setMessage('Thanks! Your inquiry has been received. We will be in touch shortly.');
      setForm(EMPTY);
      return;
    }

    // Writes a new lead into the CRM at stage "Prospect".
    const { error } = await supabase.from('leads').insert([{
      full_name: form.full_name.trim(),
      email: form.email.trim(),
      contact_number: form.contact_number.trim(),
      preferred_course: form.preferred_course,
      stage: 'Prospect',
      source: 'landing_page',
    }]);

    if (error) {
      setStatus('error');
      setMessage('Something went wrong submitting your inquiry. Please try again or email us directly.');
      return;
    }
    setStatus('success');
    setMessage('Thanks! Your inquiry has been received. We will be in touch shortly.');
    setForm(EMPTY);
  };

  if (status === 'success') {
    return (
      <div className="form-success">
        <div className="form-success-icon">&#10003;</div>
        <p>{message}</p>
        <button className="submit-btn" onClick={() => setStatus('idle')}>Submit another</button>
      </div>
    );
  }

  return (
    <div className="enroll-form">
      <input className="form-field" placeholder="Full name" value={form.full_name} onChange={set('full_name')} />
      <input className="form-field" type="email" placeholder="Email address" value={form.email} onChange={set('email')} />
      <input className="form-field" placeholder="Contact number" value={form.contact_number} onChange={set('contact_number')} />
      <select className="form-field" value={form.preferred_course} onChange={set('preferred_course')}>
        <option value="">Preferred course</option>
        {courses.map((c) => <option key={c} value={c}>{c}</option>)}
      </select>
      {status === 'error' && <div className="form-error">{message}</div>}
      <button className="submit-btn" onClick={submit} disabled={status === 'submitting'}>
        {status === 'submitting' ? 'Submitting…' : 'Submit Application'}
      </button>
    </div>
  );
}
