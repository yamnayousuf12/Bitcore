// "use client";
// import { useState, ChangeEvent } from "react";
// import { ChevronDown, Settings, LogOut } from "lucide-react";

// export default function MobileTopbar({ onMenuClick }: { onMenuClick: () => void }) {
//   const [showMenu, setShowMenu] = useState(false);
//   const [profileImage, setProfileImage] = useState<string | null>(null);

//   const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => setProfileImage(reader.result as string);
//       reader.readAsDataURL(file);
//     }
//   };

//   return (
//     <div className="flex items-center justify-between mb-6 border-white/35 border h-16 px-6 py-4 bg-[#101B31] mt-8 max-w-[calc(100%-1rem)] w-screen ">
     
      

//       {/* Title */}
//       {/* <h2 className="text-lg font-semibold text-white">Dashboard</h2> */}

//       {/* Profile */}
//       <div className="relative ml-auto">
//         <div
//           onClick={() => setShowMenu(!showMenu)}
//           className="flex items-center  rounded-full px-3 py-2 cursor-pointer border border-gray bg-white/15"
//         >
//           {/* Profile Image */}
//           <label htmlFor="profile-upload" className="cursor-pointer">
//             {profileImage ? (
//               <img
//                 src={profileImage}
//                 alt="Profile"
//                 className="w-8 h-8 rounded-full object-cover border border-gray"
//               />
//             ) : (
//               <div className="w-8 h-8 bg-gray rounded-full flex items-center justify-center text-white text-sm">
                
//               </div>
//             )}
//           </label>
//           <input
//             type="file"
//             id="profile-upload"
//             accept="image/*"
//             className="hidden"
//             onChange={(e) => {
//     const file = e.target.files?.[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = () => {
//         setProfileImage(reader.result as string);
//       };
//       reader.readAsDataURL(file);
//     }
//   }}
// />
//           <div className="ml-2 text-left">
//               <p className="text-xs font-medium text-white">Raheel</p>
              
//             </div>
//           <ChevronDown className="ml-1 text-white" size={16} />

//         </div>

//         {/* Dropdown */}
//         {showMenu && (
//           <div className="absolute right-0 mt-2 w-40 bg-[#1b263b] border border-gray rounded-md shadow-lg">
//             <a
//               href="#"
//               className="flex items-center px-4 py-2 text-white hover:bg-[#343D50] hover:text-white"
//             >
//               <Settings className="mr-2" size={16} /> Settings
//             </a>
//             <a
//               href="#"
//               className="flex items-center px-4 py-2 text-Red hover:bg-[#343D50]"
//             >
//               <LogOut className="mr-2" size={16} /> Log Out
//             </a>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }



"use client";
import { useState, ChangeEvent } from "react";
import { ChevronDown, Settings, LogOut } from "lucide-react";

type MobileTopbarProps = {
  onMenuClick?: () => void; // ✅ Made optional
};

export default function MobileTopbar({ onMenuClick }: MobileTopbarProps) {
  const [showMenu, setShowMenu] = useState(false);
  const [profileImage, setProfileImage] = useState<string | null>(null);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setProfileImage(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex items-center justify-between mb-6 border-white/35 border h-16 px-6 py-4 bg-[#101B31] mt-8">
      {/* Hamburger Menu Button */}
      <button
        className="text-white mr-4 md:hidden"
        onClick={() => onMenuClick?.()} // ✅ Safe call
      >
        ☰
      </button>

      {/* Profile */}
      <div className="relative ml-auto">
        <div
          onClick={() => setShowMenu(!showMenu)}
          className="flex items-center rounded-full px-3 py-2 cursor-pointer border border-gray bg-white/15"
        >
          {/* Profile Image */}
          <label htmlFor="profile-upload" className="cursor-pointer">
            {profileImage ? (
              <img
                src={profileImage}
                alt="Profile"
                className="w-8 h-8 rounded-full object-cover border border-gray"
              />
            ) : (
              <div className="w-8 h-8 bg-gray rounded-full flex items-center justify-center text-white text-sm"></div>
            )}
          </label>
          <input
            type="file"
            id="profile-upload"
            accept="image/*"
            className="hidden"
            onChange={handleImageChange}
          />
          <div className="ml-2 text-left">
            <p className="text-xs font-medium text-white">Raheel</p>
          </div>
          <ChevronDown className="ml-1 text-white" size={16} />
        </div>

        {/* Dropdown */}
        {showMenu && (
          <div className="absolute right-0 mt-2 w-40 bg-[#1b263b] border border-gray rounded-md shadow-lg">
            <a
              href="#"
              className="flex items-center px-4 py-2 text-white hover:bg-[#343D50]"
            >
              <Settings className="mr-2" size={16} /> Settings
            </a>
            <a
              href="#"
              className="flex items-center px-4 py-2 text-red-500 hover:bg-[#343D50]"
            >
              <LogOut className="mr-2" size={16} /> Log Out
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
