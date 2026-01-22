import { Experience } from './types';

export const experiences: Experience[] = [
  {
    id: 'exp-1',
    role: 'Software Engineer Intern',
    company: 'IpserLab',
    location: 'California, USA',
    startDate: 'Jan 2025',
    endDate: 'Jul 2025',
    description: [
      'Developed backend services for a rental application using Python and Flask with PostgreSQL-backed to support listing, availability, and booking workflows, reducing request processing time by 35%',
      'Diagnosed performance bottlenecks in search and booking APIs by analyzing request logs and execution paths, optimizing critical endpoints to improve response consistency under concurrent user traffic',
      'Containerized backend services using Docker to standardize local and production environments while prototyping AI-assisted features via external AI APIs, enabling reproducible builds and controlled validation',
    ],
    techStack: ['Python', 'Flask', 'PostgreSQL', 'Docker', 'AI APIs'],
    type: 'internship',
  },
  {
    id: 'exp-2',
    role: 'Software Engineer',
    company: 'Viatore Solutions',
    location: 'Coimbatore, India',
    startDate: 'Nov 2022',
    endDate: 'Jul 2023',
    description: [
      'Developed backend services using FastAPI and Django to support core application workflows, restructuring endpoints to reliably handle concurrent traffic and variable request patterns under peak production load',
      'Diagnosed tail-latency spikes by correlating request logs with database query traces and validating slow paths with EXPLAIN ANALYZE, isolating hot endpoints with repeated reads under concurrent access',
      'Reduced API p95 latency by 45% by removing redundant ORM round-trips, introducing Redis caching for hot records, and refactoring synchronous operations into asynchronous workers',
      'Deployed and supported production services on AWS using EC2, RDS, and Lambda, containerizing services with Docker and adding structured logging, health checks, and automated restarts to sustain 99.9% uptime',
    ],
    techStack: ['FastAPI', 'Django', 'Python', 'Redis', 'AWS', 'Docker', 'PostgreSQL', 'Lambda'],
    type: 'fulltime',
  },
  {
    id: 'exp-3',
    role: 'Software Engineer Intern',
    company: 'Thirdware Inc Solutions',
    location: 'Chennai, India',
    startDate: 'Feb 2022',
    endDate: 'Aug 2022',
    description: [
      'Designed and built an internal project-tracking platform using Java, Spring Boot, Angular and Node.js to replace fragmented spreadsheet and email-based updates, reducing status-tracking overhead by 40%',
      'Implemented secure authentication and role-based access (RBAC) using Google OAuth 2.0, modeling users, roles, and permissions as domain entities to enforce centralized access control',
      'Improved average API response times by 30% by reviewing query execution paths, reducing redundant data access, and applying object-oriented service and repository abstractions',
    ],
    techStack: ['Java', 'Spring Boot', 'Angular', 'Node.js', 'OAuth 2.0', 'PostgreSQL'],
    type: 'internship',
  },
];
