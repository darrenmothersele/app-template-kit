module.exports = {
  theme: {
    extend: {
      spacing: {
        px: '1px',
        '0': '0',
        '1': '0.25rem',
        '2': '0.5rem',
        '3': '0.75rem',
        '4': '1rem',
        '5': '1.25rem',
        '6': '1.5rem',
        '8': '2rem',
        '10': '2.5rem',
        '12': '3rem',
        '16': '4rem',
        '20': '5rem',
        '24': '6rem',
        '32': '8rem',
        '40': '10rem',
        '48': '12rem',
        '56': '14rem',
        '64': '16rem',
        '128': '32rem',
      },
      minHeight: {
        '16': '4rem',
        '24': '6rem',
        '0': '0',
        full: '100%',
        screen: '100vh',
      }
    }
  },
  variants: {
    textColor: ['responsive', 'hover', 'focus', 'disabled'],
    backgroundColor: ['responsive', 'hover', 'focus', 'disabled'],
    opacity: ['responsive', 'hover', 'focus', 'group-hover'],
  },
  plugins: [
    require('@tailwindcss/custom-forms'),
  ]
};
