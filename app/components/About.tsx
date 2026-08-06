"use client";

export default function About() {
  return (
    <section
      id="about"
      className="
      relative
      min-h-screen
      flex
      items-center
      bg-black
      overflow-hidden
      py-20
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
        blur-[140px]
        rounded-full
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
        blur-[140px]
        rounded-full
        "
      />


      <div
        className="
        max-w-7xl
        w-full
        mx-auto
        px-4 sm:px-6 lg:px-8
        grid
        lg:grid-cols-2
        gap-16
        items-center
        relative
        z-10
        "
      >


        {/* IMAGE */}
        <div className="flex justify-center">

          <div
            className="
            w-full
            max-w-[420px]
            h-[400px]
            md:h-[520px]
            rounded-[40px]
            overflow-hidden
            border
            border-purple-500/40
            shadow-[0_0_80px_rgba(168,85,247,0.35)]
            "
          >

            <img
              src="/k10.jpg"
              alt="Irisca Digital Artist"
              className="
              w-full
              h-full
              object-cover
              "
            />

          </div>

        </div>



        {/* CONTENT */}
        <div>


          <h2
            className="
            text-4xl sm:text-5xl lg:text-6xl
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
            About Me
          </h2>



          <p
            className="
            text-gray-300
            text-base sm:text-lg lg:text-xl
            leading-relaxed
            mb-6
            "
          >
            Hi, I&apos;m Irisca, a digital artist specializing in
            anime artwork, character design, illustrations,
            VTuber models, and creative visual storytelling.
          </p>



          <p
            className="
            text-gray-400
            text-base sm:text-lg
            leading-relaxed
            mb-6
            "
          >
            My passion is transforming ideas into unique artwork
            filled with emotion, personality, and detail.
            Every piece I create is carefully designed to bring
            characters and imaginary worlds to life.
          </p>



          <p
            className="
            text-gray-400
            text-lg
            leading-relaxed
            mb-10
            "
          >
            Explore my gallery to discover my latest creations,
            from sketches and speedpaints to finished illustrations.
            Each artwork represents creativity, improvement,
            and dedication towards digital art.
          </p>



          {/* BUTTONS */}
          <div className="flex gap-5 flex-wrap">


            <button
              onClick={() =>
                document
                  .getElementById("gallery")
                  ?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  })
              }
              className="
              px-10
              py-4
              rounded-full
              bg-gradient-to-r
              from-purple-600
              to-red-600
              text-white
              text-lg
              font-semibold
              hover:scale-105
              transition
              "
            >
              View Gallery
            </button>



            <a
              href="https://iriscaworld1.artstation.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="
              px-10
              py-4
              rounded-full
              border
              border-purple-500
              text-purple-400
              text-lg
              font-semibold
              hover:bg-purple-500/10
              hover:scale-105
              transition
              "
            >
              ArtStation
            </a>


          </div>


        </div>


      </div>


    </section>
  );
}