"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const galleryItems = [
  {
    type: "image",
    src: "/Screenshot_2025-10-06_165236.png",
    title: "Custom Couple Portrait",
    category: "Digital Illustration",
  },
  {
    type: "video",
    src: "/Final0001-0460.mp4",
    title: "Couple Animation",
    category: "Motion Artwork",
  },
  {
    type: "video",
    src: "/0001-0105.mp4",
    title: "Romantic Scene",
    category: "Character Animation",
  },
  {
    type: "video",
    src: "/vid.mp4",
    title: "Premium Artwork",
    category: "Commission Work",
  },
];


const features = [
  {
    icon: "❤",
    title: "Personalized Design",
    text: "Custom poses, outfits, hairstyles and backgrounds created specially for your story.",
    color: "red",
  },
  {
    icon: "✦",
    title: "High Resolution",
    text: "Artwork delivered in high quality for wallpapers, prints and social media.",
    color: "purple",
  },
  {
    icon: "★",
    title: "Perfect Gift",
    text: "A memorable gift for anniversaries, weddings and special moments.",
    color: "red",
  },
  {
    icon: "🎨",
    title: "Professional Artwork",
    text: "Detailed lighting, colors and expressions crafted with care.",
    color: "purple",
  },
];


const stats = [
  {
    number: "100+",
    label: "Artworks Created",
  },
  {
    number: "50+",
    label: "Happy Clients",
  },
  {
    number: "5+",
    label: "Years Experience",
  },
];


