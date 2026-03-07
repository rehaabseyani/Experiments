/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/renderer/index.html",
    "./src/renderer/src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#FFD600",
        "background-light": "#F4F0E6",
        "background-dark": "#231f0f",
        "ink": "#1A1A1A",
        "surface": "#FFFFFF",
        "success": "#2ED573",
        "accent-red": "#FF4757",
        "accent-blue": "#5352ED",
        "muted": "#94A3B8"
      },
      fontFamily: {
        "display": ["'Dela Gothic One'", "cursive"],
        "body": ["'Space Grotesk'", "sans-serif"],
        "mono": ["'JetBrains Mono'", "monospace"],
      },
      boxShadow: {
          "hard": "4px 4px 0px 0px #1A1A1A",
          "hard-sm": "2px 2px 0px 0px #1A1A1A",
          "hard-lg": "8px 8px 0px 0px #1A1A1A",
          "hard-hover": "6px 6px 0px 0px #1A1A1A",
      },
      backgroundImage: {
          "diagonal-stripes": "repeating-linear-gradient(45deg, #FFD600 0, #FFD600 10px, #F4F0E6 10px, #F4F0E6 20px)",
          "diagonal-stripes-sm": "repeating-linear-gradient(45deg, #e5e5e5 0, #e5e5e5 5px, transparent 5px, transparent 10px)",
      },
      borderWidth: {
          "3": "3px",
      },
    },
  },
  plugins: [],
}