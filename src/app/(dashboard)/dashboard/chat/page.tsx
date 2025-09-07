import React from 'react';
import ActiveChats from '@/components/chat/ActiveChats';
import QuickActions from '@/components/chat/QuickActions';
import QuickConnect from '@/components/chat/QuickConnect';
import RecentUser from '@/components/chat/RecentUser';
import DiscordLink from '@/components/chat/DiscordLink';
import { FaUser, FaUserPlus, FaSync, FaHandshake } from 'react-icons/fa';

const Page: React.FC = () => {
  const activeChats: {
    name: string;
    status: 'online' | 'away' | 'busy';
    time: string;
    message: string;
    avatarUrl: string;
  }[] = [
    { 
      name: 'Ayesha Kamdar', 
      status: 'online',
      time: '05 minutes ago', 
      message: "I'll send those docs later today...", 
      avatarUrl: 'https://ui-avatars.com/api/?name=Ayesha+Kamdar&background=0D8ABC&color=fff' 
    },
    { 
      name: 'Sara Ali', 
      status: 'away',
      time: '08 minutes ago', 
      message: 'Sure, let’s discuss tomorrow at...', 
      avatarUrl: 'https://ui-avatars.com/api/?name=Sara+Ali&background=0D8ABC&color=fff' 
    }
  ];

  const quickActions = [
    { name: 'Add User', icon: <FaUser /> },
    { name: 'Create Group', icon: <FaUserPlus /> },
    { name: 'Refresh', icon: <FaSync /> },
    { name: 'Add Friend', icon: <FaHandshake /> }
  ];

  const quickConnect: { name: string; status: 'online' | 'away' | 'busy' }[] = [
    { name: 'Ayesha Kamdar', status: 'online' },
    { name: 'Mahveen Fashi', status: 'away' },
    { name: 'Aleeza Hussain', status: 'busy' }
  ];

  const recentUsers: { name: string; status: 'online' | 'offline' }[] = [
    { name: 'Aqsa Iqbal', status: 'online' },
    { name: 'Ahmed', status: 'offline' }
  ];

  return (
    <div className="space-y-6">
      {/* Flex container for ActiveChats and QuickActions */}
      <div className="flex space-x-6">
        <div className="flex-1">
          <ActiveChats chats={activeChats} />
        </div>
        <div className="flex-1">
          <QuickActions actions={quickActions} />
        </div>
      </div>

      {/* Flex container for QuickConnect and RecentUser */}
      <div className="flex space-x-8">
        <QuickConnect connections={quickConnect} />
        <RecentUser users={recentUsers} />
      </div>

      <div className="flex space-x-4">  {/* Flex container for horizontal layout */}
        <DiscordLink 
          link="/discord/chat" 
          buttonText="Open Chat with HR" 
        />
        <DiscordLink 
          link="/discord/reports" 
          buttonText="Open Daily Reports"
        />
      </div>
    </div>
  );
};

export default Page;
