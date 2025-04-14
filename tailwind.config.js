/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}', // Adjust this path to match your project structure
  ],
  theme: {
    extend: {
      colors: {
        orange: {
          500: '#FF6B35',
          600: '#E65A2B',
        },
        gold: {
          300: '#F5D07A',
          400: '#D4AF37',
          500: '#C5A227',
        },
        gray: {
          800: '#2D2D2D',
          900: '#1A1A1A',
        },
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
