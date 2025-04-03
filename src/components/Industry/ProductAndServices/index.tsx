import "./style.scss";
import { useEffect, useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";

interface PnSCardType {
  id: number;
  name: string;
  imgSrc: string;
}

function PnSCard({ item }: { item: PnSCardType }) {
  return (
    <div className="pns-cards">
      <div className="pns-cards-content">
        <img src={item.imgSrc} alt={item.name} />
        <h3>{item.name}</h3>
        <span className="pns-arrow">
          <ArrowRight />
        </span>
      </div>
    </div>
  );
}

export default function ProductAndServices() {
  const [selectedCategory, setSelectedCategory] = useState("Products");
  const [visibleData, setVisibleData] = useState<PnSCardType[]>([]);

  const data = [
    {
      id: 1,
      name: "Real Estate Portfolio Package",
      imgSrc: "./assets/icons/home.png",
    },
    {
      id: 2,
      name: "Condo/HOA Program",
      imgSrc: "./assets/icons/home.png",
    },
    {
      id: 3,
      name: "Workmans Compensation",
      imgSrc: "./assets/icons/home.png",
    },
    {
      id: 4,
      name: "Commercial Property",
      imgSrc: "./assets/icons/home.png",
    },
    {
      id: 5,
      name: "Professional Liability",
      imgSrc: "./assets/icons/home.png",
    },
    {
      id: 6,
      name: "Flood",
      imgSrc: "./assets/icons/home.png",
    },
    {
      id: 7,
      name: "Multi Family/ HOA/ CONDO PACKAGE",
      imgSrc: "./assets/icons/home.png",
    },
    {
      id: 8,
      name: "Hotel/Motel",
      imgSrc: "./assets/icons/home.png",
    },
    {
      id: 9,
      name: "Builders Risk",
      imgSrc: "./assets/icons/home.png",
    },
  ];
  //to show a certain number of data on different screen sizes
  useEffect(() => {
    const updateVisibleData = () => {
      if (window.innerWidth < 768) {
        setVisibleData(data.slice(0, 5));
      } else {
        setVisibleData(data);
      }
    };

    updateVisibleData();
    window.addEventListener("resize", updateVisibleData);

    return () => window.removeEventListener("resize", updateVisibleData);
  }, []);

  return (
    <section className="pns-container">
      <div className="pns padding-container">
        <h2>Products And Services</h2>
        <h5>Please, select a product or service</h5>
        <div className="pns-nav">
          {["Products", "Services"].map((category) => (
            <span
              key={category}
              className={selectedCategory === category ? "active" : ""}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </span>
          ))}
        </div>
        <div className="pns-cards-container">
          {visibleData.map((item) => {
            return <PnSCard key={item.id} item={item} />;
          })}
        </div>
        <div className="pns-button">
          <span>
            SHOW MORE <ChevronDown />
          </span>
        </div>
      </div>
    </section>
  );
}
