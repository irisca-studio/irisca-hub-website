"use client";

import { useEffect, useState } from "react";

const processItems = [
  {
    type: "image",
    src: "/6 (1).jpg",
  },
  {
    type: "video",
    src: "/k6.mov",
  },
  {
    type: "video",
    src: "/render.mp4",
  },
  {
    type: "image",
    src: "/KD-4-31207 3 - Copy.jpg",
  },
];

export default function Process() {
  const [current, setCurrent] = useState(0);

  /* AUTO SLIDER */

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((old) => (old + 1) % processItems.length);
    }, 8000);

    return () => clearInterval(timer);
  }, []);

  /* NEXT */

  const nextItem = () => {
    setCurrent((old) => (old + 1) % processItems.length);
  };

  /* PREVIOUS */

  const prevItem = () => {
    setCurrent((old) =>
      old === 0 ? processItems.length - 1 : old - 1
    );
  };

  /* REAL BROWSER FULLSCREEN */

  const openFullscreen = async (
    element: HTMLImageElement | HTMLVideoElement
  ) => {
    try {
      if (element.requestFullscreen) {
        await element.requestFullscreen();
      }
    } catch (error) {
      console.log("Fullscreen error:", error);
    }
  };

  return (
    <section
      id="process"
      className="
      min-h-screen
      bg-black
      text-white
      flex
      items-center
      justify-center
      relative
      overflow-hidden
      px-4
      sm:px-6
      py-16
      sm:py-20
      "
    >
      {/* PURPLE GLOW */}

      <div
        className="
        absolute
        w-[400px]
        h-[400px]
        sm:w-[600px]
        sm:h-[600px]
        bg-purple-600/20
        blur-[160px]
        rounded-full
        pointer-events-none
        "
      />

      {/* RED GLOW */}

      <div
        className="
        absolute
        right-0
        bottom-0
        w-[300px]
        h-[300px]
        sm:w-[500px]
        sm:h-[500px]
        bg-red-600/20
        blur-[150px]
        rounded-full
        pointer-events-none
        "
      />

      {/* MAIN */}

      <div
        className="
        relative
        z-10
        max-w-7xl
        w-full
        text-center
        "
      >
        {/* SMALL TITLE */}

        <span
          className="
          text-red-500
          font-bold
          tracking-widest
          text-sm
          sm:text-base
          "
        >
          OUR PROCESS
        </span>

        {/* MAIN TITLE */}

        <h2
          className="
          mt-4
          text-4xl
          sm:text-5xl
          md:text-7xl
          font-black
          bg-gradient-to-r
          from-red-500
          via-purple-500
          to-red-500
          bg-clip-text
          text-transparent
          "
        >
          From Sketch to Final Design
        </h2>

        {/* FRAME */}

        <div
          className="
          mt-16
          sm:mt-20
          mx-auto
          w-full
          max-w-5xl
          h-[45vh]
          sm:h-[60vh]
          lg:h-[70vh]
          rounded-[30px]
          sm:rounded-[40px]
          overflow-hidden
          border-2
          border-purple-500/50
          bg-black
          shadow-[0_0_100px_rgba(168,85,247,0.4)]
          relative
          "
        >
          {/* LEFT BUTTON */}

          <button
            onClick={prevItem}
            aria-label="Previous process artwork"
            className="
            absolute
            left-2
            sm:left-6
            top-1/2
            -translate-y-1/2
            z-30
            w-10
            h-10
            sm:w-14
            sm:h-14
            rounded-full
            bg-purple-600/80
            text-white
            text-3xl
            sm:text-4xl
            font-bold
            hover:bg-purple-500
            hover:scale-110
            transition
            "
          >
            ‹
          </button>

          {/* RIGHT BUTTON */}

          <button
            onClick={nextItem}
            aria-label="Next process artwork"
            className="
            absolute
            right-2
            sm:right-6
            top-1/2
            -translate-y-1/2
            z-30
            w-10
            h-10
            sm:w-14
            sm:h-14
            rounded-full
            bg-red-600/80
            text-white
            text-3xl
            sm:text-4xl
            font-bold
            hover:bg-red-500
            hover:scale-110
            transition
            "
          >
            ›
          </button>

          {/* ARTWORK */}

          {processItems[current].type === "video" ? (
            <video
              key={processItems[current].src}
              src={processItems[current].src}
              autoPlay
              muted
              loop
              playsInline
              controls
              preload="metadata"
              onClick={(e) => openFullscreen(e.currentTarget)}
              className="
              w-full
              h-full
              object-contain
              cursor-pointer
              "
            />
          ) : (
            <img
              key={processItems[current].src}
              src={processItems[current].src}
              alt="Process Artwork"
              loading="eager"
              onClick={(e) => openFullscreen(e.currentTarget)}
              className="
              w-full
              h-full
              object-contain
              cursor-pointer
              "
            />
          )}

          {/* CLICK HINT */}

          <div
            className="
            absolute
            bottom-4
            left-1/2
            -translate-x-1/2
            z-20
            px-4
            py-2
            rounded-full
            bg-black/70
            border
            border-purple-400/40
            text-gray-300
            text-xs
            sm:text-sm
            pointer-events-none
            "
          >
            Click artwork for fullscreen
          </div>
        </div>

        {/* DOTS */}

        <div
          className="
          flex
          justify-center
          gap-3
          mt-8
          "
        >
          {processItems.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              aria-label={`Show process artwork ${index + 1}`}
              className={`
                w-3
                h-3
                rounded-full
                transition-all
                ${
                  current === index
                    ? "bg-red-500 scale-125"
                    : "bg-purple-500/40 hover:bg-purple-400"
                }
              `}
            />
          ))}
        </div>
      </div>
    </section>
  );
}