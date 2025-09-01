"use client";

export default function Activity() {
  return (
    <div className="bg-gradient-to-br from-[#454c5b] to-[#0b1a3a] rounded-xl border-white/30 border-2 p-5 shadow-md text-white max-w-sm">
      <h3 className="mb-4 font-semibold text-gray">Recent Activity:</h3>
      <ul className="space-y-4">
        {/* Activity Item */}
        <li className="flex items-start space-x-3">
          {/* Avatar */}
          <div className="md:w-10 md:h-10 w-8 h-8 rounded-full bg-gray"></div>
          {/* Content */}
          <div>
            <p className=" md:text-base text-sm">
              <span className="font-medium">Ayesha Kamdar</span> - Updated Report
            </p>
            <span className="md:text-xs text-[10px] text-gray">25 minutes ago</span>
          </div>
        </li>

        {/* Activity Item */}
        <li className="flex items-start space-x-3">
          {/* Avatar */}
          <div className="md:w-10 md:h-10 h-8 w-8 rounded-full bg-gray"></div>
          {/* Content */}
          <div>
            <p className="md:text-base text-sm ">
              <span className="font-medium ">Sara Ali</span> - Request for tomorrow leave
            </p>
            <span className="md:text-xs text-gray text-[10px]">40 minutes ago</span>
          </div>
        </li>
      </ul>
    </div>
  );
}
