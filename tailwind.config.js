/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      xs: "0.875rem",
      sm: "1.125rem",
      base: ["24px", "32px"],
      md: "2rem",
      xl: "3rem",
      "2xl": "3.5rem",
      "3xl": "4.5rem",
      "4xl": "5.5rem",
      "5xl": "6rem",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-navbar": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "home-hero": "url('/images/working-man.jpg')",
      },
      fontFamily: {
        display: "fontspring, sans-serif", // Adds a new `font-display` class
      },
      colors: {
        brown: "#4B372B",
        brownLight: "#CCB5A6",
      },
      screens: {
        "3xl": "1600px",
        // => @media (min-width: 992px) { ... }
      },
    },
  },
  plugins: [],
};
