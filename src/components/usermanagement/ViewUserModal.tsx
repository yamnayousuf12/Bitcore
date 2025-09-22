"use client";
import { useEffect } from "react";
import type { AddUserForm } from "./AddUserModal";
import TopBar from "../dashboard/TopBar";

interface ViewUserModalProps {
  isOpen: boolean;
  onClose: () => void;
  user: AddUserForm | null;
}

export default function ViewUserModal({ isOpen, onClose, user }: ViewUserModalProps) {
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  if (!isOpen || !user) return null;

  const field =
    "w-full h-11 rounded-2xl bg-white/5 border border-white px-4 text-white flex items-center";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
      <div
        className="p-1 md:rounded-2xl w-screen md:w-full mx-auto max-w-4xl bg-[#0b1220] h-screen mt-16  md:mt-0 md:h-full"
        
      >
         <div className="block md:hidden">
          <TopBar
            heading=""
            onOpenMenu={() => {
              throw new Error("Function not implemented.");
            }}
          />
        </div>
        <div
          className="md:relative md:rounded-2xl md:border-2 md:border-dotted border-white bg-gradient-to-b from-white/[0.08] to-white/[0.03] w-screen h-screen md:h-full  md:mt-0 mx-auto max-w-4xl md:w-full"
        >
          <div className="p-6 md:p-8 md:space-y-6 space-y-4">
            {/* header */}
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold text-white">View User</h2>
              <button
                type="button"
                onClick={onClose}
                className="rounded-lg px-2 py-1 text-white/80 hover:text-white"
              >
                ✕
              </button>
            </div>

            <hr className="border-white/10" />

            {/* grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm text-white mb-2">First Name:</label>
                <div className={field}>{user.firstName}</div>
              </div>
              <div>
                <label className="block text-sm text-white mb-2">Last Name:</label>
                <div className={field}>{user.lastName}</div>
              </div>
              <div>
                <label className="block text-sm text-white mb-2">Role:</label>
                <div className={field}>{user.role}</div>
              </div>
              <div>
                <label className="block text-sm text-white mb-2">Department:</label>
                <div className={field}>{user.department}</div>
              </div>
              </div>
              <div className="space-y-2">
              <span className="block text-sm text-white">Status</span>
              <div className="flex gap-6">
                {["Active", "Inactive"].map((s) => (
                  <label key={s} className="inline-flex items-center gap-2 text-white">
                    <input type="radio"checked={user.status === s}
                    readOnly
                     className="h-4 w-4 accent-Blue"/>
                     
                     {s}
                  </label>
                ))}
              </div>
            </div>


            {/* actions */}
            <div className="flex justify-end pt-2">
              <button
                onClick={onClose}
                className="h-11 px-5 rounded-2xl bg-white text-Blue font-medium"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
