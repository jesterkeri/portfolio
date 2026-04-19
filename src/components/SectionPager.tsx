"use client";

import {
  Children,
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

type Props = {
  children: ReactNode;
};

export function SectionPager({ children }: Props) {
  const pages = Children.toArray(children);
  const pagesLen = pages.length;
  const [index, setIndex] = useState(0);
  const cooldownRef = useRef(false);

  const navigate = useCallback(
    (direction: number) => {
      if (cooldownRef.current) return;
      setIndex(prev => {
        const next = prev + direction;
        if (next < 0 || next >= pagesLen) return prev;
        cooldownRef.current = true;
        setTimeout(() => {
          cooldownRef.current = false;
        }, 600);
        return next;
      });
    },
    [pagesLen]
  );

  const jumpTo = useCallback(
    (i: number) => {
      if (cooldownRef.current || i < 0 || i >= pagesLen) return;
      cooldownRef.current = true;
      setTimeout(() => {
        cooldownRef.current = false;
      }, 600);
      setIndex(i);
    },
    [pagesLen]
  );

  useEffect(() => {
    if (pagesLen <= 1) return;

    document.body.classList.add("section-pager-active");

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (Math.abs(e.deltaY) < 15) return;
      navigate(e.deltaY > 0 ? 1 : -1);
    };

    const onKey = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      if (target && (target.tagName === "INPUT" || target.tagName === "TEXTAREA")) return;
      if (["ArrowDown", "ArrowRight", "PageDown"].includes(e.key)) {
        e.preventDefault();
        navigate(1);
      } else if (["ArrowUp", "ArrowLeft", "PageUp"].includes(e.key)) {
        e.preventDefault();
        navigate(-1);
      }
    };

    let touchStartY = 0;
    const onTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };
    const onTouchMove = (e: TouchEvent) => {
      e.preventDefault();
    };
    const onTouchEnd = (e: TouchEvent) => {
      const dy = e.changedTouches[0].clientY - touchStartY;
      if (Math.abs(dy) < 50) return;
      navigate(dy < 0 ? 1 : -1);
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("keydown", onKey);
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: false });
    window.addEventListener("touchend", onTouchEnd);

    return () => {
      document.body.classList.remove("section-pager-active");
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, [navigate, pagesLen]);

  return (
    <>
      <div className="section-pager">
        {pages.map((page, i) => (
          <div
            key={i}
            className={`section-pager-page${i === index ? " active" : ""}`}
            aria-hidden={i !== index}
          >
            {page}
          </div>
        ))}
      </div>
      {pagesLen > 1 && (
        <div className="section-pager-dots" role="tablist" aria-label="Section pages">
          {pages.map((_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Go to page ${i + 1}`}
              className={`section-pager-dot${i === index ? " active" : ""}`}
              onClick={() => jumpTo(i)}
            />
          ))}
        </div>
      )}
    </>
  );
}
