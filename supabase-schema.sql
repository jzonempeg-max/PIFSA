-- PIFSA Portal — Supabase schema
-- Run this in Supabase → SQL Editor.

-- Leads table (enrollment CRM)
create table if not exists public.leads (
  id bigint generated always as identity primary key,
  created_at timestamptz not null default now(),
  full_name text not null,
  email text not null,
  contact_number text,
  preferred_course text,
  stage text not null default 'Prospect'
    check (stage in ('Prospect','Lead','Valid Lead','Applicant','Admitted','Enrollee')),
  source text default 'landing_page',
  notes text
);

-- Enable Row Level Security
alter table public.leads enable row level security;

-- Anyone (anon) can INSERT a lead from the public landing form.
create policy "anon can submit leads"
  on public.leads for insert
  to anon
  with check (true);

-- Only authenticated portal users can read / update leads.
create policy "authed can read leads"
  on public.leads for select
  to authenticated
  using (true);

create policy "authed can update leads"
  on public.leads for update
  to authenticated
  using (true);

-- (Optional) Marketing calendar events
create table if not exists public.calendar_events (
  id bigint generated always as identity primary key,
  created_at timestamptz not null default now(),
  title text not null,
  event_date date not null,
  category text,
  notes text
);
alter table public.calendar_events enable row level security;
create policy "authed manage calendar"
  on public.calendar_events for all
  to authenticated
  using (true) with check (true);
