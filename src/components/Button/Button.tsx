import { FC, ReactNode, MouseEvent } from 'react';

interface ButtonProps {
  ariaLabel?: string;
  children: ReactNode;
  disabled?: boolean;
  icon?: ReactNode;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  styles?: string;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'contained' | 'outlined';
}

const Button: FC<ButtonProps> = ({
  ariaLabel,
  children,
  disabled = false,
  icon,
  onClick,
  styles = '',
  type = 'button',
  variant = 'contained',
}) => {
  const baseClassNames = `px-4.5 rounded-lg py-2.5 font-medium shadow-input outline-none flex items-center justify-center space-x-2`;

  const disabledClassNames = 'cursor-not-allowed opacity-50';

  const variantClassNames =
    variant === 'contained'
      ? `bg-primary-500 text-white border border-primary-500 ${
          disabled
            ? ''
            : 'hover:bg-primary-600 focus:ring focus:ring-primary-100'
        }`
      : `bg-transparent text-secondary-200 border border-borderColor ${
          disabled ? '' : 'hover:bg-gray-100 focus:ring focus:ring-gray-200'
        }`;

  return (
    <button
      type={type}
      className={`${baseClassNames} ${variantClassNames} ${disabled ? disabledClassNames : ''} ${styles}`}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {icon && (
        <span
          className={`flex-shrink-0 ${variant === 'outlined' ? 'text-secondary-300' : 'text-white'}`}
        >
          {icon}
        </span>
      )}
      <span>{children}</span>
    </button>
  );
};

export default Button;
