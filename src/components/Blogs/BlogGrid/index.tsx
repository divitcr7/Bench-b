import React,{useEffect, useState} from "react";
import {BlogCard, SubscribeCard} from "@/components/Common";
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
  {
    id: 12,
    title: "Understanding Insurance Basics",
    imageUrl: "/assets/images/blog1.png",
  },
  {
    id: 13,
    title: "Choosing the Right Insurance Plan",
    imageUrl: "/assets/images/blog2.png",
  },
  {
    id: 14,
    title: "Insurance Claims Process Explained",
    imageUrl: "/assets/images/blog3.png",
  },
  {
    id: 15,
    title: "Insurance Claims Process Explained",
    imageUrl: "/assets/images/blog4.png",
  },
  {
    id: 16,
    title: "Insurance Claims Process Explained",
    imageUrl: "/assets/images/blog5.png",
  },
  {
    id: 17,
    title: "Insurance Claims Process Explained",
    imageUrl: "/assets/images/blog6.png",
  },
];




const BlogGrid: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(11);

  const totalPages = Math.ceil(blogData.length / postsPerPage);

  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const currentPosts = blogData.slice(startIndex, endIndex);

  //to display a certain number of posts pn page
  useEffect(() => {
    const handlePageCount = () => {
      const width=window.innerWidth;
      switch (true) {
        case width < 768:
          setPostsPerPage(2);
          break;
        case width == 768:
          setPostsPerPage(8);
          break;
        case width > 768:
          setPostsPerPage(11);
          break;
      }
    };
    handlePageCount();
    window.addEventListener("resize",handlePageCount)

    return () => {
      window.removeEventListener("resize",handlePageCount)
    }
  });
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="blog-grid-container">
      <div className="blog-grid padding-container">
        {currentPosts.slice(0, 8).map((post) => (
          <BlogCard key={post.id} imageUrl={post.imageUrl} title={post.title} />
        ))}

        <div className="blog-newsletter">
          <SubscribeCard />
        </div>

        {currentPosts.slice(8).map((post) => (
          <BlogCard key={post.id} imageUrl={post.imageUrl} title={post.title} />
        ))}
      </div>

      <div className="pagination-container ">
        <button
          className="pagination-arrow"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          &lt;
        </button>
        {[...Array(totalPages)].map((_, index) => {
          const page = index + 1;
          return (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`pagination-page ${
                currentPage === page ? "active" : ""
              }`}
            >
              {page}
            </button>
          );
        })}
        <button
          className="pagination-arrow"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default BlogGrid;