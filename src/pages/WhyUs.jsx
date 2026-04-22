import React from 'react';
import "./WhyUs.css";

const WhyUs = () => {
    const benefits = [
        {
            title: "See",
            desc: "Unified dashboard for data visibility",
            icon: "👁"
        },
        {
            title: "Understand",
            desc: "AI explains privacy risks in simple language",
            icon: "🧠"
        },
        {
            title: "Control",
            desc: "One-click permission revoke and protection",
            icon: "⚙"
        }
    ];

    return (
        <div className="why-us-container">
            <h1 className="why-us-title">Why Contend OS?</h1>
            <p className="why-us-subtitle">Your digital privacy is not a privilege — it is a right.</p>

            <div className="benefits-grid">
                {benefits.map((item, index) => (
                    <div key={index} className="benefit-card">
                        <div className="benefit-icon">{item.icon}</div>
                        <h3>{item.title}</h3>
                        <p>{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WhyUs;