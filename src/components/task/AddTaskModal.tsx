// // components/AddTaskModal.tsx
// "use client";
// import { useEffect, useRef, useState } from "react";

// export interface AddTaskForm {
//   title: string;
//   assignee: string;
//   subtasks: string;       // comma-separated
//   status: string;
//   description: string;
//   deadline: string;       // yyyy-mm-dd
//   attachment?: File | null;
// }

// interface Props {
//   isOpen: boolean;
//   onClose: () => void;
//   onCreate: (data: AddTaskForm) => void;
//   assignees: string[];                     // e.g. ["Employee 01","Employee 02"]
//   statuses?: string[];                     // e.g. ["Pending","Active","Pause","Done"]
// }

// export default function AddTaskModal({
//   isOpen,
//   onClose,
//   onCreate,
//   assignees,
//   statuses = ["Pending", "Active", "Pause", "Done"],
// }: Props) {
//   const [form, setForm] = useState<AddTaskForm>({
//     title: "",
//     assignee: assignees[0] ?? "",
//     subtasks: "",
//     status: statuses[0] ?? "Pending",
//     description: "",
//     deadline: "",
//     attachment: null,
//   });

//   const cardRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     if (!isOpen) return;
//     const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
//     document.addEventListener("keydown", onKey);
//     const prev = document.body.style.overflow;
//     document.body.style.overflow = "hidden";
//     return () => {
//       document.removeEventListener("keydown", onKey);
//       document.body.style.overflow = prev;
//     };
//   }, [isOpen, onClose]);

//   if (!isOpen) return null;

//   const update = <K extends keyof AddTaskForm>(k: K, v: AddTaskForm[K]) =>
//     setForm((s) => ({ ...s, [k]: v }));

//   const submit = (e: React.FormEvent) => {
//     e.preventDefault();
//     onCreate(form);
//     onClose();
//   };

//   const backdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
//     if (e.target === e.currentTarget) onClose();
//   };

//   return (
//     <div
//       className="fixed top-1/2 left-1/2 z-50 flex items-center justify-center 
//              -translate-x-1/2 -translate-y-1/2 bg-black rounded-xl w-[800px] max-w-full "
//       onMouseDown={backdropClick}
//       role="dialog"
//       aria-modal="true"
//       aria-labelledby="add-task-title"
//     >
//       {/* middle gradient frame */}
//       <div
//        className="p-1 rounded-2xl w-full max-w-5xl"
//         style={{
//           background:
//             "linear-gradient(180deg, rgba(18, 46, 88, 0.8) 0%, rgba(4, 12, 33, 0.8) 100%)",
//         }}
//       >
//         {/* card */}
//         <div
//           ref={cardRef}
//           className="relative w-full max-w-5xl rounded-2xl border-2 border-dotted border-white"
//           style={{
//             background:
//               "linear-gradient(180deg, rgba(255,255,255,0.05) 0%, rgba(19,43,96,0.05) 100%)",
//           }}
//         >
//           <form onSubmit={submit} className="p-6 md:p-8 space-y-6">
//             <div className="flex items-center justify-between">
//               <h2 id="add-task-title" className="text-2xl font-semibold text-white">
//                 Add Task
//               </h2>
//               <button
//                 type="button"
//                 onClick={onClose}
//                 aria-label="Close"
//                 className="rounded-lg px-2 py-1 text-white/80 hover:text-white"
//               >
//                 ✕
//               </button>
//             </div>

//             <hr className="border-white/10" />

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
//               {/* Title */}
//               <div>
//                 <label className="block text-sm text-white mb-2">Task Title:</label>
//                 <input
//                    className="w-full h-11 rounded-xl bg-white/5 border border-white px-3 
//              text-white placeholder:text-white/40 
//              focus:outline-none focus:border-white"
//                   placeholder="Add Task"
//                   value={form.title}
//                   onChange={(e) => update("title", e.target.value)}
//                   required
//                 />
//               </div>

//               {/* Assignee */}
//               <div>
//                 <label className="block text-sm text-white mb-2">Assign To:</label>
//                 <select
//                  className="w-full h-11 rounded-xl bg-white/5 border border-white px-3 
//              text-white placeholder:text-white/40 
//              focus:outline-none focus:border-white"
//                   value={form.assignee}
//                   onChange={(e) => update("assignee", e.target.value)}
//                 >
//                   {assignees.map((a) => (
//                     <option key={a} value={a} className="bg-[#0f172a]">
//                       {a}
//                     </option>
//                   ))}
//                 </select>
//               </div>

