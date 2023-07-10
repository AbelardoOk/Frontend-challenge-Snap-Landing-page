/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'var(--font-epilogue)'
      },

      colors: {
        neutral: {
          white: 'hsl(0, 0%, 98%)',
          gray: 'hsl(0, 0%, 41%)',
          black: 'hsl(0, 0%, 8%)',
        }
      }
    },
  },
  plugins: [],
}
