"use client";

import { useEffect } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";

export function AnimatedCursor() {
  const prefersReducedMotion = useReducedMotion();

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const followerX = useMotionValue(-100);
  const followerY = useMotionValue(-100);

  const mainSpring = { damping: 40, stiffness: 450, mass: 0.6 };
  const followerSpring = { damping: 50, stiffness: 280, mass: 0.9 };

  const x = useSpring(cursorX, mainSpring);
  const y = useSpring(cursorY, mainSpring);
  const fx = useSpring(followerX, followerSpring);
  const fy = useSpring(followerY, followerSpring);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const handleMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      cursorX.set(clientX - 12);
      cursorY.set(clientY - 12);
      followerX.set(clientX - 22);
      followerY.set(clientY - 22);
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [cursorX, cursorY, followerX, followerY, prefersReducedMotion]);

  if (prefersReducedMotion) {
    return null;
  }

  return (
    <div className="pointer-events-none fixed inset-0 z-[60] hidden md:block">
      <motion.div
        style={{ x, y }}
        className="h-6 w-6 rounded-full border border-cyan-400/70 bg-cyan-400/10 mix-blend-screen"
      />
      <motion.div
        style={{ x: fx, y: fy }}
        className="h-14 w-14 rounded-full border border-cyan-500/20 bg-cyan-500/5 blur-md mix-blend-screen"
      />
    </div>
  );
}


