"use client";

import { useState } from "react";
import { TransitionLink } from "@/components/TransitionLink";
import { Typewriter } from "@/components/Typewriter";

export default function About() {
  const [showSocials, setShowSocials] = useState(false);

  return (
    <section className="about-section">
      {/* Navigation */}
      <nav className="about-navigation">
        <div className="nav-container">
          <TransitionLink href="/" className="logo about-logo">Jester.keri</TransitionLink>
          <ul className="nav-links about-nav-links">
            <li><TransitionLink href="/about" className="active">About</TransitionLink></li>
            <li><TransitionLink href="/skills">Skills</TransitionLink></li>
            <li><TransitionLink href="/projects">Projects</TransitionLink></li>
            <li><TransitionLink href="/achievements">Achievements</TransitionLink></li>
          </ul>
        </div>
        <div className="contact-btn about-contact-btn" onClick={() => setShowSocials(!showSocials)}>
          <span>Contact</span>
          <svg className="arrow-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M4 10H16M16 10L10 4M16 10L10 16" stroke="#121212" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </nav>

      {/* About Header */}
      <div className="about-header">
        <h2 className="about-title">About</h2>
      </div>

      {/* Hello Section */}
      <div className="hello-section">
        <Typewriter
          text="Hello."
          speed={80}
          delay={500}
          className="hello-text"
          as="span"
        />
        <Typewriter
          text="I'M JESTER"
          speed={80}
          delay={1200}
          className="im-jester"
          as="h3"
        />
      </div>

      {/* About Content */}
      <div className="about-content">
        <p className="about-description">
          Passionate Product designer and front-end developer. I design and build digital products with a <span className="highlight">focus on structure, clarity, and restraint.</span> My work lives between design and code, where decisions are intentional and every detail carries weight.
        </p>
        <p className="about-subdescription">
          I care about balance, rhythm, and the space between elements, building interfaces that feel quiet, deliberate, and built to last.
        </p>
      </div>

      {/* Bottom Section */}
      <div className="bottom-section">
        {/* Experience Section */}
        <div className="experience-section">
          <div className="experience-item">
            <div className="experience-content">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" fill="#FFFFFF"/>
                <path d="M8 12L11 15L16 9" stroke="#121212" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="experience-number">2+</span>
            </div>
            <span className="experience-label">Years Experience</span>
          </div>
          <div className="experience-item">
            <div className="experience-content">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" fill="#FFFFFF"/>
                <path d="M8 12L11 15L16 9" stroke="#121212" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="experience-number">10+</span>
            </div>
            <span className="experience-label">Hands On Project Experience</span>
          </div>
          <div className="experience-item">
            <div className="experience-content">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" fill="#FFFFFF"/>
                <path d="M8 12L11 15L16 9" stroke="#121212" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="experience-number">10+</span>
            </div>
            <span className="experience-label">Happy Clients</span>
          </div>
          <div className="experience-item">
            <div className="experience-content">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" fill="#FFFFFF"/>
                <path d="M8 12L11 15L16 9" stroke="#121212" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="experience-number">3</span>
            </div>
            <span className="experience-label">Hackathon Awards</span>
          </div>
        </div>

        {/* Section Number */}
        <div className="section-number">01</div>
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
