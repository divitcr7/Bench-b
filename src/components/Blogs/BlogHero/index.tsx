import React, { useEffect, useState } from "react";
import "./BlogHero.scss";
import SocialMediaNav from "@/components/Common/SocialMediaNav";
import SearchBar from "@/components/Common/SearchBar";
import { Arrow } from "@/components/Common";

const categories = [
  "All posts",
  "Claims",
  "Customer experience",
  "Disability insurance",
  "Long-term care insurance",
];

const BlogHero: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All posts");
  const [smallScreen, setSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setSmallScreen(window.innerWidth < 769);
    };

    handleResize(); 
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <div className="blog-hero">
      {/* Social Media Navigation */}
      <SocialMediaNav />

      {/* Blog Hero Content */}
      <div className="blog-hero-content ">
        {/* Header Section */}
        <h1 className="blog-header">News</h1>
        <SearchBar />

        {/* Categories Section */}
        <div className="blog-categories">
          {smallScreen ? (
            <h6 className="blog-category-button active blog-category-button-small">
              Category
            </h6>
          ) : (
            categories.map((category) => (
              <button
                key={category}
                className={`blog-category-button ${
                  activeCategory === category ? "active" : ""
                }`}
                onClick={() => setActiveCategory(category)}
              >
                <h6>{category}</h6>
              </button>
            ))
          )}
        </div>

        {/* Featured Blog Section */}
        <div className="blog-featured">
          <img
            src="/assets/images/blog-main.png"
            alt="Featured Blog"
            className="blog-featured-image"
          />
          <div className="blog-featured-content">
            <span>CUSTOMER EXPERIENCE</span>
            <h3>
              If Your Property Experiences Flood Damage, Are You Protected?
            </h3>
            <p>
              Many homeowners and businesses are unaware of the risks involved
              with flood damage. Learn how to safeguard your property.
            </p>
            <div>
              <Arrow direction="right" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogHero;
