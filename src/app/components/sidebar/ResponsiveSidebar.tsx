"use client";
import React from "react";
import Sidebar from "./Sidebar";
import MobileSidebar from "./MobileSidebar";

export default function ResponsiveSidebar() {
  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden md:block">
        <Sidebar />
      </div>

      {/* Mobile Sidebar */}
      <div className="block md:hidden">
        <MobileSidebar />
      </div>
    </>
  );
}
