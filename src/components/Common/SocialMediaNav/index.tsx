import "./nav.scss";
export default function SocialMediaNav() {
  return (
    <nav className="side-nav">
      <div>
        <a href="https://www.facebook.com/benchmarkinsurance/">
          <img
            src="/assets/icons/facebook.png"
            alt="facebook icon"
            loading="lazy"
            decoding="async"
          />
        </a>
        <a href="https://www.instagram.com/benchmarkinsurance/">
          <img
            src="/assets/icons/instagram.png"
            alt="instagram icon"
            loading="lazy"
            decoding="async"
          />
        </a>
        <a href="https://www.linkedin.com/company/benchmark-insurance-group-of-texas/">
          <img
            src="/assets/icons/linkedin.png"
            alt="linkedin icon"
            loading="lazy"
            decoding="async"
          />
        </a>
      </div>
    </nav>
  );
}
