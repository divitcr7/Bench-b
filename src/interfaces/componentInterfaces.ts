import { BlogPost, Review } from "@/interfaces";

// ThemeContext Type
export interface ThemeContextType {
  theme: "light" | "dark";
  toggleTheme: () => void;
}


export interface BlogSearchGridProps {
  blogData: BlogPost[];
  searchCount:number;
}

export interface CardProps {
  title: string;
  info: string;
  img1: string;
  img2: string;
}

export interface MetaType {
  title: string;
  description: string;
}

export interface ItemProps {
  id: number;
  imgSrc: string;
  name: string;
  price: string;
}

export interface SpecialityCardType {
  id: number;
  name: string;
  imgSrc: string;
  title: string;
}

export interface ReviewCardProps {
  item: Review;
}

export interface PnSCardType {
  id: number;
  name: string;
  imgSrc: string;
}

export interface ToolCardType {
  id: number;
  imgSrc: string;
  title: string;
  info: string;
}