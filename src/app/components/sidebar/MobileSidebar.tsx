"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  LayoutDashboard,
  Users,
  ListTodo,
  Clock,
  FileText,
  MessageSquare,
  X,
  Menu,
} from "lucide-react";

export default function MobileSidebar() {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { name: "Home / Dashboard", path: "/dashboard", icon: LayoutDashboard },
    { name: "User Management", path: "/user-management", icon: Users },
    { name: "Task Management", path: "/task-management", icon: ListTodo },
    { name: "Time Tracker", path: "/time-tracker", icon: Clock },
    { name: "HR Policies", path: "/hr-policies", icon: FileText },
    { name: "Chat", path: "/chat", icon: MessageSquare },
  ];

  return (
    <>
      {/* Toggle Button */}
      <button
        className="absolute top-11 left-2 z-50 bg-[#0d1b2a] text-white p-2 rounded-md  "
        onClick={() => setOpen(true)}
      >
        <Menu size={22} />
      </button>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-[#0d1b2a] text-white p-6 z-50 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header with Logo & Close */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-lg font-bold flex items-center gap-2">
            {/* Replace with your logo */}
           <Image src="/logo.svg" alt="Logo" width={30} height={60} />
            Bits Core
          </h1>
          <button
            className="text-gray hover:text-white"
            onClick={() => setOpen(false)}
          >
            <X size={20} />
          </button>
        </div>

        {/* Menu */}
        <nav className="space-y-2">
          {menuItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                href={item.path}
                className={`flex items-center gap-3 px-3 py-2 rounded-md transition ${
                  idx === 0
                    ? "bg-[#1b263b] text-white"
                    : "text-gray hover:bg-[#1b263b] hover:text-white"
                }`}
                onClick={() => setOpen(false)}
              >
                <Icon size={18} />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>
      </aside>
    </>
  );
}
