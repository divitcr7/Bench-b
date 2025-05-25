import "./industryhero.scss";
import SocialMediaNav from "@/components/Common/SocialMediaNav";

interface IndustryHeroProps {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  industries?: string[];
}

export default function IndustryHero({ title, subtitle, description, image, industries }: IndustryHeroProps) {
  return (
    <section className="industry-hero">
      <div className="industry-hero-content">
        {/* left navigation */}
        <SocialMediaNav />

        {/* heading */}
        <div className="industry-hero-heading">
          <h1>
            {title} <span>{subtitle}</span>
          </h1>
          <h4>{description}</h4>
          <button className="btn btn-filled">GET A QUOTE</button>
        </div>

        {/* industries list */}
        {industries && (
          <div className="industry-list">
            {industries.map((industry, index) => (
              <div key={index} className="industry-item">
                <img src={`/assets/icons/${industry.toLowerCase().replace(/\s+/g, '-')}.png`} alt={industry} />
                <span>{industry}</span>
              </div>
            ))}
          </div>
        )}

        {/* banner image */}
        <div className="industry-hero-image">
          <img src={image} alt={title} />
        </div>
      </div>
    </section>
  );
}
