/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true
    },
    extend: {
      colors: {
        primary: {
          "50": "#d5d8dc",
          "100": "#c0c5cb",
          "200": "#abb2b9",
          "300": "#19AB8E",
          "400": "#1ABC9C",
          "500": "#6b7885",
          "600": "#566573",
          "700": "#283848",
          "800": "#2C3E50",
        }
      },
      screens: {
        "2xl": "1320px"
      }
    },
  },
  plugins: [],
}

