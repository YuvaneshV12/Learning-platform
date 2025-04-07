export interface Course {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  videoUrl: string;
  duration: string;
  level: string;
  modules?: CourseModule[];
  testUrl?: string;
}

export interface CourseModule {
  id: string;
  title: string;
  description: string;
  duration: string;
  completed?: boolean;
}

export interface Certificate {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  duration: string;
  level: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  duration: string;
  level: string;
  technologies: string[];
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  earnedDate?: string;
}

export interface Progress {
  courseId: string;
  courseName: string;
  progress: number;
  lastAccessed: string;
}