import { Link } from "react-router-dom";
import "./header.scss";

export default function Header() {
  return (
    <header className="header">
      <nav>
        {/* circle and menu */}
        <div className="header-items ">
          <span className="navigation">
            <img src="./assets/icons/hamburger.png" alt="person logo" />
          </span>
          <Link to="" className="hiddenClass">
            <span className="m-auto">MENU</span>
          </Link>
          <span className="font-bold opacity-0 hiddenClass">Menu</span>
        </div>

        {/* logo */}
        <div className="logo">
          <img src="./assets/icons/logo.png" alt="Benchmark logo" />
        </div>

        {/* contact us */}
        <div className="header-items hiddenClass">
          <Link to="">
            <img src="./assets/icons/phone-light.svg" alt="call logo" />
          </Link>
          <Link to="">
            <img src="./assets/icons/person.png" alt="person logo" />
          </Link>
          <Link to="">
            <button className="btn btn-empty">Contact Us</button>
          </Link>
        </div>

        {/* dark phone icon on smaller screen */}
        <div className="header-items smallScreen">
          <Link to="">
            <img src="./assets/icons/phone-dark.svg" alt="call logo" />
          </Link>
        </div>
      </nav>
    </header>
  );
}
