# 移动端 Message组件
------
<p align="center">
    <a href="www.baidu.com">
        <img width="200" src="https://file.iviewui.com/logo-new.svg"/>
    </a>

</p>

## 文档
------
中文 | English

## 介绍
------

> iview风格的轻量级全局消息提示组件，在顶部居中显示，自动清空消失dom。

## 特点
------

* [x]  友好的接口文档
* [x] 简洁的UI风格
* [x] 轻量且高效
* [x] 适配移动端
* [ ] 支持自定义样式 (2.0实现)
* [ ] 支持jsx高级语法 (2.0实现)


## 快速上手
-------

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
import VueMessage from 'vue-message'


Vue.use(VueMessage)
...
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
| content | 显示内容 | string | - |
| duration | 弹窗停留时间 | number | 2000(单位:ms) |
| styles | 自定义样式 | Object | - |
| 后期添加 |  |  | - |
| Theme | (高级)主题 | Object | - |
| render | (高级)渲染函数(支持jsx语法) | Function | - |


**消息种类**


目前支持有四种类型：

- success
- info
- warning
- error

**功能演示** 

![](https://makefriends.bs2dl.yy.com/bm1536222032449.gif)



[Github项目源码](https://github.com/yang657850144/vue-message)

## License
[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2017-present, Charles yang

