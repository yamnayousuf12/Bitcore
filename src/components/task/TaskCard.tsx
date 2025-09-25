// import { useState } from "react";
// import { Task } from "../../lib/task"; // Make sure the Task type is well-defined
// import UpdateTaskModal, { UpdateTaskForm } from "./UpdateTaskModal";

// export default function TaskCard({ task }: { task: Task }) {
//   const [openEdit, setOpenEdit] = useState(false);

//   // Provide selectable options (or lift to parent and pass as props if you prefer)
//   const assignees = ["Employee 01", "Employee 02", "Employee 03"];
//   const statuses = ["Pending", "In Progress", "Completed"];

//   // Safely map Task -> UpdateTaskForm
//   const initialData: UpdateTaskForm = {
//     title: task.title ?? "",
//   assignee: assignees[0], // Default value since Task does not have assignee
//   subtasks: "", // Default value, since Task does not have subtasks
//   status: task.status ?? statuses[0],
//   description: task.description ?? "",
//   deadline: "", // Default value, since Task does not have deadline
//   attachment: null, // Default value, since Task does not have attachment
//   };

//   const handleUpdate = (data: UpdateTaskForm) => {
//     // TODO: wire to your API/state
//     console.log("Updated task:", data);
//   };

//   return (
//     <>
//       <article className="rounded-xl border border-white/20 bg-[#0E1B2C]/80 p-4 shadow-md hover:bg-[#0E1B2C]/90 transition-colors w-[330px] md:w-52 md:-ml-3 -ml-6">
//         {/* Top row: Avatar + Title/Date + Menu */}
//         <header className="flex items-start justify-between">
//           <div className="flex items-start gap-3">
//             <div className="h-9 w-9 rounded-full bg-white/10 flex-shrink-0" />
//             <div>
//               <h4 className="font-semibold w-28 text-sm text-white flex-shrink-0">{task.title}</h4>
//               <span className="text-xs text-Blue">{task.datetime ?? ""}</span>
//             </div>
//           </div>

//           <button className="text-white/60 hover:text-white" aria-label="Task menu">
//             ⋮
//           </button>
//         </header>

//         {task.description && (
//           <p className="mt-3 text-sm text-white/80 leading-relaxed">
//             {task.description}
//           </p>
//         )}

//         <hr className="my-3 border-white/10" />

//         <footer className="flex items-center justify-between">
//           <span className="text-sm italic text-white/70">{task.role ?? "—"}</span>

//           <div className="flex items-center gap-3">
//             <button
//               className="text-Blue hover:text-Blue/55"
//               title="Edit"
//               onClick={() => setOpenEdit(true)}
//             >
//               ✎
//             </button>
//             <button className="text-Red hover:text-Red/20" title="Delete">
//               🗑
//             </button>
//           </div>
//         </footer>
//       </article>

//       {/* Update Task Modal */}
//       <UpdateTaskModal
//         isOpen={openEdit}
//         onClose={() => setOpenEdit(false)}
//         onUpdate={handleUpdate}
//         initialData={initialData}
//         assignees={assignees}
//         statuses={statuses}
//       />
//     </>
//   );
// }

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

  // Badge color based on priority (status or a new field if added)
  const priorityColors: Record<string, string> = {
    Low: "bg-Blue/20 text-Blue",
    Medium: "bg-yellow/20 text-yellow",
    High: "bg-Red/20 text-Red",
  };

  return (
    <>
      <article className="relative rounded-xl border border-white/10 bg-[#0e1b2c]/80 p-4 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 w-[330px] md:w-[215px] md:-ml-3 -ml-6">
        <header className="flex items-start justify-between">
  <div className="flex items-start gap-1">
    <div className="h-8 w-8 rounded-full bg-white/10 flex-shrink-0 -ml-3" />
    <div>
      <h4 className="font-medium text-white text-sm leading-normal whitespace-nowrap ">
        {task.title}
      </h4>
      <p className="text-[10px] text-Blue mt-1 ">{task.datetime ?? ""}</p>
    </div>
  </div>

  <div className="flex flex-col items-end gap-2">
    {/* ✅ Priority Badge - now in top right */}
    {task.priority && (
      <span
        className={`px-2 py-0.5 rounded-full text-[9px] font-medium mt-6 -ml-3 ${priorityColors[task.priority]}`}
      >
        {task.priority}
      </span>
    )}

    {/* Dropdown Menu Button */}
    <button
      onClick={() => setShowMenu(!showMenu)}
      className="p-1 text-white/70 hover:text-white transition -mt-12"
    >
      <MoreVertical size={14} />
    </button>

    {showMenu && (
      <div className="absolute right-0 mt-2 w-32 rounded-lg bg-[#13233a] shadow-lg ring-1 ring-white/10 z-10">
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
</header>

        {/* Description */}
        {task.description && (
          <p className="mt-3 text-xs text-white/80 leading-relaxed whitespace-normal">
            {task.description}
          </p>
        )}
        {/* Approve/Reject buttons (for completed tasks) */}
 {task.status === "done" && (
          <div className="flex items-center justify-start gap-2 mt-4">
            <button className="px-3 py-1 text-sm rounded-md bg-green text-white hover:bg-green transition">
              Approve
            </button>
            <button className="px-3 py-1 text-sm rounded-md bg-Red text-white hover:bg-Red transition">
              Reject
            </button>
          </div>
        )}
        <hr className="my-4 border-white/10" />

        {/* Footer */}
        <footer className="flex items-center justify-between">
          <span className="text-sm italic text-white/70">
            {task.role ?? "—"}
          </span>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setOpenEdit(true)}
              className="text-Blue hover:text-Blue transition"
              title="Edit"
            >
              <Edit size={18} />
            </button>
            <button
              className="text-Red hover:text-Red transition"
              title="Delete"
            >
              <Trash2 size={18} />
            </button>
          </div>
        </footer>

        
      </article>

      {/* Edit Modal */}
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
