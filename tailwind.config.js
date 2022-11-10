module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}', './src/styles/**/*.module.css'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        fira: ['Fira Mono', 'monospace'],
        lato: ['Lato', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },

      keyframes: {
        move: {
          '0%': {
            transform: 'translate(0, 0)',
          },
          '100%': {
            transform: 'translate(0, 0)',
          },
          ' 50%': {
            transform: 'translate(10px, 0)',
          },
        },
      },
      animation: {
        'move-x': 'move 0.8s ease-in-out infinite',
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}