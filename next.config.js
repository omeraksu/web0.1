const withReactSvg = require('next-react-svg')

module.exports = withReactSvg({
  include: path.resolve(__dirname, 'src/assets/svg'),
  webpack(config, options) {
    return config
  }
})


module.exports = {
    // burası ayarların olacağı yer
    devIndicators: {
        autoPrerender: false,
    },
}