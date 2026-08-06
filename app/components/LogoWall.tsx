"use client";

const clients = [
  "Character Commission",
  "VTuber Model Project",
  "Anime Illustration",
  "Custom OC Design",
  "Digital Painting",
  "Fantasy Artwork",
  "Chibi Character",
  "Profile Artwork",
  "Banner Design",
  "Concept Art",
  "Live2D Project",
  "Creative Collaboration",
];

export default function LogoWall() {
  return (
    <section className="py-24 overflow-hidden">

      {/* Heading */}
      <h2 className="text-center text-5xl font-black mb-6">
        <span className="text-white">
          CLIENT
        </span>{" "}
        <span className="text-purple-500">
          WALL
        </span>
      </h2>


      <p className="text-center text-gray-400 mb-14 text-lg">
        Trusted by creative minds and amazing projects worldwide
      </p>


      {/* Moving Cards */}
      <div className="flex gap-6 animate-scroll">

        {[...clients, ...clients].map((item, index) => (
          <div
            key={index}
            className="
            min-w-[230px]
            h-[100px]
            rounded-2xl
            bg-white/5
            border
            border-purple-500/40
            backdrop-blur-md
            flex
            items-center
            justify-center
            text-purple-300
            font-semibold
            text-center
            shadow-[0_0_25px_rgba(168,85,247,0.25)]
            hover:scale-105
            transition
            "
          >
            ✦ {item}
          </div>
        ))}

      </div>

    </section>
  );
}