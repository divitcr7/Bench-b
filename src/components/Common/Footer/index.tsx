import { useState, useEffect } from "react";
import "./footer.scss";

const data = {
  commercial: [
    "Real Estate",
    "Construction",
    "Healthcare",
    "Environmental",
    "Auto Service",
    "Food & Beverage",
    "Transportation",
    "Wholesale",
    "Non-Profit",
    "Financial Services",
    "Retail",
    "Manufacturing",
  ],
  personal: [
    "Homeowners",
    "Auto",
    "Rental Property",
    "Condo",
    "Classic Auto",
    "Builder's Risk",
    "Flood",
    "Motorcycle & Watercraft",
    "Life Insurance",
  ],
  company: ["About Us", "Customer Service"],
};

const Footer = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [openDropdown, setOpenDropdown] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) setOpenDropdown(null);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleDropdown = (section) => {
    if (isMobile) setOpenDropdown(openDropdown === section ? null : section);
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
                {items.map((item) => (
                  <li key={item}>˃ {item}</li>
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
