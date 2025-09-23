import React from 'react';

interface ToggleSwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ checked, onChange }) => {
  return (
    <label className="relative inline-block w-10 h-6">
      <input 
        type="checkbox" 
        className="sr-only" 
        checked={checked} 
        onChange={(e) => onChange(e.target.checked)} 
      />
      {/* Background color changes based on 'checked' state */}
      <span 
        className={`block w-10 h-6 rounded-full transition-colors ${checked ? 'bg-Blue' : 'bg-gray'}`}
      ></span>
      <span 
        className={`absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full transition-transform ${checked ? 'transform translate-x-4' : ''}`}
      ></span>
    </label>
  );
};

export default ToggleSwitch;
