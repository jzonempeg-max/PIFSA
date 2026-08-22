// Course icons (gold-on-navy SVGs). currentColor = gold.
const svgAttrs = 'width="56" height="56" viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"';

export const COURSES = [
  {
    icon: `<svg ${svgAttrs}><path d="M24 4l14 5v9c0 9-6 16-14 20-8-4-14-11-14-20V9z"/><circle cx="24" cy="21" r="4"/><path d="M24 25v6"/></svg>`,
    title: 'Cyber Security & Investigation',
    desc: 'Master digital forensics, cybercrime investigation, and advanced computer analysis techniques for the modern investigator.',
    items: ['Mobile Device Forensics', 'Computer Analysis', 'Cloud Data Recovery', 'Cyber Threat Assessment'],
  },
  {
    icon: `<svg ${svgAttrs}><rect x="6" y="14" width="36" height="26" rx="2"/><path d="M17 14v-4a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v4"/><path d="M6 26h36"/><path d="M22 26v3h4v-3"/></svg>`,
    title: 'Corporate Intelligence & Investigation',
    desc: 'Business intelligence, corporate background reviews, and asset tracing for corporate clients and investigative firms.',
    items: ['Background Screening', 'Asset Tracing', 'Due Diligence', 'Corporate Integrity'],
  },
  {
    icon: `<svg ${svgAttrs}><circle cx="21" cy="21" r="13"/><path d="M30.5 30.5L42 42"/><path d="M21 15c-2 0-3.5 1.5-3.5 3.5M21 27c3.5 0 5.5-2.5 5.5-6"/></svg>`,
    title: 'Criminal Investigation',
    desc: 'Comprehensive training in criminal case management, evidence handling, and field investigation procedures.',
    items: ['Crime Scene Analysis', 'Evidence Collection', 'Witness Interviews', 'Case Documentation'],
  },
  {
    icon: `<svg ${svgAttrs}><path d="M12 6h16l8 8v20a2 2 0 0 1-2 2H12a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"/><path d="M28 6v8h8"/><circle cx="20" cy="26" r="5"/><path d="M23.5 29.5L28 34"/></svg>`,
    title: 'Fraud Investigation',
    desc: 'Detect, investigate, and document financial fraud, embezzlement, and white-collar crime with proven methodologies.',
    items: ['Fraud Detection', 'Financial Analysis', 'Forensic Accounting', 'Case Building'],
  },
  {
    icon: `<svg ${svgAttrs}><circle cx="24" cy="24" r="4"/><circle cx="24" cy="24" r="11"/><circle cx="24" cy="24" r="18"/><path d="M24 2v8M24 38v8M2 24h8M38 24h8"/></svg>`,
    title: 'Law Enforcement Intelligence',
    desc: 'Strategic and tactical intelligence gathering, analysis, and operational planning for law enforcement professionals.',
    items: ['Intelligence Gathering', 'Threat Analysis', 'Surveillance', 'Operational Planning'],
  },
  {
    icon: `<svg ${svgAttrs}><path d="M20 6l6 4-8 12-6-4z"/><path d="M18 22l-6 10c-1 2 0 4 2 5l4 2"/><circle cx="30" cy="34" r="8"/><path d="M30 30v8M26 34h8"/></svg>`,
    title: 'Digital Forensic Examination',
    desc: 'Advanced digital evidence collection, analysis, and expert testimony preparation for digital crime investigations.',
    items: ['Evidence Preservation', 'Data Recovery', 'Timeline Analysis', 'Expert Testimony'],
  },
];

export const TEAM = [
  {
    initials: 'DR', badge: 'Leadership', name: 'Dr. Ramon Santos', role: 'Executive Director',
    bio: '30+ years in law enforcement and criminal investigation. Former PNP Chief Investigator with extensive expertise in complex case management.',
    tags: ['Criminal Investigation', 'Case Management'],
  },
  {
    initials: 'MA', badge: 'Curriculum', name: 'Maria Alvarez', role: 'Head of Curriculum',
    bio: 'International forensic training specialist. Expert in digital forensics and cyber investigation with certifications from leading institutions.',
    tags: ['Digital Forensics', 'Cyber Investigation'],
  },
  {
    initials: 'JL', badge: 'Instruction', name: 'James Liu', role: 'Senior Instructor',
    bio: 'Certified fraud investigator with 20+ years corporate and financial crime expertise. Published author in investigative sciences.',
    tags: ['Fraud Investigation', 'Financial Crime'],
  },
];

