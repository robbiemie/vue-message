const shell = require('shelljs')
const path = require('path') // eslint-disable-line
const fs = require('fs')

const cwd = p => path.resolve(p)

let pkg = fs.readFileSync(cwd('./package.json'), 'utf-8')

const ERROR_TIP = '解析到version不正确，请自行修改package.json的version字段'

pkg = pkg.replace(/"version": "(.+)",/, ($, version) => {
  console.log(`前一个版本号：${version}`)
  const arr = version.split('.').map(v => Number(v))
  if (arr.length !== 3) throw new Error(ERROR_TIP)
  if (arr[2] === 99) {
    arr[2] = 1
    if (arr[1] === 99) {
      arr[1] = 1
      arr[0]++
    } else {
      arr[1]++
    }
  } else {
    arr[2]++
  }
  const newVersion = arr.join('.')
  console.log(`当前发布版本号：${newVersion}`)
  return `"version": "${newVersion}",`
})
fs.writeFileSync(cwd('./package.json'), pkg, 'utf8')
setTimeout(_ => {
  shell.exec('npm publish --access=public')
}, 300)
