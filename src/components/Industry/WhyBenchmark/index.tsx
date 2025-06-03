import "./whyBenchmark.scss";

const whyBenchmarkData = [
  {
    id: 1,
    title: "Simplified Processes",
    description: "Say goodbye to confusing forms and slow service. Our proprietary tech platform delivers real-time quoting, instant COIs, live claims tracking, and smart portfolio management.",
    featured: true
  },
  {
    id: 2,
    title: "Real Industry Experience",
    description: "The people who serve as directors and officers at a company can face personal liability for their actions. D&O insurance provides coverage.",
    featured: false
  },
  {
    id: 3,
    title: "Portfolio Risk Analysis",
    description: "We assess risk across your entire real estate portfolio, identifying vulnerabilities in coverage, emerging exposures (e.g., flood, crime, fire, tenant liability), and market-specific insurance gaps.",
    featured: false
  },
  {
    id: 4,
    title: "National Reach, Boutique Touch",
    description: "Licensed nationwide. Focused on service. Our clients get concierge-level support and big-market leverage, backed by over 100 A-rated insurance carriers.",
    featured: false
  }
];

export default function WhyBenchmarkIndustry() {
  return (
    <section className="why-benchmark-container">
      <div className="why-benchmark padding-container">
        <h2>Why Benchmark?</h2>
        <div className="why-benchmark-grid">
          {whyBenchmarkData.map((item) => (
            <div 
              key={item.id} 
              className={`why-benchmark-card ${item.featured ? 'featured' : ''}`}
            >
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 