/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#E5996E",
        secondary: "#515151",
        white: "#ffffff",
        grey_bg: "#EFEFEF",
        dark_text: "#515252",
        light_black: "#585858",
        light_Peach: "#FFF6EB",
        black: "#393939",
        placholderText: "#292929",
        dark_gray: "#504F4F",
        grey: "#6A6A6A",
        light_gray: "#8F8F8F",
        light_grey: "D2D1D1"
      },
      boxShadow: {
        sidebarshadow: "3px 0px 18px 0px rgba(0, 0, 0, 0.06)",
        custom: "0px 28px 36px 0px rgba(230, 153, 110, 0.36)",
        customshadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.25)",
        mobileShadow: "0px 12px 7px 0px rgba(229, 153, 110, 0.40)",
        dropshadow: "0px 0px 3px 0px rgba(0, 0, 0, 0.22)",
        iconShadow: "rgba(229, 153, 110, 0.1) 0px 10px 50px"
      },
    },
  },
  plugins: [],
};
