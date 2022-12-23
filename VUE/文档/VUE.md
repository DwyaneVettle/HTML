# VUE

## 1.vue基础

### 1.1.什么是vue

​	vue是一套用于**构建用户界面**的**渐进式**JavaScript框架。中文官网：https://cn.vuejs.org/

- 渐进式：vue可以自底向上逐层的应用。（引入轻量的核心库逐渐递进到各种各样的复杂库）

****

<img src="images/image-20221220211048186(1).png" alt="image-20221220211048186" style="zoom:33%;" />





vue由当时在谷歌工作的尤雨溪(Evan You)在2013年受AngularJS框架的启发，开发出了一款轻量框架---Seed，同年12月，Seed更名为vue，版本号为0.6.0.

- 2014年：vue正式对外发布，版本号为0.8.0，Taylor Otwell(PHP Laravel之父)在Twitter上发表动态，说自己正在学习vue；
- 2015年：10月27日，正式发布vue1.0.0 Evangelion（新世纪福音战士），同年，vue-touter,vuex,vue-cli相继发布，标志vue正式发展成一个渐进式框架；
- 2016年：10月1日，正式发布vue2.0.0 Ghost in the shell（攻壳机动队），它吸收了react的虚拟dom方案，还支持服务端渲染；
- 2019年：尤雨溪公布了3.0.0的源代码，当时还是Alpha版本；
- 2020年：9月18日，正式发布vue3.0.0（海贼王）。

<img src="images/image-20221220211924275.png" alt="image-20221220211924275" style="zoom:33%;" />



### 1.2.vue的特点

1. 采用组件化模式，提高代码复用率，让代码更好维护；

<img src="images/image-20221220213555774.png" alt="image-20221220213555774" style="zoom:50%;" />



2.声明式编码，让编码人员无需操作DOM元素，提高开发效率；

3.使用虚拟DOM+Diff算法,尽量复用DOM结点.



### 1.3.搭建vue环境

可根据vue官方文档https://v2.cn.vuejs.org/v2/guide的`学习``教程`参考安装搭建vue环境。

- 安装：安装版本有`开发版本`和`生产版本`，开发版本包含完整的警告和调试模式，而生产版本则删除了警告，是项目上线时的首选，这里我们两个都下载，以便进行对比。

<img src="images/2022-12-22_210212.png" style="zoom: 33%;" />



- 创建工程`vue-basic`，并创建同级文件夹`js`，引入两个版本的`vue.js`和`vue.min.js`，创建文件`01-初识vue.html`，文件层级如下：

**<img src="images/image-20221222211626476.png" alt="image-20221222211626476" style="zoom:33%;" />**

- 通过`<script>`标签引入vue，然后再通过浏览器控制台打开查看到两个提示：

```html
<!-- 引入vue -->
<script src="../js/vue.js"></script>
```

<img src="images/2022-12-22_211937.png" style="zoom: 33%;" />



- 下载vue开发者工具：在`https://devtools.vuejs.org/guide/installation.html`中根据自己使用的浏览器进行vue开发者工具的下载，然后将其拖动到浏览器扩展中。如报错`Vue.js is not detected`可打开插件管理页，打开插件详情，将`允许访问文件网址`打开（参考：https://blog.csdn.net/qiaoyangla/article/details/122801903）。当引入开发者工具成功，刷新刚才的网页，第一条警告消失：

<img src="images/image-20221222214348425.png" alt="image-20221222214348425" style="zoom:33%;" />

- 另一条提示，我们也可以根据`学习`中的`api`的全局配置`https://v2.cn.vuejs.org/v2/api/`进行配置，将#productionTip属性值设置为false即可组织vue在启动时生成生产提示。

<img src="images/2022-12-22_215014.png" style="zoom: 33%;" />

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































## 2.vue-cli







## 3.vue-router





## 4.vuex







## 5.element-ui







## 6.vue3