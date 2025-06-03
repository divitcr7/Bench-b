// src/components/Header.tsx
import { forwardRef, useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../SideBar/SideBar";
import "./header.scss";

interface HeaderProps {
  contactRef?: React.RefObject<HTMLElement>;
}

const Header = forwardRef<HTMLElement, HeaderProps>(({ contactRef }, ref) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const scrollToContact = () => {
    if (contactRef?.current) {
      contactRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <header className="header" ref={ref}>
        <nav>
          {/* circle and menu */}
          <div className="header-items">
            <span className="navigation" onClick={toggleSidebar}>
              <img src="/assets/icons/hamburger.png" alt="menu icon" />
            </span>
            <Link to="" className="hiddenClass">
              <span className="m-auto " onClick={toggleSidebar}>MENU</span>
            </Link>   
            <span className="font-bold opacity-0 hiddenClass">Menu</span>
          </div>

          {/* logo */}
          <div className="logo">
            <Link to="/">
              <img src="/assets/icons/logo.png" alt="Benchmark logo" />
            </Link>
          </div>

          {/* contact us */}
          <div className="header-items hiddenClass">
            <Link to="">
              <img src="/assets/icons/person.png" alt="person icon" />
            </Link>
            <Link to="">
              <img src="/assets/icons/phone.png" alt="phone icon" />
            </Link>
            <button className="btn btn-empty" onClick={scrollToContact}>
              Contact Us
            </button>
          </div>

          {/* dark phone icon on smaller screen */}
          <div className="header-items smallScreen">
            <Link to="">
              <img src="/assets/icons/phone-dark.svg" alt="phone icon dark" />
            </Link>
          </div>
        </nav>
      </header>
      
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </>
  );
});

export default Header;