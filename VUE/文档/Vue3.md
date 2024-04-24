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