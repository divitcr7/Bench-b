import React from "react";
import { useParams } from "react-router-dom";

interface BlogPost {
  id: string;
  title: string;
  content: string;
  date: string;
  author: string;
  imageUrl?: string;
}

const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  // This would typically come from an API or CMS
  const blogPost: BlogPost = {
    id: id || "1",
    title: "Understanding Insurance Basics",
    content: `
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    `,
    date: "2024-04-04",
    author: "John Doe",
    imageUrl: "https://via.placeholder.com/800x400",
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <article className="max-w-3xl mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-4">{blogPost.title}</h1>
          <div className="flex items-center text-gray-600">
            <span>{blogPost.date}</span>
            <span className="mx-2">•</span>
            <span>By {blogPost.author}</span>
          </div>
        </header>

        {blogPost.imageUrl && (
          <img
            src={blogPost.imageUrl}
            alt={blogPost.title}
            className="w-full h-auto rounded-lg mb-8"
          />
        )}

        <div
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: blogPost.content }}
        />
      </article>
    </div>
  );
};

export default BlogPost;
