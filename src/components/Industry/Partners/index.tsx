import "./partners.scss";

const partnersData = [
  {
    id: 1,
    name: "AIG",
    logo: "/assets/images/partners/Group 22.png",
    alt: "AIG Insurance"
  },
  {
    id: 2,
    name: "Zurich",
    logo: "/assets/images/partners/image 1.png", 
    alt: "Zurich Insurance"
  },
  {
    id: 3,
    name: "Liberty Mutual",
    logo: "/assets/images/partners/unnamed 1.png",
    alt: "Liberty Mutual Insurance"
  },
  {
    id: 4,
    name: "Berkshire Hathaway",
    logo: "/assets/images/partners/Northmarq Capital 1.png",
    alt: "Berkshire Hathaway Insurance"
  },
  {
    id: 5,
    name: "NAIOP",
    logo: "/assets/images/partners/NAIOP LOGO 2.png",
    alt: "NAIOP"
  }
];

export default function Partners() {
  return (
    <section className="partners-container">
      <div className="partners padding-container">
        <h2>Our Customers and Associations</h2>
        <p>Feel free to schedule an appointment with one of our experienced specialists or with a Department</p>
        <div className="partners-grid">
          {partnersData.map((partner) => (
            <div key={partner.id} className="partner-logo">
              <img 
                src={partner.logo} 
                alt={partner.alt}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 