import "./whatwedo.scss";

export default function WhatWeDo() {
  const data = [
    {
      id: 1,
      imgUrl: "/assets/icons/industry.png",
      title: "Industry Specialist",
      type: [
        "Real Estate",
        "Transportation",
        "Construction",
        "Wholesale Distribution",
        "Food & Beverage",
      ],
    },
    {
      id: 2,
      imgUrl: "/assets/icons/risk-analysis.png",
      title: "Risk Analysis",
      type: [
        "Safety and Loss Control",
        "Certification Validation",
        "Contract Review",
        "Claim Catastrophe Support",
        "Risk Technology",
      ],
    },
    {
      id: 3,
      imgUrl: "/assets/icons/rate.png",
      title: "Rate Negotiation",
      type: ["We Tell Your Story", "Industry Low Rates"],
    },
    {
      id: 4,
      imgUrl: "/assets/icons/tech.png",
      title: "Technology/Automation",
      type: [
        "Certificate",
        "Safety Program Management",
        "Streamlined Audits",
        "Osha Complaince",
        "Self Service Portal",
      ],
    },
    {
      id: 5,
      imgUrl: "/assets/icons/claim.png",
      title: "Claim Support/Loss Miitigation",
      type: [],
    },
  ];
  return (
    <section className="whatWeDo-container">
      <div className="whatWeDo padding-container">
        <div>
          <h2>What We Do</h2>
          {/* circular image */}
          <span>
            <img src="/assets/images/what-we-do.png" />
          </span>
        </div>
        {/* cards section */}
        <div className="whatWeDo-card-container">
          {data.map((item) => (
            <div key={item.id} className="whatWeDo-card">
              <div >
                {/* icon image */}
                <span>
                  <img src={item.imgUrl} />
                </span>
                <div>
                  {/* title */}
                  <h3>{item.title}</h3>
                  {/* numbering */}
                  <h2>0{item.id}</h2>
                </div>
              </div>
              <ul className="">
                {item.type.map((type, index) => (
                  <li key={index}>
                    {/* bullet points */}
                    <img src="/assets/icons/gold-diamond.png" />
                    {/* type of service */}
                    <h5>{type}</h5>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
