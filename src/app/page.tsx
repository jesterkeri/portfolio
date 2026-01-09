"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { TransitionLink } from "@/components/TransitionLink";

export default function Home() {
  const imageRef = useRef<HTMLImageElement>(null);
  const blackTextRef = useRef<HTMLHeadingElement>(null);
  const whiteTextRef = useRef<HTMLHeadingElement>(null);
  const [showSocials, setShowSocials] = useState(false);

  useEffect(() => {
    const updateTextMask = (): void => {
      const image = imageRef.current;
      const blackText = blackTextRef.current;
      const whiteText = whiteTextRef.current;

      if (image && blackText && whiteText) {
        const imgRect = image.getBoundingClientRect();
        const blackTextRect = blackText.getBoundingClientRect();

        // Position white text exactly over black text
        whiteText.style.position = 'fixed';
        whiteText.style.left = `${blackTextRect.left}px`;
        whiteText.style.top = `${blackTextRect.top}px`;
        whiteText.style.transform = 'none';

        // Calculate mask position relative to where white text now is (same as black text)
        const offsetX = imgRect.left - blackTextRect.left;
        const offsetY = imgRect.top - blackTextRect.top;

        whiteText.style.maskImage = `url('/eren.png')`;
        whiteText.style.maskSize = `${imgRect.width}px ${imgRect.height}px`;
        whiteText.style.maskPosition = `${offsetX}px ${offsetY}px`;
        whiteText.style.maskRepeat = "no-repeat";

        whiteText.style.webkitMaskImage = `url('/eren.png')`;
        whiteText.style.webkitMaskSize = `${imgRect.width}px ${imgRect.height}px`;
        whiteText.style.webkitMaskPosition = `${offsetX}px ${offsetY}px`;
        whiteText.style.webkitMaskRepeat = "no-repeat";

        // Show white text after mask is applied
        whiteText.classList.add("mask-ready");
      }
    };

    updateTextMask();
    window.addEventListener("resize", updateTextMask);

    // Recalculate when image loads
    const image = imageRef.current;
    if (image) {
      image.addEventListener("load", updateTextMask);
    }

    const timeout = setTimeout(updateTextMask, 100);
    const timeout2 = setTimeout(updateTextMask, 500);

    return () => {
      window.removeEventListener("resize", updateTextMask);
      if (image) {
        image.removeEventListener("load", updateTextMask);
      }
      clearTimeout(timeout);
      clearTimeout(timeout2);
    };
  }, []);

  return (
    <main className="home">
      <div className="background-color" />

      {/* Navigation */}
      <nav className="navigation">
        <div className="nav-container">
          <TransitionLink href="/" className="logo">Jester.keri</TransitionLink>
          <ul className="nav-links">
            <li><TransitionLink href="/about">About</TransitionLink></li>
            <li><TransitionLink href="/skills">Skills</TransitionLink></li>
            <li><TransitionLink href="/projects">Projects</TransitionLink></li>
            <li><TransitionLink href="/achievements">Achievements</TransitionLink></li>
          </ul>
        </div>
        <div className="contact-btn" onClick={() => setShowSocials(!showSocials)}>
          <span>Contact</span>
          <svg className="arrow-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M4 10H16M16 10L10 4M16 10L10 16" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </nav>

      {/* Name Text (Black - behind image) */}
      <div className="name-container">
        <h1 ref={blackTextRef} className="name-joshua">JOSHUA</h1>
        <h1 className="name-zekeri">ZEKERI</h1>
      </div>

      {/* Ghost Images - Left Side */}
      <Image src="/eren.png" alt="" width={578} height={946} className="hero-image ghost-image ghost-left-2" />
      <Image src="/eren.png" alt="" width={578} height={946} className="hero-image ghost-image ghost-left-1" />

      {/* Hero Image */}
      <Image
        ref={imageRef}
        src="/eren.png"
        alt="Hero"
        width={578}
        height={946}
        className="hero-image"
        priority
      />

      {/* Ghost Images - Right Side */}
      <Image src="/eren.png" alt="" width={578} height={946} className="hero-image ghost-image ghost-right-1" />
      <Image src="/eren.png" alt="" width={578} height={946} className="hero-image ghost-image ghost-right-2" />

      {/* White Text Overlay (above image, masked) */}
      <h1 ref={whiteTextRef} className="name-joshua-white">JOSHUA</h1>

      {/* Bottom Section */}
      <svg className="design-text" viewBox="0 0 380 100">
        <defs>
          <linearGradient id="fadeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#121212" stopOpacity="1" />
            <stop offset="100%" stopColor="#121212" stopOpacity="0" />
          </linearGradient>
        </defs>
        <text x="0" y="80" fill="none" stroke="url(#fadeGradient)" strokeWidth="1">DESIGN</text>
      </svg>
      <div className="number-text">00</div>

      {/* Text Container */}
      <div className="text-container">
        <span className="role">Product designer</span>
        <span className="role">frontend developer</span>
      </div>

      {/* Socials */}
      <div className={`socials ${showSocials ? 'socials-visible' : ''}`}>
        <div className="socials-content">
          <a href="#" className="social-link">X</a>
          <span className="social-item">Telegram</span>
          <span className="social-item">Email</span>
        </div>
      </div>
    </main>
  );
}
