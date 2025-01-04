/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      maxWidth:{
        container: "1440px",
      },
      screens:{
        xs: '320px',
        sm: "375px",
        sml:"500px",
        md: "667px",
        mdl: "768px",
        lg:"960px",
        lgl:"1024px",
        xl: "1280px"
      },
      fontFamily:{
        titleFont: " Roboto",
        bodyFont: 'Poppins',
        logoFont: 'Badeen Display',
        logoFont0: "Rubik Vinyl",
        listFont: 'Anton'
      },
      boxShadow:{
        textShadow:"0px 0px 32px 1px rgba(199,199,199,1)",
        geeksInput:"0 0 3px 2px rgb(228 121 17 / 50%)"
      },
      keyframes: {
        ani: {
          to:{transform: 'rotate(45deg)'}
        },
      },
      animation:{
        ani:'ani 0.5s alternate infinite'
      }
    },
  },
  plugins: [],
}

