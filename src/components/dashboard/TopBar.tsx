

"use client";
import UserDropdown from "./UserDropdown";

interface TopBarProps {
  heading: string;
  onOpenMenu: () => void;
}

export default function TopBar({ heading, onOpenMenu }: TopBarProps) {
  return (
    <>
      {/* ✅ Mobile Top Bar */}
      <div
        className="
          fixed top-0 left-0 z-40 
          w-full 
          bg-[#101B31]/95 
          backdrop-blur-md 
          border-b border-white/20 
          px-4 py-3 
          flex items-center justify-between
          lg:hidden
        "
      >
        {/* Hamburger Menu */}
        <button
          onClick={onOpenMenu}
          aria-label="Open menu"
          className="p-2 rounded-md hover:bg-white/10 transition"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="text-white"
          >
            <path
              d="M4 6h16M4 12h16M4 18h16"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>

        {/* User Dropdown */}
        <UserDropdown username="Raheel" role="Super Admin" />
      </div>

      {/* ✅ Desktop Top Bar */}
      <header
        className="
          hidden lg:flex 
          items-center 
          justify-between 
          bg-[#101B31]/95 
          backdrop-blur-md 
          border border-white/20 
          px-6 py-4 
          rounded-tr-xl 
          z-30
        "
      >
        {/* Heading */}
        <h1 className="text-xl font-medium tracking-wide text-white">
          {heading}
        </h1>

        {/* Search + Profile */}
        <div className="flex items-center gap-4">
          {/* Search Bar */}
          <div className="relative w-64">
            <input
              type="text"
              placeholder="Search"
              className="w-full rounded-full bg-[#1b2333] text-white border border-white/10 px-4 h-11 pl-10 placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/20"
            />
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-white/70">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
              >
                <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
                <path
                  d="M20 20l-3.5-3.5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </div>

          {/* User Dropdown */}
          <UserDropdown username="Raheel" role="Super Admin" />
        </div>
      </header>
    </>
  );
}
