"use client";
import { useEffect } from "react";
import type { AddUserForm } from "./AddUserModal";

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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0b1220]/95 p-4 md:p-8">
      <div
        className="p-1 rounded-2xl w-full max-w-3xl"
        style={{
          background:
            "linear-gradient(180deg, rgba(18,46,88,0.8) 0%, rgba(4,12,33,0.8) 100%)",
        }}
      >
        <div
          className="relative rounded-2xl border-2 border-dotted border-white"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.05) 0%, rgba(19,43,96,0.05) 100%)",
          }}
        >
          <div className="p-6 md:p-8 space-y-6">
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
              <div>
                <label className="block text-sm text-white mb-2">Status:</label>
                <div className={field}>{user.status}</div>
              </div>
              <div>
                <label className="block text-sm text-white mb-2">Permissions:</label>
                <div className={field}>
                  {user.permissions && user.permissions.length > 0
                    ? user.permissions.join(", ")
                    : "No Permissions"}
                </div>
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
