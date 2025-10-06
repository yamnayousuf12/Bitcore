"use client";
import { useState } from "react";
import SearchBar from "./SearchBar";
import AddTaskModal, { AddTaskForm } from "./AddTaskModal";

export default function BoardHeader({
  query,
  setQuery,
  onAddTask, // optional: parent can still listen
}: {
  query: string;
  setQuery: (v: string) => void;
  onAddTask?: (data: AddTaskForm) => void;
}) {
  const [open, setOpen] = useState(false);

  const assignees = ["Employee 01", "Employee 02", "Employee 03"];
  const statuses = ["Pending", "Active", "Pause", "Done"];

  const handleCreate = (data: AddTaskForm) => {
    onAddTask?.(data); // notify parent if provided
    // otherwise do your default action here (API call, toast, etc.)
  };

  return (
    <>
      <div className="flex items-center justify-center gap-3 md:gap-20 p-3 rounded-2xl md:bg-gradient-to-b from-white/5 to-white/0 md:border md:border-white w-auto sm:w-[115%]  
    md:w-[109.7%]  
    lg:w-[105.4%] 
    xl:w-[106.6%] 
    2xl:w-[107.3%] sm:-ml-12 md:-ml-12 lg:-ml-4 xl:-ml-8 2xl:-ml-7 " >
  <SearchBar value={query} onChange={setQuery} />

        <button
          onClick={() => setOpen(true)}
          className=" h-11 px-5 rounded-2xl bg-Blue hover:bg-Blue/55
                     text-white font-medium bordnd border-white/10 itemes-e flex-shrink-0 md:-ml-14 "
        >
          Add Task
        </button>


        <div className="hidden md:flex items-center pl-2 md:ml-5 lg:ml-44 xl:ml-44 2xl:ml-96 ">
  {Array.from({ length: 5 }).map((_, i) => (
    <span
      key={i}
      className="-ml-3  first:ml-0 inline-grid place-items-center
                 h-8 w-8 rounded-full ring-2 ring-white bg-gray"
    />
  ))}
  <span
    className="-ml-3 inline-grid place-items-center 
               h-8 w-8 rounded-full ring-2 ring-white bg-white text-black text-sm font-medium"
  >
    +12
  </span>
</div>

      </div>


      <AddTaskModal
        isOpen={open}
        onClose={() => setOpen(false)}
        onCreate={handleCreate}
        assignees={assignees}
        statuses={statuses}
      />
    </>
  );
}

// "use client";
// import { useState } from "react";
// import SearchBar from "./SearchBar";
// import AddTaskModal, { AddTaskForm } from "./AddTaskModal";

// export default function BoardHeader({
//   query,
//   setQuery,
//   onAddTask,
// }: {
//   query: string;
//   setQuery: (v: string) => void;
//   onAddTask?: (data: AddTaskForm) => void;
// }) {
//   const [open, setOpen] = useState(false);

//   const assignees = ["Employee 01", "Employee 02", "Employee 03"];
//   const statuses = ["Pending", "Active", "Pause", "Done"];

//   const handleCreate = (data: AddTaskForm) => {
//     onAddTask?.(data);
//   };

//   return (
//     <>
//       {/* 🔹 Top Bar Container */}
//       <div
//         className="
//           flex flex-col md:flex-row items-center justify-between
//           gap-4 md:gap-6 
//           bg-gradient-to-b from-white/5 to-white/[0.02]
//           border border-white/10
//           rounded-2xl
//           p-3 md:p-4 lg:p-5
//           shadow-md sm:w-[107.8%]  
//     md:w-[105.5%]  
//     lg:w-[130%] 
//     xl:w-[114.2%] 
//     2xl:w-[101.2%] 2xl:-ml-8 lg:-ml-8 xl:-ml-16 md:-ml-9 sm:-ml-0 -ml-8 w-full max-w-[102.5%]  mx-auto bg-purple
//         "
//       >
//         {/* 🔍 Search Bar */}
//         <div className="flex-1 w-full">
//           <SearchBar value={query} onChange={setQuery} />
//         </div>

//         {/* ➕ Add Task Button */}
//         <button
//           onClick={() => setOpen(true)}
//           className="
//             h-11 px-6
//             rounded-xl
//             bg-Blue hover:bg-Blue
//             text-white font-medium
//             transition-colors duration-200
//             w-full md:w-auto
//           "
//         >
//           Add Task
//         </button>

//         {/* 👤 Avatars */}
//         <div className="hidden md:flex items-center justify-end flex-shrink-0">
//           {Array.from({ length: 5 }).map((_, i) => (
//             <span
//               key={i}
//               className="-ml-3 first:ml-0 inline-grid place-items-center
//                          h-8 w-8 rounded-full ring-2 ring-white bg-gray"
//             />
//           ))}
//           <span
//             className="-ml-3 inline-grid place-items-center
//                        h-8 w-8 rounded-full ring-2 ring-white bg-white text-black text-sm font-medium"
//           >
//             +12
//           </span>
//         </div>
//       </div>

//       {/* 🧩 Add Task Modal */}
//       <AddTaskModal
//         isOpen={open}
//         onClose={() => setOpen(false)}
//         onCreate={handleCreate}
//         assignees={assignees}
//         statuses={statuses}
//       />
//     </>
//   );
// }
