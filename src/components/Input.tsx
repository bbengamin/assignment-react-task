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
        className={`w-full px-3 py-2 rounded-xl border ${
          isError
            ? 'border-red-400 focus:border-red-400 focus:outline-none bg-[#E25E4C1F]'
            : 'border-gray-300  focus:border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#7FBDD966]'
        }`}
        aria-invalid={isError}
      />
      {isError && errorMessage && (
        <div className={'flex items-center gap-2 mt-1'}>
          <img src="/warning.svg" alt="warning-icon" width={13} height={13}/>
          <p className="text-sm text-[]">{errorMessage}</p>
        </div>

      )}
    </div>
  );
}

export default Input;
