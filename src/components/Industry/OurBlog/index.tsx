import "./ourblog.scss";
import { Chevron, BlogCard } from "@/components/Common";
import { useEffect, useState } from "react";

const blogData = [
  {
    imageUrl: "/assets/images/outdoor.png",
    title:
      "Are You Looking For The Best General Liability Insurance For Contractors?",
  },
  {
    imageUrl: "/assets/images/kitchen.png",
    title:
      "Are You Looking For The Best General Liability Insurance For Contractors?",
  },
];

export default function OurBlog() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkWidth = () => setIsMobile(window.innerWidth < 425);
    checkWidth(); // Initial check
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  const visibleBlogs = isMobile ? blogData.slice(0, 1) : blogData;

  return (
    <section className="industry-blog-section padding-container">
      <div className="industry-blog-content">
        <h2>Our Blog</h2>
        <h5>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text.
        </h5>
        <a href="#" className="industry-blog-all-posts">
          ALL POSTS &rarr;
        </a>
        <div className="industry-blog-navigation">
          <button className="industry-blog-nav-btn prev">
            <Chevron direction="left" />
          </button>
          <button className="industry-blog-nav-btn next">
            <Chevron direction="right" />
          </button>
        </div>
      </div>

      <div className="industry-blog-posts ">
        {visibleBlogs.map((item, index) => (
          <div key={index}>
            <BlogCard imageUrl={item.imageUrl} title={item.title} />
          </div>
        ))}
      </div>
    </section>
  );
}
