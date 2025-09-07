import Image from "next/image";

export default function DateFilter() {
  return (
    <div className="flex flex-col md:flex-row gap-4 md:items-end bg-[#0f172a] p-4 rounded-lg border border-gray-700 -mt-10 md:-mt-7 w-80 md:w-[850px] -ml-6 md:ml-0">
      <div className="flex flex-col ">
        <label className="text-sm mb-1 lg:block hidden">Date Range</label>
         <label className="text-sm mb-1 block lg:hidden mt-8">Date from:</label>
          <label className="text-sm mb-1 block lg:hidden mt-8">Date To:</label>
         
        <div className="md:flex gap-2 md:ml-0 ml-36 -mt-24 md:mt-0">
          <input type="date" className="bg-gray-800 p-2 rounded border border-gray-500 mb-5 md:mb-0  " />
          <input type="date" className="bg-gray-800 p-2 rounded border border-gray-500 md:mb-0 mb-2" />
        </div>
      </div>
      <div className="md:flex flex-col  ">
        <label className="text-sm mb-1 ">Employee</label>
        <select className="bg-gray-800 p-2.5 rounded border border-gray-500 ml-20 md:ml-0 md:m-2 -m-9 md:mt-0 mb-2 md:mb-0  w-36 md:w-full">
          <option>All Employee</option>
        </select>
      </div>
      <div className="md:flex flex-col">
        <label className="text-sm mb-1 ">Project</label>
        <select className="bg-gray-800 p-2.5 rounded border border-gray-500 ml-24 md:ml-0 md:m-6 -m-9 md:mt-0 mb-2 md:mb-0 w-36 md:w-full">
          <option>All Projects</option>
        </select>
      </div>
     <button className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg text-white flex items-center gap-2 md:self-end justify-center">
  <Image src="/icon.png" alt="Filter Icon" 
  width={20}   
    height={20}
  className="w-5 h-5" />
  Apply Filter
</button>

    </div>
  );
}
