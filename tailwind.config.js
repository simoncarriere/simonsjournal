module.exports = {
  // mode: 'jit',
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        background: {
          100: "#F6F6F6"
        } 
      },
      fontFamily: {
        poppins: "Poppins"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
