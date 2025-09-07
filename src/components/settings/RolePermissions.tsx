import React from 'react';
import ToggleSwitch from './ToggleSwitch';

interface RolePermissionsProps {
  permissions: { [key: string]: boolean };
  onChange: (role: string, value: boolean) => void;
}

const RolePermissions: React.FC<RolePermissionsProps> = ({ permissions, onChange }) => {
  const roles = [
    "User Management", 
    "Task Management", 
    "Time Tracking", 
    "View Reports", 
    "Discord Access", 
    "Policy Management"
  ];

  return (
    <div className="bg-[#1e2630] p-6 rounded-lg space-y-4 border border-white">
      <h2 className="text-lg font-semibold text-white">Role Permissions</h2>
      {roles.map((role) => (
        <div key={role} className="flex items-center justify-between">
          <span className="text-white">{role}</span>
          <ToggleSwitch 
            checked={permissions[role]} 
            onChange={(checked) => onChange(role, checked)} 
          />
        </div>
      ))}
       <div className="flex justify-center mt-4">
    <button className="bg-white text-blue-500 py-2 px-8 rounded-full w-full max-w-xs border border-blue-500 hover:bg-blue-500 hover:text-white transition-all">
      Save Permissions
    </button>
  </div>
    </div>
  );
};

export default RolePermissions;
