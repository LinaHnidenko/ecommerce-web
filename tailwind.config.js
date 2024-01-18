/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      grayText: "#666666",
      lightBlue: "#3366cc",
      grayBg: "#f2f2f2",
      darkBlueBtn: "#0066cc",
      white: "#ffffff ",
      accent1: "#0066cc",
      accent2: "#99cc33",
      accent3: "#6c8fc7",
      accent4: "rgb(231 236 243)",
      borderItem: "rgb(207 217 229/1)",
      gold: "#FFD700",
    },

    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {},
  },
  plugins: [],
};
