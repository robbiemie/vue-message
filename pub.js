// const aliases = require('./alias')
const shell = require('shelljs')
// const path = require('path') // eslint-disable-line
// const fs = require('fs')

// copy README to lib
// const resolve = p => {
//   const base = p.split('/')[0]
//   if (aliases[base]) {
//     return path.resolve(aliases[base], p.slice(base.length + 1))
//   } else {
//     return path.resolve(__dirname, './', p)
//   }
// }

// shell.cp('-R', resolve('./README.md'), resolve('lib/README.md'))
// shell.cp('-R', resolve('./README-ZH.md'), resolve('lib/README-ZH.md'))

shell.exec('npm publish --access=public')
shell.exec('git commit -am \'UPDATE README.md\' && git push')
// setTimeout(_ => {
//   // shell.cd('./lib/vue-message')
//   // shell.cd('../../')
// }, 300)
