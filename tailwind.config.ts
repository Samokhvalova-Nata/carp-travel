import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      error: '#ff5757',
      activeIdx: 'rgba(255, 255, 255, 0.20)',
    },
    backgroundColor: {
      white: '#ffffff',
      btnBgdLight: 'rgba(255, 255, 255, 0.1)',
      btnBgd: 'rgba(255, 255, 255, 0.05)',
      btnBgdHover: 'rgba(255, 255, 255, 0.2)',
      inputBgd: 'rgba(255, 255, 255, 0.05)',
      inputBgdFilled: 'rgba(255, 255, 255, 0.1)',
      burgerBgd: 'rgba(1, 10, 5, 0.75)',
      transparent: 'transparent',
      galleryNotActive: 'rgba(2, 15, 8, 0.75)',
      shadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
    },
    fontFamily: {
      sans: ['var(--font-inter)'],
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
        '13': '13px',
        '14': '14px',
        '16': '16px',
        '18': '18px',
        '20': '20px',
        '22': '22px',
        '28': '28px',
        '30': '30px',
        '32': '32px',
        '33': '33px',
        '36': '36px',
      },
      letterSpacing: {
        '3.92': '-3.92px',
        '0.32': '0.32px',
        '1.26': '1.26px',
        '1.4': '1.4px',
        '1.44': '1.44px',
        '1.6': '-1.6px',
        '2.16': '2.16px',
        '2.4': '2.4px',
        '2.59': '2.59px',
        '2.68': '-2.68px',
        '1.665': '1.665px',
        '8.71': '8.71px',
        '9.48': '9.48px',
        '25.9': '25.9px',
        '36.48': '36.48px',
      },
      backdropBlur: {
        '25': '25px',
      },
    },
  },
  plugins: [],
};

export default config;
