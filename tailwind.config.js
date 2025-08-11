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
        // Earthy brown palette
        brand: {
          50: '#FAF8F5',
          100: '#F5F0E8',
          200: '#E8DFD3',
          300: '#D4C4B0',
          400: '#BCA58C',
          500: '#9B8368',  // Main earthy brown
          600: '#7D6A55',
          700: '#5F5043',
          800: '#443A32',
          900: '#2C251F'
        },
        // Earthy green palette
        earth: {
          50: '#F7FAF5',
          100: '#EFF5E9',
          200: '#DDE8D2',
          300: '#C2D5B0',
          400: '#A3BD8A',
          500: '#7FA55F',  // Main earthy green
          600: '#658C4A',
          700: '#4E6E39',
          800: '#3A522B',
          900: '#263619'
        },
        // Warm accent colors
        warm: {
          50: '#FDF9F3',
          100: '#FBF3E7',
          200: '#F5E4C8',
          300: '#EDD2A4',
          400: '#E2BA7F',
          500: '#D4A574',  // Warm accent
          600: '#B88D5E',
          700: '#936F49',
          800: '#6E5337',
          900: '#493625'
        },
        // Base colors
        cream: '#FFFFFF',  // Changed to pure white
        chocolate: '#3A322C',  // Darker earthy brown for text
        sage: '#A8C09A',  // Soft sage green
        sand: '#F5F2ED',  // Light sand color for subtle backgrounds
        terracotta: '#C17767'  // Terracotta accent
      },
      boxShadow: {
        soft: '0 4px 20px rgba(0,0,0,0.04)',
        medium: '0 8px 30px rgba(0,0,0,0.06)',
        large: '0 16px 48px rgba(0,0,0,0.08)'
      },
      fontFamily: {
        sans: ['Lato', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'ui-serif', 'Georgia', 'serif'],
        cursive: ['Dancing Script', 'cursive']
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 2s infinite',
        'marquee-slower': 'marquee-x 60s linear infinite',
        'parallax': 'parallax 10s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}