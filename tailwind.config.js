/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bgmain': "#1b1c21",
        'bgsec': "#282c35",
        'txtsec': "#babcbb",
        'green': "#20cc50"
      },
    },
  },
  plugins: [],
}