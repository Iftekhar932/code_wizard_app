/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        loginBgImg:
          "url('https://i.ibb.co/Lg4nMN6/pietro-de-grandi-T7-K4a-EPo-GGk-unsplash.jpg')",
        logo: "url('https://i.ibb.co/pLdwbKj/a6adbb.jpg')",
      },
    },
  },
  daisyui: {
    themes: ["night", "cyberpunk", "cupcake", "dark"],
  },
  plugins: [require("daisyui")],
};
