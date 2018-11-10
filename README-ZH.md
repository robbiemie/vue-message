# 移动端 Messages组件
<p align="center">
    <a href="http://www.yangoogle.com/#/work">
        <img width="200" src="https://file.iviewui.com/logo-new.svg"/>
    </a>
</p>


<p align="center">
  <a href="https://cn.vuejs.org/v2/guide/"><img src="https://makefriends.bs2dl.yy.com/bm1539228392003.svg" alt="vue"></a>
  <a href="https://www.npmjs.com/package/vue-messages"><img src="https://makefriends.bs2dl.yy.com/bm1541835935319.svg" alt="vue"></a>
  <a href="https://opensource.org/licenses/MIT"><img src="https://makefriends.bs2dl.yy.com/bm1539228515177.svg" alt="vue"></a>
  <a href="https://github.com/yang657850144/vue-message"><img src="https://makefriends.bs2dl.yy.com/bm1539228726851.svg" alt="vue"></a>
</p>

## 文档
[中文](https://github.com/yang657850144/vue-message/blob/master/README-ZH.md) | [English](https://github.com/yang657850144/vue-message/blob/master/README.md)

[在线预览](http://www.yangoogle.com/#/work)

## 介绍

> iview风格的轻量级全局消息提示组件。

## 特点

* [x]  友好的接口文档
* [x] 简洁的UI风格
* [x] 轻量且高效
* [x] 适配移动端
* [x] 支持hook函数
* [x] 支持自定义样式 (2.0实现)
* [ ] 支持jsx高级语法 (2.0实现)


## 快速上手

**安装**
使用npm:

```
$ npm install vue-messages
```

**用法**

```javascript
import Vue from 'vue'
// 导入其他模块
...
// 注意引入顺序，必须放在vue后面
import VueMessages from 'vue-messages'


/** 默认配置 */
Vue.use(VueMessage)

/** 高级用法 */
Vue.use(VueMessage, {
  duration: 1, // 单位: s
  themes: 'blackGold', // classic or classicBold
  styles: {
    top: 24, // 单位: px
    fontWeight: 'normal'
  },
  before () {
    console.log('custom before hook')
  },
  done () {
    console.log('custom done hook')
  }
})
```


启动vue项目，在控制台执行下面语句，查看是否有值输出

```
// 有输出表示引入成功，否则输出undefined表示引入失败。

$ window.$Message
```


**调用方式**


![](https://makefriends.bs2dl.yy.com/bm1536156703536.jpg)




API

可以通过以下方法来使用组件:

```javascript

// config 类型： string | object
this.$Message.info(config)
this.$Message.success(config)
this.$Message.warning(config)
this.$Message.error(config)
this.$Message.loading(config)

```


**config 配置项**


| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| duration | 弹窗停留时间 | number | 2(单位:s) |
| styles | 自定义样式 | Object | {top:24}(单位:px) |
| Theme | (高级)主题 | Object | - |
| before | Hook 函数 | Function | 执行前调用 |
| done | Hook 函数 | Function | 执行后调用 |
| 后期添加 |  |  | - |
| render | (高级)渲染函数(支持jsx语法) | Function | - |


**消息种类**


目前支持有四种类型：

- success
- info
- warning
- error

**功能演示** 

![xxx](
https://o-id.ihago.net/boss/b596fcd2ce5e7bb51af674baeef9a348/GIF.gif)



[Github项目源码](https://github.com/yang657850144/vue-message)


**欢迎在下面进行讨论👇**

[issues1](https://github.com/yang657850144/vue-message/issues/1)

## License
[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2017-present, Charles yang

