/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('https://cdnimg.xyz/cover/deep-insanity-the-lost-child.png')",
      },
    },
  },
  plugins: [],
}
