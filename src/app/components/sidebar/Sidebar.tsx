// "use client";
// import React from "react";

// export default function Sidebar() {
//   return (
//     <aside className="w-64 bg-[#0d1b2a] p-6 flex flex-col">
//       <h1 className="text-2xl font-bold mb-8">Bits Core</h1>
//       <nav className="space-y-4">
//         {["Dashboard", "User Management", "Task Management", "Time Tracker", "HR Policies", "Controls", "Chat"].map(
//           (item) => (
//             <a key={item} href="\" className="block px-3 py-2 rounded-md hover:bg-[#1b263b]">
//               {item}
//             </a>
//           )
//         )}
//       </nav>
//     </aside>
//   );
// }


"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Sidebar() {
  const menuItems = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "User Management", path: "/user-management" },
    { name: "Task Management", path: "/task-management" },
    { name: "Time Tracker", path: "/time-tracker" },
    { name: "HR Policies", path: "/hr-policies" },
    { name: "Controls", path: "/controls" },
    { name: "Chat", path: "/chat" },
  ];

  return (
    <aside className="w-64 bg-[#0d1b2a] p-6 flex flex-col border-white/35 border rounded-tl-xl rounded-b-xl mt-8 h-[calc(100vh-2rem)] ml-6 ">
      <div className="flex justify-items-start space-x-2  ">
      <Image src="/logo.svg" alt="Logo" width={30} height={60} />
      <h1 className="text-2xl font-bold mb-8 text-white mt-10  "> Bits Core</h1>
      </div>
      <nav className="space-y-4">
        {menuItems.map((item) => (
          <Link
            key={item.name}
            href={item.path}
            className="block px-3 py-2 rounded-md text-white hover:bg-[#3b424f] transition hover:text-Blue"
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
}


