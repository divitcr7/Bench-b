// src/components/Sidebar.tsx
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Button from "../ui/Button";
import Chevron from "../Icons/Chevron";
import SocialMediaNav from "../SocialMediaNav";
import "./sidebar.scss";

const MENU = [
  {
    label: "Commercial",
    path: "/commercial",
    subItems: [
      "Energy",
      "Construction",
      "Transportation",
      "Non-profit",
      "Retail",
      "Wholesale",
      "Manufacturing",
      "Financial Services",
      "Hospitality",
      "Auto Service",
      "Healthcare",
    ],
  },
  {
    label: "Personal Lines",
    path: "/personal-lines",
    subItems: [], // Add subitems if needed
  },
  { label: "About Us/Careers", path: "/about" },
  { label: "Document Library", path: "/documents" },
  { label: "Blog (News)", path: "/blog" },
  {
    label: "Portals",
    path: "/portals",
    subItems: ["Payment", "Client", "Agent"],
  },
];

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const location = useLocation();

  const handleExpand = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <div className="sidebar-overlay" onClick={onClose} />
      <div className="sidebar-content">
        {/* Logo and Close */}
        <div className="sidebar-header">
          <img src="/assets/icons/logo.png" alt="Benchmark logo" className="sidebar-logo" />
          <button className="sidebar-close" onClick={onClose}>
            ×
          </button>
        </div>
        {/* Navigation */}
        <nav className="sidebar-nav">
          <ul>
            {MENU.map((item, idx) => (
              <li key={item.label} className={location.pathname.startsWith(item.path) ? "active" : ""}>
                {item.subItems && item.subItems.length > 0 ? (
                  <>
                    <div
                      className={`sidebar-menu-item${openIndex === idx ? " expanded" : ""}`}
                      onClick={() => handleExpand(idx)}
                    >
                      <span className="sidebar-menu-label">{item.label}</span>
                      <Chevron direction={openIndex === idx ? "down" : "right"} color="#3A3A3A" />
                    </div>
                    {openIndex === idx && (
                      <div className="sidebar-submenu-container">
                        <h3 className="sidebar-submenu-title">{item.label}</h3>
                        <ul className="sidebar-submenu">
                          {item.subItems.map((sub, subIdx) => (
                            <li key={subIdx}>
                              <Link to={`${item.path}/${sub.toLowerCase().replace(/\s+/g, "-")}`} onClick={onClose}>
                                {sub}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </>
                ) : (
                  <Link to={item.path} onClick={onClose} className="sidebar-menu-item">
                    <span className="sidebar-menu-label">{item.label}</span>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
        {/* Contact Us Button */}
        <div className="sidebar-contact">
          <Button variant="outlined" color="primary" fullWidth>
            Contact Us
          </Button>
        </div>
        {/* Social Media */}
        <div className="sidebar-social">
          <SocialMediaNav />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;