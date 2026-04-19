"use client";

import { TransitionLink } from "@/components/TransitionLink";
import { Typewriter } from "@/components/Typewriter";
import { SectionPager } from "@/components/SectionPager";
import { Navigation } from "@/components/Navigation";

export default function About() {

  return (
    <section className="about-section">
      <Navigation variant="about" activePath="/about" />

      {/* About Header */}
      <div className="about-header">
        <h2 className="about-title">About</h2>
      </div>

      <SectionPager>
        {/* Page 1 */}
        <div>
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
              Product designer turned full-stack and blockchain developer. I design, ship, and operate digital products end-to-end with a <span className="highlight">focus on structure, clarity, and restraint.</span> My work lives between design, code, and on-chain systems, where every decision is intentional and every detail carries weight.
            </p>
            <p className="about-subdescription">
              I care about balance, rhythm, and the space between elements, building interfaces and infrastructure that feel quiet, deliberate, and built to last.
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
                  <span className="experience-number">3+</span>
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
        </div>

        {/* Page 2 */}
        <div>
          {/* Hello Section mirror */}
          <div className="hello-section">
            <span className="hello-text">Deeper.</span>
            <h3 className="im-jester">WHY THIS WORK</h3>
          </div>

          {/* About Content */}
          <div className="about-content">
            <p className="about-description">
              I work across design, frontend, and blockchain: on-chain tooling, autonomous agents, multi-agent productivity, prediction markets, and the interfaces that make all of it feel ordinary to use. <span className="highlight">The common thread is building things that are trustworthy, legible, and actually usable, all at once.</span>
            </p>
            <p className="about-subdescription">
              I've shipped for clients across Web3, for hackathons, and for my own projects on Sui, Monad, Base, Solana, and 0G. What I'm passionate about is the moment a system earns someone's trust: when the chain, the code, and the UI all hold up under real use.
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
                  <span className="experience-number">3+</span>
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
        </div>
      </SectionPager>


    </section>
  );
}
