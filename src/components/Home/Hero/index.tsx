import './hero.scss'

export default function Hero(){
    return (
      <main className='hero'>
        <section className="front-page">
          {/* left navigation */}
          <nav className="side-nav">
            <div>
              <a href="">
                <img src="./assets/icons/facebook.png" alt="facebook icon" />
              </a>
              <a href="">
                <img src="./assets/icons/instagram.png" alt="instagram icon" />
              </a>
              <a href="">
                <img src="./assets/icons/youtube.png" alt="youtube icon" />
              </a>
              <a href="">
                <img src="./assets/icons/linkedin.png" alt="linkedin icon" />
              </a>
            </div>
          </nav>

          {/* heading */}
          <div className="front-page_heading">
            <h1>
              We Specialize In the <span>Unexpected</span>
            </h1>
            <h4>
              Technology meets insurance automating the risk management to meet
              your needs
            </h4>
            <button className="btn btn-filled">GET A QUOTE</button>
          </div>

          {/* banner image */}
          {/* <div className="bnr-image">
            <img src="./assets/images/main_bnr.png" alt="banner image"/>
        </div> */}
        </section>
      </main>
    );
}