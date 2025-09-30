"use client";

export default function SearchBar({
  value,
  onChange,
  placeholder = "Search Task...",
}: {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}) {
  return (
    <div className="relative full md:w-[420px] -ml-20 md:ml-12 lg:ml-8 xl:-ml-0 2xl:-ml-5" >
     
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        type="text"
        placeholder={placeholder}
        className="w-full h-12 rounded-2xl bg-white/10 border border-white/15 pl-11 pr-4
                   placeholder:text-white/60 outline-none focus:ring-2 focus:ring-white/30"
      />
      <span className="absolute left-3 top-1/2 -translate-y-1/2">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
          <path d="M20 20l-3.5-3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </span>
    </div>
  );
}
