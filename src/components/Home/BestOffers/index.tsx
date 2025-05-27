import { Arrow } from "@/components/Common";
import "./bestoffers.scss";

import { ItemProps } from "@/interfaces";

function Card({ item }: { item: ItemProps }) {
  return (
    <div className="bestOffers_cards hover-arrow-parent">
      <div className="card-icon">
        <img src={item.imgSrc} alt={item.name} />
      </div>
      <div className="card-content">
        <h3>{item.name}</h3>
        <p>{item.description}</p>
      </div>
      <div className="card-footer">
        <span className="bestOffers_cards_icon">
          <Arrow direction="right" color="white" hoverColor="var(--green)" />
        </span>
      </div>
    </div>
  );
}

export default function BestOffers() {
  const data = [
    {
      id: 1,
      imgSrc: "/assets/icons/risk.png",
      name: "Smart Risk Assessment",
      description: "Our digital intake process uses dynamic questions and data validation to understand your risk profile — so you don't just get a quote, you get a plan that actually fits.",
    },
    {
      id: 2,
      imgSrc: "/assets/icons/Star.png",
      name: "Real-Time Underwriting",
      description: "We connect directly with carrier systems to access real-time underwriting decisions. That means fewer delays, fewer surprises, and faster policy approvals.",
    },
    {
      id: 3,
      imgSrc: "/assets/icons/compare.png",
      name: "Compare Rates & Coverage",
      description: "Our platform scans pricing and coverage from 50+ A-rated carriers across personal and commercial lines. You'll see which options offer the best value — and why.",
    },
    {
      id: 4,
      imgSrc: "/assets/icons/support.png",
      name: "24/7 Expert Support",
      description: "Get instant recommendations from licensed insurance professionals and ongoing support for claims, renewals, and policy changes.",
    },
  ];

  const benefits = [
    "Smart risk assessment tailored to your business or household",
    "Real-time access to top insurance markets",
    "Side-by-side comparisons of pricing, limits, and endorsements",
    "Instant recommendations from licensed insurance professionals",
    "Ongoing support for claims, renewals, and policy changes"
  ];

  return (
    <section className="bestOffers_container">
      <div className="bestOffers padding-container">
        {/* Hero Section */}
        <div className="hero-section">
          {/* <h1>Smarter Insurance Starts Here</h1> */}
          <h2>
            Technology-Driven. <span>Expert-Led. Always In Your Corner.</span>
          </h2>
          <h5>
            We combine proprietary technology with deep industry expertise to make insurance faster, more accurate, and more personalized than ever before.
          </h5>
        </div>

        {/* ellipse image  */}
        <div className="bestOffers_img">
          <img src="/assets/images/eclipse.png" alt="Background" />
        </div>

        {/* Features Section */}
        <div className="bestOffers_cards-container">
          <div className="features-grid">
            {data.map((item) => (
              <Card key={item.id} item={item} />
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="benefits-section">
          <h3>What You Get:</h3>
          <ul className="benefits-list">
            {benefits.map((benefit, index) => (
              <li key={index}>
                <span className="check-icon">✓</span>
                {benefit}
              </li>
            ))}
          </ul>
        </div>

        {/* CTA Section */}
        <div className="cta-section">
          <p className="cta-text">
            Insurance done intelligently — with people and platforms working together for your protection.
          </p>
          {/* <div className="bestOffers_button">
            <button className="btn btn-filled">GET STARTED</button>
          </div> */}
        </div>

        <div className="bmVector">
          <img src="/assets/images/bm-vector.png" alt="Vector" />
        </div>
      </div>
    </section>
  );
}
