import "./industryHero.scss";
import SocialMediaNav from "@components/Common/SocialMediaNav";

export default function IndustryHero() {
  return (
    <main className="industry-hero">
      <section className="industry-front-page">
        {/* left navigation */}
        <SocialMediaNav />

        <div className="industry-front-page-right">
          {/* heading */}
          <div className="industry-front-page_heading">
            <h1>
              Construction Insurance <span>made simple</span>
            </h1>
            <h4>
              Anticipating and responding to the coverage needs of the Real
              Estate industry
            </h4>
            <button className="btn btn-filled">GET A QUOTE</button>
          </div>
        </div>
      </section>
    </main>
  );
}
