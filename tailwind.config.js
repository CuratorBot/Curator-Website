module.exports = {
  content: ["./src/**/*.vue"],
  darkMode: "media",
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        primary: {
          base: "#212121",
          light: "#484848",
          dark: "#000000",
        },
        secondary: {
          base: "#00e575",
          light: "#66ffa5",
          dark: "#00b147",
        },
      },
    },
  },
  plugins: [],
};
