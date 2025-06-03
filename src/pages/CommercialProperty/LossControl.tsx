import React from 'react';
import './styles.scss';

const LossControl: React.FC = () => {
  return (
    <div className="loss-control">
      <div className="loss-control__header">
        <h1 className="loss-control__header-title">
          🚨 Benchmark Insurance Group
        </h1>
        <h2 className="loss-control__header-subtitle">
          Loss Control, Mitigation & Emergency Response Planning
        </h2>
        <p className="loss-control__header-tagline">
          Proactive Risk Management that Protects What Matters Most.
        </p>
      </div>

      <div className="loss-control__content">
        <section className="section">
          <h2 className="section__title">🌐 Overview</h2>
          <p className="section__text">
            The best insurance claim is the one you never have to file. At Benchmark Insurance Group, we take a proactive stance on risk with Loss Control, Mitigation, and Emergency Response Planning services tailored to real estate portfolios, construction sites, hospitality properties, and high-risk commercial operations.
          </p>
          <p className="section__text">
            We identify vulnerabilities, reduce potential losses, and build crisis-ready frameworks—so your people, properties, and profits are protected long before a claim occurs.
          </p>
        </section>

        <section className="section">
          <h2 className="section__title">🔐 Key Service Components</h2>
          <div className="feature-list">
            <div className="feature-list__item">
              <h3 className="feature-list__item-title">1. Onsite Risk Assessments</h3>
              <p className="feature-list__item-description">
                Our field team and safety consultants conduct property- and project-specific inspections to evaluate:
              </p>
              <ul className="feature-list__item-list">
                <li>Fire protection systems</li>
                <li>Access controls and surveillance</li>
                <li>Building codes and safety compliance</li>
                <li>Water intrusion risk</li>
                <li>Natural disaster exposure (wind, flood, earthquake zones)</li>
              </ul>
              <p className="feature-list__item-description">
                Deliverables include a comprehensive risk grading report and customized recommendations matrix.
              </p>
            </div>

            <div className="feature-list__item">
              <h3 className="feature-list__item-title">2. Custom Loss Mitigation Protocols</h3>
              <p className="feature-list__item-description">
                We develop targeted loss mitigation plans for high-exposure areas like:
              </p>
              <ul className="feature-list__item-list">
                <li>Unoccupied buildings or renovation sites</li>
                <li>Rooftop equipment and HVAC systems</li>
                <li>Sprinkler impairments or fire watch conditions</li>
                <li>Slips, trips, and falls in high-traffic zones</li>
              </ul>
              <p className="feature-list__item-description">
                Mitigation measures include physical upgrades, procedural changes, and employee training.
              </p>
            </div>

            <div className="feature-list__item">
              <h3 className="feature-list__item-title">3. Emergency Response Planning</h3>
              <p className="feature-list__item-description">
                We build robust Emergency Response Plans (ERPs) to prepare your team for fire, flood, storm, active threats, and civil unrest. Our plans include:
              </p>
              <ul className="feature-list__item-list">
                <li>Site-specific evacuation and lockdown protocols</li>
                <li>Utility and shut-off maps</li>
                <li>Key vendor contacts</li>
                <li>Tenant and guest communication procedures</li>
                <li>Coordination with local emergency responders</li>
              </ul>
              <p className="feature-list__item-description">
                These plans meet insurance requirements and can help reduce premium costs.
              </p>
            </div>

            <div className="feature-list__item">
              <h3 className="feature-list__item-title">4. Contractor Safety Protocols</h3>
              <p className="feature-list__item-description">
                For construction sites and large renovations, we design and enforce safety procedures aligned with OSHA, NFPA, and city code compliance. We assist with:
              </p>
              <ul className="feature-list__item-list">
                <li>Subcontractor prequalification</li>
                <li>Daily jobsite safety plans</li>
                <li>Incident tracking systems</li>
                <li>Builders risk claim prevention</li>
              </ul>
            </div>

            <div className="feature-list__item">
              <h3 className="feature-list__item-title">5. Technology-Driven Monitoring</h3>
              <p className="feature-list__item-description">
                Through our digital risk dashboard, clients can access:
              </p>
              <ul className="feature-list__item-list">
                <li>Risk scores by property</li>
                <li>Inspection schedules</li>
                <li>Open issue tracking</li>
                <li>Emergency plan documentation</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section">
          <h2 className="section__title">🏢 Industries We Serve</h2>
          <ul className="benefits-list">
            <li>Multifamily & Mixed-Use Real Estate</li>
            <li>Hospitality & Boutique Hotels</li>
            <li>Construction & Development</li>
            <li>Retail Centers & Industrial Parks</li>
            <li>Student Housing & Senior Living</li>
          </ul>
        </section>

        <section className="section">
          <h2 className="section__title">⚡ Why Benchmark Insurance?</h2>
          <div className="why-choose">
            <p className="why-choose__item">
              <strong>Expertise Across Sectors:</strong> We blend insurance insight with real estate operations and construction management know-how.
            </p>
            <p className="why-choose__item">
              <strong>On-the-Ground Action:</strong> Our risk consultants work directly with your property managers, general contractors, and engineers.
            </p>
            <p className="why-choose__item">
              <strong>Premium Impact:</strong> Proactive risk control strategies often lead to improved underwriting outcomes and reduced insurance costs.
            </p>
          </div>
        </section>

        <section className="section">
          <h2 className="section__title">📘 Be Ready. Stay Protected.</h2>
          <p className="cta__text">
            Insurance is your safety net. But loss prevention is your first defense. Partner with Benchmark Insurance to implement proactive risk control strategies and emergency response systems that work in real time.
          </p>
          <p className="cta__text">
            Book a consultation with our Risk Control & Safety Team today.
          </p>
          <button className="cta__button" onClick={() => window.open('https://app.benchmarkbroker.com', '_blank')}>
            Schedule a Consultation
          </button>
        </section>
      </div>
    </div>
  );
};

export default LossControl; 