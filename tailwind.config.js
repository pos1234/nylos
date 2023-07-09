/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        gradientFirst: " #00A3E3",
        gradientSecond: "#9FCD10",
        fadedText:"#637381",
        primary:"#4a4b4f",
        primarySecond:"#404041",
        secondary:"#ffd841",
        textColor:"#edeef2",
        text79:"#797979",
        blackText:"#242331"
      },
      fontFamily:{
        'syne':['Syne','sans-serif'],
        'nunito':['Nunito','sans-serif'],
        'lexend':['Lexend','sans-serif']
      },
      backgroundImage:{
        hero:"url('./images/Background.svg')",
      } 
    },
  },
  plugins: [],
}