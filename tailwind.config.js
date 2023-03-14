/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ["night", "cyberpunk", "cupcake", "dark"],
  },
  plugins: [require("daisyui")],
};
