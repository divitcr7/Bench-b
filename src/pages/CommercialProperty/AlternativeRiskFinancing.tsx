import React from 'react';
import './styles.scss';

const AlternativeRiskFinancing: React.FC = () => {
  return (
    <div className="alternative-risk-financing">
      <div className="alternative-risk-financing__header">
        <h1 className="alternative-risk-financing__header-title">
          💼 Benchmark Insurance Group
        </h1>
        <h2 className="alternative-risk-financing__header-subtitle">
          Alternative Risk Financing Solutions
        </h2>
        <p className="alternative-risk-financing__header-tagline">
          Beyond Traditional Insurance. Toward Strategic Risk Capitalization.
        </p>
      </div>

      <div className="alternative-risk-financing__content">
        <section className="section">
          <h2 className="section__title">🌐 Overview</h2>
          <p className="section__text">
            As insurance markets harden and premiums rise, forward-thinking businesses are re-evaluating how they finance risk. Benchmark Insurance Group offers Alternative Risk Financing (ARF) solutions that allow our clients to gain control, reduce long-term costs, and optimize capital deployment—especially across large real estate, construction, and hospitality portfolios.
          </p>
          <p className="section__text">
            We empower clients to move from passive premium spenders to active risk managers and capital allocators.
          </p>
        </section>

        <section className="section">
          <h2 className="section__title">🧩 What is Alternative Risk Financing?</h2>
          <p className="section__text">
            Alternative Risk Financing is a customized approach to managing risk exposure through mechanisms beyond standard commercial insurance policies. It's ideal for companies that:
          </p>
          <ul className="benefits-list">
            <li>Have predictable or large-scale risk exposure</li>
            <li>Want greater transparency and control</li>
            <li>Seek long-term cost stabilization and reduced reliance on the traditional insurance market</li>
          </ul>
        </section>

        <section className="section">
          <h2 className="section__title">⚙️ Our ARF Solutions</h2>
          <div className="feature-list">
            <div className="feature-list__item">
              <h3 className="feature-list__item-title">1. Captive Insurance Formation & Management</h3>
              <p className="feature-list__item-description">
                We help clients form and manage single-parent or group captives, enabling them to retain underwriting profits, control claims handling, and gain tax benefits. This is a powerful tool for real estate groups with large property or liability schedules.
              </p>
            </div>

            <div className="feature-list__item">
              <h3 className="feature-list__item-title">2. Large Deductible & Retrospective Rating Plans</h3>
              <p className="feature-list__item-description">
                We design and place deductible structures and loss-sensitive plans that reflect your true risk appetite. These programs allow clients to pay lower upfront premiums and assume a portion of risk directly—with potential to recover unused claims reserves.
              </p>
            </div>

            <div className="feature-list__item">
              <h3 className="feature-list__item-title">3. Risk Retention Groups (RRGs)</h3>
              <p className="feature-list__item-description">
                For clients in similar industries or ownership structures, we coordinate Risk Retention Groups to collectively insure liability risks and reduce external insurance dependency.
              </p>
            </div>

            <div className="feature-list__item">
              <h3 className="feature-list__item-title">4. Parametric Insurance</h3>
              <p className="feature-list__item-description">
                We structure parametric products that pay out based on predefined triggers—like wind speeds, rainfall, or earthquake magnitude—ideal for portfolios with high CAT exposure or gaps in traditional coverage.
              </p>
            </div>

            <div className="feature-list__item">
              <h3 className="feature-list__item-title">5. Insurance-Linked Securities (ILS) & Reinsurance Access</h3>
              <p className="feature-list__item-description">
                Through our market relationships, we connect clients to reinsurance markets and capital markets, providing access to structured risk transfer vehicles typically reserved for large institutional buyers.
              </p>
            </div>
          </div>
        </section>

        <section className="section">
          <h2 className="section__title">🏗️ Who Should Consider ARF?</h2>
          <ul className="benefits-list">
            <li>Private Equity & Institutional Real Estate Funds</li>
            <li>REITs & Real Estate Syndicators</li>
            <li>Hospitality Groups with Multiple Assets</li>
            <li>Construction & Development Firms with High Annual Volume</li>
            <li>Property Managers with National Portfolios</li>
          </ul>
        </section>

        <section className="section">
          <h2 className="section__title">🚀 Why Benchmark Insurance?</h2>
          <div className="why-choose">
            <p className="why-choose__item">
              <strong>Deep Domain Expertise:</strong> We understand the risks of owning and operating real estate assets—and how to price and manage them.
            </p>
            <p className="why-choose__item">
              <strong>Integrated Technology:</strong> We use data-driven tools to assess feasibility, model financial scenarios, and provide ARF performance dashboards.
            </p>
            <p className="why-choose__item">
              <strong>End-to-End Support:</strong> From feasibility studies to regulatory compliance and ongoing management, we guide you through every phase of your alternative risk strategy.
            </p>
          </div>
        </section>

        <section className="section">
          <h2 className="section__title">📈 Take Control of Your Insurance Spend</h2>
          <p className="section__text">
            Traditional insurance is just one option. Let's explore how Alternative Risk Financing can provide you with better protection, smarter capital usage, and long-term financial resilience.
          </p>
          <p className="section__text">
            Contact us today to set up a strategic ARF consultation.
          </p>
        </section>
      </div>
    </div>
  );
};

export default AlternativeRiskFinancing; 