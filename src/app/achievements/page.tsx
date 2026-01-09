"use client";

import { useState } from "react";
import Image from "next/image";
import { TransitionLink } from "@/components/TransitionLink";

const achievements = [
  {
    title: "Sui Overflow Hackathon 2025",
    description: "Awarded to the Giverep Team for innovative approach towards social fi on web3",
    place: "First Place",
  },
  {
    title: "Walrus Haulout Hackathon 2025",
    description: "Awarded to the krilly Team for real time watch to earn platform",
    place: "2nd Place",
  },
  {
    title: "IOTA MOVEATHON Europe 2025",
    description: "Awarded to the krilly team for building an innovative social platform on the IOTA ecosystem",
    place: "First Place",
  },
];

export default function Achievements() {
  const [showSocials, setShowSocials] = useState(false);

  return (
    <section className="achievements-section">
      {/* Background */}
      <div className="achievements-background" />

      {/* Ghost Images */}
      <Image src="/eren-front.png" alt="" width={770} height={848} className="achievements-hero achievements-ghost ghost-left-2" />
      <Image src="/eren-front.png" alt="" width={770} height={848} className="achievements-hero achievements-ghost ghost-left-1" />

      {/* Hero Image */}
      <Image src="/eren-front.png" alt="" width={770} height={848} className="achievements-hero" />

      {/* Ghost Images Right */}
      <Image src="/eren-front.png" alt="" width={770} height={848} className="achievements-hero achievements-ghost ghost-right-1" />
      <Image src="/eren-front.png" alt="" width={770} height={848} className="achievements-hero achievements-ghost ghost-right-2" />

      {/* Navigation */}
      <nav className="achievements-navigation">
        <div className="nav-container">
          <TransitionLink href="/" className="logo achievements-logo">Jester.keri</TransitionLink>
          <ul className="nav-links achievements-nav-links">
            <li><TransitionLink href="/about">About</TransitionLink></li>
            <li><TransitionLink href="/skills">Skills</TransitionLink></li>
            <li><TransitionLink href="/projects">Projects</TransitionLink></li>
            <li><TransitionLink href="/achievements" className="active">Achievements</TransitionLink></li>
          </ul>
        </div>
        <div className="contact-btn achievements-contact-btn" onClick={() => setShowSocials(!showSocials)}>
          <span>Contact</span>
          <svg className="arrow-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M4 10H16M16 10L10 4M16 10L10 16" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </nav>

      {/* Achievements Header */}
      <div className="achievements-header">
        <h2 className="achievements-title">Achievements</h2>
      </div>

      {/* Achievements Container */}
      <div className="achievements-container">
        {achievements.map((achievement, index) => (
          <div key={index} className="achievement-card">
            <div className="achievement-header-row">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#FFB02E"/>
              </svg>
              <span className="achievement-place">{achievement.place}</span>
            </div>
            <div className="achievement-content">
              <h3 className="achievement-card-title">{achievement.title}</h3>
              <p className="achievement-description">{achievement.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Thank You Section */}
      <div className="thank-you-section">
        <h2 className="thank-you-text">Thank You!</h2>
        <div className="achievements-number-text">04</div>
        <p className="collab-text">Available for collaboration on Web2 and Web3 projects.</p>
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
