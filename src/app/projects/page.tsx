"use client";

import { useState } from "react";
import { TransitionLink } from "@/components/TransitionLink";

const projects = [
  {
    name: "Mako Markets",
    description: "Mako Markets is a short-form prediction market platform on Monad testnet. Fast markets, transparent settlement, and a Next.js frontend talking to Foundry-built Solidity contracts. Built for Monad Blitz Lagos.",
    image: "/mako.png",
    url: "https://makomarket.xyz"
  },
  {
    name: "Krait",
    description: "Krait is a cross-chain AI trading agent operating across Sui, Monad, Base, and Solana. It runs price-action strategies with indicator confluence, and pairs CCTP with account abstraction so users never touch gas. Three interfaces ship with it: a CLI, a web app, and a TradingView Chrome extension.",
    image: "/krait.png",
    url: "#"
  },
  {
    name: "Cuttlefish",
    description: "Cuttlefish is an AI-powered vibe coding app for Web3, running fully on-chain via 0G compute. Prompts stay private, generated code is verifiable, and everything ships to testnet or devnet first.",
    image: "/cuttlefish.png",
    url: "#"
  },
  {
    name: "Buddies",
    description: "Buddies is an ElizaOS multi-agent productivity platform with five specialized agents: Chief orchestrates, Hawk watches priorities, Radar surfaces context, Bounty Hunter chases deliverables, and Buddy handles the human side. Built for the Nosana Builders Challenge.",
    image: "/buddies.png",
    url: "#"
  },
  {
    name: "GiveRep",
    description: "GiveRep is a social reputation platform built on the Sui blockchain. It turns community contributions into on-chain reputation, making trust portable across Sui apps.",
    image: "/giverep.png",
    url: "#"
  },
  {
    name: "Krilly",
    description: "A creative design project showcasing modern UI/UX principles.",
    image: "/krilly.png",
    url: "#"
  },
  {
    name: "Sui NG",
    description: "Nigeria's premier Sui blockchain community platform, built to onboard and connect local developers, creators, and builders into the Sui ecosystem.",
    image: "/suing.png",
    url: "#"
  },
  {
    name: "Blast.Fun",
    description: "A fun and engaging platform for the Blast ecosystem.",
    image: "/blastfun.png",
    url: "#"
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
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                  onClick={(e) => e.stopPropagation()}
                  aria-label={`Visit ${project.name}`}
                >
                  <span className="project-link-text">Visit</span>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" fill="#121212"/>
                    <path d="M9.5 14.5L14.5 9.5M14.5 9.5H10M14.5 9.5V14" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
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
          <a href="https://github.com/jesterkeri" target="_blank" rel="noopener noreferrer" className="social-link">GitHub</a>
          <span className="social-item">Telegram</span>
          <span className="social-item">Email</span>
        </div>
      </div>
    </section>
  );
}
