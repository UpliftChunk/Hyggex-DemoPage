/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    // "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    // "./components/**/*.{js,ts,jsx,tsx,mdx}",
    // "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,jsx,ts,tsx}", 
    "./index.html",
  ],
  theme: {
    screens: {
      'mini':   {'max': '384px'},
      'mobile': {'max': '999px'},
      'laptop': {'min': '1000px'},
      ...defaultTheme.screens
    },
    extend: {
      colors: {
        "primary": "#022069",
        "secondary": "#0070B8",
        "ebony":"#4e5340",
        "almond":"#ffe9d6",
        "seashell":"#FFF4EB",
        "cherry":"#ff1b1c",
        "rosewood":"#5a0001",
        "babypowder":"#F5F7F3"
      },  
    },
  },
  plugins: [],
}

