# Sam Parr Content Dashboard

## Project Overview
A content analysis dashboard for Sam Parr's social media coordinator application. This tool demonstrates ability to analyze content, identify remix opportunities, and provide actionable insights for cross-platform distribution.

## Development Workflow

**Always use `bun`, not `npm`.**

### 1. Make changes
Write code, add features, fix bugs

### 2. Test locally
```bash
bun run dev
```

### 3. Build for production
```bash
bun run build
```

### 4. Preview production build
```bash
bun run preview
```

## Tech Stack
- **Framework**: React 18 with Vite
- **Styling**: Tailwind CSS (Hampton brand colors configured)
- **Charts**: Chart.js for data visualization
- **Deployment**: Vercel (for live demo)
- **Package Manager**: Bun

## Design System

### Colors (Hampton Brand)
```css
--hampton-primary: #032224   /* Primary background */
--hampton-secondary: #d1bfae /* Buttons, accents */
--hampton-text: #1e1e1e      /* Body text */
```

### Typography
- **Headlines**: Financierdisplay, sans-serif
- **Body**: Neuemontreal, sans-serif
- **Fallbacks**: System fonts for performance

### Design Tools
- Use **pencil.dev** for component scaffolding
- Reference Hampton website for authentic brand feel
- Keep design clean, data-focused, professional

## Project Structure
```
sam-parr-dashboard/
├── src/
│   ├── components/     # React components
│   ├── data/          # Mock data for demo
│   ├── utils/         # Helper functions
│   ├── App.jsx        # Main app component
│   └── main.jsx       # Entry point
├── public/            # Static assets
├── CLAUDE.md          # This file
└── package.json       # Dependencies
```

## Key Features to Build

### 1. Content Overview Dashboard
- Total posts across platforms
- Engagement metrics (likes, comments, shares)
- Best performing content types
- Posting frequency visualization

### 2. Platform Comparison
- Twitter vs Instagram vs Blog performance
- Engagement rates by platform
- Content type distribution

### 3. Remix Opportunity Detector
- Identify high-performing blog posts that haven't been social content
- Show Moneywise episodes with untapped quote potential
- Suggest content gaps (days without posts)

### 4. Content Calendar View
- Next 30 days proposed content
- Episode-driven content strategy
- Cross-platform coordination

### 5. Sample Content Generator
- Show 3-5 ready-to-post examples
- Visual mockups of tweets, carousels, quotes
- Demonstrate understanding of Sam's voice

## Development Guidelines

### Component Organization
- One component per file
- Keep components small and focused
- Use descriptive names (e.g., `PlatformComparisonChart.jsx`)

### State Management
- Use React hooks (useState, useEffect)
- Keep state local when possible
- Lift state up only when needed

### Data Structure
Mock data should represent:
- Recent tweets (last 20)
- Instagram posts (last 10)
- Blog posts (last 5 Moneywise episodes)
- Engagement metrics for each

### Code Style
- Use functional components
- Prefer const over let
- Use arrow functions
- Add comments for complex logic

## Testing Checklist
- [ ] All charts render correctly
- [ ] Responsive on mobile, tablet, desktop
- [ ] Data updates reflect in visualizations
- [ ] No console errors
- [ ] Fast load time (<3 seconds)
- [ ] Brand colors match Hampton exactly
- [ ] Typography loads properly

## Deployment
1. Build: `bun run build`
2. Test build: `bun run preview`
3. Deploy to Vercel
4. Share live link in application

## Common Issues & Solutions

### Fonts not loading
- Check Google Fonts link in index.html
- Verify font names in Tailwind config
- Add fallback fonts

### Charts not rendering
- Ensure Chart.js is imported correctly
- Check data format (labels must match dataset)
- Verify canvas element exists

### Build errors
- Run `bun install` to ensure dependencies
- Check for unused imports
- Verify all files are in correct directories

## Project Timeline (Today - EOD)

**Phase 1: Setup (30 min)**
- Initialize Vite + React + Tailwind
- Configure Hampton brand colors
- Set up font imports

**Phase 2: Core Dashboard (2 hours)**
- Build main layout with sections
- Create mock data structure
- Implement platform comparison chart
- Add engagement metrics cards

**Phase 3: Remix Detector (1 hour)**
- Identify untapped content
- Show remix opportunities
- Display content gaps

**Phase 4: Sample Content (1 hour)**
- Generate 3-5 ready-to-post examples
- Create visual mockups
- Show understanding of Sam's voice

**Phase 5: Polish & Deploy (30 min)**
- Responsive testing
- Final design tweaks
- Deploy to Vercel
- Test live site

## Success Criteria
✅ Dashboard shows clear content insights
✅ Remix opportunities are actionable and specific
✅ Sample content demonstrates understanding
✅ Design matches Hampton brand perfectly
✅ Live demo URL works flawlessly
✅ Tool showcases both technical and strategic skills