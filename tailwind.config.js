/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,astro}"],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  theme: {
    extend: {
      colors: {
        theme: {
          gray: "#0d0f1480",
          darkGray: "#545864",
          black: "#23262d",
          blue: "rgb(50 69 255)",
        },
      },
    },
  },
  plugins: [],
};
