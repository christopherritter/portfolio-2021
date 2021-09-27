module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      padding: ['hover'],
      backgroundColor: ['active'],
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}