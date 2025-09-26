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
import EditUserModal from "@/components/usermanagement/EditUserModal";
import ViewUserModal from "@/components/usermanagement/ViewUserModal";
import { Eye, Edit2, Trash2, ArrowLeft  } from "lucide-react";

// ✅ Always include permissions (at least empty array) to avoid runtime errors
const SEED_USERS: AddUserForm[] = [
  {
    firstName: "Mahnoor",
    lastName: "",
    role: "HR",
    department: "Human Resource",
    status: "Active",
    permissions: ["Reporting"],
    email: "mahnoor@gmail.com"
  },
  {
    firstName: "Raheel",
    lastName: "",
    role: "Manager",
    department: "Product Manager",
    status: "Active",
    permissions: [],
    email: "raheel@gmail.com"
  },
  {
    firstName: "Ayesha",
    lastName: "",
    role: "Employee",
    department: "Design",
    status: "Inactive",
    permissions: [],
    email: "ayesha@gmail.com"
  },
  {
    firstName: "Safia",
    lastName: "Seher",
    role: "Employee",
    department: "Engineering",
    status: "Inactive",
    permissions: [],
    email: "mahveen@gmail.com"
  },
];

export default function UserManagement() {
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState(SEED_USERS);

  // Modal states
  const [openAdd, setOpenAdd] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [openView, setOpenView] = useState(false);

  const [selectedUser, setSelectedUser] = useState<AddUserForm | null>(null);

  const roles = ["Admin", "Manager", "HR", "Employee"];
  const departments = ["Engineering", "HR", "Finance", "Operations", "Design"];

  const filteredUsers = useMemo(
    () =>
      users.filter((u) =>
        `${u.firstName} ${u.lastName}`.toLowerCase().includes(search.toLowerCase())
      ),
    [users, search]
  );

  // Handlers
  const handleSaveUser = (data: AddUserForm) => {
    setUsers((prev) => [...prev, data]);
    setOpenAdd(false);
  };

  const handleEditUser = (data: AddUserForm) => {
    setUsers((prev) =>
      prev.map((u) =>
        u.firstName === selectedUser?.firstName && u.lastName === selectedUser?.lastName
          ? { ...u, ...data }
          : u
      )
    );
    setOpenEdit(false);
  };

  const handleViewUser = (user: AddUserForm) => {
    setSelectedUser(user);
    setOpenView(true);
  };

  const handleOpenEdit = (user: AddUserForm) => {
    setSelectedUser(user);
    setOpenEdit(true);
  };

  return (
    <div className="p-10 md:h-full md:border md:border-white/25 rounded-lg text-white md:bg-gradient-to-b from-white/[0.08] to-white/[0.03] -mt-5 max-w7xl sm:w-[107.8%]  
    md:w-[105.5%]  
    lg:w-[105%] 
    xl:w-[104.2%] 
    2xl:w-[100.3%]  2xl:ml-2 lg:-ml-4  xl:-ml-4 md:-ml-5 sm:-ml-7 -ml-8" >
      <div className="absolute left-24 -translate-x-1/2 flex items-center gap-2 -mt-20 text-base lg:hidden text-[#BAD4EF] flex-shrink-0 ">
  {/* Back Arrow Icon */}
  <ArrowLeft className="h-5 w-5 cursor-pointer hover:text-white" />

  {/* Text */}
  <span className="font-medium tracking-wide">User Management</span>
</div>
      {/* Search + Add */}
      <div className="flex gap-3 mb-4 md:h-auto h-12 -mt-8 md:mt-0  justify-start items-start ">
        <input
          type="text"
          placeholder="Search User..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-4 py-2 rounded-xl bg-gray3 border border-gray/40 focus:outline-none w-[500px] sm:w-[800px]  
    md:w-96  
    lg:w-96 
    xl:w-96 
    2xl:w-96 "
        />
        <button
          className="bg-Blue md:px-4 px-3 py-2 rounded-xl hover:bg-Blue flex-shrink-0"
          onClick={() => setOpenAdd(true)}
        >
          Add User
        </button>
      </div>

      {/* Desktop Table */}
      <div className="hidden md:block overflow-x-auto border border-gray/30 rounded-lg bg-[#3c315a4d]  ">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-[#0f1d3a]">
              <th className="p-3">Name</th>
              <th className="p-3">Email</th>
              <th className="p-3">Role</th>
              <th className="p-3">Department</th>
              <th className="p-3">Status</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user, i) => (
              <tr key={i} className="border-b border-gray/30 hover:bg-gray/10">
                <td className="p-3">{user.firstName} {user.lastName}</td>
                <td className="p-3">{user.email}</td>
                <td className="p-3">{user.role}</td>
                <td className="p-3">{user.department}</td>
                <td className="p-3">
                  <span className={user.status === "Active" ? "text-green" : "text-orange"}>
                    {user.status}
                  </span>
                </td>
                <td className="p-3 flex gap-3">
                  <button className="text-gray hover:text-white" onClick={() => handleViewUser(user)}>
                    <Eye size={18} />
                  </button>
                  <button className="text-Blue hover:text-Blue" onClick={() => handleOpenEdit(user)}>
                    <Edit2 size={18} />
                  </button>
                  <button
                    className="text-Red hover:text-Red"
                    onClick={() => setUsers(users.filter((u) => u !== user))}
                  >
                    <Trash2 size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
{/* Mobile Layout */}

<div className="block md:hidden space-y-4 w-[109.8%] sm:w-[108%]  
    md:w-[105%]  
    lg:w-[105%] 
    xl:w-[103.%] 
    2xl:w-[102%]  2xl:ml-2 lg:-ml-4  xl:-ml-4 md:-ml-5 sm:-ml-7 -ml-5 max-w-7xl mx-auto  ">
  {filteredUsers.map((user, i) => (
    <div
      key={i}
      className="rounded-xl border border-white/10 bg-gradient-to-b from-white/10 to-white/[0.04] p-4 flex flex-col space-y-3  "
    >
      {/* Top Row: Name + Department */}
      <div className="flex justify-between items-center">
        <h3 className="text-base font-semibold text-white truncate">
          {user.firstName} {user.lastName}
        </h3>
        <span className="text-sm text-blue-400 font-medium">
          {user.department || "N/A"}
        </span>
      </div>

      {/* Email */}
      <p className="text-xs text-gray-300 break-all">{user.email}</p>

      {/* Status */}
      <div className="flex items-center gap-2">
        <span
          className={`text-sm font-semibold ${
            user.status === "Active" ? "text-green-400" : "text-orange-400"
          }`}
        >
          {user.status}
        </span>
      </div>

      {/* Actions */}
      <div className="flex justify-end gap-3 border-t border-white/10 pt-3">
        <button
          className="text-gray-300 hover:text-white transition"
          onClick={() => handleViewUser(user)}
          aria-label="View User"
        >
          <Eye size={18} />
        </button>

        <button
          className="text-blue-400 hover:text-blue-300 transition"
          onClick={() => handleOpenEdit(user)}
          aria-label="Edit User"
        >
          <Edit2 size={18} />
        </button>

        <button
          className="text-red-400 hover:text-red-300 transition"
          onClick={() =>
            setUsers(users.filter((u) => u.email !== user.email))
          }
          aria-label="Delete User"
        >
          <Trash2 size={18} />
        </button>
      </div>
    </div>
  ))}
</div>

{/* <div className="block md:hidden space-y-4  ">
  {filteredUsers.map((user, i) => (
    <div
      key={i}
      className="rounded-xl border border-white/10 bg-gradient-to-b from-white/10 to-white/[0.04] p-4 items-center justify-center"
    >
     
      <div className="flex justify-between items-center">
        <h3 className="text-base font-semibold">{user.firstName} {user.lastName}</h3>
        <span className="text-Blue text-sm ">{user.department}</span>
       
      </div>


      
 <span className="text-xs text-gray">{user.email}</span>
      
      <div className="flex items-center gap-2 mt-3">
        <span
          className={`text-sm font-medium ${
            user.status === "Active" ? "text-green" : "text-orange"
          }`}
        >
          {user.status}
        </span>
      </div>

      <div className="flex justify-end gap-4 mt-3">
        <button
          className="text-gray hover:text-white"
          onClick={() => handleViewUser(user)}
        >
          <Eye size={18} />
        </button>
        <button
          className="text-Blue hover:text-Blue"
          onClick={() => handleOpenEdit(user)}
        >
          <Edit2 size={18} />
        </button>
        <button
          className="text-Red hover:text-Red"
          onClick={() =>
            setUsers(users.filter((u) => u.email !== user.email))
          }
        >
          <Trash2 size={18} />
        </button>
      </div>
    </div>
  ))}
</div> */}


      {/* Modals */}
      <AddUserModal
        isOpen={openAdd}
        onClose={() => setOpenAdd(false)}
        onSave={handleSaveUser}
        roles={roles}
        departments={departments}
      />

      {selectedUser && (
        <EditUserModal
          isOpen={openEdit}
          onClose={() => setOpenEdit(false)}
          onUpdate={handleEditUser}
          roles={roles}
          departments={departments}
          user={selectedUser}
        />
      )}

      {selectedUser && (
        <ViewUserModal
          isOpen={openView}
          onClose={() => setOpenView(false)}
          user={selectedUser}
        />
      )}
    </div>
  );
}
