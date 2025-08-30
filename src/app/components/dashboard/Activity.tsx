// "use client";

// export default function Activity() {
//   return (
//     <div className="bg-[#1b263b] p-4 rounded-lg">
//       <h3 className="mb-4 font-semibold">Recent Activity:</h3>
//       <ul className="space-y-3 text-sm">
//         <li><span className="font-medium">Ayesha Kamdar</span> - Updated Report <span className="text-gray">25 min ago</span></li>
//         <li><span className="font-medium">Sara Ali</span> - Request for tomorrow leave <span className="text-gray">40 min ago</span></li>
//       </ul>
//     </div>
//   );
// }


"use client";

export default function Activity() {
  return (
    <div className="bg-gradient-to-br from-[#454c5b] to-[#0b1a3a]  rounded-xl border-white/30 border-2  p-5  shadow-md text-white max-w-sm">
      <h3 className="mb-4 font-semibold text-gray">Recent Activity:</h3>
      <ul className="space-y-4">
        {/* Activity Item */}
        <li className="flex items-start space-x-3">
          {/* Avatar */}
          <div className="w-10 h-10 rounded-full bg-gray"></div>
          {/* Content */}
          <div>
            <p>
              <span className="font-medium">Ayesha Kamdar</span> - Updated Report
            </p>
            <span className="text-xs text-gray">25 minutes ago</span>
          </div>
        </li>

        {/* Activity Item */}
        <li className="flex items-start space-x-3">
          {/* Avatar */}
          <div className="w-10 h-10 rounded-full bg-gray"></div>
          {/* Content */}
          <div>
            <p>
              <span className="font-medium">Sara Ali</span> - Request for tomorrow leave
            </p>
            <span className="text-xs text-gray">40 minutes ago</span>
          </div>
        </li>
      </ul>
    </div>
  );
}
