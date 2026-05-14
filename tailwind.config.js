/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        cobalt: "#0A5CFF",
        skyPulse: "#17C2FF",
        ringGold: "#FFC93C",
        emerald: "#2AF5C1",
        abyss: "#041226"
      },
      fontFamily: {
        display: ["Bungee", "ui-sans-serif", "system-ui", "sans-serif"],
        body: ["Manrope", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      boxShadow: {
        neon: "0 0 0 1px rgba(23,194,255,.22), 0 18px 42px rgba(4,18,38,.45)",
        ring: "0 0 28px rgba(255,201,60,.45)"
      },
      backgroundImage: {
        speedline:
          "linear-gradient(110deg, rgba(255,255,255,0) 15%, rgba(255,255,255,.18) 42%, rgba(255,255,255,0) 72%)"
      },
      keyframes: {
        floatSlow: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" }
        },
        ringSpin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" }
        }
      },
      animation: {
        floatSlow: "floatSlow 7s ease-in-out infinite",
        ringSpin: "ringSpin 20s linear infinite"
      }
    }
  },
  plugins: []
};
