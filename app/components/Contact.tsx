"use client";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 text-center bg-black text-white"
    >

      <h2 className="text-4xl font-bold">
        Contact <span className="text-red-500">Me</span>
      </h2>

      <p className="text-gray-400 mt-5">
        Available for commissions and collaborations.
      </p>

      <div className="flex justify-center gap-5 mt-8">

        <a
          href="mailto:iriscacatto1@gmail.com"
          className="px-6 py-3 bg-red-600 rounded-full hover:scale-110 transition"
        >
          Email Me
        </a>

        <a
          href="https://discord.com"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 border border-red-500 rounded-full hover:bg-red-600 transition"
        >
          Discord
        </a>

      </div>

    </section>
  );
}