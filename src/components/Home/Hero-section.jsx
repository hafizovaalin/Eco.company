import React from "react";
import "./HeroSection.css";

export default function HeroSection() {
    return (
        <section className="hero-section">
            <div className="hero-container">

                {/* Левая колонка с текстом */}
                <div className="hero-text">
                    <h1 className="Headline-1">Lessons and insights from 8 years</h1>
                    <p className="Body-2">
                        Where to grow your business as a photographer: site or social media?
                    </p>

                    <button className="button Primary normal">Get SStarted</button>

                </div>

                {/* Правая колонка с изображением */}
                <div className="hero-image">
                    <img src="/src/assets/img/Illustration.png" alt="Hero" />
                </div>
            </div>
        </section>
    );
}
