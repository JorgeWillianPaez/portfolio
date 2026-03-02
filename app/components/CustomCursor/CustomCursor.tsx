"use client";

import { useEffect, useRef, useCallback } from "react";
import styles from "./CustomCursor.module.css";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: -100, y: -100 });
  const ring = useRef({ x: -100, y: -100 });
  const rafRef = useRef<number | null>(null);

  const animate = useCallback(() => {
    if (!dotRef.current || !ringRef.current) return;

    // Ring follows dot with easing
    ring.current.x += (pos.current.x - ring.current.x) * 0.12;
    ring.current.y += (pos.current.y - ring.current.y) * 0.12;

    dotRef.current.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px) translate(-50%, -50%)`;
    ringRef.current.style.transform = `translate(${ring.current.x}px, ${ring.current.y}px) translate(-50%, -50%)`;

    rafRef.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
    };

    const onEnterInteractive = () => {
      dotRef.current?.classList.add(styles.active);
      ringRef.current?.classList.add(styles.active);
    };

    const onLeaveInteractive = () => {
      dotRef.current?.classList.remove(styles.active);
      ringRef.current?.classList.remove(styles.active);
    };

    const attachListeners = () => {
      document
        .querySelectorAll(
          "a, button, [role='button'], input, textarea, select, label",
        )
        .forEach((el) => {
          el.addEventListener("mouseenter", onEnterInteractive);
          el.addEventListener("mouseleave", onLeaveInteractive);
        });
    };

    window.addEventListener("mousemove", onMove);
    attachListeners();

    // Re-attach on DOM mutations (dynamic elements)
    const observer = new MutationObserver(attachListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      observer.disconnect();
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [animate]);

  return (
    <>
      <div ref={dotRef} className={styles.dot} />
      <div ref={ringRef} className={styles.ring} />
    </>
  );
}
