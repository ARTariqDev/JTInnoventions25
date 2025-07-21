/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}', // adjust based on your project structure
  ],
  theme: {
    extend: {
      fontFamily: {
        vermin: ['Vermin', 'sans-serif'],
      },
      colors: {
        electric: '#1b76ff',
      },
      textShadow: {
        glow: '0 0 10px rgba(27, 118, 255, 0.5)',
      }
    },
  },
  plugins: [],
}
