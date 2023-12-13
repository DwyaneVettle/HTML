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

可根据vue官方文档https://v2.cn.vuejs.	/v2/guide的`学习``教程`参考安装搭建vue环境。

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

<img src="C:/Users/HP/AppData/Roaming/Typora/typora-user-images/image-20230222172736605.png" alt="image-20230222172736605" style="zoom:33%;" />

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

