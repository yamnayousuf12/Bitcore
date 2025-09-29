"use client";
import { useEffect, useState } from "react";
import type { AddUserForm } from "./AddUserModal";
import TopBar from "../dashboard/TopBar";
import { ChevronDown } from "lucide-react";

interface EditUserModalProps {
  isOpen: boolean;
  onClose: () => void;
  onUpdate: (data: AddUserForm) => void;
  roles: string[];
  departments: string[];
  user: AddUserForm | null; // the user to edit
}

export default function EditUserModal({
  isOpen,
  onClose,
  onUpdate,
  roles,
  departments,
  user,
}: EditUserModalProps) {
  const [form, setForm] = useState<AddUserForm | null>(user);

  useEffect(() => {
    if (isOpen && user) setForm(user); // preload values
  }, [isOpen, user]);

  if (!isOpen || !form) return null;

  const set = <K extends keyof AddUserForm>(k: K, v: AddUserForm[K]) =>
    setForm((s) => (s ? { ...s, [k]: v } : s));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form) {
      onUpdate(form);
      onClose();
    }
  };

  const field =
    "w-full h-11 rounded-2xl bg-white/5 border border-white px-4 text-white placeholder:text-white/50 focus:outline-none";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 ">
      <div
        className="p-1 md:rounded-2xl w-screen md:w-full mx-auto max-w-4xl bg-[#0b1220] h-screen  md:h-auto lg:h-full xl:h-auto 2xl:h-auto">
          <div className="block md:hidden w-auto justify-center items-center ml-2">
            <TopBar
              heading=""
              onOpenMenu={() => {
                throw new Error("Function not implemented.");
              }}
            />
          </div>
        <div
          className="md:relative md:rounded-2xl md:border border-white/30 bg-gradient-to-b from-white/[0.08] to-white/[0.03] w-screen h-screen md:h-full  md:mt-0 mx-auto max-w-4xl md:w-full"
        >
          <form onSubmit={submit} className="p-6 md:p-8 md:space-y-6 space-y-4 ">
            <div className="flex items-center justify-between mt-[25%] md:mt-0">
              <h2 className="md:text-2xl font-medium md:text-white text-[#BAD4EF] ">Edit User</h2>
              <button
                type="button"
                onClick={onClose}
                className="rounded-lg px-2 py-1 text-white/80 hover:text-white"
              >
                ✕
              </button>
            </div>

           <hr className="hidden md:block border-white/10" />

            {/* grid fields same as AddUserModal */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm text-white mb-2">First Name:</label>
                <input
                  className={field}
                  value={form.firstName}
                  onChange={(e) => set("firstName", e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm text-white mb-2">Last Name:</label>
                <input
                  className={field}
                  value={form.lastName}
                  onChange={(e) => set("lastName", e.target.value)}
                />
              </div>
              <div className="relative">
  <label className="block text-sm text-white mb-2">Role:</label>

  <div className="relative">
    <select
      className={`${field} appearance-none pr-10`} // add padding-right for icon space
      value={form.role}
      onChange={(e) => set("role", e.target.value)}
    >
      {roles.map((r) => (
        <option key={r} value={r} className="bg-[#0f172a]">
          {r}
        </option>
      ))}
    </select>

    {/* Dropdown icon */}
    <ChevronDown
      className="absolute right-5 top-1/2 -translate-y-1/2 text-white pointer-events-none"
      size={16}
    />
  </div>
</div>
<div className="relative">
  <label className="block text-sm text-white mb-2">Department:</label>

  <div className="relative">
    <select
      className={`${field} appearance-none pr-10`} // adds spacing for the icon
      value={form.department}
      onChange={(e) => set("department", e.target.value)}
    >
      {departments.map((d) => (
        <option key={d} value={d} className="bg-[#0f172a]">
          {d}
        </option>
      ))}
    </select>

    {/* Dropdown Icon */}
    <ChevronDown
      className="absolute right-6 top-1/2 -translate-y-1/2 text-white pointer-events-none"
      size={16}
    />
  </div>
</div>

              {/* <div>
                <label className="block text-sm text-white mb-2">Department:</label>
                <select
                  className={field}
                  value={form.department}
                  onChange={(e) => set("department", e.target.value)}
                >
                  {departments.map((d) => (
                    <option key={d} value={d} className="bg-[#0f172a]">
                      {d}
                    </option>
                  ))}
                </select>
              </div> */}
            </div>

            {/* Status */}
            <div className="space-y-2">
              <span className="block text-sm text-white">Status</span>
              <div className="flex gap-6">
                {["Active", "Inactive"].map((s) => (
                  <label key={s} className="inline-flex items-center gap-2 text-white">
                    <input
                      type="radio"
                      checked={form.status === s}
                      onChange={() => set("status", s as "Active" | "Inactive")}
                      className="h-4 w-4 accent-Blue"
                    />
                    {s}
                  </label>
                ))}
              </div>
            </div>

            {/* actions */}
            <div className="flex justify-end gap-3 md:pt-2 pt-12">
              <button type="button" onClick={onClose} className="text-Blue">
                Cancel
              </button>
              <button
                type="submit"
                className="md:h-11 md:px-5 h-9 px-3 rounded-2xl bg-white text-Blue font-medium"
              >
                Update User
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
