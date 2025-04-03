import "./ourmission.scss";
export default function OurMission() {
  return (
    <section className="our-mission-container">
      <div className="padding-container our-mission ">
        <h2>
          <span>Our Mission</span>
          <div className="goldDash"></div>
        </h2>
        <div>{/* for image */}</div>
        <div>
          <p>
            <b>Benchmark Insurance Group of Texas</b> is the leading risk
            management insurance brokerage for businesses of all sizes, with
            capabilities to provide the industries lowest premiums from top
            rated insurance companies, first class service and in house claims
            consulting to provide representation when claims do occur.
          </p>
          <p>
            Our Vision is to provide our clients and partners knowledge by
            providing tailor made solutions that are designed address everyday
            business crippling risks.
          </p>
          <p>
            We are more than an insurance broker – we are your risk management
            partner With a team of 15+ staff in the Houston, Clear Lake, and
            Austin areas focused solely on refining strategies to provide our
            clients with affordable insurance rates within 24 hours or less as
            well as establishing several options that pinpoints the unique
            insurance challenges that business owners and professionals face.
          </p>
          <p>
            Our program is designed to provide business owners with
            “ease-of-use”, appropriate coverages, and fair, stable rates.
          </p>
        </div>
        <button className="btn btn-filled">Contact Us</button>
      </div>
    </section>
  );
}
