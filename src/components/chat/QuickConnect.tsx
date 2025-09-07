import React from 'react';
import ConnectionCard from './ConnectionCard';

interface Connection {
  name: string;
  status: 'online' | 'away' | 'busy';
}

interface QuickConnectProps {
  connections: Connection[];
}

const QuickConnect: React.FC<QuickConnectProps> = ({ connections }) => {
  return (
    <div
  className="bg-[#2a2f3a] p-6 rounded-lg w-full max-w-full ml-0 border-2 border-white/20"
  style={{
    background: "linear-gradient(180deg, rgba(255, 255, 255, 0.15) 0%, rgba(19, 43, 96, 0.15) 100%)"
  }}
>
      <h2 className="text-xl font-semibold text-white mb-4">Quick Connect</h2>
      {/* Flex container for the row layout */}
      {/* Flex container for the row layout */}
<div className="flex flex-wrap gap-6 overflow-x-auto">
  {connections.map((connection, index) => (
    <ConnectionCard
      key={index}
      name={connection.name}
      status={connection.status}
      buttonText="Message"
    />
  ))}

  {/* Add New Card */}
  <ConnectionCard name="Add New" status="online" buttonText="Create" /> {/* "Create" button for "Add New" */}
</div>

    </div>
  );
};

export default QuickConnect;

