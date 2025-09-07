// "use client";
// import { useMemo, useState } from "react";
// import AddUserModal, { AddUserForm } from "@/components/usermanagement/AddUserModal";

// const SEED_USERS = [
//   { name: "Mahnoor", email: "mahnoor@gmail.com", role: "HR", status: "Active" },
//   { name: "Raheel", email: "raheel@gmail.com", role: "Manager", status: "Active" },
//   { name: "Ayesha", email: "ayesha@gmail.com", role: "Employee", status: "Inactive" },
//   { name: "Mahveen", email: "mahveen@gmail.com", role: "Employee", status: "Active" },
//   { name: "Safia Seher", email: "safia@gmail.com", role: "Employee", status: "Inactive", },
// ];

// export default function UserManagement() {
//   const [search, setSearch] = useState("");
//   const [openAdd, setOpenAdd] = useState(false);

//   // If you want to actually add users to the table, switch to useState(SEED_USERS)
//   const [users] = useState(SEED_USERS);

//   const roles = ["Admin", "Manager", "HR", "Employee"];
//   const departments = ["Engineering", "HR", "Finance", "Operations", "Design"];

//   const filteredUsers = useMemo(
//     () =>
//       users.filter((u) =>
//         u.name.toLowerCase().includes(search.toLowerCase())
//       ),
//     [users, search]
//   );

//   const handleSaveUser = (data: AddUserForm) => {
//     // Hook up your API/create logic here.
//     // Example: console only (since AddUserModal doesn't collect email yet).
//     console.log("New user payload:", data);

//     // If you extend the modal to include email and want to update the table:
//     // setUsers((prev) => [
//     //   ...prev,
//     //   {
//     //     name: `${data.firstName} ${data.lastName}`.trim(),
//     //     email: data.email, // <- add email to AddUserModal first
//     //     role: data.role || "Employee",
//     //     status: data.status,
//     //   },
//     // ]);
//   };

//   return (
//     <div className="p-6 h-screen  border border-white rounded-lg text-white " style={{
//             background:
//               "linear-gradient(180deg, rgba(255, 255, 255, 0.15) 0%, rgba(19, 43, 96, 0.15) 100%)",
//           }}> 
//       <div className="flex gap-3 mb-4">
//         <input
//           type="text"
//           placeholder="Search User..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           className="px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none w-64"
//         />
//         <button
//           className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700"
//           onClick={() => setOpenAdd(true)}
//         >
//           Add User
//         </button>
//       </div>

//       <div className="overflow-x-auto border border-gray-600 rounded-lg">
//         <table className="w-full text-left border-collapse">
//           <thead>
//             <tr className="bg-[#101B31]">
//               <th className="p-3">Name</th>
//               <th className="p-3">Email</th>
//               <th className="p-3">Role</th>
//               <th className="p-3">Status</th>
//               <th className="p-3"></th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredUsers.map((user, i) => (
//               <tr key={i} className="border-b border-gray-700 hover:bg-gray-800">
//                 <td className="p-3">{user.name}</td>
//                 <td className="p-3">{user.email}</td>
//                 <td className="p-3">{user.role}</td>
//                 <td className="p-3">
//                   <span
//                     className={
//                       user.status === "Active" ? "text-green-400" : "text-orange-400"
//                     }
//                   >
//                     {user.status}
//                   </span>
//                 </td>
                
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Add User Modal */}
//       <AddUserModal
//         isOpen={openAdd}
//         onClose={() => setOpenAdd(false)}
//         onSave={handleSaveUser}
//         roles={roles}
//         departments={departments}
//       />
//     </div>
//   );
// }








"use client";
import { useMemo, useState } from "react";
import AddUserModal, { AddUserForm } from "@/components/usermanagement/AddUserModal";

