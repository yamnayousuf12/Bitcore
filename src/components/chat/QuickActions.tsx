import React from 'react';

interface Action {
  name: string;
  icon: React.ReactNode;
}

interface QuickActionsProps {
  actions: Action[];
}

const QuickActions: React.FC<QuickActionsProps> = ({ actions }) => {
  return (
   <div
  className="bg-gradient-to-b from-white/10 to-blue-900/30 p-6 rounded-lg space-y-4 w-128 mx-auto outline outline-1 outline-white/20"
  style={{
    background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.15) 0%, rgba(19, 43, 96, 0.15) 100%)',
  }}>
      <h2 className="text-xl font-semibold text-white">Quick Actions</h2>
      <div className="grid grid-cols-2 gap-4">
        {actions.map((action, index) => (
         <button
            key={index}
            className="py-5 px-6 bg-[#FFFFFF4D] text-white rounded-full flex items-center justify-center gap-6 hover:bg-[#FFFFFF66] focus:outline-none"
          >
            {action.icon}
            <span className="text-sm">{action.name}</span>
          </button>

        ))}
      </div>
    </div>
  );
};

export default QuickActions;
