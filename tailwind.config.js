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
        'custom-lighterGreen': "#EDF4EA",
        'custom-lightestGreen': "#C9D4C5",
        "custom-colorGrey": "#4D4D4D",
        "custom-buttonGrey": "#999C99",

      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
};
