"use client";

import { useEffect, useState } from "react";

const items = [
  {
    type: "image",
    src: "/Screenshot_2025-10-06_165236.png",
  },
  {
    type: "video",
    src: "/Final0001-0460.mp4",
  },
  {
    type: "video",
    src: "/0001-0105.mp4",
  },
  {
    type: "video",
    src: "/vid.mp4",
  },
];

export default function CoupleGallery() {

  const [index, setIndex] = useState(0);


  useEffect(() => {

    const timer = setInterval(() => {

      setIndex((prev) => 
        (prev + 1) % items.length
      );

    }, 10000);


    return () => clearInterval(timer);

  }, []);



  const item = items[index];



  return (

    <section
      className="
      relative
      py-24
      bg-black
      overflow-hidden
      "
    >


      {/* Heading */}

      <div className="text-center mb-12 px-4">

        <h2
          className="
          text-4xl
          md:text-6xl
          font-bold
          bg-gradient-to-r
          from-red-500
          via-purple-500
          to-red-500
          bg-clip-text
          text-transparent
          "
        >
          Couple Art Gallery
        </h2>


        <p
          className="
          text-white/60
          mt-4
          text-sm
          md:text-base
          "
        >
          Animated couple artworks & creations
        </p>


      </div>





      {/* Center Frame */}


      <div
        className="
        mx-auto
        flex
        items-center
        justify-center
        w-[90%]
        max-w-[750px]
        h-[420px]
        md:h-[500px]
        rounded-3xl
        border
        border-purple-500/40
        bg-black/70
        shadow-[0_0_50px_rgba(168,85,247,0.35)]
        overflow-hidden
        transition-all
        duration-1000
        "
      >


        {
          item.type === "image" ? (


            <img

              key={item.src}

              src={item.src}

              alt="Couple artwork"

              className="
              w-full
              h-full
              object-contain
              transition-transform
              duration-1000
              "
            />


          ) : (


            <video

              key={item.src}

              src={item.src}

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


          )

        }


      </div>






      {/* Slider Dots */}


      <div
        className="
        flex
        justify-center
        gap-3
        mt-8
        "
      >

        {
          items.map((_, i)=>(

            <div

              key={i}

              className={`
              w-3
              h-3
              rounded-full
              transition-all
              duration-500

              ${
                i === index
                ?
                "bg-red-500 scale-125"
                :
                "bg-purple-500/40"
              }

              `}

            />

          ))
        }


      </div>


    </section>

  );
}