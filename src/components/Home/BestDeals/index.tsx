import "./bestdeals.scss";

import { HowToCards } from "../../Common";

export default function BestDeals() {
  const instructions = [
    {
      title: "Fill in Your Basic Details",
      info: "Our platform makes it easy to provide the data we need to provide you a quote!",
      img1: "./assets/icons/fillDetails.png",
      img2: "./assets/icons/01.png",
    },
    {
      title: "Compare Prices And Customize Coverage",
      info: "We shop many carriers to help you find the right price as well as coverages!",
      img1: "./assets/icons/compare.png",
      img2: "./assets/icons/02.png",
    },
    {
      title: "Get Insured Today",
      info: "Our agents will find the best rates and coverages for you, and assist you in starting your policy immediately!",
      img1: "./assets/icons/insure.png",
      img2: "./assets/icons/03.png",
    },
  ];

  return (
    <section className="bestDeals">
      <div className="bestDeals-container">
        {/* how it works */}
        <div>
          <h4>HOW IT WORKS</h4>
        </div>

        {/* we find you the best deal */}
        <div className="bestDeals-title">
          <h2>
            We Find You The <span className="highlight">Best Deals</span>, It's
            That Simple
          </h2>
        </div>

        {/* cards */}
        <div className="bestDeals_cards">
          {instructions.map((item, index) => {
            return (
              <HowToCards
                key={index}
                title={item.title}
                info={item.info}
                img1={item.img1}
                img2={item.img2}
              />
            );
          })}
        </div>

        {/* button */}
        <div className="bestDeals_button">
          <button className="btn btn-empty">GET STARTED</button>
        </div>
      </div>
    </section>
  );
}
