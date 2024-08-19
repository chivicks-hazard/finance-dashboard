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
        "bgter": "#3d414a",
        'txtsec': "#babcbb",
        "txtter": "#c4c7cf",
        'green': "#20cc50"
      },
    },
  },
  plugins: [],
}