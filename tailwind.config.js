/**
 * @format
 * @type {import('tailwindcss').Config}
 */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,css}"],
  theme: {
    extend: {
      backgroundImage: {
        'icon-invalid': "url('/images/icon-invalid.svg')",
        
      },
      colors: {
        blackBody: "hsl(0deg 0% 8%)",
        darkGrey: "hsl(0 0% 16%)",
        greenAccent: "hsl(153deg 71% 59%)",
        grayText2: "hsl(0 0% 85%)",
        whiteMainText: "hsl(0deg 0% 100%)",
      },

      fontSize: {
        fs88: "5.5rem",
        fs48: "3rem",
        fs24: "1.5rem",
        fs18: "1.125rem",
        fs16: "1rem",
        fs32: "2rem",
        fs40: "2.5rem",
        fs72: "4.5rem",

        clampSize: "clamp(1.5rem, 1.02rem + 2.03vw, 2rem)",
      },
      screens: {
        // tablet: "37.5em", //600px
        // laptop: "62.5em", //1000px
        tablet:"48em", //768px
        // laptop:"64em",  //1024px
        laptop:"73.125em" //1170px
      },
      // fontFamily: {
      //   sans: ["Space Grotesk"],
      // },
    },
  },
  plugins: [],
};
