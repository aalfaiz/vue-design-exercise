/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-slate-blue": "#7857FF",
        "light-royal-blue": "#2E2BE9",
        "light-lavender": "#C8C7FF",
        "dark-gray-blue": "#303B5A",
      },
    },
  },
  plugins: [],
};

