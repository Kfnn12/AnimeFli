/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('https://cdnimg.xyz/cover/deep-insanity-the-lost-child.png')",
      },
      colors: {
        red: "#d93636",
        primary: "#17181c",
        lightBlue: "#2abdbb",
        secondary: "#414554",
        whiteText: "#f5f5f5",
        grayText: "#d7d7d7d",
        success: "#3dff7f",
        orange1: "#fab818",
        orange2: "#ff8533",
      },
    },
  },
  plugins: [],
};
