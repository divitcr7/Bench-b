import "./ourblog.scss";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function OurBlog() {
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
            <ChevronLeft />
          </button>
          <button className="industry-blog-nav-btn next">
            <ChevronRight />
          </button>
        </div>
      </div>

      <div className="industry-blog-posts">
        <div className="industry-blog-post">
          <div>
            <img src="/assets/images/outdoor.png" alt="House" />
            <span className="industry-blog-badge">CUSTOMER EXPERIENCE</span>
          </div>
          <h4>
            Are You Looking For The Best General Liability Insurance For
            Contractors?
          </h4>
        </div>
        <div className="industry-blog-post hidden md:block ">
          <div>
            <img src="/assets/images/kitchen.png" alt="Kitchen" />
            <span className="industry-blog-badge">CUSTOMER EXPERIENCE</span>
          </div>
          <h4>
            Are You Looking For The Best General Liability Insurance For
            Contractors?
          </h4>
        </div>
      </div>
    </section>
  );
}
