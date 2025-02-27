import {Meta,Hero,Banner} from "./../../components"

export default function Home() {
  const metadata = {
    title: "Home || Benchmark - Insurance",
    description: "Benchmark - Insurance",
  };

  return (
    <>
      <Meta meta={metadata} />

      <Hero />
      
      <Banner />
    </>
  );
}
