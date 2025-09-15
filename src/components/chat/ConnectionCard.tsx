// import React from 'react';

// interface ConnectionCardProps {
//   name: string;
//   status: 'online' | 'away' | 'busy';
//   buttonText: string; // New prop for dynamic button text
// }

// const ConnectionCard: React.FC<ConnectionCardProps> = ({ name, status, buttonText }) => {
//   return (
//     <div className="bg-[#1e2630] p-4 rounded-lg flex flex-col items-center space-y-3 w-52 max-w-full">
//       {/* Profile Picture */}
//       <div className="relative w-10 h-10 bg-white rounded-full">
//         <span
//           className={`w-2 h-2 rounded-full absolute top-0 right-0 ${status === 'online' ? 'bg-green' : 'bg-yellow'}`}
//         ></span>
//       </div>

//       {/* Name */}
//       <div className="text-white font-medium text-center text-xs">{name}</div>

//       {/* Dynamic Message Button */}
//       <button className="w-full py-1.5 bg-Blue text-white rounded-md hover:bg-Blue text-sm">
//         {buttonText} {/* Dynamic button text */}
//       </button>
//     </div>
//   );
// };

// export default ConnectionCard;


// components/ConnectionCard.tsx
import React from "react";
import { FaPlus, FaCommentDots } from "react-icons/fa";

interface ConnectionCardProps {
  name: string;
  status: "online" | "away" | "busy";
  buttonText: string;
  role?: string; // optional (e.g. Developer, Designer)
}

const ConnectionCard: React.FC<ConnectionCardProps> = ({
  name,
  status,
  buttonText,
  role,
}) => {
  const isAddNew = name === "Add New";

  return (
    <div className="bg-[#0c1424] rounded-lg p-4 flex flex-col items-center md:w-28 w-full flex-shrink-0 border border-white/30">
      {/* Avatar */}
      <div className="relative mb-3">
        <div className="md:w-9 md:h-9
         w-7 h-7 rounded-full bg-gray flex items-center justify-center text-white text-lg">
          {isAddNew ? <FaPlus /> : name.charAt(0)}
        </div>
        {!isAddNew && (
          <span
            className={`absolute bottom-1 right-1 w-2 h-2 md:w-3 md:h-3 rounded-full border-2 border-[#0c1424] ${
              status === "online"
                ? "bg-green"
                : status === "away"
                ? "bg-yellow"
                : "bg-Red"
            }`}
          ></span>
        )}
      </div>

      {/* Name + Role */}
      <div className="text-center mb-3">
        <p className="text-[11px] font-medium text-white flex-shrink-0">{name}</p>
        <p className="text-[11px] text-gray">
          {isAddNew ? "Create" : role || "Developer"}
        </p>
      </div>

      {/* Button */}
      <button className="flex items-center gap-1 text-xs px-3 py-1.5 rounded-md bg-Blue hover:bg-Blue text-white transition">
        {isAddNew ? (
          <FaPlus className="w-3 h-3" />
        ) : (
          <FaCommentDots className="w-3 h-3" />
        )}
        {buttonText}
      </button>
    </div>
  );
};

export default ConnectionCard;
