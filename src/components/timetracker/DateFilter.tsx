


"use client";
import Image from "next/image";

export default function DateFilter() {
  return (
    <div>
      {/* ✅ Mobile Layout (only visible on small screens) */}
      <div className="bg-[#0f172a] p-4 rounded-xl border border-gray/30 w-[125%] max-w-lg mx-auto block md:hidden -mt-20 -ml-8">
        <div className="flex flex-col gap-4">
          {/* Date From */}
          <div className="flex items-center justify-between gap-4 ">
            <label className="text-sm text-white whitespace-nowrap ">Date from:</label>
            <input
              type="date"
              className="bg-gray3 text-white p-2 rounded-lg border border-gray/30 flex-1"
            />
          </div>

          {/* Date To */}
          <div className="flex items-center justify-between gap-4">
            <label className="text-sm text-white whitespace-nowrap">Date To:</label>
            <input
              type="date"
              className="bg-gray3 text-white p-2 rounded-lg border border-gray/30 flex-1"
            />
          </div>

          {/* Employee */}
          <div className="flex items-center justify-between gap-4">
            <label className="text-sm text-white whitespace-nowrap">Employee:</label>
            <select className="bg-gray3 text-white p-2 rounded-lg border border-gray/30 flex-1">
              <option>All Employee</option>
            </select>
          </div>

          {/* Project */}
          <div className="flex items-center justify-between gap-4">
            <label className="text-sm text-white whitespace-nowrap">Project:</label>
            <select className="bg-gray3 text-white p-2 rounded-lg border border-gray/30 flex-1">
              <option>All Projects</option>
            </select>
          </div>

          {/* Button */}
          <button className="bg-Blue hover:bg-Blue px-4 py-3 rounded-lg text-white flex items-center justify-center gap-2">
            <Image
              src="/icon.png"
              alt="Filter Icon"
              width={18}
              height={18}
              className="w-5 h-5"
            />
            Apply Filter
          </button>
        </div>
      </div>

      {/* ✅ Desktop Layout (your existing code, only visible md+) */}
      <div className="hidden md:flex flex-col md:flex-row gap-7 md:items-center bg-[#0f172a] p-4 rounded-lg border border-gray/30 w-full -mt-16 md:border md:border-white/25  text-white md:bg-gradient-to-b from-white/[0.08] to-white/[0.03] md:-mt-16  sm:-mt-3 lg:-mt-12 sm:w-[107.8%]  
    md:w-[114.5%]  
    lg:w-[109%] 
    xl:w-[106%] 
    2xl:w-[105%] 2xl:-ml-2 lg:-ml-9 xl:-ml-4 md:-ml-16 sm:-ml-0 -ml-8 ">
        <div className="flex flex-col items-center justify-center 2xl:ml-28 xl:ml-20 lg:ml-6 md:ml-2">
          <label className="text-sm mb-1 ">Date Range</label>
          <div className="md:flex gap-5">
            <input
              type="date"
              className="bg-gray3 p-2 rounded border border-gray/20"
            />
            <input
              type="date"
              className="bg-gray3 p-2 rounded border border-gray/20"
            />
          </div>
        </div>

        <div className="md:flex flex-col">
          <label className="text-sm mb-1">Employee</label>
          <select className="bg-gray3 p-2.5 rounded border border-gray/20 w-36 md:w-full">
            <option>All Employee</option>
          </select>
        </div>

        <div className="md:flex flex-col">
          <label className="text-sm mb-1">Project</label>
          <select className="bg-gray3 p-2.5 rounded border border-gray/20 w-36 md:w-full">
            <option>All Projects</option>
          </select>
        </div>

        <button className="bg-Blue hover:bg-Blue px-4 py-2 rounded-lg text-white flex items-center gap-2 md:self-end">
          <Image
            src="/icon.png"
            alt="Filter Icon"
            width={20}
            height={20}
            className="w-5 h-5"
          />
          Apply Filter
        </button>
      </div>
    </div>
  );
}
