import React from 'react';
import ToggleSwitch from './ToggleSwitch';
import InputField from './InputField';

interface SystemSettingsProps {
  settings: { [key: string]: boolean | string };
  onChange: (key: string, value: boolean | string) => void;
}

const SystemSettings: React.FC<SystemSettingsProps> = ({ settings, onChange }) => {
  return (
   <div className="bg-[#1e2630] p-6 rounded-lg space-y-6 border border-white">
      <h2 className="text-lg font-semibold text-white">System Settings</h2>
      <div className="flex items-center justify-between">
        <span className="text-white">Time Zone</span>
  <InputField value={String(settings['timeZone'])} onChange={(e) => onChange('timeZone', e.target.value)} />
      </div>
      <div className="flex items-center justify-between">
        <span className="text-white">Enable Email Notifications</span>
  <ToggleSwitch checked={Boolean(settings['emailNotifications'])} onChange={(checked) => onChange('emailNotifications', checked)} />
      </div>
      <div className="flex items-center justify-between">
        <span className="text-white">Require 2FA for Admins</span>
  <ToggleSwitch checked={Boolean(settings['require2FA'])} onChange={(checked) => onChange('require2FA', checked)} />
      </div>
      <div className="flex items-center justify-between">
        <span className="text-white">Auto-add new users (Discord)</span>
  <ToggleSwitch checked={Boolean(settings['autoAddDiscord'])} onChange={(checked) => onChange('autoAddDiscord', checked)} />
      </div>
      
      
      
    <div className="flex justify-center mt-12">
    <button className="bg-white text-blue-500 py-2 px-8 rounded-full w-full max-w-xs border border-blue-500 hover:bg-blue-500 hover:text-white transition-all">
      Update Settings
    </button>
  </div>

    </div>
  );
};

export default SystemSettings;
