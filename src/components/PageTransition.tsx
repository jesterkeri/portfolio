"use client";

import { createContext, useContext, useState, useCallback, ReactNode } from "react";
import { useRouter, usePathname } from "next/navigation";

type TransitionType = "curtain" | "fade" | null;

interface TransitionContextType {
  navigateWithTransition: (href: string) => void;
}

const TransitionContext = createContext<TransitionContextType | null>(null);

export function usePageTransition() {
  const context = useContext(TransitionContext);
  if (!context) {
    throw new Error("usePageTransition must be used within PageTransitionProvider");
  }
  return context;
}

interface PageTransitionProviderProps {
  children: ReactNode;
}

export function PageTransitionProvider({ children }: PageTransitionProviderProps) {
  const [transitionType, setTransitionType] = useState<TransitionType>(null);
  const router = useRouter();
  const pathname = usePathname();

  const navigateWithTransition = useCallback((href: string) => {
    const isFromHome = pathname === "/";
    const isToHome = href === "/";
    const isFromAchievements = pathname === "/achievements";
    const isToAchievements = href === "/achievements";

    // Use curtain animation for home page and achievements page
    const useCurtain = isFromHome || isToHome || isFromAchievements || isToAchievements;

    if (useCurtain) {
      setTransitionType("curtain");
      setTimeout(() => {
        router.push(href);
        setTimeout(() => {
          setTransitionType(null);
        }, 100);
      }, 600);
    } else {
      // Use fade animation for transitions between inner pages
      setTransitionType("fade");
      setTimeout(() => {
        router.push(href);
        setTimeout(() => {
          setTransitionType(null);
        }, 100);
      }, 500);
    }
  }, [router, pathname]);

  return (
    <TransitionContext.Provider value={{ navigateWithTransition }}>
      {/* Left Curtain */}
      <div className={`curtain curtain-left ${transitionType === "curtain" ? 'curtain-closed' : ''}`} />
      {/* Right Curtain */}
      <div className={`curtain curtain-right ${transitionType === "curtain" ? 'curtain-closed' : ''}`} />
      {/* Fade Overlay */}
      <div className={`fade-overlay ${transitionType === "fade" ? 'fade-active' : ''}`} />
      {children}
    </TransitionContext.Provider>
  );
}
