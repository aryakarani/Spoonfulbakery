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
        // Primary palette - earthy mud browns
        brand: {
          50: '#FDFCFB',
          100: '#F9F6F3',
          200: '#F0E9E2',
          300: '#E2D5C8',
          400: '#C9B5A0',
          500: '#A8936F',  // Main brand color - light mud brown
          600: '#8B7659',
          700: '#6B5A45',
          800: '#4E4133',
          900: '#352C23'
        },
        // Accent palette - earthy sage green
        earth: {
          50: '#F8FAF7',
          100: '#F0F4ED',
          200: '#E2E9DD',
          300: '#CBD8C3',
          400: '#A8BF9F',
          500: '#8B9F7B',  // Main earth green
          600: '#708060',
          700: '#586548',
          800: '#424B38',
          900: '#2E352A'
        },
        // Secondary accent - warm earth tones
        warm: {
          50: '#FDFAF7',
          100: '#FAF4ED',
          200: '#F5E7DB',
          300: '#EDD4BA',
          400: '#E0BC96',
          500: '#D4A574',  // Warm earth tone
          600: '#B88A5A',
          700: '#966E45',
          800: '#715338',
          900: '#4D392A'
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
        sage: '#8B9F7B',  // Soft sage green
        sand: '#FAF7F5',  // Light warm sand
        terracotta: '#D4A574',  // Soft terracotta
        // New additions for modern feel
        pearl: '#FFFFFF',  // Pure white
        charcoal: '#1A1815',  // Deep charcoal for contrast
        blush: '#F5E7DB',  // Soft blush accent
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