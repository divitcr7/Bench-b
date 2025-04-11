import { BlogPost, Review } from "@/interfaces";

// ThemeContext Type
export interface ThemeContextType {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

export interface ArrowProps {
  direction: "left" | "right" | "up" | "down";
  color?: string;
  border?: string;
  hoverColor?: string;
}

export interface BlogSearchGridProps {
  blogData: BlogPost[];
  searchCount: number;
}

export interface CardProps {
  title: string;
  info: string;
  img1: string;
  img2: string;
}

export interface ChevronProps {
  direction: "left" | "right" | "up" | "down";
  color?: string;
  border?: string;
  hoverColor?: string;
}

export interface ItemProps {
  id: number;
  imgSrc: string;
  name: string;
  price: string;
}

export interface MetaType {
  title: string;
  description: string;
}

export interface PnSCardType {
  id: number;
  name: string;
  imgSrc: string;
}

export interface ReviewCardProps {
  item: Review;
}

export interface SpecialityCardType {
  id: number;
  name: string;
  imgSrc: string;
  title: string;
}

export interface ToolCardType {
  id: number;
  imgSrc: string;
  title: string;
  info: string;
}
