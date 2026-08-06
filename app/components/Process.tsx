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



  useEffect(() => {


    const timer = setInterval(() => {


      setCurrent((old) =>
        (old + 1) % processItems.length
      );


    }, 8000);


    return () => clearInterval(timer);


  }, []);




  return (


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




      {/* Purple Glow */}

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
        blur-[150px]
        rounded-full
        "
      />






      <div
        className="
        relative
        z-10
        max-w-7xl
        w-full
        text-center
        "
      >




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
          "
        >





        {
          processItems[current].type === "video" ? (


            <video

              key={current}

              src={processItems[current].src}

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


          ) : (


            <img

              key={current}

              src={processItems[current].src}

              alt="Process Artwork"

              loading="lazy"

              className="
              w-full
              h-full
              object-contain
              "

            />


          )

        }





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
          processItems.map((_,index)=>(


            <div

              key={index}

              className={`

              w-3
              h-3
              rounded-full

              ${
                current === index
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





      </div>


    </section>


  );

}