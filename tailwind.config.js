module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'bold': ['HalisR-Black', 'sans-serif'],
        'normal': ['HalisR-Regular', 'sans-serif'],
        'light': ['HalisR-Light', 'sans-serif'],
      },
      colors: {
        'alabaster': "#F1ECDE",
        'honeydew': "#CDE4DB",
        'tumbleweed': "#D1A783",
        'emerald': "#40916C",
        'green': "#1F4A38",
      }
    },
  },
  plugins: [],
}