"use client";

import HRPolicyTabs from "@/components/hr/Tabs";

export default function PoliciesPage() {
  return (
    <main className="p-6  text-white space-y-4">
      <div className="absolute left-24 -translate-x-1/2 flex items-center -mt-20 text-base lg:hidden text-[#BAD4EF] itemes-eflex-shrink-0">
      <span className="font-semibold tracking-wide "> ← Company HR Policies</span>
      </div>
      <HRPolicyTabs />
    </main>
  );
}
