import {
  Meta,
  ContactUs,
  Footer,
  BlogHero,
  BlogGrid,
} from "@/components";

export default function Blogs() {
  const metadata = {
    title: "Blogs || Benchmark - Insurance",
    description: "Benchmark - Insurance",
  };

  return (
    <>
      <Meta meta={metadata} />

      <BlogHero />

      <BlogGrid />
      {/* contact us */}
      <ContactUs />
      {/* footer */}
      <Footer />
    </>
  );
}
