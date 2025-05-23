// src/components/Sidebar.tsx
import { Link } from "react-router-dom";
import "./sidebar.scss";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <div className="sidebar-overlay" onClick={onClose} />
      <div className="sidebar-content">
        <button className="sidebar-close" onClick={onClose}>
          ×
        </button>
        <nav className="sidebar-nav">
          <ul>
            <li>
              <Link to="/" onClick={onClose}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={onClose}>
                About
              </Link>
            </li>
            <li>
              <Link to="/industry" onClick={onClose}>
                Industry
              </Link>
            </li>
            <li>
              <Link to="/onboarding" onClick={onClose}>
                Onboarding
              </Link>
            </li>
            <li>
              <Link to="/blog" onClick={onClose}>
                Blog
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;