/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Make sure to scan your components for class names
  ],
  theme: {
    extend: {
      colors: {
        greyish: "#F6F4F4",
        beige: "#F5F5DC",
        black: "#000000",
        white: "#FFFFFF",
        grey: {
          light: "#D3D3D3", // Light Grey
          DEFAULT: "#808080", // Grey
          dark: "#505050", // Dark Grey
        },
        darker: "#333333", // Darker background color
      },
      fontFamily: {
        space: "Space Grotesk",
        montserrat: "Montserrat",
        doodle: "Rubik Doodle Shadow",
        julius: "Julius Sans One",
        elecro: "Electrolize",
        lato: "Lato",
      },
    },
  },
  darkMode: "class", // Enable dark mode via class
  plugins: [],
};
