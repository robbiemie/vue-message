# @yy/vue-message

> 仿iView全局提示组件（移动端 Message组件） [查看源码](http://git.yypm.com/lib/kxd-utils/tree/master/packages/vue-message)

[回到组件列表页](../doc/doc/list.md)

### 使用场景
仿iView全局提示组件（Message组件）

### 安装

使用npm:

```sh
npm install @yy/vue-message --registry=https://npm-registry.yy.com
```

或者使用 yarn:

```sh
yarn add @yy/vue-message --registry=https://npm-registry.yy.com
```

### 项目中如何引入
fec0.3.0 或者其他任何构建工具
``` javascript
import { VueMessage } from '@yy/vue-message/dist/index.js'
```
或者直接`import { VueMessage } from '@yy/vue-message`，只需额外在`fec.config.js`中增加
```
transformModules: ['@yy'],
```
fec0.4.6 或者其他
``` javascript
import { VueMessage } from '@yy/vue-message'
```

### 如何使用720尺寸的组件
上面的引入方式是以750宽为基准的设计稿，海外版业务的设计稿以720宽为基准，国内的是750

fec0.3.0
``` javascript
import { VueMessage } from '@yy/vue-message/dist/720'
```

fec0.4.6 无需变化
``` javascript
import { VueMessage } from '@yy/vue-message'
```
!> 由于gitlab上fec版本是0.3.0，统一使用fec0.3.0的方式，以后升级再使用fec0.4.6的方式

### 使用方式

`VueMessage`的使用方式比较灵活，具体看个人需求
#### 以组件引入的形式
``` vue
<template>
  <div id='app'>
    <VueMessage />
  </div>
</template>
<script>
import Vue from 'vue'
import { VueMessage } from '@yy/vue-message/dist/index.js'

export default {
  components: {
    VueMessage
  }
}
</script>
```
#### 直接通过js调用
``` javascript
import Vue from 'vue'
import VueMessage from '@yy/vue-message/dist/index.js'
import '@yy/vue-message/dist/vue-message.css'

VueMessage.init(Vue)          // 先要初始化后才能调用，如果window.vue存在则不用初始化了，组件内部自动初始化
VueMessage.xxx()
```
#### 在Vue组件中通过this去调用
``` javascript
import Vue from 'vue'
import VueMessage from '@yy/vue-message/dist/index.js'
import '@yy/vue-message/dist/vue-message.css'

VueMessage.init(Vue)
Vue.prototype.$xxxx = VueMessage.xxxx
```
使用
``` javascript
...
created () {
  this.$xxxx()
}
...
```

### Vue组件支持的属性
|参数|说明|类型|可选值|默认|
|--|--|--|--|--|
|xx|xxx描述|Boolean|-|false|

**Q&A 通过js调用的方式如何更改这些属性**
``` javascript
import Vue from 'vue'
import VueMessage from '@yy/vue-message/dist/index.js'
import '@yy/vue-message/dist/vue-message.css'

VueMessage.init(Vue)  // 先要初始化后才能调用，如果window.vue存在则不用初始化了，组件内部自动初始化
VueMessage.vm.xxprops = 'xxxx'
...
```
### 负责人
你的名字 / YY你的YY号 / charles yang@yy.com
