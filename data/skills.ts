import { SkillCategory } from './types';

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    name: 'Languages',
    icon: 'code',
    skills: ['TypeScript', 'Python', 'JavaScript', 'Go', 'Rust', 'SQL'],
  },
  {
    id: 'backend',
    name: 'Backend & APIs',
    icon: 'server',
    skills: ['Node.js', 'FastAPI', 'Django', 'Express.js', 'GraphQL', 'REST APIs'],
  },
  {
    id: 'frontend',
    name: 'Frontend',
    icon: 'layout',
    skills: ['React', 'Next.js', 'Tailwind CSS', 'Vue.js', 'HTML/CSS', 'Framer Motion'],
  },
  {
    id: 'databases',
    name: 'Databases',
    icon: 'database',
    skills: ['PostgreSQL', 'Redis', 'MongoDB', 'Elasticsearch', 'TimescaleDB'],
  },
  {
    id: 'cloud',
    name: 'Cloud & DevOps',
    icon: 'cloud',
    skills: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'CI/CD', 'GCP'],
  },
  {
    id: 'tools',
    name: 'Tools & Practices',
    icon: 'wrench',
    skills: ['Git', 'Linux', 'Testing', 'Agile/Scrum', 'System Design'],
  },
];
