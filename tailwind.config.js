/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}", // Membaca file di folder app
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}", // Membaca file di folder components
  ],
  theme: {
    extend: {
      colors: {
        // Warna utama sesuai PRD VibeStudio
        brand: {
          slate: "#0F172A",   // Deep Slate
          violet: "#7C3AED",  // Electric Violet
        },
      },
    },
  },
  plugins: [],
};