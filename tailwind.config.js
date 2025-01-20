/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'soft-blue': '#A8DADC',
        'light-gold': '#F4C95D',
        'soft-green': '#98C1D9',
        'light-gray': '#F0F4F8',
        'golden-yellow': '#FFB703',
        'dark-blue': '#457B9D',
        'white': '#FFFFFF',
        'dark-gray': '#333333',
      },
      fontFamily: {
        'body': ['Lato', 'sans-serif'],
        'heading': ['Playfair Display', 'serif'],
      },
      fontSize: {
        '4xl': '2.5rem',  // Main heading
        '3xl': '2rem',    // Section headings
        'base': '1rem',   // Body text
        'sm': '0.875rem', // Subtext
      },
      boxShadow: {
        'DEFAULT': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.15), 0 2px 4px -1px rgba(0, 0, 0, 0.1)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
      backgroundImage: {
        'gradient-hero': 'linear-gradient(to bottom right, #A8DADC, #F4C95D)',
      },
      borderRadius: {
        'lg': '0.5rem',
      },
      transitionProperty: {
        'colors': 'color, background-color, border-color, text-decoration-color, fill, stroke',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}
