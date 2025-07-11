module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        zaytun: {
          green: '#1A7F37', // Zaytun green
          cream: '#FFF9F0', // Soft cream
          black: '#181818', // Deep black
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
};