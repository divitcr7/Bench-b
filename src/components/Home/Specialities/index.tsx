import "./specialities.scss";
import { useEffect, useState } from "react";
import { Arrow,Chevron } from "@/components/Common";

import {SpecialityCardType} from "@/interfaces"

function SpecialityCard({ item }: { item: SpecialityCardType }) {
  return (
    <div className="speciality-cards hover-arrow-parent">
      <div className="speciality-cards-content">
        <img src={item.imgSrc} alt={item.name} />
        <h3>{item.name}</h3>
        <p>{item.title}</p>
        <span className="speciality-arrow">
          <Arrow direction="right" color="var(--indigo)" hoverColor="var(--green)" />
        </span>
      </div>
    </div>
  );
}

export default function Specialities() {
  const [selectedCategory, setSelectedCategory] = useState("Industries");
  const [visibleData, setVisibleData] = useState<SpecialityCardType[]>([]);

  const data = [
    {
      id: 1,
      name: "Real Estate",
      imgSrc: "/assets/icons/real-estate.png",
      title: "Comprehensive insurance solutions for real estate investors, developers, and property managers.",
    },
    {
      id: 2,
      name: "Construction",
      imgSrc: "/assets/icons/construction.png",
      title: "Specialized coverage for general contractors, specialty contractors, and construction projects.",
    },
    {
      id: 3,
      name: "Hospitality",
      imgSrc: "/assets/icons/hospitality.png",
      title: "Tailored insurance programs for hotels, restaurants, and entertainment venues.",
    },
    {
      id: 4,
      name: "High-Net-Worth",
      imgSrc: "/assets/icons/private.png",
      title: "Premium protection for high-net-worth individuals and their valuable assets.",
    },
    {
      id: 5,
      name: "Risk Assessment",
      imgSrc: "/assets/icons/risk.png",
      title: "Intelligent risk analysis and policy structuring for optimal protection.",
    },
    {
      id: 6,
      name: "Claims Advocacy",
      imgSrc: "/assets/icons/claims.png",
      title: "Digital claims management and 24/7 support for seamless resolution.",
    },
    {
      id: 7,
      name: "Risk Planning",
      imgSrc: "/assets/icons/planning.png",
      title: "Long-term risk mitigation strategies aligned with your growth goals.",
    },
    {
      id: 8,
      name: "Analytics",
      imgSrc: "/assets/icons/analytics.png",
      title: "Real-time risk analytics and insurance tech integration.",
    },
    {
      id: 9,
      name: "Portfolio Management",
      imgSrc: "/assets/icons/portfolio.png",
      title: "Smart portfolio management tools for comprehensive asset protection.",
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
        <h2>Your Insurance Partner</h2>
        <h5>Specialized Solutions for Real Estate, Construction, and Hospitality</h5>
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
            SHOW MORE <Chevron direction="down" />
          </span>
        </div>
      </div>
    </section>
  );
}
