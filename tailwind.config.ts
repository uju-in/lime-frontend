import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-folder':
          'linear-gradient(180deg, #000 -77.61%, #000 -77.58%, rgba(0, 0, 0, 0.00) 100%)',
      },
      screens: {
        mo: { max: '767px' },
        tablet: { min: '768px', max: '1024px' },
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
export default config
