const Trash = ({ color = '#101828', size = '24' }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M3 6h2m0 0h16M5 6v14a2 2 0 002 2h10a2 2 0 002-2V6H5zm3 0V4a2 2 0 012-2h4a2 2 0 012 2v2m-6 5v6m4-6v6"
      ></path>
    </svg>
  );
};

export default Trash;
