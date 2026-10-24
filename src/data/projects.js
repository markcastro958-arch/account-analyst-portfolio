export const STATUS = {
  implemented: 'Implemented',
  development: 'In development',
  conceptual: 'Conceptual'
}

export const CATEGORIES = ['All', 'Inventory', 'Fleet', 'Automation', 'Analytics']

// github / demo: leave null until a real public URL exists.
export const PROJECTS = [
  {
    id: 'feed-silo',
    name: 'Feed Silo Inventory Web App',
    category: 'Inventory',
    status: 'development',
    thumb: 'dashboard',
    summary: 'Monitors silo inventory, tracks receiving and withdrawal, and provides real-time stock levels with alerts and reports.',
    tags: ['Inventory', 'Google Apps Script', 'Dashboard'],
    overview: 'An inventory monitoring system designed to track feed receiving, withdrawals, stock balances, and estimated stock coverage.',
    problem: 'Feed receiving and withdrawals were recorded across separate sheets, making current silo balances and remaining coverage slow to confirm.',
    solution: 'A web app on top of Google Sheets that records receiving and withdrawal transactions, recalculates silo balances, and estimates how many days of stock remain.',
    features: ['Receiving and withdrawal transactions', 'Inventory balance monitoring', 'Feed stock coverage calculations', 'Inventory reports and alerts'],
    tech: ['Google Apps Script', 'Google Sheets', 'JavaScript', 'HTML and CSS'],
    results: null,
    github: null,
    demo: null
  },
  {
    id: 'fleet',
    name: 'Fleet Monitoring & Scheduling',
    category: 'Fleet',
    status: 'development',
    thumb: 'map',
    summary: 'Tracks vehicle status, schedules trips, calculates ETA, and monitors fuel efficiency and maintenance.',
    tags: ['Fleet', 'Scheduling', 'Google Apps Script'],
    overview: 'A vehicle monitoring solution designed to organize fleet availability, maintenance activities, and delivery schedules.',
    problem: 'Vehicle availability, repair status, and trip schedules were tracked manually, which made scheduling conflicts and downtime hard to spot.',
    solution: 'A web app that keeps a live vehicle status list, schedules trips, and reports on maintenance and fuel use from a single data source.',
    features: ['Vehicle availability tracking', 'Maintenance monitoring', 'Vehicle scheduling', 'Estimated time of arrival monitoring', 'Fuel consumption reporting'],
    tech: ['Google Apps Script', 'Google Sheets', 'JavaScript', 'HTML and CSS'],
    results: null,
    github: null,
    demo: null
  },
  {
    id: 'automation',
    name: 'n8n Automation Workflow',
    category: 'Automation',
    status: 'conceptual',
    thumb: 'flow',
    summary: 'Automates scheduling, vehicle conflict checking, and passenger display integration from form submissions.',
    tags: ['Automation', 'n8n', 'Google Sheets'],
    overview: 'An automation concept for reducing manual data entry and improving the flow of operational information.',
    problem: 'Operational data is re-typed between forms and spreadsheets, which costs time and introduces errors.',
    solution: 'A workflow that takes form submissions, validates them, updates spreadsheets automatically, and triggers scheduled follow-ups.',
    features: ['Form-based data collection', 'Data validation', 'Automated spreadsheet updates', 'Workflow and scheduling automation'],
    tech: ['n8n', 'Google Sheets', 'JavaScript', 'Webhooks (where applicable)'],
    results: null,
    github: null,
    demo: null
  },
  {
    id: 'analytics',
    name: 'Inventory & Delivery Analytics',
    category: 'Analytics',
    status: 'conceptual',
    thumb: 'sheet',
    summary: 'Tracks stock levels, deliveries, and performance using pivot tables and visual reports.',
    tags: ['Analytics', 'Pivot Table', 'Reporting'],
    overview: 'An analytics dashboard concept for organizing inventory movements, operational records, and delivery performance.',
    problem: 'Inventory movement and delivery records exist in raw form, so performance trends take manual work to summarize.',
    solution: 'A dashboard that summarizes movements with pivot-style reports and charts, with printable output.',
    features: ['Inventory movement summaries', 'Pivot-style reports', 'Delivery analysis', 'Performance charts', 'Printable reports'],
    tech: ['Google Sheets', 'JavaScript', 'Chart.js', 'Data visualization'],
    results: null,
    github: null,
    demo: null
  }
]