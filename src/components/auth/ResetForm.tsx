"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ResetForm() {
  const router = useRouter();
  // ...existing code...
  // const email = searchParams.get("email") ?? "test@example.com";

  const [pwd, setPwd] = useState("");
  const [confirm, setConfirm] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const valid = pwd.length >= 6 && pwd === confirm;
  const canSubmit = valid && !submitting;

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!canSubmit) return;
    setSubmitting(true);
    try {
      // TODO: call your API to reset password for `email` with `pwd`
      await new Promise((r) => setTimeout(r, 700));
      router.push("/password/success");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="space-y-8 pt-12 sm:pt-20 md:pt-24">
      {/* Heading */}
      <div className="text-center space-y-2">
        <h2 className="text-[22px] sm:text-2xl md:text-3xl font-semibold">Password Reset</h2>
        <p className="text-xs sm:text-sm md:text-base text-white/70">
          Change a new password
        </p>
      </div>

      {/* Form */}
      <form onSubmit={onSubmit} className="space-y-5 max-w-md mx-auto w-full">
        <div className="space-y-1.5">
          <label className="text-xs sm:text-sm text-white/80">Password</label>
          <input
            type="password"
            value={pwd}
            onChange={(e) => setPwd(e.target.value)}
            placeholder="••••••••"
            className="w-full rounded-full bg-transparent border border-white/30 px-4 py-2.5 sm:py-3 outline-none placeholder:text-white/50 focus:border-white/60 text-sm sm:text-base"
          />
        </div>

        <div className="space-y-1.5">
          <label className="text-xs sm:text-sm text-white/80">Confirm Password</label>
          <input
            type="password"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            placeholder="••••••••"
            className="w-full rounded-full bg-transparent border border-white/30 px-4 py-2.5 sm:py-3 outline-none placeholder:text-white/50 focus:border-white/60 text-sm sm:text-base"
          />
        </div>

        <button
          type="submit"
          disabled={!canSubmit}
          className={`mt-2 w-full rounded-full px-6 py-3 text-base font-medium transition-colors duration-300
            ${
              canSubmit
                ? "bg-white text-[#1b3766] hover:bg-[#1b3766] hover:text-white"
                : "bg-white/40 text-white/70 cursor-not-allowed"
            }`}
        >
          {submitting ? "Resetting..." : "Reset Password"}
        </button>
      </form>
    </div>
  );
}
