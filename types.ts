export interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string;
  details: string;
  color: string; // Tailwind color class for border/accent
}

export interface Project {
  id: string;
  title: string;
  year: number;
  category: string;
  description: string;
  techStack: string[];
  link: string;
}

export interface GameRecord {
  id: string;
  name: string;
  genre: string;
  hoursPlayed: number;
  rating: number; // 0-10
  status: 'Completed' | 'Playing' | 'Backlog';
  achievementPercentage: number;
}

export enum PageRoute {
  HOME = '/',
  EXPERIENCE = '/experience',
  PROJECTS = '/projects',
  GAMES = '/games'
}
