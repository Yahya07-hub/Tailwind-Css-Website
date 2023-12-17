/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  darkMode:'class',
  theme: {
  screens: {
    sm: "480px",
    md: "768px",
    lg: "1024px"
  },
    extend: {
      colors:{
        "primary": "#010a5e",
        "primaryLight": "#010d78",
        "secondary": '#FFCC00',
        "paragraphColor": '#c0c0c0',
        "darkGray": "#171717"
      },
      keyframes: {
        move: {
          "50%": {transform: 'translateY(-1rem)'}
        },
        fadeIn: {
          "0%": {transform: 'translateY(-1rem)'}
        },
        fadeOut: {
          "100%": {transform: 'translateY(1rem)'}
        }
      },
      animation: {
        'movingY': 'move 2s linear infinite',
        'fadeInY': 'fadeIn .4s linear',
        'fadeOutY': 'fadeOut .4s linear'
      },
      zIndex:{
        1000: '1000'
      },
      letterSpacing:{
        more: '0.2rem'
      }
    },
    fontFamily: {
      oswald: ['Oswald', 'sans-serif'],
      dmsans: ['DM Sans', 'sans-serif']
    },
    container: {
      center: true,
      padding: {
      DEFAULT: '1rem',
      sm: '2.5rem',
      md: '2rem',
      lg: '2.5rem',
      xl: '8.5rem'
      }
      
    }
  },
  plugins: [],
}

