// app/(auth)/layout.tsx
import type { Metadata } from "next";
import Image from "next/image";
import { SignUpImages } from "@/assests/signup";


export const metadata: Metadata = {
  title: "Bits Core",
  description: "Sign in or create your Bits Core account.",
};

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen w-full bg-[#0b1630] text-white">
      {/* page padding */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 items-center">
          {/* Illustration / Left panel */}
            <div className="relative rounded-2xl overflow-hidden p-6 sm:p-8 hidden lg:block">
            <div className="absolute inset-0 pointer-events-none rounded-2xl ring-1 ring-white/10" />
            <Image
               src={SignUpImages.SideImage}
              alt="Productivity illustration"
              width={900}
              height={700}
              className="w-full h-auto select-none"
              priority
            />
          </div>

          {/* Form Card / Right panel */}
          <div className="relative">
            {/* dotted border glow */}
            <div className="absolute -inset-3 -z-10 rounded-3xl bg-gradient-to-br from-white/10 to-white/0 blur-xl" />
            <div
               className="space-y-6 rounded-3xl p-6 sm:p-8 min-h-[85vh]"
              style={{
                background: "linear-gradient(180deg, rgba(27, 43, 75, 0.95) 0%, rgba(47, 47, 53, 0.95) 100%)"
              }}
            >
              {/* logo */}
              <div className="mb-6 flex items-center justify-center gap-3">
                <Image
                  src={SignUpImages.logo} // your logo
                  alt="Bits Core"
                  width={36}
                  height={36}
                />
                <span className="text-lg sm:text-xl font-semibold">Bits Core</span>
              </div>

              {/* The page content (Sign In OR Sign Up) */}
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
