/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html}",
  ],
  theme: {
    extend: {
      colors: {
        'cinema-black': '#080406',
        'cinema-charcoal': '#14080C',
        'cinema-card': '#1C0C12',
        'gold-molten': '#C48993',
        'gold-bright': '#F6E7E9',
        'gold-deep': '#6E2433',
        'steel-blue': '#3A1520',
        'steel-dark': '#16090E',
        'cyber-teal': '#4A1A26',
        'cyber-glow': '#7A3040',
        'burnt-orange': '#8E3A48',
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
        'gold-glow': '0 0 30px rgba(142, 42, 58, 0.38)',
        'gold-glow-lg': '0 0 60px rgba(142, 42, 58, 0.48)',
        'orange-glow': '0 0 25px rgba(142, 58, 72, 0.35)',
        'cyan-glow': '0 0 35px rgba(90, 24, 38, 0.55)',
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
