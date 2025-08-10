/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx,js,jsx}",
    "./data/**/*.{ts,tsx}",
    "./public/**/*.svg"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#FFF5F2',
          100: '#FDEDE9',
          200: '#F7D6CF',
          300: '#EFB9AF',
          400: '#E19B91',
          500: '#C6796B',
          600: '#A85F54',
          700: '#8A4C43',
          800: '#6C3A33',
          900: '#4D2722'
        },
        warm: {
          50: '#FAF5F0',
          100: '#F5E6D3',
          200: '#EBCDA7',
          300: '#E0B47B',
          400: '#D4A574',
          500: '#C89656',
          600: '#B07C3E',
          700: '#8B6330',
          800: '#6B4A24',
          900: '#4A3218'
        },
        cream: '#FFF7F2',
        chocolate: '#5B3A2E',
        pistachio: '#C7E2C1'
      },
      boxShadow: {
        soft: '0 8px 30px rgba(0,0,0,0.08)'
      },
      fontFamily: {
        sans: ['Lato', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'ui-serif', 'Georgia', 'serif'],
        cursive: ['Dancing Script', 'cursive']
      }
    },
  },
  plugins: [],
}