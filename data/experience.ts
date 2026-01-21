import { Experience } from './types';

export const experiences: Experience[] = [
  {
    id: 'exp-1',
    role: 'Senior Software Engineer',
    company: 'TechCorp Inc.',
    location: 'San Francisco, CA',
    startDate: 'Jan 2023',
    endDate: 'Present',
    description: [
      'Architected and led development of a real-time event processing pipeline handling 2M+ events/day using Kafka and Redis',
      'Reduced API response times by 60% through strategic caching layers and query optimization',
      'Mentored team of 4 junior engineers, establishing code review practices and technical documentation standards',
      'Designed microservices architecture that improved system reliability from 99.5% to 99.95% uptime',
    ],
    techStack: ['TypeScript', 'Node.js', 'PostgreSQL', 'Kafka', 'Redis', 'AWS', 'Docker', 'Kubernetes'],
    type: 'fulltime',
  },
  {
    id: 'exp-2',
    role: 'Software Engineer',
    company: 'StartupXYZ',
    location: 'Remote',
    startDate: 'Jun 2021',
    endDate: 'Dec 2022',
    description: [
      'Built full-stack features for a B2B SaaS platform serving 500+ enterprise clients',
      'Implemented OAuth 2.0 authentication system with SSO integration for major identity providers',
      'Developed real-time collaboration features using WebSockets, enabling concurrent editing for 50+ users',
      'Created comprehensive API documentation and SDK that reduced customer integration time by 40%',
    ],
    techStack: ['React', 'TypeScript', 'Python', 'FastAPI', 'PostgreSQL', 'Redis', 'WebSocket', 'GCP'],
    type: 'fulltime',
  },
  {
    id: 'exp-3',
    role: 'Backend Developer',
    company: 'DataSystems Ltd.',
    location: 'Austin, TX',
    startDate: 'Aug 2019',
    endDate: 'May 2021',
    description: [
      'Developed RESTful APIs serving mobile and web applications with 100K+ daily active users',
      'Built automated data pipeline for ETL processes, reducing manual data processing time by 80%',
      'Implemented comprehensive logging and monitoring using ELK stack for production debugging',
      'Collaborated with data science team to deploy ML models via REST endpoints',
    ],
    techStack: ['Python', 'Django', 'PostgreSQL', 'Elasticsearch', 'Docker', 'AWS Lambda', 'S3'],
    type: 'fulltime',
  },
  {
    id: 'exp-4',
    role: 'Software Engineering Intern',
    company: 'InnovateTech',
    location: 'Seattle, WA',
    startDate: 'May 2019',
    endDate: 'Aug 2019',
    description: [
      'Developed internal tooling dashboard that streamlined deployment workflows for engineering team',
      'Built automated testing suite that increased code coverage from 45% to 78%',
      'Contributed to open-source projects used by the company, fixing critical bugs and adding features',
    ],
    techStack: ['JavaScript', 'React', 'Node.js', 'MongoDB', 'Jest', 'GitHub Actions'],
    type: 'internship',
  },
];

