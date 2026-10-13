"use client";

import { useState } from "react";

export default function WallpaperShowcase() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section
      id="wallpaper-showcase"
      className="relative isolate overflow-hidden bg-[#080711] px-5 py-24 text-white sm:px-8 lg:py-32"
    >
      {/* Colorful background effects */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-40 top-10 h-96 w-96 rounded-full bg-purple-600/20 blur-[130px]" />
        <div className="absolute -right-40 top-32 h-96 w-96 rounded-full bg-cyan-500/15 blur-[130px]" />
        <div className="absolute bottom-0 left-1/2 h-72 w-96 -translate-x-1/2 rounded-full bg-pink-600/10 blur-[130px]" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:48px_48px]" />
      </div>

      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-14 text-center">
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-purple-400/30 bg-purple-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.3em] text-purple-200">
            <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-300" />
            A Little Piece of My Art
          </span>

          <h2 className="text-4xl font-black tracking-tight sm:text-5xl lg:text-7xl">
            <span className="bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
              Wallpaper
            </span>{" "}
            <span className="text-white">Showcase</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
            Step into a world of colour, atmosphere, and imagination.
            Every detail is crafted to bring artwork to life and turn
            an ordinary screen into something extraordinary.
          </p>
        </div>

        {/* Wallpaper card */}
        <div className="relative mx-auto max-w-5xl">
          <div className="absolute -inset-[1px] rounded-[2rem] bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 opacity-70 blur-sm" />

          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#100e1c] shadow-2xl shadow-purple-950/40">
            <div className="grid md:grid-cols-[1.15fr_0.85fr]">
              {/* Video preview */}
              <div className="group relative min-h-[300px] overflow-hidden bg-black sm:min-h-[400px]">
                <video
                  src="/KD-17-36441.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="h-full min-h-[300px] w-full object-cover transition duration-700 group-hover:scale-[1.03] sm:min-h-[400px]"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#080711]/80 via-transparent to-purple-950/20" />

                <div className="absolute left-5 top-5 rounded-full border border-white/20 bg-black/40 px-4 py-2 text-xs font-semibold tracking-widest text-white backdrop-blur-md">
                  ✦ FEATURED WALLPAPER
                </div>

                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-200">
                      Irisca Hub Original
                    </p>
                    <p className="mt-2 text-xl font-bold sm:text-2xl">
                      Art in Motion
                    </p>
                  </div>

                  <span className="rounded-xl border border-white/20 bg-white/10 px-3 py-2 text-xs text-white backdrop-blur-md">
                    VIDEO ART
                  </span>
                </div>
              </div>

              {/* Description */}
              <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
                <div className="mb-5 flex flex-wrap gap-2">
                  <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1.5 text-xs text-cyan-200">
                    ✦ Atmospheric
                  </span>
                  <span className="rounded-full border border-pink-400/20 bg-pink-400/10 px-3 py-1.5 text-xs text-pink-200">
                    ✦ Creative
                  </span>
                </div>

                <h3 className="text-3xl font-bold leading-tight sm:text-4xl">
                  More Than Just a{" "}
                  <span className="bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent">
                    Wallpaper
                  </span>
                </h3>

                <p className="mt-5 text-sm leading-7 text-gray-400 sm:text-base">
                  A little showcase of creativity, mood, and visual
                  storytelling. The colours, movement, and atmosphere
                  come together to create an experience that feels
                  alive. This is where digital art meets imagination.
                </p>

                <p className="mt-4 text-sm leading-7 text-gray-400">
                  Explore more of my artwork and discover the creative
                  process behind the pieces featured on Irisca Hub.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <button
                    onClick={() => setIsPlaying(true)}
                    className="rounded-xl bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-purple-900/30 transition duration-300 hover:-translate-y-1 hover:shadow-purple-500/30"
                  >
                    ✦ View Wallpaper
                  </button>

                  <a
                    href="#gallery"
                    className="rounded-xl border border-purple-300/30 bg-white/[0.04] px-6 py-3.5 text-sm font-bold text-purple-100 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/60 hover:bg-purple-500/10"
                  >
                    Explore Gallery ↗
                  </a>
                </div>

                <div className="mt-8 border-t border-white/10 pt-5">
                  <p className="text-xs leading-6 text-gray-500">
                    DIGITAL ART · VISUAL STORYTELLING · IRISCA HUB
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen wallpaper */}
      {isPlaying && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#05040b]/95 p-4 backdrop-blur-xl"
          onClick={() => setIsPlaying(false)}
        >
          <button
            onClick={() => setIsPlaying(false)}
            className="absolute right-5 top-5 z-10 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-bold text-white transition hover:bg-purple-500/30"
          >
            ✕ Close
          </button>

          <video
            src="/KD-17-36441.mp4"
            autoPlay
            loop
            controls
            playsInline
            className="max-h-[88vh] max-w-full rounded-2xl border border-purple-400/30 shadow-2xl shadow-purple-500/20"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}