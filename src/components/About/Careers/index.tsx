import "./career.scss";
import { Link } from "react-router-dom";
import { Arrow } from "@/components/Common";

export default function Careers() {
  return (
    <section className="career-container">
      <div className="career padding-container">
        <h2>Careers</h2>
        <div className="career-content">
          <div className="career-text">
            <h3>Join Our Growing Team</h3>
            <p>
              At Rise Construction, we're building more than just structures – we're building careers. 
              We offer a dynamic work environment where innovation meets expertise, and where every team 
              member contributes to our success story.
            </p>
            <div className="career-benefits">
              <div className="benefit-item">
                <h4>Growth Opportunities</h4>
                <p>Continuous learning and career advancement paths</p>
              </div>
              <div className="benefit-item">
                <h4>Innovative Projects</h4>
                <p>Work on cutting-edge construction projects</p>
              </div>
              <div className="benefit-item">
                <h4>Great Culture</h4>
                <p>Collaborative environment with work-life balance</p>
              </div>
            </div>
          </div>
          <div className="career-link">
            <Link 
              to="/careers" 
              // target="_blank" 
              rel="noopener noreferrer"
              className="open-positions-link"
            >
              VIEW OPEN POSITIONS
              <Arrow
                direction="right"
                color="var(--indigo)"
                hoverColor="var(--green)"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
