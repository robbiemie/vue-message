# Mobile UI Component - Vue-messages
<p align="center">
    <a href="http://www.yangoogle.com/#/lib/messages">
        <img width="200" src="https://file.iviewui.com/logo-new.svg"/>
    </a>
</p>

<p align="center">
  <a href="https://cn.vuejs.org/v2/guide/"><img src="https://makefriends.bs2dl.yy.com/bm1539228392003.svg" alt="vue"></a>
  <a href="https://www.npmjs.com/package/vue-messages"><img src="https://makefriends.bs2dl.yy.com/bm1539246165014.svg" alt="vue"></a>
  <a href="https://opensource.org/licenses/MIT"><img src="https://makefriends.bs2dl.yy.com/bm1539228515177.svg" alt="vue"></a>
  <a href="https://github.com/yang657850144/vue-message"><img src="https://makefriends.bs2dl.yy.com/bm1539228726851.svg" alt="vue"></a>
</p>

## DOCS
[中文](https://github.com/yang657850144/vue-message/blob/master/README-ZH.md) | [English](https://github.com/yang657850144/vue-message/blob/master/README.md)


[Online preview](http://www.yangoogle.com/#/lib/messages)

## Introduction

> Lightweight Mobile UI Component build on Vue2.0 and like [iview](https://www.iviewui.com/) style.

## Features

* [x] Friendly interface docs
* [x] Simple UI style
* [x] Lightweight & Quickly
* [x] Support mobile
* [ ] Support custom CSS style(implement in 2.0)
* [ ] Support JSX render(implement in 2.0)


## Begin

**Install**
use npm:

```
$ npm install vue-messages
```

**Usage**

```javascript
import Vue from 'vue'
// import other modules
...
// note the import order 
import VueMessages from 'vue-messages'


/** default configuration */
Vue.use(VueMessage)

/** advance configuration */
// Vue.use(VueMessage, {
//   duration: 3,
//   styles: {
//     top: 44 // unit: px
//   },
//   before () {
//     console.log('custom before hook')
//   },
//   done () {
//     console.log('custom done hook')
//   }
// })
```


Launch Vue project，Enter the following expression in console，check if there is an Object.

```
// If there is an Object，it means the import is success
// otherwise，the import is fail.

$ window.$Message
```


**use in Vue**


![](https://makefriends.bs2dl.yy.com/bm1536156703536.jpg)




API

Use the component in the following methods

```javascript

// config TYPE： string | object
this.$Message.info(config)
this.$Message.success(config)
this.$Message.warning(config)
this.$Message.error(config)
this.$Message.loading(config)

```


**config OPTIONS**


| attr | desc | type | default |
| --- | --- | --- | --- |
| duration | duration time | number | 2(unit:s) |
| styles | custom style| Object | {top:24}(unit:px) |
| Theme | (advance)theme | Object | - |
| before | Hook Function| Function | - |
| done | Hook Function| Function | - |
| Subsequent implementation |  |  | - |
| render | (advance)render function(support JSX) | Function | - |


**Message Type**


Currently supports four types：

- success
- info
- warning
- error

**Demo** 

![](https://makefriends.bs2dl.yy.com/bm1536222032449.gif)



[Github Source code](https://github.com/yang657850144/vue-message)


**Welcome discussion in the following site👇**

[issues1](https://github.com/yang657850144/vue-message/issues/1)

## License
[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2017-present, Charles yang

