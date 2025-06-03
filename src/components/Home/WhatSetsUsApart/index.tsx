import "./whatSetsUsApart.scss";

interface FeatureProps {
  id: number;
  title: string;
  description: string;
}

export default function WhatSetsUsApart() {
  const features: FeatureProps[] = [
    {
      id: 1,
      title: "Simplicity with Use of Tech",
      description: "Say goodbye to confusing forms and slow service. Our proprietary tech platform delivers real-time quoting, instant COIs, live claims tracking, and smart portfolio management."
    },
    {
      id: 2,
      title: "Real Industry Experience",
      description: "The people who serve as directors and officers at a company can face personal liability for their actions. D&O insurance provides coverage."
    },
    {
      id: 3,
      title: "Strategic Risk Consulting",
      description: "Employee lawsuits alleging discrimination and harassment are common. If you have employees, you should consider employment practices liability insurance coverage."
    },
    {
      id: 4,
      title: "National Reach, Boutique Touch",
      description: "Licensed nationwide. Focused on service. Our clients get concierge-level support and big-market leverage, backed by over 100 A-rated insurance carriers."
    }
  ];

  return (
    <section className="whatSetsUsApart_container">
      <div className="whatSetsUsApart padding-container">
        {/* Header */}
        <div className="whatSetsUsApart_header">
          <h2>What Sets Us Apart</h2>
        </div>

        {/* Features Grid */}
        <div className="whatSetsUsApart_grid">
          {features.map((feature) => (
            <div key={feature.id} className="whatSetsUsApart_card">
              <div className="feature_content">
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 