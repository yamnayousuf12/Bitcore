import React from 'react';

interface InputFieldProps {
  label?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({ label, value, onChange }) => {
  return (
    <div className="flex flex-col space-y-2">
      {label && <label className="text-white">{label}</label>}
      <input 
        type="text" 
        value={value} 
        onChange={onChange} 
        className="p-2 rounded-md bg-gray-700 text-white w-80 border border-white" // Custom width (e.g., 24rem)
      />
    </div>
  );
};

export default InputField;
