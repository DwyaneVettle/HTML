# JavaScript

## 1.初识JavaScript

​	JavaScript（简称“JS”） 是一种具有函数优先的轻量级，解释型或即时编译型的编程语言。虽然它是作为开发Web页面的**脚本语言**而出名，但是它也被用到了很多非浏览器环境中，JavaScript 基于原型编程、多范式的动态脚本语言，并且支持面向对象、命令式、声明式、函数式编程范式。 

JavaScript在1995年由Netscape公司的Brendan Eich，在网景导航者浏览器上首次设计实现而成。因为Netscape与Sun合作，Netscape管理层希望它外观看起来像Java，因此取名为JavaScript。但实际上它的语法风格与Self及Scheme较为接近。 

JavaScript的标准是ECMAScript。截至 2012 年，所有浏览器都完整的支持ECMAScript 5.1，旧版本的浏览器至少支持ECMAScript 3 标准。2015年6月17日，ECMA国际组织发布了ECMAScript的第六版，该版本正式名称为 ECMAScript 2015，但通常被称为ECMAScript 6 或者ES2015。



## 2.JS的引入

​	JS的引入分为行内引入、内部引入和外部引入，行内引入直接以标签属性的方式进行加载，而行外引入的方式是以JS标签来设置，外部引入则需要添加JS文件，通过<script>标签的src属性来引入。

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .box1 {
            width: 300px;
            height: 300px;
            background-color: red;
        }
        
        .box2 {
            width: 300px;
            height: 300px;
            background-color: yellow;
        }
        
        .box3 {
            width: 200px;
            height: 200px;
            background-color: green;
        }
    </style>
</head>

<body>
    <!-- 行内引入：onclick-添加点击事件
                    alert()-弹框输出
            优点：简单直接
            缺点：结构不分离，无复用性,维护性不强 -->
    <div class="box1" onclick="alert('你点我呀！！！')"></div>
    <div class="box2"></div>
    <div class="box3"></div>
    <!-- 内部引入 -->
    <script>
        // 单行注释
        /*
            多行注释
            优点：结构分离，增加维护性和复用性（只能在当前页面）
            缺点：多页面之间无法复用
        */
        document.querySelector('.box2').onclick = function() {
            alert('点你咋的！！！')
        }
    </script>
    <!-- 外部引入
            优点：结构彻底分离，维护性强
                    推荐使用 -->
    <script src="main.js"></script>
</body>

</html>
```

```js
document.querySelector('.box3').onclick = function() {
    alert('哈哈')
}
```



## 3.JS的输入输出

​	JS的输入输出语句分为以下三种：

| 方法          | 说明                                   |
| ------------- | -------------------------------------- |
| alert()       | 浏览器弹出框输出                       |
| console.log() | 浏览器控制台输出                       |
| prompt()      | 浏览器弹出输入框，用户输入信息会被保存 |

```javascript
<script>
        alert("浏览器弹出框。")
        console.log("这时控制台信息，供程序员使用。");
        prompt("用户输入的信息可以被保存起来。")
 </script>
```



## 4.变量

​	变量就是存放数据的容器，我们可以从这个容器中取出变量来使用，它实际是在内存中开辟了一块空间。如果要使用这个变量必须经过两个步骤：声明变量和赋值。

**声明变量的格式：**

```js
var 变量名;
let 变量名;
```

```js
<script>
        // 1.初始化变量
        var name = '姚明';
        console.log(name);
</script>
```

**练习：用弹出框做一个计算器：**

```js
<script>
        // 1.初始化变量
        var name = '姚明';
        console.log(name);
        var num1 = prompt("请输入第一个数：");
        var num2 = prompt("请输入第二个数：");
        alert(parseInt(num1) + parseInt(num2));
    </script>
```

​	变量赋值之后即在内存中开辟了一块空间，并进行了引用，如果重新给这个变量赋值，那么这个变量原来的值就会被覆盖，所以变量的值以最后一次赋值为准，当然我们后面学习了函数之后，也会因变量的作用域而改变。

​	变量如果没有赋值将会被执行undifined，并且变量的命名方式和Java命名变量的规则相同。

**练习：交换两个变量的值**

```js
<script>
        var name1 = '姚明';
        var name2 = '刘翔';
        var name;
        name = name1;
        name1 = name2;
        name2 = name;
        console.log(name1);
        console.log(name2);
    </script>
```





## 5.数据类型

 