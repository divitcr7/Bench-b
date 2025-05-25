import "./abouthero.scss";
import SocialMediaNav from "@/components/Common/SocialMediaNav";

export default function AboutUsHero() {
  return (
    <section className="aboutus-container">
      <div className="aboutus">
        {/* left navigation */}
        <SocialMediaNav />

        <div className="aboutus-content">
          <div className="aboutus-heading">
            <h3>ABOUT US</h3>
            <img src="/assets/images/about-logo.png" alt="Benchmark Insurance" />
            <h4>BENCHMARK INSURANCE GROUP</h4>
            <div className="aboutus-tagline">
              <h2>Reimagining Risk. Empowering Growth.</h2>
              <p>At Benchmark Insurance Group, we're more than an insurance brokerage—we're a strategic partner for real estate, construction, and hospitality leaders navigating complex risk landscapes.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
