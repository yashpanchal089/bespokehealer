/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        warmBeige: '#F5EFE6',
        softCream: '#FBF8F3',
        lightLavender: '#F8EBF4',
        secondaryPurple: '#E5A8CE',
        mutedPurple: '#D380B8',
        brandPink: '#D380B8',
        brandPinkDark: '#B85C9A',
        brandText: '#40383F',
        brandLightText: '#756B70',
        brandBorder: 'rgba(211, 128, 184, 0.25)',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', '"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        script: ['"Alex Brush"', 'cursive', '"Playfair Display"', 'serif'],
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        pulseSlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-delayed': 'float 7s ease-in-out 2s infinite',
        pulseSlow: 'pulseSlow 8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
