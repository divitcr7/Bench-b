import "./details.scss";
import { Plus } from "lucide-react";
export const whoWeServeData = [
  [
    "Property Managers",
    "Real Estate Investors",
    "Portfolio Managers",
    "Private Money Lenders",
  ],
  [
    "Real Estate Developers",
    "Asset Managers",
    "Private Equity Firms",
    "Real Estate Agents",
  ],
  [
    "Wholesalers",
    "Single Family Investors",
    "Multifamily Investors",
    "Banks Forced Placed Policies",
  ],
];

export default function Details() {
  return (
    <section className="details-container">
      <div className="details padding-container">
        <h2>Details</h2>
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
        <div className="who-we-serve">
          <h3>Who We Serve</h3>
          <div className="columns">
            {whoWeServeData.map((column, index) => (
              <ul key={index} className="column">
                {column.map((item, idx) => (
                  <h5>
                    <img src="./assets/icons/gold-diamond.png" />
                    <li key={idx}>{item}</li>
                  </h5>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
