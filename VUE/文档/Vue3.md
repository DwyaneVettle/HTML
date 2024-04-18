# Vue3

## 1.Vue3简介

- `Vue (发音为 /vjuː/，类似 **view**) `是一款用于构建用户界面的 JavaScript 框架。它基于标准 HTML、CSS 和 JavaScript 构建，并提供了一套声明式的、组件化的编程模型，帮助你高效地开发用户界面。无论是简单还是复杂的界面，Vue 都可以胜任。
- Vue 2 已于 **2023 年 12 月 31 日**停止维护。Vue3发布于**2020年9月18日**，代号`One Piece（海贼王）`。
- <a href="https://cn.vuejs.org/">Vue3中文文档</a>；<a href="https://github.com/vuejs/core">Vue3仓库地址</a>

- Vue3相较Vue2的优势：
  - 性能提升：Vue3 的性能比 Vue2 快 1.2-2 倍，主要是通过响应式系统的提升和编译优化来完成。
  - 代码体积更小：Vue3 按需编译，整体体积变小了。
  - 更简单的语法：Vue3 采用了更简单的语法，并移除了一些 Vue2 中的不常用功能，使得代码更容易维护和阅读。
  - 更好的 TypeScript 支持：Vue3 支持更好的 TypeScript。
  - 更先进的组件：Vue3 支持 Fragment、Teleport（Protal）、Suspense 等更先进的组件。
- 前置知识：h5c3、JavaScript、node.js、webpack、ajax

## 2.创建Vue3工程

### 2.1.使用Vue-cli创建

```vue
# 查看vue-cli版本，须在4.5.0以上版本
vue --version

# 安装或升级vue-cli
npm install -g @vue/cli

# 创建Vue工程，选择使用3.x即可
vue create 项目名
```

