import React from 'react';

interface InputProps {
  id: string;
  placeholder: string;
  type?: string;
}

const Input: React.FC<InputProps> = ({ id, placeholder, type = 'text' }) => {
  return <input id={id} type={type} placeholder={placeholder} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />;
};

export default Input;