import {
  Home, User, Briefcase, FolderOpen, Settings, Mail,
  FileText, Clock, TrendingUp, Users,
  ClipboardList, Monitor, Truck, Settings as Gear
} from 'lucide-react'

export const PROFILE = {
  name: 'Mark Gil Castro',
  title: 'Account Analyst',
  fullTitle: 'Professional Account Analyst',
  tagline: 'Data-Driven Decisions. Better Operations.',
  quote: 'Numbers tell a story, and I help turn them into better decisions.',
  about:
    'I am a detail-oriented and analytical professional with experience in account analysis, data management, inventory monitoring, logistics support, and operational reporting. I specialize in turning complex data into clear insights, helping teams improve processes, track performance, and achieve goals efficiently.',
  location: 'Banga, South Cotabato, Philippines',
  relocation: 'Open to Relocation (BGC / Manila)',
  education: 'BS Information Technology (in progress)',
  email: 'markcastro958@gmail.com',
  linkedin: '', // e.g. 'https://www.linkedin.com/in/your-handle'
  github: '',   // e.g. 'https://github.com/your-handle'
  resumeUrl: '/resume.pdf',
  resumeName: 'Mark-Gil-Castro-Resume.pdf'
}

export const NAV = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'about', label: 'About Me', icon: User },
  { id: 'experience', label: 'Experience', icon: Briefcase },
  { id: 'projects', label: 'Key Projects', icon: FolderOpen },
  { id: 'skills', label: 'Skills', icon: Settings },
  { id: 'contact', label: 'Contact', icon: Mail }
]

// type 'count' animates to `end`; type 'text' shows text. `sample: true` shows a "Sample value" tag.
export const KPIS = [
  { icon: FileText, title: 'Data Accuracy', type: 'count', end: 100, suffix: '%', sample: true,
    desc: 'Maintained accurate records and reconciliations.' },
  { icon: Clock, title: 'Process Improvement', type: 'count', end: 30, suffix: '%', sample: true,
    desc: 'Streamlined workflows and reduced manual work.' },
  { icon: TrendingUp, title: 'Systems Supported', type: 'count', end: 2, suffix: '+', sample: true,
    desc: 'ERP, inventory, and logistics systems.' },
  { icon: Users, title: 'Collaboration', type: 'text', text: 'Cross-functional',
    desc: 'Worked with operations, logistics, and finance teams.' }
]

export const RESPONSIBILITIES = [
  { icon: ClipboardList, title: 'Inventory & Stock Monitoring', desc: 'Tracking, validation, reporting' },
  { icon: Monitor, title: 'Procurement Support', desc: 'PO updates, supplier coordination' },
  { icon: Truck, title: 'Logistics & Shipping', desc: 'Container arrival, freight coordination' },
  { icon: FileText, title: 'Reporting & Reconciliation', desc: 'Data validation, discrepancy & RMA' },
  { icon: Gear, title: 'System Support', desc: 'ERP (Infor, ComUnion), basic IT support' }
]