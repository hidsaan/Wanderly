/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        'sand': {
          50: '#fdfbf7',
          100: '#f8f4ed',
          200: '#f0e6d6',
          300: '#e5d4ba',
        },
        'forest': {
          700: '#2d5446',
          800: '#1f3d30',
          900: '#162b22',
        },
        'warm-white': '#faf9f6',
      },
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
