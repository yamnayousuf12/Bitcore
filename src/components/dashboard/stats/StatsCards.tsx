"use client";
import React from "react";
import Image from "next/image";

export default function DashboardStats() {
  const stats = [
    { label: "Total User", value: "25", icon: "/icon/users.svg" },
    { label: "Pending Tasks", value: "08", icon: "/icon/pending.svg" },
    { label: "Complete Tasks", value: "05", icon: "/icon/complete.svg" },
    { label: "Avg. Hours/Day", value: "7.5", icon: "/icon/clock.svg" },
  ];

  return (
    <div className="bg-gradient-to-br from-[#454c5b] to-[#0b1a3a] rounded-xl border-white/20 border p-4 flex items-center justify-between shadow-lg -mt-7 mb-6 py-5">
      {stats.map((item, index) => (
        <div key={index} className="flex items-center gap-4 relative px-6">
          {/* Icon Image */}
          <div className="w-12 h-12 flex items-center justify-center ">
            <Image
              src={item.icon}
              alt={item.label}
              width={100}
              height={100}
              className="object-contain"
            />
          </div>

          {/* Text */}
          <div>
            <p className="text-gray text-sm">{item.label}</p>
            <p className="text-white text-xl font-bold">{item.value}</p>
          </div>

          {/* Divider */}
          {index !== stats.length - 1 && (
            <div className="absolute right-0 top-2 bottom-2 w-px bg-gray"></div>
          )}
        </div>
      ))}

     
    </div>
  );
}
