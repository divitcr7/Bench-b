import "./ourmission.scss";
export default function OurMission() {
  return (
    <section className="our-mission-container">
      <div className="padding-container our-mission">
        <h2>
          <span>Our Mission & Vision</span>
          <div className="goldDash"></div>
        </h2>
        <div>{/* for image */}</div>
        <div>
          <div className="mission-section">
            <h3>Our Mission</h3>
            <p>
              "To constantly challenge the status quo by simplifying how risk is identified and quantified—so our partners can navigate uncertainty with confidence."
            </p>
          </div>
          
          <div className="vision-section">
            <h3>Our Vision</h3>
            <p>
              "To revolutionize how organizations perceive, manage, and mitigate risks. We leverage technology and expertise to deliver transparency, intelligence, and protection at scale."
            </p>
          </div>

          <div className="values-section">
            <h3>Core Values</h3>
            <ul>
              <li><strong>Accountability</strong> – We measure success through client satisfaction.</li>
              <li><strong>Integrity</strong> – We operate transparently and prioritize client interests.</li>
              <li><strong>Professionalism</strong> – We serve with the excellence we expect of ourselves.</li>
              <li><strong>Solutions-Oriented Mindset</strong> – We see every challenge as a chance to build trust.</li>
            </ul>
          </div>

          <p className="who-we-are">
            Based in Texas and licensed nationwide, we specialize in delivering intelligent insurance solutions built on integrity, technology, and industry depth. Founded on the belief that better data and smarter service drive better outcomes, we blend the rigor of underwriting with the agility of modern tech to protect what matters most—your assets, your business, your future.
          </p>
        </div>
        <button className="btn btn-filled">Contact Us</button>
      </div>
    </section>
  );
}
