const ChevronDown = ({ color = '#667085', size = '20' }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 21 20"
    >
      <path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.667"
        d="M5.5 7.5l5 5 5-5"
      ></path>
    </svg>
  );
};

export default ChevronDown;
