/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      eojin: '#c99e98',
      dohun: '#74AA83',
      kwankon: '#A299C6',
      jiyoung: '#CA90AB',
      jinyoung: '#C0B388',
      eunseob: '#95ACC3',
      footer: '#444444',
      white: '#ffffff',
    },
    extend: {
      keyframes: {
        infiniteAnimation1: {
          '0%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(-100%)' },
          '50.1%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        infiniteAnimation2: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-200%)' },
        },
        infiniteAnimationReverse1: {
          '0%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(100%)' },
          '50.1%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        infiniteAnimationReverse2: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(200%)' },
        },
      },
      animation: {
        original: '50s linear infinite normal none running infiniteAnimation1',
        clone: '50s linear infinite infiniteAnimation2',
        originalReverse:
          '50s linear infinite normal none running infiniteAnimationReverse1',
        cloneReverse: '50s linear infinite infiniteAnimationReverse2',
        stop: 'none',
      },
    },
    screens: {
      phone: { max: '767px' },
      tablet: { min: '768px', max: '1023px' },
      laptop: { min: '1024px', max: '2049px' },
      desktop: { min: '2050px' },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
