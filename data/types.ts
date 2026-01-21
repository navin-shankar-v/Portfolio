export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string | 'Present';
  description: string[];
  techStack: string[];
  type: 'fulltime' | 'contract' | 'internship';
}

export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  image: string;
  category: 'fullstack' | 'backend' | 'frontend' | 'devops' | 'api';
}

export interface SkillCategory {
  id: string;
  name: string;
  icon: string;
  skills: string[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface PersonalInfo {
  name: string;
  role: string;
  tagline: string;
  bio: string;
  email: string;
  location: string;
  resumeUrl: string;
  socials: SocialLink[];
}
