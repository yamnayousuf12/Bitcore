// "use client";
// import { useEffect, useRef, useState } from "react";

// export interface UpdateTaskForm {
//   title: string;
//   assignee: string;
//   subtasks: string;
//   status: string;
//   description: string;
//   deadline: string;
//   attachment?: File | null;
// }

// interface Props {
//   isOpen: boolean;
//   onClose: () => void;
//   onUpdate: (data: UpdateTaskForm) => void;
//   initialData: UpdateTaskForm;
//   assignees: string[];
//   statuses?: string[];
// }

// export default function UpdateTaskModal({
//   isOpen,
//   onClose,
//   onUpdate,
//   initialData,
//   assignees,
//   statuses = ["Pending", "In Progress", "Completed"],
// }: Props) {
//   const [form, setForm] = useState<UpdateTaskForm>(initialData);
//   const cardRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     if (!isOpen) return;
//     setForm(initialData); // Reset form each open
//     const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
//     document.addEventListener("keydown", onKey);
//     const prev = document.body.style.overflow;
//     document.body.style.overflow = "hidden";
//     return () => {
//       document.removeEventListener("keydown", onKey);
//       document.body.style.overflow = prev;
//     };
//   }, [isOpen, initialData, onClose]);

//   if (!isOpen) return null;

//   const updateField = <K extends keyof UpdateTaskForm>(
//     key: K,
//     value: UpdateTaskForm[K]
//   ) => setForm((prev) => ({ ...prev, [key]: value }));

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     onUpdate(form);
//     onClose();
//   };

//   const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
//     if (e.target === e.currentTarget) onClose();
//   };

//   return (
//     <div
//       className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 p-4"
//       onMouseDown={handleBackdropClick}
//     >
//       <div
//         className="p-1 rounded-2xl w-full max-w-4xl"
//         style={{
//           background:
//             "linear-gradient(180deg, rgba(18, 46, 88, 0.8) 0%, rgba(4, 12, 33, 0.8) 100%)",
//         }}
//       >
//         <div
//           ref={cardRef}
//           className="relative w-full rounded-2xl border-2 border-dotted border-white"
//           style={{
//             background:
//               "linear-gradient(180deg, rgba(255,255,255,0.05) 0%, rgba(19,43,96,0.05) 100%)",
//           }}
//         >
//           <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-6">
//             <div className="flex items-center justify-between">
//               <h2 className="text-2xl font-semibold text-white">
//                 Update Task Details
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
//               <div>
//                 <label className="block text-sm text-white mb-2">Task Title:</label>
//                 <input
//                   className="w-full h-11 rounded-xl bg-white/5 border border-white px-3 text-white focus:outline-none"
//                   value={form.title}
//                   onChange={(e) => updateField("title", e.target.value)}
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm text-white mb-2">Assign To:</label>
//                 <select
//                   className="w-full h-11 rounded-xl bg-white/5 border border-white px-3 text-white"
//                   value={form.assignee}
//                   onChange={(e) => updateField("assignee", e.target.value)}
//                 >
//                   {assignees.map((a) => (
//                     <option key={a} value={a} className="bg-[#0f172a]">
//                       {a}
//                     </option>
//                   ))}
//                 </select>
//               </div>

//               <div>
//                 <label className="block text-sm text-white mb-2">Subtasks:</label>
//                 <input
//                   className="w-full h-11 rounded-xl bg-white/5 border border-white px-3 text-white"
//                   value={form.subtasks}
//                   onChange={(e) => updateField("subtasks", e.target.value)}
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm text-white mb-2">Status:</label>
//                 <select
//                   className="w-full h-11 rounded-xl bg-white/5 border border-white px-3 text-white"
//                   value={form.status}
//                   onChange={(e) => updateField("status", e.target.value)}
//                 >
//                   {statuses.map((s) => (
//                     <option key={s} value={s} className="bg-[#0f172a]">
//                       {s}
//                     </option>
//                   ))}
//                 </select>
//               </div>

//               <div className="md:col-span-2">
//                 <label className="block text-sm text-white mb-2">Description:</label>
//                 <textarea
//                   className="w-full h-28 rounded-xl bg-white/5 border border-white px-3 py-2 text-white resize-none"
//                   value={form.description}
//                   onChange={(e) => updateField("description", e.target.value)}
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm text-white mb-2">Deadline:</label>
//                 <input
//                   type="date"
//                   className="w-full h-11 rounded-xl bg-white/5 border border-white px-3 text-white"
//                   value={form.deadline}
//                   onChange={(e) => updateField("deadline", e.target.value)}
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm text-white mb-2">Attachments:</label>
//                 <div className="flex items-center gap-3">
//                   <label className="inline-flex items-center justify-center h-11 px-4 rounded-xl bg-white text-blue-600 font-medium cursor-pointer border border-white">
//                     Choose File
//                     <input
//                       type="file"
//                       className="hidden"
//                       onChange={(e) =>
//                         updateField("attachment", e.target.files?.[0] ?? null)
//                       }
//                     />
//                   </label>
//                   <span className="text-sm text-white/70 truncate">
//                     {form.attachment?.name ?? "No file chosen"}
//                   </span>
//                 </div>
//               </div>
//             </div>

