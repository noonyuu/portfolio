/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'main-color': '#FAF0D7',
        'sub-color': '#EEEDEB'
      },
      boxShadow: {
        custom: '5px 4px 4px 5px rgba(185, 185, 185, 0.25)'
      }
    }
  },
  plugins: []
}
