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
    path: "/industry",
    subItems: [
      "Real Estate Insurance",
      "Hospitality Insurance",
      "Retail Service Insurance",
      "Construction Insurance",
      "Energy Insurance",
      "Healthcare Insurance",
      "Manufacturing Insurance",
      "Transportation Insurance",
      "Food Beverage Insurance",
      "Auto Service Insurance",
      "Environmental Insurance",
      "Financial Services Insurance",
      "Non-Profit Insurance",
      "Wholesale Insurance",
    ],
  },
  { label: "About Us/Careers", path: "/about" },
  {
    label: "Services",
    path: "/services",
    subItems: [
      {
        label: "Commercial Property",
        path: "/services/commercial-property",
      },
      {
        label: "Claims Advocacy",
        path: "/services/commercial-property/claims-advocacy",
      },
      {
        label: "Alternative Risk Financing",
        path: "/services/commercial-property/alternative-risk-financing",
      },
      {
        label: "Loss Control",
        path: "/services/commercial-property/loss-control",
      },
      {
        label: "Private Client",
        path: "/services/private-client",
      },
      {
        label: "Risk Management",
        path: "/services/risk-management",
      },
      {
        label: "Benchmark Network",
        path: "/services/benchmark-network",
      },
    ],
  },
  {
    label: "Portals",
    path: "/portals",
    subItems: ["Booking Scheduler", "Payment Portal"],
  },
  {
    label: "Onboarding",
    path: "https://app.benchmarkbroker.com/",
    isExternal: true,
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

  const renderSubItems = (item: any, parentPath: string) => {
    if (!item.subItems) return null;

    return (
      <div className="sidebar-submenu-container">
        <div className="sidebar-submenu-content">
          <h3 className="sidebar-submenu-title">{item.label}</h3>
          <ul className="sidebar-submenu">
            {item.subItems.map((sub: any, subIdx: number) => (
              <li key={subIdx}>
                {typeof sub === "string" ? (
                  <Link
                    to={`${parentPath}/${sub
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                    onClick={onClose}
                    className="sidebar-submenu-link"
                  >
                    {sub}
                  </Link>
                ) : (
                  <div className="nested-submenu">
                    <Link
                      to={sub.path}
                      onClick={onClose}
                      className="sidebar-submenu-link"
                    >
                      {sub.label}
                    </Link>
                    {sub.subItems && (
                      <ul className="nested-submenu-items">
                        {sub.subItems.map(
                          (nestedSub: string, nestedIdx: number) => (
                            <li key={nestedIdx}>
                              <Link
                                to={`${sub.path}/${nestedSub
                                  .toLowerCase()
                                  .replace(/\s+/g, "-")}`}
                                onClick={onClose}
                                className="sidebar-submenu-link"
                              >
                                {nestedSub}
                              </Link>
                            </li>
                          )
                        )}
                      </ul>
                    )}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };

  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <div className="sidebar-overlay" onClick={onClose} />
      <div className="sidebar-container">
        <div className="sidebar-content">
          {/* Logo and Close */}
          <div className="sidebar-header">
            <img
              src="/assets/icons/logo.png"
              alt="Benchmark logo"
              className="sidebar-logo"
            />
            <button className="sidebar-close" onClick={onClose}>
              ×
            </button>
          </div>
          {/* Navigation */}
          <nav className="sidebar-nav">
            <ul>
              {MENU.map((item, idx) => (
                <li
                  key={item.label}
                  className={`sidebar-nav-item ${
                    location.pathname.startsWith(item.path) ? "active" : ""
                  }`}
                >
                  {item.subItems && item.subItems.length > 0 ? (
                    <div
                      className={`sidebar-menu-item${
                        openIndex === idx ? " expanded" : ""
                      }`}
                      onClick={() => handleExpand(idx)}
                    >
                      <span className="sidebar-menu-label">{item.label}</span>
                      <Chevron
                        direction={openIndex === idx ? "down" : "right"}
                        color="#3A3A3A"
                      />
                    </div>
                  ) : item.isExternal ? (
                    <a
                      href={item.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="sidebar-menu-item"
                      onClick={onClose}
                    >
                      <span className="sidebar-menu-label">{item.label}</span>
                    </a>
                  ) : (
                    <Link
                      to={item.path}
                      onClick={onClose}
                      className="sidebar-menu-item"
                    >
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
        {/* Submenu - only render when expanded */}
        {openIndex !== null &&
          MENU[openIndex]?.subItems &&
          renderSubItems(MENU[openIndex], MENU[openIndex].path)}
      </div>
    </div>
  );
};

export default Sidebar;
