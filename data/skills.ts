import { SkillCategory } from './types';

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    name: 'Languages',
    icon: 'code',
    skills: ['Python', 'Go', 'Java', 'JavaScript', 'TypeScript', 'SQL'],
  },
  {
    id: 'backend',
    name: 'Backend & APIs',
    icon: 'server',
    skills: ['FastAPI', 'Flask', 'Django', 'Spring Boot', 'Node.js', 'REST APIs'],
  },
  {
    id: 'frontend',
    name: 'Frontend',
    icon: 'layout',
    skills: ['React', 'Angular', 'HTML/CSS', 'Tailwind CSS', 'Bootstrap'],
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
    skills: ['AWS (EC2, ECS, ECR, SQS, S3, RDS, Lambda)', 'Docker', 'Kubernetes', 'Terraform', 'CI/CD', 'Linux'],
  },
  {
    id: 'tools',
    name: 'Tools & Practices',
    icon: 'wrench',
    skills: ['Git', 'Github Actions', 'OpenAI API', 'DialogFlow', 'Agile', 'Typesense'],
  },
];
