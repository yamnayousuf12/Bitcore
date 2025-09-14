import { useState } from "react";
import { Task } from "../../lib/task"; // Make sure the Task type is well-defined
import UpdateTaskModal, { UpdateTaskForm } from "./UpdateTaskModal";

export default function TaskCard({ task }: { task: Task }) {
  const [openEdit, setOpenEdit] = useState(false);

  // Provide selectable options (or lift to parent and pass as props if you prefer)
  const assignees = ["Employee 01", "Employee 02", "Employee 03"];
  const statuses = ["Pending", "In Progress", "Completed"];

  // Safely map Task -> UpdateTaskForm
  const initialData: UpdateTaskForm = {
    title: task.title ?? "",
  assignee: assignees[0], // Default value since Task does not have assignee
  subtasks: "", // Default value, since Task does not have subtasks
  status: task.status ?? statuses[0],
  description: task.description ?? "",
  deadline: "", // Default value, since Task does not have deadline
  attachment: null, // Default value, since Task does not have attachment
  };

  const handleUpdate = (data: UpdateTaskForm) => {
    // TODO: wire to your API/state
    console.log("Updated task:", data);
  };

  return (
    <>
      <article className="rounded-xl border border-white/20 bg-[#0E1B2C]/80 p-4 shadow-md hover:bg-[#0E1B2C]/90 transition-colors w-[330px] md:w-52 md:-ml-3 -ml-6">
        {/* Top row: Avatar + Title/Date + Menu */}
        <header className="flex items-start justify-between">
          <div className="flex items-start gap-3">
            <div className="h-9 w-9 rounded-full bg-white/10 flex-shrink-0" />
            <div>
              <h4 className="font-semibold w-28 text-sm text-white flex-shrink-0">{task.title}</h4>
              <span className="text-xs text-Blue">{task.datetime ?? ""}</span>
            </div>
          </div>

          <button className="text-white/60 hover:text-white" aria-label="Task menu">
            ⋮
          </button>
        </header>

        {task.description && (
          <p className="mt-3 text-sm text-white/80 leading-relaxed">
            {task.description}
          </p>
        )}

        <hr className="my-3 border-white/10" />

        <footer className="flex items-center justify-between">
          <span className="text-sm italic text-white/70">{task.role ?? "—"}</span>

          <div className="flex items-center gap-3">
            <button
              className="text-Blue hover:text-Blue/55"
              title="Edit"
              onClick={() => setOpenEdit(true)}
            >
              ✎
            </button>
            <button className="text-Red hover:text-Red/20" title="Delete">
              🗑
            </button>
          </div>
        </footer>
      </article>

      {/* Update Task Modal */}
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
