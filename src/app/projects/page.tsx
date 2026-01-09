"use client";

import { useState } from "react";
import { TransitionLink } from "@/components/TransitionLink";

const projects = [
  {
    name: "GiveRep",
    description: "Giverep is a social reputation platform built on the Sui Blockchain",
    image: "/giverep.png"
  },
  {
    name: "Krilly",
    description: "A creative design project showcasing modern UI/UX principles",
    image: "/krilly.png"
  },
  {
    name: "Sui NG",
    description: "Nigeria's premier Sui blockchain community platform",
    image: "/suing.png"
  },
  {
    name: "Roo",
    description: "An innovative application built for seamless user experiences",
    image: "/roo.png"
  },
  {
    name: "Blast.Fun",
    description: "A fun and engaging platform for the Blast ecosystem",
    image: "/blastfun.png"
  },
  {
    name: "Vonyll",
    description: "Modern design solutions for digital products",
    image: "/vonyll.png"
  },
  {
    name: "la Vera",
    description: "Elegant and sophisticated design implementations",
    image: "/lavera.png"
  },
];

export default function Projects() {
  const [showSocials, setShowSocials] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleCardClick = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="projects-section">
      {/* Navigation */}
      <nav className="projects-navigation">
        <div className="nav-container">
          <TransitionLink href="/" className="logo projects-logo">Jester.keri</TransitionLink>
          <ul className="nav-links projects-nav-links">
            <li><TransitionLink href="/about">About</TransitionLink></li>
            <li><TransitionLink href="/skills">Skills</TransitionLink></li>
            <li><TransitionLink href="/projects" className="active">Projects</TransitionLink></li>
            <li><TransitionLink href="/achievements">Achievements</TransitionLink></li>
          </ul>
        </div>
        <div className="contact-btn projects-contact-btn" onClick={() => setShowSocials(!showSocials)}>
          <span>Contact</span>
          <svg className="arrow-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M4 10H16M16 10L10 4M16 10L10 16" stroke="#121212" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </nav>

      {/* Projects Header */}
      <div className="projects-header">
        <h2 className="projects-title">Projects</h2>
      </div>

      {/* Projects Container */}
      <div className="projects-container">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`project-card ${expandedIndex === index ? 'expanded' : ''}`}
            onClick={() => handleCardClick(index)}
          >
            <div
              className="project-card-inner"
              style={{ backgroundImage: `url(${project.image})` }}
            >
              {/* Collapsed Content */}
              <div className="project-content">
                <h3 className="project-name">{project.name}</h3>
                <div className="project-expand">
                  <span className="expand-text">Expand</span>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" fill="#121212"/>
                    <path d="M10 8L16 12L10 16V8Z" fill="#FFFFFF"/>
                  </svg>
                </div>
              </div>

              {/* Expanded Content */}
              <div className="project-content-expanded">
                <h3 className="project-name-expanded">{project.name}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-collapse">
                  <span className="collapse-text">Demo</span>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" fill="#121212"/>
                    <path d="M10 8L16 12L10 16V8Z" fill="#FFFFFF"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Section Number */}
      <div className="projects-number-text">03</div>

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
