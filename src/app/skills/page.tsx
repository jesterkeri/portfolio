"use client";

import { useState } from "react";
import Image from "next/image";
import { TransitionLink } from "@/components/TransitionLink";

export default function Skills() {
  const [showSocials, setShowSocials] = useState(false);

  return (
    <section className="skills-section">
      {/* Navigation */}
      <nav className="skills-navigation">
        <div className="nav-container">
          <TransitionLink href="/" className="logo skills-logo">Jester.keri</TransitionLink>
          <ul className="nav-links skills-nav-links">
            <li><TransitionLink href="/about">About</TransitionLink></li>
            <li><TransitionLink href="/skills" className="active">Skills</TransitionLink></li>
            <li><TransitionLink href="/projects">Projects</TransitionLink></li>
            <li><TransitionLink href="/achievements">Achievements</TransitionLink></li>
          </ul>
        </div>
        <div className="contact-btn skills-contact-btn" onClick={() => setShowSocials(!showSocials)}>
          <span>Contact</span>
          <svg className="arrow-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M4 10H16M16 10L10 4M16 10L10 16" stroke="#121212" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </nav>

      {/* Skills Header */}
      <div className="skills-header">
        <h2 className="skills-title">Skillset</h2>
      </div>

      {/* Profile Image */}
      <div className="skills-profile">
        <Image
          src="/eren2.png"
          alt="Profile"
          width={372}
          height={372}
          className="skills-profile-image"
        />
      </div>

      {/* Section Number */}
      <div className="skills-number-text">02</div>

      {/* Skill Categories */}
      <div className="skills-list">
        {/* Product Design */}
        <div className="skill-category">
          <h3 className="skill-name">Product design</h3>
          <div className="skill-content">
            <div className="skill-items">
              <span className="skill-item">Dimensions</span>
              <span className="skill-item">Figma</span>
              <span className="skill-item">Photoshop</span>
              <span className="skill-item">Illustrator</span>
              <span className="skill-item">Canva</span>
            </div>
          </div>
        </div>

        {/* Frontend */}
        <div className="skill-category">
          <h3 className="skill-name large">Frontend</h3>
          <div className="skill-content">
            <div className="skill-items">
              <span className="skill-item">JavaScript</span>
              <span className="skill-item">TypeScript</span>
              <span className="skill-item">CSS</span>
              <span className="skill-item">Tailwind CSS</span>
              <span className="skill-item">React.js</span>
              <span className="skill-item">Next.js</span>
            </div>
          </div>
        </div>

        {/* Tools */}
        <div className="skill-category">
          <h3 className="skill-name">Tools</h3>
          <div className="skill-content">
            <div className="skill-items">
              <span className="skill-item">Git</span>
              <span className="skill-item">Vercel</span>
              <span className="skill-item">PostgreSQL</span>
              <span className="skill-item">Docker</span>
              <span className="skill-item">claude</span>
            </div>
          </div>
        </div>

        {/* Blockchain */}
        <div className="skill-category">
          <h3 className="skill-name">Blockchain</h3>
          <div className="skill-content">
            <div className="skill-items">
              <span className="skill-item">Sui Move</span>
              <span className="skill-item">Walrus</span>
              <span className="skill-item">SuiNS</span>
            </div>
          </div>
        </div>
      </div>

      {/* Socials */}
      <div className={`socials ${showSocials ? 'socials-visible' : ''}`}>
        <div className="socials-content">
          <a href="#" className="social-link">X</a>
          <span className="social-item">Telegram</span>
          <span className="social-item">Email</span>
        </div>
      </div>
    </section>
  );
}
