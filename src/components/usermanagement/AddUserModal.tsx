// "use client";
// import { useEffect, useState } from "react";

// export interface AddUserForm {
//   firstName: string;
//   lastName: string;
//   role: string;
//   department: string;
//   status: "Active" | "Inactive";
//   permissions: string[]; // e.g. ["User Management","Reporting"]
// }

// interface AddUserModalProps {
//   isOpen: boolean;
//   onClose: () => void;
//   onSave: (data: AddUserForm) => void;
//   roles: string[];
//   departments: string[];
// }

// const ALL_PERMISSIONS = [
//   { key: "User Management", desc: "Create, edit and manage users" },
//   { key: "Task Management", desc: "Configure system task" },
//   { key: "System Settings", desc: "Configure system parameters" },
//   { key: "Leave Approval", desc: "Approve/reject leave requests" },
//   { key: "Performance Review", desc: "Conduct employee evaluations" },
//   { key: "Reporting", desc: "Access system reports" },
// ];

// export default function AddUserModal({
//   isOpen,
//   onClose,
//   onSave,
//   roles,
//   departments,
// }: AddUserModalProps) {
//   const [form, setForm] = useState<AddUserForm>({
//     firstName: "",
//     lastName: "",
//     role: "",
//     department: "",
//     status: "Active",
//     permissions: ["Reporting"], // example pre-checked like screenshot
//   });

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

//   const set = <K extends keyof AddUserForm>(k: K, v: AddUserForm[K]) =>
//     setForm((s) => ({ ...s, [k]: v }));

//   const togglePermission = (p: string) =>
//     setForm((s) => {
//       const has = s.permissions.includes(p);
//       return { ...s, permissions: has ? s.permissions.filter(x => x !== p) : [...s.permissions, p] };
//     });

//   const submit = (e: React.FormEvent) => {
//     e.preventDefault();
//     onSave(form);
//     onClose();
//   };

//   const field =
//     "w-full h-11 rounded-2xl bg-white/5 border border-white px-4 text-white placeholder:text-white/50 focus:outline-none";

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0b1220] p-4 md:p-8">
//       {/* frame */}
//       <div
//         className="p-1 rounded-2xl w-full max-w-4xl"
//         style={{
//           background:
//             "linear-gradient(180deg, rgba(18,46,88,0.8) 0%, rgba(4,12,33,0.8) 100%)",
//         }}
//       >
//         {/* card */}
//         <div
//           className="relative rounded-2xl border-2 border-dotted border-white"
//           style={{
//             background:
//               "linear-gradient(180deg, rgba(255,255,255,0.05) 0%, rgba(19,43,96,0.05) 100%)",
//           }}
//         >
//           <form onSubmit={submit} className="p-6 md:p-8 space-y-6">
//             {/* header */}
//             <div className="flex items-center justify-between">
//               <h2 className="text-2xl font-semibold text-white">Add User</h2>
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

//             {/* top grid */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
//               <div>
//                 <label className="block text-sm text-white mb-2">First Name:</label>
//                 <input
//                   className={field}
//                   placeholder="Enter First name"
//                   value={form.firstName}
//                   onChange={(e) => set("firstName", e.target.value)}
//                   required
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm text-white mb-2">Last Name:</label>
//                 <input
//                   className={field}
//                   placeholder="Enter Last name"
//                   value={form.lastName}
//                   onChange={(e) => set("lastName", e.target.value)}
//                   required
//                 />
//               </div>

//               <div>
//                 <label htmlFor="role-select" className="block text-sm text-white mb-2">Role:</label>
//                 <select
//                   id="role-select"
//                   className={field}
//                   value={form.role}
//                   onChange={(e) => set("role", e.target.value)}
//                   aria-label="Role"
//                 >
//                   <option value="" className="bg-[#0f172a]">Select role</option>
//                   {roles.map((r) => (
//                     <option key={r} value={r} className="bg-[#0f172a]">
//                       {r}
//                     </option>
//                   ))}
//                 </select>
//               </div>

//               <div>
//                 <label htmlFor="department-select" className="block text-sm text-white mb-2">Department:</label>
//                 <select
//                   id="department-select"
//                   className={field}
//                   value={form.department}
//                   onChange={(e) => set("department", e.target.value)}
//                   aria-label="Department"
//                 >
//                   <option value="" className="bg-[#0f172a]">Select department</option>
//                   {departments.map((d) => (
//                     <option key={d} value={d} className="bg-[#0f172a]">
//                       {d}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//             </div>

//             {/* status */}
//             <div className="space-y-2">
//               <span className="block text-sm text-white">Status</span>
//               <div className="flex items-center gap-6">
//                 <label className="inline-flex items-center gap-2 text-white">
//                   <input
//                     type="radio"
//                     name="status"
//                     checked={form.status === "Active"}
//                     onChange={() => set("status", "Active")}
//                     className="h-4 w-4 accent-blue-500"
//                   />
//                   Active
//                 </label>
//                 <label className="inline-flex items-center gap-2 text-white">
//                   <input
//                     type="radio"
//                     name="status"
//                     checked={form.status === "Inactive"}
//                     onChange={() => set("status", "Inactive")}
//                     className="h-4 w-4 accent-blue-500"
//                   />
//                   Inactive
//                 </label>
//               </div>
//             </div>

