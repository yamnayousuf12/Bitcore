// import Image from "next/image";

// export default function DateFilter() {
//   return (
//     <div className="flex flex-col md:flex-row gap-4 md:items-end bg-[#0f172a] p-4 rounded-lg border border-gray -mt-10 md:-mt-7 w-80 md:w-[850px] ">
//       <div className="flex flex-col ">
//         <label className="text-sm mb-1 lg:block hidden">Date Range</label>
//          <label className="text-sm mb-1 block lg:hidden mt-8">Date from:</label>
//           <label className="text-sm mb-1 block lg:hidden mt-8">Date To:</label>
         
//         <div className="md:flex gap-2 md:ml-0 ml-36 -mt-24 md:mt-0">
//           <input type="date" className="bg-gray2/45 p-2 rounded border border-gray/20 mb-5 md:mb-0  " />
//           <input type="date" className="bg-gray2/45 p-2 rounded border border-gray/20 md:mb-0 mb-2" />
//         </div>
//       </div>
//       <div className="md:flex flex-col   ">
//         <label className="text-sm mb-1 ">Employee</label>
//         <select className="bg-gray2/45 p-2.5 rounded border border-gray/20 ml-20 md:ml-0 md:m-2 -m-9 md:mt-0 mb-2 md:mb-0  w-36 md:w-full">
//           <option>All Employee</option>
//         </select>
//       </div>
//       <div className="md:flex flex-col">
//         <label className="text-sm mb-1 ">Project</label>
//         <select className="bg-gray2/45 p-2.5 rounded border border-gray/20 ml-24 md:ml-0 md:m-6 -m-9 md:mt-0 mb-2 md:mb-0 w-36 md:w-full">
//           <option>All Projects</option>
//         </select>
//       </div>
//      <button className="bg-Blue hover:bg-Blue/55 px-4 py-2 rounded-lg text-white flex items-center gap-2 md:self-end justify-center">
//   <Image src="/icon.png" alt="Filter Icon" 
//   width={20}   
//     height={20}
//   className="w-5 h-5" />
//   Apply Filter
// </button>

//     </div>
//   );
// }



"use client";
import Image from "next/image";

export default function DateFilter() {
  return (
    <div>
      {/* ✅ Mobile Layout (only visible on small screens) */}
      <div className="bg-[#0f172a] p-4 rounded-xl border border-gray/30 w-full max-w-lg mx-auto block md:hidden -mt-12">
        <div className="flex flex-col gap-4">
          {/* Date From */}
          <div className="flex items-center justify-between gap-4 ">
            <label className="text-sm text-white whitespace-nowrap ">Date from:</label>
            <input
              type="date"
              className="bg-gray3 text-white p-2 rounded-lg border border-gray flex-1"
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
      <div className="hidden md:flex flex-col md:flex-row gap-4 md:items-center bg-[#0f172a] p-4 rounded-lg border border-gray/30 w-full ">
        <div className="flex flex-col">
          <label className="text-sm mb-1 lg:block hidden">Date Range</label>
          <div className="md:flex gap-2">
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
