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
        // Primary palette - sophisticated neutral with warmth
        brand: {
          50: '#FDFCFB',
          100: '#FAF7F5',
          200: '#F5EDE7',
          300: '#EBDDD4',
          400: '#DCC5B4',
          500: '#C8A882',  // Main brand color - warm gold
          600: '#B08968',
          700: '#8F6A4E',
          800: '#6B4E3A',
          900: '#4A3528'
        },
        // Accent palette - modern sage green
        earth: {
          50: '#F8FAF7',
          100: '#F0F4ED',
          200: '#E2E9DD',
          300: '#CBD8C3',
          400: '#A8BF9F',
          500: '#7B9B6F',  // Modern sage green
          600: '#5F7A55',
          700: '#4A5F43',
          800: '#384835',
          900: '#2A352A'
        },
        // Secondary accent - soft coral/peach
        warm: {
          50: '#FFF9F7',
          100: '#FFF2ED',
          200: '#FFE4DB',
          300: '#FFCDB8',
          400: '#FFB094',
          500: '#FF9270',  // Soft coral
          600: '#F07050',
          700: '#D85540',
          800: '#B84438',
          900: '#8F3530'
        },
        // Neutral grays - modern and clean
        neutral: {
          50: '#FAFAFA',
          100: '#F5F5F5',
          200: '#E5E5E5',
          300: '#D4D4D4',
          400: '#A3A3A3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717'
        },
        // Base colors
        cream: '#FDFCFB',  // Soft off-white
        chocolate: '#2D2926',  // Rich dark brown for text
        sage: '#A8BF9F',  // Soft sage green
        sand: '#FAF7F5',  // Light warm sand
        terracotta: '#E8A598',  // Soft terracotta
        // New additions for modern feel
        pearl: '#FFFEFA',  // Ultra light cream
        charcoal: '#1A1815',  // Deep charcoal for contrast
        blush: '#FFE8E1',  // Soft blush accent
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