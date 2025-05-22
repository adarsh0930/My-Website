module.exports = {
  darkMode: "class",              // ← enable class-based dark mode
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
  extend: {
    animation: {
      'gradient-x': 'gradient-x 4s ease infinite',
    },
    keyframes: {
      'gradient-x': {
        '0%, 100%': { backgroundPosition: '0% 50%' },
        '50%': { backgroundPosition: '100% 50%' },
      },
    },
  },
},
};