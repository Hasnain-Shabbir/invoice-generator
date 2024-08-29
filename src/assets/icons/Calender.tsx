const Calender = ({ color = '#667085', size = '20' }) => {
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
        strokeWidth="1.667"
        d="M13.333 1.667V5M6.667 1.667V5M2.5 8.333h15m-13.333-5h11.666c.92 0 1.667.747 1.667 1.667v11.667c0 .92-.746 1.666-1.667 1.666H4.167c-.92 0-1.667-.746-1.667-1.666V5c0-.92.746-1.667 1.667-1.667z"
      ></path>
    </svg>
  );
};

export default Calender;
