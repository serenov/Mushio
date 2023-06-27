/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      ...colors,
      ntr: {
        0: "rgba(255, 255, 255, 0.679)",
        150: "#f8f9fa",
        300: "#DEE1E6",
        500: "#9095A1FF",
        600: "#565D6DFF",
        900: "#171A1FFF",
      },
      pr: { 200: "#D0EBF6FF", 500: "#6BC1E2FF", 750: "#19617EFF" },
      sc: { 500: "#796FC3FF" },
      tr1: { 200: "#FFDFF1FF", 500: "#FFACDBFF" },
      tr2: { 500: "#FDCC64FF" },
      tr3: { 500: "#a5d290" },
      // ...
    },
    extend: {
      fontFamily: {
        mon: "Montserrat",
        rob: "Roboto",
        bel: "Bellota",
      },
      // fontSize: {
      //   "10xl": ["10px", "16px"],
      //   "11xl": ["11px", "18px"],
      //   "14xl": ["14px", "22px"],
      //   "12xl": ["12px", "20px"],
      //   "16xl": ["16px", "26px"],
      //   "18xl": ["18px", "28px"],
      //   "20xl": ["20px", "30px"],
      //   "32xl": ["32px", "48px"],
      // },
      fontSize: {
        "10xl": ["0.625em", "1em"],
        "11xl": ["0.688em", "1.125em"],
        "14xl": ["0.875em", "1.375em"],
        "12xl": ["0.75em", "1.25em"],
        "16xl": ["1em", "1.625em"],
        "18xl": ["1.125em", "1.175em"],
        "20xl": ["1.25em", "1.875"],
        "32xl": ["2em", "1.5em"],
      },
    },
  },
  plugins: [],
};
