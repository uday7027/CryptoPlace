import React from "react";
import "./Features.css";

const Features = () => {
  return (
    <section className="features">
      <h2 className="features-title">Our Key Features</h2>
      <div className="features-container">
        <div className="feature-card">
          <div className="feature-icon">⚡</div>
          <h3>Fast & Secure</h3>
          <p>
            Experience lightning-fast performance with top-level security for
            your data.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">💳</div>
          <h3>Easy Payments</h3>
          <p>
            Seamless and secure payment integration for hassle-free transactions.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">📊</div>
          <h3>Analytics Dashboard</h3>
          <p>
            Get real-time insights and track your growth with interactive charts.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
