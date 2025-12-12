/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#6d28d9',
        secondary: '#22d3ee',
        dark: '#0f172a',
        light: '#f8fafc',
      },
      fontFamily: {
        display: ['Inter', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 14px 45px rgba(109,40,217,0.15)',
      },
    },
  },
  plugins: [],
}

