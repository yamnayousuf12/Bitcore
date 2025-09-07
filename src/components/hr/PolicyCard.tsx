import React from "react";

interface PolicyCardProps {
  onEdit?: () => void;
  updatedAt?: string; // e.g. "June 15, 2025"
  children: React.ReactNode;
}

export default function PolicyCard({ onEdit, updatedAt, children }: PolicyCardProps) {
  return (
    <div
      className="relative rounded-2xl border-2 border-dotted border-white/80 p-5 md:p-6"
      style={{
        background:
          "linear-gradient(180deg, rgba(255,255,255,0.04) 0%, rgba(19,43,96,0.06) 100%)",
      }}
    >
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-lg font-semibold text-[#7ec3ff]">HR Policy Overview</h3>
          <div className="mt-1 h-px w-24 bg-white/20" />
        </div>

        {onEdit && (
          <button
            onClick={onEdit}
            aria-label="Edit section"
            className="rounded-lg p-2 text-white/80 hover:text-white hover:bg-white/10"
            title="Edit"
          >
            {/* tiny pen icon */}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25Z" stroke="currentColor" strokeWidth="1.5" />
              <path d="M14.06 6.19l3.75 3.75" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </button>
        )}
      </div>

      <div className="mt-4">{children}</div>

      {updatedAt && (
        <div className="mt-6 text-right text-xs text-white/60">
          Last updated: {updatedAt}
        </div>
      )}
    </div>
  );
}
