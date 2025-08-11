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
        // Primary palette - light caramel browns (kawaii bakery vibe)
        brand: {
          50:  '#FFF9F5',
          100: '#FCEFE5',
          200: '#F6E0CF',
          300: '#EBC9AD',
          400: '#D9AB86',
          500: '#C48A62',
          600: '#A9704F',
          700: '#8C5A41',
          800: '#6E4634',
          900: '#573829'
        },
        // Accent palette - pastel pistachio greens
        earth: {
          50:  '#F6FBF6',
          100: '#EAF7EF',
          200: '#D6F0E1',
          300: '#BCE6D0',
          400: '#8FD6B6',
          500: '#60C39A',
          600: '#46AD86',
          700: '#389273',
          800: '#2F765F',
          900: '#275F4E'
        },
        // Secondary accent - warm peach/rose tones
        warm: {
          50: '#FFF7F8',
          100: '#FFEFF1',
          200: '#FFDDE1',
          300: '#FFC5CB',
          400: '#FF9FB0',
          500: '#FF7A96',
          600: '#E85E7E',
          700: '#C94D69',
          800: '#A03E55',
          900: '#7F3245'
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
        // Base colors (lightened accents)
        cream: '#FFFFFF',
        chocolate: '#2D2926',
        sage: '#60C39A',
        sand: '#FEFAF6',
        terracotta: '#C48A62',
        // New additions for modern feel
        pearl: '#FFFFFF',
        charcoal: '#1A1815',
        blush: '#FFEFF1'
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