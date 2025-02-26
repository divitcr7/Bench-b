import './header.css'


export default function Header(){
    return (
      <header className="header">
        <nav>
          {/* circle and menu */}
          <div className="header-items">
            <span className="navigation">
              <img src="./assets/icons/hamburger.png" alt="person logo" />
            </span>
            <span className='font-bold'>Menu</span>
          </div>

          {/* logo */}
          <div>
            <img src="./assets/icons/logo.png" alt="Benchmark logo" />
          </div>

          {/* contact us */}
          <div className="header-items">
            <span>
              <img src="./assets/icons/person.png" alt="person logo" />
            </span>
            <span>
              <img src="./assets/icons/phone-light.svg" alt="call logo" />
            </span>
            <span>
              <button className='btn btn-white'>Contact Us</button>
            </span>
          </div>
        </nav>
      </header>
    );
}