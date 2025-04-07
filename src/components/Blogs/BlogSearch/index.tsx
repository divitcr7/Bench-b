import { BlogSearchGrid } from "@/components";
import { SearchBar } from "@/components/Common";
import "./blogsearch.scss";

export default function BlogSearch() {
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

  return (
    <section className="blog-search padding-container">
      <p>SEARCH RESULTS FOR</p>
      <h2>Best General</h2>
      <SearchBar />
      <span className="blog-search-count">
        Found <p>11</p> results
      </span>
      <BlogSearchGrid blogData={blogData} searchCount={12} />
    </section>
  );
}
