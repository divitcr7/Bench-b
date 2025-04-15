import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./footer.scss";

const data = {
  commercial: [
    { label: "Real Estate", path: "" },
    { label: "Construction", path: "" },
    { label: "Healthcare", path: "" },
    { label: "Environmental", path: "" },
    { label: "Auto Service", path: "" },
    { label: "Food & Beverage", path: "" },
    { label: "Transportation", path: "" },
    { label: "Wholesale", path: "" },
    { label: "Non-Profit", path: "" },
    { label: "Financial Services", path: "" },
    { label: "Retail", path: "" },
    { label: "Manufacturing", path: "" },
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
  company: [
    { label: "About Us", path: "/about" },
    { label: "Customer Service", path: "" },
  ],
};


const Footer = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);
  const [openDropdown, setOpenDropdown] = useState<keyof typeof data | null>(
    null
  );


  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
      if (window.innerWidth > 1024) setOpenDropdown(null);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleDropdown = (section: keyof typeof data) => {
    if (isMobile) {
      setOpenDropdown(openDropdown === section ? null : section);
    }
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
              <h3 onClick={() => toggleDropdown(key)}>
                {key.charAt(0).toUpperCase() + key.slice(1)}
                {isMobile && (
                  <span className="arrow">
                    {openDropdown === key ? "▲" : "▼"}
                  </span>
                )}
              </h3>
              <ul className={!isMobile || openDropdown === key ? "open" : ""}>
                {items.map(({ label, path }) => (
                  <li key={label}>
                    <Link to={path}>˃ {label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
