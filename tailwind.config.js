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
          50:  '#F7F4F1',
          100: '#EDE3D9',
          200: '#DAC4B2',
          300: '#C2A184',
          400: '#9D7755',
          500: '#7A5436',  // Rich earthy brown
          600: '#5F422A',
          700: '#4B3522',
          800: '#3A291A',
          900: '#261A10'
        },
        // Accent palette - rich earthy green
        earth: {
          50:  '#F2F7F4',
          100: '#DFEFE6',
          200: '#BEE0CC',
          300: '#95C9AE',
          400: '#5FA381',
          500: '#3E7F5D',  // Rich earthy green
          600: '#2F6D4D',
          700: '#285A40',
          800: '#214534',
          900: '#173026'
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
        cream: '#FFFFFF',  // Pure white base
        chocolate: '#2D2926',  // Rich dark brown for text
        sage: '#3E7F5D',  // Align with new earth 500
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