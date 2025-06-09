import React from "react";
import "./BlogCard.scss";
import OptimizedImage from "../OptimizedImage";

import { BlogCardProps } from "@/interfaces";

const BlogCard: React.FC<BlogCardProps> = ({ imageUrl, title }) => {
  return (
    <div className="blog-post">
      <div>
        <OptimizedImage
          src={imageUrl}
          alt={title}
          aspectRatio="16/9"
          className="blog-image"
        />
        <span className="blog-badge">CUSTOMER EXPERIENCE</span>
      </div>
      <h4>{title}</h4>
    </div>
  );
};

export default BlogCard;
