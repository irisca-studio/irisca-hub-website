"use client";

export default function ProcessShowcase() {
  return (
    <section
      id="process"
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
        blur-[150px]
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
        blur-[150px]
        rounded-full
        "
      />


      <div
        className="
        max-w-7xl
        w-full
        mx-auto
        px-8
        grid
        lg:grid-cols-2
        gap-16
        items-center
        relative
        z-10
        "
      >


        {/* VIDEO */}
        <div className="flex justify-center">

          <div
            className="
            w-[420px]
            h-[520px]
            rounded-[40px]
            overflow-hidden
            border
            border-purple-500/40
            shadow-[0_0_90px_rgba(168,85,247,0.35)]
            "
          >

            <video
              src="/KD-8-35037 render (1).mp4"
              autoPlay
              loop
              muted
              playsInline
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
            text-5xl
            md:text-6xl
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
            From Sketch to Final Design
          </h2>


          <p
            className="
            text-gray-300
            text-xl
            leading-relaxed
            mb-6
            "
          >
            Every masterpiece begins with a simple idea.
            My creative process turns rough concepts into
            detailed digital artwork filled with emotion,
            personality, and imagination.
          </p>


          <p
            className="
            text-gray-400
            text-lg
            leading-relaxed
            mb-8
            "
          >
            From the first sketch to the final render,
            every step is carefully crafted. I focus on
            character details, colors, lighting, and
            storytelling to create artwork that feels alive.
          </p>



          <div
            className="
            space-y-4
            text-gray-300
            text-lg
            "
          >

            <p>✦ Concept Sketch & Ideas</p>

            <p>✦ Clean Lines & Character Refinement</p>

            <p>✦ Coloring, Shadows & Final Details</p>

            <p>✦ High Quality Final Artwork</p>

          </div>


        </div>


      </div>


    </section>
  );
}