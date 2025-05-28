// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        neutralLight: "#f5f7fa",   // very soft gray-blue background
        neutralMid: "#94a3b8",     // medium slate gray (borders, secondary text)
        neutralDark: "#475569",    // dark slate blue-gray (main text)
        accent: "#14b8a6",         // teal-ish calm blue-green for buttons/links
        accentHover: "#0d9488",    // darker teal for hover states
      },
    },
  },
  plugins: [],
}
