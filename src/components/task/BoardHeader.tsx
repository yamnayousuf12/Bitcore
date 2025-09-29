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
      <div className="flex items-center justify-center gap-3 md:gap-20 p-3 rounded-2xl md:bg-gradient-to-b from-white/5 to-white/0 md:border md:border-white/20  mx-auto max-w-7xl w-[118%] sm:w-[115%]  
    md:w-[114%]  
    lg:w-[113%] 
    xl:w-[110%] 
    2xl:w-[109%] md:-ml-11 " >
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
