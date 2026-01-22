import { SkillCategory } from './types';

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    name: 'Languages',
    icon: 'code',
    skills: ['Python', 'Go', 'Java', 'JavaScript', 'TypeScript', 'SQL'],
  },
  {
    id: 'frameworks',
    name: 'Frameworks',
    icon: 'layers',
    skills: ['React', 'Angular', 'Django'],
  },
  {
    id: 'backend',
    name: 'Backend & APIs',
    icon: 'server',
    skills: ['FastAPI', 'Flask', 'Spring Boot', 'Node.js', 'REST APIs'],
  },
  {
    id: 'frontend',
    name: 'Frontend',
    icon: 'layout',
    skills: ['HTML/CSS', 'Tailwind CSS'],
  },
  {
    id: 'databases',
    name: 'Databases',
    icon: 'database',
    skills: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL'],
  },
  {
    id: 'cloud',
    name: 'Cloud & DevOps',
    icon: 'cloud',
    skills: ['AWS (EC2, RDS, Lambda)', 'Docker', 'CI/CD', 'Linux'],
  },
  {
    id: 'tools',
    name: 'Tools & Practices',
    icon: 'wrench',
    skills: ['Git', 'OAuth 2.0', 'OpenAI API', 'DialogFlow', 'Agile'],
  },
];