//             {/* permissions */}
//             <div>
//               <p className="text-sm text-white mb-3">Permissions</p>
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                 {ALL_PERMISSIONS.map(({ key, desc }) => (
//                   <label
//                     key={key}
//                     className="flex items-start gap-3 rounded-xl border border-white p-3"
//                   >
//                     <input
//                       type="checkbox"
//                       checked={form.permissions.includes(key)}
//                       onChange={() => togglePermission(key)}
//                       className="mt-1 h-4 w-4 accent-blue-500"
//                     />
//                     <span className="leading-tight">
//                       <span className="block text-white font-medium">{key}</span>
//                       <span className="block text-white/70 text-sm">{desc}</span>
//                     </span>
//                   </label>
//                 ))}
//               </div>
//             </div>

//             {/* actions */}
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
//                 Save User
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }



"use client";
import { useEffect, useState } from "react";

export interface AddUserForm {
  email: string; // ✅ string instead of ReactNode/any
  firstName: string;
  lastName: string;
  role: string;
  department: string;
  status: "Active" | "Inactive";
  permissions: string[]; // e.g. ["User Management","Reporting"]
}

interface AddUserModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (data: AddUserForm) => void;
  roles: string[];
  departments: string[];
}

export default function AddUserModal({
  isOpen,
  onClose,
  onSave,
  roles,
  departments,
}: AddUserModalProps) {
  const [form, setForm] = useState<AddUserForm>({
    email: "", // ✅ added properly
    firstName: "",
    lastName: "",
    role: "",
    department: "",
    status: "Active",
    permissions: ["Reporting"], // example pre-checked like screenshot
  });

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

  const set = <K extends keyof AddUserForm>(k: K, v: AddUserForm[K]) =>
    setForm((s) => ({ ...s, [k]: v }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(form);
    onClose();
  };

  const field =
    "w-full h-11 rounded-2xl bg-white/5 border border-white px-4 text-white placeholder:text-white/50 focus:outline-none";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
      {/* frame */}
      <div className="p-1 md:rounded-2xl w-screen md:w-full mx-auto max-w-4xl bg-[#0b1220]  h-screen  mt-60 md:mt-0 md:h-full ">
        {/* card */}
        <div
          className="md:relative md:rounded-2xl md:border-2 md:border-dotted border-white bg-gradient-to-b from-white/[0.08] to-white/[0.03] w-screen h-screen md:h-full  md:mt-0 mx-auto max-w-4xl md:w-full  "
         
        >
          <form onSubmit={submit} className="p-6 md:p-8 md:space-y-6 space-y-2 ">
            {/* header */}
            <div className="flex items-center justify-between">
              <h2 className="md:text-2xl font-semibold text-white ">Add User</h2>
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

            {/* top grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm text-white mb-2">
                  First Name:
                </label>
                <input
                  className={field}
                  placeholder="Enter First name"
                  value={form.firstName}
                  onChange={(e) => set("firstName", e.target.value)}
                  required
                />
              </div>

              <div>
                <label className="block text-sm text-white mb-2">
                  Last Name:
                </label>
                <input
                  className={field}
                  placeholder="Enter Last name"
                  value={form.lastName}
                  onChange={(e) => set("lastName", e.target.value)}
                  required
                />
              </div>

              {/* <div>
                <label
                  htmlFor="email"
                  className="block text-sm text-white mb-2"
                >
                  Email:
                </label>
                <input
                  id="email"
                  type="email"
                  className={field}
                  placeholder="Enter email"
                  value={form.email}
                  onChange={(e) => set("email", e.target.value)}
                  required
                />
              </div> */}

              <div>
                <label
                  htmlFor="role-select"
                  className="block text-sm text-white mb-2"
                >
                  Role:
                </label>
                <select
                  id="role-select"
                  className={field}
                  value={form.role}
                  onChange={(e) => set("role", e.target.value)}
                  aria-label="Role"
                >
                  <option value="" className="bg-[#0f172a]">
                    Select role
                  </option>
                  {roles.map((r) => (
                    <option key={r} value={r} className="bg-[#0f172a]">
                      {r}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="department-select"
                  className="block text-sm text-white mb-2"
                >
                  Department:
                </label>
                <select
                  id="department-select"
                  className={field}
                  value={form.department}
                  onChange={(e) => set("department", e.target.value)}
                  aria-label="Department"
                >
                  <option value="" className="bg-[#0f172a]">
                    Select department
                  </option>
                  {departments.map((d) => (
                    <option key={d} value={d} className="bg-[#0f172a]">
                      {d}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* status */}
            <div className="space-y-2">
              <span className="block text-sm text-white">Status</span>
              <div className="flex items-center gap-6">
                <label className="inline-flex items-center gap-2 text-white">
                  <input
                    type="radio"
                    name="status"
                    checked={form.status === "Active"}
                    onChange={() => set("status", "Active")}
                    className="h-4 w-4 accent-Blue"
                  />
                  Active
                </label>
                <label className="inline-flex items-center gap-2 text-white">
                  <input
                    type="radio"
                    name="status"
                    checked={form.status === "Inactive"}
                    onChange={() => set("status", "Inactive")}
                    className="h-4 w-4 accent-blue-500"
                  />
                  Inactive
                </label>
              </div>
            </div>

            {/* actions */}
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
                className="h-11 px-5 rounded-2xl bg-white hover:bg-gray/20 text-Blue font-medium"
              >
                Save User
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
