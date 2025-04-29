/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brandDark: "#D4C2C2",
        brandBg: "#471D0F",
      },
      fontFamily :{
        merriweather: ["Merriweather", 'serif'],
        montserrat: ["Montserrat", 'sans-serif'],
      },
    },
  },
  plugins: [],
}

