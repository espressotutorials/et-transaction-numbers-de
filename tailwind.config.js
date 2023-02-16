module.exports = {
  presets: [require('@espressotutorialsgmbh/espresso-tailwind-config')],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        nav: '0 2px 2px 0 rgb(40 75 124 / 8%)'
      },
      width: {
        'sidebar': '340px',
        'content': 'calc(100% - 340px)',
        'logo': '120px'
      },
      maxWidth: {
        'stage': '1200px',
        'app': '110px',
      },
    },
  },
  variants: {
    extend: {
      colors: {
        blue: {
          200: '#ecf6fd',
          400: '#c2d7ff',
          500: '#33a8e0',
          600: '#195979',
          700: '#0e4560'
        },
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
