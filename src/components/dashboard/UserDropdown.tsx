// components/UserDropdown.tsx
"use client";
import { FiSettings, FiLogOut } from "react-icons/fi";
import { useState } from "react";
import Image from "next/image";

interface UserDropdownProps {
  username: string;
  role: string;
}

const UserDropdown = ({ username, role }: UserDropdownProps) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="relative">
      {/* User menu button */}
      <button
        className="group flex items-center gap-3 rounded-full bg-white/10 border border-white/15 px-3 h-12 hover:bg-white/15 shrink-0 md:mt-4"
        aria-label="User menu"
        onClick={toggleDropdown}
      >
        <span className="relative inline-grid place-items-center">
          <Image
            src="https://ui-avatars.com/api/?name=R&background=0D8ABC&color=fff"
            alt="User"
            width={32}
            height={32}
            className="md:h-8 md:w-8 h-6 w-6 rounded-full ring-2 ring-white/20"
          />
          <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full bg-green ring-2 ring-[#0c1424]" />
        </span>
        <div className=" text-left">
          <div className="lg:text-sm text-[10px] leading-4 font-medium">{username}</div>
          <div className="lg:text-[11px] text-[8px] text-white/70">{role}</div>
        </div>
        <svg
          className={`md:ml-1 -ml-1  transition-transform ${
            dropdownOpen ? "rotate-180" : ""
          }`}
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {dropdownOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-gray3 text-white rounded-lg shadow-lg">
  <ul>
    <li className="hover:bg-gray/15 p-2 flex items-center gap-2">
      <FiSettings className="text-white text-lg" />
      <a href="/dashboard/settings" className="block text-sm">Settings</a>
    </li>
    <li className="hover:bg-gray/15 p-2 flex items-center gap-2">
      <FiLogOut className="text-Red text-lg" />
      <a href="/logout" className="block text-sm text-Red">Log Out</a>
    </li>
  </ul>
</div>
      )}
    </div>
  );
};

export default UserDropdown;
