/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./components/**/*.js', './pages/**/*.js', './layout/**/*.js'],
  theme: {
    screens: require('./commons/theme/screens'),
    spacing: require('./commons/theme/spacing'),
    inset: require('./commons/theme/spacing'),
    colors: require('./commons/theme/colors'),
    fontWeight: require('./commons/theme/fontWeight'),
    fontSize: require('./commons/theme/spacing'),
    borderRadius: require('./commons/theme/spacing'),
    lineHeight: require('./commons/theme/spacing'),
    letterSpacing: require('./commons/theme/letterSpacing'),
    zIndex: require('./commons/theme/zIndex'),
    // opacity: require('./commons/theme/opacity'),
    container: require('./commons/theme/container'),
    maxWidth: require('./commons/theme/spacing'),
    minWidth: require('./commons/theme/spacing'),
    maxHeight: require('./commons/theme/spacing'),
    minHeight: require('./commons/theme/spacing'),
    display: require('./commons/theme/display'),
    fontFamily: require('./commons/theme/fontFamily'),
    // cursor: require('./commons/theme/cursor'),
  },
  // plugins: require('./commons/plugins'),
};
