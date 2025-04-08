import React from "react";
import { 
  Meta, 
  BlogSearch
} from "@/components";

const BlogSearchResult: React.FC = () => {
  const metadata = {
    title: "Blog Search Result || Benchmark - Insurance",
    description: "Benchmark - Insurance",
  };

  return (
    <>
      <Meta meta={metadata} />

      {/* search results */}
      <BlogSearch/>
      {/* footer
      <Footer /> */}
    </>
  );
};

export default BlogSearchResult;
