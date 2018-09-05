# 移动端 Message组件
------

## 概述

仿iview风格的轻量级全局消息提示组件，在顶部居中显示，自动清空消失dom。

## 组件介绍


消息种类


目前有四种类型：

- success
- info
- warning
- error


1.组件引入

```
import VueMessage from '@yy/vue-message/dist/index.js' // eslint-disable-line
```


2.API

可以通过以下方法来使用组件:

```javascript

this.$Message.info(config)
this.$Message.success(config)
this.$Message.warning(config)
this.$Message.error(config)
this.$Message.loading(config)

```

![](media/15361512827004/15361518148053.jpg)




`config` 配置项


| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| content | 显示内容 | string | - |
| duration | 弹窗停留时间 | number | 2000(单位:ms) |
| styles | (高级)自定义样式 | Object | - |
| Theme | (高级)主题 | Object | - |
| render | (高级)渲染函数(支持jsx语法) | Function | - |




