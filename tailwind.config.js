/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        '128': '32rem',
      },
      colors: {
        'custom-green': '#1F4320',
        'custom-lightGreen': '#3C843F',
        'custom-midGreen': '#397B3C',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
};
