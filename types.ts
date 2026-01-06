
export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  status: 'Localhost' | 'Live' | 'Development';
  githubUrl?: string;
  imageUrl: string;
}

export interface Skill {
  name: string;
  category: 'Frontend' | 'Backend' | 'Tools' | 'Database';
  icon?: string;
}

export interface ContactData {
  name: string;
  email: string;
  message: string;
}
