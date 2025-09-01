"use client";
import { useState, ChangeEvent } from "react";
import { Search, Settings, LogOut, ChevronsUpDown } from "lucide-react";

export default function Topbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [profileImage, setProfileImage] = useState<string | null>(null);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex items-center justify-between mb-6 border-white/35 border rounded-tr-xl h-20 px-6 py-4 bg-[#101B31] mt-8 max-w-[calc(100%-1rem)]">
      <h2 className="text-xl font-semibold">Dashboard</h2>
      <div className="flex items-center space-x-4">
        {/* Search */}
        <div className="relative ">
          <Search className="absolute left-3 top-2.5 text-white" size={18} />
          <input
            type="text"
            placeholder="Search"
            className="pl-10 pr-4 py-2 rounded-full bg-white/15 text-sm focus:outline-none border border-gray "
          />
        </div>

        {/* Profile Section */}
        <div className="relative">
          <div
            onClick={() => setShowMenu(!showMenu)}
            className="flex items-center bg-white/15z rounded-full px-3 py-2 cursor-pointer border border-gray bg-white/15"
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
                <div className="w-8 h-8 bg-gray rounded-full flex items-center justify-center text-white text-sm">
                  
                </div>
              )}
            </label>
            <input
              type="file"
              id="profile-upload"
              accept="image/*"
              className="hidden"
              onChange={handleImageChange}
            />

            {/* Name & Role */}
            <div className="ml-2 text-left">
              <p className="text-sm font-medium text-white">Raheel</p>
              
            </div>

            {/* Dropdown Icon */}
            < ChevronsUpDown className="ml-2 text-gray" size={16} />
          </div>

          {/* Dropdown Menu */}
          {showMenu && (
            <div className="absolute right-0 mt-1 w-40 bg-[#1b263b] border border-gray rounded-md shadow-lg">
              <a
                className="flex items-center px-4 py-2 hover:bg-[#343D50] text-white hover:text-white"
                href="#"
              >
                <Settings className="mr-2" size={16} /> Settings
              </a>
              <a
                className="flex items-center px-4 py-2 hover:bg-[#343D50] text-Red"
                href="#"
              >
                <LogOut className="mr-2" size={16} /> Log Out
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}


