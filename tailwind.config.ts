import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4CAF50',
        secondary: '#008CBA',
        background: '#282c34',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}

export default config
