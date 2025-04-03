import "./whyBenchmark.scss";

const WhyBenchmark = () => {
  const data = [
    {
      id: 1,
      imgUrl: "./assets/icons/call-green.png",
      title: "24/7 Client Support",
      description: "We are an independent agency with the customer in mind.",
    },
    {
      id: 2,
      imgUrl: "./assets/icons/bulb-green.png",
      title: "Creative Solutions Experience",
      description:
        "And perspective count when it comes to managing your risk. Your company faces certain risks, some of which are unique. You deserve a trusted, consultative advisor who will actively listen to and understand your concerns. Your Benchmark advisor will match and adapt risk management strategies to your situation through a total cost of risk approach. You benefit from having a partner who will seek to truly understand your business and then collaboratively develop a plan to reduce both direct and indirect costs.",
    },
    {
      id: 3,
      imgUrl: "./assets/icons/chat-green.png",
      title: "You Need an Advisor",
      description:
        "Who understands how important the total cost of risk can be to your success. That is why we use our knowledge of your business, our expert advisors, and strong insurance company representation to develop the risk management strategy that fits your business and safeguards your bottom line. You are involved in all key relationships that affect the terms of your policy, with the underwriter relationship being a key, but often overlooked",
    },
    {
      id: 4,
      imgUrl: "./assets/icons/user-green.png",
      title: "We Have Relationships",
      description:
        "With dozens of insurance companies, allowing you to get the right price with the right service. Whether you have the ideal history, preferred companies desire, or a not so perfect history, we find the right coverage, with the best company, at the best price for you. As an independent insurance agency, we can offer the right coverages with the personal touch you would expect from your neighborhood insurance agent.",
    },
    {
      id: 5,
      imgUrl: "./assets/icons/crown-green.png",
      title: "No Ordinary Clients",
      description:
        "Working proactively with our clients, we are able to anticipate and respond to the demands of an ever-changing and often combustible business environment. We recognize that every organization is different. We also recognize that many brokers or consultants fail to acknowledge these differences by making generic assumptions about the services your company will need and actually use. In contrast to this generalized approach, Benchmark Broker has created a unique partnership assessment tool designed specifically for our clients.",
    },
    {
      id: 6,
      imgUrl: "./assets/icons/shield-green.png",
      title: "Secure Excellent Terms and Conditions",
      description:
        "We asked our clients and business partners why they do business with us. The answer – our expertise and problem-solving skills were among the top responses. We would love the opportunity to problem-solve for you.",
    },
  ];

  return (
    <section className="whyUs-container">
      <div className="whyUs padding-container">
        <h2>Why Benchmark</h2>
        <div className="whyUs-cards-container">
          {data.map((item) => (
            <div key={item.id} className={`whyUs-card whyUs-card-${item.id}`}>
              <div>
                <span>
                  <img src={item.imgUrl} />
                </span>
                <h3 className="card-number">{`0${item.id}`}</h3>
              </div>
              <h3 className="whyUs-heading">{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyBenchmark;
