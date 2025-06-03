import "./specialities.scss";
import { useEffect, useState } from "react";
import { Arrow,Chevron } from "@/components/Common";
import { useNavigate } from "react-router-dom";

import {SpecialityCardType} from "@/interfaces"

function SpecialityCard({ item }: { item: SpecialityCardType }) {
  const navigate = useNavigate();

  const handleNavigation = () => {
    switch(item.name) {
      // Commercial - Industry Pages Navigation (from footer data)
      case "Real Estate":
        navigate("/industry/real-estate-insurance");
        break;
      case "Hospitality":
        navigate("/industry/hospitality-insurance");
        break;
      case "Retail Service":
        navigate("/industry/retail-service-insurance");
        break;
      case "Construction":
        navigate("/industry/construction-insurance");
        break;
      case "Energy":
        navigate("/industry/energy-insurance");
        break;
      case "Healthcare":
        navigate("/industry/healthcare-insurance");
        break;
      case "Manufacturing":
        navigate("/industry/manufacturing-insurance");
        break;
      case "Transportation":
        navigate("/industry/transportation-insurance");
        break;
      case "Environmental":
        navigate("/industry/environmental-insurance");
        break;
      case "Auto Service":
        navigate("/industry/auto-service-insurance");
        break;
      case "Food & Beverage":
        navigate("/industry/food-beverage-insurance");
        break;
      case "Wholesale":
        navigate("/industry/wholesale-insurance");
        break;
      case "Non-Profit":
        navigate("/industry/non-profit-insurance");
        break;
      case "Financial Services":
        navigate("/industry/financial-services-insurance");
        break;
      
      // Personal - Individual pages for each type
      case "Homeowners":
        navigate("/personal/homeowners-insurance");
        break;
      case "Auto":
        navigate("/personal/auto-insurance");
        break;
      case "Rental Property":
        navigate("/personal/rental-property-insurance");
        break;
      case "Condo":
        navigate("/personal/condo-insurance");
        break;
      case "Classic Auto":
        navigate("/personal/classic-auto-insurance");
        break;
      case "Builder's Risk":
        navigate("/personal/builders-risk-insurance");
        break;
      case "Flood":
        navigate("/personal/flood-insurance");
        break;
      case "Motorcycle":
        navigate("/personal/motorcycle-insurance");
        break;
      case "Life Insurance":
        navigate("/personal/life-insurance");
        break;
      
      // Services Navigation (exact from footer)
      case "Commercial Property":
        navigate("/services/commercial-property");
        break;
      case "Claims Advocacy":
        navigate("/services/commercial-property/claims-advocacy");
        break;
      case "Alternative Risk Financing":
        navigate("/services/commercial-property/alternative-risk-financing");
        break;
      case "Loss Control":
        navigate("/services/commercial-property/loss-control");
        break;
      case "Private Client":
        navigate("/services/private-client");
        break;
      case "Risk Management":
        navigate("/services/risk-management");
        break;
      case "Benchmark Network":
        navigate("/services/benchmark-network");
        break;
      
      default:
        break;
    }
  };

  return (
    <div className="speciality-cards hover-arrow-parent" onClick={handleNavigation}>
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
  const [selectedCategory, setSelectedCategory] = useState("Commercial");
  const [visibleData, setVisibleData] = useState<SpecialityCardType[]>([]);

  // Commercial data - matching footer structure
  const commercialData = [
    {
      id: 1,
      name: "Real Estate",
      imgSrc: "/assets/icons/home.png",
      title: "Comprehensive insurance solutions for real estate investors, developers, and property managers.",
    },
    {
      id: 2,
      name: "Hospitality",
      imgSrc: "/assets/icons/high-value-home.png",
      title: "Tailored insurance programs for hotels, restaurants, and entertainment venues.",
    },
    {
      id: 3,
      name: "Retail Service",
      imgSrc: "/assets/icons/insure.png",
      title: "Tailored protection for retail stores, service providers, and customer-facing businesses.",
    },
    {
      id: 4,
      name: "Construction",
      imgSrc: "/assets/icons/industry.png",
      title: "Specialized coverage for general contractors, specialty contractors, and construction projects.",
    },
    {
      id: 5,
      name: "Energy",
      imgSrc: "/assets/icons/risk-analysis.png",
      title: "Specialized insurance for energy companies and power generation facilities.",
    },
    {
      id: 6,
      name: "Healthcare",
      imgSrc: "/assets/icons/claim.png",
      title: "Professional liability and comprehensive coverage for healthcare providers.",
    },
    {
      id: 7,
      name: "Manufacturing",
      imgSrc: "/assets/icons/risk.png",
      title: "Industrial insurance solutions for manufacturing operations and production facilities.",
    },
    {
      id: 8,
      name: "Transportation",
      imgSrc: "/assets/icons/report.png",
      title: "Comprehensive coverage for transportation companies and logistics operations.",
    },
    {
      id: 9,
      name: "Environmental",
      imgSrc: "/assets/icons/tech.png",
      title: "Environmental liability coverage and pollution protection for businesses.",
    },
  ];

  // Personal data - matching footer structure
  const personalData = [
    {
      id: 1,
      name: "Homeowners",
      imgSrc: "/assets/icons/home.png",
      title: "Comprehensive home insurance coverage for your most valuable asset.",
    },
    {
      id: 2,
      name: "Auto",
      imgSrc: "/assets/icons/high-value-home.png",
      title: "Complete auto insurance protection for vehicles and drivers.",
    },
    {
      id: 3,
      name: "Rental Property",
      imgSrc: "/assets/icons/insure.png",
      title: "Specialized coverage for rental property owners and landlords.",
    },
    {
      id: 4,
      name: "Condo",
      imgSrc: "/assets/icons/industry.png",
      title: "Condominium insurance for unit owners and HOA coverage.",
    },
    {
      id: 5,
      name: "Classic Auto",
      imgSrc: "/assets/icons/risk-analysis.png",
      title: "Specialty insurance for classic, vintage, and collector vehicles.",
    },
    {
      id: 6,
      name: "Builder's Risk",
      imgSrc: "/assets/icons/claim.png",
      title: "Construction insurance for new home builds and renovations.",
    },
    {
      id: 7,
      name: "Flood",
      imgSrc: "/assets/icons/risk.png",
      title: "Flood insurance protection for homes and personal property.",
    },
    {
      id: 8,
      name: "Motorcycle",
      imgSrc: "/assets/icons/report.png",
      title: "Motorcycle insurance coverage for bikes and recreational vehicles.",
    },
    {
      id: 9,
      name: "Life Insurance",
      imgSrc: "/assets/icons/tech.png",
      title: "Life insurance and beneficiary protection for families.",
    },
  ];

  // Services data - exact from footer
  const servicesData = [
    {
      id: 1,
      name: "Commercial Property",
      imgSrc: "/assets/icons/home.png",
      title: "Comprehensive commercial property insurance and risk management solutions.",
    },
    {
      id: 2,
      name: "Claims Advocacy",
      imgSrc: "/assets/icons/high-value-home.png",
      title: "Expert claims management and advocacy services for maximum recovery.",
    },
    {
      id: 3,
      name: "Alternative Risk Financing",
      imgSrc: "/assets/icons/insure.png",
      title: "Innovative risk financing solutions including captives and self-insurance programs.",
    },
    {
      id: 4,
      name: "Loss Control",
      imgSrc: "/assets/icons/industry.png",
      title: "Comprehensive loss control services and risk assessments for prevention.",
    },
    {
      id: 5,
      name: "Private Client",
      imgSrc: "/assets/icons/risk-analysis.png",
      title: "High-net-worth personal insurance for luxury homes, collections, and assets.",
    },
    {
      id: 6,
      name: "Risk Management",
      imgSrc: "/assets/icons/claim.png",
      title: "Strategic risk assessment and mitigation planning for optimal business protection.",
    },
    {
      id: 7,
      name: "Benchmark Network",
      imgSrc: "/assets/icons/risk.png",
      title: "Access to our extensive network of insurance carriers and market relationships.",
    },
  ];

  const getCurrentData = () => {
    switch(selectedCategory) {
      case "Commercial":
        return commercialData;
      case "Personal":
        return personalData;
      case "Services":
        return servicesData;
      default:
        return commercialData;
    }
  };

  //to show a certain number of data on different screen sizes
  useEffect(() => {
    const updateVisibleData = () => {
      const currentData = getCurrentData();
      if (window.innerWidth < 768) {
        setVisibleData(currentData.slice(0, 5));
      } else {
        setVisibleData(currentData);
      }
    };

    updateVisibleData();
    window.addEventListener("resize", updateVisibleData);

    return () => window.removeEventListener("resize", updateVisibleData);
  }, [selectedCategory]);

  return (
    <section className="speciality-container">
      <div className="speciality padding-container">
        <h2>Your Insurance Partner</h2>
        <h5>Specialized Solutions for Real Estate, Construction, and Hospitality</h5>
        <div className="speciality-nav">
          {["Commercial", "Personal", "Services"].map((category) => (
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
