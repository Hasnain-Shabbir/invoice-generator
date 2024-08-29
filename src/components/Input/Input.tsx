import { FC, ChangeEvent } from 'react';

interface InputProps {
  error?: string;
  handleOnChange: (value: string) => void;
  id: string;
  placeholder?: string;
  styles?: string;
  title: string;
  type?: 'text' | 'password' | 'email' | 'number';
  value: string | number;
}

const Input: FC<InputProps> = ({
  error,
  handleOnChange,
  id,
  placeholder = 'Placeholder...',
  styles = '',
  title,
  type = 'text',
  value,
}) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    handleOnChange(e.target.value);
  };

  return (
    <div>
      <label htmlFor={id} className="text-sm font-medium text-secondary-200">
        {title}
      </label>
      <input
        id={id}
        value={value}
        onChange={handleChange}
        type={type}
        placeholder={placeholder}
        className={`transition-ring mt-1.5 w-full rounded-md border px-3.5 py-2.5 shadow-input outline-none duration-100 ease-in-out placeholder:font-light placeholder:text-gray-400 focus:outline-none ${error ? 'border-red-500 focus:border-red-500' : 'border-borderColor focus:border-gray-400'} ${styles}`}
      />
      {error && (
        <span className="mt-1 block text-sm text-red-500">{error}</span>
      )}
    </div>
  );
};

export default Input;
