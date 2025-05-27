import "./whatwedo.scss";

export default function WhatWeDo() {
  const data = [
    {
      id: 1,
      title: "Real Estate Portfolios",
      imgUrl: "/assets/icons/home.png",
      type: [
        "Multifamily Properties",
        "Commercial Real Estate",
        "Single-Family Rentals",
        "Property Management"
      ]
    },
    {
      id: 2,
      title: "Construction Projects",
      imgUrl: "/assets/icons/high-value-home.png",
      type: [
        "General Contractors",
        "Specialty Contractors",
        "Construction Projects",
        "Builder's Risk"
      ]
    },
    {
      id: 3,
      title: "Hospitality & Food Service",
      imgUrl: "/assets/icons/insure.png",
      type: [
        "Hotels & Resorts",
        "Restaurants & Bars",
        "Food & Beverage Groups",
        "Entertainment Venues"
      ]
    },
    {
      id: 4,
      title: "High-Net-Worth Clients",
      imgUrl: "/assets/icons/industry.png",
      type: [
        "Private Client Services",
        "Wealth Protection",
        "Lifestyle Assets",
        "Personal Liability"
      ]
    }
  ];

  const services = [
    "Risk Assessment & Policy Structuring",
    "Digital Claims Advocacy & Management",
    "Long-Term Risk Mitigation Planning",
    "Real-Time Analytics & Insurance Tech Integration"
  ];

  return (
    <section className="whatWeDo-container">
      <div className="whatWeDo padding-container">
        <div>
          <h2>What We Do</h2>
          <p className="services-intro">
            We provide custom-built insurance programs and advisory services tailored to your specific needs. Our services span the full lifecycle of insurance, ensuring comprehensive protection and support.
          </p>
          <span>
            <img src="/assets/images/what-we-do.png" alt="What We Do" />
          </span>
        </div>
        <div className="whatWeDo-card-container">
          {data.map((item) => (
            <div key={item.id} className="whatWeDo-card">
              <div>
                <span>
                  <img src={item.imgUrl} alt={item.title} />
                </span>
                <div>
                  <h3>{item.title}</h3>
                  <h2>0{item.id}</h2>
                </div>
              </div>
              <ul>
                {item.type.map((type, index) => (
                  <li key={index}>
                    <img src="/assets/icons/gold-diamond.png" alt="bullet" />
                    <h5>{type}</h5>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="services-section">
          <h3>Our Services</h3>
          <ul>
            {services.map((service, index) => (
              <li key={index}>
                <img src="/assets/icons/gold-diamond.png" alt="bullet" />
                <h5>{service}</h5>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
