/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily : {
        sans: ['Poppins'],
      }, 
      colors:{
        greyNav : '#D9D9D9',
        brownBgLuffy : '#FFF4DC',
        brownBtnLuffy : '#E29A00',
        greenBgZoro : '#E1FFDC',
        greenBtnZoro : '#7EB782',
        pinkBgNami : '#FFCED7',
        pinkBtnNami : '#FF5573',
        blueBgSanji : '#E2F2FF',
        blueBtnSanji : '#3279AF',
        bgGodUsop : '#E9E8E2',
        buttonGodUsop : '#CAC8B3',
        bgBrook : '#FFDBC5',
        buttonBrook : '#E36415',
        bgJinbe : '#8FC5ED',
        buttonJinbe : '#275E87',
        bgDesktop : '#F4F4F4',
        colorBorder : '#D8D6C1',
        bgGrup2 : '#F2F2F2',
        bgBTNDesk : '#D8D6C1'   
      }   
    },
  },
  plugins: [
    require('daisyui')
  ],
}