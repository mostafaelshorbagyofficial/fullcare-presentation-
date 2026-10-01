/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        pharma: {
          primary: '#49B6EE',
          deep: '#0D0466',
          secondary: '#5EAED9',
          light: '#D6F7FE',
          support: '#1D4696',
          white: '#FFFFFF',
        },
        brand: {
          50: '#f0f9ff',
          100: '#e0f7fe',
          200: '#D6F7FE',
          300: '#7dd3fc',
          400: '#5EAED9',
          500: '#49B6EE',
          600: '#2b9cd9',
          700: '#1D4696',
          800: '#14316d',
          900: '#0D0466',
          950: '#060233',
        },
        navy: {
          800: '#141d4a',
          900: '#0c1038',
          950: '#060424',
        },
        accent: {
          cyan: '#49B6EE',
          blue: '#5EAED9',
          deep: '#0D0466',
          support: '#1D4696',
          light: '#D6F7FE',
          gold: '#f59e0b',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Tajawal', 'Cairo', 'system-ui', 'sans-serif'],
        arabic: ['Tajawal', 'Cairo', 'IBM Plex Sans Arabic', 'sans-serif'],
        heading: ['Outfit', 'Cairo', 'Tajawal', 'sans-serif'],
        cinematic: ['Syne', 'Outfit', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in-up': 'fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in-down': 'fadeInDown 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'scale-in': 'scaleIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 4s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.96)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.85', transform: 'scale(1.02)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        glow: {
          '0%, 100%': { opacity: '0.4', filter: 'blur(20px)' },
          '50%': { opacity: '0.7', filter: 'blur(28px)' },
        }
      }
    },
  },
  plugins: [],
}
