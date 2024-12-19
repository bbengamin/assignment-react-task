/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Jost', 'sans-serif'],
      },
    },
  },
  plugins: [
    function ({addUtilities}) {
      addUtilities({
        '.background-gradient-base': {
          background: 'linear-gradient(180deg, #47ACD7 0%, #3671C9 100%)',
          'text-color': '#FFFFFF',
        },
        '.background-gradient-hover': {
          background: 'linear-gradient(180deg, #47ACD7 0%, #2B5AA0 100%)',
          'text-color': '#FFFFFF',
        },
        '.background-gradient-active': {
          background: 'linear-gradient(180deg, #47ACD7 0%, #204275 100%)',
          'text-color': '#FFFFFF',
        }
      })
    },
  ],
}

