"use client";
import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ChevronDown } from "lucide-react";
import TopBar from "../dashboard/TopBar";

export interface AddTaskForm {
  title: string;
  assignee: string;
  subtasks: string; // comma-separated
  status: string;
  description: string;
  deadline: string; // yyyy-mm-dd
  attachment?: File | null;
}

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onCreate: (data: AddTaskForm) => void;
  assignees: string[];
  statuses?: string[];
}

export default function AddTaskModal({
  isOpen,
  onClose,
  onCreate,
  assignees,
  statuses = ["Pending", "In Progress", "Delayed", "Completed"],
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

  /** Shared form */
  const TaskForm = () => (
    <form onSubmit={submit} className="p-4 sm:p-6 space-y-4 border-white/30 border-t ">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 sm:gap-3 ">
        {/* Title */}
        <div>
          <label className="block md:text-sm text-xs text-white mb-2">
            Task Title:
          </label>
          <input
            className="w-full h-11 rounded-xl bg-white/5 border border-white px-3 text-white placeholder:text-white/40 focus:outline-none focus:border-white"
            placeholder="Add Task"
            value={form.title}
            onChange={(e) => update("title", e.target.value)}
            required
          />
        </div>

       <div className="relative">
  <label className="block md:text-sm text-xs text-white mb-2">
    Assign To:
  </label>

  <div className="relative">
    <select
      className="w-full h-11 rounded-xl bg-white/5 border border-white px-3 text-white focus:outline-none focus:border-white appearance-none pr-10"
      value={form.assignee}
      onChange={(e) => update("assignee", e.target.value)}
    >
      {assignees.map((a) => (
        <option key={a} value={a} className="bg-[#0f172a]">
          {a}
        </option>
      ))}
    </select>

    {/* Dropdown Icon */}
    <ChevronDown
      size={16}
      className="absolute right-3 top-1/2 -translate-y-1/2 text-white pointer-events-none"
    />
  </div>
</div>

        {/* Subtasks */}
        <div>
          <label className="block md:text-sm text-xs text-white mb-2">
            Subtasks:
          </label>
          <input
            className="w-full h-11 rounded-xl bg-white/5 border border-white px-3 text-white placeholder:text-white/40 focus:outline-none focus:border-white"
            placeholder="Enter subtasks separated by commas"
            value={form.subtasks}
            onChange={(e) => update("subtasks", e.target.value)}
          />
        </div>

        {/* Status */}
<div className="relative">
  <label className="block md:text-sm text-xs text-white mb-2">
    Status:
  </label>

  <div className="relative">
    <select
      className="w-full h-11 rounded-xl bg-white/5 border border-white px-3 text-white 
                 focus:outline-none focus:border-white appearance-none pr-10"
      value={form.status}
      onChange={(e) => update("status", e.target.value)}
    >
      {statuses.map((s) => (
        <option key={s} value={s} className="bg-[#0f172a]">
          {s}
        </option>
      ))}
    </select>

    {/* Dropdown Icon */}
    <ChevronDown
      size={16}
      className="absolute right-3 top-1/2 -translate-y-1/2 text-white pointer-events-none"
    />
  </div>
</div>
        {/* Description */}
        <div className="lg:col-span-2">
          <label className="block md:text-sm text-xs text-white mb-2">
            Description:
          </label>
          <textarea
            className="w-full h-28 rounded-xl bg-white/5 border border-white px-3 text-white placeholder:text-white/40 focus:outline-none focus:border-white"
            placeholder="Write here..."
            value={form.description}
            onChange={(e) => update("description", e.target.value)}
          />
        </div>

        {/* Deadline */}
        <div>
          <label className="block md:text-sm text-xs text-white mb-2">
            Deadline:
          </label>
          <input
            type="date"
            className="w-full h-11 rounded-xl bg-white/5 border border-white px-3 text-white focus:outline-none focus:border-white"
            value={form.deadline}
            onChange={(e) => update("deadline", e.target.value)}
          />
        </div>

        {/* Attachment */}
        <div>
          <label className="block md:text-sm text-xs text-white mb-2">
            Attachments:
          </label>
          <div className="flex items-center gap-3">
            <label className="inline-flex items-center justify-center h-11 px-4 rounded-xl bg-white text-Blue font-medium cursor-pointer border border-white/20">
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
          className="h-11 px-5 rounded-2xl bg-Blue  text-white font-medium border border-white/10"
        >
          Create Task
        </button>
      </div>
    </form>
  );

  return (
    <>
      {/* ✅ Mobile full screen */}
      <div className="block sm:hidden fixed inset-0 z-50 bg-[#0b1220] overflow-y-auto w-auto ">
        <div className="block md:hidden w-auto justify-center items-center ml-2">
          <TopBar
            heading=""
            onOpenMenu={() => {
              throw new Error("Function not implemented.");
            }}
          />
        </div>
        <div className="flex items-center gap-3 p-4 border-b border-white/10 mt-[20%] md:mt-0">
          {/* <button onClick={onClose} className="text-white">
            <ArrowLeft size={22} />
          </button> */}
          <h2 className="text-lg font-medium text-white">Add Task</h2>
        </div>
        <TaskForm />
      </div>

      {/* ✅ Desktop modal */}
      <div
        className="hidden sm:flex fixed left-0 right-0 bottom-0 top-[5%] lg:inset-0 z-50 items-center justify-center px-4 sm:px-6 py-6 sm:py-12 bg-black/50"
      >
        <div
          ref={cardRef}
          className="relative w-full max-w-2xl rounded-2xl border border-white bg-[#0f1b2f]"
        >
          <div className="flex items-center justify-between px-6 pt-4 ">
            <h2 className="text-lg md:text-xl font-medium text-white">
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
          {/* <hr className="border-white/30 2xl:w-[98%] ml-5" /> */}
          <TaskForm />
        </div>
      </div>
    </>
  );
}
