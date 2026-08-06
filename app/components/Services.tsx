"use client";

import { useEffect, useState } from "react";



  const speedpaints = [
  "/0206_1.mp4",
  "/31338 (1).mp4",
  "/KD-17-34339.mp4",
  "/KD-17-39840 v (1) (1) (1).mp4",
  "/speed paint.mp4",
];



export default function Services() {

  const [current, setCurrent] = useState(0);



  useEffect(() => {

    const timer = setInterval(() => {

      setCurrent((old) =>
        (old + 1) % speedpaints.length
      );

    }, 6000);


    return () => clearInterval(timer);

  }, []);



  const nextVideo = () => {

    setCurrent((old) =>
      (old + 1) % speedpaints.length
    );

  };


  const prevVideo = () => {

    setCurrent((old) =>
      old === 0 ? speedpaints.length - 1 : old - 1
    );

  };



  return (

    <section
    className="
    min-h-screen
    bg-[#080810]
    text-white
    flex
    items-center
    justify-center
    overflow-hidden
    relative
    px-6
    py-20
    "
    >



      {/* Glow */}

      <div
      className="
      absolute
      w-[600px]
      h-[600px]
      bg-purple-600/20
      blur-[160px]
      rounded-full
      "
      />


      <div
      className="
      absolute
      right-0
      bottom-0
      w-[500px]
      h-[500px]
      bg-red-600/20
      blur-[150px]
      rounded-full
      "
      />





      <div
      className="
      max-w-7xl
      w-full
      relative
      z-10
      text-center
      ">



        <span
        className="
        inline-block
        bg-gradient-to-r
        from-red-500
        to-purple-600
        px-6
        py-3
        rounded-md
        font-bold
        tracking-widest
        "
        >
          OUR SERVICES
        </span>



        <h2
className="
mt-5
text-6xl
md:text-7xl
font-black
bg-gradient-to-r
from-red-500
via-purple-500
to-red-400
bg-clip-text
text-transparent
"
>
  SPEEDPAINT
</h2>
        "
        



        <p
        className="
        mt-5
        text-gray-400
        text-xl
        "
        >
          Watch my artwork process and creative journey.
        </p>





        {/* VIDEO FRAME */}

        <div
        className="
        mt-12
        mx-auto
        max-w-5xl
        h-[70vh]
        rounded-[40px]
        overflow-hidden
        border-2
        border-purple-500/50
        bg-black
        relative
        shadow-[0_0_100px_rgba(168,85,247,0.4)]
        "
        >



          {/* LEFT */}

          <button
          onClick={prevVideo}
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
          text-4xl
          hover:scale-110
          transition
          "
          >
            ‹
          </button>




          {/* RIGHT */}

          <button
          onClick={nextVideo}
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
          text-4xl
          hover:scale-110
          transition
          "
          >
            ›
          </button>




          <video

          key={current}

          src={speedpaints[current]}

          autoPlay

          muted

          loop

          playsInline

          className="
          w-full
          h-full
          object-contain
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

        {
          speedpaints.map((_,index)=>(

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

          ))
        }

        </div>



      </div>


    </section>

  );

}