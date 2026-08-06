"use client";

export default function Navbar() {
  return (
    <nav className="relative w-full bg-black/90 backdrop-blur-md text-white overflow-hidden">

      <div
        className="
        max-w-7xl
        mx-auto
        h-20
        px-6
        flex
        items-center
        justify-between
        relative
        z-10
        "
      >

        {/* Logo */}

        <a
          href="#home"
          className="text-2xl font-bold tracking-wide"
        >
          Irisca
          <span className="text-purple-400"> Studio</span>
        </a>




        {/* Navigation */}

        <div
          className="
          hidden
          md:flex
          items-center
          gap-10
          text-sm
          text-white/80
          "
        >

          <a
            href="#home"
            className="hover:text-red-500 transition"
          >
            Home
          </a>


          <a
            href="#about"
            className="hover:text-red-500 transition"
          >
            About
          </a>


          <a
            href="#gallery"
            className="hover:text-red-500 transition"
          >
            Gallery
          </a>


          <a
            href="#services"
            className="hover:text-red-500 transition"
          >
            Services
          </a>


          <a
            href="#contact"
            className="hover:text-red-500 transition"
          >
            Contact
          </a>


        </div>





        {/* Get Quote Button */}

        <a
          href="#commission"
          className="
          hidden
          md:flex
          items-center
          px-6
          py-3
          rounded-full
          border
          border-red-500
          text-red-400
          font-medium
          text-sm
          hover:bg-red-500
          hover:text-white
          transition
          "
        >
          GET A QUOTE
        </a>





        {/* Center Purple Circle */}

        <div
          className="
          absolute
          left-1/2
          -translate-x-1/2
          bottom-[-30px]
          w-16
          h-16
          rounded-full
          bg-black
          border-[3px]
          border-purple-500
          shadow-[0_0_30px_rgba(168,85,247,0.8)]
          "
        />

      </div>





      {/* Red + Purple Bottom Design */}

      <div
        className="
        absolute
        bottom-0
        left-0
        w-full
        h-[2px]
        bg-gradient-to-r
        from-red-500
        via-purple-500
        to-red-500
        rotate-[-2deg]
        "
      />

    </nav>
  );
}