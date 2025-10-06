import TaskBoard from "@/components/task/TaskBoard";
import { ArrowLeft } from "lucide-react";

export default function TasksPage() {
  return (
    <div className="px-4 sm:px-6 lg:px-8 -pt-28 md:pt-20 sm:pt-20 lg:pt-20 lx:pt-20 2xl:pt-20 pb-10 md:pb-16 2xl:pb-20 mx-auto -mt-20 sm:w-[107.8%]  
    md:w-[105.5%]  
    lg:w-[107%] 
    xl:w-[104.2%] 
    2xl:w-[101%] 2xl:-ml-3 lg:-ml-9 xl:-ml-4 md:-ml-6 sm:-ml-0 -ml-9 w-[123%]
          p-4 md:p-6 lg:p-8 md:-mt-24 lg:mt-10 xl:mt-10 2xl:mt-10">
      <div className="absolute left-24 -translate-x-1/2 flex items-center gap-2 -mt-9 text-base lg:hidden text-[#BAD4EF] flex-shrink-0 bg-r
      ">
  {/* Back Arrow Icon */}
  <ArrowLeft className="h-5 w-5 cursor-pointer hover:text-white" />

  {/* Text */}
  <span className="font-medium tracking-wide">Task Management</span>
</div>
      <TaskBoard />
    </div>
  );
}


// "use client";

// import TaskBoard from "@/components/task/TaskBoard";
// import { ArrowLeft } from "lucide-react";

// export default function TasksPage() {
//   return (
//     <div
//       className="
//         relative  
//          bg-Blue 
//           mt-6 
//           rounded-xl 
//           shadow-lg 
//            sm:w-[107.8%]  
//     md:w-[105.5%]  
//     lg:w-[107%] 
//     xl:w-[104.2%] 
//     2xl:w-[101%] 2xl:ml-2 lg:-ml-9 xl:-ml-4 md:-ml-9 sm:-ml-0 -ml-8 w-full mx-auto
//           p-4 md:p-6 lg:p-8 
//           border border-white/10
//           backdrop-blur-sm
     
//         px-4 sm:px-6 lg:px-8 
//         pt-8 md:pt-12 lg:pt-16 
//         pb-10 md:pb-16 2xl:pb-20
//       "
//     >
//       {/* 🔹 Mobile Header (Back Button + Title) */}
//       <div
//         className="
//           absolute 
//           top-4 left-6 
//           flex items-center gap-2 
//           text-base text-[#BAD4EF] 
//           lg:hidden 
//         "
//       >
//         <ArrowLeft className="h-5 w-5 cursor-pointer hover:text-white transition-colors duration-200" />
//         <span className="font-medium tracking-wide">Task Management</span>
//       </div>

//       {/* 🔹 Task Board Section */}
//       <div
//         className="
//           mt-6 
//           rounded-xl 
//           shadow-lg 
//           bg-Red sm:w-[107.8%]  
//     md:w-[105.5%]  
//     lg:w-[107%] 
//     xl:w-[104.2%] 
//     2xl:w-[101%] 2xl:ml-2 lg:-ml-9 xl:-ml-4 md:-ml-9 sm:-ml-0 -ml-8 w-full mx-auto
//           p-4 md:p-6 lg:p-8 
//           border border-white/10
//           backdrop-blur-sm
//         "
//       >
//         <TaskBoard />
//       </div>
//     </div>
//   );
// }