//             <div className="flex items-center justify-end gap-3 pt-2">
//               <button
//                 type="button"
//                 onClick={onClose}
//                 className="text-blue-400 hover:text-blue-300"
//               >
//                 Cancel
//               </button>
//               <button
//                 type="submit"
//                 className="h-11 px-5 rounded-2xl bg-white hover:bg-gray-100 text-blue-500 font-medium"
//               >
//                 Update Task
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }





"use client";
import { useEffect, useRef, useState } from "react";

export interface UpdateTaskForm {
  title: string;
  assignee: string;
  subtasks: string;
  status: string;
  description: string;
  deadline: string;
  attachment?: File | null;
}

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onUpdate: (data: UpdateTaskForm) => void;
  initialData: UpdateTaskForm;
  assignees: string[];
  statuses?: string[];
}

export default function UpdateTaskModal({
  isOpen,
  onClose,
  onUpdate,
  initialData,
  assignees,
  statuses = ["Pending", "In Progress", "Completed"],
}: Props) {
  const [form, setForm] = useState<UpdateTaskForm>(initialData);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    setForm(initialData); // Reset form each open
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [isOpen, initialData, onClose]);

  if (!isOpen) return null;

  const updateField = <K extends keyof UpdateTaskForm>(
    key: K,
    value: UpdateTaskForm[K]
  ) => setForm((prev) => ({ ...prev, [key]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdate(form);
    onClose();
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 p-4" 
      onMouseDown={handleBackdropClick}
    >
      <div
        className="p-1 rounded-2xl w-full max-w-4xl"
        style={{
          background:
            "linear-gradient(180deg, rgba(18, 46, 88, 0.8) 0%, rgba(4, 12, 33, 0.8) 100%)",
        }}
      >
        <div
          ref={cardRef}
          className="relative w-full rounded-2xl border-2 border-dotted border-white"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.05) 0%, rgba(19,43,96,0.05) 100%)",
          }}
        >
          <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold text-white">
                Update Task Details
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm text-white mb-2">Task Title:</label>
                <input
                  className="w-full h-11 rounded-xl bg-white/5 border border-white px-3 text-white focus:outline-none"
                  value={form.title}
                  onChange={(e) => updateField("title", e.target.value)}
                  placeholder="Enter task title"
                  title="Task Title"
                />
              </div>

              <div>
                <label className="block text-sm text-white mb-2">Assign To:</label>
                <select
                  className="w-full h-11 rounded-xl bg-white/5 border border-white px-3 text-white"
                  value={form.assignee}
                  onChange={(e) => updateField("assignee", e.target.value)}
                  title="Assign To"
                >
                  {assignees.map((a) => (
                    <option key={a} value={a} className="bg-[#0f172a]">
                      {a}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm text-white mb-2">Subtasks:</label>
                <input
                  className="w-full h-11 rounded-xl bg-white/5 border border-white px-3 text-white"
                  value={form.subtasks}
                  onChange={(e) => updateField("subtasks", e.target.value)}
                  placeholder="Enter subtasks"
                  title="Subtasks"
                />
              </div>

              <div>
                <label className="block text-sm text-white mb-2">Status:</label>
                <select
                  className="w-full h-11 rounded-xl bg-white/5 border border-white px-3 text-white"
                  value={form.status}
                  onChange={(e) => updateField("status", e.target.value)}
                  title="Status"
                >
                  {statuses.map((s) => (
                    <option key={s} value={s} className="bg-[#0f172a]">
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm text-white mb-2">Description:</label>
                <textarea
                  className="w-full h-28 rounded-xl bg-white/5 border border-white px-3 py-2 text-white resize-none"
                  value={form.description}
                  onChange={(e) => updateField("description", e.target.value)}
                  title="Description"
                  placeholder="Enter task description"
                />
              </div>

              <div>
                <label className="block text-sm text-white mb-2">Deadline:</label>
                <input
                  type="date"
                  className="w-full h-11 rounded-xl bg-white/5 border border-white px-3 text-white"
                  value={form.deadline}
                  onChange={(e) => updateField("deadline", e.target.value)}
                  title="Deadline"
                  placeholder="Select deadline"
                />
              </div>

              <div>
                <label className="block text-sm text-white mb-2">Attachments:</label>
                <div className="flex items-center gap-3">
                  <label className="inline-flex items-center justify-center h-11 px-4 rounded-xl bg-white text-blue-600 font-medium cursor-pointer border border-white">
                    Choose File
                    <input
                      type="file"
                      className="hidden"
                      onChange={(e) =>
                        updateField("attachment", e.target.files?.[0] ?? null)
                      }
                    />
                  </label>
                  <span className="text-sm text-white/70 truncate">
                    {form.attachment?.name ?? "No file chosen"}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={onClose}
                className="text-blue-400 hover:text-blue-300"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="h-11 px-5 rounded-2xl bg-white hover:bg-gray-100 text-blue-500 font-medium"
              >
                Update Task
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
