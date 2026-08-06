"use client";

import { useEffect, useRef } from "react";

export default function ParticlesBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;

    canvas.width = width;
    canvas.height = height;

    const mouse = {
      x: width / 2,
      y: height / 2,
      radius: 150,
    };

    window.addEventListener("mousemove", (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 3 + 1;
        this.speedX = (Math.random() - 0.5) * 0.7;
        this.speedY = (Math.random() - 0.5) * 0.7;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > width) this.x = 0;
        if (this.x < 0) this.x = width;
        if (this.y > height) this.y = 0;
        if (this.y < 0) this.y = height;

        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < mouse.radius) {
          this.x -= dx * 0.01;
          this.y -= dy * 0.01;
        }
      }

      draw() {
        if (!ctx) return;

        const glow = ctx.createRadialGradient(
          this.x,
          this.y,
          0,
          this.x,
          this.y,
          this.size * 5
        );

        glow.addColorStop(0, "rgba(99,102,241,1)");
        glow.addColorStop(1, "rgba(99,102,241,0)");

        ctx.beginPath();
        ctx.fillStyle = glow;
        ctx.arc(this.x, this.y, this.size * 5, 0, Math.PI * 2);
        ctx.fill();

        ctx.beginPath();
        ctx.fillStyle = "#8b5cf6";
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const particles: Particle[] = [];

    for (let i = 0; i < 120; i++) {
      particles.push(new Particle());
    }

    function connect() {
      if (!ctx) return;

      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x;
          const dy = particles[a].y - particles[b].y;
          const distance = dx * dx + dy * dy;

          if (distance < 140 * 140) {
            ctx.strokeStyle = `rgba(120,120,255,${
              1 - distance / (140 * 140)
            })`;
            ctx.lineWidth = 0.6;

            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }
    }

    function animate() {
      if (!ctx) return;

      ctx.clearRect(0, 0, width, height);

      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      connect();

      requestAnimationFrame(animate);
    }

    animate();

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 bg-[#050816]"
    />
  );
}