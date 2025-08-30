"use client";
import { UsersRound, Plus, MessageCircleMore , Settings } from "lucide-react";

export default function QuickActions() {
  return (
    <div className="bg-gradient-to-br from-[#454c5b] to-[#0b1a3a] p-4 rounded-lg border-2 border-white/30 shadow-md">
      <h3 className="mb-4 font-semibold">Quick Actions:</h3>
      <div className="grid grid-cols-2 gap-4">
        <button className="flex items-center space-x-2 p-3 bg-[#0d1b2a] rounded-full">
          < UsersRound size={18}/> <span>Add User</span>
        </button>
        <button className="flex items-center  space-x-2 p-3 bg-[#0d1b2a] rounded-full">
          <Plus size={18} /> <span>Add Task</span>
        </button>
        <button className="flex items-center  space-x-2 p-3 bg-[#0d1b2a] rounded-full">
          <MessageCircleMore  size={18} /> <span>Chat</span>
        </button>
        <button className="flex items-center  space-x-2 p-3 bg-[#0d1b2a] rounded-full">
          <Settings size={18} /> <span>Settings</span>
        </button>
      </div>
    </div>
  );
}
