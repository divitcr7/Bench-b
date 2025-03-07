import { useState, useEffect } from "react";
import "./Footer.scss";

const Footer = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) setOpenDropdown(null); 
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleDropdown = (section: string) => {
    if (isMobile) {
      setOpenDropdown(openDropdown === section ? null : section);
    }
  };

  return (
    <footer className="footer-container">
      <div className="footer">
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
          {/* Commercial Section */}
          <div className="footer-section">
            <h3 onClick={() => toggleDropdown("commercial")}>
              Commercial
              {isMobile && (
                <span className="arrow">
                  {openDropdown === "commercial" ? "▲" : "▼"}
                </span>
              )}
            </h3>
            <ul
              className={
                !isMobile || openDropdown === "commercial" ? "open" : ""
              }
            >
              <li>Real Estate</li>
              <li>Construction</li>
              <li>Healthcare</li>
              <li>Environmental</li>
              <li>Auto Service</li>
              <li>Food & Beverage</li>
              <li>Transportation</li>
              <li>Wholesale</li>
              <li>Non-Profit</li>
              <li>Financial Services</li>
              <li>Retail</li>
              <li>Manufacturing</li>
            </ul>
          </div>

          {/* Personal Section */}
          <div className="footer-section">
            <h3 onClick={() => toggleDropdown("personal")}>
              Personal
              {isMobile && (
                <span className="arrow">
                  {openDropdown === "personal" ? "▲" : "▼"}
                </span>
              )}
            </h3>
            <ul
              className={!isMobile || openDropdown === "personal" ? "open" : ""}
            >
              <li>Homeowners</li>
              <li>Auto</li>
              <li>Rental Property</li>
              <li>Condo</li>
              <li>Classic Auto</li>
              <li>Builder's Risk</li>
              <li>Flood</li>
              <li>Motorcycle & Watercraft</li>
              <li>Life Insurance</li>
            </ul>
          </div>

          {/* Company Section */}
          <div className="footer-section">
            <h3 onClick={() => toggleDropdown("company")}>
              Company
              {isMobile && (
                <span className="arrow">
                  {openDropdown === "company" ? "▲" : "▼"}
                </span>
              )}
            </h3>
            <ul
              className={!isMobile || openDropdown === "company" ? "open" : ""}
            >
              <li>About Us</li>
              <li>Customer Service</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
