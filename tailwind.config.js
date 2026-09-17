/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html}",
  ],
  theme: {
    extend: {
      colors: {
        'cinema-black': '#050507',
        'cinema-charcoal': '#0B0B0E',
        'cinema-card': '#0E0E14',
        'gold-molten': '#D4A017',
        'gold-bright': '#F5C542',
        'gold-deep': '#8E6709',
        'steel-blue': '#0E1B2A',
        'steel-dark': '#070F18',
        'cyber-teal': '#14283A',
        'cyber-glow': '#1E4160',
        'burnt-orange': '#E8842B',
        'soft-grey': '#B8BCC4',
        'muted-grey': '#6C7280',
      },
      fontFamily: {
        cinematic: ['"Bebas Neue"', '"Antonio"', 'sans-serif'],
        display: ['"Cinzel"', 'serif'],
        sans: ['"Inter"', '"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'gold-glow': '0 0 30px rgba(212, 160, 23, 0.25)',
        'gold-glow-lg': '0 0 60px rgba(212, 160, 23, 0.35)',
        'orange-glow': '0 0 25px rgba(232, 132, 43, 0.3)',
        'cyan-glow': '0 0 35px rgba(20, 40, 58, 0.5)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        shimmer: {
          '0%, 100%': { opacity: '0.85', transform: 'translateX(-10%)' },
          '50%': { opacity: '1', transform: 'translateX(10%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
