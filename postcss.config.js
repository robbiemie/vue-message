let baseWidth = process.env.baseWidth || 750

baseWidth = Number(baseWidth) / 10

module.exports = {
  plugins: {
    'postcss-pxtorem': {
      rootValue: baseWidth,
      propWhiteList: [],
      minPixelValue: 2
    }
  }
}
