import { forwardRef, useEffect, useRef, useState } from 'react';
import { ChevronDown } from '../../assets';

interface SelectDropdownProps {
  error?: string;
  id: string;
  label: string;
  options: string[];
  onChange: (selectedItem: string) => void;
  parentStyles?: string;
  placeholder?: string;
  styles?: string;
  value: string;
}

const SelectDropdown = forwardRef<HTMLDivElement, SelectDropdownProps>(
  (
    {
      error,
      id,
      label,
      options,
      value,
      onChange,
      parentStyles = '',
      placeholder = 'Select an option...',
      styles = '',
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ref,
  ) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const handleSelectedItem = (option: string) => {
      onChange(option);
      setIsDropdownOpen(false);
    };

    const toggleDropdown = () => setIsDropdownOpen(prev => !prev);

    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    useEffect(() => {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, []);

    return (
      <div className={`w-full ${parentStyles}`}>
        <label htmlFor={id} className="text-sm font-medium text-secondary-200">
          {label}
        </label>
        <div
          id={id}
          ref={dropdownRef}
          className={`relative mt-1.5 w-full cursor-pointer rounded-md border px-3.5 py-2.5 shadow-input transition-all duration-100 ease-in-out ${
            error
              ? 'border-red-500'
              : isDropdownOpen
                ? 'border-gray-400'
                : 'border-borderColor'
          } ${styles}`}
        >
          <div
            className={`flex items-center justify-between font-normal ${
              value === '' || value === placeholder
                ? 'text-secondary-100'
                : 'text-secondary-300'
            } cursor-pointer`}
            onClick={toggleDropdown}
            role="button"
            aria-expanded={isDropdownOpen}
            aria-haspopup="true"
          >
            {value === '' || value === placeholder ? placeholder : value}
            <span
              className={`transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
            >
              <ChevronDown />
            </span>
          </div>
          {isDropdownOpen && (
            <ul className="absolute left-0 z-10 mt-3 w-full overflow-auto rounded-md border border-gray-300 bg-white shadow-lg">
              {options.map(option => (
                <li
                  key={option}
                  className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                  onClick={() => handleSelectedItem(option)}
                >
                  {option}
                </li>
              ))}
            </ul>
          )}
        </div>
        {error && (
          <span className="mt-1 block text-sm text-red-500">{error}</span>
        )}
      </div>
    );
  },
);

export default SelectDropdown;
