import React, {ChangeEvent} from 'react';

interface InputProps {
  label?: string;
  id: string;
  name: string;
  type?: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  errorMessage?: string;
  isError?: boolean;
  required?: boolean;
}

function Input(
  {
    label,
    id,
    name,
    type = 'text',
    value,
    onChange,
    placeholder = '',
    errorMessage = '',
    isError = false,
    required = false,
  }: InputProps) {

  return (
    <div className="mb-4">
      {label && (
        <label
          htmlFor={id}
          className="block text-sm font-medium text-gray-500 mb-1"
        >
          {label}
          {required && <span className="text-gray-500">*</span>}
        </label>
      )}
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-400 ${
          isError
            ? 'border-red-400 focus:ring-red-400'
            : 'border-gray-300'
        }`}
        aria-invalid={isError}
      />
      {isError && errorMessage && (
        <p className="mt-1 text-sm text-red-500">{errorMessage}</p>
      )}
    </div>
  );
}

export default Input;
