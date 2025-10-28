import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class", "dark"],
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: "#ffffff",
        neutral: "#a1a1a1",
      },
    },
  },
  plugins: [],
}

export default config
