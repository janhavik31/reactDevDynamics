/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(106.37deg, #ffebbc 29.63%, #ffcfd1 51.55%, #f3c6f1 90.85%)',
      },
    },
  },
  plugins: [],
}

