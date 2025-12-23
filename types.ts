
export type CategoryType = 
  | 'ChatGPT' 
  | 'Midjourney' 
  | 'YouTube' 
  | 'SEO' 
  | 'Fiverr/Upwork' 
  | 'Social Media' 
  | 'Marketing'
  | 'Copywriting'
  | 'Email Marketing';

export interface Prompt {
  id: string;
  title: string;
  description: string;
  content: string;
  category: CategoryType;
  tags: string[];
  popularity: number;
  isNew?: boolean;
  createdAt: string;
  useCase?: string;
  tips?: string[];
}

export interface Category {
  id: CategoryType;
  title: string;
  icon: string;
  description: string;
  slug: string;
}
