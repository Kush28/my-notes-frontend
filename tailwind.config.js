module.exports = {
  purge: ['./components/**/*.js', './pages/**/*.js'],
  theme: {
    extend: {
      colors: {
        primary: '#395AFF',
        secondary: '#DEF2F1',
        white: '#FEFFFF',
        warning: '#FFD400',
        error: '#E07A5F',
        gray: '#898989',
        graylight: '#ededed',
      },
      width: {
        300: '300px',
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
        medium: '0 3px 5px rgba(0,0,0,0.20)',
        large: '0 6px 10px rgba(0,0,0,0.40)'
      },
      fontFamily: {
        ariel: 'Arial, Helvetica, sans-serif',
      },
    },
  },
}
