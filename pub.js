// const aliases = require('./alias')
const shell = require('shelljs')
const path = require('path') // eslint-disable-line
// const fs = require('fs')

// const resolve = p => {
//   const base = p.split('/')[0]
//   if (aliases[base]) {
//     return path.resolve(aliases[base], p.slice(base.length + 1))
//   } else {
//     return path.resolve(__dirname, './', p)
//   }
// }

// const resolve = p => path.resolve(p)

// fs.writeFileSync(resolve('package/package.json'))
setTimeout(_ => {
  shell.cd('./lib/vue-message')
  shell.exec('npm run release && npm publish --access=public')
}, 300)
