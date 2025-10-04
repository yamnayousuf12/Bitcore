"use client";
import { useEffect, useRef, useState } from "react";
import Popper from "popper.js";

export default function PopperExample() {
  const [show, setShow] = useState(false);
  const btnRef = useRef<HTMLButtonElement>(null);
  const popperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (show && btnRef.current && popperRef.current) {
      new Popper(btnRef.current, popperRef.current, {
        placement: "bottom-start", // or 'right-start', 'top', etc.
      });
    }
  }, [show]);

  return (
    <div className="relative inline-block">
      {/* Toggle Button */}
      <button
        ref={btnRef}
        onClick={() => setShow(!show)}
        className="flex items-center gap-2 rounded-full border border-gray bg-[#FFFFFF26] px-4 h-11 hover:bg-white/30 transition w-full"
      >
        ⚙️ Settings
      </button>

      {/* Popper Content */}
      {show && (
        <div
          ref={popperRef}
          className="z-50 mt-2 w-48 rounded-lg border border-white/10 bg-[#1A1A1A] shadow-lg p-2"
        >
          <ul className="space-y-1 text-sm text-white/80">
            <li className="hover:bg-white/10 p-2 rounded-md cursor-pointer">
              Profile Settings
            </li>
            <li className="hover:bg-white/10 p-2 rounded-md cursor-pointer">
              Manage Users
            </li>
            <li className="hover:bg-white/10 p-2 rounded-md cursor-pointer">
              Log Out
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
