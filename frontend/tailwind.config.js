/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
theme: {
    extend: {
      keyframes: {
        sway: {
          "0%, 100%": { transform: "rotate(45deg) scale(1)" },
          "50%": { transform: "rotate(50deg) scale(1.05)" },
        },
        swayReverse: {
          "0%, 100%": { transform: "rotate(-45deg) scale(1)" },
          "50%": { transform: "rotate(-50deg) scale(1.05)" },
        },
      },
      animation: {
        sway: "sway 6s ease-in-out infinite",
        "sway-reverse": "swayReverse 6s ease-in-out infinite",
      },
      fontFamily: {
        oswald: ['Oswald', 'sans-serif'],
      },
  },
},
plugins: [],
}