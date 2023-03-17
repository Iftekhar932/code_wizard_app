/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        loginBgImg:
          "url('https://i.ibb.co/6JLVVKM/nasa-Q1p7bh3-SHj8-unsplash-C.jpg')",
      },
    },
  },
  daisyui: {
    themes: ["night", "cyberpunk", "cupcake", "dark"],
  },
  plugins: [require("daisyui")],
};
