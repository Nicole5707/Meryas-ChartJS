/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      keyframes: {
        wave: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      animation: {
        wave: 'wave 15s ease infinite',
      },
      backgroundImage: theme => ({
        'wave-pattern': "linear-gradient(to top right, #fff 8%, #97E0FF 40%, #fff 90%)",
      }),
      backgroundSize: {
        '300%': '300%',
      },
    },
  },
  plugins: [],
};
