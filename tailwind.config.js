/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        20: "#d7581c",
        40: "#0d2f53",
        60:"#d4d4d4",
        // 60: "#ece5d8",
        // 20: "#f2a92c",
        // 40: "#353c43",
        // 60: "#e9e6e4",
      },
    },
  },
  plugins: [],
};
