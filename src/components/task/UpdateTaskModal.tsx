"use client";
import { useEffect, useRef, useState } from "react";
import TopBar from "../dashboard/TopBar";

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
    setForm(initialData); // Reset form when reopened
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
    <>
      {/* Mobile: full-screen */}
      <div className="block sm:hidden fixed inset-0 z-50 bg-[#0b1220] overflow-y-auto">
        <div className="block md:hidden w-auto justify-center items-center ml-2">
          <TopBar
            heading=""
            onOpenMenu={() => {
              throw new Error("Function not implemented.");
            }}
          />
        </div>
        <div className="flex items-center justify-between p-4 border-b border-white/10 mt-[20%] md:mt-0">
          <h2 className="text-lg font-semibold text-white">
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

        <form onSubmit={handleSubmit} className="p-4 space-y-4">
          {/* Title */}
          <div>
            <label className="block text-sm text-white mb-2">Task Title:</label>
            <input
              className="w-full h-11 rounded-xl bg-white/5 border border-white px-3 text-white focus:outline-none"
              value={form.title}
              onChange={(e) => updateField("title", e.target.value)}
              placeholder="Enter task title"
              required
            />
          </div>

          {/* Assignee */}
          <div>
            <label className="block text-sm text-white mb-2">Assign To:</label>
            <select
              className="w-full h-11 rounded-xl bg-white/5 border border-white px-3 text-white"
              value={form.assignee}
              onChange={(e) => updateField("assignee", e.target.value)}
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
            <label className="block text-sm text-white mb-2">Subtasks:</label>
            <input
              className="w-full h-11 rounded-xl bg-white/5 border border-white px-3 text-white"
              value={form.subtasks}
              onChange={(e) => updateField("subtasks", e.target.value)}
              placeholder="Enter subtasks"
            />
          </div>

          {/* Status */}
          <div>
            <label className="block text-sm text-white mb-2">Status:</label>
            <select
              className="w-full h-11 rounded-xl bg-white/5 border border-white px-3 text-white"
              value={form.status}
              onChange={(e) => updateField("status", e.target.value)}
            >
              {statuses.map((s) => (
                <option key={s} value={s} className="bg-[#0f172a]">
                  {s}
                </option>
              ))}
            </select>
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm text-white mb-2">Description:</label>
            <textarea
              className="w-full h-28 rounded-xl bg-white/5 border border-white px-3 py-2 text-white resize-none"
              value={form.description}
              onChange={(e) => updateField("description", e.target.value)}
              placeholder="Enter task description"
            />
          </div>

          {/* Deadline */}
          <div>
            <label className="block text-sm text-white mb-2">Deadline:</label>
            <input
              type="date"
              className="w-full h-11 rounded-xl bg-white/5 border border-white px-3 text-white"
              value={form.deadline}
              onChange={(e) => updateField("deadline", e.target.value)}
            />
          </div>

          {/* Attachment */}
          <div>
            <label className="block text-sm text-white mb-2">Attachments:</label>
            <div className="flex items-center gap-3">
              <label className="inline-flex items-center justify-center h-11 px-4 rounded-xl bg-white text-Blue font-medium cursor-pointer border border-white">
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

          {/* Actions */}
          <div className="flex items-center justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="text-Blue hover:text-Blue"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="h-11 px-5 rounded-2xl bg-Blue hover:bg-Blue/55 text-white font-medium"
            >
              Update Task
            </button>
          </div>
        </form>
      </div>

      {/* Desktop: modal */}
      <div
        className="hidden sm:flex fixed left-0 right-0 bottom-0 top-[7%] lg:inset-0 z-50 items-center justify-center px-4 sm:px-6 py-6 sm:py-12 bg-black/50"
        onMouseDown={handleBackdropClick}
      >
        <div
          className="p-1 rounded-2xl w-full max-w-4xl bg-darkBlue "
         
        >
          <div
            ref={cardRef}
            className="relative w-full max-w-5xl rounded-2xl border-2 border-dotted border-white bg-gradient-to-b from-white/[0.09] to-white/[0.06] "
           
          >
            <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-3 ">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-medium text-white -mt-3">
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

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {/* Title */}
                <div>
                  <label className="block text-sm text-white mb-2">
                    Task Title:
                  </label>
                  <input
                    className="w-full h-11 rounded-xl bg-white/5 border border-white px-3 text-white"
                    value={form.title}
                    onChange={(e) => updateField("title", e.target.value)}
                  />
                </div>

                {/* Assignee */}
                <div>
                  <label className="block text-sm text-white mb-2">
                    Assign To:
                  </label>
                  <select
                    className="w-full h-11 rounded-xl bg-white/5 border border-white px-3 text-white"
                    value={form.assignee}
                    onChange={(e) => updateField("assignee", e.target.value)}
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
                  <label className="block text-sm text-white mb-2">
                    Subtasks:
                  </label>
                  <input
                    className="w-full h-11 rounded-xl bg-white/5 border border-white px-3 text-white"
                    value={form.subtasks}
                    onChange={(e) => updateField("subtasks", e.target.value)}
                  />
                </div>

                {/* Status */}
                <div>
                  <label className="block text-sm text-white mb-2">
                    Status:
                  </label>
                  <select
                    className="w-full h-11 rounded-xl bg-white/5 border border-white px-3 text-white"
                    value={form.status}
                    onChange={(e) => updateField("status", e.target.value)}
                  >
                    {statuses.map((s) => (
                      <option key={s} value={s} className="bg-[#0f172a]">
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Description */}
                <div className="md:col-span-2">
                  <label className="block text-sm text-white mb-2">
                    Description:
                  </label>
                  <textarea
                    className="w-full h-28 rounded-xl bg-white/5 border border-white px-3 py-2 text-white resize-none"
                    value={form.description}
                    onChange={(e) => updateField("description", e.target.value)}
                  />
                </div>

                {/* Deadline */}
                <div>
                  <label className="block text-sm text-white mb-2">
                    Deadline:
                  </label>
                  <input
                    type="date"
                    className="w-full h-11 rounded-xl bg-white/5 border border-white px-3 text-white"
                    value={form.deadline}
                    onChange={(e) => updateField("deadline", e.target.value)}
                  />
                </div>

                {/* Attachment */}
                <div>
                  <label className="block text-sm text-white mb-2">
                    Attachments:
                  </label>
                  <div className="flex items-center gap-3">
                    <label className="inline-flex items-center justify-center h-11 px-4 rounded-xl bg-white text-Blue font-medium cursor-pointer border border-white">
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

              {/* Actions */}
              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="text-Blue hover:text-Blue"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="h-11 px-5 rounded-2xl bg-Blue hover:bg-Blue/55 text-white font-medium"
                >
                  Update Task
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
