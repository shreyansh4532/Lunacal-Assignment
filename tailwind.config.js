/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom-no-blur': '4px 4px 0px rgba(0, 0, 0, 0.25)',  // No blur
        'darker-enh': '3px 13px 30px 8px rgba(0, 0, 0, 0.8), 3px 13px 30px 8px rgba(0, 0, 0, 0.9)',
      }
    },
  },
  plugins: [],
}