//               {/* Subtasks */}
//               <div>
//                 <label className="block text-sm text-white mb-2">Subtasks:</label>
//                 <input
//                  className="w-full h-11 rounded-xl bg-white/5 border border-white px-3 
//              text-white placeholder:text-white/40 
//              focus:outline-none focus:border-white"
//                   placeholder="Enter subtasks separated by commas"
//                   value={form.subtasks}
//                   onChange={(e) => update("subtasks", e.target.value)}
//                 />
//               </div>

//               {/* Status */}
//               <div>
//                 <label className="block text-sm text-white mb-2">Status:</label>
//                 <select
//                   className="w-full h-11 rounded-xl bg-white/5 border border-white px-3 
//              text-white placeholder:text-white/40 
//              focus:outline-none focus:border-white"
//                   value={form.status}
//                   onChange={(e) => update("status", e.target.value)}
//                 >
//                   {statuses.map((s) => (
//                     <option key={s} value={s} className="bg-[#0f172a]">
//                       {s}
//                     </option>
//                   ))}
//                 </select>
//               </div>

//               {/* Description */}
//               <div className="md:col-span-2">
//                 <label className="block text-sm text-white mb-2">Description:</label>
//                 <textarea
//                   className="w-full h-28 rounded-xl bg-white/5 border border-white px-3 
//              text-white placeholder:text-white/40 
//              focus:outline-none focus:border-white"
//                   placeholder="Write here..."
//                   value={form.description}
//                   onChange={(e) => update("description", e.target.value)}
//                 />
//               </div>

//               {/* Deadline */}
//               <div>
//                 <label className="block text-sm text-white mb-2">Deadline:</label>
//                 <input
//                   type="date"
//                  className="w-full h-11 rounded-xl bg-white/5 border border-white px-3 
//              text-white placeholder:text-white/40 
//              focus:outline-none focus:border-white"
//                   value={form.deadline}
//                   onChange={(e) => update("deadline", e.target.value)}
//                 />
//               </div>

//               {/* Attachment */}
//               <div>
//                 <label className="block text-sm text-white mb-2">Attachments:</label>
//                 <div className="flex items-center gap-3">
//                   <label className="inline-flex items-center justify-center h-11 px-4 rounded-xl bg-white text-Blue font-medium cursor-pointer border border-white/20 hover:bg-gray/20">
//                     Choose File
//                     <input
//                       type="file"
//                       className="hidden"
//                       onChange={(e) => update("attachment", e.target.files?.[0] ?? null)}
//                     />
//                   </label>
//                   <span className="text-sm text-white/70 truncate">
//                     {form.attachment?.name ?? "No file chosen"}
//                   </span>
//                 </div>
//               </div>
//             </div>

//             {/* Actions */}
//             <div className="flex items-center justify-end gap-3 pt-2">
//               <button
//                 type="button"
//                 onClick={onClose}
//                 className="text-Blue hover:text-Blue/55"
//               >
//                 Cancel
//               </button>
//               <button
//                 type="submit"
//                 className="h-11 px-5 rounded-2xl bg-Blue hover:bg-Blue/55 text-white font-medium border border-white/10"
//               >
//                 Create Task
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }



// components/AddTaskModal.tsx
"use client";
import { useEffect, useRef, useState } from "react";
import TopBar from "../dashboard/TopBar";

export interface AddTaskForm {
  title: string;
  assignee: string;
  subtasks: string;       // comma-separated
  status: string;
  description: string;
  deadline: string;       // yyyy-mm-dd
  attachment?: File | null;
}

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onCreate: (data: AddTaskForm) => void;
  assignees: string[];                     // e.g. ["Employee 01","Employee 02"]
  statuses?: string[];                     // e.g. ["Pending","Active","Pause","Done"]
}

