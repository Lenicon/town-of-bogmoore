/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.tsx",
  ],
  theme: {
    extend: {
      'textColor':{
        'thief':'#7f1d1d'
      }
    },
  },
  plugins: [],
}