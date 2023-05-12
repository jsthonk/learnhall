/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-6deg)" },
          "50%": { transform: "rotate(6deg)" },
        },
        beat: {
          "0%, 100%": { transform: "scale(1)" },
          "25%": { transform: "scale(1.2)" },
        },
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
        beat: "beat 1s ease-out infinite",
      },
      width: {
        100: "30rem",
      },
      colors: {
        buttons: "#c04c40",
        g_bg: "#FED7BD",
        sec_text: "#070A13",
        cv_bg: "#B84B40",
        dia_bg: "#FB8E42",
        air_bg: "#233C7E",
        love_bg: "#A1A2A6",
      },
      screens: {
        m_small: "320px",
        m_medium: "375px",
        m_large: "425px",
        tablet: "768px",
        laptop: "1024px",
        l_laptop: "1440px",
      },
      fontSize: {
        small: "12px",
      },
      margin: {
        37: "9.3rem",
      },
      spacing: {
        86: "20rem",
        92: "22.25rem",
        84: "18.8rem",
        93: "26.3rem",
        94: "27.55rem",
        96: "28.8rem",
        98: "30rem",
        100: "32rem",
      },
    },
  },
  plugins: [],
};
