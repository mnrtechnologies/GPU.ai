/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", 
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ["'IBM Plex Mono'", "monospace"],
        sans: ["Helvetica Neue", "Helvetica", "Segoe UI", "Roboto", "Arial", "sans-serif"]
      },
    },
  },
  plugins: [],
}
