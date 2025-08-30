"use client";
import React from "react";
import Topbar from "./Topbar";
import MobileTopbar from "../topber/MobileTopbar";
// import Sidebar from "./Sidebar";
// import MobileSidebar from "./MobileSidebar";

export default function ResponsiveTopber() {
  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden md:block">
        <Topbar/>
      </div>

      {/* Mobile Sidebar */}
      <div className="block md:hidden">
        <MobileTopbar/>
      </div>
    </>
  );
}
