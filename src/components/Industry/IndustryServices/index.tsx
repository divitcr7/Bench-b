import "./industryservices.scss";

interface ServiceItem {
  title: string;
  description: string;
  icon: string;
}

interface IndustryServicesProps {
  title: string;
  description: string;
  services: ServiceItem[];
}

export default function IndustryServices({ title, description, services }: IndustryServicesProps) {
  return (
    <section className="industry-services">
      <div className="industry-services-container padding-container">
        <div className="services-header">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">
                <img src={service.icon} alt={service.title} />
              </div>
              <div className="service-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 