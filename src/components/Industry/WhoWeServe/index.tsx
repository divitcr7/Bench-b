import "./whoWeServe.scss";

const clientTypes = {
  leftColumn: [
    "Property Managers",
    "Real Estate Investors", 
    "Portfolio Managers",
    "Private Money Lenders"
  ],
  rightColumn: [
    "Real Estate Developers",
    "Asset Managers",
    "Private Equity Firms",
    "Real Estate Agents"
  ]
};

export default function WhoWeServe() {
  return (
    <section className="who-we-serve-container">
      <div className="who-we-serve-content">
        <div className="who-we-serve-text">
          <h2>Who We Serve</h2>
          <div className="clients-grid">
            <div className="clients-column">
              {clientTypes.leftColumn.map((client, index) => (
                <div key={index} className="client-item">
                  <span className="bullet">•</span>
                  <span className="client-name">{client}</span>
                </div>
              ))}
            </div>
            <div className="clients-column">
              {clientTypes.rightColumn.map((client, index) => (
                <div key={index} className="client-item">
                  <span className="bullet">•</span>
                  <span className="client-name">{client}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="who-we-serve-bg">
          <img 
            src="/assets/images/partners/Rectangle 2065.png" 
            alt="Background"
            className="bg-rectangle"
          />
          <img 
            src="/assets/images/partners/Mask group.png" 
            alt="Pattern"
            className="bg-pattern"
          />
        </div>
      </div>
    </section>
  );
} 