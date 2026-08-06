"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {

  const [mounted, setMounted] = useState(false);

  const [mouse, setMouse] = useState({
    x: -100,
    y: -100,
  });


  useEffect(() => {

    setMounted(true);


    const move = (e: MouseEvent) => {

      setMouse({
        x: e.clientX,
        y: e.clientY,
      });

    };


    window.addEventListener(
      "mousemove",
      move
    );


    return () => {
      window.removeEventListener(
        "mousemove",
        move
      );
    };


  }, []);



  if (!mounted) return null;



  return (

    <div
      className="
      fixed
      left-0
      top-0
      z-[999999]
      pointer-events-none
      "
      style={{
        transform: `translate(${mouse.x}px, ${mouse.y}px)`,
      }}
    >

      <svg
        width="30"
        height="40"
        viewBox="0 0 30 40"
        fill="none"
      >

        <defs>

          <linearGradient
            id="cursorColor"
            x1="0"
            y1="0"
            x2="30"
            y2="40"
          >

            <stop
              stopColor="#a855f7"
            />

            <stop
              offset="1"
              stopColor="#ef4444"
            />

          </linearGradient>

        </defs>


        <path
          d="
          M3 2
          L3 30
          L10 23
          L16 37
          L22 34
          L16 20
          L27 20
          Z
          "
          fill="url(#cursorColor)"
          stroke="white"
          strokeWidth="2"
        />

      </svg>


    </div>

  );
}