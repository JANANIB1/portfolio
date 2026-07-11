export type SkillGroup = {
  id: string;
  label: string;
  ref: string; // Short module index shown in the card header, e.g. M1, M2
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    id: 'programming',
    label: 'Programming',
    ref: 'M1',
    items: ['Java', 'Python', 'JavaScript', 'TypeScript', 'SQL'],
  },
  {
    id: 'frontend',
    label: 'Frontend',
    ref: 'M2',
    items: ['React', 'Tailwind CSS', 'HTML', 'CSS'],
  },
  {
    id: 'backend',
    label: 'Backend',
    ref: 'M3',
    items: ['FastAPI'],
  },
  {
    id: 'databases',
    label: 'Databases',
    ref: 'M4',
    items: ['PostgreSQL', 'MongoDB', 'Supabase'],
  },
  {
    id: 'blockchain',
    label: 'Blockchain',
    ref: 'M5',
    items: ['Solidity', 'Ethereum', 'Hardhat', 'ethers.js', 'MetaMask'],
  },
  {
    id: 'cybersecurity',
    label: 'Cybersecurity',
    ref: 'M6',
    items: [
      'SIEM',
      'SOC Operations',
      'MITRE ATT&CK',
      'Threat Hunting',
      'Incident Response',
      'Security Monitoring',
      'Threat Intelligence',
      'Authentication Security',
    ],
  },
  {
    id: 'tools',
    label: 'Tools',
    ref: 'M7',
    items: ['Git', 'GitHub', 'Postman', 'Vercel', 'Render', 'Chart.js'],
  },
  {
    id: 'core-cs',
    label: 'Core CS',
    ref: 'M8',
    items: [
      'Data Structures',
      'Algorithms',
      'DBMS',
      'Operating Systems',
      'Computer Networks',
      'OOP',
    ],
  },
];
