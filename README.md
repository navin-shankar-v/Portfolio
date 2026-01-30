#Portfolio Link - https://navin-shankar-v.github.io/Portfolio/

# Software Engineer Portfolio

A modern, motion-rich portfolio website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion. Features glassmorphism design, animated timeline experience section, and full GitHub Pages compatibility.



## ✨ Features

- **Glassmorphism Design** - Beautiful frosted glass effects with soft shadows and layered depth
- **Rich Animations** - Smooth scroll reveals, hover transitions, and staggered entrances powered by Framer Motion
- **Interactive Timeline** - Animated experience section that tells your career story
- **Responsive Design** - Fully responsive across all device sizes
- **Static Export** - 100% static, deployable to GitHub Pages without any backend
- **Accessible** - Semantic HTML with accessibility best practices
- **TypeScript** - Full type safety throughout the codebase
- **Easy Customization** - Centralized data files for easy content updates

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: GitHub Pages (Static Export)

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── globals.css       # Global styles & glassmorphism utilities
│   ├── layout.tsx        # Root layout with metadata
│   └── page.tsx          # Main page component
├── components/
│   ├── Navigation.tsx    # Fixed navigation bar
│   ├── Hero.tsx          # Hero section with CTA
│   ├── TerminalCard.tsx  # Animated terminal component
│   ├── Skills.tsx        # Skills grid with categories
│   ├── Projects.tsx      # Featured & other projects
│   ├── Experience.tsx    # Timeline-based experience
│   ├── Contact.tsx       # Contact information
│   ├── Footer.tsx        # Footer with links
│   └── SectionDivider.tsx # Decorative section divider
├── data/
│   ├── types.ts          # TypeScript interfaces
│   ├── personal.ts       # Personal info & socials
│   ├── experience.ts     # Work experience entries
│   ├── projects.ts       # Project showcase data
│   └── skills.ts         # Skills by category
├── public/
│   ├── resume.pdf        # Your resume file
│   └── projects/         # Project images
├── next.config.js        # Next.js config (static export)
├── tailwind.config.ts    # Tailwind configuration
└── package.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Customizing Content

### Personal Information

Edit `data/personal.ts` to update your name, role, bio, contact info, and social links:

```typescript
export const personalInfo: PersonalInfo = {
  name: 'Your Name',
  role: 'Your Title',
  tagline: 'Your catchy tagline',
  bio: 'Your professional bio...',
  email: 'your@email.com',
  location: 'Your Location',
  resumeUrl: '/resume.pdf',
  socials: [
    { name: 'GitHub', url: 'https://github.com/you', icon: 'github' },
    // Add more...
  ],
};
```

### Work Experience

Edit `data/experience.ts` to add your work history:

```typescript
export const experiences: Experience[] = [
  {
    id: 'exp-1',
    role: 'Senior Software Engineer',
    company: 'Company Name',
    location: 'City, State',
    startDate: 'Jan 2023',
    endDate: 'Present',
    description: [
      'Achievement or responsibility #1',
      'Achievement or responsibility #2',
    ],
    techStack: ['TypeScript', 'React', 'Node.js'],
    type: 'fulltime', // 'fulltime' | 'contract' | 'internship'
  },
  // Add more experiences...
];
```

### Projects

Edit `data/projects.ts` to showcase your work:

```typescript
export const projects: Project[] = [
  {
    id: 'proj-1',
    title: 'Project Name',
    description: 'Short description',
    longDescription: 'Detailed description for featured projects...',
    techStack: ['React', 'TypeScript', 'Node.js'],
    githubUrl: 'https://github.com/you/project',
    liveUrl: 'https://project-demo.com', // Optional
    image: '/projects/project-image.png',
    featured: true, // Featured projects get larger cards
    category: 'fullstack', // 'fullstack' | 'backend' | 'frontend' | 'devops' | 'api'
  },
  // Add more projects...
];
```

### Skills

Edit `data/skills.ts` to list your technical skills:

```typescript
export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    name: 'Languages',
    icon: 'code', // 'code' | 'server' | 'layout' | 'database' | 'cloud' | 'wrench'
    skills: [
      { name: 'TypeScript', level: 'expert' },
      { name: 'Python', level: 'advanced' },
      { name: 'Go', level: 'intermediate' },
    ],
  },
  // Add more categories...
];
```

### Resume

Replace `public/resume.pdf` with your actual resume file.

### Project Images

Add project screenshots to `public/projects/` and reference them in your project data.

## 📦 Building for Production

### Static Export

Build the static site:

```bash
npm run build
```

This generates a fully static site in the `out/` directory.

### Preview the Build

To preview the production build locally:

```bash
npx serve out
```

## 🌐 GitHub Pages Deployment

### Method 1: GitHub Actions (Recommended)

1. Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: true

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: "20"
          cache: "npm"

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./out

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

2. Go to your repository Settings → Pages
3. Under "Build and deployment", select "GitHub Actions"
4. Push to main branch to trigger deployment

### Method 2: Manual Deployment

1. Build the static site:
   ```bash
   npm run build
   ```

2. Deploy the `out/` folder to GitHub Pages using gh-pages:
   ```bash
   npm install -D gh-pages
   npx gh-pages -d out
   ```

### Custom Domain or Subdirectory

If deploying to `username.github.io/repo-name/` (not root):

1. Update `next.config.js`:
   ```javascript
   const nextConfig = {
     output: 'export',
     trailingSlash: true,
     images: { unoptimized: true },
     basePath: '/repo-name',
     assetPrefix: '/repo-name/',
   };
   ```

2. Rebuild and deploy.

## 🎨 Customizing Styles

### Colors

Modify the color palette in `tailwind.config.ts`:

```typescript
colors: {
  surface: {
    // Neutral tones for backgrounds/text
  },
  accent: {
    coral: '#ff6b6b',    // Primary accent
    peach: '#ffa07a',
    amber: '#f4a261',    // Secondary accent
    mint: '#2dd4bf',
    sky: '#38bdf8',
    violet: '#a78bfa',   // Tertiary accent
  },
},
```

### Glassmorphism Effects

Adjust glass card styles in `app/globals.css`:

```css
.glass-card {
  background: rgba(255, 255, 255, 0.65);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.4);
  box-shadow: /* your shadow values */;
}
```

### Animations

Customize Framer Motion animations in component files by modifying the `variants` objects and `transition` props.

## 📄 License

MIT License - feel free to use this template for your own portfolio!

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit PRs.

---

Built with ❤️ using Next.js & Framer Motion

