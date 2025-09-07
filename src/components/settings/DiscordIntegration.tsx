import React from 'react';
import InputField from './InputField';

interface DiscordIntegrationProps {
  serverId: string;
  apiKey: string;
  onChange: (key: string, value: string) => void;
  onSync: () => void;
}

const DiscordIntegration: React.FC<DiscordIntegrationProps> = ({ serverId, apiKey, onChange, onSync }) => {
  return (
    <div className="bg-[#1e2630] p-6 rounded-lg space-y-4">
      <h2 className="text-lg font-semibold text-white">Discord Integration</h2>
      <div className="flex space-x-56 ">
  <InputField 
    label="Discord Server ID" 
    value={serverId} 
    onChange={(e) => onChange('serverId', e.target.value)} 
  />
  <InputField 
    label="API Key" 
    value={apiKey} 
    onChange={(e) => onChange('apiKey', e.target.value)} 
  />
</div>
    <div className="mt-4">
        {/* Split the status text and color only "Connected" part */}
        <span className="text-white">Status:
          <span className="text-green-500"> Connected</span> (last sync 5 minutes ago)
        </span>
      </div>
     <div className="flex justify-center mt-8">
  <button 
    className="bg-white text-blue-500 py-2 px-8 rounded-full w-full max-w-xs hover:bg-blue-600 transition-all" 
    onClick={onSync}
  >
    Sync Now
  </button>
</div>
    </div>
  );
};

export default DiscordIntegration;
