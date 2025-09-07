"use client";

import Link from "next/link";

export default function SuccessCard() {
  return (
    <div className="pt-12 sm:pt-20 md:pt-24 flex justify-center">
      <div className="w-full max-w-sm rounded-3xl bg-white text-[#0f1a2e] px-6 py-8 shadow-lg">
        <div className="flex items-center gap-2 justify-center text-lg sm:text-xl font-semibold">
          <span className="inline-flex h-5 w-5 items-center justify-center rounded bg-black/5">
            ✓
          </span>
          Successful
        </div>

        <p className="mt-2 text-center text-sm sm:text-base text-black/70">
          Password has been reset
        </p>

        <div className="mt-5 flex justify-center">
          <Link
            href="/SignIn"
            className="inline-flex items-center justify-center rounded-full bg-[#1b3766] px-5 py-2 text-sm sm:text-base text-white hover:opacity-90 transition"
          >
            Go to Sign in
          </Link>
        </div>
      </div>
    </div>
  );
}
