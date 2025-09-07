import React from "react";

export function SectionHeading({ children }: { children: React.ReactNode }) {
  return <h4 className="text-white font-semibold mb-2">{children}</h4>;
}

export function SectionText({ children }: { children: React.ReactNode }) {
  return <p className="text-white/80 leading-relaxed">{children}</p>;
}
