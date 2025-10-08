



"use client";
import { useState } from "react";
import { Task } from "../../lib/task";
import { MoreVertical, Edit, Trash2 } from "lucide-react";
import UpdateTaskModal, { UpdateTaskForm } from "./UpdateTaskModal";

export default function TaskCard({ task }: { task: Task }) {
  const [openEdit, setOpenEdit] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const assignees = ["Employee 01", "Employee 02", "Employee 03"];
  const statuses = ["todo", "inprogress", "review", "done"];

  const initialData: UpdateTaskForm = {
    title: task.title ?? "",
    assignee: assignees[0],
    subtasks: "",
    status: task.status ?? statuses[0],
    description: task.description ?? "",
    deadline: "",
    attachment: null,
  };

  const handleUpdate = (data: UpdateTaskForm) => {
    console.log("Updated task:", data);
  };

  const priorityColors: Record<string, string> = {
    Low: "bg-Blue/20 text-Blue",
    Medium: "bg-yellow/20 text-yellow",
    High: "bg-Red/20 text-Red ",
  };

  return (
    <>
      <article
        className="
          relative 
          rounded-xl 
          border border-white/10 
          bg-[#0e1b2c]/80 
          p-3
          shadow-lg 
          hover:shadow-xl 
          hover:-translate-y-1 
          transition-all 
          duration-300  

          /* Mobile (320px-639px) */
      min-w-[155px] max-w-[155%]
      /* Small screens (640px-767px) */
      sm:min-w-[130px] sm:max-w-[130%]
      /* Medium screens (768px-1023px) */
      md:min-w-[135px] md:max-w-[135%]
      /* Large screens (1024px-1279px) */
      lg:min-w-[125px] lg:max-w-[125%]
      /* Extra large screens (1280px-1535px) */
      xl:min-w-[120px] xl:max-w-[100%]
      /* 2XL screens (1536px+) */
      2xl:min-w-[130px] 2xl:max-w-[100%] -ml-3
        "
      >
        {/* ===== Header ===== */}
        <header className="flex items-start justify-between gap-1 ">
          <div className="flex items-start gap-1 ">
            <div className="h-7 w-7 md:w-6 md:h-6 rounded-full bg-white/10 flex-shrink-0 " />
            <div className="flex flex-col ">
              <h4 className="font-medium text-white text-xs leading-relaxed whitespace-nowrap flex-shrink-0">
                {task.title}
              </h4>
              <p className="text-[9px] text-Blue mt-1">
                {task.datetime ?? ""}
              </p>
            </div>
          </div>

          <div className="flex flex-col items-end gap-1 ">
           {/* Dropdown Menu Button */}
            <div className="relative">
              <button
                onClick={() => setShowMenu(!showMenu)}
                className="p-1 text-white/70 hover:text-white transition"
              >
                <MoreVertical size={14} />
              </button>

              {showMenu && (
                <div className="absolute right-0 top-6 w-32 rounded-lg bg-[#13233a] shadow-lg ring-1 ring-white/10 z-10">
                  {statuses.map((status) => (
                    <button
                      key={status}
                      className="w-full text-left px-3 py-2 text-sm text-white/70 hover:bg-white/10"
                    >
                      Move to {status}
                    </button>
                  ))}
                </div>
              )}
            </div>
             {/* ✅ Priority Badge */}
            {task.priority && (
              <span
                className={`px-2 py-0.5 rounded-full text-[7px] font-medium -ml-10 ${priorityColors[task.priority]}`}
              >
                {task.priority}
              </span>
            )}
          </div>
        </header>

        {/* ===== Description ===== */}
        {task.description && (
          <p className="mt-3 text-[9px] text-white/80">
            {task.description}
          </p>
        )}

        {/* ===== Approve / Reject Buttons ===== */}
        {task.status === "done" && (
          <div className="flex flex-wrap items-center gap-2 mt-4">
            <button className="px-3 py-1 text-xs md:text-xs rounded-md bg-green hover:bg-green text-white transition">
              Approve
            </button>
            <button className="px-3 py-1 text-xs md:text-xs rounded-md bg-Red hover:bg-Red text-white transition">
              Reject
            </button>
          </div>
        )}

        <hr className="my-4 border-white/10" />

        {/* ===== Footer ===== */}
        <footer className="flex flex-wrap items-center justify-between gap-2">
          <span className="text-xs md:text-xs text-white/70">
            {task.role ?? "—"}
          </span>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setOpenEdit(true)}
              className="text-Blue hover:text-Blue transition"
              title="Edit"
            >
              <Edit size={14} />
            </button>
            <button
              className="text-Red hover:text-Red transition"
              title="Delete"
            >
              <Trash2 size={14} />
            </button>
          </div>
        </footer>
      </article>

      {/* ===== Update Modal ===== */}
      <UpdateTaskModal
        isOpen={openEdit}
        onClose={() => setOpenEdit(false)}
        onUpdate={handleUpdate}
        initialData={initialData}
        assignees={assignees}
        statuses={statuses}
      />
    </>
  );
}
