// components/dashboard/ContentCard.tsx
"use client";
import { CARD_GRADIENTS } from "./constants";
import type { GradientConfig } from "./types";

interface ContentCardProps {
  pathname: string;
  children: React.ReactNode;
  className?: string;
}

export default function ContentCard({ pathname, children, className = "" }: ContentCardProps) {
  const cfg: GradientConfig = CARD_GRADIENTS[pathname] ?? CARD_GRADIENTS.default;

  return (
    <div
      className={`p-4 sm:p-6 mt-20 md:mt-10 md:ml-8  ${className} ${
        cfg.type === "class" ? ` ${cfg.value}` : ""
      }`}
      style={cfg.type === "style" ? { background: cfg.value } : undefined}
    >
      {children}
    </div>
  );
}
