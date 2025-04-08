import React,{useEffect, useState} from "react";
import {BlogCard} from "@/components/Common";
import "./blogsearchgrid.scss";


import {BlogSearchGridProps} from "@/interfaces"


const BlogSearchGrid: React.FC<BlogSearchGridProps> = ({blogData,searchCount}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(searchCount);

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
          setPostsPerPage(9);
          break;
        case width > 768:
          setPostsPerPage(12);
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
    <div className="blog-search-grid-container">
      <div className="blog-search-grid">
        {currentPosts.map((post) => (
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

export default BlogSearchGrid;