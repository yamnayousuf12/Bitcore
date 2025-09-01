"use client";
import React from "react";


import TeamTable from "./TeamTable";
import MobileTeam from "./MobileTeam";


export default function ResponsiveSidebar() {
  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden md:block">
        <TeamTable />
      </div>

      {/* Mobile Sidebar */}
      <div className="block md:hidden">
      <MobileTeam/>
      </div>
    </>
  );
}
