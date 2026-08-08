"use client";

import { useEffect, useState } from "react";

const artworks = [
  "/k1.jpg",
  "/k2.jpg",
  "/k3.mp4.webp",
  "/k4.webp",
  "/k5.jpg",
  "/k6.jpg.png",
  "/k7.jpg",
  "/k8.png",
  "/k9.jpg",
  "/k10.jpg",
  "/image.png",
  "/KD-4-26086.png",
  "/Kd-17-43155 1 1 (1).mp4",
  "/render (1).mp4",
];

export default function Gallery() {
  const [current, setCurrent] = useState(0);
  const [fullscreen, setFullscreen] = useState(false);

  const nextImage = () => {
    setCurrent((old) => (old + 1) % artworks.length);
  };

  const prevImage = () => {
    setCurrent((old) =>
      old === 0 ? artworks.length - 1 : old - 1
    );
  };

  useEffect(() => {
    if (fullscreen) return;

    const slide = setInterval(() => {
      setCurrent((old) => (old + 1) % artworks.length);
    }, 6000);

    return () => clearInterval(slide);
  }, [fullscreen]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!fullscreen) return;

      if (event.key === "Escape") {
        setFullscreen(false);
      }

      if (event.key === "ArrowRight") {
        nextImage();
      }

      if (event.key === "ArrowLeft") {
        prevImage();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [fullscreen]);

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

  const currentFile = artworks[current];
  const isVideo = currentFile.toLowerCase().endsWith(".mp4");

  return (
    <>
      {/* ========================================= */}
      {/* GALLERY SECTION                           */}
      {/* ========================================= */}

      <section
        id="gallery"
        className="
        min-h-screen
        bg-black
        flex
        items-center
        justify-center
        overflow-hidden
        relative
        px-4
        sm:px-6
        py-16
        sm:py-20
        "
      >

        {/* Purple Glow */}

        <div
          className="
          absolute
          w-[400px]
          h-[400px]
          sm:w-[700px]
          sm:h-[700px]
          bg-purple-600/20
          blur-[180px]
          rounded-full
          pointer-events-none
          "
        />

        {/* Red Glow */}

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
          blur-[160px]
          rounded-full
          pointer-events-none
          "
        />

        <div
          className="
          relative
          z-10
          w-full
          max-w-7xl
          text-center
          "
        >

          {/* TITLE */}

          <h2
            className="
            text-4xl
            sm:text-5xl
            md:text-7xl
            font-black
            mb-5
            sm:mb-6
            bg-gradient-to-r
            from-red-500
            via-purple-500
            to-red-500
            bg-clip-text
            text-transparent
            "
          >
            MY GALLERY
          </h2>

          {/* DESCRIPTION */}

          <p
            className="
            text-gray-400
            text-base
            sm:text-xl
            mb-8
            sm:mb-10
            "
          >
            Explore my latest artworks and digital creations.
          </p>

          {/* ART FRAME */}

          <div
            className="
            mx-auto
            w-full
            max-w-6xl
            h-[45vh]
            sm:h-[60vh]
            lg:h-[75vh]
            rounded-[30px]
            sm:rounded-[40px]
            overflow-hidden
            border-2
            border-purple-500/50
            bg-black
            shadow-[0_0_100px_rgba(168,85,247,0.45)]
            relative
            "
          >

            {/* LEFT BUTTON */}

            <button
              type="button"
              onClick={prevImage}
              aria-label="Previous artwork"
              className="
              absolute
              left-2
              sm:left-6
              top-1/2
              -translate-y-1/2
              z-20
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
              transition-all
              duration-300
              "
            >
              ‹
            </button>

            {/* RIGHT BUTTON */}

            <button
              type="button"
              onClick={nextImage}
              aria-label="Next artwork"
              className="
              absolute
              right-2
              sm:right-6
              top-1/2
              -translate-y-1/2
              z-20
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
              transition-all
              duration-300
              "
            >
              ›
            </button>

            {/* MAIN ARTWORK */}

            {isVideo ? (
              <video
                key={currentFile}
                src={currentFile}
                autoPlay
                loop
                muted
                playsInline
                onClick={() => setFullscreen(true)}
                className="
                w-full
                h-full
                object-contain
                cursor-zoom-in
                select-none
                transition-opacity
                duration-500
                "
              />
            ) : (
              <img
                key={currentFile}
                src={currentFile}
                alt={`Artwork ${current + 1}`}
                draggable={false}
                onClick={() => setFullscreen(true)}
                className="
                w-full
                h-full
                object-contain
                cursor-zoom-in
                select-none
                transition-opacity
                duration-500
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
              z-10
              px-4
              py-2
              rounded-full
              bg-black/60
              border
              border-white/10
              text-white/70
              text-xs
              sm:text-sm
              pointer-events-none
              "
            >
              Click image to view fullscreen
            </div>

          </div>

          {/* DOTS */}

          <div
            className="
            flex
            justify-center
            gap-3
            mt-8
            flex-wrap
            "
          >

            {artworks.map((_, index) => (
              <button
                key={index}
                type="button"
                aria-label={`Go to artwork ${index + 1}`}
                onClick={() => setCurrent(index)}
                className={`
                w-3
                h-3
                rounded-full
                transition-all
                duration-300
                ${
                  current === index
                    ? "bg-red-500 scale-125"
                    : "bg-purple-500/40 hover:bg-purple-500/70"
                }
                `}
              />
            ))}

          </div>

        </div>

      </section>

      {/* FULLSCREEN VIEWER */}

      {fullscreen && (
        <div
          className="
          fixed
          inset-0
          z-[99999]
          bg-black/95
          backdrop-blur-md
          flex
          items-center
          justify-center
          p-4
          sm:p-8
          "
          onClick={() => setFullscreen(false)}
        >

          {/* CLOSE BUTTON */}

          <button
            type="button"
            aria-label="Close fullscreen"
            onClick={() => setFullscreen(false)}
            className="
            absolute
            top-4
            right-4
            sm:top-7
            sm:right-7
            z-[100001]
            w-12
            h-12
            rounded-full
            bg-white/10
            border
            border-white/20
            text-white
            text-2xl
            hover:bg-red-600/80
            transition-all
            duration-300
            "
          >
            ×
          </button>

          {/* FULLSCREEN LEFT */}

          <button
            type="button"
            aria-label="Previous artwork"
            onClick={(event) => {
              event.stopPropagation();
              prevImage();
            }}
            className="
            absolute
            left-3
            sm:left-8
            top-1/2
            -translate-y-1/2
            z-[100001]
            w-11
            h-11
            sm:w-16
            sm:h-16
            rounded-full
            bg-purple-600/80
            text-white
            text-3xl
            sm:text-5xl
            font-bold
            hover:bg-purple-500
            hover:scale-110
            transition-all
            duration-300
            "
          >
            ‹
          </button>

          {/* FULLSCREEN ARTWORK */}

          {isVideo ? (
            <video
              src={currentFile}
              autoPlay
              loop
              muted
              playsInline
              controls
              onClick={(event) => event.stopPropagation()}
              className="
              max-w-full
              max-h-full
              w-auto
              h-auto
              object-contain
              rounded-xl
              sm:rounded-2xl
              shadow-[0_0_100px_rgba(168,85,247,0.35)]
              select-none
              "
            />
          ) : (
            <img
              src={currentFile}
              alt={`Artwork ${current + 1} fullscreen`}
              draggable={false}
              onClick={(event) => event.stopPropagation()}
              className="
              max-w-full
              max-h-full
              w-auto
              h-auto
              object-contain
              rounded-xl
              sm:rounded-2xl
              shadow-[0_0_100px_rgba(168,85,247,0.35)]
              select-none
              "
            />
          )}

          {/* FULLSCREEN RIGHT */}

          <button
            type="button"
            aria-label="Next artwork"
            onClick={(event) => {
              event.stopPropagation();
              nextImage();
            }}
            className="
            absolute
            right-3
            sm:right-8
            top-1/2
            -translate-y-1/2
            z-[100001]
            w-11
            h-11
            sm:w-16
            sm:h-16
            rounded-full
            bg-red-600/80
            text-white
            text-3xl
            sm:text-5xl
            font-bold
            hover:bg-red-500
            hover:scale-110
            transition-all
            duration-300
            "
          >
            ›
          </button>

          {/* IMAGE NUMBER */}

          <div
            className="
            absolute
            bottom-5
            left-1/2
            -translate-x-1/2
            z-[100001]
            px-5
            py-2
            rounded-full
            bg-black/70
            border
            border-white/10
            text-white/80
            text-sm
            "
          >
            {current + 1} / {artworks.length}
          </div>

        </div>
      )}
    </>
  );
}