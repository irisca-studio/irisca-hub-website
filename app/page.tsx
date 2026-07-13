"use client";

import { useState } from "react";
import ParticlesBackground from "./ParticlesBackground";

export default function Home() {

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const gallery = [
    { title: "Anime Character Artwork", image: "/k1.jpg" },
    { title: "Fantasy Character Design", image: "/k2.jpg" },
    { title: "Animation Artwork", image: "/k3.mp4.webp" },
    { title: "Digital Illustration", image: "/k4.webp" },
    { title: "Character Painting", image: "/k5.jpg" },
    { title: "Fantasy World Art", image: "/k6.jpg.png" },
    { title: "Original Character", image: "/k7.jpg" },
    { title: "Concept Artwork", image: "/k8.png" },
    { title: "Commission Artwork", image: "/k9.jpg" },
    { title: "Latest Creation", image: "/k10.jpg" },
  ];


  return (

    <main className="min-h-screen bg-black text-white overflow-hidden relative">


      <ParticlesBackground />


      {/* Navbar */}

      <nav className="
      sticky top-0 z-50
      flex justify-between items-center
      px-8 py-4
      bg-black/70
      backdrop-blur-xl
      border-b border-red-900
      ">


        <div className="flex items-center gap-4">


          <img
          src="/logo.png"
          alt="Irisca Hub"
          className="w-14 h-14 object-contain"
          />


          <h1 className="
          text-3xl font-bold
          text-red-500
          ">
            Irisca Hub
          </h1>


        </div>



        <div className="flex gap-6">

          <a href="#gallery"
          className="hover:text-red-500 transition">
            Gallery
          </a>


          <a href="#contact"
          className="hover:text-red-500 transition">
            Contact
          </a>


        </div>


      </nav>





      {/* Hero */}


      <section className="
      min-h-[85vh]
      flex flex-col
      justify-center
      items-center
      text-center
      px-6
      ">


        <h2 className="
        text-6xl
        font-black
        ">

          Welcome To

          <span className="
          text-red-500
          ml-3
          ">
            Irisca Hub
          </span>

        </h2>



        <p className="
        max-w-3xl
        mt-8
        text-gray-400
        text-lg
        ">

          Digital artist creating anime characters,
          fantasy illustrations, Vtuber models and
          unique artworks with passion and creativity.

        </p>




        <div className="flex gap-5 mt-10">


          <a
          href="https://irisca_hub.artstation.com"
          target="_blank"
          className="
          px-6 py-3
          bg-red-600
          rounded-full
          hover:scale-110
          transition
          ">
            ArtStation
          </a>



          <a
          href="https://bsky.app/profile/iriscacatto.bsky.social"
          target="_blank"
          className="
          px-6 py-3
          border border-red-500
          rounded-full
          hover:bg-red-600
          transition
          ">
            Bluesky
          </a>



        </div>


      </section>







      {/* Gallery */}


      <section
      id="gallery"
      className="px-8 py-20"
      >


        <h2 className="
        text-5xl
        font-bold
        text-center
        mb-14
        ">

          My

          <span className="text-red-500">
            Gallery
          </span>

        </h2>




        <div className="
        grid
        md:grid-cols-3
        gap-10
        ">


        {gallery.map((art,index)=>(


          <div
          key={index}
          className="
          bg-zinc-950
          border border-red-900
          rounded-3xl
          overflow-hidden
          group
          hover:scale-105
          transition duration-500
          ">


            <img

            src={art.image}

            alt={art.title}

            onClick={() =>
              setSelectedImage(art.image)
            }

            className="
            w-full
            h-80
            object-cover
            cursor-pointer
            group-hover:scale-110
            transition duration-700
            "

            />



            <div className="p-5">


              <h3 className="
              text-xl
              font-bold
              ">
                {art.title}
              </h3>



              <p className="
              text-gray-400
              mt-2
              ">
                Digital artwork by Irisca
              </p>


            </div>


          </div>


        ))}


        </div>





        {/* Image Preview */}


        {selectedImage && (

          <div
          onClick={() => setSelectedImage(null)}

          className="
          fixed
          inset-0
          z-50
          bg-black/90
          flex
          items-center
          justify-center
          p-5
          "
          >



            <button

            onClick={() => setSelectedImage(null)}

            className="
            absolute
            top-8
            right-8
            text-white
            text-4xl
            hover:text-red-500
            "
            >

              ×

            </button>




            <img

            src={selectedImage}

            alt="Preview"

            className="
            max-h-[90vh]
            max-w-[90vw]
            rounded-2xl
            shadow-[0_0_40px_red]
            object-contain
            "

            />


          </div>

        )}


      </section>






      {/* Contact */}


      <section
      id="contact"
      className="
      py-20
      text-center
      "
      >


        <h2 className="text-4xl font-bold">
          Contact Me
        </h2>



        <p className="
        text-gray-400
        mt-5
        ">
          Available for commissions and collaborations.
        </p>


      </section>



    </main>

  );

}