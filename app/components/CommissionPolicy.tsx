"use client";

const policies = [
  {
    title: "Unlimited Revisions",
    text: "Your satisfaction is my priority. I provide unlimited reasonable revisions during the process so we can refine the artwork together and achieve the final result you imagine.",
    color: "purple",
  },
  {
    title: "Payment & Booking",
    text: "Payments are processed securely through PayPal. A commission slot is reserved after payment confirmation and project details are finalized.",
    color: "red",
  },
  {
    title: "Professional Workflow",
    text: "Every artwork follows a professional workflow: Concept Discussion → Sketch → Feedback → Rendering → Final Delivery. You will receive updates throughout the creation process.",
    color: "purple",
  },
  {
    title: "Secure Client Experience",
    text: "Many clients choose PayPal because it provides a secure and reliable payment experience. Your personal information and project details remain private.",
    color: "red",
  },
  {
    title: "Delivery Timeline",
    text: "Each artwork receives the time and attention it deserves. Delivery time depends on complexity, detail level, and the current commission queue.",
    color: "purple",
  },
  {
    title: "Usage Rights",
    text: "Personal usage is included with every commission. Commercial usage, branding, streaming assets, and additional rights can be discussed separately.",
    color: "red",
  },
];

export default function CommissionPolicy() {
  return (
    <section
      id="commission-policy"
      className="
      relative
      min-h-screen
      w-full
      flex
      items-center
      justify-center
      bg-black
      py-20
      px-6
      overflow-hidden
      "
    >

      {/* Purple Glow */}
      <div
        className="
        absolute
        top-0
        left-0
        w-[450px]
        h-[450px]
        bg-purple-600/20
        blur-[160px]
        rounded-full
        "
      />

      {/* Red Glow */}
      <div
        className="
        absolute
        bottom-0
        right-0
        w-[450px]
        h-[450px]
        bg-red-600/20
        blur-[160px]
        rounded-full
        "
      />


      <div
        className="
        relative
        z-10
        max-w-7xl
        mx-auto
        w-full
        "
      >


        {/* Heading */}

        <div className="text-center mb-12">

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
            Commission Guidelines
          </h2>


          <p
            className="
            mt-4
            text-gray-400
            text-lg
            max-w-3xl
            mx-auto
            "
          >
            Everything you need to know before starting your artwork.
            Clear process, secure payment, and a professional commission experience.
          </p>

        </div>



        {/* Cards */}

        <div className="space-y-8">


          {policies.map((item, index) => (

            <div
              key={index}
              className={`
              flex
              ${index % 2 === 0 ? "justify-start" : "justify-end"}
              `}
            >

              <div
                className={`
                w-full
                md:w-[72%]
                p-8
                rounded-3xl
                bg-zinc-900/80
                backdrop-blur-xl
                border
                transition-all
                duration-300
                hover:scale-[1.02]
                shadow-[0_0_40px_rgba(0,0,0,0.5)]
                ${
                  item.color === "purple"
                  ? "border-purple-500/40 hover:border-purple-500"
                  : "border-red-500/40 hover:border-red-500"
                }
                `}
              >


                <h3
                  className={`
                  text-3xl
                  font-bold
                  mb-4
                  ${
                    item.color === "purple"
                    ? "text-purple-400"
                    : "text-red-400"
                  }
                  `}
                >
                  {item.title}
                </h3>


                <p
                  className="
                  text-gray-300
                  text-lg
                  leading-relaxed
                  "
                >
                  {item.text}
                </p>


              </div>


            </div>

          ))}


        </div>


      </div>


    </section>
  );
}