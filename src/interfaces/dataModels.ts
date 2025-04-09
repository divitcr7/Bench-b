export interface BlogCardProps {
  imageUrl: string;
  title: string;
}

export interface BlogPost {
  id: number;
  title: string;
  imageUrl: string;
}

export interface BlogPost2 {
  id: string;
  title: string;
  content: string;
  date: string;
  author: string;
  imageUrl?: string;
}

export interface Review {
  id: number;
  name: string;
  date: string;
  rating: number;
  review: string;
  tags: string[];
  image: string;
}
