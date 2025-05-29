import "./career.scss";
import { Link } from "react-router-dom";
import { Arrow } from "@/components/Common";

export default function Careers() {
  return (
    <section className="career-container">
      <div className="careers-container">
        <div className="careers-hero">
          <div className="careers-hero-content">
            <h1 className="careers-title">Join Our Growing Team</h1>
            <p className="careers-subtitle">
              At Benchmark Insurance Group, we meet professionals every day
              who’ve hit a wall at large brokerages—buried under bureaucracy,
              locked into narrow roles, or boxed out of leadership paths. If
              you’re ambitious, experienced, and craving more from your career,
              you’ve just found your next move. We’re building something special
              here: a company that combines the resources of a major firm with
              the agility, opportunity, and innovation of a fast-growing
              powerhouse. We’re not just a place to work—we’re a platform for
              career transformation.
            </p>
          </div>
          <div className="careers-hero-visual">
            <div className="floating-elements">
              <div className="floating-card card-1">
                <div className="card-icon">🚀</div>
                <span>Innovation</span>
              </div>
              <div className="floating-card card-2">
                <div className="card-icon">🏗️</div>
                <span>Growth</span>
              </div>
              <div className="floating-card card-3">
                <div className="card-icon">🤝</div>
                <span>Collaboration</span>
              </div>
            </div>
          </div>
        </div>

        <div className="benefits-section">
          <h2 className="section-title">Why Choose Us?</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
              </div>
              <h3>Growth Opportunities</h3>
              <p>
                Continuous learning and career advancement paths with mentorship
                programs and skill development initiatives.
              </p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
              <h3>Innovative Projects</h3>
              <p>
                Work on cutting-edge construction projects using the latest
                technology and sustainable building practices.
              </p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
              <h3>Great Culture</h3>
              <p>
                Collaborative environment with work-life balance, comprehensive
                benefits, and a supportive team atmosphere.
              </p>
            </div>
          </div>
        </div>

        <div className="cta-section">
          <div className="cta-content">
            <h2>Ready to Build Your Future?</h2>
            <p>
              Explore our current openings and join a team that values
              innovation, growth, and excellence.
            </p>
            <Link to="/careers" className="cta-button">
              <span>View Open Positions </span>
              <Arrow direction="right" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
