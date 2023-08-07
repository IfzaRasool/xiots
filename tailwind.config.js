/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
        serif: ['Georgia', 'Times New Roman', 'serif'],
        custom: ['CustomFont', 'sans-serif'],
      },
      colors: {
        primary: '#1F303F', // Custom primary color
        yellow: '#FECE01', // Custom secondary color
        lightgrey: '#CDD3D8',
        
      },
    },
  },
  plugins: [],
}