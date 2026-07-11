export type Project = {
  id: string;
  name: string;
  tagline: string;
  status: 'featured' | 'building' | 'complete';
  stack: string[];
  overview: string;
  features?: { group: string; items: string[] }[];
  concepts?: string[];
  challenges?: string[];
  github?: string;
  demo?: string;
  accent: 'accent' | 'signal';
};

export const projects: Project[] = [
  {
    id: 'cybershield',
    name: 'CyberShield',
    tagline: 'SIEM-Inspired SOC Monitoring Platform',
    status: 'featured',
    accent: 'signal',
    stack: ['Python', 'Flask', 'SQLite', 'HTML', 'CSS', 'JavaScript', 'Chart.js'],
    overview:
      'A SIEM-inspired Security Operations Center platform that simulates how analysts monitor, investigate, and respond to security events — from event collection and rule-based detection through investigation, incident management, threat intelligence enrichment, timeline reconstruction, and automated PDF reporting.',
    features: [
      {
        group: 'Detection',
        items: [
          'Brute-force login detection',
          'TCP port scan detection',
          'Severity & risk scoring',
          'MITRE ATT&CK mapping',
        ],
      },
      {
        group: 'SOC Dashboard',
        items: [
          'Live security posture',
          'Threat trend visualization',
          'Risk distribution',
          'Repeat-offender IP tracking',
        ],
      },
      {
        group: 'Investigation',
        items: [
          'Alert evidence & correlation',
          'Analyst recommendations',
          'Incident lifecycle & assignment',
          'Chronological timeline reconstruction',
        ],
      },
      {
        group: 'Intelligence',
        items: [
          'Local IOC database',
          'Malicious IP / username detection',
          'Threat hunting across events, alerts, incidents',
          'Executive-summary PDF incident reports',
        ],
      },
    ],
    concepts: [
      'MITRE ATT&CK',
      'SOC Operations',
      'SIEM',
      'Threat Hunting',
      'Incident Response',
      'IOC Analysis',
      'Alert Correlation',
      'Digital Investigation',
    ],
    challenges: [
      'Designed a modular detection engine for brute-force and reconnaissance activity.',
      'Correlated authentication events, alerts, and incidents into one investigation workflow.',
      'Built a full incident lifecycle — assignment, notes, timeline, status tracking.',
      'Integrated local threat intelligence for IOC enrichment with a complete audit trail.',
      'Generated professional PDF incident reports directly from investigation data.',
    ],
    github: 'https://github.com/JANANIB1/CyberShield',
    demo: '#',
  },
  {
    id: 'resumeiq',
    name: 'ResumeIQ',
    tagline: 'AI-Powered Resume Analysis & Interview Platform',
    status: 'building',
    accent: 'accent',
    stack: ['React', 'FastAPI', 'Gemini API', 'Supabase', 'PostgreSQL'],
    overview:
      'An AI-powered platform that analyzes resumes against job descriptions to generate ATS compatibility scores, executive summaries, personalized improvement suggestions, and placement predictions using Gemini AI.',
    features: [
      {
        group: 'Core',
        items: [
          'ATS compatibility scoring',
          'AI resume feedback',
          'Executive summaries',
          'Placement prediction',
          'Authentication',
          'Responsive dashboard',
        ],
      },
    ],
    github: undefined,
  },
  {
    id: 'truetrace',
    name: 'TrueTrace',
    tagline: 'Blockchain Product Verification System',
    status: 'complete',
    accent: 'accent',
    stack: ['React', 'TypeScript', 'Solidity', 'Ethereum', 'Hardhat', 'ethers.js', 'MetaMask'],
    overview:
      'A blockchain-powered verification platform that lets manufacturers and consumers securely register and verify product authenticity using Ethereum smart contracts.',
    features: [
      {
        group: 'Core',
        items: [
          'Product registration',
          'Ownership verification',
          'MetaMask integration',
          'Tamper-resistant verification',
          'Smart contracts',
        ],
      },
    ],
    github: 'https://github.com/JANANIB1/TrueTrace'
  },
  {
    id: 'vaulttrack',
    name: 'VaultTrack',
    tagline: 'AI Personal Finance Dashboard',
    status: 'complete',
    accent: 'signal',
    stack: ['React', 'FastAPI', 'PostgreSQL', 'Supabase', 'Dialogflow ES', 'Resend API'],
    overview:
      'A personal finance dashboard that analyzes transaction data, categorizes spending, tracks financial trends, and generates intelligent insights using AI.',
      github: 'https://github.com/JANANIB1/VaultTrack'
  },

  
];
