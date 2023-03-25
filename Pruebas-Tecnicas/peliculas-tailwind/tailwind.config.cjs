/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif']
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        fit: 'repeat(auto-fit, minmax(250px, 1fr))'
      }
    }
  },
  plugins: []
}
