// let baseWidth = process.env.baseWidth || 750

// baseWidth = Number(baseWidth) / 10

module.exports = {
  plugins: {
    'postcss-pxtorem': {
      rootValue: 75,
      propWhiteList: [],
      minPixelValue: 2
    }
  }
}
