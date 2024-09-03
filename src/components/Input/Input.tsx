import { forwardRef, InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  disabled?: boolean;
  error?: string;
  id: string;
  parentStyles?: string;
  placeholder?: string;
  readOnly?: boolean;
  styles?: string;
  title: string;
  type?: 'text' | 'password' | 'email' | 'number' | 'date';
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      disabled = false,
      error,
      id,
      parentStyles = '',
      placeholder = 'Placeholder...',
      readOnly = false,
      styles = '',
      title,
      type = 'text',
      ...otherProps
    },
    ref,
  ) => {
    const baseStyles = `transition-ring mt-1.5 w-full placeholder:text-secondary-100 rounded-md border px-3.5 py-2.5 shadow-input outline-none duration-100 ease-in-out placeholder:font-light placeholder:text-gray-400 focus:outline-none`;
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
          type={type}
          placeholder={placeholder}
          className={`${baseStyles} ${disabled || readOnly ? disabledOrReadOnlyStyles : ''} ${errorStyles} ${styles}`}
          disabled={disabled}
          min={type === 'number' ? 0 : undefined}
          ref={ref}
          {...otherProps}
        />
        {error && (
          <span className="mt-1 block text-sm text-red-500">{error}</span>
        )}
      </div>
    );
  },
);

export default Input;
