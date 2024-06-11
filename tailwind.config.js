/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    container: {
      padding: "1rem",
      center: true,
    },
    colors: {
      primary: "#64ffda",
      secondary: "#0a192f",
      textPrimary: "#d9e1ef",
      textLight: "#ccd6f6",
      text: "#8892b0",
      navShadow: "rgba(2,12,27,0.7)",
      darkPrimary: "#495670",
      line: "#233554",
    },
  },
  darkMode: "class",
  plugins: [],
};
