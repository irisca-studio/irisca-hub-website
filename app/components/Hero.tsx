"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-[90vh] flex flex-col justify-center items-center text-center px-6">

      {/* Status Badge */}
      <span className="mb-8 px-6 py-3 rounded-full bg-purple-600/20 border border-purple-500 text-purple-300 text-sm font-semibold shadow-[0_0_20px_rgba(168,85,247,0.5)]">
        ✦ Commission Open
      </span>


      {/* Logo */}
      <div className="relative mb-10">
        <div className="absolute inset-0 rounded-full bg-purple-600 blur-3xl opacity-50 animate-pulse"></div>

        <Image
          src="/logo.png"
          alt="Irisca Studio Logo"
          width={200}
          height={200}
          className="relative rounded-full border-4 border-purple-500 shadow-[0_0_50px_rgba(168,85,247,0.6)] hover:scale-105 transition duration-500"
        />
      </div>


      {/* Main Title */}
      <h1 className="text-6xl md:text-8xl font-black tracking-wide leading-tight">
        <span className="text-white">
          CREATE YOUR
        </span>
        <br />
        <span className="text-purple-500">
          VISION
        </span>
      </h1>


      {/* Category */}
      <p className="mt-8 text-xl md:text-3xl text-gray-300 tracking-[0.3em]">
        CHARACTERS • VTUBER • DIGITAL ART
      </p>


      {/* Description */}
      <p className="max-w-3xl mt-8 text-gray-400 text-lg md:text-xl">
        Bringing imagination to life through unique character designs,
        Vtuber models, illustrations, and custom digital artwork.
      </p>


      {/* Buttons */}
<div className="flex gap-8 mt-12">

  <a
    href="#contact"
    className="
    relative
    w-44
    h-16
    flex
    items-center
    justify-center
    bg-white/5
    border
    border-purple-400/60
    text-white
    font-bold
    text-lg
    overflow-hidden
    hover:bg-purple-600/20
    transition
    "
  >
    CONTACT US

    <span className="absolute top-0 left-0 w-3 h-3 bg-purple-400"></span>
    <span className="absolute bottom-0 right-0 w-3 h-3 bg-purple-400"></span>

  </a>


  <a
    href="#gallery"
    className="
    relative
    w-44
    h-16
    flex
    items-center
    justify-center
    bg-white/5
    border
    border-purple-400/40
    text-white
    font-bold
    text-lg
    overflow-hidden
    hover:bg-purple-600/20
    transition
    "
  >
    PORTFOLIO

    <span className="absolute top-0 left-0 w-3 h-3 bg-green-400"></span>
    <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400"></span>

  </a>

</div>
    </section>
  );
}