"use client";

import {
  FaInstagram,
  FaTwitter,
  FaDiscord,
  FaTwitch,
  FaGamepad,
} from "react-icons/fa";

import {
  SiBluesky,
  SiArtstation,
} from "react-icons/si";


const socials = [
  {
    name: "Instagram",
    username: "Instagram",
    icon: <FaInstagram />,
    link: "YOUR_INSTAGRAM_LINK",
    color: "hover:text-pink-500",
  },

  {
    name: "Twitter / X",
    username: "Twitter",
    icon: <FaTwitter />,
    link: "YOUR_TWITTER_LINK",
    color: "hover:text-blue-400",
  },

  {
    name: "Bluesky",
    username: "iriscacatto",
    icon: <SiBluesky />,
    link: "https://bsky.app/profile/iriscacatto.bsky.social",
    color: "hover:text-sky-400",
  },

  {
    name: "ArtStation",
    username: "Irisca Studio",
    icon: <SiArtstation />,
    link: "https://iriscaworld1.artstation.com/",
    color: "hover:text-purple-400",
  },

  {
    name: "Twitch",
    username: "iriscacatoo",
    icon: <FaTwitch />,
    link: "https://www.twitch.tv/iriscacatoo",
    color: "hover:text-purple-500",
  },

  {
      name: "Discord",
  username: ".c.atto.",
  icon: <FaDiscord />,
  link: "https://discord.gg/bJD3YauEB",
  color: "hover:text-indigo-400",
  },

  {
    name: "Epic Games",
    username: "Epic Profile",
    icon: <FaGamepad />,
    link: "https://store.epicgames.com/u/0aa2683748344ea3a5b8d2210b1a671d",
    color: "hover:text-red-400",
  },
];


export default function SocialLinks() {

  return (

    <section
      id="socials"
      className="
      relative
      min-h-screen
      w-full
      flex
      items-center
      justify-center
      bg-black
      overflow-hidden
      px-6
      py-20
      "
    >


      {/* Background Glow */}

      <div
        className="
        absolute
        top-10
        left-10
        w-[450px]
        h-[450px]
        bg-purple-600/20
        blur-[150px]
        rounded-full
        "
      />


      <div
        className="
        absolute
        bottom-10
        right-10
        w-[450px]
        h-[450px]
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



        <h2
          className="
          text-5xl
          md:text-6xl
          font-bold
          bg-gradient-to-r
          from-purple-500
          via-red-500
          to-purple-500
          bg-clip-text
          text-transparent
          "
        >
          Connect With Me
        </h2>



        <p
          className="
          mt-5
          mb-14
          text-gray-400
          text-lg
          "
        >
          Follow my artwork, streams and creative journey.
        </p>




        <div
          className="
          grid
          grid-cols-2
          md:grid-cols-4
          gap-8
          "
        >



          {socials.map((item,index)=>(


            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`
              h-40
              rounded-3xl
              bg-zinc-900/80
              border
              border-white/10
              flex
              flex-col
              items-center
              justify-center
              gap-3
              transition-all
              duration-300
              hover:scale-105
              hover:border-purple-500/50
              text-gray-300
              ${item.color}
              `}
            >


              <div
                className="
                text-5xl
                "
              >
                {item.icon}
              </div>



              <h3
                className="
                text-xl
                font-bold
                "
              >
                {item.name}
              </h3>



              <span
                className="
                text-sm
                text-gray-500
                "
              >
                {item.username}
              </span>



            </a>


          ))}



        </div>



      </div>


    </section>

  );
}