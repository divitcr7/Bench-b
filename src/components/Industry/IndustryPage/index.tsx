import { useParams } from "react-router-dom";
import IndustryHero from "../IndustryHero";
import IndustryCoverage from "../IndustryCoverage";
import IndustryServices from "../IndustryServices";
import "./industrypage.scss";

interface IndustryData {
  title: string;
  subtitle: string;
  description: string;
  heroImage: string;
  industries: string[];
  coverages: {
    title: string;
    description: string;
    items: {
      title: string;
      description: string;
      icon: string;
    }[];
  };
  services: {
    title: string;
    description: string;
    items: {
      title: string;
      description: string;
      icon: string;
    }[];
  };
}

const industryData: Record<string, IndustryData> = {
  realestate: {
    title: "Real Estate Insurance Solutions",
    subtitle: "Protecting Your Property Portfolio",
    description: "Comprehensive insurance solutions for real estate investors, property managers, and developers. We understand the unique risks and challenges of the real estate industry.",
    heroImage: "/images/industries/realestate-hero.jpg",
    industries: ["Commercial", "Residential", "Industrial", "Mixed-Use"],
    coverages: {
      title: "Key Coverages for Real Estate",
      description: "Tailored insurance solutions to protect your real estate investments",
      items: [
        {
          title: "Property Insurance",
          description: "Comprehensive coverage for buildings, contents, and business interruption",
          icon: "/images/icons/property.svg"
        },
        {
          title: "Liability Protection",
          description: "Protection against third-party claims and legal expenses",
          icon: "/images/icons/liability.svg"
        },
        {
          title: "Natural Disaster Coverage",
          description: "Protection against floods, earthquakes, and other natural disasters",
          icon: "/images/icons/disaster.svg"
        }
      ]
    },
    services: {
      title: "Value-Added Services",
      description: "Beyond insurance, we provide strategic support for your real estate portfolio",
      items: [
        {
          title: "Risk Assessment",
          description: "Detailed analysis of property risks and mitigation strategies",
          icon: "/images/icons/risk.svg"
        },
        {
          title: "Claims Management",
          description: "Expert handling of claims to minimize disruption",
          icon: "/images/icons/claims.svg"
        },
        {
          title: "Portfolio Analysis",
          description: "Comprehensive review of your property portfolio's insurance needs",
          icon: "/images/icons/portfolio.svg"
        }
      ]
    }
  },
  // Add more industry data here
};

export default function IndustryPage() {
  const { industry } = useParams<{ industry: string }>();
  const data = industryData[industry || "realestate"];

  if (!data) {
    return <div>Industry not found</div>;
  }

  return (
    <div className="industry-page">
      <IndustryHero
        title={data.title}
        subtitle={data.subtitle}
        description={data.description}
        image={data.heroImage}
        industries={data.industries}
      />
      
      <IndustryCoverage
        title={data.coverages.title}
        description={data.coverages.description}
        coverages={data.coverages.items}
      />

      <IndustryServices
        title={data.services.title}
        description={data.services.description}
        services={data.services.items}
      />
    </div>
  );
} 