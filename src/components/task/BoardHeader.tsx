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
      <div className="flex items-center gap-3 md:gap-20 p-3 rounded-2xl md:bg-gradient-to-b from-white/5 to-white/0 md:border md:border-white/20 md:w-[921px] md:-ml-7" >
  <SearchBar value={query} onChange={setQuery} />

        <button
          onClick={() => setOpen(true)}
          className=" h-11 px-5 rounded-2xl bg-Blue hover:bg-Blue/55
                     text-white font-medium bordnd border-white/10 itemes-e flex-shrink-0 md:-ml-12"
        >
          Add Task
        </button>

        <div className="hidden md:flex items-center gap-1 pl-2">
          {Array.from({ length: 4 }).map((_, i) => (
            <span
              key={i}
              className="-ml-3 first:ml-0 inline-grid place-items-center
                         h-10 w-10 rounded-full ring-2 ring-white/20 bg-white/40"
            />
          ))}
          <span className="ml-2 text-sm text-white">+12</span>
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
