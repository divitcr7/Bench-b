import "./industrycoverage.scss";

interface CoverageItem {
  title: string;
  description: string;
  icon: string;
}

interface IndustryCoverageProps {
  title: string;
  description: string;
  coverages: CoverageItem[];
}

export default function IndustryCoverage({ title, description, coverages }: IndustryCoverageProps) {
  return (
    <section className="industry-coverage">
      <div className="industry-coverage-container padding-container">
        <div className="coverage-header">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>

        <div className="coverage-grid">
          {coverages.map((coverage, index) => (
            <div key={index} className="coverage-card">
              <div className="coverage-icon">
                <img src={coverage.icon} alt={coverage.title} />
              </div>
              <div className="coverage-content">
                <h3>{coverage.title}</h3>
                <p>{coverage.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 