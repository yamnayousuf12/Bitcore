"use client";
import React from "react";
import StatsCards from "./StatsCards";
import MobileStats from "./MobileStats";


export default function ResponsiveSidebar() {
  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden md:block">
        <StatsCards />
      </div>

      {/* Mobile Sidebar */}
      <div className="block md:hidden">
        <MobileStats />
      </div>
    </>
  );
}