export const PROCESS_STEPS = [
  { t: 'Get in touch', tag: 'Getting Started', d: 'Reach out with your goals and the certification you are aiming for. We take the time to understand your background and point you to the right program.', icon: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M42 32v6a4 4 0 0 1-4 4c-16 0-30-14-30-30a4 4 0 0 1 4-4h6l3 9-4 3a20 20 0 0 0 10 10l3-4z"/></svg>' },
  { t: 'Assess and enroll', tag: 'Planning', d: 'We review your experience, map out the right course track, and get you enrolled with a clear plan for what lies ahead.', icon: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M14 6h20l8 8v28a2 2 0 0 1-2 2H14a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"/><path d="M34 6v8h8"/><path d="M19 26l4 4 8-8"/></svg>' },
  { t: 'Train with experts', tag: 'Development', d: 'Learn from experienced investigators and forensic professionals through hands-on modules, real case studies, and practical exercises.', icon: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M24 6l18 8-18 8-18-8z"/><path d="M12 19v10c0 3 6 6 12 6s12-3 12-6V19"/><path d="M42 14v10"/></svg>' },
  { t: 'Get certified', tag: 'Completion', d: 'Complete your assessments, earn your industry-recognized certification, and join a network of trained investigative professionals.', icon: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><circle cx="24" cy="18" r="12"/><path d="M17 28l-3 14 10-5 10 5-3-14"/><path d="M19 18l3 3 6-6"/></svg>' },
];

export const GALLERY = [
  { src: 'images/gallery-1.jpg', cap: 'Training seminar in session' },
  { src: 'images/gallery-2.jpg', cap: 'Certificate ceremony' },
  { src: 'images/gallery-3.jpg', cap: 'Partnership signing' },
  { src: 'images/gallery-4.jpg', cap: 'Cybercrime workshop' },
  { src: 'images/gallery-5.jpg', cap: 'Fraud investigation session' },
  { src: 'images/gallery-6.jpg', cap: 'Forensic training' },
  { src: 'images/gallery-7.jpg', cap: 'Investigative interviewing' },
  { src: 'images/gallery-8.jpg', cap: 'Hands-on lab work' },
  { src: 'images/gallery-9.jpg', cap: 'Group certification' },
  { src: 'images/gallery-10.jpg', cap: 'Expert-led lecture' },
  { src: 'images/gallery-11.jpg', cap: 'Practical exercise' },
  { src: 'images/gallery-12.jpg', cap: 'Seminar attendees' },
  { src: 'images/gallery-13.jpg', cap: 'Academy event' },
];

export const HERO_PILLS = [
  'Cyber Security & Investigation', 'Digital Forensic Examination', 'Fraud Investigation',
  'Corporate Intelligence', 'Law Enforcement Intelligence', 'Criminal Investigation',
  'Evidence Collection', 'Cyber Threat Assessment', 'Due Diligence',
];

export const ABOUT_STATS = [
  { target: 500, suffix: '+', label: 'Trained Professionals' },
  { target: 8, suffix: '', label: 'Specialized Courses' },
  { target: 15, suffix: '+', label: 'Years in Service' },
  { target: 95, suffix: '%', label: 'Graduate Satisfaction' },
];

export const TEAM_STATS = [
  { target: 15, suffix: '+', label: 'Years training investigators' },
  { target: 40, suffix: '+', label: 'Expert instructors and mentors' },
  { target: 7, suffix: '', label: 'Accredited certification tracks' },
  { target: 100, suffix: '%', label: 'Practitioner-led curriculum' },
];
