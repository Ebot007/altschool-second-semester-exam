/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    './index.html'
  ],
  theme: {
    extend: {
      colors: {
        app: '#6d26ad',
      }
    },
  },
  plugins: [],
};
