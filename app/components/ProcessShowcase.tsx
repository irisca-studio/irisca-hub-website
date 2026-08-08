"use client";

import { useEffect, useState } from "react";

export default function ProcessShowcase() {
  const [fullscreen, setFullscreen] = useState(false);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setFullscreen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  useEffect(() => {
    if (fullscreen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [fullscreen]);

  return (
    <>
      {/* ========================= */}
      {/* PROCESS SHOWCASE */}
      {/* ========================= */}

      <section
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
        {/* Background Glow */}

        <div
          className="
          absolute
          top-20
          left-20
          w-96
          h-96
          bg-purple-600/20
          blur-[150px]
          rounded-full
          pointer-events-none
          "
        />

        <div
          className="
          absolute
          bottom-20
          right-20
          w-96
          h-96
          bg-red-600/20
          blur-[150px]
          rounded-full
          pointer-events-none
          "
        />

        <div
          className="
          max-w-7xl
          w-full
          mx-auto
          px-8
          grid
          lg:grid-cols-2
          gap-16
          items-center
          relative
          z-10
          "
        >
          {/* VIDEO */}

          <div className="flex justify-center">
            <div
              className="
              w-[420px]
              h-[520px]
              rounded-[40px]
              overflow-hidden
              border
              border-purple-500/40
              shadow-[0_0_90px_rgba(168,85,247,0.35)]
              relative
              bg-black
              "
            >
              <video
                src="/KD-8-35037 render (1).mp4"
                autoPlay
                loop
                muted
                playsInline
                onClick={() => setFullscreen(true)}
                className="
                w-full
                h-full
                object-cover
                cursor-zoom-in
                "
              />

              {/* CLICK HINT */}

              <div
                className="
                absolute
                bottom-4
                left-1/2
                -translate-x-1/2
                px-4
                py-2
                rounded-full
                bg-black/70
                border
                border-purple-500/40
                text-gray-300
                text-xs
                pointer-events-none
                "
              >
                Click to view fullscreen
              </div>
            </div>
          </div>

          {/* CONTENT */}

          <div>
            <h2
              className="
              text-5xl
              md:text-6xl
              font-bold
              mb-8
              bg-gradient-to-r
              from-purple-500
              via-red-500
              to-purple-500
              bg-clip-text
              text-transparent
              "
            >
              From Sketch to Final Design
            </h2>

            <p
              className="
              text-gray-300
              text-xl
              leading-relaxed
              mb-6
              "
            >
              Every masterpiece begins with a simple idea.
              My creative process turns rough concepts into
              detailed digital artwork filled with emotion,
              personality, and imagination.
            </p>

            <p
              className="
              text-gray-400
              text-lg
              leading-relaxed
              mb-8
              "
            >
              From the first sketch to the final render,
              every step is carefully crafted. I focus on
              character details, colors, lighting, and
              storytelling to create artwork that feels alive.
            </p>

            <div
              className="
              space-y-4
              text-gray-300
              text-lg
              "
            >
              <p>✦ Concept Sketch & Ideas</p>

              <p>✦ Clean Lines & Character Refinement</p>

              <p>✦ Coloring, Shadows & Final Details</p>

              <p>✦ High Quality Final Artwork</p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================= */}
      {/* FULLSCREEN VIDEO */}
      {/* ========================= */}

      {fullscreen && (
        <div
          className="
          fixed
          inset-0
          z-[999999]
          w-screen
          h-screen
          bg-black
          flex
          items-center
          justify-center
          p-4
          sm:p-8
          "
        >
          {/* CLOSE BUTTON */}

          <button
            onClick={() => setFullscreen(false)}
            aria-label="Close fullscreen"
            className="
            absolute
            top-5
            right-5
            sm:top-8
            sm:right-8
            z-[1000000]
            w-12
            h-12
            rounded-full
            bg-black/80
            border
            border-purple-500/70
            text-white
            text-3xl
            flex
            items-center
            justify-center
            hover:bg-purple-600
            transition
            "
          >
            ×
          </button>

          {/* FULLSCREEN VIDEO */}

          <video
            src="/KD-8-35037 render (1).mp4"
            autoPlay
            loop
            muted
            playsInline
            controls
            className="
            max-w-full
            max-h-full
            w-auto
            h-auto
            object-contain
            rounded-2xl
            shadow-[0_0_100px_rgba(168,85,247,0.4)]
            "
          />
        </div>
      )}
    </>
  );
}