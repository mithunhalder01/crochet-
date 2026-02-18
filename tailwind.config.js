/** @type {import('tailwindcss').Config} */

// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#FFB1B1",   // Cute Pink
          secondary: "#FFD5B4", // Soft Peach
          bg: "#FFF9F0",        // Creamy Background
          text: "#4A3434",      // Soft Brown
        }
      }
    }
  }
}

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
