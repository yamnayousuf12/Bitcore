import React from 'react';

interface ConnectionCardProps {
  name: string;
  status: 'online' | 'away' | 'busy';
  buttonText: string; // New prop for dynamic button text
}

const ConnectionCard: React.FC<ConnectionCardProps> = ({ name, status, buttonText }) => {
  return (
    <div className="bg-[#1e2630] p-4 rounded-lg flex flex-col items-center space-y-4 w-32 max-w-full">
      {/* Profile Picture */}
      <div className="relative w-16 h-16 bg-white rounded-full">
        <span
          className={`w-4 h-4 rounded-full absolute top-0 right-0 ${status === 'online' ? 'bg-green-500' : 'bg-yellow-500'}`}
        ></span>
      </div>

      {/* Name */}
      <div className="text-white font-medium text-center text-xs">{name}</div>

      {/* Dynamic Message Button */}
      <button className="w-full py-1.5 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm">
        {buttonText} {/* Dynamic button text */}
      </button>
    </div>
  );
};

export default ConnectionCard;