![image-20240417095303736](https://gitee.com/zou_tangrui/note-pic/raw/master/img/202404170953051.png)

### 2.2.使用Vite创建-官方推荐

​	Vite是新一代前端构建工具，官网：https://cn.vitejs.dev/，它主要由两部分组成：

- 一个开发服务器，它基于 [原生 ES 模块](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules) 提供了 [丰富的内建功能](https://cn.vitejs.dev/guide/features.html)，如速度快到惊人的 [模块热更新（HMR）](https://cn.vitejs.dev/guide/features.html#hot-module-replacement)。

- 一套构建指令，它使用 [Rollup](https://rollupjs.org/) 打包你的代码，并且它是预配置的，可输出用于生产环境的高度优化过的静态资源。

  其优势在于以下几点：

![image-20240417095558776](https://gitee.com/zou_tangrui/note-pic/raw/master/img/202404170955971.png)

​	<a href="https://cn.vitejs.dev/guide/why.html">为什么使用Vite？</a>

<img src="https://gitee.com/zou_tangrui/note-pic/raw/master/img/202404171000175.png" alt="image-20240417100049900" style="zoom:50%;" />

<img src="https://gitee.com/zou_tangrui/note-pic/raw/master/img/202404171001109.png" alt="image-20240417100107006" style="zoom:50%;" />

```vue
# 1.创建命令
npm create vue@latest

# 2.具体配置
# 配置项目名称
✔ Project name: … <your-project-name>
# 是否添加TypeScript支持
✔ Add TypeScript? … No / Yes
# 是否添加JSX支持
✔ Add JSX Support? … No / Yes
# 是否添加路由环境  
✔ Add Vue Router for Single Page Application development? … No / Yes
# 是否添加Pinia支持    
✔ Add Pinia for state management? … No / Yes
# 是否添加单元测试   
✔ Add Vitest for Unit testing? … No / Yes
# 是否添加端到端的测试方案   
✔ Add an End-to-End Testing Solution? … No / Cypress / Playwright
# 是否添加ESLint语法检测
✔ Add ESLint for code quality? … No / Yes
# 是否添加Prettier代码格式化
✔ Add Prettier for code formatting? … No / Yes

Scaffolding project in ./<your-project-name>...
Done.
```

​	如果不确定是否要开启某个功能，你可以直接按下回车键选择 `No`。在项目被创建后，通过以下步骤安装依赖并启动开发服务器：

```vue
# 进入项目
$ cd <your-project-name>
# 安装或更新依赖
$ npm install
# 运行项目
$ npm run dev
```

<img src="https://gitee.com/zou_tangrui/note-pic/raw/master/img/202404171023756.png" alt="image-20240417102336500" style="zoom:50%;" />

### 2.3.项目结构解析

- vite项目中，`index.html`是整个项目的入口文件，在项目的最外层。
- 加载`index.html`后，vite解析`<script type="module" src="/src/main.ts"></script>`的内容，指向js或ts文件。
- Vue3通过`createApp`函数创建一个应用实例。

​	为了更好理解Vue3结构，我们将src及其子文件全部删除，再创建src文件夹，结构和内容如下：

![image-20240417110738832](https://gitee.com/zou_tangrui/note-pic/raw/master/img/202404171107920.png)

​	`mian.ts`：

```typescript
// 引入createApp用于创建应用
import {createApp} from 'vue'
// 引入App根组件
import App from './App.vue'

createApp(App).mount('#app')
```

​	`App.vue`：

```vue
<template>
    <div class="div01">
         <h1>hello Vue!</h1>
    </div>
</template>

<script lang="ts">
    export default {
        name:'App'
    }
</script>
    
<style>
    .div01 {
        color:red
    }
</style>
```

​	效果：

![image-20240417110845803](https://gitee.com/zou_tangrui/note-pic/raw/master/img/202404171108750.png)

### 2.4.完成简单的交互

​	备份src文件夹后，在src下创建文件夹`components`用于存放自己定义的组件，并在该文件夹下创建组件`Person.vue`：

```vue
<template>
    <div class="person">
        <h3>姓名：{{name}}</h3>
        <h3>年龄：{{age}}</h3>
        <button @click="changeName">点击修改名字</button>
        <button @click="changeAge">点击修改年龄</button>
        <button @click="showTel()">查看联系电话</button>
    </div>
</template>

<script lang="ts">
    export default {
        name:"Person",
        data() {
            return {
                name:"张三",
                age:18,
                tel:'15880000000'
            }
        },
        methods:{
          showTel(){
                alert(this.tel)
          },
          changeName() {
              this.name = "李四"
          },
          changeAge() {
            this.age += 1
          }
        }
    }
</script>

<style scoped>
    .person {
        background-color: skyblue;
        box-shadow: 0 0 10px;
        border-radius: 10px;
        padding: 20px;
    }
    button {
      margin: 0 3px
    }
</style>>
```

​	在`App.vue`中引入`Person`组件：

```vue
<template>
    <div class="div01">
         <h1>hello Vue!</h1>
         <Person/>
    </div>
</template>

<script lang="ts">
    import Person from './components/Person.vue'

    export default {
        name:'App',
        components:{Person}  // 注册组件
    }
</script>
```

​	效果：

![image-20240417122500732](https://gitee.com/zou_tangrui/note-pic/raw/master/img/202404171225814.png)

​	由上述功能可知，在Vue3中也使用Vue2的语法。



## 3.Vue3核心语法

### 3.1.OptionsAPI（选项式API）和CompositionAPI（组合式API）

- **选项式 API (Options API)：**用选项式 API，我们可以用包含多个选项的对象来描述组件的逻辑，例如 `data`、`methods` 和 `mounted`。选项所定义的属性都会暴露在函数内部的 `this` 上，它会指向当前的组件实例。Vue2使用的是这种API风格，但它不易于维护和复用。

![image.png](https://gitee.com/zou_tangrui/note-pic/raw/master/img/202404171608424.webp)

- **组合式 API (Composition API)：**通过组合式 API，我们可以使用导入的 API 函数来描述组件逻辑。在单文件组件中，组合式 API 通常会与 [``](https://cn.vuejs.org/api/sfc-script-setup.html) 搭配使用。这个 `setup` attribute 是一个标识，告诉 Vue 需要在编译时进行一些处理，让我们可以更简洁地使用组合式 API。比如，`<script setup>` 中的导入和顶层变量/函数都能够在模板中直接使用。

![image.png](https://gitee.com/zou_tangrui/note-pic/raw/master/img/202404171608281.webp)

### 3.2.setup语法糖

​	`setup`是Vue3的一个新的配置项，值是一个函数，它是组合式API的“舞台”，在Vue2中使用的数据、方法、计算属性、监视属性等配置项都配置到`setup`中。

​	为了简化代码，避免写两个`script`标签去指定组件名字，比较麻烦，我们可以下载插件来简化该操作：

```vue
npm install vite-plugin-vue-setup-extend -D
```

​	在`vite.config.ts`中新增：

```vue
import VueSetupExtend from 'vite-plugin-vue-setup-extend'
# plugins中添加
plugins: [VueSetupExtend]
```

​	`App.vue`：

```vue
<template>
         <Person/>
</template>

<script lang="ts">
    import Person from './components/Person.vue'

    export default {
        name:'App',
        components:{Person}  // 注册组件
    }
</script>
```

​	`Person.vue`：

```vue
<template>
    <div class="person">
        <h3>姓名：{{name}}</h3>
        <h3>年龄：{{age}}</h3>
        <button @click="changeName">点击修改名字</button>
        <button @click="changeAge">点击修改年龄</button>
        <button @click="showTel()">查看联系电话</button>
    </div>
</template>

<!--<script lang="ts">-->
<!--    export default {-->
<!--        name:"Person",-->
        // setup() {
        //   console.log(this)  // Vue3中的this是undefined
        //   let name="张三"
        //   let age=18
        //   let tel='15880000000'
        //   function changeName() {
        //     name = "李四"
        //   }
        //   function changeAge () {
        //     age += 1
        //   }
        //   function showTel() {
        //     alert(tel)
        //   }
        //   return {
        //     name,age,tel,changeName,changeAge,showTel
        //   }
        // }
<!--    }-->
<!--</script>-->
<script lang="ts" setup name="Person">
    let name="张三"
    let age=18
    let tel='15880000000'
    function changeName() {
      name = "李四"
    }
    function changeAge () {
      age += 1
    }
    function showTel() {
      alert(tel)
    }
</script>

<style scoped>
    .person {
        background-color: skyblue;
        box-shadow: 0 0 10px;
        border-radius: 10px;
        padding: 20px;
    }
    button {
      margin: 0 3px
    }
</style>>
```

​	以上写法是`setup`语法糖的格式，但数据不是响应式的，也就不能实现修改姓名和年龄，因此我们需要使用`ref`创建响应式数据。

### 3.3.ref