export type ExperienceItem = {
  id: string;
  role: string;
  org: string;
  place: string;
  period: string;
  points: string[];
};

export const experience: ExperienceItem[] = [
  {
    id: 'ced-au',
    role: 'Student Intern',
    org: 'Centre for Entrepreneurship Development',
    place: 'Anna University',
    period: 'May 2025 – June 2025',
    points: [
      'Applied Design Thinking methodologies to validate startup ideas.',
      'Conducted market research and feasibility analysis.',
      'Collaborated with multidisciplinary teams.',
      'Presented validated concepts to faculty mentors.',
    ],
  },
];

export type Certification = {
  id: string;
  name: string;
  issuer: string;
};

export const certifications: Certification[] = [
  { id: 'isc2-cc', name: 'Certified in Cybersecurity (CC)', issuer: 'ISC2' },
  { id: 'ceh', name: 'Certified Ethical Hacker (CEH)', issuer: 'EC-Council' },
  { id: 'fca', name: 'Fortinet Certified Associate in Cybersecurity', issuer: 'Fortinet' },
  { id: 'fcf', name: 'Fortinet Certified Fundamentals in Cybersecurity', issuer: 'Fortinet' },
  { id: 'ibm-sec', name: 'Cybersecurity Fundamentals', issuer: 'IBM' },
  { id: 'ibm-sql', name: 'SQL and Relational Databases 101', issuer: 'IBM' },
  { id: 'mongo-intro', name: 'Introduction to MongoDB for Students', issuer: 'MongoDB' },
];
