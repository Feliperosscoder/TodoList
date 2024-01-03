/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "1280px"
    },
    extend: {
      fontFamily: {
        montserrat: "Montserrat",
        poppins: "Poppins"
      }
    },
    flex: {
      "1": "1 1 100%" 
    },
    gridTemplateColumns: {
      "3": "1fr 1fr 1fr"
    }
  },
  plugins: [],
}

