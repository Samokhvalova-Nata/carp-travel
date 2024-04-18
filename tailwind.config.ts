import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  blocklist: ['container'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      error: '#ff5757',
    },
    backgroundColor: {
      sectionBgd50: 'rgba(2, 15, 8, 0.5)',
      sectionBgd75: 'rgba(2, 15, 8, 0.75)',
      sectionBgd85: 'rgba(2, 15, 8, 0.85)',
      btnBgd: 'rgba(255, 255, 255, 0.1)',
      btnBgdHover: 'rgba(255, 255, 255, 0.2)',
      inputBgd: 'rgba(255, 255, 255, 0.05)',
      inputBgdFilled: 'rgba(255, 255, 255, 0.1)',
      burgerBgd: 'rgba(1, 10, 5, 0.75)',
    },
    backgroundImage: {
      gradSectionTop:
        'linear-gradient(180deg, #001826 0%, rgba(0, 37, 49, 0) 100%)',
      gradSectionBottom:
        'linear-gradient(180deg, #002426 0%, rgba(0, 37, 49, 0) 100%)',
    },
    fontFamily: {
      sans: ['var(--font-inter)'],
      mono: ['var(--font-karantina)'],
    },
    extend: {
      screens: {
        xs: { min: '320px', max: '479px' },
        sm: { min: '480px', max: '767px' },
        md: { min: '768px', max: '1279px' },
        lg: { min: '1280px' },
      },
    },
  },
  plugins: [],
  prefix: 'tw-',
};
export default config;
