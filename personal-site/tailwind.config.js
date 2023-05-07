/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
      fontFamily:{
      'IRANSansBold':['IRANSansBold','sans-serif']
    },
    extend: {
      colors:{
        "costume-black":"#0b0c10",
        "costume-gray" : "#1f2833",
        "costume-white" : "#c5c6c7",
        "costume-blue":"#66fcf1",
        "costume-green":"#45a29e"
    }
    },
  },
  plugins: [],
}

