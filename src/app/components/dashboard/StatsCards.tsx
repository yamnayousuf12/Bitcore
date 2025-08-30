// "use client";
// import { Users, ListTodo, CheckCircle, Clock } from "lucide-react";

// export default function StatsCards() {
//   return (
//     <div className="grid grid-cols-4 gap-6 mb-6">
//       <div className="bg-[#1b263b] p-4 rounded-lg flex items-center space-x-3">
//         <Users size={24} /> <div><p>Total User:</p><h3 className="text-xl">25</h3></div>
//       </div>
//       <div className="bg-[#1b263b] p-4 rounded-lg flex items-center space-x-3">
//         <ListTodo size={24} /> <div><p>Pending Tasks:</p><h3 className="text-xl">08</h3></div>
//       </div>
//       <div className="bg-[#1b263b] p-4 rounded-lg flex items-center space-x-3">
//         <CheckCircle size={24} /> <div><p>Complete Tasks:</p><h3 className="text-xl">05</h3></div>
//       </div>
//       <div className="bg-[#1b263b] p-4 rounded-lg flex items-center space-x-3">
//         <Clock size={24} /> <div><p>Avg. Hours/Day:</p><h3 className="text-xl">7.5</h3></div>
//       </div>
//     </div>
//   );
// }


// "use client";
// import React from "react";
// import { Users, Clock, CheckCircle, Timer, } from "lucide-react";

// export default function DashboardStats() {
//   const stats = [
//     { label: "Total User", value: "25", icon: <Users size={24} /> },
//     { label: "Pending Tasks", value: "08", icon: <Clock size={24} /> },
//     { label: "Complete Tasks", value: "05", icon: <CheckCircle size={24} /> },
//     { label: "Avg. Hours/Day", value: "7.5", icon: <Timer size={24} /> },
//   ];

//   return (
//     <div className="bg-gradient-to-br from-[#454c5b] to-[#0b1a3a] text-white rounded-xl p-4 flex items-center justify-between shadow-lg border border-white/35 mb-6 py-5 -mt-9">
//       {stats.map((item, index) => (
//         <div key={index} className="flex items-center gap-4 relative px-6">
//           {/* Icon */}
//           <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#1b263b] text-white">
//             {item.icon}
//           </div>

//           {/* Text */}
//           <div>
//             <p className="text-gray text-sm">{item.label}</p>
//             <p className="text-white text-xl font-bold">{item.value}</p>
//           </div>

//           {/* Divider */}
//           {index !== stats.length - 1 && (
//             <div className="absolute right-0 top-2 bottom-2 w-px bg-gray"></div>
//           )}
//         </div>
//       ))}

    
//     </div>
//   );
// }


"use client";
import React from "react";
import Image from "next/image";

export default function DashboardStats() {
  const stats = [
    { label: "Total User", value: "25", icon: "/icon/users.svg" },
    { label: "Pending Tasks", value: "08", icon: "/icon/pending.svg" },
    { label: "Complete Tasks", value: "05", icon: "/icon/complete.svg" },
    { label: "Avg. Hours/Day", value: "7.5", icon: "/icon/clock.svg" },
  ];

  return (
    <div className="bg-gradient-to-br from-[#454c5b] to-[#0b1a3a] rounded-xl border-white/20 border p-4 flex items-center justify-between shadow-lg -mt-7 mb-6 py-5">
      {stats.map((item, index) => (
        <div key={index} className="flex items-center gap-4 relative px-6">
          {/* Icon Image */}
          <div className="w-12 h-12 flex items-center justify-center ">
            <Image
              src={item.icon}
              alt={item.label}
              width={100}
              height={100}
              className="object-contain"
            />
          </div>

          {/* Text */}
          <div>
            <p className="text-gray text-sm">{item.label}</p>
            <p className="text-white text-xl font-bold">{item.value}</p>
          </div>

          {/* Divider */}
          {index !== stats.length - 1 && (
            <div className="absolute right-0 top-2 bottom-2 w-px bg-gray"></div>
          )}
        </div>
      ))}

     
    </div>
  );
}
