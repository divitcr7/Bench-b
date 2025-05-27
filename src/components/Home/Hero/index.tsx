import "./hero.scss";
import SocialMediaNav from "@/components/Common/SocialMediaNav";

export default function Hero() {
  return (
    <main className="hero">
      <section className="front-page">
        {/* left navigation */}
        <SocialMediaNav />

        {/* heading */}
        <div className="front-page_heading">
          <h1>
            Modern Insurance. <span>Simplified. Specialized. Strategic.</span>
          </h1>
          <h4>
            Insurance Reimagined — Fast, Informed, and Tailored. We combine proprietary technology with deep industry expertise to make insurance faster, more accurate, and more personalized than ever before.
          </h4>
          <button className="btn btn-filled" onClick={() => window.open('http://app.benchmarkbroker.com', '_blank')}>GET A QUOTE</button>
        </div>

        {/* banner image */}
        
        <div className="hero-button hero-button-commercial">
          <button>Commercial Insurance</button>
        </div>
        <div className="hero-button hero-button-personal">
          <button>Personal Insurance</button>
        </div>
      </section>
    </main>
  );
}
