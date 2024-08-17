/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Bellefair', 'serif'], // Para headings
        body: ['Barlow', 'sans-serif'], // Para body text
        nav: ['Barlow Condensed', 'sans-serif'], // Para texto de navegación
      },

      fontSize: {
        'h1': '150px',
        'h2': '100px',
        'h3': '56px',
        'h4': '32px',
        'h5': '28px',
        'subheading1': '28px',
        'subheading2': '14px',
        'nav': '16px',
        'baseSize': '16px',
      },
      letterSpacing: {
        'nav': '2.7px',
        'h5': '4.75px',
        'subheading2': '2.35px',
      },
      colors: {
        primary: '#0B0D17',
        secondary: '#D0D6F9',
        white: '#FFFFFF',
      },
    },
  },
  plugins: [],
}

