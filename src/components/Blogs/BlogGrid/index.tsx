import React from "react";
import BlogCard from "@/components/Common/BlogCard";
import "./BlogGrid.scss";

const blogData = [
  {
    id: 1,
    title: "Understanding Insurance Basics",
    imageUrl: "/assets/images/blog1.png",
  },
  {
    id: 2,
    title: "Choosing the Right Insurance Plan",
    imageUrl: "/assets/images/blog2.png",
  },
  {
    id: 3,
    title: "Insurance Claims Process Explained",
    imageUrl: "/assets/images/blog3.png",
  },
  {
    id: 4,
    title: "Insurance Claims Process Explained",
    imageUrl: "/assets/images/blog4.png",
  },
  {
    id: 5,
    title: "Insurance Claims Process Explained",
    imageUrl: "/assets/images/blog5.png",
  },
  {
    id: 6,
    title: "Insurance Claims Process Explained",
    imageUrl: "/assets/images/blog6.png",
  },
  {
    id: 7,
    title: "Insurance Claims Process Explained",
    imageUrl: "/assets/images/blog1.png",
  },
  {
    id: 8,
    title: "Insurance Claims Process Explained",
    imageUrl: "/assets/images/blog2.png",
  },
  {
    id: 9,
    title: "Insurance Claims Process Explained",
    imageUrl: "/assets/images/blog3.png",
  },
  {
    id: 10,
    title: "Insurance Claims Process Explained",
    imageUrl: "/assets/images/blog4.png",
  },
  {
    id: 11,
    title: "Insurance Claims Process Explained",
    imageUrl: "/assets/images/blog5.png",
  },
];

const BlogGrid: React.FC = () => {
  return (
    <div className="blog-grid">
      {blogData.map((post) => (
        <BlogCard key={post.id} imageUrl={post.imageUrl} title={post.title} />
      ))}

      {/* Newsletter Section */}
      <div className="blog-newsletter">
        <h3>Subscribe to our newsletter</h3>
        <input
          type="email"
          placeholder="Enter email"
          className="blog-newsletter-input"
        />
        <button className="blog-newsletter-button">Subscribe</button>
      </div>
    </div>
  );
};

export default BlogGrid;