export default function CoupleGallery() {

  const [index, setIndex] = useState(0);


  useEffect(() => {

    const timer = setInterval(() => {

      setIndex((prev) => 
        (prev + 1) % galleryItems.length
      );

    }, 9000);


    return () => clearInterval(timer);

  }, []);



  const currentItem = galleryItems[index];



  return (

    <section
      className="
      relative
      min-h-screen
      w-full
      overflow-hidden
      bg-[#050505]
      flex
      items-center
      justify-center
      py-20
      "
    >


      {/* Background Glow */}

      <div
        className="
        absolute
        -top-60
        -left-40
        w-[600px]
        h-[600px]
        bg-purple-600/20
        blur-[180px]
        rounded-full
        "
      />


      <div
        className="
        absolute
        bottom-0
        right-0
        w-[550px]
        h-[550px]
        bg-red-600/20
        blur-[180px]
        rounded-full
        "
      />


      <div
        className="
        absolute
        top-1/2
        left-1/2
        -translate-x-1/2
        -translate-y-1/2
        w-[300px]
        h-[300px]
        bg-purple-500/10
        blur-[120px]
        rounded-full
        "
      />



      {/* Main Container */}

      <div
        className="
        relative
        z-10
        w-full
        max-w-[1600px]
        mx-auto
        px-6
        lg:px-12
        "
      >



        {/* Heading */}

        <motion.div

          initial={{
            opacity:0,
            y:40
          }}

          animate={{
            opacity:1,
            y:0
          }}

          transition={{
            duration:0.8
          }}

          className="
          text-center
          mb-12
          "
        >


          <span
            className="
            inline-block
            px-5
            py-2
            rounded-full
            border
            border-purple-500/40
            bg-purple-500/10
            text-purple-300
            text-sm
            mb-6
            "
          >
            Premium Commission Gallery
          </span>



          <h2
            className="
            text-5xl
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
            Couple Art Gallery
          </h2>



          <p
            className="
            text-gray-400
            mt-5
            text-lg
            "
          >
            Transform your memories into professional digital artwork.
          </p>


        </motion.div>
                {/* Content Grid */}

        <div
          className="
          grid
          lg:grid-cols-2
          gap-14
          items-center
          "
        >



          {/* LEFT SIDE - SLIDER */}


          <motion.div

            initial={{
              opacity:0,
              x:-50
            }}

            animate={{
              opacity:1,
              x:0
            }}

            transition={{
              duration:0.8
            }}

          >


            <div
              className="
              relative
              w-full
              h-[520px]
              md:h-[650px]
              lg:h-[720px]
              rounded-[40px]
              overflow-hidden
              border
              border-purple-500/40
              bg-black/70
              shadow-[0_0_80px_rgba(168,85,247,.35)]
              "
            >


              <AnimatePresence mode="wait">


                <motion.div

                  key={currentItem.src}

                  initial={{
                    opacity:0,
                    scale:1.05
                  }}

                  animate={{
                    opacity:1,
                    scale:1
                  }}

                  exit={{
                    opacity:0,
                    scale:.95
                  }}

                  transition={{
                    duration:1
                  }}

                  className="
                  w-full
                  h-full
                  "
                >


                  {
                    currentItem.type === "image" ? (

                      <img

                        src={currentItem.src}

                        alt={currentItem.title}

                        className="
                        w-full
                        h-full
                        object-contain
                        "
                      />


                    ) : (


                      <video

                        src={currentItem.src}

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



                </motion.div>


              </AnimatePresence>



              {/* Overlay */}

              <div
                className="
                absolute
                bottom-0
                left-0
                w-full
                p-8
                bg-gradient-to-t
                from-black
                via-black/60
                to-transparent
                "
              >


                <h3
                  className="
                  text-white
                  text-2xl
                  font-bold
                  "
                >
                  {currentItem.title}
                </h3>


                <p
                  className="
                  text-purple-300
                  mt-2
                  "
                >
                  {currentItem.category}
                </p>


              </div>



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
                galleryItems.map((item,i)=>(


                  <button

                    key={i}

                    onClick={()=>setIndex(i)}

                    className={`
                    
                    transition-all
                    duration-500
                    rounded-full
                    
                    ${
                      i === index
                      ?
                      "w-10 h-3 bg-gradient-to-r from-red-500 to-purple-600"
                      :
                      "w-3 h-3 bg-purple-500/40"
                    }

                    `}

                  />


                ))
              }


            </div>






            {/* Current Artwork Info */}


            <div
              className="
              mt-8
              grid
              grid-cols-3
              gap-4
              "
            >


              {
                stats.map((stat,i)=>(


                  <motion.div

                    key={i}

                    whileHover={{
                      y:-5
                    }}

                    className="
                    text-center
                    p-4
                    rounded-2xl
                    border
                    border-purple-500/20
                    bg-white/5
                    backdrop-blur-xl
                    "

                  >


                    <h4
                      className="
                      text-2xl
                      md:text-3xl
                      font-black
                      bg-gradient-to-r
                      from-red-400
                      to-purple-400
                      bg-clip-text
                      text-transparent
                      "
                    >
                      {stat.number}
                    </h4>


                    <p
                      className="
                      text-gray-400
                      text-xs
                      md:text-sm
                      mt-2
                      "
                    >
                      {stat.label}
                    </p>


                  </motion.div>


                ))
              }



            </div>



          </motion.div>
                    {/* RIGHT SIDE - CONTENT */}


          <motion.div

            initial={{
              opacity:0,
              x:50
            }}

            animate={{
              opacity:1,
              x:0
            }}

            transition={{
              duration:0.8,
              delay:0.2
            }}

            className="
            space-y-8
            "

          >



            <span
              className="
              inline-flex
              px-5
              py-2
              rounded-full
              border
              border-red-500/40
              bg-red-500/10
              text-red-400
              text-sm
              "
            >
              Premium Couple Commission
            </span>





            <h3
              className="
              text-5xl
              md:text-6xl
              font-black
              leading-tight
              text-white
              "
            >

              Create Your

              <span
                className="
                block
                bg-gradient-to-r
                from-red-500
                via-purple-500
                to-red-500
                bg-clip-text
                text-transparent
                "
              >
                Dream Couple Art
              </span>


            </h3>





            <p
              className="
              text-gray-400
              text-lg
              leading-8
              "
            >

              Turn your favorite memories into a unique handcrafted
              digital artwork. Every illustration is created with
              detailed expressions, beautiful colors and a personal
              touch that represents your story.

            </p>







            {/* FEATURES */}


            <div
              className="
              space-y-5
              "
            >


              {
                features.map((feature,i)=>(


                  <motion.div

                    key={i}

                    whileHover={{
                      x:10
                    }}

                    transition={{
                      duration:0.3
                    }}

                    className="
                    flex
                    gap-5
                    items-start
                    p-5
                    rounded-3xl
                    border
                    border-white/10
                    bg-white/5
                    backdrop-blur-xl
                    "

                  >




                    <div
                      className={`
                      
                      w-12
                      h-12
                      shrink-0
                      rounded-2xl
                      flex
                      items-center
                      justify-center
                      text-xl

                      ${
                        feature.color === "red"
                        ?
                        "bg-red-500/20 text-red-400"
                        :
                        "bg-purple-500/20 text-purple-400"
                      }

                      `}
                    >

                      {feature.icon}


                    </div>






                    <div>


                      <h4
                        className="
                        text-white
                        text-lg
                        font-bold
                        "
                      >
                        {feature.title}
                      </h4>




                      <p
                        className="
                        text-gray-400
                        mt-2
                        leading-7
                        "
                      >

                        {feature.text}

                      </p>



                    </div>




                  </motion.div>


                ))
              }



            </div>







            {/* PROCESS TAGS */}


            <div
              className="
              flex
              flex-wrap
              gap-3
              pt-3
              "
            >


              <span
                className="
                px-4
                py-2
                rounded-full
                bg-purple-500/10
                border
                border-purple-500/30
                text-purple-300
                text-sm
                "
              >
                Custom Character
              </span>



              <span
                className="
                px-4
                py-2
                rounded-full
                bg-red-500/10
                border
                border-red-500/30
                text-red-300
                text-sm
                "
              >
                Detailed Rendering
              </span>



              <span
                className="
                px-4
                py-2
                rounded-full
                bg-purple-500/10
                border
                border-purple-500/30
                text-purple-300
                text-sm
                "
              >
                High Quality
              </span>



            </div>
                        {/* ACTION BUTTONS */}


            <div
              className="
              flex
              flex-wrap
              gap-5
              pt-5
              "
            >



              <motion.button

                whileHover={{
                  scale:1.05
                }}

                whileTap={{
                  scale:.95
                }}

                className="
                px-8
                py-4
                rounded-2xl
                font-bold
                text-white
                bg-gradient-to-r
                from-red-500
                via-purple-600
                to-red-500
                shadow-[0_0_40px_rgba(168,85,247,.35)]
                "
              >

                Order Commission

              </motion.button>





              <motion.button

                whileHover={{
                  scale:1.05
                }}

                whileTap={{
                  scale:.95
                }}

                className="
                px-8
                py-4
                rounded-2xl
                font-bold
                text-white
                border
                border-purple-500/40
                bg-white/5
                backdrop-blur-xl
                hover:bg-purple-500/10
                "
              >

                View Portfolio

              </motion.button>



            </div>







            {/* DELIVERY CARD */}


            <motion.div

              initial={{
                opacity:0,
                y:30
              }}

              animate={{
                opacity:1,
                y:0
              }}

              transition={{
                delay:.5
              }}

              className="
              mt-8
              p-6
              rounded-3xl
              border
              border-red-500/20
              bg-gradient-to-r
              from-red-500/10
              to-purple-500/10
              "

            >



              <h4
                className="
                text-white
                text-xl
                font-bold
                mb-3
                "
              >

                Complete Artwork Process

              </h4>




              <div
                className="
                grid
                md:grid-cols-3
                gap-4
                "
              >



                <div
                  className="
                  p-4
                  rounded-2xl
                  bg-black/30
                  border
                  border-white/10
                  "
                >

                  <span
                    className="
                    text-red-400
                    font-bold
                    "
                  >
                    01
                  </span>

                  <p
                    className="
                    text-gray-300
                    mt-2
                    "
                  >
                    Submit your idea and references
                  </p>

                </div>






                <div
                  className="
                  p-4
                  rounded-2xl
                  bg-black/30
                  border
                  border-white/10
                  "
                >

                  <span
                    className="
                    text-purple-400
                    font-bold
                    "
                  >
                    02
                  </span>


                  <p
                    className="
                    text-gray-300
                    mt-2
                    "
                  >
                    Sketch and artwork refinement
                  </p>


                </div>







                <div
                  className="
                  p-4
                  rounded-2xl
                  bg-black/30
                  border
                  border-white/10
                  "
                >

                  <span
                    className="
                    text-red-400
                    font-bold
                    "
                  >
                    03
                  </span>


                  <p
                    className="
                    text-gray-300
                    mt-2
                    "
                  >
                    Receive final high quality artwork
                  </p>


                </div>



              </div>


            </motion.div>






          </motion.div>



        </div>
                {/* Floating Decorative Elements */}


        <motion.div

          animate={{
            y:[0,-20,0],
            rotate:[0,5,0]
          }}

          transition={{
            duration:6,
            repeat:Infinity
          }}

          className="
          absolute
          -right-10
          top-40
          w-32
          h-32
          rounded-full
          bg-purple-500/10
          blur-3xl
          "
        />



        <motion.div

          animate={{
            y:[0,20,0],
            rotate:[0,-5,0]
          }}

          transition={{
            duration:7,
            repeat:Infinity
          }}

          className="
          absolute
          -left-10
          bottom-40
          w-40
          h-40
          rounded-full
          bg-red-500/10
          blur-3xl
          "
        />




        {/* Bottom Line */}


        <div
          className="
          mt-16
          flex
          justify-center
          "
        >

          <div
            className="
            h-[2px]
            w-72
            bg-gradient-to-r
            from-transparent
            via-purple-500
            to-transparent
            "
          />

        </div>



      </div>


    </section>

  );

}