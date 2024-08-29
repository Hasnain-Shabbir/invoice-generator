/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        cm: '0px 8px 8px -4px rgba(16, 24, 40, 0.03), 0px 20px 24px 0px rgba(16, 24, 40, 0.08)',
      },
      colors: {
        primary: {
          50: '#bfabec',
          100: '#b29ae8',
          200: '#a589e4',
          300: '#9978e1',
          400: '#8c67dd',
          500: '#7F56D9',
          600: '#724dc3',
          700: '#6645ae',
          800: '#593c98',
          900: '#4c3482',
        },
        secondary: {
          100: '#667085',
          200: '#344054',
          300: '#101828',
        },
        borderColor: '#D0D5DD',
      },
      maxWidth: {
        container: '1376px',
      },
    },
    plugins: [],
  },
};
