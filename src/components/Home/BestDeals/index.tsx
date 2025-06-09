import "./bestdeals.scss";
import HowToCards from "@/components/Common/HowToCards";

export default function BestDeals() {
  // const instructions = [
  //   {
  //     title: "Quick Risk Analysis — Smarter Starts Here",
  //     info: "Tell us a bit about your needs. Our advisors use this info to analyze your risk profile — not just give you a generic quote.",
  //     img1: "/assets/icons/fillDetails.png",
  //     img2: "/assets/icons/01.png",
  //   },
  //   {
  //     title: "We Match You to the Market — You Get Options That Work",
  //     info: "We leverage our industry knowledge and relationships with top-rated carriers to deliver more than just low rates. We present you with customized solutions that align with your goals and coverage gaps — not cookie-cutter packages.",
  //     img1: "/assets/icons/compare.png",
  //     img2: "/assets/icons/02.png",
  //   },
  //   {
  //     title: "Coverage With Confidence — Backed by Experts",
  //     info: "Our experienced team walks you through your options, answers your questions, and gets your policy started the right way. We stay with you long after you bind — for claims, service, and ongoing support.",
  //     img1: "/assets/icons/insure.png",
  //     img2: "/assets/icons/03.png",
  //   },
  // ];

  return (
    <section className="bestDeals">
      <div className="bestDeals-container padding-container">
        {/* how it works */}
        <div>
          <p>HOW IT WORKS</p>
        </div>

        {/* we find you the best deal */}
        <div className="bestDeals-title">
          <h2>
            Insurance   <span className="highlight">Reimagined</span>,<br />
            Fast, Informed, and Tailored
          </h2>
        </div>

        {/* cards */}
        <div className="bestDeals_cards ">
          <HowToCards
            title="Quick Risk Analysis"
            info="Tell us a bit about your needs. Our advisors will analyze your risk profile not just give you a generic quote."
            img1="/assets/icons/fillDetails.png"
            img2="/assets/icons/01.png"
          />
          <HowToCards
            title="We Match You to the Market"
            info="We leverage our industry knowledge and relationships with top-rated carriers to deliver more than just low rates"
            img1="/assets/icons/compare.png"
            img2="/assets/icons/02.png"
          />
          <HowToCards
            title="Coverage With Confidence"
            info="Our experienced team walks you through your options, answers your questions, and gets your policy started the right way"
            img1="/assets/icons/insure.png"
            img2="/assets/icons/03.png"
          />
        </div>

        {/* button */}
        <div className="bestDeals_button">
          <button className="btn btn-empty" onClick={() => window.open('https://app.benchmarkbroker.com', '_blank')}>GET STARTED</button>
        </div>
      </div>
    </section>
  );
}
