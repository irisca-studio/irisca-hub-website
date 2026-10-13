"use client";

import {
  FaInstagram,
  FaTwitter,
  FaDiscord,
  FaTwitch,
  FaGamepad,
} from "react-icons/fa";

import { SiBluesky, SiArtstation } from "react-icons/si";

const socials = [
  {
    name: "Instagram",
    username: "@iriscacatto12026",
    icon: <FaInstagram />,
    link: "https://instagram.com/iriscacatto12026",
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
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#080711] px-6 py-20"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-20 top-10 h-[450px] w-[450px] rounded-full bg-purple-600/20 blur-[150px]" />

      <div className="pointer-events-none absolute -right-20 top-40 h-[450px] w-[450px] rounded-full bg-cyan-500/15 blur-[150px]" />

      <div className="pointer-events-none absolute bottom-0 left-1/2 h-[350px] w-[500px] -translate-x-1/2 rounded-full bg-pink-600/10 blur-[150px]" />

      {/* Main Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl text-center">
        <span className="mb-5 inline-block rounded-full border border-purple-400/30 bg-purple-500/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.3em] text-purple-200">
          ✦ Let's Connect
        </span>

        <h2 className="bg-gradient-to-r from-cyan-300 via-purple-400 to-pink-400 bg-clip-text text-4xl font-black text-transparent sm:text-5xl md:text-6xl">
          Connect With Me
        </h2>

        <p className="mx-auto mb-14 mt-5 max-w-xl text-base leading-7 text-gray-400 sm:text-lg">
          Follow my artwork, streams, gaming adventures, and creative journey.
          Let's connect and create something beautiful together.
        </p>

        {/* Social Cards */}
        <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
          {socials.map((item) => (
            <a
              key={item.name}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${item.name}`}
              className={`group relative flex h-44 flex-col items-center justify-center gap-3 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-4 text-gray-300 shadow-lg shadow-black/20 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-purple-400/50 hover:bg-purple-500/[0.07] hover:shadow-xl hover:shadow-purple-950/30 ${item.color}`}
            >
              <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-purple-400/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="text-4xl transition-transform duration-300 group-hover:scale-110 sm:text-5xl">
                {item.icon}
              </div>

              <h3 className="text-lg font-bold text-white transition-colors group-hover:text-inherit sm:text-xl">
                {item.name}
              </h3>

              <span className="max-w-full truncate text-xs text-gray-500 sm:text-sm">
                {item.username}
              </span>
            </a>
          ))}
        </div>

        <p className="mt-12 text-xs tracking-[0.2em] text-gray-600">
          ART · GAMING · CREATIVITY · IRISCA HUB
        </p>
      </div>
    </section>
  );
}