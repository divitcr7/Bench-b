import React from "react";
import "./BlogCard.scss";

interface BlogCardProps {
  imageUrl: string;
  title: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ imageUrl, title }) => {
  return (
    <div className="industry-blog-post">
      <div>
        <img src={imageUrl}  />
        <span className="industry-blog-badge">CUSTOMER EXPERIENCE</span>
      </div>
      <h4>
        {title}
      </h4>
    </div>
  );
};

export default BlogCard;
