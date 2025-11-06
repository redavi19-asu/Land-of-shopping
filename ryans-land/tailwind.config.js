/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef9ff",
          100: "#d7f0ff",
          200: "#aee2ff",
          300: "#7fd0ff",
          400: "#4bb9ff",
          500: "#199fff",
          600: "#0f7fe6",
          700: "#0e64b3",
          800: "#0f548f",
          900: "#0f466f"
        },
        // extra palettes to show "never seen" combos (fun accents you can try)
        bubble: { 500: "#ff71ce" },
        limeade: { 500: "#01cd6a" },
        plasma: { 500: "#b967ff" },
        solar: { 500: "#ffd319" }
      },
      boxShadow: {
        glow: "0 0 40px rgba(25,159,255,.25)"
      }
    },
  },
  plugins: [],
}
