import { useState, FC } from 'react';
import { ChevronDown } from '../../assets';

interface SelectDropdownProps {
  error?: string;
  id: string;
  label: string;
  options: string[];
  parentStyles?: string;
  placeholder?: string;
  styles?: string;
}

const SelectDropdown: FC<SelectDropdownProps> = ({
  error,
  id,
  label,
  options,
  parentStyles = '',
  placeholder = 'Select an option...',
  styles = '',
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(placeholder);
  const [isPlaceholder, setIsPlaceholder] = useState(true);

  const handleSelectedItem = (option: string) => {
    setSelectedItem(option);
    setIsDropdownOpen(false);
    setIsPlaceholder(false);
  };

  const toggleDropdown = () => setIsDropdownOpen(prev => !prev);

  return (
    <div className={`w-full ${parentStyles}`}>
      <label htmlFor={id} className="text-sm font-medium text-secondary-200">
        {label}
      </label>
      <div
        id={id}
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
            isPlaceholder ? 'text-secondary-100' : 'text-secondary-300'
          }`}
          onClick={toggleDropdown}
          role="button"
          aria-haspopup="listbox"
          aria-expanded={isDropdownOpen}
        >
          <span>{selectedItem}</span>
          <span
            className={`ml-2 text-lg text-gray-400 transition-transform ${
              isDropdownOpen ? 'rotate-180' : ''
            }`}
          >
            <ChevronDown />
          </span>
        </div>

        {isDropdownOpen && (
          <ul
            className="absolute left-0 top-[calc(100%+5px)] z-30 w-full rounded-md border border-gray-300 bg-white shadow-lg"
            role="listbox"
            aria-activedescendant={selectedItem}
          >
            {options.map(option => (
              <li
                key={option}
                className="px-4 py-2 text-sm transition-colors duration-150 hover:bg-secondary-300 hover:text-white"
                onClick={() => handleSelectedItem(option)}
                role="option"
                aria-selected={selectedItem === option}
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
};

export default SelectDropdown;
