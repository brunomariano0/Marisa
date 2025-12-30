/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'wedding-gold': '#C5A059',
        'wedding-gold-light': '#E5C585',
        'wedding-champagne': '#F9F4EA',
        'wedding-sand': '#F4F1EE',
        'wedding-charcoal': '#2C2C2C',
        'wedding-gray': '#8A8A8A',
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Lato', 'sans-serif'],
      },
      letterSpacing: {
        'widest-xl': '0.25em',
      },
    },
  },
  plugins: [],
}