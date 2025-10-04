"use client";
import { useMemo, useState } from "react";
import AddUserModal, { AddUserForm } from "@/components/usermanagement/AddUserModal";
import EditUserModal from "@/components/usermanagement/EditUserModal";
import ViewUserModal from "@/components/usermanagement/ViewUserModal";
import { Eye, Trash2, ArrowLeft, Edit  } from "lucide-react";
import { FaSearch } from "react-icons/fa";

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
    <div className="p-10 md:h-
    [600px] h-auto sm:h-full lg:h-[600px] xl:h-[600px] 2xl:h-[600px] md:border  md:border-white/25 rounded-lg text-white md:bg-gradient-to-b from-white/[0.08] to-white/[0.03] md:-mt-3 -mt-9 sm:-mt-3 lg:-mt-12 max-w7xl sm:w-[107.8%]  
    md:w-[105.5%]  
    lg:w-[107%] 
    xl:w-[104.2%] 
    2xl:w-[100.3%]  2xl:ml-2 lg:-ml-9 xl:-ml-4 md:-ml-9 sm:-ml-0 -ml-8" >
      {/* Mobile Header */}
     <div
        className="
          absolute 
          top-12 left-6 
          flex items-center gap-2 
          text-base text-[#BAD4EF] 
          lg:hidden
        "
      >
        <ArrowLeft className="h-5 w-5 cursor-pointer hover:text-white transition-colors duration-200" />
        <span className="font-medium tracking-wide">Use Management</span>
      </div>
   {/* Search + Add */}
<div className="flex mb-6 -mt-14 sm-mt-0 xl:mt-0 md:-mt-0 2xl:mt-0 lg:mt-0 px-4 lg:px-0 -ml-5 lg:-ml-4 gap-2">
  {/* Search Bar - Responsive sizing for all screens */}
  <div className="relative flex-1 /* Mobile (320px-639px) */
         min-w-[200px] max-w-[75%]
        /* Small screens (640px-767px) */
        sm:w-full sm:max-w-[70%]
        /* Medium screens (768px-1023px) */
        md:w-full md:max-w-[65%]
        /* Large screens (1024px-1279px) */
        lg:w-full lg:max-w-[60%]
        /* Extra large screens (1280px-1535px) */
        xl:w-full xl:max-w-[55%]
        /* 2XL screens (1536px+) */
        2xl:w-full 2xl:max-w-[50%]">
    <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm" />
    <input
      type="text"
      placeholder="Search User...."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="w-full px-4 py-2 sm:py-3 pl-10 rounded-xl bg-[rgba(255,255,255,0.3)] border border-gray/40 focus:outline-none placeholder-gray text-white text-sm sm:text-base
        "
    />
  </div>
  
  {/* Add User Button - Responsive sizing */}
  <button
    className="bg-[rgba(0,112,255,1)] px-2 sm:px-4 py-2 sm:py-3 rounded-xl flex-shrink-0 text-white font-medium hover:bg-Blue transition-colors text-xs sm:text-sm
      /* Mobile (320px-639px) */
      min-w-[80px] max-w-[25%]
      /* Small screens (640px-767px) */
      sm:min-w-[90px] sm:max-w-[30%]
      /* Medium screens (768px-1023px) */
      md:min-w-[100px] md:max-w-[35%]
      /* Large screens (1024px-1279px) */
      lg:min-w-[110px] lg:max-w-[40%]
      /* Extra large screens (1280px-1535px) */
      xl:min-w-[120px] xl:max-w-[45%]
      /* 2XL screens (1536px+) */
      2xl:min-w-[130px] 2xl:max-w-[50%]"
    onClick={() => setOpenAdd(true)}
  >
    <span className="hidden sm:inline">Add User</span>
    <span className="sm:hidden">Add User</span>
  </button>
</div>
      {/* Desktop Table */}
      <div className="hidden md:block overflow-x-auto border border-gray/30 rounded-lg bg-[#3c315a4d] mt-10 max-w7xl sm:w-[107.8%]  
    md:w-[105.5%]  
    lg:w-[105%] 
    xl:w-[104.2%] 
    2xl:w-[100.3%] 2xl:ml-2 lg:-ml-4  xl:-ml-4 md:-ml-5 sm:-ml-7 -ml-8">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-[#0f1d3a] font-medium">
              <th className="p-3 font-medium md:text-sm">Name</th>
              <th className="p-3 font-medium md:text-sm">Email</th>
              <th className="p-3 font-medium md:text-sm">Role</th>
              <th className="p-3 font-medium md:text-sm">Department</th>
              <th className="p-3 font-medium md:text-sm">Status</th>
              <th className="p-3 font-medium md:text-sm">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user, i) => (
              <tr key={i} className="border-b border-gray/30 hover:bg-gray/10">
                <td className="p-3 font-medium md:text-sm ">{user.firstName} {user.lastName}</td>
                <td className="p-3 font-medium md:text-sm">{user.email}</td>
                <td className="p-3 font-medium md:text-sm">{user.role}</td>
                <td className="p-3 font-medium md:text-sm">{user.department}</td>
                <td className="p-3 font-medium md:text-sm">
                  <span className={user.status === "Active" ? "text-green" : "text-orange"}>
                    {user.status}
                  </span>
                </td>
                <td className="p-3 flex gap-3">
                  <button className="text-gray hover:text-white" onClick={() => handleViewUser(user)}>
                    <Eye size={14} />
                  </button>
                  <button className="text-Blue hover:text-Blue" onClick={() => handleOpenEdit(user)}>
                    <Edit size={14} />
                  </button>
                  <button
                    className="text-Red hover:text-Red"
                    onClick={() => setUsers(users.filter((u) => u !== user))}
                  >
                    <Trash2 size={14} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
{/* Mobile Layout */}

<div className="block md:hidden space-y-4 w-[122%] sm:w-[109.6%]   
    md:w-[105%]  
    lg:w-[105%] 
    xl:w-[103%] 
    2xl:w-[102%] 2xl:ml-2 lg:-ml-4 xl:-ml-4 md:-ml-5 sm:-ml-3 -ml-3 max-w-xl mx-auto">
  {filteredUsers.map((user, i) => (
    <div
      key={i}
      className="rounded-xl border border-white/15 bg-gradient-to-b from-white/10 to-white/[0.04] p-4 flex flex-col space-y-0"
    >
      {/* Top Row: Name + Department */}
      <div className="flex justify-between items-center">
        <h3 className="text-base font-medium text-white truncate">
          {user.firstName} {user.lastName}
        </h3>
        <span className="text-xs text-Blue font-medium">
          {user.department || "N/A"}
        </span>
      </div>

      {/* Email */}
      <p className="text-xs text-gray break-all">{user.email}</p>

      {/* ✅ Status with Vertical Line */}
     <div className="flex items-center gap-2 pt-3">
  {/* Vertical line */}
  <div
    className={`w-0.5 h-5 rounded-full ${
      user.status === "Active" ? "bg-green" : "bg-orange"
    }`}
  ></div>

  {/* Status text */}
  <span
    className={`text-sm font-medium ${
      user.status === "Active" ? "text-green" : "text-orange"
    }`}
  >
    {user.status}
  </span>
</div>




      {/* Actions */}
      <div className="flex ml-32 md:ml-0 justify-end items-end gap-3 pt-2">
        <button
          className="text-gray hover:text-white transition"
          onClick={() => handleViewUser(user)}
          aria-label="View User"
        >
          <Eye size={15} />
        </button>

        <button
          className="text-Blue hover:text-Blue transition"
          onClick={() => handleOpenEdit(user)}
          aria-label="Edit User"
        >
          <Edit size={15} />
        </button>

        <button
          className="text-Red hover:text-Red transition"
          onClick={() =>
            setUsers(users.filter((u) => u.email !== user.email))
          }
          aria-label="Delete User"
        >
          <Trash2 size={15} />
        </button>
      </div>
    </div>
   
  ))}
</div>





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

