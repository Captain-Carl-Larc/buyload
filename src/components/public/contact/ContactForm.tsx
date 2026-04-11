"use client";

import { useState } from "react";
import { Send, Loader2, CheckCircle2, AlertCircle, X } from "lucide-react";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.currentTarget);
    const body = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (response.ok) {
        setStatus("success");
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="flex lg:flex-row flex-col gap-12 lg:gap-16">

          {/* LEFT: Label */}
          <div className="flex-1">
            <h2 className="font-black text-zinc-900 text-3xl md:text-5xl uppercase leading-none tracking-tighter">
              Prefer <br />
              <span className="text-orange-500 italic">Writing?</span>
            </h2>
            <p className="mt-4 max-w-sm font-medium text-zinc-500 text-base leading-relaxed">
              Fill out the form below. We reply to all inquiries within 60 minutes during active hours.
            </p>
          </div>

          {/* RIGHT: Form */}
          <div className="flex-[1.5]">

            {/* SUCCESS BANNER */}
            {status === "success" && (
              <div className="flex items-start gap-3 bg-green-50 mb-6 px-5 py-4 border border-green-200 rounded-2xl">
                <CheckCircle2 size={18} className="mt-0.5 text-green-600 shrink-0" />
                <div className="flex-1">
                  <p className="font-bold text-green-800 text-sm">Message received!</p>
                  <p className="mt-0.5 text-green-700 text-xs">
                    We'll get back to you within the hour during active hours.
                  </p>
                </div>
                <button onClick={() => setStatus("idle")} className="text-green-400 hover:text-green-600 transition-colors">
                  <X size={15} />
                </button>
              </div>
            )}

            {/* ERROR BANNER */}
            {status === "error" && (
              <div className="flex items-start gap-3 bg-red-50 mb-6 px-5 py-4 border border-red-200 rounded-2xl">
                <AlertCircle size={18} className="mt-0.5 text-red-500 shrink-0" />
                <div className="flex-1">
                  <p className="font-bold text-red-800 text-sm">Something went wrong.</p>
                  <p className="mt-0.5 text-red-600 text-xs">
                    Please try again or reach us directly on WhatsApp.
                  </p>
                </div>
                <button onClick={() => setStatus("idle")} className="text-red-300 hover:text-red-500 transition-colors">
                  <X size={15} />
                </button>
              </div>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              {/* Name + Email row */}
              <div className="gap-5 grid grid-cols-1 sm:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="name"
                    className="font-black text-[10px] text-zinc-400 uppercase tracking-widest"
                  >
                    Full Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    type="text"
                    placeholder="John Doe"
                    className="bg-zinc-50 focus:bg-white px-4 py-3 border border-zinc-900 focus:border-orange-400 rounded-xl outline-none font-medium text-zinc-900 placeholder:text-zinc-400 text-sm transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="email"
                    className="font-black text-[10px] text-zinc-400 uppercase tracking-widest"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    required
                    type="email"
                    placeholder="john@company.com"
                    className="bg-zinc-50 focus:bg-white px-4 py-3 border border-zinc-900 focus:border-orange-400 rounded-xl outline-none font-medium text-zinc-900 placeholder:text-zinc-400 text-sm transition-colors"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="message"
                  className="font-black text-[10px] text-zinc-400 uppercase tracking-widest"
                >
                  Brief Project Scope
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell us about the problem we are solving..."
                  className="bg-zinc-50 focus:bg-white px-4 py-3 border border-zinc-900 focus:border-orange-500 rounded-xl outline-none font-medium text-zinc-900 placeholder:text-zinc-400 text-sm transition-colors resize-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={status === "loading"}
                className="flex justify-center items-center gap-2 bg-zinc-900 hover:bg-orange-500 disabled:bg-zinc-300 px-8 py-3.5 rounded-xl w-full sm:w-fit font-black text-white text-xs uppercase tracking-widest transition-all duration-200 disabled:cursor-not-allowed"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 size={15} className="animate-spin" />
                    Sending…
                  </>
                ) : (
                  <>
                    <Send size={15} />
                    Send Inquiry
                  </>
                )}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}