// app/(dashboard)/layout.tsx
"use client";
import { useState, PropsWithChildren } from "react";
import { usePathname } from "next/navigation";
import Sidebar from "@/components/dashboard/Sidebar";
import TopBar from "@/components/dashboard/TopBar";
import ContentCard from "@/components/dashboard/ContentCard";
import { TITLE_MAP, toTitle } from "@/components/dashboard/constants";
import { SignUpImages } from "@/assests/signup";

export default function Layout({ children }: PropsWithChildren) {
  return <DashboardShell>{children}</DashboardShell>;
}

function DashboardShell({ children }: PropsWithChildren) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const heading = TITLE_MAP[pathname] ?? toTitle(pathname);

  return (
    <div
      className="min-h-screen text-white"
      style={{
        background:
          "linear-gradient(112.58deg, #1a304efa 0.58%, #080D15 51.36%, #071028 99.29%)",
      }}
    >
      

      {/* Shell */}
      <div className="mx-auto max-w-full w-[109.8%] sm:w-[108%]  
    md:w-[105%]  
    lg:w-[100%] 
    xl:w-[200%] 
    2xl:w-[102%] px-3 sm:px-4 lg:px-6 ">
        <div className="relative flex">
          {/* Backdrop for mobile */}
          {open && (
            <div
              className="fixed inset-0 z-40 bg-black/50 lg:hidden"
              onClick={() => setOpen(false)}
            />
          )}

          {/* Sidebar */}
          <Sidebar open={open} onClose={() => setOpen(false)} logoSrc={SignUpImages.logo} />

          {/* Main column */}
          <div className="flex-1 min-w-0 py-4 lg:py-6">
            {/* Mobile top bar + sticky top header */}
      <TopBar heading={heading} onOpenMenu={() => setOpen(true)} />
            {/* Content card area */}
            <main className="min-h-[calc(100vh-8rem)]">
              <ContentCard pathname={pathname}>{children ?? <EmptyDemo />}</ContentCard>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}

function EmptyDemo() {
  return (
    <div className="grid gap-6">
      <h1 className="text-xl sm:text-2xl font-semibold">Dashboard</h1>
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">
        {["Total Users", "Pending Tasks", "Complete Tasks", "Avg. Hours/Day"].map(
          (title, i) => (
            <div
              key={i}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 sm:p-5"
            >
              <div className="text-sm text-white/70">{title}</div>
              <div className="mt-2 text-2xl font-semibold">—</div>
            </div>
          )
        )}
      </div>
      <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 sm:p-5">
        <div className="text-sm text-white/70 mb-2">Recent Activity</div>
        <div className="h-24 grid place-items-center text-white/60 text-sm">
          No activity yet.
        </div>
      </div>
    </div>
  );
}
