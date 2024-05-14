/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'main-color': '#FAF0D7',
        'sub-color': '#EEEDEB'
      }
    }
  },
  plugins: []
}
