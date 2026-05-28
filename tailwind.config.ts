import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-light': '#EBF4FA',
        'primary-blue': '#2B6CB0',
        'primary-dark': '#1a4d7a',
        'accent-warm': '#F4A460',
        'text-dark': '#2D3436',
      },
      fontFamily: {
        sans: ['Inter', 'Rubik', 'Poppins', 'sans-serif'],
      },
      fontSize: {
        'body': '18px',
        'body-lg': '20px',
      },
    },
  },
  plugins: [],
}

export default config
