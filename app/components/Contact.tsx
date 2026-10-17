"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import SignatureCanvas from "react-signature-canvas";

const SERVICE_ID = "service_84b4jtn";
const TEMPLATE_ID = "template_l3wwjtg";
const PUBLIC_KEY = "5RebvYj9jzTUVikoE";

export default function Contact() {
  const signatureRef = useRef<SignatureCanvas>(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    discord: "",
    artType: "",
    message: "",
    terms: false,
  });

  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;

    setForm((old) => ({
      ...old,
      [name]:
        type === "checkbox"
          ? (e.target as HTMLInputElement).checked
          : value,
    }));

    setError("");
    setSent(false);
  };

  const clearSignature = () => {
    signatureRef.current?.clear();
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (sending) return;

    setSending(true);
    setSent(false);
    setError("");

    if (!form.terms) {
      setError("Please accept the commission terms.");
      setSending(false);
      return;
    }

    if (signatureRef.current?.isEmpty()) {
      setError("Please draw your signature before sending.");
      setSending(false);
      return;
    }

    try {
      const signatureData =
        signatureRef.current
          ?.getTrimmedCanvas()
          .toDataURL("image/png") ?? "";

      const response = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: form.name.trim(),
          reply_to: form.email.trim(),
          discord: form.discord.trim(),
          art_type: form.artType,
          message: form.message.trim(),
          signature: signatureData,
        },
        PUBLIC_KEY
      );

      console.log("EmailJS success:", response.status);

      setSent(true);

      setForm({
        name: "",
        email: "",
        discord: "",
        artType: "",
        message: "",
        terms: false,
      });

      signatureRef.current?.clear();
    } catch (err: unknown) {
      console.error("EmailJS error:", err);

      if (typeof err === "object" && err !== null) {
        const emailError = err as {
          status?: number;
          text?: string;
          message?: string;
        };

        setError(
          `Email failed (${emailError.status ?? "unknown"}): ${
            emailError.text ??
            emailError.message ??
            "Please try again."
          }`
        );
      } else {
        setError(String(err));
      }
    } finally {
      setSending(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen w-full bg-black text-white flex items-center justify-center overflow-hidden px-4 sm:px-6 py-20"
    >
      <div className="absolute top-10 left-10 w-[350px] h-[350px] sm:w-[500px] sm:h-[500px] bg-purple-600/20 blur-[160px] rounded-full" />

      <div className="absolute right-0 bottom-0 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-red-600/20 blur-[160px] rounded-full" />

      <div className="relative z-10 w-full max-w-6xl">
        <div className="text-center mb-12">
          <span className="text-purple-400 font-bold tracking-[0.3em] text-sm">
            GET IN TOUCH
          </span>

          <h2 className="mt-4 text-5xl sm:text-6xl md:text-7xl font-black bg-gradient-to-r from-purple-500 via-red-500 to-purple-500 bg-clip-text text-transparent">
            Let&apos;s Create
          </h2>

          <p className="mt-5 text-gray-400 text-base sm:text-lg">
            Have an idea? Let&apos;s turn it into artwork.
          </p>
        </div>

        <div className="relative w-full rounded-[30px] sm:rounded-[40px] border border-purple-500/30 bg-white/[0.03] backdrop-blur-xl p-6 sm:p-10 md:p-12 shadow-[0_0_100px_rgba(168,85,247,0.18)]">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-300 font-semibold mb-2">
                Full Name
              </label>

              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Your name"
                className="w-full p-4 rounded-xl bg-zinc-900 border border-purple-500/40 text-white outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition"
              />
            </div>

            <div>
              <label className="block text-gray-300 font-semibold mb-2">
                Email
              </label>

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="your@email.com"
                className="w-full p-4 rounded-xl bg-zinc-900 border border-purple-500/40 text-white outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition"
              />
            </div>

            <div>
              <label className="block text-gray-300 font-semibold mb-2">
                Discord
              </label>

              <input
                type="text"
                name="discord"
                value={form.discord}
                onChange={handleChange}
                placeholder="Your Discord username"
                className="w-full p-4 rounded-xl bg-zinc-900 border border-purple-500/40 text-white outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition"
              />
            </div>

            <div>
              <label className="block text-gray-300 font-semibold mb-2">
                Art Type
              </label>

              <select
                name="artType"
                value={form.artType}
                onChange={handleChange}
                required
                className="w-full p-4 rounded-xl bg-zinc-900 border border-purple-500/40 text-white outline-none focus:border-purple-500 transition"
              >
                <option value="">Select Art Type</option>
                <option value="Character Art">Character Art</option>
                <option value="VTuber Model">VTuber Model</option>
                <option value="PFP">PFP</option>
                <option value="Banner">Banner</option>
                <option value="Chibi">Chibi</option>
                <option value="Animation">Animation</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-300 font-semibold mb-2">
                Project Details
              </label>

              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={6}
                placeholder="Tell me about your project..."
                className="w-full p-4 rounded-xl bg-zinc-900 border border-purple-500/40 text-white outline-none resize-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition"
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="block text-gray-300 font-semibold">
                  Signature
                </label>

                <button
                  type="button"
                  onClick={clearSignature}
                  className="text-sm text-red-400 hover:text-red-300 transition"
                >
                  Clear
                </button>
              </div>

              <div className="w-full h-[180px] rounded-xl overflow-hidden bg-white border border-purple-500/50">
                <SignatureCanvas
                  ref={signatureRef}
                  penColor="black"
                  canvasProps={{
                    className:
                      "w-full h-full cursor-crosshair touch-none",
                  }}
                />
              </div>

              <p className="mt-2 text-sm text-gray-500">
                Draw your signature above using your mouse or touchscreen.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <input
                id="contact-terms"
                type="checkbox"
                name="terms"
                checked={form.terms}
                onChange={handleChange}
                required
                className="mt-1 w-5 h-5 accent-purple-500 cursor-pointer"
              />

              <label
                htmlFor="contact-terms"
                className="text-gray-400 text-sm leading-6"
              >
                I agree to the commission terms and confirm that the
                information provided is correct.
              </label>
            </div>

            {sent && (
              <div className="rounded-xl border border-green-500/30 bg-green-500/10 p-4 text-green-400">
                ✓ Your commission request has been sent successfully.
              </div>
            )}

            {error && (
              <div className="rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-red-400 break-words">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={sending}
              className="relative w-full py-5 rounded-xl bg-gradient-to-r from-purple-600 via-purple-500 to-red-600 text-white font-bold text-lg shadow-[0_0_30px_rgba(168,85,247,0.35)] hover:scale-[1.02] hover:shadow-[0_0_45px_rgba(168,85,247,0.5)] transition disabled:opacity-50 disabled:hover:scale-100"
            >
              {sending ? "SENDING..." : "SEND COMMISSION REQUEST"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}