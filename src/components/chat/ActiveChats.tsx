import React from 'react';
import Image from 'next/image';

interface Chat {
  name: string;
  status: 'online' | 'away' | 'busy';
  time: string;
  message: string;
  avatarUrl: string; // New property for avatar
}

interface ActiveChatsProps {
  chats: Chat[];
}

const ActiveChats: React.FC<ActiveChatsProps> = ({ chats }) => {
  return (
   <div
    className="p-6 rounded-lg w-full sm:max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg mx-auto outline outline-1 outline-white/20"
  style={{
    background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.15) 0%, rgba(19, 43, 96, 0.15) 100%)',
  }}
  
>
      <h2 className="text-xl font-semibold text-white">Active Chats</h2>
      {chats.map((chat, index) => (
        <div key={index} className="flex items-center space-x-4">
          <div className="relative">
            <Image src={chat.avatarUrl} alt={chat.name} width={40} height={40} className="w-10 h-10 rounded-full" />
            <span className={`w-3 h-3 rounded-full absolute top-0 left-0 ${chat.status === 'online' ? 'bg-green-500' : 'bg-yellow-500'}`}></span>
          </div>
          <div className="text-white flex justify-between w-full p-4">
            <div>
              <div className="font-medium">{chat.name}</div>
              <div className="text-sm text-gray-300">{chat.message}</div>
            </div>
            <div className="text-sm text-gray-400 ml-auto">{chat.time}</div> {/* Time aligned to the right */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ActiveChats;
