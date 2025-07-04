/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        float: 'float 15s ease-in-out infinite',
        'float-slow': 'float 25s ease-in-out infinite',
        'float-fast': 'float 10s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { 
            transform: 'translate(0, 0) rotate(0deg)',
          },
          '20%': {
            transform: 'translate(var(--tw-move-x, 50px), calc(var(--tw-move-y, 50px) * 0.8)) rotate(5deg)',
          },
          '40%': {
            transform: 'translate(calc(var(--tw-move-x, 50px) * 0.8), var(--tw-move-y, 50px)) rotate(10deg)',
          },
          '60%': {
            transform: 'translate(var(--tw-move-x, 50px), calc(var(--tw-move-y, 50px) * 1.2)) rotate(5deg)',
          },
          '80%': {
            transform: 'translate(calc(var(--tw-move-x, 50px) * 1.2), calc(var(--tw-move-y, 50px) * 0.5)) rotate(0deg)',
          },
        }
      },
      colors: {
        // Extend with softer colors for blobs
        blob: {
          blue: 'rgba(191, 219, 254, 0.6)',
          purple: 'rgba(216, 180, 254, 0.6)',
          pink: 'rgba(251, 207, 232, 0.6)',
          amber: 'rgba(253, 230, 138, 0.6)',
          emerald: 'rgba(167, 243, 208, 0.6)',
          indigo: 'rgba(199, 210, 254, 0.6)'
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    // Plugin untuk custom properties
    function({ addUtilities }) {
      addUtilities({
        '.mix-blend-multiply': {
          'mix-blend-mode': 'multiply',
        },
        '.backdrop-blur-lg': {
          'backdrop-filter': 'blur(16px)',
        },
        '.will-change-transform': {
          'will-change': 'transform',
        },
      })
    }
  ],
}