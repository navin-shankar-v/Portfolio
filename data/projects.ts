import { Project } from './types';

export const projects: Project[] = [
  {
    id: 'proj-1',
    title: 'Research Summarizer',
    description: 'Python FastAPI-based document summarization service that handles LLM token limits through recursive chunking and batching logic, enabling reliable processing of long research PDFs without truncation.',
    techStack: ['Python', 'FastAPI', 'OpenAI API'],
    githubUrl: 'https://github.com/navin-shankar-v/research-summarizer',
    image: '/projects/research-summarizer.png',
    category: 'backend',
  },
  {
    id: 'proj-2',
    title: 'LabelFlow AI',
    description: 'High-throughput asynchronous labeling service using Go-backed workers and Redis queues, with instrumented queue depth and processing-time metrics to identify throughput bottlenecks.',
    techStack: ['Go', 'FastAPI', 'Redis', 'React'],
    githubUrl: 'https://github.com/navin-shankar-v/labelflow-ai',
    image: '/projects/labelflow-ai.png',
    category: 'fullstack',
  },
  {
    id: 'proj-3',
    title: 'HashtagHolidays',
    description: 'Python-based recommendation engine that ingests Instagram interaction data, performs content classification and NER-driven processing, and generates personalized travel destination signals via REST APIs and Dialogflow.',
    techStack: ['Python', 'FastAPI', 'Docker', 'MongoDB', 'DialogFlow'],
    githubUrl: 'https://github.com/navin-shankar-v/hashtag-holidays',
    image: '/projects/hashtag-holidays.png',
    category: 'fullstack',
  },
];
