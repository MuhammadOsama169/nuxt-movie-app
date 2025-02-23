/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // colors: {

      //   "apple-green": "#046E1B",
      //   "dire-wolf": "#292727",
      // },
      screens: {
        xs: "0px",
        sm: "360px",
        md: "768px",
        lg: "1000px",
        xl: "1200px",
        "2xl": "1300px",
        "3xl": "1500px",
        "4xl": "1600px",
      },
      fontFamily: {
        Montserrat: "Montserrat, sans-serif",
      },
      container: {
        center: true,
        padding: "2rem",
      },
    },
  },
  plugins: [],
};
