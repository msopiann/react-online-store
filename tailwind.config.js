/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-color": "#f0f0f0",
        "other-color": "#ffc633",
        "second-color": "#616060",
      },
      fontSize: {
        "h1-size": "5.5rem",
        "h2-size": "3.5rem",
        "p-size": "1rem",
      },
    },
  },
  plugins: [],
};
