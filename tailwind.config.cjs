/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    rotate: {
      "-180": "-180deg",
      "-90": "-90deg",
      "-45": "-45deg",
      0: "0",
      45: "45deg",
      90: "90deg",
      135: "135deg",
      180: "180deg",
      270: "270deg",
    },
    extend: {
      fontFamily: {
        Header: ["Lato", "sans-serif"],
        Text2: ["Lato", "sans-serif"],
        About: ["Playfair Display", "serif"],
        Arimo: ["Arimo", "sans-serif"],
      },
      colors: {
        // AAprimary: "#0b192f",
        // AAsecondary: "#64ffda",
        // AAError: "#ff6489",
        // AAtertiary: "#112340",
        // ResumeButtonHover: "#153040",
        // MobileNavBarColor: "#112340",
        // StartupBackground: "#020c1b",
        AAprimary: "#dbe7e4", // Subtle pastel teal
        AAsecondary: "#a3c4bc", // Muted pastel green
        AAError: "#e4b1ab", // Soft pastel coral
        AAtertiary: "#b8d8d8", // Light pastel aqua
        ResumeButtonHover: "#c5dedd", // Gentle pastel blue-green
        MobileNavBarColor: "#b8d8d8", // Light pastel aqua (same as tertiary for consistency)
        StartupBackground: "#f0f4f8", // Very light pastel gray-blue
        TextPrimary: "#4a4a4a", // Dark gray for text (improves readability)
        TextSecondary: "#6b6b6b", // Slightly lighter gray for secondary text
      },
      screens: {
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
        "3xl": "1920px",
        "4xl": "2560px",
        "5xl": "3840px",
      },
    },
  },
  plugins: [require("tailwind-scrollbar"), require("tailwind-scrollbar-hide")],
  variants: {
    scrollbar: ["rounded"],
  },
};
