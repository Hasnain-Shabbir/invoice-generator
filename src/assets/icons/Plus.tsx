const Plus = ({ color = '#fff', size = '20' }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 20 20"
    >
      <path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.67"
        d="M10 4.167v11.666M4.167 10h11.666"
      ></path>
    </svg>
  );
};

export default Plus;
