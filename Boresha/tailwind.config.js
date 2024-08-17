/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-background': "url('./src/Images/image.jpeg')",
        backgroundImage: {
          'custom-background': "url('./public/Images/image.jpeg')",
    },
  },
  plugins: [],


}
  }
}