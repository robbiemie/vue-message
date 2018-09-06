# 移动端 Message组件
------

[项目源码](https://github.com/yang657850144/vue-message)

## 组件介绍
------

> iview风格的轻量级全局消息提示组件，在顶部居中显示，自动清空消失dom。


**消息种类**


目前支持有四种类型：

- success
- info
- warning
- error


![](https://makefriends.bs2dl.yy.com/bm1536222032449.gif)

## 快速上手
-------

**安装**

```
$ npm install @vuestyle/vue-message 
```

**项目引入**

```javascript
import Vue from 'vue'
// 注意引入顺序，必须放在vue后面
import VueMessage from 'vue-message'


Vue.use(VueMessage)
...
```


vue项目，在控制台执行，查看是否引入成功

```
$ window.$Message
```






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


`config` 配置项


| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| content | 显示内容 | string | - |
| duration | 弹窗停留时间 | number | 2000(单位:ms) |
| styles | 自定义样式 | Object | - |
| 后期添加 |  |  | - |
| Theme | (高级)主题 | Object | - |
| render | (高级)渲染函数(支持jsx语法) | Function | - |

**调用方式**


![](https://makefriends.bs2dl.yy.com/bm1536156703536.jpg)