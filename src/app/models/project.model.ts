export interface Project {
  hash: string;
  title: string;
  tagline: string;
  description: string;
  details: { label: string; value: string }[];
  tech: string[];
  repoUrl?: string;
  demoUrl?: string;
}