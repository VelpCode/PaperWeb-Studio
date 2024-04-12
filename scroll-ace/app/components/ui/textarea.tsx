import React from 'react';

interface TextareaProps {
  id: string;
  placeholder: string;
  className?: string;
}

const Textarea: React.FC<TextareaProps> = ({ id, placeholder, className }) => {
  return <textarea id={id} placeholder={placeholder} className={`mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${className || ''}`} />;
};

export default Textarea;