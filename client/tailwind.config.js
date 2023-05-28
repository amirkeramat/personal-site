/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      IRANSansBold: ["IRANSansBold", "sans-serif"],
    },
    extend: {
      colors: {
        "text-primary-color": "#0679E4",
        "bg-primary-color": "#0679E4",
        "white-color": "#FFFFFF",
        "bg-white-color": "#FFFFFF",
        "text-blue-color": "#2B84E5",
        "bg-blue-color": "#2B84E5",
        "text-secondary-color": "#CEE2F8",
        "text-title-color": "#323232",
        "text-content-color": "#999999",
        "--primary-font": "IRANSans",
      },
      backgroundImage: {
        "hero-bg": "url('/img/bg_1.jpg.jpg')",
      },
    },
  },
  plugins: [],
};
