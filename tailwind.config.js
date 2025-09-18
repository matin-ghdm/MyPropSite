/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'peyda': ['PeydaWeb', 'sans-serif'],
        'sans': ['PeydaWeb', 'sans-serif'],
      },
      fontWeight: {
        'normal': '400',
        'extrabold': '800',
      }
    },
  },
  plugins: [],
}
