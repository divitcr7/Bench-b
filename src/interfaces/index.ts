import {
  ArrowProps,
  BlogSearchGridProps,
  CardProps,
  ChevronProps,
  ItemProps,
  MetaType,
  PnSCardType,
  ReviewCardProps,
  SpecialityCardType,
  ThemeContextType,
  ToolCardType,
} from "./componentInterfaces";

import { 
  BlogCardProps, 
  BlogPost, 
  BlogPost2, 
  Review } 
from "./dataModels";

export type {
  ArrowProps,
  BlogCardProps,
  BlogPost,
  BlogPost2,
  BlogSearchGridProps,
  CardProps,
  ChevronProps,
  ItemProps,
  MetaType,
  PnSCardType,
  Review,
  ReviewCardProps,
  SpecialityCardType,
  ThemeContextType,
  ToolCardType,
};

export interface ItemProps {
  id: number;
  imgSrc: string;
  name: string;
  description?: string;
  price?: string;
}
