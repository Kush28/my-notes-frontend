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
      },
      spacing: {},
      letterSpacing: {},
      lineHeight: {},
      fontSize: {},
      borderRadius: {
        10: '10rem',
      },
      boxShadow: {
        small: '0 5px 10px rgba(0, 0, 0, 0.12)',
        medium: '0 8px 30px rgba(0, 0, 0, 0.12)',
      },
    },
  },
}
