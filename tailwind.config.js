/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'cardtl': 'cardtl 5s ease-in-out',
        'cardbl': 'cardbl 5s ease-in-out',
        'cardIn': 'cardIn 4s linear',
        'cardOut': 'cardOut 2s linear'
      },
      keyframes: {
        cardtl: {
          '0%': {transform: 'translate(0%,0%)'},
          '100%': {transform: 'translate(-160%, 0%)', opacity:'1'},
        },
        cardbl: {
          '0%': {transform: 'translate(0%,0%)'},
          '100%': {transform: 'translate(-160%, 150%)', opacity:'1'},
        },
        cardIn: {
          '0%': { transform: 'translateX(-20%)', opacity:'0'},
          '100%': { transform: 'translateX(0%)', opacity: '1'},
        },
        cardOut: {
          '0%': { transform: 'translateX(0%)', opacity:'1'},
          '100%': { transform: 'translateX(20%)', opacity: '0'},
        },
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: false,
    darkTheme: "light",
  },
}