export default function AddTaskModal({
  isOpen,
  onClose,
  onCreate,
  assignees,
  statuses = ["Pending", "Active", "Pause", "Done"],
}: Props) {
  const [form, setForm] = useState<AddTaskForm>({
    title: "",
    assignee: assignees[0] ?? "",
    subtasks: "",
    status: statuses[0] ?? "Pending",
    description: "",
    deadline: "",
    attachment: null,
  });

  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const update = <K extends keyof AddTaskForm>(k: K, v: AddTaskForm[K]) =>
    setForm((s) => ({ ...s, [k]: v }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    onCreate(form);
    onClose();
  };

  const backdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-4 sm:px-6"
      onMouseDown={backdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="add-task-title"
    >
      <div className="block md:hidden w-auto justify-center items-center ml-2">
        <TopBar
          heading=""
          onOpenMenu={() => {
            throw new Error("Function not implemented.");
          }}
        />
      </div>
      {/* middle gradient frame */}
      <div
        className="p-1 rounded-2xl w-full max-w-[95%] sm:max-w-lg md:max-w-2xl lg:max-w-3xl xl:max-w-4xl"
        style={{
          background:
            "linear-gradient(180deg, rgba(18, 46, 88, 0.8) 0%, rgba(4, 12, 33, 0.8) 100%)",
        }}
      >
        {/* card */}
        <div
          ref={cardRef}
          className="relative w-full rounded-2xl border-2 border-dotted border-white"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.05) 0%, rgba(19,43,96,0.05) 100%)",
          }}
        >
          <form onSubmit={submit} className="p-2 sm:p-6 md:p-5 md:space-y-2 space-y-1">
            <div className="flex items-center justify-between">
              <h2
                id="add-task-title"
                className="text-lg sm:text-sm md:text-xl font-medium text-white"
              >
                Add Task
              </h2>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close"
                className="rounded-lg px-2 py-1 text-white/80 hover:text-white"
              >
                ✕
              </button>
            </div>

            <hr className="border-white/10" />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 sm:gap-3">
              {/* Title */}
              <div>
                <label className="block md:text-sm text-xs text-white mb-2">Task Title:</label>
                <input
                  className="w-full h-11 rounded-xl bg-white/5 border border-white px-3 
                  text-white placeholder:text-white/40 
                  focus:outline-none focus:border-white"
                  placeholder="Add Task"
                  value={form.title}
                  onChange={(e) => update("title", e.target.value)}
                  required
                />
              </div>

              {/* Assignee */}
              <div>
                <label className="block md:text-sm text-xs text-white mb-2">Assign To:</label>
                <select
                  className="w-full h-11 rounded-xl bg-white/5 border border-white px-3 
                  text-white placeholder:text-white/40 
                  focus:outline-none focus:border-white"
                  value={form.assignee}
                  onChange={(e) => update("assignee", e.target.value)}
                >
                  {assignees.map((a) => (
                    <option key={a} value={a} className="bg-[#0f172a]">
                      {a}
                    </option>
                  ))}
                </select>
              </div>

              {/* Subtasks */}
              <div>
                <label className="block md:text-sm text-xs text-white mb-2">Subtasks:</label>
                <input
                  className="w-full h-11 rounded-xl bg-white/5 border border-white px-3 
                  text-white placeholder:text-white/40 
                  focus:outline-none focus:border-white"
                  placeholder="Enter subtasks separated by commas"
                  value={form.subtasks}
                  onChange={(e) => update("subtasks", e.target.value)}
                />
              </div>

              {/* Status */}
              <div>
                <label className="block md:text-sm text-xs text-white mb-2">Status:</label>
                <select
                  className="w-full h-11 rounded-xl bg-white/5 border border-white px-3 
                  text-white placeholder:text-white/40 
                  focus:outline-none focus:border-white"
                  value={form.status}
                  onChange={(e) => update("status", e.target.value)}
                >
                  {statuses.map((s) => (
                    <option key={s} value={s} className="bg-[#0f172a]">
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              {/* Description */}
              <div className="lg:col-span-2">
                <label className="block md:text-sm text-xs text-white mb-2">Description:</label>
                <textarea
                  className="w-full h-28 rounded-xl bg-white/5 border border-white px-3 
                  text-white placeholder:text-white/40 
                  focus:outline-none focus:border-white"
                  placeholder="Write here..."
                  value={form.description}
                  onChange={(e) => update("description", e.target.value)}
                />
              </div>

              {/* Deadline */}
              <div>
                <label className="block md:text-sm text-xs text-white mb-2">Deadline:</label>
                <input
                  type="date"
                  className="w-full h-11 rounded-xl bg-white/5 border border-white px-3 
                  text-white placeholder:text-white/40 
                  focus:outline-none focus:border-white"
                  value={form.deadline}
                  onChange={(e) => update("deadline", e.target.value)}
                />
              </div>

              {/* Attachment */}
              <div>
                <label className="block md:text-sm text-xs text-white mb-2">Attachments:</label>
                <div className="flex items-center gap-3">
                  <label className="inline-flex items-center justify-center h-11 px-4 rounded-xl bg-white text-Blue font-medium cursor-pointer border border-white/20 hover:bg-gray/20">
                    Choose File
                    <input
                      type="file"
                      className="hidden"
                      onChange={(e) =>
                        update("attachment", e.target.files?.[0] ?? null)
                      }
                    />
                  </label>
                  <span className="text-sm text-white/70 truncate">
                    {form.attachment?.name ?? "No file chosen"}
                  </span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={onClose}
                className="text-Blue hover:text-Blue/55"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="h-11 px-5 rounded-2xl bg-Blue hover:bg-Blue/55 text-white font-medium border border-white/10"
              >
                Create Task
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
