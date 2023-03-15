/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/**/*.ejs", "./public/**/*.js"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/public/assets/Hero-Img.png')",
      }
    },
  },
  plugins: [require("daisyui")],
}
