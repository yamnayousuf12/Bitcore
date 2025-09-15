import React from 'react';
import { FaComment } from 'react-icons/fa'; 

interface User {
  name: string;
  status: 'online' | 'offline';
}

interface RecentUserProps {
  users: User[];
}

const RecentUser: React.FC<RecentUserProps> = ({ users }) => {
  return (
    <div
  className="bg-gradient-to-b from-white/15 via-Blue/15 to-Blue p-6 rounded-lg space-y-3 border-2 border-white/20 h-68 items-end  justify-end md:w-72"
      style={{
        background: "linear-gradient(180deg, rgba(255, 255, 255, 0.15) 0%, rgba(19, 43, 96, 0.15) 100%)"
      }}
    >
      <h2 className="text-xl font-semibold text-white">Recent Users</h2>
      {users.map((user, index) => (
        <div key={index} className="flex items-center justify-between space-x-4 py-3">
          <div className="flex items-center space-x-3">
            {/* Avatar */}
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center relative">
              <span className={`w-3 h-3 rounded-full absolute top-0 left-0 ${user.status === 'online' ? 'bg-green' : 'bg-gray2'}`} />
            </div>
            {/* User Info */}
            <div className="text-white">
              <div className="font-medium">{user.name}</div>
              <div className="text-sm text-gray">{user.status === 'online' ? 'New hire' : 'Developer'}</div>
            </div>
          </div>
          {/* Chat Button with React Icon */}
          <button className="py-2 px-4 bg-Blue text-white rounded-full hover:bg-Blue ">
            <FaComment className="w-6 h-6" />
          </button>
        </div>
      ))}
    </div>
  );
};

export default RecentUser;
