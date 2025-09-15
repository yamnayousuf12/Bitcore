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
  className="bg-gradient-to-b from-white/10 to-Blue/30 p-6 rounded-lg space-y-4 w-128 mx-auto outline outline-1 outline-white/20"
  style={{
    background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.15) 0%, rgba(19, 43, 96, 0.15) 100%)',
  }}>
      <h2 className="text-xl font-semibold text-white">Quick Actions</h2>
      <div className="grid grid-cols-2 gap-4">
        {actions.map((action, index) => (
         <button
            key={index}
            className="md:py-4 py-2 md:px-5 bg-[#FFFFFF4D] text-white rounded-full flex items-center justify-center gap-6 hover:bg-[#FFFFFF66] focus:outline-none"
          >
            {action.icon}
            <span className="md:text-sm text-xs">{action.name}</span>
          </button>

        ))}
      </div>
    </div>
  );
};

export default QuickActions;
