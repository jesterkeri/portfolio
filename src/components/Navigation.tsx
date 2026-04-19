"use client";

import { useState } from "react";
import { TransitionLink } from "@/components/TransitionLink";

type NavigationProps = {
  variant?: "home" | "about" | "skills" | "projects" | "achievements";
  activePath?: string;
};

export function Navigation({ variant = "home", activePath = "/" }: NavigationProps) {
  const [showSocials, setShowSocials] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const config = {
    home: {
      nav: "navigation",
      logo: "logo",
      links: "nav-links",
      contact: "contact-btn",
      stroke: "#FFFFFF",
      burgerStroke: "#121212",
    },
    about: {
      nav: "about-navigation",
      logo: "logo about-logo",
      links: "nav-links about-nav-links",
      contact: "contact-btn about-contact-btn",
      stroke: "#121212",
      burgerStroke: "#FFFFFF",
    },
    skills: {
      nav: "skills-navigation",
      logo: "logo skills-logo",
      links: "nav-links skills-nav-links",
      contact: "contact-btn skills-contact-btn",
      stroke: "#121212",
      burgerStroke: "#FFFFFF",
    },
    projects: {
      nav: "projects-navigation",
      logo: "logo projects-logo",
      links: "nav-links projects-nav-links",
      contact: "contact-btn projects-contact-btn",
      stroke: "#121212",
      burgerStroke: "#FFFFFF",
    },
    achievements: {
      nav: "achievements-navigation",
      logo: "logo achievements-logo",
      links: "nav-links achievements-nav-links",
      contact: "contact-btn achievements-contact-btn",
      stroke: "#FFFFFF",
      burgerStroke: "#121212",
    },
  };

  const { nav, logo, links, contact, stroke, burgerStroke } = config[variant];

  return (
    <>
      <nav className={nav}>
        <div className="nav-container">
          <TransitionLink href="/" className={logo}>Jester.keri</TransitionLink>
          
          {/* Desktop Links */}
          <ul className={`${links} desktop-only`}>
            <li><TransitionLink href="/about" className={activePath === "/about" ? "active" : ""}>About</TransitionLink></li>
            <li><TransitionLink href="/skills" className={activePath === "/skills" ? "active" : ""}>Skills</TransitionLink></li>
            <li><TransitionLink href="/projects" className={activePath === "/projects" ? "active" : ""}>Projects</TransitionLink></li>
            <li><TransitionLink href="/achievements" className={activePath === "/achievements" ? "active" : ""}>Achievements</TransitionLink></li>
          </ul>

        </div>

        {/* Global Nav Actions (Contact + Hamburger) */}
        <div className="nav-actions">
          <div className={`${contact}`} onClick={() => setShowSocials(!showSocials)}>
            <span>Contact</span>
            <svg className="arrow-icon mobile-hide" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M4 10H16M16 10L10 4M16 10L10 16" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          <div className="hamburger-btn mobile-only" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={burgerStroke} strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={burgerStroke} strokeWidth="2">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-content">
          <ul className="mobile-nav-links">
            <li><TransitionLink href="/about" className={activePath === "/about" ? "active" : ""} onClick={() => setIsMobileMenuOpen(false)}>About</TransitionLink></li>
            <li><TransitionLink href="/skills" className={activePath === "/skills" ? "active" : ""} onClick={() => setIsMobileMenuOpen(false)}>Skills</TransitionLink></li>
            <li><TransitionLink href="/projects" className={activePath === "/projects" ? "active" : ""} onClick={() => setIsMobileMenuOpen(false)}>Projects</TransitionLink></li>
            <li><TransitionLink href="/achievements" className={activePath === "/achievements" ? "active" : ""} onClick={() => setIsMobileMenuOpen(false)}>Achievements</TransitionLink></li>
          </ul>
        </div>
      </div>

      {/* Socials */}
      <div className={`socials ${showSocials ? 'socials-visible' : ''}`}>
        <div className="socials-content">
          <a href="#" className="social-link">X</a>
          <a href="https://github.com/jesterkeri" target="_blank" rel="noopener noreferrer" className="social-link">GitHub</a>
          <span className="social-item">Telegram</span>
          <span className="social-item">Email</span>
        </div>
      </div>
    </>
  );
}
