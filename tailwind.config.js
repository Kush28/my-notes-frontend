module.exports = {
  purge: ['./components/**/*.js', './pages/**/*.js'],
  theme: {
    extend: {
      colors: {
        primary: '#395AFF',
        secondary: '#e90c59',
        white: '#FEFFFF',
        warning: '#FFD400',
        error: '#E07A5F',
        graylight: '#ededed',
      },
      width: {
        300: '300px',
      },
      height: {
        36: '9.5rem',
      },
      maxHeight: {
        '80vh': '80vh',
      },
      minHeight: {
        20: '4rem',
      },
      inset: {
        15: '15px',
        18: '18px',
      },
      borderRadius: {
        10: '10rem',
      },
      boxShadow: {
        small: '0 2px 5px rgba(0, 0, 0, 0.18)',
        smallRevese: '0 -2px 5px rgba(0, 0, 0, 0.18)',
        medium: '0 3px 5px rgba(0,0,0,0.20)',
        large: '0 6px 10px rgba(0,0,0,0.40)',
      },
      fontFamily: {
        ariel: 'Arial, Helvetica, sans-serif',
      },
    },
  },
}
