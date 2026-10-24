import {
  FileSpreadsheet, Database, Monitor, Terminal, Building2, Boxes,
  Cloud, Code2, Workflow, GitBranch, Triangle, Server
} from 'lucide-react'

// status: 'proficient' | 'learning'  — edit to reflect your real level
export const TECHNICAL_SKILLS = [
  { name: 'Excel (PivotTables, VLOOKUP, Formulas)', status: 'proficient' },
  { name: 'SQL (SELECT, WHERE, JOIN)', status: 'proficient' },
  { name: 'MS Office / Google Workspace', status: 'proficient' },
  { name: 'Windows / Linux', status: 'proficient' },
  { name: 'Basic Networking (TCP/IP, DNS, DHCP, VLAN, VPN)', status: 'proficient' },
  { name: 'Hardware & Software Installation', status: 'proficient' },
  { name: 'Service Desk / Remote Support (TeamViewer, AnyDesk)', status: 'proficient' },
  { name: 'ERP / Inventory (Infor, ComUnion, SAP, NetSuite)', status: 'proficient' },
  { name: 'Data Reconciliation', status: 'proficient' },
  { name: 'Reporting & Analytics', status: 'proficient' },
  { name: 'HTML5', status: 'proficient' },
  { name: 'CSS3', status: 'proficient' },
  { name: 'JavaScript', status: 'proficient' },
  { name: 'Google Apps Script', status: 'proficient' },
  { name: 'React', status: 'learning' },
  { name: 'Chart.js', status: 'learning' },
  { name: 'Workflow Automation', status: 'learning' }
]

export const SOFT_SKILLS = [
  'Analytical Thinking', 'Problem Solving', 'Attention to Detail',
  'Communication', 'Time Management', 'Team Collaboration', 'Process Improvement'
]

// use: 'professional' | 'learning'
export const TOOLS = [
  { name: 'Excel', icon: FileSpreadsheet, color: '#16a34a', use: 'professional' },
  { name: 'SQL', icon: Database, color: '#2563eb', use: 'professional' },
  { name: 'Windows', icon: Monitor, color: '#0ea5e9', use: 'professional' },
  { name: 'Linux', icon: Terminal, color: '#f59e0b', use: 'professional' },
  { name: 'SAP', icon: Building2, color: '#0a6ed1', use: 'professional' },
  { name: 'NetSuite', icon: Boxes, color: '#1e3a5f', use: 'professional' },
  { name: 'Google Workspace', icon: Cloud, color: '#ea4335', use: 'professional' },
  { name: 'ERP Systems', icon: Server, color: '#475569', use: 'professional' },
  { name: 'Apps Script', icon: Code2, color: '#4285f4', use: 'professional' },
  { name: 'n8n', icon: Workflow, color: '#ea4b71', use: 'learning' },
  { name: 'GitHub', icon: GitBranch, color: '#64748b', use: 'learning' },
  { name: 'Vercel', icon: Triangle, color: '#0f172a', use: 'learning' }
]