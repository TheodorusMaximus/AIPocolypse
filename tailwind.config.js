/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        void: '#1A1A1A',
        resistance: {
          DEFAULT: '#00FF66',
          dark: '#00CC44'
        },
        concrete: '#4A4A4A',
        shadow: '#2D2D2D',
        alert: '#FF3333'
      },
      fontFamily: {
        mono: ['IBM Plex Mono', 'monospace'],
        sans: ['Inter', 'sans-serif'],
        nova: ['Nova Square', 'sans-serif']
      },
      fontSize: {
        'headline-1': ['48px', '52px'],
        'headline-2': ['32px', '36px'],
        'headline-3': ['24px', '28px'],
        'subheadline': ['20px', '24px'],
        'body-large': ['18px', '24px'],
        'body': ['16px', '22px'],
        'caption': ['14px', '18px']
      },
      animation: {
        'glitch': 'glitch 500ms infinite',
        'typing': 'typing 2s steps(20, end)',
        'pulse-glow': 'pulse-glow 2s infinite'
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { 
            boxShadow: '0 0 5px rgba(0, 255, 102, 0.2), 0 0 20px rgba(0, 255, 102, 0.1)'
          },
          '50%': { 
            boxShadow: '0 0 10px rgba(0, 255, 102, 0.4), 0 0 30px rgba(0, 255, 102, 0.2)'
          }
        }
      }
    },
  },
  plugins: [],
};
