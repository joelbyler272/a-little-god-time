module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#A8DADC',
        'secondary': '#F4C95D',
        'accent': '#98C1D9',
        'text': '#333333'
      },
      fontFamily: {
        'sans': ['Open Sans', 'sans-serif'],
        'serif': ['Playfair Display', 'serif']
      }
    }
  },
  plugins: []
}