"use client";

import { useState, useEffect, ElementType } from "react";

interface TypewriterProps {
  text: string;
  highlightStart?: number;
  highlightEnd?: number;
  speed?: number;
  delay?: number;
  className?: string;
  as?: ElementType;
}

export function Typewriter({
  text,
  highlightStart,
  highlightEnd,
  speed = 30,
  delay = 500,
  className = "",
  as: Component = "p",
}: TypewriterProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [started, setStarted] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      setStarted(true);
    }, delay);

    return () => clearTimeout(startTimeout);
  }, [delay]);

  useEffect(() => {
    if (!started) return;

    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(text.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, speed);

      return () => clearTimeout(timeout);
    } else if (currentIndex === text.length && !isComplete) {
      setIsComplete(true);
    }
  }, [currentIndex, text, speed, started, isComplete]);

  const renderText = () => {
    if (highlightStart === undefined || highlightEnd === undefined) {
      return displayedText;
    }

    const beforeHighlight = displayedText.slice(0, highlightStart);
    const highlightText = displayedText.slice(highlightStart, Math.min(displayedText.length, highlightEnd));
    const afterHighlight = displayedText.slice(highlightEnd);

    return (
      <>
        {beforeHighlight}
        {highlightText && <span className="highlight">{highlightText}</span>}
        {afterHighlight}
      </>
    );
  };

  return (
    <Component className={className}>
      {renderText()}
      {!isComplete && <span className="typewriter-cursor">|</span>}
    </Component>
  );
}
