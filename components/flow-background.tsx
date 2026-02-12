"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  w: number;
}

export function FlowBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let W = 0;
    let H = 0;
    let DPR = 1;
    let particles: Particle[] = [];
    const PARTICLE_COUNT = 2200;
    let t = 0;
    let frameId: number;

    function resizeCanvas() {
      if (!canvas) return;
      DPR = Math.min(window.devicePixelRatio || 1, 2);
      W = Math.floor(window.innerWidth * DPR);
      H = Math.floor(window.innerHeight * DPR);
      canvas.width = W;
      canvas.height = H;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
    }

    function fract(x: number) {
      return x - Math.floor(x);
    }

    function hash2(x: number, y: number) {
      return fract(Math.sin(x * 127.1 + y * 311.7) * 43758.5453123);
    }

    function smoothstep(a: number, b: number, x: number) {
      x = Math.max(0, Math.min(1, (x - a) / (b - a)));
      return x * x * (3 - 2 * x);
    }

    function valueNoise(x: number, y: number) {
      const xi = Math.floor(x);
      const yi = Math.floor(y);
      const xf = x - xi;
      const yf = y - yi;

      const v00 = hash2(xi, yi);
      const v10 = hash2(xi + 1, yi);
      const v01 = hash2(xi, yi + 1);
      const v11 = hash2(xi + 1, yi + 1);

      const u = smoothstep(0, 1, xf);
      const v = smoothstep(0, 1, yf);

      const a = v00 + u * (v10 - v00);
      const b = v01 + u * (v11 - v01);
      return a + v * (b - a);
    }

    function fbm(x: number, y: number) {
      let amp = 0.5;
      let sum = 0;
      for (let i = 0; i < 4; i++) {
        sum += amp * valueNoise(x, y);
        x *= 2.02;
        y *= 2.02;
        amp *= 0.5;
      }
      return sum;
    }

    function flowAngle(x: number, y: number, time: number) {
      const s = 0.0014;
      const n = fbm(x * s + time * 0.0001, y * s + time * 0.00008);
      return n * Math.PI * 2.0 * 1.8;
    }

    function seedParticles() {
      particles = [];
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        particles.push({
          x: Math.random() * W,
          y: Math.random() * H,
          vx: 0,
          vy: 0,
          life: Math.random() * 140 + 80,
          w: (Math.random() * 0.8 + 0.8) * DPR,
        });
      }
    }

    function startFrame() {
      if (!ctx) return;
      ctx.globalCompositeOperation = "source-over";
      ctx.fillStyle = "rgba(3,7,18,1)"; // near slate-950
      ctx.fillRect(0, 0, W, H);
    }

    function step() {
      if (!ctx) return;
      t += 1;
      ctx.globalCompositeOperation = "source-over";
      ctx.fillStyle = "rgba(3,7,18,0.1)";
      ctx.fillRect(0, 0, W, H);

      ctx.globalCompositeOperation = "lighter";

      const c1 = [0, 184, 255];
      const c2 = [43, 124, 255];

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        const ang = flowAngle(p.x, p.y, t);
        const ax = Math.cos(ang);
        const ay = Math.sin(ang);

        p.vx = p.vx * 0.9 + ax * 0.55;
        p.vy = p.vy * 0.9 + ay * 0.55;

        const maxV = 1.8 * DPR;
        const vLen = Math.hypot(p.vx, p.vy);
        if (vLen > maxV) {
          p.vx = (p.vx / vLen) * maxV;
          p.vy = (p.vy / vLen) * maxV;
        }

        const ox = p.x;
        const oy = p.y;

        p.x += p.vx;
        p.y += p.vy;

        p.life -= 1;
        if (p.life <= 0) {
          p.x = Math.random() * W;
          p.y = Math.random() * H;
          p.vx = 0;
          p.vy = 0;
          p.life = Math.random() * 140 + 80;
          continue;
        }

        let jumped = false;
        if (p.x < -20) {
          p.x = W + 20;
          jumped = true;
        } else if (p.x > W + 20) {
          p.x = -20;
          jumped = true;
        }

        if (p.y < -20) {
          p.y = H + 20;
          jumped = true;
        } else if (p.y > H + 20) {
          p.y = -20;
          jumped = true;
        }

        const dx = p.x - ox;
        const dy = p.y - oy;
        const dist2 = dx * dx + dy * dy;

        const strength = fbm(p.x * 0.0012 + t * 0.00006, p.y * 0.0012);
        const a = 0.02 + strength * 0.09;

        const mix = strength;
        const r = Math.round(c1[0] + (c2[0] - c1[0]) * mix);
        const g = Math.round(c1[1] + (c2[1] - c1[1]) * mix);
        const b = Math.round(c1[2] + (c2[2] - c1[2]) * mix);

        ctx.strokeStyle = `rgba(${r},${g},${b},${a})`;
        ctx.lineWidth = p.w;

        const maxStep = 60 * DPR;
        if (!jumped && dist2 < maxStep * maxStep) {
          ctx.beginPath();
          ctx.moveTo(ox, oy);
          ctx.lineTo(p.x, p.y);
          ctx.stroke();
        }
      }

      frameId = window.requestAnimationFrame(step);
    }

    const handleResize = () => {
      resizeCanvas();
      seedParticles();
      startFrame();
    };

    resizeCanvas();
    seedParticles();
    startFrame();
    frameId = window.requestAnimationFrame(step);
    window.addEventListener("resize", handleResize);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="bg"
      className="pointer-events-none fixed inset-0 z-0 h-full w-full"
    />
  );
}