const SEED_USERS = [
  {
    name: "Mahnoor",
    email: "mahnoor@gmail.com",
    role: "HR",
    status: "Active",
    activeTask: "Meeting Schedule",
    timeToday: "4hr",
  },
  {
    name: "Raheel",
    email: "raheel@gmail.com",
    role: "Manager",
    status: "Active",
    activeTask: "Work Distribution",
    timeToday: "8hr",
  },
  {
    name: "Ayesha",
    email: "ayesha@gmail.com",
    role: "Employee",
    status: "Inactive",
    activeTask: "Meeting Schedule",
    timeToday: "4hr",
  },
  {
    name: "Safia Seher",
    email: "safia@gmail.com",
    role: "Employee",
    status: "Inactive",
    activeTask: "Q/A Report",
    timeToday: "3hr",
  },
];

export default function UserManagement() {
  const [search, setSearch] = useState("");
  const [openAdd, setOpenAdd] = useState(false);
  const [users] = useState(SEED_USERS);

  const roles = ["Admin", "Manager", "HR", "Employee"];
  const departments = ["Engineering", "HR", "Finance", "Operations", "Design"];

  const filteredUsers = useMemo(
    () => users.filter((u) => u.name.toLowerCase().includes(search.toLowerCase())),
    [users, search]
  );

  const handleSaveUser = (data: AddUserForm) => {
    console.log("New user payload:", data);
  };

  return (
    <div
      className="p-6 md:h-screen md:border md:border-white rounded-lg text-white"
      style={{
        background:
          " md:linear-gradient(180deg, rgba(255, 255, 255, 0.15) 0%, rgba(19, 43, 96, 0.15) 100%)",
      }}
    >
      <div className="flex gap-3 mb-4">
        <input
          type="text"
          placeholder="Search User..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-4 py-2 rounded-xl bg-gray-800 border border-gray-700 focus:outline-none w-64 md:ml-0 -ml-8"
        />
        <button
          className="bg-blue-600 md:px-4 px-5 py-2 rounded-xl hover:bg-blue-700"
          onClick={() => setOpenAdd(true)}
        >
          Add User
        </button>
      </div>

      {/* ===== Desktop Table Layout ===== */}
      <div className="hidden md:block overflow-x-auto border border-gray-600 rounded-lg">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-[#101B31]">
              <th className="p-3">Name</th>
              <th className="p-3">Email</th>
              <th className="p-3">Role</th>
              <th className="p-3">Status</th>
              <th className="p-3"></th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user, i) => (
              <tr key={i} className="border-b border-gray-700 hover:bg-gray-800">
                <td className="p-3">{user.name}</td>
                <td className="p-3">{user.email}</td>
                <td className="p-3">{user.role}</td>
                <td className="p-3">
                  <span
                    className={
                      user.status === "Active" ? "text-green-400" : "text-orange-400"
                    }
                  >
                    {user.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
<div className="absolute left-20 -translate-x-1/2 flex items-center -mt-40 text-base lg:hidden text-[#BAD4EF]">
      <span className="font-semibold tracking-wide "> ← User Mangement</span>
      </div>
      {/* ===== Mobile Card Layout ===== */}
      <div className="block md:hidden space-y-4">
        {filteredUsers.map((user, i) => (
          <div
            key={i}
            className="rounded-xl border border-white/10 bg-gradient-to-b from-white/10 to-white/[0.04] p-4"
          >
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">{user.name}</h3>
              <span
                className={
                  user.status === "Active" ? "text-green-400 text-sm" : "text-orange-400 text-sm"
                }
              >
                {user.status === "Active" ? "Online" : "Offline"}
              </span>
            </div>
            <p className="text-sm text-gray-300">Role: {user.role}</p>
            <p className="text-sm text-gray-300">
              Active Task: {user.activeTask || "N/A"}
            </p>
            <p className="text-sm text-gray-300">
              Time Today: {user.timeToday || "N/A"}
            </p>
          </div>
        ))}
      </div>

      {/* Add User Modal */}
      <AddUserModal
        isOpen={openAdd}
        onClose={() => setOpenAdd(false)}
        onSave={handleSaveUser}
        roles={roles}
        departments={departments}
      />
    </div>
  );
}
