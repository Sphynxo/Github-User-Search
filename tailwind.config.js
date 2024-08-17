/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Space Mono", "monospace"],
      },

      colors: {
        blue: "#0079FF",
        grey: "#697C9A",
        metalic: "#4B6A9B",
        ivory: "#F6F8FF",
        light: "#FEFEFE",
        dark: "#1E2A47",
        darker: "#2B3442",
        darkest: "#141D2F",
      },

      boxShadow: {
        shadow: "0px 16px 30px -10px rgba(70, 96, 187, 0.20)",
      },
    },
  },
  plugins: [],
};
