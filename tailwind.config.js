/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary
        primary: "#6316DB",       // Buttons and key elements
        // Blues
        "light-blue": "#67A0F3",  // Occasional backgrounds
        "lightest-blue": "#F0F5FE",
        // Pinks
        "light-pink": "#FE68B0",
        "lightest-pink": "#FEF1F7",
        // Grays
        "light-gray": "#F8F8F8",  // Background
        "text-primary": "#000000", // Main text
        "text-secondary": "#6D6D6D", // Secondary text
      },
      fontFamily: {
        sans: ["Nunito", "sans-serif"], // Default sans-serif font
      },
    },
  },
  plugins: [],
}