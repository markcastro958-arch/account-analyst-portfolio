# Account Analyst Portfolio

React + Vite + Chart.js + Lucide.

## Run
npm install
npm run dev

## Build
npm run build && npm run preview

## Deploy (Vercel)
1. Push to GitHub.
2. Vercel → Add New Project → import repo (Framework: Vite, Build: npm run build, Output: dist).
3. Deploy.

## Configure
- src/data/profile.js   → name, email, LinkedIn/GitHub, KPIs, responsibilities
- src/data/projects.js  → projects, status, repo/demo links
- src/data/skills.js    → skills + tools (proficiency/status)
- src/data/analytics.js → chart data (sample data — replace with real figures)
- public/resume.pdf     → your resume (button auto-enables when file exists)
- public/images/hero.jpg → optional hero photo (gradient fallback is used if absent)

## Structure
src/components  UI components
src/data        content/config (no component logic)
src/hooks       useTheme, useToast, useCountUp, useActiveSection, useResumeAvailable
src/styles      global.css, dashboard.css, responsive.css