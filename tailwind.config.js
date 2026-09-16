/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fdf2f6',
          100: '#fce7f0',
          200: '#f9d0e2',
          300: '#f5a7cb',
          400: '#ed6ea8',
          500: '#db045a', // Brand Primary Magenta / Fuchsia
          600: '#be034d',
          700: '#9d023f',
          800: '#810535',
          900: '#6d072f',
          dark: '#45031e',
        },
        teal: {
          50: '#f0fcfc',
          100: '#d7f7f7',
          200: '#b2efef',
          300: '#7be1e3',
          400: '#3acbd0',
          500: '#15b6b8', // Brand Medical Cyan
          600: '#0c8384',
          700: '#0c696a',
          800: '#0e5455',
          900: '#104647',
        },
        cream: '#FFF9FB',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Outfit', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'brand': '0 10px 30px -10px rgba(219, 4, 90, 0.25)',
        'brand-lg': '0 20px 40px -15px rgba(219, 4, 90, 0.35)',
        'teal-glow': '0 10px 30px -10px rgba(21, 182, 184, 0.3)',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
