import "./specialities.scss";
import { useEffect, useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";

interface SpecialityCardType {
  id: number;
  name: string;
  imgSrc: string;
  title: string;
}

function SpecialityCard({ item }: { item: SpecialityCardType }) {
  return (
    <div className="speciality-cards">
      <div className="speciality-cards-content">
        <img src={item.imgSrc} alt={item.name} />
        <h3>{item.name}</h3>
        <p>{item.title}</p>
        <span className="speciality-arrow">
          <ArrowRight />
        </span>
      </div>
    </div>
  );
}

export default function Specialities() {
  const [selectedCategory, setSelectedCategory] = useState("Products");
  const [visibleData, setVisibleData] = useState<SpecialityCardType[]>([]);

  const data = [
    {
      id: 1,
      name: "Homeowners",
      imgSrc: "/assets/icons/home.png",
      title:
        "We guarantee full coverage for all properties at an excellent rate.",
    },
    {
      id: 2,
      name: "Auto",
      imgSrc: "/assets/icons/auto.png",
      title:
        "We guarantee full coverage for all properties at an excellent rate.",
    },
    {
      id: 3,
      name: "Rental Property",
      imgSrc: "/assets/icons/rental.png",
      title:
        "We guarantee full coverage for all properties at an excellent rate.",
    },
    {
      id: 4,
      name: "Condo",
      imgSrc: "/assets/icons/condo.png",
      title:
        "We guarantee full coverage for all properties at an excellent rate.",
    },
    {
      id: 5,
      name: "High Value Home",
      imgSrc: "/assets/icons/high-value-home.png",
      title:
        "We guarantee full coverage for all properties at an excellent rate.",
    },
    {
      id: 6,
      name: "Classic Auto",
      imgSrc: "/assets/icons/classic-auto.png",
      title:
        "We guarantee full coverage for all properties at an excellent rate.",
    },
    {
      id: 7,
      name: "Builder's Risk",
      imgSrc: "/assets/icons/risk.png",
      title:
        "We guarantee full coverage for all properties at an excellent rate.",
    },
    {
      id: 8,
      name: "Flood",
      imgSrc: "/assets/icons/flood.png",
      title:
        "We guarantee full coverage for all properties at an excellent rate.",
    },
    {
      id: 9,
      name: "Motorcycle & Watercraft",
      imgSrc: "/assets/icons/m&w.png",
      title:
        "We guarantee full coverage for all properties at an excellent rate.",
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
    <section className="speciality-container">
      <div className="speciality padding-container">
        <h2>Our Specialities</h2>
        <h5>Please select a product or service</h5>
        <div className="speciality-nav">
          {["Industries", "Products", "Services"].map((category) => (
            <span
              key={category}
              className={selectedCategory === category ? "active" : ""}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </span>
          ))}
        </div>
        <div className="speciality-cards-container">
          {visibleData.map((item) => {
            return <SpecialityCard key={item.id} item={item} />;
          })}
        </div>
        <div className="speciality-button">
          <span>
            SHOW MORE <ChevronDown />
          </span>
        </div>
      </div>
    </section>
  );
}
