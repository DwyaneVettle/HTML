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

![img](https://www.runoob.com/wp-content/uploads/2022/04/1__OJ4DRgn_7hq82F-DJfZTQ.png)

- **组合式 API (Composition API)：**通过组合式 API，我们可以使用导入的 API 函数来描述组件逻辑。在单文件组件中，组合式 API 通常会与 [``](https://cn.vuejs.org/api/sfc-script-setup.html) 搭配使用。这个 `setup` attribute 是一个标识，告诉 Vue 需要在编译时进行一些处理，让我们可以更简洁地使用组合式 API。比如，`<script setup>` 中的导入和顶层变量/函数都能够在模板中直接使用。

![image.png](https://gitee.com/zou_tangrui/note-pic/raw/master/img/202404171608281.webp)

![img](https://www.runoob.com/wp-content/uploads/2022/04/1_5XIfD_RUPMBJ6tRzr5OVJw.png)

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

### 3.3.ref-基本类型的响应式数据

​	在组合式 API 中，推荐使用 [`ref()`](https://cn.vuejs.org/api/reactivity-core.html#ref) 函数来声明响应式状态：

```vue
import { ref } from 'vue'

const count = ref(0)
```

​	上述数据返回一个RefImpl的实例对象，简称ref对象或ref，ref的value属性是响应式的。

​	`ref()` 接收参数，并将其包裹在一个带有 `.value` 属性的 ref 对象中返回：

```vue
const count = ref(0)

console.log(count) // { value: 0 }
console.log(count.value) // 0

count.value++
console.log(count.value) // 1
```

​	要在组件模板中访问 ref，请从组件的 `setup()` 函数中声明并返回它们：

```vue
import { ref } from 'vue'

export default {
  // `setup` 是一个特殊的钩子，专门用于组合式 API。
  setup() {
    const count = ref(0)

    // 将 ref 暴露给模板
    return {
      count
    }
  }
}
```

​	**注意**：在模板中使用 ref 时，我们**不**需要附加 `.value`。为了方便起见，当在模板中使用时，ref 会自动解包 (有一些[注意事项](https://cn.vuejs.org/guide/essentials/reactivity-fundamentals.html#caveat-when-unwrapping-in-templates))。

​	因此在Person.vue中就应该做以下修改，通过ref让数据变成响应式数据：

![](https://gitee.com/zou_tangrui/note-pic/raw/master/img/202404222244133.png)

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

<script lang="ts" setup name="Person">
    import {ref} from 'vue'

    let name=ref("张三")
    let age=ref(18)
    let tel='15880000000'
    function changeName() {
      name.value = "李四"
    }
    function changeAge () {
      age.value += 1
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

### 3.4.reactive-对象类型的相应式数据

​	还有另一种声明响应式状态的方式，即使用 `reactive()` API。与将内部值包装在特殊对象中的 ref 不同，`reactive()` 将使对象（普通对象、数组等）本身具有响应性：

```vue
import { reactive } from 'vue'

const state = reactive({ count: 0 })
```

​	在模板中使用：

```vue
<button @click="state.count++">
  {{ state.count }}
</button>
```

​	响应式对象是 [JavaScript 代理](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy)，其行为就和普通对象一样。不同的是，Vue 能够拦截对响应式对象所有属性的访问和修改，以便进行依赖追踪和触发更新。

​	`reactive()` 将深层地转换对象：当访问嵌套对象时，它们也会被 `reactive()` 包装。当 ref 的值是一个对象时，`ref()` 也会在内部调用它。与浅层 ref 类似，这里也有一个 [`shallowReactive()`](https://cn.vuejs.org/api/reactivity-advanced.html#shallowreactive) API 可以选择退出深层响应性。

​	将`Person.vue`代码改造为对象类型的相应式数据：

```vue
<template>
    <div class="person">
        <h3>一辆{{car.brand}}车，价值{{car.price}}万元</h3>
        <button @click="changePrice">加价10万</button>
        <hr>
        <ul>
          <li v-for="game in games" :key="game.id">{{game.name}}</li>
        </ul>
        <button @click="changeFirstGame">修改第一个游戏名字</button>
    </div>
</template>


<script lang="ts" setup name="Person">
    import {reactive} from 'vue'
    let car = reactive({
      brand:'奔驰',
      price:100
    })
    let games = reactive([
      {id:'001',name:'红色警戒'},
      {id:'002',name:'超级玛丽'},
      {id:'003',name:'忍者神龟'}
    ])
    function changePrice() {
        car.price += 10
    }
    function changeFirstGame() {
        games[0].name = '90坦克'
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

![image-20240422230829585](https://gitee.com/zou_tangrui/note-pic/raw/master/img/202404222308828.png)

​	**其实`ref`也能使对象类型的数据变为响应式数据。**我们将如上代码进行修改，使数组和对象分别用`ref`和`reactive`进行包裹，并打印car和games，我们发现使用`ref`包裹的数组对象的value值的底层仍然使用了`reactive`：

```vue
<script lang="ts" setup name="Person">
    import {reactive,ref} from 'vue'
    let car = ref({
      brand:'奔驰',
      price:100
    })
    let games = reactive([
      {id:'001',name:'红色警戒'},
      {id:'002',name:'超级玛丽'},
      {id:'003',name:'忍者神龟'}
    ])
    console.log(car)
    console.log(games)
    function changePrice() {
        car.value.price += 10
    }
    function changeFirstGame() {
        games[0].name = '90坦克'
    }
</script>
```

<img src="https://gitee.com/zou_tangrui/note-pic/raw/master/img/202404230959193.png" style="zoom: 80%;" />

### 3.5.`ref()`和`reactive()` API的对比

​	`reactive()`API有一些局限性：

- **有限的值类型**：它只能用于对象类型 (对象、数组和如 `Map`、`Set` 这样的[集合类型](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects#keyed_collections))。它不能持有如 `string`、`number` 或 `boolean` 这样的[原始类型](https://developer.mozilla.org/en-US/docs/Glossary/Primitive)。

- **不能替换整个对象**：由于 Vue 的响应式跟踪是通过属性访问实现的，因此我们必须始终保持对响应式对象的相同引用。这意味着我们不能轻易地“替换”响应式对象，因为这样的话与第一个引用的响应性连接将丢失：

  ```vue
  let state = reactive({ count: 0 })
  
  // 上面的 ({ count: 0 }) 引用将不再被追踪
  // (响应性连接已丢失！)
  state = reactive({ count: 1 })
  ```

- **对解构操作不友好**：当我们将响应式对象的原始类型属性解构为本地变量时，或者将该属性传递给函数时，我们将丢失响应性连接：

  ```vue
  const state = reactive({ count: 0 })
  
  // 当解构时，count 已经与 state.count 断开连接
  let { count } = state
  // 不会影响原始的 state
  count++
  
  // 该函数接收到的是一个普通的数字
  // 并且无法追踪 state.count 的变化
  // 我们必须传入整个对象以保持响应性
  callSomeFunction(state.count)
  ```

  由于这些限制，官方建议使用 `ref()` 作为声明响应式状态的主要 API。

  **`ref()`和`reactive()`的对比：**

- 宏观角度：

  ```vue
  1.ref用来定义：基本数据类型、对象数据类型
  2.reactive用来定义：对象数据类型
  ```

- 区别：

  ```vue
  1.ref创建的变量必须使用.value（可以使用volar插件的自动.value，在VSCode中找到该扩展进行如下图设置即可自动为你.value）
  2.reactive重新分配一个Proxy对象，会失去响应式（可以使用Object.assign整体替换）
  ```

  ![image-20240423102941150](https://gitee.com/zou_tangrui/note-pic/raw/master/img/202404231029219.png)

  ```vue
  <template>
      <div class="person">
          <h3>一辆{{car.brand}}车，价值{{car.price}}万元</h3>
          <button @click="changePrice">加价10万</button>
          <button @click="changeBrand">修改品牌</button>
          <button @click="changeCar">修改汽车对象</button>
  
      </div>
  </template>
  
  
  <script lang="ts" setup name="Person">
      import {reactive,ref} from 'vue'
      let car = ref({
        brand:'奔驰',
        price:100
      })
      // 可以修改属性
      function changePrice() {
          car.value.price += 10
      }
      function changeBrand() {
        car.value.brand = '宝马'
      }
      // 修改整个对象不可行，必须借助Object.assign()整体替换
      function changeCar() {
        // 以下方法直接修改都不可行
        // car = {brand:'奥迪',price:50}
        // car = reactive({brand:'奥迪',price:50})
  
        // 必须借助Object.assign()整体替换来修改一个对象
        Object.assign(car,{brand:'BYD',price:50})
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

  

- 使用原则：

  ```vue
  1.若需要一个基本类型的响应式数据，必须使用ref
  2.若需要使用一个响应式对象，层级不深，ref、reactive都可以
  3.若需要一个响应式对象，且层级较深，推荐使用reactive
  ```

  

### 3.6.toRef和toRefs

​	`toRefs()`函数的作用是将响应式对象的所有属性转换为单独的响应式数据，对象成为普通对象，并且值是关联的。在这个过程中`toRefs()`会做两件事：

1. 把一个响应式对象转换成普通对象；

2. 对该普通对象的每个属性都做一次ref操作，这样每个属性都是响应式的。

   **说明：**

- reactive 对象取出的所有属性值都是非响应式的，而利用 toRefs 可以将一个响应式 reactive 对象的所有原始属性转换为响应式的 ref 属性。

- reactive的响应式功能是赋值给对象，如果展开对象，会让数丢失响应的能力。

- 使用toRefs可以保证对象展开的每个属性都是响应式的。

  **应用场景：**

- 展开响应式对象时，想使用响应式对象中的多个或者所有属性做为响应式数据。

- 当函数返回响应式对象时，toRefs非常有用，这样消费组件就可以在不丢失响应式的情况下对返回的对象进行分解使用。

  **备注：**`toRef`和`toRefs`功能一致，但`toRefs`可以批量转换。

```vue
<template>
    <div class="person">
      <h3>姓名：{{name}}</h3>
      <h3>年龄：{{age}}</h3>
      <button @click="changeName">修改姓名</button>
      <button @click="changeAge">修改年龄</button>
    </div>
</template>


<script lang="ts" setup name="Person">
    import {reactive,toRefs} from 'vue'
    let person = reactive({
      name:'张三',
      age:18
    })
    // toRefs将reactive对象转换为普通对象，该普通对象的每个property都是一个ref
    // 这样就可以在模板中直接使用而不需要.value
    let {name,age} = toRefs(person)
    function changeName() {
      // name.value += '~'
      person.name += '~'
    }
    function changeAge() {
      // age.value += 1
      person.age += 1
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
</style>
```

![image-20240423113642738](https://gitee.com/zou_tangrui/note-pic/raw/master/img/202404231136896.png)

### 3.7.computed计算属性

​	模板中的表达式虽然方便，但也只能用来做简单的操作。如果在模板中写太多逻辑，会让模板变得臃肿，难以维护。比如说，我们有这样一个包含嵌套数组的对象：

```vue
const author = reactive({
  name: 'John Doe',
  books: [
    'Vue 2 - Advanced Guide',
    'Vue 3 - Basic Guide',
    'Vue 4 - The Mystery'
  ]
})
```

​	我们想根据 `author` 是否已有一些书籍来展示不同的信息：

```vue
<p>Has published books:</p>
<span>{{ author.books.length > 0 ? 'Yes' : 'No' }}</span>
```

​	这里的模板看起来有些复杂。我们必须认真看好一会儿才能明白它的计算依赖于 `author.books`。更重要的是，如果在模板中需要不止一次这样的计算，我们可不想将这样的代码在模板里重复好多遍。

​	因此我们推荐使用**计算属性**来描述依赖响应式状态的复杂逻辑。这是重构后的示例：

```vue
<template>
    <div class="person">
      <p>Has published books:</p>
      <span>{{ publishedBooksMessage }}</span>
    </div>
</template>

<script lang="ts" setup name="Person">
    import {reactive,computed} from 'vue'
    const author = reactive({
      name: 'Micheal Zou',
      books: [
        'Vue 2 - Advanced Guide',
        'Vue 3 - Basic Guide',
        'Vue 4 - The Mystery'
      ]
    })
    // 一个计算属性 ref
    const publishedBooksMessage = computed(() => {
      return author.books.length > 0 ? 'Yes' : 'No'
    })
</script>

<style scoped>
    .person {
        background-color: skyblue;
        box-shadow: 0 0 10px;
        border-radius: 10px;
        padding: 20px;
    }
</style>
```

​	我们在这里定义了一个计算属性 `publishedBooksMessage`。`computed()` 方法期望接收一个 getter 函数，返回值为一个**计算属性 ref**。和其他一般的 ref 类似，你可以通过 `publishedBooksMessage.value` 访问计算结果。计算属性 ref 也会在模板中自动解包，因此在模板表达式中引用时无需添加 `.value`。

​	Vue 的计算属性会自动追踪响应式依赖。它会检测到 `publishedBooksMessage` 依赖于 `author.books`，所以当 `author.books` 改变时，任何依赖于 `publishedBooksMessage` 的绑定都会同时更新。



**计算属性 VS 方法**

​	你可能注意到我们在表达式中像这样调用一个函数也会获得和计算属性相同的结果：

```vue
<p>{{ calculateBooksMessage() }}</p>


// 组件中
function calculateBooksMessage() {
  return author.books.length > 0 ? 'Yes' : 'No'
}
```

​	若我们将同样的函数定义为一个方法而不是计算属性，两种方式在结果上确实是完全相同的，然而，不同之处在于**计算属性值会基于其响应式依赖被缓存**。一个计算属性仅会在其响应式依赖更新时才重新计算。这意味着只要 `author.books` 不改变，无论多少次访问 `publishedBooksMessage` 都会立即返回先前的计算结果，而不用重复执行 getter 函数。

​	案例：

![image-20240423224437871](https://gitee.com/zou_tangrui/note-pic/raw/master/img/202404232244045.png)

```vue
<template>
    <div class="person">
      姓：<input v-model="firstName"> <br>
      名：<input v-model="lastName"> <br>
      全名：<span>{{fullName}}</span> <br>
    </div>
</template>

<script lang="ts" setup name="Person">
    import { ref, computed } from 'vue'
    const firstName = ref('Micheal')
    const lastName = ref('Zou')

    const fullName = computed({
      // getter
      get() {
        return firstName.value + ' ' + lastName.value
      },
      // setter
      set(newValue) {
        // 注意：我们这里使用的是解构赋值语法
        [firstName.value, lastName.value] = newValue.split(' ')
      }
    })
</script>

<style scoped>
    .person {
        background-color: skyblue;
        box-shadow: 0 0 10px;
        border-radius: 10px;
        padding: 20px;
    }
</style>
```

​	计算属性默认是只读的。当你尝试修改一个计算属性时，你会收到一个运行时警告。只在某些特殊场景中你可能才需要用到“可写”的属性，你可以通过同时提供 getter 和 setter 来创建。

​	现在当你再运行 `fullName.value = 'John Doe'` 时，setter 会被调用而 `firstName` 和 `lastName` 会随之更新。



### 3.8.侦听器

​	计算属性允许我们声明性地计算衍生值。然而在有些情况下，我们需要在状态变化时执行一些“副作用”：例如更改 DOM，或是根据异步操作的结果去修改另一处的状态。

​	在组合式 API 中，我们可以使用 [`watch` 函数](https://cn.vuejs.org/api/reactivity-core.html#watch)在每次响应式状态发生变化时触发回调函数。例如，当年龄大于18岁可以上网，当购物满200需要打9折，这些数据都是可以通过侦听`watch`器来完成的。

​	**侦听数据源类型：**`watch` 的第一个参数可以是不同形式的“数据源”：<font color="red">它可以是一个**`ref `(包括计算属性)、一个响应式对象、一个 `getter` 函数、或多个数据源组成的数组**</font>。

​	侦听器的语法格式为：

```vue
watch(监视的对象,callback,{监视配置项})
```



#### 3.8.1.监听ref定义的基本类型数据

![image-20240424103606567](https://gitee.com/zou_tangrui/note-pic/raw/master/img/202404241036933.png)

```vue
<template>
    <div class="person">
        <h1>1.监视ref定义的基本类型数据</h1>
        <h3>当前sum值为：{{sum}}</h3>
        <button @click="addSum()">点我+1</button>
    </div>
</template>

<script lang="ts" setup name="Person">
   import {ref,watch} from 'vue'

   let sum = ref(0)
   function addSum() {
      sum.value += 1
   }

   /* 监视属性-watch
   *  监视两个值：newValue表示新的值，oldValue表示旧的值
   *  监视属性有一个返回值，返回值是一个函数，该函数会在监视的属性发生变化时调用
   *
   * */
   const stopWatch = watch(sum,(newValue,oldValue)=>{
      console.log('sum的值变化了',newValue,oldValue)
     //当值大于10时停止监视
     if(newValue > 10) {
       stopWatch()
     }
   })
</script>

<style scoped>
    .person {
        background-color: skyblue;
        box-shadow: 0 0 10px;
        border-radius: 10px;
        padding: 20px;
    }
</style>
```

​	**即时回调的侦听器：**`watch` 默认是懒执行的：仅当数据源变化时，才会执行回调。但在某些场景中，我们希望在创建侦听器时，立即执行一遍回调。举例来说，我们想请求一些初始数据，然后在相关状态更改时重新请求数据。

​	我们可以通过传入 `immediate: true` 选项来强制侦听器的回调立即执行：

```vue
watch(
  source,
  (newValue, oldValue) => {
    // 立即执行，且当 `source` 改变时再次执行
  },
  { immediate: true }
)
```

​	**一次性侦听器：**每当被侦听源发生变化时，侦听器的回调就会执行。如果希望回调只在源变化时触发一次，请使用 `once: true` 选项：

```vue
watch(
  source,
  (newValue, oldValue) => {
    // 当 `source` 变化时，仅触发一次
  },
  { once: true }
)
```



#### 3.8.2.监听对象类型数据

​	`watch`也可以监听对象类型的数据，但监听对象类型数据时需要注意：当监视对象中的属性变化时，需要深层监视，即给`watch()`传递第三个参数，第三个参数是一个配置项`{deep:true}`

```vue
<template>
    <div class="person">
        <h1>2.监视对象类型数据</h1>
        <h3>姓名：{{person.name}}</h3>
        <h3>年龄：{{person.age}}</h3>
        <button @click="changeName">修改姓名</button>
        <button @click="changeAge">修改年龄</button>
        <button @click="changePerson">修改对象</button>
    </div>
</template>

<script lang="ts" setup name="Person">
    import {ref,watch} from 'vue'

    let person = ref({
      name:'Michealzou',
      age:30
    })
    function changeName() {
      person.value.name = 'Michealzou2'
    }
    function changeAge() {
      person.value.age = 35
    }
    function changePerson() {
      person.value = {
        name: 'Michealzou3',
        age: 36
      }
    }
    /*
      监视属性监视对象时若想监视内部属性的变化，需要深度监视
      1.Vue3中的watch默认不监测对象内部值的改变（一层）
      2.配置deep:true可以监测对象内部值改变（多层）
      备注：vue自身可以监测对象内部值的改变，但vue提供的watch默认不可以！
      3.使用reactive监视对象类型时，默认开启深度监视
     */
    const stopWatch = watch(person,(newValue,oldValue)=>{
      console.log('person的值变化了',newValue,oldValue)
    },{deep:true})
</script>

<style scoped>
    .person {
        background-color: skyblue;
        box-shadow: 0 0 10px;
        border-radius: 10px;
        padding: 20px;
    }
</style>
```

#### 3.8.3.监听一个getter函数

​	`getter()`函数即可以返回一个值，也就是对象类型中的某个属性，若该属性不是对象类型，需要写成函数形式；若该属性依然是对象类型，可以直接编写，也可以写函数，不过建议写成函数。

```vue
<template>
    <div class="person">
      <h3>姓名：{{person.name}}</h3>
      <h3>年龄：{{ person.age }}</h3>
      <h3>汽车：{{ person.car.c1 }}、 {{ person.car.c2 }}</h3>
      <button @click="changeName">修改名字</button>
      <button @click="changeAge">修改年龄</button>
      <button @click="changeC1">修改汽车c1</button>
      <button @click="changeC2">修改汽车c2</button>
      <button @click="changeCar">修改汽车</button>
    </div>
</template>

<script lang="ts" setup name="Person">
    import {reactive,watch} from 'vue'

    let person = reactive({
      name:'Michealzou',
      age: 30,
      car: {
        c1:'奔驰',
        c2:'宝马'
      }
    })

    function changeName() {
      person.name += "~"
    }
    function changeAge() {
      person.age += 1
    }
    function changeC1() {
      person.car.c1 = "奥迪"
    }
    function changeC2() {
      person.car.c2 = "大众"
    }
    function changeCar() {
      person.car = {c1:'特斯拉',c2:'比亚迪'}
    }

    /*
    *  监视ref所定义的对象中的某个属性，且该属性是基本类型时，要写成函数式
    * */
    watch(() => person.name,(newVal,oldVal) =>{
      console.log('person.name变化了',newVal,oldVal)
    })
    /*
    *   监视响应式响应式对象中的某个属性，且该属性是对象类型时，可以直接写，也可以写函数
    *   但更推荐写函数，因为这样可以避免深度监视
    * */
    watch(() => person.car,(newVal,oldVal)=> {
      console.log('person.car变化了',newVal,oldVal)
    })
</script>

<style scoped>
    .person {
        background-color: skyblue;
        box-shadow: 0 0 10px;
        border-radius: 10px;
        padding: 20px;
    }
</style>
```

#### 3.8.3.监视一个数组

​	当需要监听上述多个数据时，可以使用数组的形式进行传递：

```vue
<template>
    <div class="person">
      <h3>姓名：{{person.name}}</h3>
      <h3>年龄：{{ person.age }}</h3>
      <h3>汽车：{{ person.car.c1 }}、 {{ person.car.c2 }}</h3>
      <button @click="changeName">修改名字</button>
      <button @click="changeAge">修改年龄</button>
      <button @click="changeC1">修改汽车c1</button>
      <button @click="changeC2">修改汽车c2</button>
      <button @click="changeCar">修改汽车</button>
    </div>
</template>

<script lang="ts" setup name="Person">
    import {reactive,watch} from 'vue'

    let person = reactive({
      name:'Michealzou',
      age: 30,
      car: {
        c1:'奔驰',
        c2:'宝马'
      }
    })

    function changeName() {
      person.name += "~"
    }
    function changeAge() {
      person.age += 1
    }
    function changeC1() {
      person.car.c1 = "奥迪"
    }
    function changeC2() {
      person.car.c2 = "大众"
    }
    function changeCar() {
      person.car = {c1:'特斯拉',c2:'比亚迪'}
    }

    watch([() => person.car.c1,() => person.name],(newVal,oldVal)=> {
      console.log('person.car变化了',newVal,oldVal)
    })
</script>

<style scoped>
    .person {
        background-color: skyblue;
        box-shadow: 0 0 10px;
        border-radius: 10px;
        padding: 20px;
    }
</style>
```

#### 3.8.4.`watchEffect()`

​	侦听器的回调使用与源完全相同的响应式状态是很常见的。例如下面的代码，在每当 `todoId` 的引用发生变化时使用侦听器来加载一个远程资源：

```vue
<template>
    <div class="person">
      {{ todoId }}
      {{ data }}
    </div>
</template>

<script lang="ts" setup name="Person">
    import {ref,watch} from 'vue'

    const todoId = ref(1)
    const data = ref(null)

    watch(
        todoId,
        async () => {
          const response = await fetch(
              `https://jsonplaceholder.typicode.com/todos/${todoId.value}`
          )
          data.value = await response.json()
        },
        { immediate: true }
    )
</script>

<style scoped>
    .person {
        background-color: skyblue;
        box-shadow: 0 0 10px;
        border-radius: 10px;
        padding: 20px;
    }
</style>

```

​	特别是注意侦听器是如何两次使用 `todoId` 的，一次是作为源，另一次是在回调中。我们可以用 [`watchEffect` 函数](https://cn.vuejs.org/api/reactivity-core.html#watcheffect) 来简化上面的代码。`watchEffect()` 允许我们自动跟踪回调的响应式依赖。上面的侦听器可以重写为：

```vue
watchEffect(async () => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${todoId.value}`
  )
  data.value = await response.json()
})
```

​	这个例子中，回调会立即执行，不需要指定 `immediate: true`。在执行期间，它会自动追踪 `todoId.value` 作为依赖（和计算属性类似）。每当 `todoId.value` 变化时，回调会再次执行。有了 `watchEffect()`，我们不再需要明确传递 `todoId` 作为源值。

​	对于这种只有一个依赖项的例子来说，`watchEffect()` 的好处相对较小。但是对于有多个依赖项的侦听器来说，使用 `watchEffect()` 可以消除手动维护依赖列表的负担。此外，如果你需要侦听一个嵌套数据结构中的几个属性，`watchEffect()` 可能会比深度侦听器更有效，因为它将只跟踪回调中被使用到的属性，而不是递归地跟踪所有的属性。

**watch  VS watchEffect：**`watch` 和 `watchEffect` 都能响应式地执行有副作用的回调。它们之间的主要区别是追踪响应式依赖的方式：

- `watch` 只追踪明确侦听的数据源。它不会追踪任何在回调中访问到的东西。另外，仅在数据源确实改变时才会触发回调。`watch` 会避免在发生副作用时追踪依赖，因此，我们能更加精确地控制回调函数的触发时机。
- `watchEffect`则会在副作用发生期间追踪依赖。它会在同步执行过程中，自动追踪所有能访问到的响应式属性。这更方便，而且代码往往更简洁，但有时其响应性依赖关系会不那么明确。

```vue
<template>
    <div class="person">
      <h3>当身高超过170，体重超过60就输出《身体非常棒》</h3>
      <p>身高：{{ height }}</p>
      <p>体重：{{ weight }}</p>
      <button @click="changeHeight">点我身高+10</button>
      <button @click="changeWeight">点我体重+10</button>
    </div>
</template>

<script lang="ts" setup name="Person">
    import {ref,watch,watchEffect} from 'vue'

    let height = ref(100)
    let weight = ref(40)

    function changeHeight() {
        height.value += 10
    }
    function changeWeight() {
      weight.value += 10
    }

    // 监视体重和身高
    /*watch([height,weight],() => {
      if(height .value > 170 || weight.value > 60) {
        console.log("身体非常棒")
      }
    })*/
    /*
    *   watchEffect()会自动监听，它会立即执行（相当于watch配置了{immetiate:true}）
    * */
    watchEffect(() => {
      if(height .value > 170 || weight.value > 60) {
        console.log("身体非常棒")
      }
    })
</script>

<style scoped>
    .person {
        background-color: skyblue;
        box-shadow: 0 0 10px;
        border-radius: 10px;
        padding: 20px;
    }
</style>
```



### 3.9.props

​	一个组件需要显式声明它所接受的 `props`，这样 Vue 才能知道外部传入的哪些是 `props`，哪些是透传 `attribute`（父组件向子组件传递）。在使用 `<script setup>` 的单文件组件中，props 可以使用 `defineProps()` 宏来声明：

```vue
<script setup>
const props = defineProps(['foo'])

console.log(props.foo)
</script>
```

​	在没有使用 `<script setup>` 的组件中，prop 可以使用 [`props`](https://cn.vuejs.org/api/options-state.html#props) 选项来声明：

```vue
export default {
  props: ['foo'],
  setup(props) {
    // setup() 接收 props 作为第一个参数
    console.log(props.foo)
  }
}
```

​	注意传递给 `defineProps()` 的参数和提供给 `props` 选项的值是相同的，两种声明方式背后其实使用的都是 prop 选项。除了使用字符串数组来声明 prop 外，还可以使用对象的形式：

```vue
// 使用 <script setup>
defineProps({
  title: String,
  likes: Number
})
    
    
// 非 <script setup>
export default {
  props: {
    title: String,
    likes: Number
  }
}
```

**案例：**

1.在src下创建`types/index.ts`，用于限制Person的类型：

```ts
// 定义一个接口，用于限制person对象的具体属性
export interface PersonInter {
    id: string,
    name: string,
    age: number
}

// 自定义一个类型
export type Persons = PersonInter[]
```

2.`App.vue`：

```vue
<template>
        <!-- 组件标签，给Person组件传递list -->
         <Person :list="personList"/>
</template>

<script lang="ts" setup name="App">
    import Person from './components/Person.vue'
    import {Persons} from '@/types'
    import {reactive}from 'vue'

    let personList = reactive<Persons>([
      {id:"001",name:"张三",age:18},
      {id:"002",name:"李四",age:20},
      {id:"003",name:"王五",age:30}
    ])
</script>

<style>
</style>
```

3.`Person.vue`

```vue
<template>
    <div class="person">
      <ul>
        <li v-for="personObj in list" :key="personObj.id">
          {{ personObj.name }}-{{ personObj.age }}
        </li>
      </ul>
    </div>
</template>

<script lang="ts" setup name="Person">
    import {defineProps,withDefaults} from 'vue'
    import {Persons} from '@/types'

    // 接收父组件App传递过来的list
    // 这里定义的list，在模板中可以直接使用
    // defineProps(['list'])

    // 接收父组件APP传递过来的list并限制类型
    // defineProps<{list:Persons}>()

    // 接收list+限定类型+限定必要性(用?限定)+指定默认值(假定父组件没有传递list)
    withDefaults(defineProps<{list?:Persons}>(),{
      list:() => [{
        id: '007',
        name: '李坤',
        age: 30
      }]
    })
</script>

<style scoped>
    .person {
        background-color: skyblue;
        box-shadow: 0 0 10px;
        border-radius: 10px;
        padding: 20px;
    }
</style>
```

​	父组件传递`list`时：

![image-20240425112639918](https://gitee.com/zou_tangrui/note-pic/raw/master/img/202404251126056.png)

​	父组件不传递`list`时，根据默认值显示：

![image-20240425112725964](https://gitee.com/zou_tangrui/note-pic/raw/master/img/202404251127916.png)

### 3.10.生命周期

​	Vue2的生命周期分为4个阶段：创建、挂载、更新、销毁，与之匹配的是8个生命钩子，即创建前`beforeCreate`、`Created`、`beforeMount`、`Mounted`、`beforeUpdate`、`Updated`、`beforeDestory`、`Destoryed`，其详细的执行时期如下图：

<img src="https://gitee.com/zou_tangrui/note-pic/raw/master/img/202302171627931.png" style="zoom: 50%;" />

​	Vue3生命钩子也分为4个阶段：创建阶段setup，挂载阶段(onBeforeMount, onMounted)，更新阶段(onBeforeUpdate,onUpdated)，卸载阶段(onBeforeUnmount,onUnmounted)，常用的生命钩子有：onMounted，onUpdated，onBeforeUnmount：

![组件生命周期图示](https://gitee.com/zou_tangrui/note-pic/raw/master/img/202405081356446.png)

修改`Person.vue`：

```vue
<template>
    <div class="person">
      <h3>当前值为：{{ sum }}</h3>
      <button @click="add">点我sum+1</button>
    </div>
</template>

<script lang="ts" setup name="Person">
import {onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onUnmounted, onUpdated, ref} from 'vue'

    let sum = ref(0)

    function add() {
      sum.value += 1
    }

    // 创建-来自setup
    console.log("创建。。。")

    // 挂载前
    onBeforeMount(() =>{
      console.log("挂载前。。。")
    })

    // 挂载完毕
    onMounted(() =>{
      console.log("挂载完毕。。。")
    })

    // 更新前
    onBeforeUpdate(() => {
      console.log("更新前。。。")
    })

    // 更新完毕
    onUpdated(() => {
      console.log("更新完毕。。。")
    })

    // 卸载前
    onBeforeUnmount(() => {
      console.log("卸载前。。。")
    })

    // 卸载完毕
    onUnmounted(() => {
      console.log("卸载完毕。。。")
    })
</script>

<style scoped>
    .person {
        background-color: skyblue;
        box-shadow: 0 0 10px;
        border-radius: 10px;
        padding: 20px;
    }
</style>
```

在`App.vue`中引入的Person组件添加v-if指令，修改v-if的值，使其隐藏，并调用到卸载的生命钩子：

```vue
<template>
         <Person v-if="isShow"/>
</template>

<script lang="ts" setup name="App">
    import Person from './components/Person.vue'
    import { ref } from 'vue'

    let isShow = ref(true)
</script>

<style>
</style>
```

​	**在生命周期中，App钩子是最后执行的。**



### 3.11.hooks

​	`hook`是钩子的意思，看到“钩子”是不是就想到了钩子函数，事实上，`hooks `还真是函数的一种写法。vue3 借鉴 react hooks 开发出了 Composition API ，所以也就意味着 Composition API 也能进行自定义封装 hooks。

​	vue3 中的 hooks 就是函数的一种写法，就是将文件的一些单独功能的js代码进行抽离出来，放到单独的js文件中，或者说是一些可以复用的公共方法/功能。其实 hooks 和 vue2 中的 mixin 有点类似，但是相对 mixins 而言， hooks 更清楚复用功能代码的来源, 更清晰易懂。

​	使用方法：

```text
1.在src下创建一个hooks文件夹，用于存放hook文件
2.根据需要写的hook在hooks下创建ts文件，命名规则是使用use开头(useXxx.ts)，如useStudent.ts
3.使用函数包裹hook内部的数据和方法，并且导出该函数，在函数内部需要返回所有的数据和方法
4.在组件中引入hook文件中的数据和方法。
```

**示例：**

`Person.vue`：

```vue
<template>
    <div class="person">
      <h3>当前值为：{{ sum }}</h3>
      <button @click="add">点我sum+1</button>
      <ul>
        <li v-for="(student,index) in students" :key="index">
          {{ student.name }} - {{ student.age }}
        </li>
      </ul>
      <button @click="updateFirstName">点我修改第一个学生名字</button>
    </div>
</template>

<script lang="ts" setup name="Person">
import { ref, reactive } from 'vue'

    // 数据
    let students = reactive([
          { name: '张三', age: 18 },
          { name: '李四', age: 20 },
          { name: '王五', age: 24 },
        ])
    let sum = ref(0)

    function add() {
      sum.value += 1
    }

    function updateFirstName() {
      students[0].name = '张三丰'
    }
</script>

<style scoped>
    .person {
        background-color: skyblue;
        box-shadow: 0 0 10px;
        border-radius: 10px;
        padding: 20px;
    }
</style>
```

​	上述代码，我们将sum相加和student两个不相关的业务放到了一个组件中，这样使代码的可维护性降低，所以我们在src下创建hooks文件夹，再在该文件夹下创建`useSum.ts`和`useStudent.ts`两个文件，并把之前的代码粘贴过来进行改进，具体代码如下：

`useSum.ts`：

```typescript
import { ref } from 'vue'

// 默认暴露
export default function () {
    // 数据
    let sum = ref(0)
    // 方法
    function add() {
        sum.value += 1
    }
    // 向外部提供数据和函数
    return { sum, add }
}
```

`useStudent.ts`：

```typescript
import { reactive } from 'vue'

export default function () {
    // 数据
    let students = reactive([
        { name: '张三', age: 18 },
        { name: '李四', age: 20 },
        { name: '王五', age: 24 },
    ])
    // 方法
    function updateFirstName() {
        students[0].name = '张三丰'
    }
    // 向外部提供数据
    return { students,updateFirstName }
}
```

在`Person.vue`中引入hook文件中返回的方法和数据：

```vue
<template>
    <div class="person">
      <h3>当前值为：{{ sum }}</h3>
      <button @click="add">点我sum+1</button>
      <ul>
        <li v-for="(student,index) in students" :key="index">
          {{ student.name }} - {{ student.age }}
        </li>
      </ul>
      <button @click="updateFirstName">点我修改第一个学生名字</button>
    </div>
</template>

<script lang="ts" setup name="Person">
  import useSum  from "@/hooks/useSum";
  import useStudent from "@/hooks/useStudent";

  const {sum,add} = useSum();
  const {students,updateFirstName} = useStudent();
</script>

<style scoped>
    .person {
        background-color: skyblue;
        box-shadow: 0 0 10px;
        border-radius: 10px;
        padding: 20px;
    }
</style>
```

​	刷新页面，和之间运行的效果一样：

![image-20240508122238340](https://gitee.com/zou_tangrui/note-pic/raw/master/img/202405081355406.png)

## 4.路由

​	服务端路由指的是服务器根据用户访问的 URL 路径返回不同的响应结果。当我们在一个传统的服务端渲染的 web 应用中点击一个链接时，浏览器会从服务端获得全新的 HTML，然后重新加载整个页面。

​	然而，在[单页面应用](https://developer.mozilla.org/en-US/docs/Glossary/SPA)中，客户端的 JavaScript 可以拦截页面的跳转请求，动态获取新的数据，然后在无需重新加载的情况下更新当前页面。这样通常可以带来更顺滑的用户体验，尤其是在更偏向“应用”的场景下，因为这类场景下用户通常会在很长的一段时间中做出多次交互。

​	在这类单页应用中，“路由”是在客户端执行的。一个客户端路由器的职责就是利用诸如 [History API](https://developer.mozilla.org/en-US/docs/Web/API/History) 或是 [`hashchange` 事件](https://developer.mozilla.org/en-US/docs/Web/API/Window/hashchange_event)这样的浏览器 API 来管理应用当前应该渲染的视图。

​	Vue所支持的官方路由是Vue-Router。它与 Vue.js 核心深度集成，让用 Vue.js 构建单页应用变得轻而易举。功能包括：

- 嵌套路由映射
- 动态路由选择
- 模块化、基于组件的路由配置
- 路由参数、查询、通配符
- 展示由 Vue.js 的过渡系统提供的过渡效果
- 细致的导航控制
- 自动激活 CSS 类的链接
- HTML5 history 模式或 hash 模式
- 可定制的滚动行为
- URL 的正确编码 

### 4.1.路由操作基本切换效果

​	在H5C3阶段，都是通过a标签来实现页面跳转，但在Vue中，我们需要通过路由来实现。现需完成如下页面，通过点击按钮，下面的内容也随之实现联动变化：

![](https://gitee.com/zou_tangrui/note-pic/raw/master/img/202405131624163.gif)

1.删除之前的所有文件，在App.vue中创建如下代码：

```vue
<template>
         <div class="app">
           <h3 class="title">vue路由测试</h3>
           <div class="navigate">
             <a href="#" class="active">首页</a>
             <a href="#">新闻</a>
             <a href="#">关于</a>
           </div>
           <div class="main-content">
               实现页面跳转的组件
           </div>
         </div>
</template>

<script lang="ts" setup name="App">

</script>

<style>
    .title {
      text-align: center;
      word-spacing: 5px;
      margin: 30px 0;
      height: 70px;
      line-height: 70px;
      background-image: linear-gradient(45deg,gray,white);
      border-radius: 10px;
      box-shadow: 0 0 2px;
      font-size: 30px;
    }
    .navigate {
      display: flex;
      justify-content: space-around;
      margin: 0 100px;
    }
    .navigate a {
      display: block;
      text-align: center;
      width: 90px;
      height: 40px;
      line-height: 40px;
      border-radius: 10px;
      background-color: gray;
      text-decoration: none;
    }
    .navigate a.active {
      background-color: #64967E;
      color: #ffc268;
      font-weight: 900;
      text-shadow: 0 0 1px black;
      font-family: 微软雅黑,serif;
    }
    .main-content {
      margin: 0 auto;
      margin-top: 30px;
      border-radius: 10px;
      width: 90%;
      height: 400px;
      border: 1px solid;
    }
</style>
```

2.在src/components下分别创建Home.vue、News.vue、About.vue：

```vue
<template>
  <div class="home">
    <p>
      欢迎来到首页
    </p>
  </div>
</template>

<script setup lang="ts" name="Home">

</script>

<style scoped></style>
```

```vue
<template>
  <div class="news">
    <p>
      新闻页面
    </p>
  </div>
</template>

<script setup lang="ts" name="News">

</script>

<style scoped></style>
```

```vue
<template>
  <div class="about">
    <p>
      欢迎来到about
    </p>
  </div>
</template>

<script setup lang="ts" name="About">

</script>

<style scoped></style>
```

3.下载路由：

```shell
npm install vue-router
```

4.在src/router下创建index.ts，用于配置路由项：

```vue
// 创建一个路由器，并暴露
// 1.引入 createRouter,createWebHistory
import { createRouter,createWebHistory } from 'vue-router'
// 引入路由组件
import Home from '@/components/Home.vue'
import News from '@/components/News.vue'
import About from '@/components/About.vue'

// 2.创建路由器
const router = createRouter({
    history: createWebHistory(), // 路由器工作模式
    // 配置路由
    routes: [
        {
            path: '/home',
            component: Home
        },
        {
            path: '/news',
            component: News
        },
        {
            path: '/about',
            component: About
        }
    ]
})

// 3.导出路由器
export default router
```

5.在main.ts中使用路由：

<img src="https://gitee.com/zou_tangrui/note-pic/raw/master/img/202405131631692.png" style="zoom:50%;" />

6.在App.vue中引入路由，并实现路由跳转，即把原来的a标签修改为RouterLink，href属性修改为to属性，active-class表示出发时生效：

```vue
<template>
         <div class="app">
           <h3 class="title">vue路由测试</h3>
           <div class="navigate">
             <!-- 使用 router-link 组件进行导航 -->
             <!-- 通过传递 `to` 来指定链接 -->
             <!-- `<router-link>` 将呈现一个带有正确 `href` 属性的 `<a>` 标签 -->
             <RouterLink to="/home" active-class="active">首页</RouterLink>
             <RouterLink to="/news" active-class="active">新闻</RouterLink>
             <RouterLink to="/about" active-class="active">关于</RouterLink>
           </div>
           <div class="main-content">
               <!-- 路由出口 -->
  			   <!-- 路由匹配到的组件将渲染在这里 -->
               <RouterView></RouterView>
           </div>
         </div>
</template>

<script lang="ts" setup name="App">
  import { RouterView,RouterLink } from 'vue-router'

</script>
```

### 4.2.两个注意事项

```text
1.路由组件通常放到pages或views文件夹，一般组件通常存放在components文件夹（以该组件名为标签名添加到页面的就是一般组件，如Header.vue--> <Header/>）
2.通过点击导航，视觉效果上“消失”了的路由组件，默认是被卸载掉的，需要的时候再挂载上去
```

![image-20240513165225335](https://gitee.com/zou_tangrui/note-pic/raw/master/img/202405131652414.png)

### 4.3.路由的两种工作模式

**1.history模式：**

```vue
优点：URL更加美观，路径中不带#，更接近传统URL
缺点：项目上线时，需要服务端配合处理路径问题，否则404
用法:
const router = createRouter({
	history:createWebHistory(),
	...
})
```

**2.history模式：**

```vue
优点：兼容性更好，因为不需要服务器处理路径
缺点：URL中有#，SEO优化方面相对较差
用法：
const router = createRouter({
	history:createWebHashHistory,
	...
})
```

### 4.4.to的两种写法

```vue
<!-- 1.字符串方式 -->
<RouterLink to="/home" active-class="active">首页</RouterLink>

<!-- 2.对象方式 -->
<RouterLink :to="{path:"/home"}" active-class="active">首页</RouterLink>
```

### 4.5.命名路由

作用：简化路由跳转及参数

用法：在routes配置中，通过name属性命名该路由

给路由规则命名：

```vue
// 配置路由
    routes: [
        {
            name:'zhuye',
            path: '/home',
            component: Home
        },
        {
            name:'xinwen',
            path: '/news',
            component: News
        },
        {
            name:'guanyu',
            path: '/about',
            component: About
        }
    ]
```

配置了命名路由后，使用路由的地方就可以用name属性跳转：

```vue
<RouterLink :to="{name:'xinwen'}" active-class="active">新闻</RouterLink>
```

### 4.6.嵌套路由

​	一些应用程序的 UI 由多层嵌套的组件组成。在这种情况下，URL 的片段通常对应于特定的嵌套组件结构，例如：

```text
/user/johnny/profile                     /user/johnny/posts
+------------------+                  +-----------------+
| User             |                  | User            |
| +--------------+ |                  | +-------------+ |
| | Profile      | |  +------------>  | | Posts       | |
| |              | |                  | |             | |
| +--------------+ |                  | +-------------+ |
+------------------+                  +-----------------+
```

​	将上面案例的代码进行改造，我们期望在新闻中有嵌套的页面呈现：

![](https://gitee.com/zou_tangrui/note-pic/raw/master/img/202405141157101.gif)

​	**操作步骤：**

1.改造News.vue，让其拥有一个新闻详情页的数据：

```vue
<template>
  <div class="news">
    <!-- 新闻的导航区 -->
    <ul>
      <li v-for="news in newsList" :key="news.id">
          <RouterLink to="/news/detail">{{news.title}}</RouterLink>>
      </li>
    </ul>
    <!--  新闻展示区 -->
    <div class="news-content">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<script setup lang="ts" name="News">
  import { reactive } from 'vue'
  import { RouterView,RouterLink } from 'vue-router'
  const newsList = reactive([
    {id:'001',title:'四川',content:'天府之国'},
    {id:'002',title:'湖北',content:'就省通衢'},
    {id:'003',title:'江苏',content:'鱼米之乡'},
    {id:'004',title:'广东',content:'开放前沿'},
    {id:'005',title:'山东',content:'礼仪之乡'},
  ])

</script>

<style scoped>

</style>
```

2.创建pages/Detail.vue，用于呈现新闻详情页：

```vue
<template>
  <ul class="news-list">
    <li>编号：xxx</li>
    <li>标题：xxx</li>
    <li>内容：xxx</li>
  </ul>
</template>

<script setup name="Detail" lang="ts">

</script>

<style scoped>
  .news-list {
    list-style: none;
    padding-left: 20px;
  }
  .news-list > li {
    line-height: 30px;
  }
</style>
```

3.配置router/index.ts，让news中新增子路由：

```vue
{
      name:'xinwen',
      path: '/news',
      component: News,
      children:[
          {
             path: 'detail',
             component: Detail
          }
      ]
}
```

刷新页面 ，在新闻页就可以看到嵌套路由的呈现。



### 4.7.路由传递参数

​	上述的案例中并没有完成点击新闻标题呈现对应的新闻内容。这是因为我们并没有将值传递给展示区域，要想传递值，需要传递参数。路由传参的方式有两种，分别为query和params。

#### 4.7.1.query参数

​	query传参的方式就是在URL上拼接参数，使用k-v结构进行传参，多组参数间使用&进行拼接，并在双引号中使用模板字符串，即通过反斜杠`包裹，再使用$()的方式解析参数。使用query传参的步骤如下：

1.在News.vue中传递参数:

```vue
<!-- 新闻的导航区 -->
    <ul>
      <li v-for="news in newsList" :key="news.id">
          <!-- 第一种写法：模板字符串 -->
          <!--<RouterLink :to="`/news/detail?id=${news.id}&title=${news.title}&content=${news.content}`">{{news.title}}</RouterLink>>-->
          <!-- 第二种写法：对象写法 -->
          <RouterLink :to="{
            path:'/news/detail',
            query:{
              id:news.id,
              title:news.title,
              content:news.content
            }}">
            {{ news.title }}
          </RouterLink>
      </li>

</ul>
```

2.在Detail.vue中引入useRoute，通过它来传递参数：

```vue
<template>
  <ul class="news-list">
    <li>编号：{{ route.query.id }}</li>
    <li>标题：{{ route.query.title }}</li>
    <li>内容：{{ route.query.content }}</li>
  </ul>
</template>

<script setup name="Detail" lang="ts">
  import {useRoute} from "vue-router";
  const route = useRoute();
  // console.log(route)
</script>

<style scoped>
  .news-list {
    list-style: none;
    padding-left: 20px;
  }
  .news-list > li {
    line-height: 30px;
  }
</style>

```

上述写法可以通过toRefs结构，简化代码：

```vue
// 1.引入toRefs进行结构，将route交给query
import {toRefs} from "vue";

const route = useRoute();
const {query} = toRefs(route)

// 2.简化写法
<ul class="news-list">
    <li>编号：{{ query.id }}</li>
    <li>标题：{{ query.title }}</li>
    <li>内容：{{ query.content }}</li>
</ul>
```



#### 4.7.2.params参数

​	还原4.7.1之前的代码，使用params传参的方式也是可以的。params传参使用动态字段冒号的方式传递`{ path: '/users/:id', component: User }`。

1.修改router/index.ts路由规则，利用冒号占位方式传参：

```
{
            name:'xinwen',
            path: '/news',
            component: News,
            children:[
                {
                    name:'news-detail',
                    path: 'detail/:id/:title/:content',
                    component: Detail
                }
            ]
},
```

2.修改Detail.vue的现实内容：

```vue
<template>
  <ul class="news-list">
    <li>编号：{{ route.params.id }}</li>
    <li>标题：{{ route.params.title }}</li>
    <li>内容：{{ route.params.content }}</li>
  </ul>
</template>

<script setup name="Detail" lang="ts">
  import {useRoute} from "vue-router";

  const route = useRoute();

</script>
```

3.修改News.vue传递参数的方式（注意：对象传参方式只能使用命名路由）：

```vue
<!-- 新闻的导航区 -->
    <ul>
      <li v-for="news in newsList" :key="news.id">
          <!-- 第一种写法：模板字符串 -->
          <!--<RouterLink :to="`/news/detail?id=${news.id}&title=${news.title}&content=${news.content}`">{{news.title}}</RouterLink>>-->
          <!-- 第二种写法：对象写法 -->
          <RouterLink :to="{
            // path:'/news/detail', 不能用path，因为path是路径，而params是参数，必须使用命名路由
            name:'news-detail',
            params:{
              id:news.id,
              title:news.title,
              content:news.content
            }}">
            {{ news.title }}
          </RouterLink>
      </li>

</ul>
```

### 4.8.路由的props配置

​	上述案例中，我们在Detail.vue中引入的id、title、content都是通过`route.param.xxx`的方式编写的，这使得代码的可读性较差，显得比较臃肿。此时我们可以在路由规则中新增`props`配置，简化代码，让路由组件更方便的接收参数。`props`的写法有如下三种：

```vue
{
	name:'news-detail',
	path:'detail/:id/:title/:content',
	component:Detail,

  // props的对象写法，作用：把对象中的每一组key-value作为props传给Detail组件
  // props:{a:1,b:2,c:3}, 

  // props的布尔值写法，作用：把收到了每一组params参数，作为props传给Detail组件
  // props:true
  
  // props的函数写法，作用：把返回的对象中每一组key-value作为props传给Detail组件
  	props(route){
    	return route.query
  }
}
```

​	此时我们在Detail.vue中就可以简化操作：

```vue
<template>
  <ul class="news-list">
    <li>编号：{{ id }}</li>
    <li>标题：{{ title }}</li>
    <li>内容：{{ content }}</li>
  </ul>
</template>

<script setup name="Detail" lang="ts">
  import {defineProps} from "vue";

  defineProps(['id', 'title', 'content'])

</script>
```

### 4.9.replace属性

    1. 作用：控制路由跳转时操作浏览器历史记录的模式。
    2. 浏览器的历史记录有两种写入方式：分别为```push```和```replace```：
    
       - ```push```是追加历史记录（默认值）。
       - `replace`是替换当前记录。
    3. 开启`replace`模式：

```vue
<RouterLink replace .......>News</RouterLink>
```

### 4.10.编程式导航

​	除了使用 `<router-link>` 创建 a 标签来定义导航链接，我们还可以借助 router 的实例方法，通过编写代码来实现。

​	实际就是脱离<router-link>来实现跳转。

**导航到不同位置：**

注意: 下面的示例中的 `router` 指代路由器实例。在组件内部，你可以使用 `$router` 属性访问路由，例如 `this.$router.push(...)`。如果使用组合式 API，你可以通过调用 [`useRouter()`](https://router.vuejs.org/zh/guide/advanced/composition-api.html) 来访问路由器。**

想要导航到不同的 URL，可以使用 `router.push` 方法。这个方法会向 history 栈添加一个新的记录，所以，当用户点击浏览器后退按钮时，会回到之前的 URL。

当你点击 `<router-link>` 时，内部会调用这个方法，所以点击 `<router-link :to="...">` 相当于调用 `router.push(...)` ：

| 声明式                    | 编程式             |
| :------------------------ | :----------------- |
| `<router-link :to="...">` | `router.push(...)` |

```vue
// 字符串路径
router.push('/users/eduardo')

// 带有路径的对象
router.push({ path: '/users/eduardo' })

// 命名的路由，并加上参数，让路由建立 url
router.push({ name: 'user', params: { username: 'eduardo' } })

// 带查询参数，结果是 /register?plan=private
router.push({ path: '/register', query: { plan: 'private' } })

// 带 hash，结果是 /about#team
router.push({ path: '/about', hash: '#team' })
```



**替换当前位置：**

它的作用类似于 `router.push`，唯一不同的是，它在导航时不会向 history 添加新记录，正如它的名字所暗示的那样——它取代了当前的条目。

| 声明式                            | 编程式                |
| :-------------------------------- | :-------------------- |
| `<router-link :to="..." replace>` | `router.replace(...)` |

也可以直接在传递给 `router.push` 的 `to` 参数中增加一个属性 `replace: true` ：

```vue
router.push({ path: '/home', replace: true })
// 相当于
router.replace({ path: '/home' })
```

**需求1：进入首页3秒后自动跳转到新闻。**

在Home.vue中修改代码：

```vue
<script setup lang="ts" name="Home">
  import { onMounted } from 'vue'
  import { useRouter } from 'vue-router'

  const router = useRouter()

  onMounted(() => {
    setTimeout(() => {
      router.push('/news')
    }, 3000)
  })
</script>
```

**需求2：在新闻各个标签前添加按钮，通过点击按钮实现新闻内容的呈现：**

在News.vue中添加按钮，导入useRouter，并编写方法：

```vue
<template>
  <div class="news">
    <!-- 新闻的导航区 -->
    <ul>
      <li v-for="news in newsList" :key="news.id">
          <button @click="showNewsDetail(news)">查看新闻</button>
          <RouterLink :to="{
            // path:'/news/detail', 不能用path，因为path是路径，而params是参数，必须使用命名路由
            name:'news-detail',
            params:{
              id:news.id,
              title:news.title,
              content:news.content
            }}">
            {{ news.title }}
          </RouterLink>
      </li>

    </ul>
    <!--  新闻展示区 -->
    <div class="news-content">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<script setup lang="ts" name="News">
  import { reactive } from 'vue'
  import { RouterView,RouterLink,useRouter } from 'vue-router'
  const newsList = reactive([
    {id:'001',title:'四川',content:'天府之国'},
    {id:'002',title:'湖北',content:'就省通衢'},
    {id:'003',title:'江苏',content:'鱼米之乡'},
    {id:'004',title:'广东',content:'开放前沿'},
    {id:'005',title:'山东',content:'礼仪之乡'},
  ])

  const router = useRouter()
  interface NewsInter {
    id:string,
    title:string,
    content:string
  }
  function showNewsDetail(news:NewsInter){
    router.push({
      // 这里和to里面的写法一致
      name:'news-detail',
      params:{
        id:news.id,
        title:news.title,
        content:news.content
      }
    })
  }
</script>

<style scoped>

</style>
```

和a标签相同，编程式路由也可以横跨历史，使用router.go(n)便可以实现。该方法采用一个整数作为参数，表示在历史堆栈中前进或后退多少步，类似于 `window.history.go(n)`。

```vue
// 向前移动一条记录，与 router.forward() 相同
router.go(1)

// 返回一条记录，与 router.back() 相同
router.go(-1)

// 前进 3 条记录
router.go(3)

// 如果没有那么多记录，静默失败
router.go(-100)
router.go(100)
```



### 4.11.重定向

1. 作用：将特定的路径，重新定向到已有路由。
2. 具体编码：

```vue
{
    path:'/',
    redirect:'/about'
}
```

​	我们上述的案例，重启后任何内容也不现实，我们可以在index.ts中配置重定向规则，使项目启动时自动重定向某个路径：

<img src="https://gitee.com/zou_tangrui/note-pic/raw/master/img/202405141809086.png" style="zoom:50%;" />

## 5.Pinia

​	官方网站：https://pinia.vuejs.org/zh/。Pinia是一个符合直觉的Vue状态管理器，它具有类型安全、可扩展性以及模块化的设计，甚至让你忘记正在使用一个状态库。

 	特点：

- 所见即所得
- 类型安全
- 可扩展性
- 模块化设计
- 极致轻量化
- 支持开发工具Devtools



### 5.1.准备一个基本效果

​	效果需求如下，根据用户在下拉框的选择，点击加/减完成指定数值的加减操作；点击获取一句古诗，在列表后面随机添加一句古诗：

![image-20240515095015359](https://gitee.com/zou_tangrui/note-pic/raw/master/img/202405150950817.png)

1.分别创建Count.vue和Poetry.vue：

```vue
<template>
  <div class="count">
    <h3>当前求和为：{{ sum }}</h3>
    <!-- .value将收集的数据转为数字 -->
    <select v-model.number="option">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="add">加</button>
    <button @click="minus">减</button>
  </div>
</template>
<script setup lang="ts" name="Count">
  import { ref } from 'vue'
  // 数据
  let sum = ref(1)
  let option = ref(1)  // 用户选择的数字
  // 方法
  function add() {
    sum.value += option.value
  }
  function minus() {
    sum.value -= option.value
  }
</script>
<style>
  .count {
    background-color: skyblue;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 0 10px;
  }
  select,button {
    margin-left: 5px;
    height: 25px;
  }
</style>
```



```vue
<template>
  <div class="poetry">
      <button @click="getPoetry">获取一句诗句</button>
      <ul>
        <li v-for="poetry in poetryList" :key="poetry.id">
          {{ poetry.content }}
        </li>
      </ul>
  </div>
</template>
<script setup lang="ts" name="Poetry">
  import { ref } from 'vue'
  import axios from 'axios'
  import {nanoid} from 'nanoid'
  // 数据
  let poetryList = ref([
    {id:'001',content:'春江潮水连海平，海上明月共潮生。滟滟随波千万里，何处春江无月明？'},
    {id:'002',content:'人生如逆旅，我亦是行人'},
    {id:'003',content:'人生到处知何似，应似飞鸿踏雪泥'},
    {id:'004',content:'天生我材必有用，千金散尽还复来'},
  ])
  // 方法
  async function getPoetry() {
    let result = await axios.get('https://v1.jinrishici.com/all')
    // console.log(result.data.content)
    poetryList.value.push({id:nanoid(),content:result.data.content})

  }
</script>
<style>
.poetry {
  background-color: orange;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px;
}
</style>
```

2.在App.vue中引入：

```vue
<template>
  <div class="app">
    <Count class="count"/>
    <Poetry />
  </div>
</template>

<script lang="ts" setup name="App">
  import Count from './components/Count.vue'
  import Poetry from './components/Poetry.vue'
</script>

<style>
  .count {
    margin-bottom: 20px;
  }
</style>
```

注意：项目中下载的随机生成id的库nanoid和异步请求的库axios，下载方式如下：

```shell
npm install axios
npm install nanoid
```

![image-20240515095258281](https://gitee.com/zou_tangrui/note-pic/raw/master/img/202405150952214.png)



### 5.2.Pinia环境搭建

1.下载pinia：

```shell
npm install pinia
```

2.在main.ts引入pinia：

```vue
// 引入createApp用于创建应用
import {createApp} from 'vue'
// 引入App根组件
import App from './App.vue'
// 1.引入pinia
import { createPinia } from "pinia";

const app = createApp(App)
// 2.创建pinia实例
const pinia = createPinia();
// 3.将pinia实例挂载到应用上
app.use(pinia);

app.mount('#app')
```

此时开发者工具中已经有了`pinia`选项：

<img src="https://gitee.com/zou_tangrui/note-pic/raw/master/img/202405151035549.png" style="zoom:80%;border:1px solid black;border-radius:10px" />

### 5.3.存储+读取数据

1. `Store`是一个保存：**状态**、**业务逻辑** 的实体，每个组件都可以**读取**、**写入**它。

2. 它有三个概念：`state`、`getter`、`action`，相当于组件中的： `data`、 `computed` 和 `methods`。

3. 具体实现：

   1. 在src/store下创建count.ts和poetry.ts：

   ```typescript
   import {defineStore}  from "pinia";
   
   export const useCountStore = defineStore('count', {
       state() {
           return {
               sum: 88
           }
       }
   })
   ```

   ```typescript
   import { defineStore } from "pinia";
   
   export const usePoetryStore = defineStore("poetry", {
       state() {
           return {
               poetryList:[
                   {id:'001',content:'春江潮水连海平，海上明月共潮生。滟滟随波千万里，何处春江无月明？'},
                   {id:'002',content:'人生如逆旅，我亦是行人'},
                   {id:'003',content:'人生到处知何似，应似飞鸿踏雪泥'},
                   {id:'004',content:'天生我材必有用，千金散尽还复来'}
               ]
           }
       }
   })
   ```

   2.在Count.vue和Poetry.vue中使用数据：

   ```vue
   <template>
     <div class="count">
       <h3>当前求和为：{{ countStore.sum }}</h3>
       <!-- .value将收集的数据转为数字 -->
       <select v-model.number="option">
         <option value="1">1</option>
         <option value="2">2</option>
         <option value="3">3</option>
       </select>
       <button @click="add">加</button>
       <button @click="minus">减</button>
     </div>
   </template>
   <script setup lang="ts" name="Count">
     import { ref } from 'vue'
     // 引入
     import { useCountStore} from "@/store/count";
     // 数据
     const countStore = useCountStore()
     // console.log(countStore.sum)
   
     let option = ref(1)  // 用户选择的数字
     // 方法
     function add() {
       countStore.sum += option.value
     }
     function minus() {
       countStore.sum -= option.value
     }
   </script>
   ```

   ```vue
   <template>
     <div class="poetry">
         <button @click="getPoetry">获取一句诗句</button>
         <ul>
           <li v-for="poetry in poetryStore.poetryList" :key="poetry.id">
             {{ poetry.content }}
           </li>
         </ul>
     </div>
   </template>
   <script setup lang="ts" name="Poetry">
     import { ref } from 'vue'
     import axios from 'axios'
     import {nanoid} from 'nanoid'
     import { usePoetryStore } from "@/store/poetry";
     // 数据
     let poetryStore = usePoetryStore()
   
     // 方法
     async function getPoetry() {
       let result = await axios.get('https://v1.jinrishici.com/all')
       // console.log(result.data.content)
       poetryStore.poetryList.push({id:nanoid(),content:result.data.content})
   
     }
   </script>
   ```

   

### 5.4.修改数据的三种方式

1. 第一种修改方式，直接修改

   ```ts
   countStore.sum = 888
   ```

2. 第二种修改方式：批量修改

   ```ts
   countStore.$patch({
     sum:999,
     school:'四川城市职业学院'
   })
   ```

3. 第三种修改方式：借助`action`修改（`action`中可以编写一些业务逻辑）

   ```js
   import { defineStore } from 'pinia'
   
   export const useCountStore = defineStore('count', {
     /*************/
     actions: {
       //加
       increment(value:number) {
         if (this.sum < 10) {  // 有逻辑操作的时候actions就非常有意义
           //操作countStore中的sum
           this.sum += value
         }
       },
       //减
       decrement(value:number){
         if(this.sum > 1){
           this.sum -= value
         }
       }
     },
     /*************/
   })
   ```

4. 组件中调用`action`即可

   ```js
   // 使用countStore
   const countStore = useCountStore()
   
   // 调用对应action
   countStore.incrementOdd(n.value)
   ```
   
5. poetry.ts新增actions:

   ```typescript
   import { defineStore } from "pinia";
   import axios from "axios";
   import {nanoid} from "nanoid";
   
   export const usePoetryStore = defineStore("poetry", {
       actions: {
           async getPoetry() {
               let result = await axios.get('https://v1.jinrishici.com/all')
               // console.log(result.data.content)
               this.poetryList.push({id:nanoid(),content:result.data.content})
           }
       },
       state() {
           return {
               poetryList:[
                   {id:'001',content:'春江潮水连海平，海上明月共潮生。滟滟随波千万里，何处春江无月明？'},
                   {id:'002',content:'人生如逆旅，我亦是行人'},
                   {id:'003',content:'人生到处知何似，应似飞鸿踏雪泥'},
                   {id:'004',content:'天生我材必有用，千金散尽还复来'}
               ]
           }
       }
   })
   ```

6. poetry.vue引入方法：

   ```vue
   // 数据
     let poetryStore = usePoetryStore()
   
   // 方法
   function getPoetry() {
     poetryStore.getPoetry()
   }
   ```

   

### 5.5.storeToRefs

​	我们目前在模板中使用的数据仍然显得臃肿，不利于我们的操作。

<img src="C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20240516114201325.png" alt="image-20240516114201325" style="zoom:50%;" />

​	如果通过我们之前所学的toRefs结构会让该数据丢失响应式，所以pinia提供了storeToRefs，让数据结构的同时不丢失响应式。借助`storeToRefs`将`store`中的数据转为`ref`对象，方便在模板中使用。

```vue
/ 引入
import { useCountStore} from "@/store/count";
// 引入storeToRefs
import {storeToRefs} from "pinia";
// 数据
const countStore = useCountStore()
const {sum} = storeToRefs(countStore)  // 结构模板中的{{ countStore.sum }}

// 此时在模板中就可以直接使用{{ sum }}
<h3>当前求和为：{{ sum }}</h3>
```

### 5.6.getters

    1. 概念：当`state`中的数据，需要经过处理后再使用时，可以使用`getters`配置。
    2. 在count.ts后追加```getters```配置：

```vue
import {defineStore}  from "pinia";

export const useCountStore = defineStore('count', {
    actions: {
      // 加
      increment(value:number) {
          this.sum += value
      },
        // 减
        decrement(value:number) {
          this.sum -= value
        }
    },
    state() {
        return {
            sum: 88
        }
    },
    // 对state中的数据进行加工
    getters: {
            doubleSum: (state) => state.sum * 2
    }
})
```

可以在Count.vue中接收：

```vue
const {sum,doubleSum} = storeToRefs(countStore)
<h3>将sum放大两倍： {{ doubleSum }}</h3>
```

### 5.7.订阅$sumscribe

​	通过 store 的 `$subscribe()` 方法侦听 `state` 及其变化（相当于watch）:

```vue
poetryStore.$subscribe((mutation, state) => {
    // console.log(poetryList,'mutation', mutation) // 监视了poetryList的变化
    // 变化后就可以做进一步的操作，如存储到localStorage
    localStorage.setItem('poetryList', JSON.stringify(poetryList.value))  
})

// 以上方式存储数据后我们就可以直接在poetry.ts的state中从localStorage中获取数据
state() {
       return {
			// 原来的初始数据
            /*poetryList:[
                {id:'001',content:'春江潮水连海平，海上明月共潮生。滟滟随波千万里，何处春江无月明？'},
                {id:'002',content:'人生如逆旅，我亦是行人'},
                {id:'003',content:'人生到处知何似，应似飞鸿踏雪泥'},
                {id:'004',content:'天生我材必有用，千金散尽还复来'}
            ]*/
			// 从localStorage获取，不会导致页面刷新后数据还原
            poetryList:JSON.parse(localStorage.getItem('poetryList') as string) || []
        }
    }
```

### 5.8.store的组合式写法

​		之前我们对于ts中store的写法都是通过对象方式来编写的，其实store还有一种写法是组合式写法，即将数据和方法都以函数的方式进行返回：

```vue
import { defineStore } from "pinia";
import axios from "axios";
import {nanoid} from "nanoid";
import { reactive } from "vue";
// 对象式写法
/*export const usePoetryStore = defineStore("poetry", {
    actions: {
        async getPoetry() {
            let result = await axios.get('https://v1.jinrishici.com/all')
            // console.log(result.data.content)
            this.poetryList.push({id:nanoid(),content:result.data.content})
        }
    },
    state() {
        return {
            /!*poetryList:[
                {id:'001',content:'春江潮水连海平，海上明月共潮生。滟滟随波千万里，何处春江无月明？'},
                {id:'002',content:'人生如逆旅，我亦是行人'},
                {id:'003',content:'人生到处知何似，应似飞鸿踏雪泥'},
                {id:'004',content:'天生我材必有用，千金散尽还复来'}
            ]*!/
            poetryList:JSON.parse(localStorage.getItem('poetryList') as string) || []
        }
    }
})*/

// 组合式写法
export const usePoetryStore = defineStore("poetry", () => {
        // 数据
        let poetryList = reactive(
            JSON.parse(localStorage.getItem('poetryList') as string) || []
        )
        // 方法
        async function getPoetry() {
            let result = await axios.get('https://v1.jinrishici.com/all')
            // console.log(result.data.content)
            poetryList.push({id:nanoid(),content:result.data.content})
        }
		// 返回数据
        return {poetryList,getPoetry}
})
```



## 6.组件间通信

**`Vue3`组件通信和`Vue2`的区别：**

* 移出事件总线，使用`mitt`代替。

- `vuex`换成了`pinia`。
- 把`.sync`优化到了`v-model`里面了。
- 把`$listeners`所有的东西，合并到`$attrs`中了。
- `$children`被砍掉了。

**常见搭配形式：**

<img src="D:/笔记/HTML/VUE/资料/images/image-20231119185900990.png" alt="image-20231119185900990" style="zoom:60%;" /> 

### 6.1.props-父子组件间通信

概述：`props`是使用频率最高的一种通信方式，常用与 ：**父 ↔ 子**。

- 若 **父传子**：属性值是**非函数**。
- 若 **子传父**：属性值是**函数**。

父组件Father.vue：

```vue
<template>
  <div class="father">
    <h3>父组件，</h3>
		<h4>我的车：{{ car }}</h4>
		<h4>儿子给的玩具：{{ toy }}</h4>
		<Child :car="car" :getToy="getToy"/>
  </div>
</template>

<script setup lang="ts" name="Father">
	import Child from './Child.vue'
	import { ref } from "vue";
	// 数据
	const car = ref('奔驰')
	const toy = ref()
	// 方法
	function getToy(value:string){
		toy.value = value
	}
</script>
```

子组件Child.vue:

```vue
<template>
  <div class="child">
    <h3>子组件</h3>
		<h4>我的玩具：{{ toy }}</h4>
		<h4>父给我的车：{{ car }}</h4>
		<button @click="getToy(toy)">玩具给父亲</button>
  </div>
</template>

<script setup lang="ts" name="Child">
	import { ref } from "vue";
	const toy = ref('奥特曼')
	
	defineProps(['car','getToy'])
</script>
```

### 6.2.自定义事件

1. 概述：自定义事件常用于：**子 => 父。**
2. 注意区分好：原生事件、自定义事件。

- 原生事件：
  - 事件名是特定的（`click`、`mosueenter`等等）	
  - 事件对象`$event`: 是包含事件相关信息的对象（`pageX`、`pageY`、`target`、`keyCode`）
- 自定义事件：
  - 事件名是任意名称
  - <strong style="color:red">事件对象`$event`: 是调用`emit`时所提供的数据，可以是任意类型！！！</strong >

3. 示例：

   ```html
   <!--在父组件中，给子组件绑定自定义事件：-->
   <Child @send-toy="toy = $event"/>
   
   <!--注意区分原生事件与自定义事件中的$event-->
   <button @click="toy = $event">测试</button>
   ```

   ```js
   //子组件中，触发事件：
   this.$emit('send-toy', 具体数据)
   ```

Father.vue:

```vue
<template>
  <div class="father">
    <h3>父组件</h3>
		<h4 v-show="toy">子给的玩具：{{ toy }}</h4>
		<!-- 给子组件Child绑定事件 -->
    <Child @send-toy="saveToy"/>
  </div>
</template>

<script setup lang="ts" name="Father">
  import Child from './Child.vue'
	import { ref } from "vue";
	// 数据
	let toy = ref('')
	// 用于保存传递过来的玩具
	function saveToy(value:string){
		console.log('saveToy',value)
		toy.value = value
	}
</script>

<style scoped>
	.father{
		background-color:rgb(165, 164, 164);
		padding: 20px;
    border-radius: 10px;
	}
	.father button{
		margin-right: 5px;
	}
</style>
```

Child.vue:

```vue
<template>
  <div class="child">
    <h3>子组件</h3>
		<h4>玩具：{{ toy }}</h4>
		<button @click="emit('send-toy',toy)">测试</button>
  </div>
</template>

<script setup lang="ts" name="Child">
	import { ref } from "vue";
	// 数据
	let toy = ref('奥特曼')
	// 声明事件
	const emit =  defineEmits(['send-toy'])
</script>

<style scoped>
	.child{
		margin-top: 10px;
		background-color: rgb(76, 209, 76);
		padding: 10px;
		box-shadow: 0 0 10px black;
		border-radius: 10px;
	}
</style>
```



### 6.3. mitt

概述：与消息订阅与发布（`pubsub`）功能类似，可以实现任意组件间通信。

安装`mitt`

```shell
npm i mitt
```

新建文件：`src\utils\emitter.ts`

```javascript
// 引入mitt 
import mitt from "mitt";

// 创建emitter
const emitter = mitt()

/*
  // 绑定事件
  emitter.on('abc',(value)=>{
    console.log('abc事件被触发',value)
  })
  emitter.on('xyz',(value)=>{
    console.log('xyz事件被触发',value)
  })

  setInterval(() => {
    // 触发事件
    emitter.emit('abc',666)
    emitter.emit('xyz',777)
  }, 1000);

  setTimeout(() => {
    // 清理事件
    // emitter.off("abc")  // 清除abc事件
    emitter.all.clear()  // 一次性清除所有事件
  }, 3000); 
*/

// 创建并暴露mitt
export default emitter
```

接收数据的组件中：绑定事件、同时在销毁前解绑事件：

```typescript
import emitter from "@/utils/emitter";
import { onUnmounted } from "vue";

// 绑定事件
emitter.on('send-toy',(value)=>{
  console.log('send-toy事件被触发',value)
})

onUnmounted(()=>{
  // 解绑事件
  emitter.off('send-toy')
})
```

【第三步】：提供数据的组件，在合适的时候触发事件

```javascript
import emitter from "@/utils/emitter";

function sendToy(){
  // 触发事件
  emitter.emit('send-toy',toy.value)
}
```

**注意这个重要的内置关系，总线依赖着这个内置关系**

### 6.4.v-model

1. 概述：实现 **父↔子** 之间相互通信。

2. 前序知识 —— `v-model`的本质

   ```vue
   <!-- 使用v-model指令 -->
   <input type="text" v-model="userName">
   
   <!-- v-model的本质是下面这行代码 -->
   <input 
     type="text" 
     :value="userName" 
     @input="userName =(<HTMLInputElement>$event.target).value"
   >
   ```

3. 组件标签上的`v-model`的本质：`:moldeValue` ＋ `update:modelValue`事件。

   ```vue
   <!-- 组件标签上使用v-model指令 -->
   <Hwua v-model="userName"/>
   
   <!-- 组件标签上v-model的本质 -->
   <Hwua :modelValue="userName" @update:model-value="userName = $event"/>
   ```

   `Hwua`组件中：

   ```vue
   <template>
     <div class="box">
       <!--将接收的value值赋给input元素的value属性，目的是：为了呈现数据 -->
   		<!--给input元素绑定原生input事件，触发input事件时，进而触发update:model-value事件-->
       <input 
          type="text" 
          :value="modelValue" 
          @input="emit('update:model-value',$event.target.value)"
       >
     </div>
   </template>
   
   <script setup lang="ts" name="Hwua">
     // 接收props
     defineProps(['modelValue'])
     // 声明事件
     const emit = defineEmits(['update:model-value'])
   </script>
   ```

4. 也可以更换`value`，例如改成`abc`

   ```vue
   <!-- 也可以更换value，例如改成abc-->
   <Hwua v-model:abc="userName"/>
   
   <!-- 上面代码的本质如下 -->
   <Hwua :abc="userName" @update:abc="userName = $event"/>
   ```

   `Hwua`组件中：

   ```vue
   <template>
     <div class="box">
       <input 
          type="text" 
          :value="abc" 
          @input="emit('update:abc',$event.target.value)"
       >
     </div>
   </template>
   
   <script setup lang="ts" name="Hwua">
     // 接收props
     defineProps(['abc'])
     // 声明事件
     const emit = defineEmits(['update:abc'])
   </script>
   ```

5. 如果`value`可以更换，那么就可以在组件标签上多次使用`v-model`

   ```vue
   <Hwua v-model:abc="userName" v-model:xyz="password"/>
   ```

   


### 6.5.$attrs 

1. 概述：`$attrs`用于实现**当前组件的父组件**，向**当前组件的子组件**通信（**祖→孙**）。

2. 具体说明：`$attrs`是一个对象，包含所有父组件传入的标签属性。

   >  注意：`$attrs`会自动排除`props`中声明的属性(可以认为声明过的 `props` 被子组件自己“消费”了)

父组件：

```vue
<template>
  <div class="father">
    <h3>父组件</h3>
		<Child :a="a" :b="b" :c="c" :d="d" v-bind="{x:100,y:200}" :updateA="updateA"/>
  </div>
</template>

<script setup lang="ts" name="Father">
	import Child from './Child.vue'
	import { ref } from "vue";
	let a = ref(1)
	let b = ref(2)
	let c = ref(3)
	let d = ref(4)

	function updateA(value){
		a.value = value
	}
</script>
```

子组件：

```vue
<template>
	<div class="child">
		<h3>子组件</h3>
		<GrandChild v-bind="$attrs"/>
	</div>
</template>

<script setup lang="ts" name="Child">
	import GrandChild from './GrandChild.vue'
</script>
```

孙组件：

```vue
<template>
	<div class="grand-child">
		<h3>孙组件</h3>
		<h4>a：{{ a }}</h4>
		<h4>b：{{ b }}</h4>
		<h4>c：{{ c }}</h4>
		<h4>d：{{ d }}</h4>
		<h4>x：{{ x }}</h4>
		<h4>y：{{ y }}</h4>
		<button @click="updateA(666)">点我更新A</button>
	</div>
</template>

<script setup lang="ts" name="GrandChild">
	defineProps(['a','b','c','d','x','y','updateA'])
</script>
```

### 6.6. $refs、$parent

1. 概述：

   * `$refs`用于 ：**父→子。**
   * `$parent`用于：**子→父。**

2. 原理如下：

   | 属性      | 说明                                                     |
   | --------- | -------------------------------------------------------- |
   | `$refs`   | 值为对象，包含所有被`ref`属性标识的`DOM`元素或组件实例。 |
   | `$parent` | 值为对象，当前组件的父组件实例对象。                     |

### 6.7. provide、inject

1. 概述：实现**祖孙组件**直接通信

2. 具体使用：

   * 在祖先组件中通过`provide`配置向后代组件提供数据
   * 在后代组件中通过`inject`配置来声明接收数据

3. 具体编码：

   【第一步】父组件中，使用`provide`提供数据

   ```vue
   <template>
     <div class="father">
       <h3>父组件</h3>
       <h4>资产：{{ money }}</h4>
       <h4>汽车：{{ car }}</h4>
       <button @click="money += 1">资产+1</button>
       <button @click="car.price += 1">汽车价格+1</button>
       <Child/>
     </div>
   </template>
   
   <script setup lang="ts" name="Father">
     import Child from './Child.vue'
     import { ref,reactive,provide } from "vue";
     // 数据
     let money = ref(100)
     let car = reactive({
       brand:'奔驰',
       price:100
     })
     // 用于更新money的方法
     function updateMoney(value:number){
       money.value += value
     }
     // 提供数据
     provide('moneyContext',{money,updateMoney})
     provide('car',car)
   </script>
   ```

   > 注意：子组件中不用编写任何东西，是不受到任何打扰的

   【第二步】孙组件中使用`inject`配置项接受数据。

   ```vue
   <template>
     <div class="grand-child">
       <h3>我是孙组件</h3>
       <h4>资产：{{ money }}</h4>
       <h4>汽车：{{ car }}</h4>
       <button @click="updateMoney(6)">点我</button>
     </div>
   </template>
   
   <script setup lang="ts" name="GrandChild">
     import { inject } from 'vue';
     // 注入数据
    let {money,updateMoney} = inject('moneyContext',{money:0,updateMoney:(x:number)=>{}})
     let car = inject('car')
   </script>
   ```


### 6.8. pinia

参考之前`pinia`部分的讲解

### 6.9. slot

#### 1. 默认插槽

![img](http://49.232.112.44/images/default_slot.png)

```vue
父组件中：
        <Category title="今日热门游戏">
          <ul>
            <li v-for="g in games" :key="g.id">{{ g.name }}</li>
          </ul>
        </Category>
子组件中：
        <template>
          <div class="item">
            <h3>{{ title }}</h3>
            <!-- 默认插槽 -->
            <slot></slot>
          </div>
        </template>
```

#### 2. 具名插槽

```vue
父组件中：
        <Category title="今日热门游戏">
          <template v-slot:s1>
            <ul>
              <li v-for="g in games" :key="g.id">{{ g.name }}</li>
            </ul>
          </template>
          <template #s2>
            <a href="">更多</a>
          </template>
        </Category>
子组件中：
        <template>
          <div class="item">
            <h3>{{ title }}</h3>
            <slot name="s1"></slot>
            <slot name="s2"></slot>
          </div>
        </template>
```

#### 3. 作用域插槽 

1. 理解：<span style="color:red">数据在组件的自身，但根据数据生成的结构需要组件的使用者来决定。</span>（新闻数据在`News`组件中，但使用数据所遍历出来的结构由`App`组件决定）

2. 具体编码：

   ```vue
   父组件中：
         <Game v-slot="params">
         <!-- <Game v-slot:default="params"> -->
         <!-- <Game #default="params"> -->
           <ul>
             <li v-for="g in params.games" :key="g.id">{{ g.name }}</li>
           </ul>
         </Game>
   
   子组件中：
         <template>
           <div class="category">
             <h2>今日游戏榜单</h2>
             <slot :games="games" a="哈哈"></slot>
           </div>
         </template>
   
         <script setup lang="ts" name="Category">
           import {reactive} from 'vue'
           let games = reactive([
             {id:'asgdytsa01',name:'英雄联盟'},
             {id:'asgdytsa02',name:'王者荣耀'},
             {id:'asgdytsa03',name:'红色警戒'},
             {id:'asgdytsa04',name:'斗罗大陆'}
           ])
         </script>
   ```

