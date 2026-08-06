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
];

export default function Gallery() {

  const [current, setCurrent] = useState(0);


  useEffect(() => {

    const slide = setInterval(() => {

      setCurrent((old) =>
        (old + 1) % artworks.length
      );

    }, 4000);


    return () => clearInterval(slide);

  }, []);



  const nextImage = () => {

    setCurrent((old) =>
      (old + 1) % artworks.length
    );

  };


  const prevImage = () => {

    setCurrent((old) =>
      old === 0 ? artworks.length - 1 : old - 1
    );

  };



  return (

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
      px-6
      "
    >


      {/* Purple Glow */}

      <div
      className="
      absolute
      w-[700px]
      h-[700px]
      bg-purple-600/20
      blur-[180px]
      rounded-full
      "
      />


      {/* Red Glow */}

      <div
      className="
      absolute
      right-0
      bottom-0
      w-[500px]
      h-[500px]
      bg-red-600/20
      blur-[160px]
      rounded-full
      "
      />



      <div
      className="
      relative
      z-10
      w-full
      max-w-7xl
      text-center
      ">


        <h2
        className="
        text-6xl
        md:text-7xl
        font-black
        mb-6
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



        <p
        className="
        text-gray-400
        text-xl
        mb-10
        "
        >
          Explore my latest artworks and digital creations.
        </p>




        {/* ART FRAME */}

        <div
        className="
        mx-auto
        w-full
        h-[75vh]
        rounded-[40px]
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
          onClick={prevImage}
          className="
          absolute
          left-6
          top-1/2
          -translate-y-1/2
          z-20
          w-14
          h-14
          rounded-full
          bg-purple-600/80
          text-white
          text-4xl
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
          onClick={nextImage}
          className="
          absolute
          right-6
          top-1/2
          -translate-y-1/2
          z-20
          w-14
          h-14
          rounded-full
          bg-red-600/80
          text-white
          text-4xl
          font-bold
          hover:bg-red-500
          hover:scale-110
          transition
          "
          >
            ›
          </button>




          <img

          key={current}

          src={artworks[current]}

          alt="Artwork"

          className="
          w-full
          h-full
          object-contain
          animate-fade
          "

          />


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

        {artworks.map((_,index)=>(

          <div
          key={index}
          className={`
          w-3
          h-3
          rounded-full
          transition

          ${
            current === index
            ? "bg-red-500 scale-125"
            :
            "bg-purple-500/40"
          }

          `}
          />

        ))}


        </div>



      </div>


    </section>

  );
}