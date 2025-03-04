import { ArrowRight } from "lucide-react";
import "./bestoffers.scss";

interface ItemProps {
  id: number;
  imgSrc: string;
  name: string;
  price: string;
}
function Card({ item }: { item: ItemProps }) {
  return (
    <div className="bestOffers_cards">
      <div>
        <img src={item.imgSrc} />
        <span>{item.name}</span>
      </div>
      <div>
        <span className="bestOffers_cards_price">
          <span className="bestOffers_cards_sign">$</span>
          <span>{item.price}</span>
        </span>
        <span className="bestOffers_cards_icon">
          <ArrowRight />
        </span>
      </div>
    </div>
  );
}

export default function BestOffers() {
  const data = [
    {
      id: 1,
      imgSrc: "/assets/icons/aig.png",
      name: "American International Group",
      price: "195",
    },
    {
      id: 2,
      imgSrc: "/assets/icons/zurich.png",
      name: "Zurich",
      price: "195",
    },
    {
      id: 3,
      imgSrc: "/assets/icons/liberty.png",
      name: "Liberty Mutual",
      price: "195",
    },
    {
      id: 4,
      imgSrc: "/assets/icons/berkshire.png",
      name: "Berkshire Hathaway Inc",
      price: "195",
    },
  ];
  return (
    <section className="bestOffers_container">
      <div className="bestOffers">
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
