import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brown: {
          30: '#946D62',
          50: '#401408',
          90: '#1A1311'
        },
        blue: {
          90: '#191A23'
        },
        gray: {
          10: '#eee',
          20: '#7B7B7B',
          30: '#5C5C5C',
          40: '#686A79',
          50: '#D0D0D0',
          60: '#ECECEC',
        },
        green: '#13291B'
      },
    },
  },
  plugins: [],
}
export default config
