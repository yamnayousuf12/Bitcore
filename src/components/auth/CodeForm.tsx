"use client";

import { useRouter } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";

export default function CodeForm({ email }: { email?: string }) {
  const router = useRouter();
  const actualEmail = email || "test@example.com"; // fallback if no email passed

  // Mask email
  const maskedEmail = useMemo(() => {
    const [u, d] = actualEmail.split("@");
    if (!u || !d) return actualEmail;
    const keep = Math.min(2, u.length);
    return `${u.slice(0, keep)}${"*".repeat(Math.max(0, u.length - keep))}@${d}`;
  }, [actualEmail]);

  // Rest of your OTP code logic
  const [values, setValues] = useState<string[]>(Array(6).fill(""));
  const inputsRef = useRef<Array<HTMLInputElement | null>>(Array(6).fill(null));
  const code = values.join("");
  const canSubmit = code.length === 6;

  useEffect(() => {
    inputsRef.current[0]?.focus();
  }, []);

  function onChange(i: number, v: string) {
    const digit = v.replace(/\D/g, "").slice(-1);
    const next = values.slice();
    next[i] = digit ?? "";
    setValues(next);
    if (digit && i < 5) inputsRef.current[i + 1]?.focus();
  }

  function onKeyDown(i: number, e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Backspace" && !values[i] && i > 0) {
      inputsRef.current[i - 1]?.focus();
    }
    if (e.key === "ArrowLeft" && i > 0) inputsRef.current[i - 1]?.focus();
    if (e.key === "ArrowRight" && i < 5) inputsRef.current[i + 1]?.focus();
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!canSubmit) return;
    await new Promise((r) => setTimeout(r, 600));
    router.push(`/password/reset?email=${encodeURIComponent(actualEmail)}`);
  }

  return (
    <div className="space-y-8 pt-12 sm:pt-20 md:pt-24">
      <div className="text-center space-y-2">
        <h2 className="text-[22px] sm:text-2xl md:text-3xl font-semibold">Forget Password</h2>
        <p className="text-xs sm:text-sm md:text-base text-white/70">
          Enter your 6-Digit code sent to <span className="text-white">{maskedEmail}</span> to
          change your password
        </p>
      </div>

      <form onSubmit={onSubmit} className="space-y-6 max-w-md mx-auto">
        <label className="block text-xs sm:text-sm text-white/80">Enter Code</label>
        <div className="flex items-center justify-center gap-3 sm:gap-4">
          {values.map((v, i) => (
            <input
              key={i}
              ref={(el) => { inputsRef.current[i] = el; }}
              value={v}
              onChange={(e) => onChange(i, e.target.value)}
              onKeyDown={(e) => onKeyDown(i, e)}
              inputMode="numeric"
              maxLength={1}
              className="h-11 w-10 sm:h-12 sm:w-12 text-center rounded-md bg-white border border-white/25 text-black text-lg sm:text-xl outline-none focus:border-white/60"
            />
          ))}
        </div>

        <button
          type="submit"
          disabled={!canSubmit}
          className={`w-full rounded-full px-6 py-3 text-base font-medium transition-colors duration-300
            ${
              canSubmit
                ? "bg-white text-[#1b3766] hover:bg-[#1b3766] hover:text-white"
                : "bg-white/40 text-white/70 cursor-not-allowed"
            }`}
        >
          Submit Code
        </button>

        <div className="text-center text-xs sm:text-sm text-white/60">
          Code not received?{" "}
          <button type="button" onClick={() => {}} className="text-white hover:underline ml-1">
            Resend
          </button>
        </div>
      </form>
    </div>
  );
}
