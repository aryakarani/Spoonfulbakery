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
        // Brand palette - brown centered on #895129
        brand: {
          50:  '#FFF9F7',
          100: '#FCEFEA',
          200: '#F6E1D6',
          300: '#EBC8B5',
          400: '#D9A283',
          500: '#AE6A3E',
          600: '#895129', // primary brand brown
          700: '#6F3F26',
          800: '#55311E',
          900: '#3E2416'
        },
        // Accent palette - green centered on #028E41
        earth: {
          50:  '#E6F7EE',
          100: '#C9F0DE',
          200: '#95E2BF',
          300: '#5FD49E',
          400: '#2AC67D',
          500: '#0DA95F',
          600: '#028E41', // primary accent green
          700: '#027436',
          800: '#025C2C',
          900: '#014A24'
        },
        // Secondary accent mapped to subtle brown tints to keep palette minimal
        warm: {
          50:  '#FFF9F7',
          100: '#FCEFEA',
          200: '#F6E1D6',
          300: '#EBC8B5',
          400: '#D9A283',
          500: '#AE6A3E',
          600: '#895129',
          700: '#6F3F26',
          800: '#55311E',
          900: '#3E2416'
        },
        // Neutral grays - keep for readability
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
        cream: '#FFFFFF',
        chocolate: '#2D2926',
        sage: '#028E41',
        sand: '#FFFFFF',
        terracotta: '#895129',
        // Minimal additions
        pearl: '#FFFFFF',
        charcoal: '#1A1815'
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