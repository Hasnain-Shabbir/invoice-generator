import { FC, ChangeEvent } from 'react';

interface InputProps {
  disabled?: boolean;
  error?: string;
  handleOnChange: (value: string) => void;
  id: string;
  parentStyles?: string;
  placeholder?: string;
  readOnly?: boolean;
  styles?: string;
  title: string;
  type?: 'text' | 'password' | 'email' | 'number' | 'date';
  value: string | number;
}

const Input: FC<InputProps> = ({
  disabled = false,
  error,
  handleOnChange,
  id,
  parentStyles = '',
  placeholder = 'Placeholder...',
  readOnly = false,
  styles = '',
  title,
  type = 'text',
  value,
}) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    if (type === 'number') {
      const numericValue = parseFloat(inputValue);
      if (numericValue < 0) {
        return;
      }
    }

    if (!disabled && !readOnly) {
      handleOnChange(inputValue);
    }
  };

  const baseStyles = `transition-ring mt-1.5 w-full rounded-md border px-3.5 py-2.5 shadow-input outline-none duration-100 ease-in-out placeholder:font-light placeholder:text-gray-400 focus:outline-none`;
  const disabledOrReadOnlyStyles = `bg-gray-50 cursor-not-allowed`;
  const errorStyles = error
    ? 'border-red-500 focus:border-red-500'
    : 'border-borderColor focus:border-gray-400';

  return (
    <div className={`${parentStyles}`}>
      <label htmlFor={id} className="text-sm font-medium text-secondary-200">
        {title}
      </label>
      <input
        id={id}
        value={value}
        onChange={handleChange}
        type={type}
        placeholder={placeholder}
        className={`${baseStyles} ${disabled || readOnly ? disabledOrReadOnlyStyles : ''} ${errorStyles} ${styles}`}
        disabled={disabled}
        readOnly={readOnly}
        min={type === 'number' ? 0 : undefined}
      />
      {error && (
        <span className="mt-1 block text-sm text-red-500">{error}</span>
      )}
    </div>
  );
};

export default Input;
