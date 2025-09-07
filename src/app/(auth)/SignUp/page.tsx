// app/(auth)/signup/page.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
// ...existing code...
import { Eye, EyeOff } from "lucide-react";

export default function SignUpPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [cpw, setCpw] = useState("");
  const [agree, setAgree] = useState(false);
  const [showPw, setShowPw] = useState(false);
  const [showCpw, setShowCpw] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const pwMismatch = pw.length > 0 && cpw.length > 0 && pw !== cpw;
  const canSubmit =
    name.trim() && email.trim() && pw.length >= 8 && !pwMismatch && agree && !submitting;

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!canSubmit) return;
    try {
      setSubmitting(true);
      // TODO: replace with your signup action / supabase call
      await new Promise((r) => setTimeout(r, 900));
      // router.push("/verify") etc.
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="space-y-6">
      {/* Header inside the card */}
      <div className="text-center">
        
        <p className="text-sm text-white/70">Let’s get started!</p>
        <h1 className="mt-1 text-2xl font-semibold tracking-tight">Create an Account</h1>
      </div>

      <form onSubmit={onSubmit} className="space-y-4">
        {/* Name */}
        <label className="block">
          <span className="mb-1 block text-sm text-white/80">Name</span>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder=""
            className="w-full rounded-full border border-white/20 bg-white/10 px-5 py-3 outline-none transition focus:border-white/40"
          />
        </label>

        {/* Email */}
        <label className="block">
          <span className="mb-1 block text-sm text-white/80">Email</span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-full border border-white/20 bg-white/10 px-5 py-3 outline-none transition focus:border-white/40"
          />
        </label>

        {/* Password */}
        <label className="block">
          <span className="mb-1 block text-sm text-white/80">Password</span>
          <div className="relative">
            <input
              type={showPw ? "text" : "password"}
              value={pw}
              onChange={(e) => setPw(e.target.value)}
              className="w-full rounded-full border border-white/20 bg-white/10 px-5 py-3 pr-12 outline-none transition focus:border-white/40"
            />
            <button
              type="button"
              aria-label={showPw ? "Hide password" : "Show password"}
              onClick={() => setShowPw((s) => !s)}
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 hover:bg-white/10"
            >
              {showPw ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
          <p className="mt-1 text-xs text-white/60">Use at least 8 characters.</p>
        </label>

        {/* Confirm Password */}
        <label className="block">
          <span className="mb-1 block text-sm text-white/80">Confirm Password</span>
          <div className="relative">
            <input
              type={showCpw ? "text" : "password"}
              value={cpw}
              onChange={(e) => setCpw(e.target.value)}
              className={`w-full rounded-full border px-5 py-3 pr-12 outline-none transition
                ${pwMismatch ? "border-red-400 bg-red-500/10" : "border-white/20 bg-white/10 focus:border-white/40"}
              `}
            />
            <button
              type="button"
              aria-label={showCpw ? "Hide password" : "Show password"}
              onClick={() => setShowCpw((s) => !s)}
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 hover:bg-white/10"
            >
              {showCpw ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
          {pwMismatch && (
            <p className="mt-1 text-xs text-red-300">Passwords do not match.</p>
          )}
        </label>

        {/* Terms */}
        <label className="mt-1 flex items-start gap-2 text-sm">
          <input
            type="checkbox"
            checked={agree}
            onChange={(e) => setAgree(e.target.checked)}
            className="mt-1 h-4 w-4 rounded border-white/30 bg-white/10 accent-white"
          />
          <span className="text-white/80">
            I here by agree to the{" "}
            <Link href="/terms" className="underline underline-offset-2 hover:text-white">
              Terms &amp; Conditions
            </Link>{" "}
            Of Bit Core
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
        {submitting ? "Signing Up..." : "Sign Up"}
        </button>


        {/* Footnote */}
        <p className="pt-1 text-center text-sm text-white/70">
          Already have an account?{" "}
          <Link href="/signin" className="text-white underline underline-offset-2">
            Sign In
          </Link>
        </p>
      </form>
    </div>
  );
}
