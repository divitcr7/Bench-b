import { useState, useEffect } from "react";
import "./footer.scss";
import { useNavigate } from "react-router-dom";

const data = {
  commercial: [
    { label: "Industry", path: "/industry" },
    { label: "Real Estate ", path: "/industry/real-estate-insurance" },
    { label: "Hospitality ", path: "/industry/hospitality-insurance" },
    { label: "Retail Service ", path: "/industry/retail-service-insurance" },
    { label: "Construction ", path: "/industry/construction-insurance" },
    { label: "Energy ", path: "/industry/energy-insurance" },
    { label: "Healthcare ", path: "/industry/healthcare-insurance" },
    { label: "Manufacturing ", path: "/industry/manufacturing-insurance" },
    { label: "Transportation ", path: "/industry/transportation-insurance" },
    // { label: "Real Estate", path: "" },
    // { label: "Construction", path: "" },
    // { label: "Healthcare", path: "" },
    { label: "Environmental", path: "" },
    { label: "Auto Service", path: "" },
    { label: "Food & Beverage", path: "" },
    // { label: "Transportation", path: "" },
    { label: "Wholesale", path: "" },
    { label: "Non-Profit", path: "" },
    { label: "Financial Services", path: "" },
    // { label: "Retail", path: "" },
    // { label: "Manufacturing", path: "" },
  ],
  personal: [
    { label: "Homeowners", path: "" },
    { label: "Auto", path: "" },
    { label: "Rental Property", path: "" },
    { label: "Condo", path: "" },
    { label: "Classic Auto", path: "" },
    { label: "Builder's Risk", path: "" },
    { label: "Flood", path: "" },
    { label: "Motorcycle", path: "" },
    { label: "Life Insurance", path: "" },
  ],
  services: [
    { 
      label: "Commercial Property",
      path: "/services/commercial-property",
      subItems: [
        { label: "Claims Advocacy", path: "/services/commercial-property/claims-advocacy" },
        { label: "Alternative Risk Financing", path: "/services/commercial-property/alternative-risk-financing" },
        { label: "Loss Control", path: "/services/commercial-property/loss-control" },
      ]
    },
    { label: "Private Client", path: "/services/private-client" },
    { label: "Risk Management", path: "/services/risk-management" },
    { label: "Benchmark Network", path: "/services/benchmark-network" },
  ],
  tools: [
    { label: "Booking Scheduler", path: "/tools/booking-scheduler" },
  ],
  company: [
    { label: "About Us", path: "/about" },
    { label: "Customer Service", path: "" },
    { label: "Careers", path: "/careers" },
    { label: "Blog", path: "/blog" },
    { label: "Onboarding", path: "https://app.benchmarkbroker.com/", isExternal: true },
  ],
};

interface FooterItem {
  label: string;
  path: string;
  subItems?: FooterItem[];
  isExternal?: boolean;
}

interface FooterData {
  commercial: FooterItem[];
  personal: FooterItem[];
  services: FooterItem[];
  tools: FooterItem[];
  company: FooterItem[];
}

type SectionKey = keyof FooterData;

const Footer = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [openDropdown, setOpenDropdown] = useState<SectionKey | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
      if (window.innerWidth > 1024) setOpenDropdown(null);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleDropdown = (section: SectionKey) => {
    if (isMobile) setOpenDropdown(openDropdown === section ? null : section);
  };

  const handleNavigation = (item: FooterItem) => {
    if (item.isExternal) {
      window.open(item.path, '_blank', 'noopener,noreferrer');
    } else if (item.path) {
      navigate(item.path);
    }
  };

  const renderSubItems = (items: FooterItem[]) => {
    return items.map((item) => (
      <li key={item.label}>
        <span
          onClick={() => handleNavigation(item)}
          style={item.path ? { cursor: "pointer" } : {}}
        >
          {item.label}
        </span>
        {item.subItems && (
          <ul className="footer-subitems">
            {item.subItems.map((subItem) => (
              <li key={subItem.label}>
                <span
                  onClick={() => handleNavigation(subItem)}
                  style={subItem.path ? { cursor: "pointer" } : {}}
                >
                  {subItem.label}
                </span>
              </li>
            ))}
          </ul>
        )}
      </li>
    ));
  };

  return (
    <footer className="footer-container">
      <div className="footer padding-container">
        <div className="footer-left">
          <img
            src="/assets/icons/benchmark.svg"
            alt="Benchmark Insurance Logo"
            className="footer-logo"
          />
          <p>
            Benchmark Insurance Group of Texas is the leading risk management
            insurance brokerage for businesses of all sizes.
          </p>
          <div className="footer-links">
            <span>Privacy Notice</span>
            <span>Terms of Service</span>
          </div>
        </div>
        <div className="footer-right">
          {Object.entries(data).map(([key, items]) => (
            <div className="footer-section" key={key}>
              <h3 onClick={() => toggleDropdown(key as SectionKey)}>
                {key.charAt(0).toUpperCase() + key.slice(1)}
                {isMobile && (
                  <span className="arrow">
                    {openDropdown === key ? "▲" : "▼"}
                  </span>
                )}
              </h3>
              <ul className={!isMobile || openDropdown === key ? "open" : ""}>
                {renderSubItems(items)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
