import { forwardRef } from "react";
import { Link } from "react-router-dom";
import "./header.scss";

interface HeaderProps {
  contactRef?: React.RefObject<HTMLElement>;
}

const Header = forwardRef<HTMLElement, HeaderProps>(({ contactRef }, ref) => {
  const scrollToContact = () => {
    if (contactRef?.current) {
      contactRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <header className="header" ref={ref}>
      <nav>
        {/* circle and menu */}
        <div className="header-items">
          <span className="navigation">
            <img src="./assets/icons/hamburger.png" alt="menu icon" />
          </span>
          <Link to="" className="hiddenClass">
            <span className="m-auto ">MENU</span>
          </Link>
          <span className="font-bold opacity-0 hiddenClass">Menu</span>
        </div>

        {/* logo */}
        <div className="logo">
          <img src="/assets/icons/logo.png" alt="Benchmark logo" />
        </div>

        {/* contact us */}
        <div className="header-items hiddenClass">
          <Link to="">
            <img src="./assets/icons/person.png" alt="person icon" />
          </Link>
          <Link to="">
            <img src="./assets/icons/phone.png" alt="phone icon" />
          </Link>
          <button className="btn btn-empty" onClick={scrollToContact}>
            Contact Us
          </button>
        </div>

        {/* dark phone icon on smaller screen */}
        <div className="header-items smallScreen">
          <Link to="">
            <img src="./assets/icons/phone-dark.svg" alt="phone icon dark" />
          </Link>
        </div>
      </nav>
    </header>
  );
});

export default Header;
