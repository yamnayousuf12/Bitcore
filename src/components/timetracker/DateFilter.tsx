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




import Image from "next/image";

export default function DateFilter() {
  return (
    <div className="flex flex-col md:flex-row gap-4 md:items-end bg-[#0f172a] p-4 rounded-lg border border-gray -mt-10 md:-mt-7 w-full md:w-[850px]">
      {/* Date Range */}
      <div className="flex flex-col w-full md:w-auto">
        {/* Desktop Label */}
        <label className="text-sm mb-1 hidden md:block">Date Range</label>

        {/* Mobile Labels */}
        <div className="flex flex-col gap-3 md:flex-row md:gap-2">
          <div className="flex flex-col w-full md:w-auto">
            <label className="text-sm mb-1 md:hidden">Date From:</label>
            <input
              type="date"
              className="bg-gray2/45 p-2 rounded border border-gray/20"
            />
          </div>
          <div className="flex flex-col w-full md:w-auto">
            <label className="text-sm mb-1 md:hidden">Date To:</label>
            <input
              type="date"
              className="bg-gray2/45 p-2 rounded border border-gray/20"
            />
          </div>
        </div>
      </div>

      {/* Employee */}
      <div className="flex flex-col w-full md:w-48">
        <label className="text-sm mb-1">Employee</label>
        <select className="bg-gray2/45 p-2.5 rounded border border-gray/20">
          <option>All Employee</option>
        </select>
      </div>

      {/* Project */}
      <div className="flex flex-col w-full md:w-48">
        <label className="text-sm mb-1">Project</label>
        <select className="bg-gray2/45 p-2.5 rounded border border-gray/20">
          <option>All Projects</option>
        </select>
      </div>

      {/* Apply Button */}
      <button className="bg-Blue hover:bg-Blue/55 px-4 py-2 rounded-lg text-white flex items-center gap-2 justify-center md:self-end">
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
  );
}
