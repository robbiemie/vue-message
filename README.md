# Mobile UI Component - Vue-message
------
<p align="center">
    <a href="www.baidu.com">
        <img width="200" src="https://file.iviewui.com/logo-new.svg"/>
    </a>
</p>

## DOCS
------
[中文](https://github.com/yang657850144/vue-message/blob/master/README-ZH.md) | [English](https://github.com/yang657850144/vue-message/blob/master/README.md)

## Introduction
------

> Lightweight Mobile UI Component build on Vue2.0 and like [iview](https://www.iviewui.com/) style.

## Features
------

* [x] Friendly interface docs
* [x] Simple UI style
* [x] Lightweight & Quickly
* [x] Support mobile
* [ ] Support custom CSS style(implement in 2.0)
* [ ] Support JSX render(implement in 2.0)


## Begin
-------

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
import VueMessage from 'vue-message'


Vue.use(VueMessage)
...
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
| content | display content | string | - |
| duration | duration time | number | 2000(unit:ms) |
| styles | custom style| Object | - |
| Subsequent implementation |  |  | - |
| Theme | (advance)theme | Object | - |
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

## License
[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2017-present, Charles yang

