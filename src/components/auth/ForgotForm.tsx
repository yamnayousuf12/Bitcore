"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ForgotForm() {
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const router = useRouter();

  const valid = /\S+@\S+\.\S+/.test(email);
  const canSubmit = valid && !submitting;

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!canSubmit) return;
    setSubmitting(true);
    try {
      // TODO: call API to send reset code
      await new Promise((r) => setTimeout(r, 700));
      router.push(`/password/code?email=${encodeURIComponent(email)}`);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="space-y-8 pt-12 sm:pt-20 md:pt-28">

      {/* Heading */}
      <div className="text-center space-y-2">
        <h2 className="text-[22px] sm:text-2xl md:text-3xl font-semibold">
          Forget Password
        </h2>
        <p className="text-xs sm:text-sm md:text-base text-white/70">
          Enter your credentials for Bit Core to continue:
        </p>
      </div>

      {/* Form */}
      <form onSubmit={onSubmit} className="space-y-4 sm:space-y-5 max-w-md mx-auto w-full">
        <div className="space-y-1.5">
          <label htmlFor="email" className="text-xs sm:text-sm text-white/80">
            Email
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-full bg-transparent border border-white/30 px-4 py-2.5 sm:py-3 outline-none placeholder:text-white/50 focus:border-white/60 text-sm sm:text-base"
          />
        </div>

        <button
          type="submit"
          disabled={!canSubmit}
          className={`mt-1 w-full rounded-full px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-medium transition-colors duration-300
            ${
              canSubmit
                ? "bg-white text-[#1b3766] hover:bg-[#1b3766] hover:text-white"
                : "bg-white/40 text-white/70 cursor-not-allowed"
            }`}
        >
          {submitting ? "Sending..." : "Send Code"}
        </button>
      </form>
    </div>
  );
}
