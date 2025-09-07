"use client";
import React, { useState } from 'react';
import RolePermissions from '@/components/settings/RolePermissions';
import SystemSettings from '@/components/settings/SystemSettings';
import DiscordIntegration from '@/components/settings/DiscordIntegration';

const SettingsPage: React.FC = () => {
  const [rolePermissions, setRolePermissions] = useState({
    'User Management': true,
    'Task Management': false,
    'Time Tracking': true,
    'View Reports': false,
    'Discord Access': true,
    'Policy Management': true
  });

  const [systemSettings, setSystemSettings] = useState({
    timeZone: 'UTC - 500 Eastern Time',
    emailNotifications: true,
    require2FA: false,
    autoAddDiscord: true
  });

  const [discord, setDiscord] = useState({
    serverId: '123456789',
    apiKey: '123456789',
    status: 'Status: Connected(last sync 5 minutes ago)'
  });

  const handlePermissionsChange = (role: string, value: boolean) => {
    setRolePermissions((prev) => ({ ...prev, [role]: value }));
  };

  const handleSettingsChange = (key: string, value: string | boolean) => {
    setSystemSettings((prev) => ({ ...prev, [key]: value }));
  };

  const handleDiscordChange = (key: string, value: string) => {
    setDiscord((prev) => ({ ...prev, [key]: value }));
  };

  const syncDiscord = () => {
    // Sync logic here
  };

  return (
    <div className="space-y-8 ">
      {/* Container for RolePermissions and SystemSettings to be displayed in a row */}
      <div className="flex gap-8">
        <div className="flex-1">
          <RolePermissions permissions={rolePermissions} onChange={handlePermissionsChange} />
        </div>
        <div className="flex-1">
          <SystemSettings settings={systemSettings} onChange={handleSettingsChange} />
        </div>
      </div>
      
      {/* Discord Integration section */}
      <DiscordIntegration 
        serverId={discord.serverId} 
        apiKey={discord.apiKey} 
        onChange={handleDiscordChange} 
        onSync={syncDiscord}
      />
    </div>
  );
};

export default SettingsPage;

