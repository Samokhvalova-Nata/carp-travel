import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  // blocklist: ['container'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      error: '#ff5757',
    },
    backgroundColor: {
      btnBgdLight: 'rgba(255, 255, 255, 0.1)',
      btnBgd: 'rgba(255, 255, 255, 0.05)',
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
        md: { min: '768px' },
        lg: { min: '1280px' },
      },
      fontSize: {
        '12': '12px',
        '14': '14px',
        '16': '16px',
        '18': '18px',
      },
      letterSpacing: {
        wide: '2.59px',
        normal: '1.4px',
        '3.92': '-3.92px',
        '1.4': '-0.14px',
        '0.32': '0.32px',
        '1.26': '1.26px',
        '1.44': '1.44px',
        '1.6': '-1.6px',
        '2.16': '2.16px',
        '2.68': '-2.68px',
        '1.665': '1.665px',
        '8.71': '8.71px',
        '9.48': '9.48px',
        '25.9': '25.9px',
        '36.48': '36.48px',
      },
      backdropBlur: {
        '25': '25px'
      },
    },
  },
  plugins: [],
  // prefix: 'tw-',
};
export default config;
