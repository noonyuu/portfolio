/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'main-color': '#FAF0D7',
        'sub-color': '#EEEDEB'
      },
      boxShadow: {
        custom: '5px 4px 4px 5px rgba(185, 185, 185, 0.25)'
      },
      keyframes: {
        skill: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '25%': { transform: 'translate(3rem, 1rem)' },
          '75%': { transform: 'translate(-2rem, 1rem)' }
        },
        instagram: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '25%': { transform: 'translate(2rem, 1rem)' },
          '65%': { transform: 'translate(-2rem, -1rem)' }
        },
        work: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '25%': { transform: 'translate(-1rem, 1rem)' },
          '75%': { transform: 'translate(-2rem, 1rem)' }
        }
      },
      animation: {
        skill: 'skill 30s ease-in-out infinite',
        instagram: 'instagram 20s ease-in-out infinite',
        work: 'work 25s ease-in-out infinite'
      }
    }
  },
  plugins: []
}
