"use client";

export default function CommissionForm() {
  return (
    <section
      id="commission"
      className="
      min-h-screen
      flex
      items-center
      justify-center
      bg-black
      text-white
      px-6
      py-20
      "
    >

      <div
        className="
        w-full
        max-w-3xl
        bg-zinc-900
        border
        border-purple-500
        rounded-3xl
        p-10
        text-center
        "
      >

        <h1
          className="
          text-4xl
          font-bold
          text-purple-400
          "
        >
          Client Commission Agreement
        </h1>

        <p className="mt-5 text-gray-400">
          Please complete your commission details below.
        </p>


        <div className="mt-8 space-y-5 text-left">

          <input
            type="text"
            placeholder="Your Name"
            className="
            w-full
            p-4
            rounded-xl
            bg-black
            border
            border-purple-500/50
            text-white
            "
          />


          <input
            type="email"
            placeholder="Your Email"
            className="
            w-full
            p-4
            rounded-xl
            bg-black
            border
            border-purple-500/50
            text-white
            "
          />


          <input
            type="text"
            placeholder="Discord Username"
            className="
            w-full
            p-4
            rounded-xl
            bg-black
            border
            border-purple-500/50
            text-white
            "
          />


          <select
            className="
            w-full
            p-4
            rounded-xl
            bg-black
            border
            border-purple-500/50
            text-white
            "
          >
            <option>Select Art Type</option>
            <option>Character Art</option>
            <option>VTuber Model</option>
            <option>Chibi Art</option>
            <option>Anime Portrait</option>
            <option>Concept Art</option>
            <option>Other</option>
          </select>


          <textarea
            rows={5}
            placeholder="Describe your project..."
            className="
            w-full
            p-4
            rounded-xl
            bg-black
            border
            border-purple-500/50
            text-white
            "
          />


          <button
            className="
            w-full
            py-4
            rounded-xl
            bg-purple-600
            hover:bg-red-600
            transition
            font-bold
            "
          >
            Continue
          </button>


        </div>

      </div>

    </section>
  );
}