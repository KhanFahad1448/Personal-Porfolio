/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        Nunito: ['Nunito', 'sans-serif'],
        Spartan: ['League Spartan', 'sans-serif'],
        Merriweather: ['Merriweather', 'serif'],
      },
    },
  },
  plugins: [],
}
