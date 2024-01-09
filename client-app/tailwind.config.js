/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#2D4059",
        primary: "#F07B3F",
        secondary: "#EA5455",
        alternate: "#FFD460",
      },
    },
  },
  plugins: [],
};
