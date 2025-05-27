import { ArrowRight } from "lucide-react";
import "./bestoffers.scss";

interface ItemProps {
  id: number;
  name: string;
  description: string;
  icon: string;
}

function Card({ item }: { item: ItemProps }) {
  return (
    <div className="bestOffers_cards">
      <div className="bestOffers_cards_content">
        <span className="bestOffers_cards_icon">
          {item.icon}
        </span>
        <div>
          <h3>{item.name}</h3>
          <p>{item.description}</p>
        </div>
      </div>
    </div>
  );
}

export default function BestOffers() {
  const data = [
    {
      id: 1,
      name: "We Assess Risk Intelligently",
      description: "Our digital intake process uses dynamic questions and data validation to understand your risk profile — so you don't just get a quote, you get a plan that actually fits.",
      icon: "🔍"
    },
    {
      id: 2,
      name: "Real-Time Underwriting Insights",
      description: "We connect directly with carrier systems to access real-time underwriting decisions. That means fewer delays, fewer surprises, and faster policy approvals.",
      icon: "⚡"
    },
    {
      id: 3,
      name: "Instantly Compare Rates & Coverage",
      description: "Our platform scans pricing and coverage from 50+ A-rated carriers across personal and commercial lines. You'll see which options offer the best value — and why.",
      icon: "💡"
    }
  ];
  return (
    <section className="bestOffers_container">
      <div className="bestOffers padding-container">
        {/* headings */}
        <div>
          <h2>
            We Search And Compare The <span>Best Insurance Offers</span> For You
          </h2>
          <h5>
            We shop over 50 A-rated companies. Let us find you the lowest
            personal or commercial insurance rate.
          </h5>
        </div>

        {/* ellipse image  */}
        <div className="bestOffers_img">
          <img src="/assets/images/eclipse.png" />
        </div>

        {/* company cards */}
        <div className="bestOffers_cards-container">
          <div className="m-auto">
            {data.map((item) => {
              return <Card key={item.id} item={item} />;
            })}
          </div>
          <div className="bestOffers_button">
            <button className="btn btn-filled">COMPARE OFFERS</button>
          </div>
          <div className="bmVector">
            <img src="./assets/images/bm-vector.png"/>
          </div>
        </div>
      </div>

      {/* side border */}
      <img className="borderImage" src="./assets/images/border.png" alt="border-image"/>
    </section>
  );
}