import "./details.scss";
import { Plus } from "lucide-react";

export default function Details() {
  return (
    <section className="details-container">
      <div className="details padding-container details-reduced-bottom">
        <h2>Our Approach</h2>
        <p>
          Real Estate - The unprecedented recession has caused significant
          long-term distress in the real estate sector and has had severe
          implications for developers, managers, investors, and owners alike.
          Some of the notable issues facing the real estate industry include
          environmental and construction exposures, rental income risk,
          catastrophic modeling, market uncertainty, stricter...
          <br />
          <span>
            Read More <Plus />
          </span>
        </p>
      </div>
    </section>
  );
}
