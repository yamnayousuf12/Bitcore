"use client";

import { useState } from "react";
import Image from "next/image";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [showPwd, setShowPwd] = useState(false);
  const [agree, setAgree] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const canSubmit = email.trim() !== "" && pwd.trim() !== "" && agree && !submitting;

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;
    setSubmitting(true);
    try {
      // TODO: call your sign-in API here
      await new Promise((r) => setTimeout(r, 800));
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="space-y-8">
      {/* Heading */}
      <div className="text-center space-y-2">
        <h2 className="text-2xl sm:text-3xl font-semibold">Empowering &<br className="sm:hidden" /> productivity-focused</h2>
        <p className="text-sm sm:text-base text-white/70">
          Enter your credentials for Bit Core to continue:
        </p>
      </div>

      {/* Social buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <button
          type="button"
          className="rounded-full border border-white/25 px-4 py-3 text-sm flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 transition-colors"
        >
          <span className="inline-flex size-5 rounded-full overflow-hidden ring-1 ring-white/20">
            {/* You can drop an img/icon here if you want */}
            <Image src="https://www.google.com/favicon.ico" alt="Google" width={20} height={20} className="w-full h-full" />
          </span>
          Sign in with Google
        </button>
        <button
          type="button"
          className="rounded-full border border-white/25 px-4 py-3 text-sm flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 transition-colors"
        >
          <span className="inline-flex size-5 rounded-full overflow-hidden ring-1 ring-white/20">
            <Image src="https://www.apple.com/favicon.ico" alt="Apple" width={20} height={20} className="w-full h-full" />
          </span>
          Sign in with Apple
        </button>
      </div>

      {/* Divider */}
      <div className="flex items-center gap-3 text-white/40">
        <div className="h-px flex-1 bg-white/20" />
        <span className="text-xs">or</span>
        <div className="h-px flex-1 bg-white/20" />
      </div>

      {/* Form */}
      <form onSubmit={onSubmit} className="space-y-4">
        {/* Email */}
        <div className="space-y-1.5">
          <label htmlFor="email" className="text-sm text-white/80">Email</label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            className="w-full rounded-full bg-transparent border border-white/30 px-4 py-3 outline-none placeholder:text-white/50 focus:border-white/60"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Password */}
        <div className="space-y-1.5">
          <label htmlFor="password" className="text-sm text-white/80">Password</label>
          <div className="relative">
            <input
              id="password"
              type={showPwd ? "text" : "password"}
              autoComplete="current-password"
              className="w-full rounded-full bg-transparent border border-white/30 px-4 py-3 pr-12 outline-none placeholder:text-white/50 focus:border-white/60"
              placeholder="••••••••"
              value={pwd}
              onChange={(e) => setPwd(e.target.value)}
            />
            <button
              type="button"
              onClick={() => setShowPwd((s) => !s)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-white/70 hover:text-white/90 text-sm"
              aria-label={showPwd ? "Hide password" : "Show password"}
            >
              {showPwd ? "Hide" : "Show"}
            </button>
          </div>
        </div>

        {/* Terms */}
        <label className="flex items-start gap-2 text-sm text-white/70 select-none">
          <input
            type="checkbox"
            className="mt-0.5 accent-white/80"
            checked={agree}
            onChange={(e) => setAgree(e.target.checked)}
          />
          <span>
            I hereby agree to the{" "}
            <a href="#" className="underline hover:text-white">Terms &amp; Conditions</a>{" "}
            of Bit Core
          </span>
        </label>

        {/* Submit */}
        <button
          type="submit"
          disabled={!canSubmit}
          className={`mt-2 w-full rounded-full px-6 py-3 text-base font-medium transition-colors duration-300
            ${
              canSubmit
                ? "bg-white text-[#1b3766] hover:bg-[#1b3766] hover:text-white"
                : "bg-white/40 text-white/70 cursor-not-allowed"
            }
          `}
        >
          {submitting ? "Signing In..." : "Sign In"}
        </button>
      </form>
    </div>
  );
}
