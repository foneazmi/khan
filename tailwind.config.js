module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false,
  theme: {
    fontFamily: {
      display: ["Roboto Mono", "Menlo", "monospace"],
      body: ["Roboto Mono", "Menlo", "monospace"],
    },
    extend: {
      backgroundImage: (theme) => ({
        khan: "url('/src/assets/images/bg.jpeg')",
      }),
    },
  },

  variants: {
    extend: {},
  },
  plugins: [],
};
