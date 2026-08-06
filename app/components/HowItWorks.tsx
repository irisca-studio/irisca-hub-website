"use client";

const steps = [
  {
    number: "01",
    title: "Submit Your Brief",
    text: "Tell us about your character, style preferences, and what you need — whether it's an emote, banner, or full character design.",
    color: "purple",
  },

  {
    number: "02",
    title: "We Create & Refine",
    text: "Our artists bring your vision to life with sketches, revisions, and final polish until everything is perfect.",
    color: "red",
  },

  {
    number: "03",
    title: "You Receive & Use",
    text: "Get your final high-resolution assets ready to use on Discord, Twitch, or anywhere your community exists.",
    color: "purple",
  },
];


export default function HowItWorks() {

  return (

    <section
    className="
    min-h-screen
    bg-black
    text-white
    flex
    items-center
    justify-center
    px-6
    py-24
    relative
    overflow-hidden
    "
    >


      {/* BACKGROUND GLOW */}

      <div
      className="
      absolute
      top-20
      left-20
      w-[500px]
      h-[500px]
      bg-purple-600/20
      blur-[160px]
      rounded-full
      "
      />


      <div
      className="
      absolute
      bottom-0
      right-20
      w-[500px]
      h-[500px]
      bg-red-600/20
      blur-[160px]
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
      "
      >



        {/* TITLE */}

        <span
        className="
        text-red-500
        font-bold
        tracking-[0.4em]
        "
        >
          HOW IT WORKS
        </span>



        <h2
        className="
        mt-5
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
          From Idea to Artwork
        </h2>





        {/* MAIN FRAME */}

        <div
        className="
        mt-16
        relative
        p-8
        md:p-12
        rounded-[45px]
        bg-white/5
        border
        border-purple-500/30
        backdrop-blur-xl
        shadow-[0_0_100px_rgba(168,85,247,0.25)]
        overflow-hidden
        "
        >



          {/* FRAME OVERLAYS */}

          <div
          className="
          absolute
          top-0
          left-1/3
          w-48
          h-48
          bg-purple-500/20
          blur-3xl
          rounded-full
          "
          />


          <div
          className="
          absolute
          bottom-0
          right-1/3
          w-48
          h-48
          bg-red-500/20
          blur-3xl
          rounded-full
          "
          />




          {/* COLUMNS */}

          <div
          className="
          relative
          z-10
          grid
          md:grid-cols-3
          gap-8
          "
          >


          {
            steps.map((step)=>(

              <div
              key={step.number}
              className={`
              p-8
              rounded-3xl
              bg-black/40
              border
              transition
              hover:-translate-y-3

              ${
                step.color === "red"
                ?
                "border-red-500/30 hover:border-red-500"
                :
                "border-purple-500/30 hover:border-purple-500"
              }

              `}
              >


                <h3
                className={`
                text-6xl
                font-black

                ${
                  step.color === "red"
                  ?
                  "text-red-500"
                  :
                  "text-purple-500"
                }

                `}
                >
                  {step.number}
                </h3>



                <h4
                className="
                mt-6
                text-2xl
                font-bold
                "
                >
                  {step.title}
                </h4>



                <p
                className="
                mt-4
                text-gray-400
                leading-relaxed
                "
                >
                  {step.text}
                </p>



              </div>

            ))
          }


          </div>


        </div>





        {/* CTA */}

        <div
        className="
        mt-14
        "
        >

        <h3
        className="
        text-3xl
        md:text-4xl
        font-black
        "
        >
          Ready to Bring Your Characters to Life?
        </h3>


        <a
        href="#contact"
        className="
        inline-block
        mt-8
        px-12
        py-4
        rounded-full
        bg-gradient-to-r
        from-purple-600
        to-red-600
        font-bold
        text-lg
        hover:scale-105
        transition
        shadow-[0_0_30px_rgba(168,85,247,0.5)]
        "
        >
          Get a Quote
        </a>


        </div>



      </div>


    </section>

  );

}