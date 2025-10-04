// import TaskBoard from "@/components/task/TaskBoard";
// import { ArrowLeft } from "lucide-react";

// export default function TasksPage() {
//   return (
//     <div className="px-4 sm:px-6 lg:px-8 -pt-28 md:pt-20 sm:pt-20 lg:pt-20 lx:pt-20 2xl:pt-20 pb-10 md:pb-16 2xl:pb-20 max-w-7xl mx-auto  ">
//       <div className="absolute left-24 -translate-x-1/2 flex items-center gap-2 -mt-20 text-base lg:hidden text-[#BAD4EF] flex-shrink-0">
//   {/* Back Arrow Icon */}
//   <ArrowLeft className="h-5 w-5 cursor-pointer hover:text-white" />

//   {/* Text */}
//   <span className="font-medium tracking-wide">Task Management</span>
// </div>
//       <TaskBoard />
//     </div>
//   );
// }


"use client";

import TaskBoard from "@/components/task/TaskBoard";
import { ArrowLeft } from "lucide-react";

export default function TasksPage() {
  return (
    <div
      className="
        relative 
        w-full 
        max-w-7xl 
        mx-auto 
        px-4 sm:px-6 lg:px-8 
        pt-8 md:pt-12 lg:pt-16 
        pb-10 md:pb-16 2xl:pb-20
      "
    >
      {/* 🔹 Mobile Header (Back Button + Title) */}
      <div
        className="
          absolute 
          top-4 left-6 
          flex items-center gap-2 
          text-base text-[#BAD4EF] 
          lg:hidden
        "
      >
        <ArrowLeft className="h-5 w-5 cursor-pointer hover:text-white transition-colors duration-200" />
        <span className="font-medium tracking-wide">Task Management</span>
      </div>

      {/* 🔹 Task Board Section */}
      <div
        className="
          mt-6 
          rounded-xl 
          shadow-lg 
          
          backdrop-blur-sm
        "
      >
        <TaskBoard />
      </div>
    </div>
  );
}
