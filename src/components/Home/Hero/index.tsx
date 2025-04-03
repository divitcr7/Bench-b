import "./hero.scss";
import SocialMediaNav from "@components/Common/SocialMediaNav";

export default function Hero() {
  return (
    <main className="hero">
      <section className="front-page">
        {/* left navigation */}
        <SocialMediaNav />

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
        <div className="hero-button hero-button-commercial">
          <button>Commercial Insurance</button>
        </div>
        <div className="hero-button hero-button-personal">
          <button>Personal Insurance</button>
        </div>
      </section>
    </main>
  );
}
