import { Arrow } from "@/components/Common";
import "./bestoffers.scss";

import { ItemProps } from "@/interfaces";

function Card({ item }: { item: ItemProps }) {
  return (
    <div className="bestOffers_cards hover-arrow-parent">
      <div>
        <img src={item.imgSrc} alt={item.name} />
        <span>{item.name}</span>
      </div>
      <div>
        <span className="bestOffers_cards_price">
          <span className="bestOffers_cards_sign">$</span>
          <span>{item.price}</span>
        </span>
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
      price: "195",
    },
    {
      id: 2,
      imgSrc: "/assets/icons/Star.png",
      name: "Real-Time Underwriting",
      price: "195",
    },
    {
      id: 3,
      imgSrc: "/assets/icons/compare.png",
      name: "Compare Rates & Coverage",
      price: "195",
    },
    {
      id: 4,
      imgSrc: "/assets/icons/rate.png",
      name: "24/7 Expert Support",
      price: "195",
    },
  ];

  return (
    <section className="bestOffers_container">
      <div className="bestOffers padding-container">
        {/* headings */}
        <div>
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

        {/* company cards */}
        <div className="bestOffers_cards-container">
          <div className="m-auto">
            {data.map((item) => {
              return <Card key={item.id} item={item} />;
            })}
          </div>
          <div className="bestOffers_button">
            <button className="btn btn-filled">GET STARTED</button>
          </div>
          <div className="bmVector">
            <img src="/assets/images/bm-vector.png" alt="Vector" />
          </div>
        </div>
      </div>
    </section>
  );
}
