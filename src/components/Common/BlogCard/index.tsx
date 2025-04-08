import React from "react";
import "./BlogCard.scss";

import {BlogCardProps} from "@/interfaces";

const BlogCard: React.FC<BlogCardProps> = ({ imageUrl, title }) => {
  return (
    <div className="blog-post">
      <div>
        <img src={imageUrl}  />
        <span className="blog-badge">CUSTOMER EXPERIENCE</span>
      </div>
      <h4>
        {title}
      </h4>
    </div>
  );
};

export default BlogCard;
