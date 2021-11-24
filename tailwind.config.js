const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: [
    './index.html', './src/**/*.{vue, js, ts, jsx, tsx}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors : {
        'fuchsia' : colors.fuchsia,
        'violet' : colors.violet,
        'amber' : colors.amber,
        'orange' : colors.orange,
        'green' : colors.green,
        'teal' : colors.teal,
        'purple' : colors.purple,
        'sky' : colors.sky,
        'rose' : colors.rose,
        'pink' : colors.pink,
        'emerald' : colors.emerald
      },
      fontFamily: {
        'sans' : ['Poppins', 'sans-serif']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
