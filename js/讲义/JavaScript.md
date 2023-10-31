# JavaScript

![image-20220620225907385](https://gitee.com/zou_tangrui/note-pic/raw/master/img/202309261845322.png)

![](https://gitee.com/zou_tangrui/note-pic/raw/master/img/202309261845333.png)

## 1.初识JavaScript

​	JavaScript（简称“JS”） 是一种具有函数优先的轻量级，**解释型**或即时编译型的编程语言。虽然它是作为开发Web页面(客户端)的**脚本语言**而出名，但是它也被用到了很多非浏览器环境中，JavaScript 基于原型编程、多范式的动态脚本语言，并且支持面向对象、命令式、声明式、函数式编程范式。 

​	JavaScript在1995年由Netscape公司的Brendan Eich，在网景导航者浏览器上首次设计实现而成。因为Netscape与Sun合作，Netscape管理层希望它外观看起来像Java，因此取名为JavaScript。但实际上它的语法风格与Self及Scheme较为接近。 

![](https://gitee.com/zou_tangrui/note-pic/raw/master/img/202309261845334.webp)

​	JavaScript的标准是ECMAScript。截至 2012 年，所有浏览器都完整的支持ECMAScript 5.1，旧版本的浏览器至少支持ECMAScript 3 标准。2015年6月17日，ECMA国际组织发布了ECMAScript的第六版，该版本正式名称为 ECMAScript 2015，但通常被称为ECMAScript 6 或者ES2015。

ES6

JS的组成：

- **核心语法：**ECMAScript规范的一套JS的基本语法；
- **浏览器对象模型-BOM：**Browser Object Model，提供一系列操作浏览器的方法；
- **文档对象模型-DOM:**Document Object Model，提供了一些列操作文档的方法。



## 2.JS的引入

​	JS的引入分为**行内引入(元素绑定)、内部引入和外部引入**，行内引入直接以标签属性的方式进行加载，而行外引入的方式是以JS标签来设置，外部引入则需要添加JS文件，通过<script>标签的src属性来引入。

- **元素绑定事件：**
  - 事件：指用户的行为（单击、双击等）或元素的状态（输入框的焦点状态）
  - 事件处理：元素监听某种事件并在事件发生后自动执行事件处理函数；
  - 常用事件：onclick(点击事件)；
  - 语法：将事件名称以标签属性的方式绑定在元素上，自定义事件处理。

```javascript
<!--实现点击按钮在控制台输出-->
<button onclick="console.log('Hello World!!')">点击</button>
```

- **文档内嵌（内部引入）：**使用<script type="text/javascript"></script>标签书写JS代码，语法如下：

```javascript
<script type="text/javascript">
	alert("网页警告框");    
</script>
```

注意：标签可以书写在文档任意位置，也可书写多次。一旦加载到<script>标签就会立即执行其内部的JS代码，因此不同的位置会影响代码的最终执行效果。

- **外部引入：**创建外部JS文件xx.js，在HTML中使用如下语法引入：

```javascript
<script src="xx.js"></script>
```





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

​	JS的输入输出语句分为以下4种：

| 方法                                 | 说明                                   |
| ------------------------------------ | -------------------------------------- |
| alert()                              | 浏览器弹出框输出                       |
| console.log()                        | 浏览器控制台输出                       |
| prompt()                             | 浏览器弹出输入框，用户输入信息会被保存 |
| document.**write**("<h1>Hello</h1>") | 实现在动态网页中写入内容               |

注意：document.write()可以识别HTML标签，脚本代码可以在文档任何地方书写，如果是普通写入（不涉及事件处理），区分代码的书写位置插入；文档渲染结束后，再次执行此方法，会重写网页内容。

```javascript
<body>
    <script>
        alert("浏览器弹出框。")
        console.log("这时控制台信息，供程序员使用。");
        a = prompt("用户输入的信息可以被保存起来。");
        alert(a)
    </script>
    <div>
        <script>
            // 在某一位置写入内容
            document.write("<h1>Hello</h1>")
        </script>
    </div>
    <!-- 执行document.write()后会重写网页 -->
    <input type="button" value="清除所有内容" onclick="document.write('清空后的文本')">
</body>
```



## 4.DOM事件处理

事件：指用户的行为或元素的状态。由指定元素监听相关的事件，并且绑定事件处理函数。
事件处理函数：元素监听事件，并在事件发生时自动执行的操作。

DOM: Document Object Model，文档对象模型，其实就是JS专门为访问html元素提供的一套API。

API:Application Programming Interface

### 4.1.事件函数分类

1.鼠标事件

```javascript
onclick		//单击
ondblclick	//双击
onmouseover	//鼠标移入
onmouseout	//鼠标移出
onmousemove	//鼠标移动
```



2.文档或元素加载完毕

```javascript
onload		//元素或文档加载完毕再进行下一步操作
```



3.表单控件状态监听

```javascript
onfocus 	//文本框获取焦点
onblur		//文本框失去焦点
oninput		//实时监听输入
onchange	//两次输入内容发生变化时触发,或元素状态改变时触发，监听输入框前后内容是否发生变化，也可以监听按钮的选中状态
onsubmit	//form元素监听,点击提交按钮后触发,通过返回值控制数据是否可以发送给服务器，返回true表示可以发送，返回false表示不允许提交
```



### 4.2.获取节点元素

1.根据标签名获取元素节点列表

```javascript
var elems = document.getElementsByTagName("");
/*
参数 : 标签名
返回值 : 节点列表,需要从节点列表中获取具体的元素节点对象,添加相应下标。
*/
```



2.根据class属性值获取元素节点列表

```javascript
var elems = document.getElementsByClassName("");
/*
参数 : 类名(class属性值)
返回值 : 节点列表
*/
```



3.根据id属性值获取元素节点列表

```javascript
var elem = document.getElementById("");
/*
参数 : id属性值
返回值 : 元素节点
*/
```



4.根据 name 属性值取元素列表

```javascript
var elems = document.getElementsByName("");
/*
参数 : name属性值
返回 : 节点列表
*/
```



```javascript
<body>
    <!-- 点检按钮显示hello world -->
    <div id="tip">

    </div>
    <button onclick="var a = document.getElementById('tip');
                        a.innerText = 'hello world!';">
                        点我一下
    </button>
</body>
```



​	**除了以上方式获取元素目标外，还可通过一种通用的方式querySelector()**，querySelector()的参数为css选择器的形式，比如要选一个id属性为abc的标签出来，那么正确的处理方式是querySelector("#abc")。

### 4.3.事件绑定方式

1.**内联方式**
将事件名称作为标签属性绑定到元素上
例 :

```javascript
<button onclick="alert()">点击</button>
```



2.**动态绑定**
获取元素节点，动态添加事件
例 :

```javascript
btn.onclick = function (){

};
```



### 4.4.DOM练习

**1.电灯开关**

需求：点击按钮，实现电灯开关

```javascript
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        body {
            padding: 20px;
            font-size: 20px;
        }
        
    </style>
</head>

<body>
    <script>
        var flag = "off"; //flag表示灯的状态, off表示灯是关闭的!
        function changeImg() {
            //1.通过id获取img元素(返回是一个JS对象)
            var imgObj = document.getElementById("img1");
            if (flag == "off") { // 表明灯是关闭状态, 点击后则需要打开
                imgObj.src = "imgs/on.gif";
                flag = "on"; // 更新灯的状态为开灯
            } else { // flag="on" 表名灯是打开状态, 点击后则需要关闭
                imgObj.src = "imgs/off.gif";
                flag = "off";
            }
        }
    </script>

    <input type="button" value="开/关灯" onclick="changeImg()" /> <br/><br/>
    <img id="img1" src="imgs/off.gif" />
</body>

</html>
```



### 4.6.innerHTML和innerText

document 对象中有innerHTML和innerText 两个属性， 这两个属性都是获取document对象的文本内容的，这两个属性间有哪些区别呢？通过几个例子来看一下。

```javascript
<html>
	<head><title>innerHTML</title></head>
	<body>
		<div id="d1"><p id="p1">hello world </p></div>
		<script>
			var content = document.getElementById("d1");
			alert(content.innerHTML);
			alert(content.innerText)
		</script>
	</body>
</html>
```

运行以上代码我们可以看出输出"hello world"和"hello world"。



```javascript
<html>
	<head><title>innerHTML</title></head>
	<body>
		<div id="d1">
            <p id="p1">
                hello world 
            </p>
		</div>
		<script>
			var content = document.getElementById("p1");
			alert(content.innerHTML);
			alert(content.innerText)
		</script>
	</body>
</html>
```

运行以上代码我们可以看出输出"<p id="p1">hello world </p>" 和" hello world"。

通过以上两个案例我们可以看出：

- **innerHTML**指的是**从对象的起始位置到终止位置的全部内容,包括Html标签**。
- **innerText**  指的是**从起始位置到终止位置的内容,但它去除Html标签**。



**outerHTML**

说到innerHTML，顺便说一下跟innerHTML相对的outerHTML属性。

继续看上面的代码，将alert(content.innerText) 修改为 alert(content.outerHTML) 

 通过浏览器可以看到弹出框为<p id="p1">hello world </p>和 <divid="d1"><p id="p1">hello world</p></div>

**outerHTML指的是除了包含innerHTML的全部内容外, 还包含对象标签本身**。



## 5.基础语法

### 5.1.语法规范

1. JavaScript是由语句组成,语句由关键字，变量，常量，运算符，方法组成。
2. 分号可以作为语句结束的标志，也可以省略
3. JavaScript严格区分大小写
4. 注释语法
   单行注释使用 //  -> ctrl+/
   多行注释使用 /* */  ->webstorm:ctrl+shift+/;      vscode:alt+shift+/



### 5.2.变量和常量

#### 5.2.1.变量

​	变量就是存放数据的容器，我们可以从这个容器中取出变量来使用，它实际是在内存中开辟了一块空间。如果要使用这个变量必须经过两个步骤：声明变量和赋值。

![image-20220620223327151](https://gitee.com/zou_tangrui/note-pic/raw/master/img/202309261845335.png)

**声明变量的格式：**

```js
var 变量名;
let 变量名; // es6新增的特性
```

```js
<script>
        // 1.初始化变量
        var name = '姚明';
        console.log(name);
		a = 1; // 定义一个小写字母a的变量
        A = 1; // 定义一个大写字母A的变量
        a1 = 2; // 定义全局变量
        var a2 = 3; // 页面局部变量，只能在次页面使用
        var a3, a4, a5; // 定义多个变量未赋值
        a3 = 4, a4 = 5, a5 = 6; // 再进行赋值
        var a6 = a7 = a8 = 0; // 级联赋值
</script>
```

**命名规范：**

- 变量名，常量名，函数名，方法名自定义，可以由数字，字母，下划线，$组成，禁止以数字开头；
- 禁止与关键字冲突(如：var const function if else for while do break case switch return class)；
- 变量名严格区分大小写；
- 变量名尽量见名知意，多个单词组成采用小驼峰,例如："userName"

**使用注意：**

- 变量如果省略var关键字，并且未赋值，直接访问会报错
- 变量使用var关键字声明但未赋值，变量初始值为undefined
- 变量省略var关键字声明，已被赋值，可正常使用，影响变量作用域

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



ES2015引入了两个新的关键词：let和const。这两个关键词在JS中提供了**块作用域变量（和常量）**。但在ES2015之前，JS的作用域只有全局作用域和函数作用域。

全局声明的变量拥有全局作用域。全局变量可以在 JavaScript 程序中的任何位置访问。

局部声明的变量拥有函数作用域。局部变量只能在它声明的函数内访问。

**let 声明的变量只在 let 命令所在的代码块内有效。const 声明一个只读的常量，一旦声明，常量的值就不能改变。**

在ES6之前没有块级作用域的概念，使用var声明的变量不具备块级作用域的特性：

```javascript
{ 
    var x = 2; 
}
// 这里可以使用 x 变量
```

```javascript
<body>

<h2>使用 var 声明变量</h2>

<p id="demo"></p>

<script>
var  x = 10;
// 这里输出 x 为 10
{  
    var x = 2;
    // 这里输出 x 为 2
}
// 这里输出 x 为 2
document.getElementById("demo").innerHTML = x;
</script>

</body>
```



let声明的变量只能在let所在的代码块{}内有效，在{}外不能访问：

```javascript
{ 
    let x = 2;
}
// 这里不能使用 x 变量
```

```javascript
<body>

<h2>使用 let 声明变量</h2>

<p id="demo"></p>

<script>
var  x = 10;
// 这里输出 x 为 10
{  
    let x = 2;
    // 这里输出 x 为 2
}
// 这里输出 x 为 10
document.getElementById("demo").innerHTML = x;
</script>

</body>
```

循环作用域也有一些改变：

var:

```javascript
var i = 5;
for (var i = 0; i < 10; i++) {
    // 一些代码...
}
// 这里输出 i 为 10
```

let:

```javascript
let i = 5;
for (let i = 0; i < 10; i++) {
    // 一些代码...
}
// 这里输出 i 为 5

```

在第一个实例中，使用了 **var** 关键字，它声明的变量是全局的，包括循环体内与循环体外。

在第二个实例中，使用 **let** 关键字， 它声明的变量作用域只在循环体内，循环体外的变量不受影响。



#### 5.2.2.常量

常量用于存储已经定义就无法修改的数据，它必须在声明的同时进行赋值。

```javascript
const PI = 3.14;
```

**注意：**

- 常量一经定义，不能修改，强制修改会报错；
- 命名规范同变量，为了区分变量，常量名采用全大写字母



**操作小数位：**toFixed(n)； 保留小数点后 n 位，并且四舍五入。

```javascript
<script>
        const PI = 3.1415926;
        // 保留小数点后两位
        alert(PI.toFixed(2))
</script>
```



### 5.3.数据类型

**值类型(基本类型)**：字符串（String）、数字(Number)、布尔(Boolean)、空（Null）、未定义（Undefined）、Symbol。

**引用数据类型（对象类型）**：对象(Object)、数组(Array)、函数(Function)，还有两个特殊的对象：正则（RegExp）和日期（Date）。

<img src="https://gitee.com/zou_tangrui/note-pic/raw/master/img/202309261845337.png" alt="image-20220701110414893" style="zoom:67%;" />

注：Symbol 是 ES6 引入了一种新的原始数据类型，表示独一无二的值。

 	在计算机中不同的数据类型占用的空间不同，因此我们要根据数据的需要把他们分为不同的数据类型。就如在Java中"你好"属于字符串类型，123属于整数类型。JS能保存的数据类型有：数值、字符串、数组、对象等。但JS不同于C、Java等语言，JS的数据类型是弱类型语言，它的变量数据类型是在程序运行过程中，**根据等号右边的值来判断该变量的数据类型。**

```javascript
var length = 7;                             // 数字
var lastName = "Gates";                      // 字符串
var cars = ["Porsche", "Volvo", "BMW"];         // 数组
var x = {firstName:"Bill", lastName:"Gates"};    // 对象
```



在JS中简单的数据类型包含数字型(Number)、布尔值类型(boolean)、字符串类型(String)、未定义型(Undefined)、空值类型(Null)。

- **number数值类型**

  - 整数

    - 十进制表示

    ```javascript
    var a = 100;
    ```

    - 八进制表示

    ```javascript
    var b = 021; // 结果为十进制17
    ```

    使用：整数可以采用不同进制表示，在控制台输出时一律按十进制输出。

  - 小数

    - 小数点表示

    ```javascript
    var m = 1.2345
    ```

    - 科学计数法

    ```javascript
    1.5e3
    e表示10为底，e后面的数值表示10的次方，1.5e3等价于1.5*10^3
    ```

    

- **string字符串类型**

字符串：由一个或多个字符组成，使用""或''表示，每一个字符都有对应的Unicode编码。

```javascript
var s1 = "100";
var s2 = '张三';
```



- **boolean布尔类型**

只有真或假两个值，布尔值和number值可以互相转换，true为1，false为0，可以用于逻辑判断。

```javascript
var isSave = true;
var isChecked = false;
```



- **undefined**

特殊值，变量声明未赋值时显示undefined。

```javascript
var a;
console.log(a); // undefined
```



- **null空类型**

定义对象引用时使用null，表示对象为空：

（1).引用数据类型，主要指对象、函数等；

（2).检测数据类型：typeof 变量或表达式   ；  typeof(变量或表达式)

```javascript
var n = "abcd"
console.log(typeof n);// string
console.log(typeof(n)); // string
```



### 5.4.数据类型的转换

不同类型的数据参与运算时，需要转换类型。

- **强制类型转换**

  - 转换成字符串类型：toString()，返回转换后的字符串

  ```javascript
  var a = 100;
  a = a.toString();
  console.log(a); // "100"
  var b = true;
  b = b.toString(); // "true"
  // null不能转换
  ```

  - 转换number类型：Number(param)。参数是待转换的变量或值，返回转换后的结果，如果转换成功，返回Number值，如果转换失败，返回NaN(Not a Number)，是非Number字符。NaN也是一个Number类型的数据。
  - parseInt(param)：将数据解析成整数值，如果参数为非字符串类型会转换成字符串，从左向右一次对每位字符转成Number，转换失败则停止向后解析，并返回结果；
  - parseFloat(param)：将参数转换成小数类型。

  ```javascript
  var a = "100";
  console.log(Number(a)); // 100
  var b = "100abc";
  console.log(Number(b)); // NaN
  var c = true;
  console.log(Number(c)); // 1
  console.log(parseInt(b)); // 100
  var x = 10
  console.log(parseFloat(x)); // 10.00
  ```

- **隐式类型转换（自动转换）**

  - 当字符串与其他数据类型时进行“+”运算时，表示字符串的拼接，不再是数学运算；转换规则：将非字符串类型的数据转换成字符串之后再和字符串进行拼接；
  - 其他情况，一律将操作数转换成Number类型进行数学运算。

  ```javascript
  var d = 100
  var e = "qwer"
  console.log(d + e); // 100qwer
  var f = true
  console.log(d + f); // 101
  ```

  

### 5.5.运算符

```javascript

=					赋值运算符，将=右边的值赋给左边的变量
+ - * / %   		加 减 乘 除 取余
+= -= *= /= %=   	复合运算符
++ -- 				变量的自增和自减，指在本身的基础上+1或-1的操作

关系运算符
> <  大于 等于
>= <= 大于等于  小于等于
==(相等) !=(相等)    值相等
===(全等) !==(不全等)  值和类型都相等

逻辑运算符
&& 逻辑与 表达式同时成立，最终结果才为true；1则1
|| 逻辑或 表达式中只要有一个成立，最终结果即为true；有1则1
! 逻辑非  对已有表达式的结果取反，除零值以外，所有值都为false

三元运算符
表达式1 ? 表达式2 : 表达式3;
判断表达式1是否成立，返回布尔值；
如果表达式1成立，执行表达式2；
如果表达式1不成立，执行表达式3；
```

<img src="https://gitee.com/zou_tangrui/note-pic/raw/master/img/202309261845338.png" style="zoom:50%;" />

注意：

+ 自增或自减运算符在单独与变量结合时，放前和放后没有区别
+ 如果自增或自减运算符与其他运算符结合使用，要区分前缀和后缀，做前缀，那就先++/--，再进行赋值或其他运算，如果做后缀，就先结合其他运算符，再进行++ / --

1. 关系运算符用来判断表达式之间的关系，结果永远是布尔值 true/false

2. 使用

   + 字符串与字符串之间的比较
     依次比较每位字符的Unicode码，只要某位字符比较出结果，就返回最终结果

   + str.charCodeAt(index)

     方法可返回指定位置的字符的 Unicode 编码。这个返回值是 0 - 65535 之间的整数

     index必需。表示字符串中某个位置的数字，即字符在字符串中的下标。

3. 相等与全等

   + 相等：不考虑数据类型，只做值的比较(包含自动类型转换)
   + 全等：不会进行数据类型转换，要求数据类型一致并且值相等才判断全等

```javascript
var a = 2;
// 在前现变化，在后先运算
console.log(a++); // 2
console.log(++a); // 4

// 每一个字符在做比较时都是比较Unicode编码
var b = 'A',
    c = 'a';
console.log(b.charCodeAt(0)); // 查询Unicode编码对应值 65
console.log(b > c); // false

// 关系运算符 > < >= <= == != === !==  得到布尔类型的值
        // == != 只比较值是否相等，无关类型
        // === 不仅要比较值是否相等，还要比较类型
        var a = "100";
        var b = 100;
        var c = 1;
        var d = true;
        console.log(a == b); // true
        console.log(a === b); // false
        console.log(c == d); // true
        console.log(c === d); // false

var x = 10,
    y = 20,
    z = 30;
// 运算优先级() ! && || 
console.log(!(x > y && y > z || x < y && z > y)); // false
// 三元运算符
var result = x > y ? x : y
console.log(result); // 20
```



### 5.6.练习

练习1：在文本框输入文字进行验证，如果是字符就提示验证成功，如果是数字就提示验证失败：

```javascript
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        #check .txt {
            padding: 5px;
        }
        
        #check .btn {
            margin: 8px 0;
        }
    </style>
</head>

<body>
    <div id="check">
        <h3>请输入文字验证：</h3>
        <input class="txt" type="text" id="txt" placeholder="请输入字符串内容">
        <div class="btn">
            <button onclick="check()">验证</button>
        </div>
        <div id="result"></div>
    </div>
    <script>
        function check() {
            // 分别获取元素对象，并保存在变量中
            var txt = document.getElementById("txt");
            var result = document.getElementById("result");
            // 根据文本框输入的值进行判断
            var num = txt.value;
            // isNaN()表示判断是否不是数字，如果不是返回true,否则返回false
            // Number(num) 如果是数字返回数字，如果不是返回NaN
            var isNum = isNaN(Number(num)) ? false : true; // 如果能转乘number就返回true
            result.innerText = isNum ? '验证成功' : '验证失败';
        }
    </script>
</body>

</html>
```



## 6.流程控制

​	JavaScript中的流程控制就是控制代码的执行顺序，主要有三种类型：顺序结构、选择结构、循环结构。顺序结构就是我们以上使用的JS代码，它从上到下依次执行代码语句。这里我们主要来说选择结构和循环机构。

- **顺序结构：**-单线程，没有分支

```javascript
// 顺序结构
console.log(b); // undefined
var b = 100;
var a = "ok";
console.log(a); // ok
console.log(b); // 100
// console.log(c); // 报错，未定义
// 解决方案
try {
   console.log(c);
} catch (error) {
   console.log(error.message);
}
```



### 6.1.选择结构

- **if语句**

  <img src="https://gitee.com/zou_tangrui/note-pic/raw/master/img/202309261845339.png" alt="image-20220627155520005" style="zoom:67%;" />

  - 简单if语句

  ```javascript
  if(条件表达式) {
      表达式成立时执行的代码块;
  }
  代码
  ```
```javascript
  
注意 : 除零值以外，其他值都为真，以下条件为假值false:
  
  if(0){}
  if(0.0){}
  if(""){} //空字符串
  if(undefined){}
  if(NaN){}
  if(null){}
```

特殊写法：{}可以省略，但一旦省略，if条件语句只控制其后的第一行代码。

**案例：如果获取当前时间，如果时间小于20小时，输出Good Day**

  ```javascript
  <head>
      <meta charset="utf-8">
      <title>if语句</title>
  </head>
  
  <body>
  
      <p>如果时间早于 20:00，会获得问候 "Good day"。</p>
      <button onclick="myFunction()">点击这里</button>
      <p id="demo"></p>
      <script>
          function myFunction() {
              var x = "";
              var time = new Date().getHours();
              if (time < 20) {
                  x = "Good day";
              }
              document.getElementById("demo").innerHTML = x;
          }
      </script>
  
  </body>
  
  ```





- **if-else结构**
  
  ```javascript
  if(条件表达式){
  	//条件成立时执行
  }else{
  	//条件不成立时选择执行
  }

  ```
  
  ```javascript
  <head>
      <meta charset="utf-8">
      <title>if-else</title>
  </head>
  
  <body>
  
      <p>点击这个按钮，获得基于时间的问候。</p>
      <button onclick="myFunction()">点击这里</button>
      <p id="demo"></p>
      <script>
          function myFunction() {
              var x = "";
              var time = new Date().getHours();
              if (time < 20) {
                  x = "Good day";
              } else {
                  x = "Good evening";
              }
              document.getElementById("demo").innerHTML = x;
          }
      </script>
  
  ```

</body>
  ```javascript
  - **多重条件语句**

 if(条件1){
  	//条件1成立时执行
  }else if(条件2){
  	//条件2成立时执行
  }else if(条件3){
  	//条件3成立时执行
  }...else{
  	//条件不成立时执行
  }
  ```

![image-20220624220251728](https://gitee.com/zou_tangrui/note-pic/raw/master/img/202309261845340.png)

**案例：如果时间小于 10:00，则生成问候 "Good morning"，如果时间大于 10:00 小于 20:00，则生成问候 "Good day"，否则生成问候 "Good evening"：**

```javascript
<head>
    <meta charset="utf-8">
    <title>if多重分支</title>
</head>

<body>

    <script type="text/javascript">
        var d = new Date();
        var time = d.getHours();
        if (time < 10) {
            document.write("<b>早上好</b>");
        } else if (time >= 10 && time < 20) {
            document.write("<b>今天好</b>");
        } else {
            document.write("<b>晚上好!</b>");
        }
    </script>
    <p>
        这个例子演示了 if..else if...else 语句。
    </p>

</body>
```

**案例：根据随机数判断：**

```javascript
<body>

    <p id="demo"></p>
    <script>
        var r = Math.random();//随机生成的是0-1
        var x = document.getElementById("demo")
        if (r > 0.5) {
            x.innerHTML = "<a href='https://www.baidu.com'>访问百度</a>";
        } else {
            x.innerHTML = "<a href='http://wwf.org'>Visit WWF</a>";
        }
    </script>

</body>
```

**案例：音乐播放器进度条：**

```javascript
<body>
    <!-- 滑块元素 -->
    <input type="range" min="1" value="5" max="10" id="rng">
    <!-- 使用内嵌的方式编写js代码 -->
    <script>
        //使用变量保存通过id获取的元素对象
        var rng = document.getElementById("rng");
        //绑定元素对象的事件
        rng.onchange = function() {
            //在控制台输出滑动后的值
            console.log(this.value);
            var _val = this.value;
            if (_val == 1) {
                console.log("A") 
            } else if (_val == 2) {
                console.log("B");
            } else if (_val == 3) {
                console.log("C")
            } else {
                console.log("不合格")
            }
        }
    </script>
</body>
```





- **switch语句**

用于基于不同条件来执行不同的动作。

```javascript
switch(value){
	 case 值1 :
	 //value与值1匹配全等时,执行的代码段
	 break; //结束匹配
	 case 值2 :
	 //value与值2匹配全等时,执行的代码段
	 break;
	 case 值3 :
     //value与值3匹配全等时,执行的代码段
	 break;
	 default:
 	 //所有case匹配失败后默认执行的语句
 	 break;
}
```

使用方式：

```javascript
1. switch语句用于值的匹配，case用于列出所有可能的值；只有switch()表达式的值与case的值匹配全等时，才会执行case对应的代码段
2. break用于结束匹配，不再向后执行；可以省略，break一旦省略，会从当前匹配到的case开始，向后执行所有的代码语句，直至结束或碰到break跳出
3. default用来表示所有case都匹配失败的情况，一般写在末尾，做默认操作
4. 多个case共用代码段
  		case 值1:
  		case 值2:
  		case 值3:
  		//以上任意一个值匹配全等都会执行的代码段
```

![image-20220624220633491](https://gitee.com/zou_tangrui/note-pic/raw/master/img/202309261845341.png)

案例1：判断今天是星期几：

```javascript
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <title>switch语句</title>
</head>

<body>

    <p>点击下面的按钮来显示今天是周几：</p>
    <button onclick="myFunction()">点击这里</button>
    <p id="demo"></p>
    <script>
        function myFunction() {
            var x;
            var d = new Date().getDay();
            switch (d) {
                case 0:
                    x = "今天是星期日";
                    break;
                case 1:
                    x = "今天是星期一";
                    break;
                case 2:
                    x = "今天是星期二";
                    break;
                case 3:
                    x = "今天是星期三";
                    break;
                case 4:
                    x = "今天是星期四";
                    break;
                case 5:
                    x = "今天是星期五";
                    break;
                case 6:
                    x = "今天是星期六";
                    break;
            }
            document.getElementById("demo").innerHTML = x;
        }
    </script>

</body>

</html>
```

案例2：default语句的使用

```javascript
<html>
<head>
<meta charset="utf-8">
<title>default</title>
</head>
<body>

<p>点击下面的按钮，会显示出基于今日日期的消息：</p>
<button onclick="myFunction()">点击这里</button>
<p id="demo"></p>
<script>
function myFunction()
{
	var x;
	var d=new Date().getDay();
	switch (d)
    {
  		case 6:
            x="今天是星期六";
    		break;
  		case 0:
            x="今天是星期日";
    		break;
  		default:
    		x="期待周末";
  	}
	document.getElementById("demo").innerHTML=x;
}
</script>

</body>
</html>
```



### 6.2.循环结构

循环结构的作用是根据条件重复执行某段代码，分为while循环、do-while循环、for循环。

- **while循环**

```javascript
定义循环变量;
while(循环条件){
   条件满足时执行的代码段
   更新循环变量;
}

1.定义循环变量
2.根据条件判断执行代码块
3.更新循环变量
```

```javascript
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>while语句</title>
</head>
<body>

<p>点击下面的按钮，只要 i 小于 5 就一直循环代码块。</p>
<button onclick="myFunction()">点击这里</button>
<p id="demo"></p>
<script>
function myFunction(){
	var x="",i=0;
	while (i<5){
		x=x + "该数字为 " + i + "<br>";
		i++;
	}
	document.getElementById("demo").innerHTML=x;
}
</script>

</body>
</html>
```



- **do-while循环**

```javascript
do{
	循环体;
	更新循环变量
}while(循环条件);
```

```javascript
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <title>do-while语句</title>
</head>

<body>

    <p>点击下面的按钮，只要 i 小于 5 就一直循环代码块。</p>
    <button onclick="myFunction()">点击这里</button>
    <p id="demo"></p>
    <script>
        function myFunction() {
            var x = "",
                i = 0;
            do {
                x = x + "该数字为 " + i + "<br>";
                i++;
            }
            while (i < 5)
            document.getElementById("demo").innerHTML = x;
        }
    </script>

</body>

</html>
```



![image-20220624222123895](https://gitee.com/zou_tangrui/note-pic/raw/master/img/202309261845342.png)



while循环和do-while循环的区别：

1. while 循环先判断循环条件，条件成立才执行循环体
2. do-while 循环不管条件是否成立，先执行一次循环体



- **for循环**

```javascript
for(定义循环变量;循环条件;更新循环变量){
	循环体;
}

定义循环变量;
while(循环条件){
   条件满足时执行的代码段
   更新循环变量;
}
```

![image-20220624222320955](https://gitee.com/zou_tangrui/note-pic/raw/master/img/202309261845343.png)

for语句：

```javascript
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <title>for循环</title>
</head>

<body>

    <script>
        cars = ["BMW", "Volvo", "BYD", "Benz"];
        for (var i = 0; i < cars.length; i++) {
            document.write(cars[i] + "<br>");
        }
    </script>

</body>

</html>
```



for/in语句：

```javascript
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <title>for/in</title>
</head>

<body>

    <p>点击下面的按钮，循环遍历对象 "person" 的属性。</p>
    <button onclick="myFunction()">点击这里</button>
    <p id="demo"></p>
    <script>
        function myFunction() {
            var x;
            var txt = "";
            var person = {
                fname: "Bill",
                lname: "Gates",
                age: 56
            };
            for (x in person) {
                txt = txt + person[x];
            }
            document.getElementById("demo").innerHTML = txt;
        }
    </script>

</body>

</html>
```



JavaScript支持不同类型的循环，它们的区别是：

- for-循环代码块一定的次数
- for/in-循环遍历对象的属性
- while-当指定的条件为true时，循环指定的代码块
- do/while-同样当指定条件为true时，循环指定代码块

### 6.3.break和continue语句

JS中的break和continue语句和Java，Python都一样，**break 强制结束循环，continue 结束当次循环，开始下一次循环**。

![image-20220624222508235](https://gitee.com/zou_tangrui/note-pic/raw/master/img/202309261845345.png)



break语句：

```javascript
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <title>break语句</title>
</head>

<body>

    <p>点击按钮，测试带有 break 语句的循环。</p>
    <button onclick="myFunction()">点击这里</button>
    <p id="demo"></p>
    <script>
        function myFunction() {
            var x = "",
                i = 0;
            for (i = 0; i < 10; i++) {
                if (i == 3) {
                    break;
                }
                x = x + "该数字为 " + i + "<br>";
            }
            document.getElementById("demo").innerHTML = x;
        }
    </script>

</body>

</html>
```



continue语句-for：

```javascript
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <title>continue语句</title>
</head>

<body>

    <p>点击下面的按钮来执行循环，该循环会跳过 i=3 的数字。</p>
    <button onclick="myFunction()">点击这里</button>
    <p id="demo"></p>
    <script>
        function myFunction() {
            var x = "",
                i = 0;
            for (i = 0; i < 10; i++) {
                if (i == 3) {
                    continue;
                }
                x = x + "该数字为 " + i + "<br>";
            }
            document.getElementById("demo").innerHTML = x;
        }
    </script>

</body>

</html>
```

continue语句-while:

```javascript
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>continue语句</title>
</head>
<body>
	<p id= "demo">点击下面的按钮来执行循环，该循环会跳过 i=3 的数字。</p>
	<button onclick="myFunction()">点击这里</button>

	<script>
		function myFunction(){
			var x= "", i= 0;
			while (i < 10){
				if (i == 3){
					i++;    //加入i++不会进入死循环
					continue;
				}
				x= x + "该数字为 " + i + "<br>";
				i++;

			}
			document.getElementById("demo").innerHTML= x;
		}
	</script>
</body>
</html>
```



### 6.4.案例

99乘法表:

```javascript
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style>
        span {
            border: 1px solid #8eff4f;
        }
    </style>
</head>

<body>

</body>
<script>
    //函数的定义
    function show99() {
        //ul和li
        document.write("<ul>");
        for (let i = 1; i <= 9; i++) {
            document.write("<li>")
            for (let j = 1; j <= i; j++) {
                document.write("<span>" + i + "*" + j + "=" + i * j + "&emsp;</span>");
            }
            document.write("</li>");

        }
        document.write("</ul>");
    }
    show99(); //函数的调用
</script>

</html>
```

```javascript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        html {
            font-family: monospace;
        }
    </style>
</head>

<body>
	<script>
        var i = 0;
        do {
            i++;
            var j = 0;
            do {
                j++;
                document.write(i + "*" + j + "=" + i * j, "&nbsp;")
            }
            while (j < i);
            document.write("<br>");
        }
        while (i < 9);
    </script>
</body>

</html>
```



求学生成绩：要求用户输入班级人数，然后依次输入每个学生成绩，最后打印出该班平均成绩和总成绩。

1.弹出输入框，输入班级人数，输入学生成绩；

2.计算总成绩；

3.求出平均成绩。

```javascript
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>

    <script>
        var sum = 0; // 求和
        var average = 0; // 平均值 
        var num = prompt("请输入班级总人数：");
        for (var i = 1; i < num; i++) {
            var score = prompt("请输入" + i + "个学生成绩");
            sum = sum + parseFlaot(score); // 将字符型转换为数字
        }
        average = sum / num;
        alert("班级的总成绩是：" + sum);
        alert("班级的平均成绩是：" + average);
    </script>
</body>

</html>
```



完成以下案例：

- 打印100以内7的倍数
- 打印100以内所有偶数的和
- 计算100的阶乘100!
- 100-999之间的水仙花数，abc=a3+b3+c3
- 打印出1000-2000之间所有的闰年数，并以每行4个数的形式输出
- 打印n行n列的星星



## 7.函数

函数是由事件驱动的或者当它被调用时执行的可重复使用的代码块。其语法格式如下：

```javascript
// 1.声明函数
function 函数名() {
    代码块
    return 返回值
}
// 2.调用函数
函数名()
```

函数用关键字function来定义，函数体包含在{}里，函数名的命名规则必须符合变量名的规则。JavaScript 对大小写敏感。关键词 function 必须是小写的，并且必须以与函数名称相同的大小写来调用函数。

```javascript
<script>
        // 通过关键字function声明函数
        function helloWorld() {
            alert("Hello World!");
        }
        // 通过函数名调用函数,不调用函数不会执行
        helloWorld();
</script>
```

利用函数求1000-2000之间的闰年：

```javascript
<script>
        function runYear() {
            var i = 0;
            for (var a = 1000; a <= 2000; a++) {
                if (a % 4 == 0 && a % 100 != 0 || a % 400 == 0) {
                    document.write(a + '&nbsp' + '');
                    i++;
                    if (i % 4 == 0) {
                        document.write("<br>");
                    }
                }
            }
        }
        runYear()
</script>
```



### 7.1.函数的参数

​	在调用函数时，可以向其传递值，这些值被称为参数。这些参数可以在函数中使用，并可以发送多个参数，参数之间用逗号(,)隔开：

```javascript
myFunction(argument1,argument2)
```

当声明函数时，把参数当作变量来声明，变量和参数必须以一致的顺序出现，第一个变量就是第一个被传递的参数的给定的值，依次类推：

```javascript
function myFunction(var1,var2) {
	代码
}
```

```javascript
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <title></title>
</head>

<body>

    <p>点击这个按钮，来调用带参数的函数。</p>
    <button onclick="myFunction('龟叔','Python创始人')">点击这里</button>
    <button onclick="myFunction('艾奇','JS创始人')">点击这里</button>
    <script>
        function myFunction(name, job) {
            alert("Welcome " + name + ", the " + job);
        }
    </script>

</body>

</html>
```

​	上面代码中，在声明函数中的参数name和job是函数中的**形式参数**，也称为形参，而在函数调用时，传递的"龟叔"，"Python创始人"等是函数中的**实际参数**，也称为实参。我们可以理解为**在声明函数时的参数即为形参，在函数调用时传递的值就是实参**。



**案例：求任意两个数的和和两个数之间的和：**

```javascript
<script>
        function sum(num1, num2) {
            console.log(num1 + num2);
        }
        sum(4, 5);

        function getSum(start, end) {
            var sum = 0;
            for (var i = start; i <= end; i++) {
                sum += i;
            }
            console.log(sum);
        }
        getSum(0, 100);
</script>
```



JavaScript语言相比于Java函数的参数传递是比较自由的，可以不用一一对应，但也有一定的规则：

- 形参和实参一一对应，正常对应输出
- 实参个数多余形参，最终由形参个数决定
- 实参个数小于形参，多余的形参定义为undifined

```javascript
<script>
        function sum(num1, num2) {
            console.log(num1 + num2);
        }
        // 实参和形参匹配，正常输出
        sum(10, 20);
        // 形参个数小于实参，取值由形参决定
        sum(10, 20, 30);
        // 形参个数大于实参，多的形参会被定义为undifined
        sum(10); // Nan
</script>
```



### 7.2.函数的返回值

有时，我们希望函数将值返回给调用它的地方，通过return语句就可以实现，在使用return语句时，函数会停止执行，并返回指定的值。语法格式为：

```javascript
function fun() {
    var x = 10;
    return x;
}
```

需要注意的是整个JS代码不会停止执行，仅仅是函数遇到return语句停止，然后返回值给调用者。函数调用将被返回值取代：

```javascript
var fun = fun();
```

此时fun变量的值就是10，也就是fun()函数的返回值。即使不保存在变量中， 也可以在代码中使用返回值：

```javascritp
document.getElementById('demo').innerHTML = fun();
```

```javascript
<p>调用会将结果返回给调用者</p>
<p id="demo"></p>
<script>
   function fun(num1, num2) {
        return num1 * num2;
   }
   document.getElementById('demo').innerHTML = fun(10, 10);
</script>
```

仅仅是希望退出函数时，也可以使用return语句，返回值是可选的：

```javascript
function myFunction(a,b) {
    if (a>b){
        return;
    }
    x=a+b
}
```

如果 a 大于 b，则上面的代码将退出函数，并不会计算 a 和 b 的总和。

```javascript
function myFunction(a, b) {
   if (a > b) {
        return;
    }
    x = a + b;
    return x;
 }
var result = myFunction(2, 3);
alert(result);
```

**案例：求几个数的最大值**

```javascript
function getMax(arr) {
    var max = arr[0];
    for (var i = 1; i <= arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
var result = getMax([2, 4, 6, 7, 33, 66, 23, 26]);
alert(result);
```



**需要注意的是：函数return语句只能返回一个返回值，并立即终止函数。函数没有return，只返回undifined。**

```javascript
function sum(num1, num2) {
    return num1 + num2;
    alert("return后的语句不会执行");
}
// 如果返回多个值，可以采用数组
function fun(num2, num3) {
    return num2, num3;
}
console.log(fun(2, 3)); // 返回多个值的情况以最后一个值为准
```



### 7.3.arguments的使用

​	在实际的开发过程中，不确定需要传递参数的个数时，可以用arguments关键字来获取，它相当于是当前函数的内置对象，所有的函数都内置了arguments对象，用来存数传递的所有实参。

```javascript
// arguments接收不确定个数参数时是一个伪数组，只有数组的特点，没有数组的增删方法
function fun() {
    console.log(arguments);
}
fun(1, 2, 4, 5, 6, 7, 8);
```



### 7.4.作用域

​	在JS中声明的变量是有生命周期的，从它被声明开始，局部变量会在函数运行后被删除，全局变量会在页面关闭的时候删除。而变量的可用范围就是它的作用域，作用域可以增强代码的逻辑性和实用性，减少变量名的冲突。

#### 7.4.1.局部作用域

变量在函数内声明即为局部变量，具有局部作用域，它只能在函数内部访问。在函数外不能使用。

```javascript
<p>局部变量在声明的函数外不可以访问。</p>
<p id="demo"></p>
<script>
    function myFunction() {
        var carName = "Volvo";
        console.log(carName);
    }
    myFunction();
    document.getElementById("demo").innerHTML = "carName 的类型是：" + typeof carName;
</script>
</body>
```

因为局部变量只作用于函数内，所以不同的函数可以使用相同名称的变量。局部变量在函数开始执行时创建，函数执行完后局部变量会自动销毁。所以上述代码中，在函数内输出carName的值是Volvo，在函数外就为undifined。



#### 7.4.2.全局作用域

变量在函数外定义即为全局变量，全局变量具有全局作用域，网页中所有地方都可以使用该变量。

```javascript
<body>

<p>全局变量在任何脚本和函数内均可访问。</p>
<p id="demo"></p>
<script>
var carName = "Volvo";
myFunction();
function myFunction() {
    document.getElementById("demo").innerHTML =
		"我可以显示 " + carName;
}
</script>

</body>
```



**需要注意的是：如果变量在函数内部没有用var关键字来声明，该变量具有全局作用域：**

```javascript
<body>

    <p>
    如果你的变量没有声明，它将自动成为全局变量：
</p>
<p id="demo"></p>
<script>
    myFunction();
document.getElementById("demo").innerHTML =
    "我可以显示 " + carName;
function myFunction() {
    carName = "Volvo";
}
</script>
```



**练习：利用分组元素实现网页换肤：**

```javascript
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        fieldset {
            width: 200px;
            margin: 0 auto;
        }
    </style>
</head>

<body>
    <!-- 分组元素 -->
    <fieldset>
        <!-- 分组元素标题 -->
        <legend>控制页面颜色</legend>
        <div class="btns">
            <button id="red">红色</button>
            <button id="green">绿色</button>
            <button id="blue">蓝色</button>
        </div>
    </fieldset>
    <script>
        // 1.找到对应元素，保存在变量中
        var btnRed = document.getElementById("red");
        var btnGreen = document.getElementById("green");
        var btnBlue = document.getElementById("blue");
        // 2.绑定按钮元素的单击事件
        btnRed.onclick = function() {
            // 使用元素的背景色改变
            document.body.style.backgroundColor = "red";
        }
        btnGreen.onclick = function() {
            // 使用元素的背景色改变
            document.body.style.backgroundColor = "green";
        }
        btnBlue.onclick = function() {
            // 使用元素的背景色改变
            document.body.style.backgroundColor = "blue";
        }
    </script>
</body>

</html>
```



**练习：点击单选按钮显示不同的内容。**

<img src="https://gitee.com/zou_tangrui/note-pic/raw/master/img/202309261845346.png" alt="image-20220702115824842" style="zoom:50%;" />

```javascript
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        #pic {
            width: 300px;
            margin: 0 auto;
            border: solid 1px red;
        }
        
        #pic input {
            margin-right: 45px;
        }
    </style>
</head>

<body>
    <!-- 1.添加元素；2.添加样式；3.添加逻辑；4.优化 -->
    <div id="pic">
        <div class="img">
            <img id="img" width="300" src="imgs/1.png">
        </div>
        <fieldset>
            <legend>选择元素</legend>
            <!-- name属性的值相同可以确保单选按钮组相互排斥选择 -->
            <input checked="checked" type="radio" name="pic" id="pic1">
            <input type="radio" name="pic" id="pic2">
            <input type="radio" name="pic" id="pic3">
            <input type="radio" name="pic" id="pic4">
        </fieldset>
    </div>
    <script>
        // 1.获取单选按钮对象并保存在变量中
        var pic1 = document.getElementById("pic1");
        var pic2 = document.getElementById("pic2");
        var pic3 = document.getElementById("pic3");
        var pic4 = document.getElementById("pic4");
        var img = document.getElementById("img");
        // 2.绑定点击事件
        pic1.onclick = function() {
            // 改变图片的显示来源,setAttribute设置或重置属性src的值
            img.setAttribute("src", "imgs/1.png");
        }
        pic2.onclick = function() {
            // 改变图片的显示来源,setAttribute设置或重置属性src的值
            img.setAttribute("src", "imgs/2.png");
        }
        pic3.onclick = function() {
            // 改变图片的显示来源,setAttribute设置或重置属性src的值
            img.setAttribute("src", "imgs/on.gif");
        }
        pic4.onclick = function() {
            // 改变图片的显示来源,setAttribute设置或重置属性src的值
            img.setAttribute("src", "imgs/off.gif");
        }
    </script>
</body>

</html>
```



**作业：根据下图思路，点击左右两边的按钮切换图片**-code/47

![](https://gitee.com/zou_tangrui/note-pic/raw/master/img/202309261845347.png)

## 8.对象

​	JS中所有事务都是对象，比如：字符串、数值、数组、函数等，此外，JS还允许自定义对象。对象是由**属性和方法**组成，通过点(.)来进行访问。JS还提供多个内置对象，如String,Date,Array等。

```javascript
objectName.propertyName   // 访问对象属性
objectName.methodName()   // 访问对象方法
```

比如定义一个字符串，访问其length属性和toUpperCase()的方法：

```javascript
<script>
    var message = 'Hello JavaScript';
    console.log(message.length); // 16
    var x = message.toUpperCase(); 
    console.log(x); // HELLO JAVASCRIPT
</script>
```

### 8.1.创建对象

通过以下两种方法能创建自己的对象：

1. 使用Object定义并创建对象实例；
2. 使用函数来定义对象，然后创建新的对象数组。

- **使用Object创建对象**

在JS中，几乎所有对象的类型都是Object，它们都会从Object.prototype继承属性和方法，Object构造函数创建一个对象包装器，构造函数会根据给定的参数创建对象，具体有以下情况：

- 如果给定值是null或undefined，将会创建并返回一个空对象；
- 如果传进去的是一个基本类型的值，则会构造其包装类型的对象；
- 如果传进去的是引用类型的值，仍然会返回这个值，经它们复制的变量保有和源对象相同的引用地址；
- 当以非构造函数的形式被调用时，Object的行为等同于new Object()。

语法格式：

```javascript
new Object([value]);  // 以构造函数方式声明，value可以是任何值
```

如：

```javascript
// 等价于 o = new Boolean(true);
var o = new Object(true);
```

实例：

```javascript
<script>
    var person = new Object();
    person.firstname = "John";
    person.lastname = "Doe";
    person.age = 50;
    person.eyecolor = "blue";
    document.write(person.firstname + " is " + person.age + " years old.");
</script>
```

以上方式也可以使用对象字面量(Json)来创建对象，语法格式为：

```javascript
{ name1 : value1, name2 : value2,...nameN : valueN }
```

其实就是大括号里面创建 **name:valu**e 对，然后 **name:value** 对之间以逗号 **,** 隔开。

实例：

```javascript
person={firstname:"John",lastname:"Doe",age:50,eyecolor:"blue"}
document.write(person.firstname + " is " + person.age + " years old.");
```



- **使用构造函数创建对象**

```javascript
function person(firstname, lastname, age, eyecolor) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
    this.eyecolor = eyecolor;
}
myFriend = new person("John", "Doe", 50, "blue");
document.write(myFriend.firstname + " is " + myFriend.age + " years old.");
```

一旦有了构造器就可以创建对象实例，完成对象从初始化到实例化的过程:

```javascript
var myFriend01=new person("John","Doe",25,"blue");
var myFriend02=new person("Sally","Rally",24,"green");
```

也可以直接为对象赋值，向已有对象添加新属性：

```javascript
function person(firstname, lastname, age, eyecolor) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
    this.eyecolor = eyecolor;
}
//myFriend = new person("John", "Doe", 50, "blue");
//document.write(myFriend.firstname + " is " + myFriend.age + " years old.");
person.firstname = "John";
person.lastname = "Doe";
person.age = 30;
person.eyecolor = "blue";

x = person.firstname;
alert(x);
```

- **把方法添加到JS对象中**：方法只不过是附加在对象上的函数，在构造器内部定义对象的方法也可以改变相应的属性：

```javascript
<script>
function person(firstname,lastname,age,eyecolor){
    this.firstname=firstname;
    this.lastname=lastname;
    this.age=age;
    this.eyecolor=eyecolor;
    this.changeName=changeName;
	function changeName(name){
		this.lastname=name;
	}
}
myFriend=new person("Sally","Rally",28,"green");
myFriend.changeName("Doe");
document.write(myFriend.lastname);
</script>
```



### 8.2.JS的类

**JavaScript虽然是面向对象的语言，但JavaScript不适用类。**在JS中不会使用类，也不会使用类创建对象，JS是基于prototype的，而不是基于类的。可以通过for...in...语句循环遍历对象的属性，语法为：

```javascript
for (variable in object) {
    执行的代码……
}
```

**注意：** for...in 循环中的代码块将针对每个属性执行一次。

```javascript
<body>

    <p>点击下面的按钮，循环遍历对象 "person" 的属性。</p>
    <button onclick="myFunction()">点击这里</button>
    <p id="demo"></p>
    <script>
        function myFunction() {
            var x;
            var txt = "";
            var person = {
                fname: "Bill",
                lname: "Gates",
                age: 56
            };
            for (x in person) {
                txt = txt + person[x];
            }
            document.getElementById("demo").innerHTML = txt;
        }
    </script>

</body>
```

**JS对象是不可变的，它们是通过引用来传递的：**

```javascript
<body>
    <p>JavaScript 对象是可变的。</p>
    <p>拷贝的对象改变，原始的也会跟着改变。</p>

    <p id="demo"></p>

    <script>
        var person = {
            firstName: "John",
            lastName: "Doe",
            age: 50,
            eyeColor: "blue"
        }

        var x = person;
        x.age = 10;

        document.getElementById("demo").innerHTML =
            person.firstName + " is " + person.age + " years old.";
    </script>
</body>
```



**new和不new的区别：**

- 如果new了，函数内的this会指向当前这个person，并且就算函数内部不return也会返回一个对象
- 如果不new，函数内的this会指向window

```javascript
<script>
    function person(firstname, lastname, age, eyecolor) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
    this.eyecolor = eyecolor;
    return [this.firstname, this.lastname, this.age, this.eyecolor, this]
}

var myFriend01 = new person("John", "Doe", 50, "blue");
var myFriend02 = person("Sally", "Rally", 48, "green");
console.log(myFriend01) // this 输出一个 person 对象
console.log(myFriend02) // this 输出 window 对象
</script>
```



### 8.3.原型对象prototype

所有的JS对象都会从一个prototype中继承类和属性：

- `Date` 对象从 `Date.prototype` 继承。
- `Array` 对象从 `Array.prototype` 继承。
- `Person` 对象从 `Person.prototype` 继承。

所有JS的对象都是位于原型链顶端的Object实例，JS对象有一个指向一个原型对象链，当试图访问一个对象的属性时，它不仅仅在该对象上搜寻，还会搜寻该对象的原型，以及该对象原型的原型，依次层层向上搜索，直到找到一个名字匹配的属性或达到原型链的末尾。

有时我们想要在所有已经存在的对象添加新的属性和方法，有时想要在对象的构造函数中添加属性和方法，使用prototype属性就可以给对象的构造函数添加新的属性。

```javascript
<body>

    <h2>JavaScript 对象</h2>

    <p id="demo"></p>

    <script>
        function Person(first, last, age, eye) {
            this.firstName = first;
            this.lastName = last;
            this.age = age;
            this.eyeColor = eye;
        }

        Person.prototype.nationality = "China";

        var myFriend = new Person("John", "Doe", 25, "black");
        document.getElementById("demo").innerHTML =
            "我朋友的国籍是 " + myFriend.nationality;
    </script>

</body>
```

当然我们也可以使用 prototype 属性就可以给对象的构造函数添加新的方法：

```javascript
<body>

<h2>JavaScript 对象</h2>

<p id="demo"></p>

<script>
function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}

Person.prototype.name = function() {
  return this.firstName + " " + this.lastName
};

var myFriend = new Person("John", "Doe", 25, "black");
document.getElementById("demo").innerHTML =
"我的朋友是 " + myFriend.name(); 
</script>

</body>
```





### 8.4.数组

数组对象的作用是使用单独的变量来存储一系列的值。如果你有一组数据（如车的名字价格），然后你想找出某一辆车并不容易，数组可以用一个变量名存储所有的值，并且可以用变量名访问任何一个值，数组中的每个元素都有一个id，以便它可以更容易的被访问到。

- **数组的创建：**

```javascript
// 1.常规方式
var myCars = new Array();
myCars[0]="Saab";      
myCars[1]="Volvo";
myCars[2]="BMW";

// 简洁方式
var myCars=new Array("Saab","Volvo","BMW");

// 字面量
var myCars=["Saab","Volvo","BMW"];
```

- **数组的特点：**

  - 数组用于存储若干数据,自动为每位数据分配下标,从0开始
  - 数组中的元素不限数据类型,长度可以动态调整
  - 动态操作数组元素 ：根据元素下标读取或修改数组元素，arr[index]
  - 在一个数组中可以有不同的对象，因为在JS中，数组元素是对象，函数也是对象，所以数组中可以包含对象元素、函数、数组：

  ```javascript
  myArray[0]=Date.now;
  myArray[1]=myFunction;
  myArray[2]=myCars;
  ```

  

- **数组的访问：**

通过指定数组名的索引号，你可以访问某个特定的元素。

```javascript
var name=myCars[0];
```

同样可以通过索引修改数组myCars的第一个元素：

```javascript
myCars[0]="BYD";
```

- **遍历数组：**

```javascript
var arr = ['a', 'b', 'c', 'd'];
for(var i = 0;i < arr.length;i++) {
    console.log(arr[i]);
}
```



- **属性和方法：**
  
  - 属性：length表示数组的长度，可读可写
  
  - 方法：
    - **push(data)**：在数组的末尾添加一个或多个元素，多个元素之间使用逗号隔开，返回添加之后的数组长度；
    - **pop()**：移除末尾元素，返回被移除的元素；
    - **unshift(data)**：在数组的头部添加一个或多个元素，返回添加之后的数组长度；
    - **shift()**：移除数组的第一个元素，返回被移除的元素；
    - **splice()**：删除指定位置和长度的元素，返回被删除的元素；
    - **toString()**：将数组转换成字符串类型，返回字符串结果；
    - **join(param)**：将数组转成字符串，可以指定元素之间的连接符，如果参数省略，默认按逗号隔开，返回 字符串；
    - **reverse()**：反转数组，倒序重排，返回重排的数组，注意**该方法会修改原数组的结构**；
    - **sort()**：对数组中的元素进行排序，默认按照Unicode编码升序排列，返回重排后的数组，直接修改原有数组，参数是自定义排序的算法（可选）。
    
    ```javascript
    <script>
            // 1.声明数组
            var arr = ['a', 'b', 'c', 'd'];
            // 2.push()末尾添加
            arr.push('aa', 'bb');
            console.log(arr.toString());
            // 3.pop()删除最后一个元素
            arr.pop();
            // toString()转换为字符串
            console.log(arr.toString());
            // 4.unshift()头部增加
            console.log(arr.unshift('e'));
            var arr2 = [2, 4, 1, 7, 8];
            // 5.正序排序
            arr2.sort();
            console.log(arr2.toString());
            // 6.反向排序
            arr2.reverse();
            console.log(arr2.toString());
        </script>
    ```
    
    **案例：计算数组[2,6,1,7,4]中所有元素的和以及平均值**
    
    ```javascript
    var arr = [2,6,1,7,4];
    var sum = 0;
    var average = 0;
    for(var i = 0;i < arr.length;i++) {
        sum += arr[i]
    }
    console.log(sum);
    average = sum / arr.length;
    console.log(average);
    ```
    
    **案例：求数组[2,6,1,77,52,25,7]的最大值**
    
    ```javascript
    var arr = [2,6,1,77,52,25,7];
    var max = arr[0];
    for(var i = 0;i < arr.length;i++) {
        if(arr[i] > max) {
            max = arr[i];
        }
    }
    console.log(max);
    ```
    
    
    
    
    
    **案例：用数组操作学生信息**
    
    <img src="https://gitee.com/zou_tangrui/note-pic/raw/master/img/202309261845348.png" alt="image-20220703111247593" style="zoom:50%;" />
    
    ```javascript
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <style>
            ul {
                list-style-type: none;
                margin: 0;
                padding: 0;
                width: 260px;
                border: solid 1px red;
            }
            
            ul>li:nth-child(1) {
                font-weight: 700;
                background-color: #ddd;
                border: 0;
            }
            
            ul>li {
                border-bottom: dashed 1px blue;
                padding: 5px 10px;
            }
            
            ul>li>span {
                display: inline-block;
                width: 80px;
            }
            
            #add {
                padding: 5px 10px;
            }
            
            #add>div>span {
                display: inline-block;
                width: 60px;
                text-align: right;
            }
            
            #add>div {
                margin: 10px 0;
            }
        </style>
    </head>
    
    <body>
        <div id="stu">
            <ul id="ul">
                <!--
                <li>
                    <span>姓名</span>
                    <span>年龄</span>
                </li>
                 <li>
                    <span>张三</span>
                    <span>20</span>
                </li> 
                <li>
                    <span>李四</span>
                    <span>22</span>
                </li>
                -->
            </ul>
            <div id="add">
                <div>
                    <span>姓名:</span>
                    <input type="text" id="name">
                </div>
                <div>
                    <span>年龄:</span>
                    <input type="text" id="age">
                </div>
                <div>
                    <span></span>
                    <button id="btnAdd">增加</button>
                </div>
            </div>
        </div>
        <script>
            // 1.定义数组-json格式
            var stu = [{
                name: '张三',
                age: 20
            }, {
                name: '李四',
                age: 22
            }, {
                name: '王五',
                age: 30
            }]
    
            function loadStu() {
                // 定义一个保存全部字符的变量
                var HTML = "<li><span>姓名</span><span>年龄</span></li>";
                // 2.用遍历和下标读取数组元素
                for (var i = 0; i < stu.length; i++) {
                    // console.log(stu[i].name);
                    HTML += '<li>';
                    HTML += '<span >' + stu[i].name + '</span>';
                    HTML += '<span > ' + stu[i].age + '</span>';
                    HTML += '</li >';
                }
                // 将元素添加进页面
                document.getElementById("ul").innerHTML = HTML;
            }
            // 首次加载数据
            loadStu()
                // 3.获取增加按钮，点击增加数据
            document.getElementById("btnAdd").onclick = function() {
                // 找到文本框输入的值，并保存
                var _name = document.getElementById("name").value;
                var _age = document.getElementById("age").value;
                // 声明对象
                var _obj = {};
                // 设置对象的值
                _obj.name = _name;
                _obj.age = _age;
                // 将对象增加到数组中
                stu.push(_obj);
                // 添加成功，更新页面
                loadStu()
            }
        </script>
    </body>
    
    </html>
    ```

**作业：完成学生信息的删除修改。**



**二维数组：**数组中的每一个元素又是一个数组。

```javascript\
 var arr1 = [1,2,3];
 var arr2 = [[1,2],[3,4],[5,6,7]];

 arr2[0][0]
 arr2[0][1]
 arr2[1][0]
 arr2[1][1]
 arr2[2][0]
 arr2[2][1]
 //操作数组元素
 var r1 = arr2[0] //内层数组
 var num = r1[0]; //值 1
 //简写
 var num2 = arr2[1][0];
```



### 8.5.字符串对象

String对象用于处理已有的字符块。字符串的创建有如下两种方式：

```javascript
var str = "100";
var str2 = new String("hello");
```

字符串采用数组结构存储每位字符，自动为字符分配下标，从0开始。

- **属性和方法**

  - 属性：length表示获取字符串的长度

  - 方法：

    - **toUpperCase()** ：转大写字母，返回转换后的字符串,不影响原始字符串

    - **toLowerCase()**： 转小写字母，返回转换后的字符串,不影响原始字符串

    - **charAt(index)**：获取指定下标的字符，参数为指定的下标,可以省略,默认为0

    - **charCodeAt(index)** ： 获取指定下标的字符编码，参数为指定的下标,可以省略,默认为0

    - **indexOf(str,fromIndex)**：获取指定字符的下标,从前向后查询,找到即返回，str 表示要查找的字符串,必填，fromIndex 表示起始下标,默认为0。返回指定字符的下标,查找失败返回-1

    - **lastIndexOf(str,fromIndex)**：获取指定字符最后一次出现的下标,从后向前查找,找到即返回，str 必填,表示要查找的内容，fromIndex	选填,指定起始下标

    - **substring(startIndex,endIndex)**：根据指定的下标范围截取字符串,startIndex ~ endIndex-1，startIndex	表示起始下标， endIndex	表示结束下标(不包含),可以省略,省略表示截止末尾

    - **substr(startIndex,len)**：根据下标截取指定的字符串，len表示解决长度

    - **split(param)**：将字符串按照指定的字符进行分割,以数组形式返回分割结果， 指定分隔符,必须是字符串中存在的字符,如果字符串中不存在,分割失败,仍然返回数组

    - 模式匹配

    - 正则表达式对象 RegExp(Regualr Expression):

      - 1. 语法 ：
           var reg1 = /微软/ig;-忽略大小写
           var reg2 = new RegExp('匹配模式','修饰符');
           正则表达式对象可以接收一个变量。

        2. 属性 ：

           lastIndex : 可读可写，表示下一次匹配的起始索引
           注意 ：

           1. 默认情况下，正则表达式对象不能重复调用方法，
              如果重复调用，结果会出错：
              由于 lastIndex 保存再一次匹配的起始下标，
              重复调用时，不能保证每次都从下标0开始
              验证，可以手动调整 lastIndex 为 0。
           2. 只有正则对象设置全局匹配 g ，该属性才起作用。

        3. 方法 ：

           test(str) :验证字符串中是否存在满足正则匹配模式的内容，存在则返回true，

           不存在返回false参数为要验证的字符串。

      - 作用 : 借助正则表达式实现字符串中固定格式内容的查找和替换
        正则表达式 :
         var reg1 = /字符模式/修饰符;
         修饰符 : 
          i :  ignorecase 忽略大小写
          g : global 全局范围
        字符串方法 :

        + **match(regExp/subStr)**
          作用 : 查找字符串中满足正则格式或满足指定字符串的内容
          返回 : 数组,存放查找结果
        + **replace(regExp/subStr,newStr)**
          作用 : 根据正则表达式或字符串查找相关内容并进行替换
          返回 : 替换后的字符串,不影响原始字符串。

```javascript
<body>
    <div id="tip"></div>
    <input type="text" id="txt">
    <script>
        // 1.创建字符串
        var str1 = '100';
        var str2 = new String("HelloWorld");
        // 2.获取字符串长度
        console.log(str1.length);
        // 3.获取指定下标的字符charAt()
        console.log(str1.charAt(0));
        // 4.charCodeAt(index)  获取指定下标的字符编码
        console.log(str2.charCodeAt(1));
        // 5.获取指定字符的下标
        console.log(str2.indexOf('e'));
        // 6.截取字符串substring(startIndex,endIndex)
        console.log(str2.substring(1, 3));
        console.log(str2.substr(1, 3));
        // 7.split(param)分割
        console.log(str2.split('o'));
        // 获取div,input元素
        var div = document.getElementById("tip");
        var txt = document.getElementById("txt");
        // 绑定文本框的事件，oninput当文本框有内容时触发事件
        txt.oninput = function() {
            // toUpperCase()将字符串变为大写
            div.innerHTML = txt.value.toUpperCase();
        }
    </script>
</body>
```

```javascript
var str = 'efgabcde';
        // 1.定义正则对象/中表示要查找的内容/,下面表示查找a，g表示全局
        var reg = /a/i
        // 2.使用对象来定义正则表达式-a表示要查找的内容，ig表示全局忽略大小写的模式查找
        var reg2 = new RegExp("a", "ig");
        // 开始匹配
        console.log(reg.test(str)); // true
        console.log(reg2.test(str)); // true
        // 查看下一次匹配的索引位置
        console.log(reg2.lastIndex); // 4
        // 第二次查询是false，因为上次查询到4的位置，如果要查询得到，需要重置下次查询位置
        // reg2.lastIndex = 0; // 重置到起始索引
        console.log(reg2.test(str)); //false

        // match()和replace()方法
        var str3 = "aacdefga";
        var reg3 = /a/ig;
        var arr = str3.match(reg3); // 定义数组，查找保存
        console.log(arr.toString()); // a,a,a
        // 将查找后的元素a替换成i
        str3.replace(reg3, "i");
        // 输出替换后的str3值
        console.log(str3); // 返回替换前的字符串aacdefga
        // 如果要替换输出，需要保存到变量中
        var s = str3.replace(reg3, "z");
        console.log(s); // zzcdefgz
```



### 8.6.Math对象

Math对象的任务主要是执行常见的算数任务。Math对象提供多种算数值类型和函数，无需在使用这个对象之前对它进行定义。

- **属性：**
  - Math.PI：圆周率
  - Math.E：返回算术常量 e，即自然对数的底数（约等于2.718）
  - Math.LN2：返回 2 的自然对数（约等于0.693）
  - Math.LN10：返回 10 的自然对数（约等于2.302）
  - Math.LOG2E：返回以 2 为底的 e 的对数（约等于 1.4426950408889634）
  - Math.LOG10E：返回以 10 为底的 e 的对数（约等于0.434）
  - Math.SQRT1_2：返回 2 的平方根的倒数（约等于 0.707）
  - Math.SQRT2：返回 2 的平方根（约等于 1.414）
- **方法：**

| 序号 | 方法           | 描述                                                        |
| ---- | -------------- | ----------------------------------------------------------- |
| 1    | abs(x)         | 返回x的绝对值                                               |
| 2    | acos(x)        | 返回x的反余弦值                                             |
| 3    | asin(x)        | 返回x的反正弦值                                             |
| 4    | atan(x)        | 以介于 -PI/2 与 PI/2 弧度之间的数值来返回 x 的反正切值      |
| 5    | atan2(y,x)     | 返回从 x 轴到点 (x,y) 的角度（介于 -PI/2 与 PI/2 弧度之间） |
| 6    | ceil(x)        | 对数进行上舍入                                              |
| 7    | cos(x)         | 返回数的余弦                                                |
| 8    | exp(x)         | 返回 Ex 的指数                                              |
| 9    | floor(x)       | 对 x 进行下舍入                                             |
| 10   | log(x)         | 返回数的自然对数（底为e）                                   |
| 11   | max(x,y,z..n)  | 返回 x,y,z,...,n 中的最高值                                 |
| 12   | min(x,y,z...n) | 返回 x,y,z,...,n中的最低值                                  |
| 13   | pow(x,y)       | 返回 x 的 y 次幂                                            |
| 14   | random()       | 返回 0 ~ 1 之间的随机数                                     |
| 15   | round(x)       | 四舍五入                                                    |
| 16   | sin(x)         | 返回数的正弦                                                |
| 17   | sqrt(x)        | 返回数的平方根                                              |
| 18   | tan(x)         | 返回角的正切                                                |

```javascript
<script>
        var num = 123.456;
        // 1.向上取整
        console.log(Math.ceil(num)); // 124
        // 2.向下取整
        console.log(Math.floor(num)); // 123
        // 3.四舍五入
        console.log(Math.round(num)); // 123
        // 4.生成随机数
        console.log(Math.random());
        // 5.生成随机验证码，4位数，由数字和字母组成
        // 5.1.定义数组，保存所有可见的字符
        var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F', 'a', 'b', 'c', 'd', 'e', 'f'];
        // 5.2.随机取索引号
        //var index = Math.floor(Math.random() * arr.length);
        // 5.3.测试生成的下标对应值
        console.log(arr[index]);
        // r保存随机码，并遍历生成4个随机码保存到r中
        var r = '';
        for (var i = 1; i < 5; i++) {
            var index = Math.floor(Math.random() * arr.length);
            r += arr[index];
        }
        console.log(r);
</script>
```



### 8.7.日期Date对象

Date对象用于处理日期和时间。

- **日期对象的创建：**

```javascript
1. var date2 = new Date("2011/11/11");
2. var date3 = new Date("2011/11/11 11:11:11");

var d = new Date();
var d = new Date(milliseconds); // 参数为毫秒
var d = new Date(dateString);
var d = new Date(year, month, day, hours, minutes, seconds, milliseconds);
```

- **milliseconds** 参数是一个 Unix 时间戳（Unix Time Stamp），它是一个整数值，表示自 1970 年 1 月 1 日 00:00:00 UTC（the Unix epoch）以来的毫秒数。
- **dateString** 参数表示日期的字符串值。
- **year, month, day, hours, minutes, seconds, milliseconds** 分别表示年、月、日、时、分、秒、毫秒。



- **日期对象的方法：**

  - **getTime():**读取或设置当前时间的毫秒值

  - 获取时间分量：

    - **getFullYear()**：从 Date 对象以四位数字返回年份
    - **getMonth()**：从 Date 对象返回月份 (0 ~ 11)
    - **getDate()**：从 Date 对象返回一个月中的某一天 (1 ~ 31)
    - **getDay()**：从 Date 对象返回一周中的某一天 (0 ~ 6)
    - **getHours()**：返回 Date 对象的小时 (0 ~ 23)
    - **getMilliseconds()：**返回 Date 对象的毫秒(0 ~ 999)
    - **getMinutes()：**返回 Date 对象的分钟 (0 ~ 59)
    - **getSeconds()**：返回 Date 对象的秒数 (0 ~ 59)
    - **getTime()**：返回 1970 年 1 月 1 日至今的毫秒数

    其他方法参考：https://www.runoob.com/jsref/jsref-obj-date.html

```javascript
<script>
    // 1.定义日期对象获取时间
    var dt = new Date();
    // 2.获取年
    console.log(dt.getFullYear());
    // 3.获取月,0-11
    console.log(dt.getMonth());
    // 4.获取星期几
    console.log(dt.getDay());
    // 5.获取日期
    console.log(dt.getDate());
    // 6.获取时分秒
    console.log(dt.getHours());
    console.log(dt.getMinutes());
    console.log(dt.getSeconds());

    // 国庆日
    var dt2 = new Date("2022/10/01 00:00:00");
    var num = dt2 - dt; // 得到的num是毫秒值
    console.log(num / 1000 / 60 / 60 / 24); // 得到天数
</script>
```



### 8.8.练习

**练习1：模拟百度，将搜索到的关键字以红色显示。**

<img src="https://gitee.com/zou_tangrui/note-pic/raw/master/img/202309261845349.png" style="zoom:50%;" />

```javascript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        #search {
            width: 300px;
            margin: 0 auto;
            border: solid 1px #ccc;
            padding: 20px 15px;
        }
        
        #p1 > span {
            color: red;
        }
    </style>
</head>
<body>
    <div id="search">
        <input type="text" id="key">
        <button id="btnSearch" onclick="abc()">查找</button>
    </div>
    <p id="p1">
        今天是个好天气，明天可能会下雨，后天还会晴起来，每天都有好心情。 白日依山尽，黄河入海流。天气好不好，代码不会少。
    </p>
    <script>
        // 获取按钮、文本、输入内容的对象
        var btn = document.getElementById("btnSearch");
        var p1 = document.getElementById("p1");
        var key = document.getElementById("key");
        function abc(newStr) {
            var reg = new RegExp(key.value,"ig");
             // 获取内容
             var newStr = p1.innerHTML.replace(reg, "<span>" + key.value + "</span>");
             // 更新新的字符内容
            p1.innerHTML = newStr;
        }
    </script>
</body>
</html>
```



**练习2：根据新浪新闻做以下选项卡，一个标题对应一个内容，点击标题，对应内容发生变化。**

![作业1](https://gitee.com/zou_tangrui/note-pic/raw/master/img/202309261845350.png)

```javascript
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        #tabs {
            /* 根据图片设置宽高 */
            width: 416px;
            height: 218px;
            border: solid 1px red;
        }
        
        #tabs>.nav {
            overflow: hidden; // 溢出隐藏
        }
        
        #tabs>.nav>div {
            float: left;
            text-align: center;
            padding: 5px 0;
            /*4个*/
            width: 104px;
        }
        /* 焦点背景色为蓝色，其他导航栏颜色改变 */
        /* #tabs>.nav>div:nth-child(1),
        #tabs>.nav>div:nth-child(2),
        #tabs>.nav>div:nth-child(3) {
            background-color: #c5c5c5;
        } */
        /* 隐藏和显示，很多元素调用，因切换导航栏需要 */
        
        .hid {
            display: none;
        }
        
        .show {
            display: block;
        }
        /* 焦点颜色，当点击导航栏背景变为蓝色，字体为白色 */
        
        .focus {
            background-color: blue;
            color: white;
        }
        /* 背景样式 */
        
        .bg {
            border-color: #c5c5c5;
        }
    </style>
</head>

<body>
    <!-- 模拟新浪导航栏 -->
    <div id="tabs">
        <div class="nav">
            <div class="bg" id="div1">热点新闻</div>
            <div class="bg" id="div2">合作播报</div>
            <div class="bg" id="div3">行业资讯</div>
            <div id="div4" class="focus">运营攻略</div>
        </div>
        <div class="con">
            <div id="div1_1" class="hid">111</div>
            <div id="div1_2" class="hid">222</div>
            <div id="div1_3" class="hid">333</div>
            <div id="div1_4">444</div>
        </div>
    </div>
    <script>
        // 通过获取对象
        function $$(id) {
            return document.getElementById(id);
        }
        // 点击div1获取焦点样式，清除其他的颜色
        $$("div1").onclick = function() {
                $$("div1").className = "focus";
                $$("div2").className = "bg";
                $$("div3").className = "bg";
                $$("div4").className = "bg";
                // 显示下面的内容，隐藏其他内容
                $$("div1_1").className = "show";
                $$("div1_2").className = "hid";
                $$("div1_3").className = "hid";
                $$("div1_4").className = "hid";
            }
            // 点击div2获取焦点样式，清除其他的颜色
        $$("div2").onclick = function() {
                $$("div1").className = "bg";
                $$("div2").className = "focus";
                $$("div3").className = "bg";
                $$("div4").className = "bg";
                // 显示下面的内容，隐藏其他内容
                $$("div1_1").className = "hid";
                $$("div1_2").className = "show";
                $$("div1_3").className = "hid";
                $$("div1_4").className = "hid";
            }
            // 点击div3获取焦点样式，清除其他的颜色
        $$("div3").onclick = function() {
                $$("div1").className = "bg";
                $$("div2").className = "bg";
                $$("div3").className = "focus";
                $$("div4").className = "bg";
                // 显示下面的内容，隐藏其他内容
                $$("div1_1").className = "hid";
                $$("div1_2").className = "hid";
                $$("div1_3").className = "show";
                $$("div1_4").className = "hid";
            }
            // 点击div4获取焦点样式，清除其他的颜色
        $$("div4").onclick = function() {
            $$("div1").className = "bg";
            $$("div2").className = "bg";
            $$("div3").className = "bg";
            $$("div4").className = "focus";
            // 显示下面的内容，隐藏其他内容
            $$("div1_1").className = "hid";
            $$("div1_2").className = "hid";
            $$("div1_3").className = "hid";
            $$("div1_4").className = "show";
        }
    </script>
</body>

</html>
```

作业：利用函数提取公共类，优化以上代码。

**练习3：京东秒杀倒计时。**

- 时间是在不断变化的，因此需要定时器来自动变化(setInterval)
- 三个黑色盒子分别放置时分秒
- 三个盒子利用innerHtml放入时分秒

```javascript
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    * {
      margin: 0;
      padding: 0;
    }

    #box {
      width: 300px;
      height: 300px;
      margin: 200px 200px;
      background: red;
      position: relative;
    }

    .txt {
      width: 150px;
      height: 50px;
      text-align: center;
      line-height: 50px;
      color: #fff;
      font-size: 20px;
      font-weight: 900;
      position: absolute;
      left: 55px;
      top: 50px;
    }

    .day {
      left: 20px;
    }

    .d_h {
      left: 68px;
    }

    /* .hour {
      left: 20px;
    } */

    .hour {
      left: 80px;
    }

    .h_m {
      left: 128px;
    }

    .minute {
      left: 140px;
    }

    .m_s {
      right: 105px;
    }

    .second {
      left: 200px;
    }

    .day,
    .hour,
    .minute,
    .second {
      position: absolute;
      top: 200px;
      color: #fff;
      font-weight: 800;
      font-size: 20px;
      text-align: center;
      line-height: 40px;
      width: 40px;
      height: 40px;
      background: black;
    }

    .d_h,
    .h_m,
    .m_s {
      color: #fff;
      font-size: 20px;
      font-weight: 900;
      position: absolute;
      bottom: 70px;
    }

    .words {
      margin-top: 150px;
      font-size: 18px;
      color: yellowgreen;
      margin-left: 50px;
      text-align: center;
      position: absolute;
    }
  </style>
</head>

<body>
  <div id="box">
    <div class="txt">2021考研倒计时</div>
    <div class="words">第一场 <strong>08:30</strong> 倒计时</div>
    <div class="day"></div>
    <span class="d_h">:</span>
    <div class="hour"></div>
    <!-- 小时与分钟之间的冒号 -->
    <span class="h_m">:</span>
    <div class="minute"></div>
    <!-- 分钟与秒之间的冒号 -->
    <span class="m_s">:</span>
    <div class="second"></div>
  </div>
</body>
<script>
  //1、获取元素
  var day = document.querySelector(".day");
  var hour = document.querySelector(".hour");
  var minute = document.querySelector(".minute");
  var second = document.querySelector(".second");
  var inputTime = +new Date("2022-12-25 08:30:00");//倒计时的结束时间，自己设置时间
  countDown();//先调用一次这个函数 防止第一次刷新页面有空白
  //2、开启定时器
  setInterval(countDown, 1000);//1000毫秒，每一秒钟调用一次函数
  //3、倒计时-时分秒函数
  function countDown() {
    var nowTime = +new Date(); //返回的是当前时间的总的毫秒数
    var times = (inputTime - nowTime) / 1000; // times是剩余时间的总的毫秒数
    var d = parseInt(times / 60 / 60 / 24);
    d = d < 10 ? '0' + d : d;
    day.innerHTML = d;
    var h = parseInt(times / 60 / 60 % 24);
    h = h < 10 ? '0' + h : h;//判断数值小于10的情况 如 0-9改为 00-09
    hour.innerHTML = h;//更改div里面的内容 把h给获取元素hour的内容
    var m = parseInt(times / 60 % 60);
    m = m < 10 ? "0" + m : m;
    minute.innerHTML = m;//同上
    var s = parseInt(times % 60);
    s = s < 10 ? "0" + s : s;
    second.innerHTML = s;//同上
  }
</script>

</html>
```





## 9.JS错误和异常

​	JS处理异常的方式和Java类似，用try语句测试代码块的错误，catch语句处理错误，throw语句创建自定义错误，finally语句在try-catch语句之后，无论是否触发异常，该语句都会执行。

​	JS引擎执行JS代码时，会发生各种错误。可能是程序员造成的语法错误，可能是浏览器差异造成的功能差异，也有可能是服务器或用户输入时导致的异常，当然也有其他不可预知的错误。当错误发生时，JS引擎会停止，并发出一个错误，描述这种情况的技术术语是：JS将抛出一个错误。



### 9.1.JS的try---catch语句

​	try语句允许我们定义在执行时进行错误测试的代码块，catch语句允许我们定义当try语句发生错误时，所执行的代码块。它们都是成对出现的。其语法格式如下：

```javascript
try {
    ...    //异常的抛出
} catch(e) {
    ...    //异常的捕获与处理
} finally {
    ...    //结束处理
}
```

实例：故意在try语句中写错了alert()，代码就会执行catch语句代码：

```javascript
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <title></title>
    <script>
        var txt = "";

        function message() {
            try {
                adddlert("Welcome guest!");
            } catch (err) {
                txt = "本页有一个错误。\n\n";
                txt += "错误描述：" + err.message + "\n\n";
                txt += "点击确定继续。\n\n";
                alert(txt);
            }
        }
    </script>
</head>

<body>

    <input type="button" value="查看消息" onclick="message()" />

</body>

</html>
```

### 9.2.finally语句

finally语句是不论之前的try-catch语句是否产生异常，都会执行该代码块。

案例：要求输入5-10之间的数字，小于5会执行太小，大于10会执行太大。

```javascript
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <title></title>
</head>

<body>
    <p>不管输入是否正确，输入框都会再输入后清空。</p>
    <p>请输入 5 ~ 10 之间的数字：</p>

    <input id="demo" type="text">
    <button type="button" onclick="myFunction()">点我</button>

    <p id="p01"></p>

    <script>
        function myFunction() {
            var message, x;
            message = document.getElementById("p01");
            message.innerHTML = "";
            x = document.getElementById("demo").value;
            try {
                if (x == "") throw "值是空的";
                if (isNaN(x)) throw "值不是一个数字";
                x = Number(x);
                if (x > 10) throw "太大";
                if (x < 5) throw "太小";
            } catch (err) {
                message.innerHTML = "错误: " + err + ".";
            } finally {
                document.getElementById("demo").value = "";
            }
        }
    </script>

</body>

</html>
```



### 9.3.throw语句

throw语句允许我们创建自定义异常，术语叫创建或抛出异常。如果将throw语句和try-catch语句一起使用就可以控制程序流，并生成自定义异常的信息。其语法为：

```javascript
throw exception
```

异常可以是 JavaScript 字符串、数字、逻辑值或对象。

实例：检测输入变量的值，如果值是错误的，会抛出一个异常，catch会捕捉到这个异常，并显示一段自定义错误信息。

```javascript
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <title></title>
</head>

<body>
    <p>不管输入是否正确，输入框都会再输入后清空。</p>
    <p>请输入 5 ~ 10 之间的数字：</p>

    <input id="demo" type="text">
    <button type="button" onclick="myFunction()">点我</button>

    <p id="p01"></p>

    <script>
        function myFunction() {
            var message, x;
            message = document.getElementById("p01");
            message.innerHTML = "";
            x = document.getElementById("demo").value;
            try {
                if (x == "") throw "值是空的";
                if (isNaN(x)) throw "值不是一个数字";
                x = Number(x);
                if (x > 10) throw "太大";
                if (x < 5) throw "太小";
            } catch (err) {
                message.innerHTML = "错误: " + err + ".";
            } finally {
                document.getElementById("demo").value = "";
            }
        }
    </script>

</body>

</html>
```



## 10.JS表单

在之前的H5中，表单的验证是通过required属性来完成的，它可以阻止表单提交，以下实例如果fname为空，就会被required阻止：

```javascript
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
</head>

<body>

    <form action="demo_form.php" method="post">
        <input type="text" name="fname" required="required">
        <input type="submit" value="提交">
    </form>

    <p>点击提交按钮，如果输入框是空的，浏览器会提示错误信息。</p>

</body>

</html>
```

HTML表单验证也可以通过JS来完成，以下实例代码用于判断表单字段(fname)值是否存在， 如果不存在，就弹出信息，阻止表单提交：

```javascript
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <script>
        function validateForm() {
            var x = document.forms["myForm"]["fname"].value;
            if (x == null || x == "") {
                alert("需要输入名字。");
                return false;
            }
        }
    </script>
</head>

<body>

    <form name="myForm" action="demo_form.php" onsubmit="return validateForm()" method="post">
        名字: <input type="text" name="fname">
        <input type="submit" value="提交">
    </form>

</body>

</html>
```



在一般情况下，JS用来在数据被发送到服务器前对HTML表单中的这些输入数据进行验证，表单数据也经常需要JS来验证其正确性：

- 验证表单数据是否为空
- 验证是否输入一个正确的email地址
- 验证日期是否输入争取
- 验证表单输入内容是否为数字型

**必填项目：**假如必填或必选项为空，那么警告框会弹出，并且函数的返回值为 false，否则函数的返回值则为 true（意味着数据没有问题）：

```javascript
<head>
    <script>
        function validateForm() {
            var x = document.forms["myForm"]["fname"].value;
            if (x == null || x == "") {
                alert("姓必须填写");
                return false;
            }
        }
    </script>
</head>

<body>

    <form name="myForm" action="" onsubmit="return validateForm()" method="post">
        姓: <input type="text" name="fname">
        <input type="submit" value="提交">
    </form>

</body>
```

**email验证：**输入的数据必须包含 @ 符号和点号(.)。同时，@ 不可以是邮件地址的首字符，并且 @ 之后需有至少一个点号：

```javascript
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <title></title>
</head>

<head>
    <script>
        function validateForm() {
            var x = document.forms["myForm"]["email"].value;
            var atpos = x.indexOf("@");
            var dotpos = x.lastIndexOf(".");
            if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= x.length) {
                alert("不是一个有效的 e-mail 地址");
                return false;
            }
        }
    </script>
</head>

<body>

    <form name="myForm" action="" onsubmit="return validateForm();" method="post">
        Email: <input type="text" name="email">
        <input type="submit" value="提交">
    </form>

</body>

</html>
```



## 11.JS的JSON数据

JSON(**J**ava**S**cript **O**bject **N**otation)是用于存数和传输的数据格式，通常用于服务器向网页传递数据。它是一种轻量级的数据交换格式，是一门独立的语言，而且易于理解。

**JSON 使用 JavaScript 语法，但是 JSON 格式仅仅是一个文本。文本可以被任何编程语言读取及作为数据格式传递。**

JSON 语法定义了 sites 对象: 3 条网站信息（对象）的数组：

```json
{"sites":[
    {"name":"Runoob", "url":"www.runoob.com"}, 
    {"name":"Google", "url":"www.google.com"},
    {"name":"Taobao", "url":"www.taobao.com"}
]}
```

JSON语法格式：

- 数据为k-v结构；
- 数据由逗号分隔；
- 大括号保存对象；
- 方括号保存数组。

```javascript
// JSON数据
"name":"gitee"	
// JSON对象
{"name":"baidu", "url":"www.baidu.com"}   
// JSON数组
"sites":[
    {"name":"Baidu", "url":"www.baidu.com"}, 
    {"name":"Google", "url":"www.google.com"},
    {"name":"Taobao", "url":"www.taobao.com"}
]
```

- **相关函数：**

| 函数             | 描述                                         |
| ---------------- | -------------------------------------------- |
| JSON.parse()     | 用于将一个 JSON 字符串转换为 JavaScript 对象 |
| JSON.stringify() | 用于将 JavaScript 值转换为 JSON 字符串       |

```javascrip
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <title></title>
</head>

<body>

    <h2>为 JSON 字符串创建对象</h2>
    <p id="demo"></p>
    <script>
        var text = '{ "sites" : [' +
            '{ "name":"Baidu" , "url":"www.baidu.com" },' +
            '{ "name":"Google" , "url":"www.google.com" },' +
            '{ "name":"Taobao" , "url":"www.taobao.com" } ]}';

        obj = JSON.parse(text);
        document.getElementById("demo").innerHTML = obj.sites[1].name + " " + obj.sites[1].url;
    </script>

</body>

</html>
```

**JSON和JS对象的关系：**

JSON 是 JS 对象的字符串表示法。它使用文本表示一个 JS 对象的信息，（JSON）本质是一个字符串。

```javascript
var obj = {a: 'Hello', b: 'World'}; //这是一个js对象，注意js对象的键名也是可以使用引号包裹的,这里的键名就不用引号包含
var json = '{"a": "Hello", "b": "World"}'; //这是一个 JSON 字符串，本质是一个字符串
```

JSON（格式字符串） 和 JS 对象（也可以叫JSON对象 或 JSON 格式的对象）互转（JSON.parse 和 JSON.stringify）。

要实现从JSON字符串转换为JS对象，使用 JSON.parse() 方法：

```javascript
var obj = JSON.parse('{"a": "Hello", "b": "World"}'); //结果是 {a: 'Hello', b: 'World'}  一个对象
```

要实现从JS对象转换为JSON字符串，使用 JSON.stringify() 方法：

```javascript
var json = JSON.stringify({a: 'Hello', b: 'World'}); //结果是 '{"a": "Hello", "b": "World"}'  一个JSON格式的字符串
```



## 12.this关键字

面向对象语言中this表示对当前对象的一个引用，但在JS中this不是固定不变的，它会随着执行环境的改变而改变：

- 在方法中，this表示该方法所属的对象
- 如果单独使用，this表示全局对象
- 在函数中，this表示全局对象
- 在函数中，在严格模式下，this 是未定义的(undefined)
- 在事件中，this 表示接收事件的元素
- 类似 call() 和 apply() 方法可以将 this 引用到任何对象

```javascript
<body>

    <h2>JavaScript <b>this</b> 关键字</h2>

    <p>实例中，<b>this</b> 指向了 <b>person</b> 对象。</p>
    <p>因为 person 对象是 fullName 方法的所有者。</p>

    <p id="demo"></p>

    <script>
        // 创建一个对象
        var person = {
            firstName: "John",
            lastName: "Doe",
            id: 5566,
            fullName: function() {
                return this.firstName + " " + this.lastName;
            }
        };

        // 显示对象的数据
        document.getElementById("demo").innerHTML = person.fullName();
    </script>

</body>
```



### 12.1.在方法中的this

在对象方法中，this指向它所在方法的对象，上面实例中，this表示person对象，fullName方法所属的对象就是person：



### 12.2.单独使用的this

单独使用this，则它指向全局(Global)对象，在浏览器中，window就是该全局对象为[**object Window**]:

```javascript
<body>

    <h2>JavaScript <b>this</b> 关键字</h2>

    <p>实例中，<b>this</b> 指向了 window 对象:</p>

    <p id="demo"></p>

    <script>
        var x = this;
        document.getElementById("demo").innerHTML = x;
    </script>

</body>
```

严格模式下，如果单独使用，this 也是指向全局(Global)对象:

```javascript
<body>

    <h2>JavaScript <b>this</b> 关键字</h2>

    <p>实例中，<b>this</b> 指向了 window 对象:</p>

    <p id="demo"></p>

    <script>
        "use strict";
        var x = this;
        document.getElementById("demo").innerHTML = x;
    </script>

</body>
```



### 12.3.在函数中使用this

在函数中，函数的所属者默认绑定到 this 上。在浏览器中，window 就是该全局对象为 [**object Window**]:

```javascript
<body>

    <h2>JavaScript <b>this</b> 关键字</h2>

    <p>实例中，<b>this</b> 表示 myFunction 函数的所有者：</p>

    <p id="demo"></p>

    <script>
        document.getElementById("demo").innerHTML = myFunction();

        function myFunction() {
            return this;
        }
    </script>

</body>
```



严格模式下函数是没有绑定到 this 上，这时候 this 是 **undefined**。

```javascript
<body>

    <h2>JavaScript <b>this</b> 关键字</h2>

    <p>函数中，默认情况下，<b>this</b> 指向全局对象。</p>
    <p>严格模式下，<b>this</b> 为 <b>undefined</b>，因为严格模式下不允许默认绑定:</p>

    <p id="demo"></p>

    <script>
        "use strict";
        document.getElementById("demo").innerHTML = myFunction();

        function myFunction() {
            return this;
        }
    </script>

</body>
```



### 12.3.事件中的this

在 HTML 事件句柄中，this 指向了接收事件的 HTML 元素：

```javascript
<body>

    <h2>JavaScript <b>this</b> 关键字</h2>

    <button onclick="this.style.display='none'">点我后我就消失了</button>

</body>
```



## 13.JS异步编程

### 13.1.异步的概念

异步（Asynchronous, async）是与同步（Synchronous, sync）相对的概念。

在我们学习的传统单线程编程中，程序的运行是同步的（同步不意味着所有步骤同时运行，而是指步骤在一个控制流序列中按顺序执行）。而异步的概念则是不保证同步的概念，也就是说，一个异步过程的执行将不再与原有的序列有顺序关系。

简单来理解就是：同步按你的代码顺序执行，异步不按照代码顺序执行，异步的执行效率更高。

以上是关于异步的概念的解释，接下来我们通俗地解释一下异步：异步就是从主线程发射一个子线程来完成任务。

<img src="https://gitee.com/zou_tangrui/note-pic/raw/master/img/202309261845351.png" alt="image-20220709225753878" style="zoom:67%;" />



- **异步编程**

在前端编程中（甚至后端有时也是这样），我们在处理一些简短、快速的操作时，例如计算 1 + 1 的结果，往往在主线程中就可以完成。主线程作为一个线程，不能够同时接受多方面的请求。所以，当一个事件没有结束时，界面将无法处理其他请求。

现在有一个按钮，如果我们设置它的 onclick 事件为一个死循环，那么当这个按钮按下，整个网页将失去响应。

为了避免这种情况的发生，我们常常用子线程来完成一些可能消耗时间足够长以至于被用户察觉的事情，比如读取一个大文件或者发出一个网络请求。因为子线程独立于主线程，所以即使出现阻塞也不会影响主线程的运行。但是子线程有一个局限：一旦发射了以后就会与主线程失去同步，我们无法确定它的结束，如果结束之后需要处理一些事情，比如处理来自服务器的信息，我们是无法将它合并到主线程中去的。

为了解决这个问题，JavaScript 中的异步操作函数往往通过回调函数来实现异步任务的结果处理。



### 13.2.回调函数

回调函数就是一个函数，它是在我们启动一个异步任务的时候就告诉它：等你完成了这个任务之后要干什么。这样一来主线程几乎不用关心异步任务的状态了，他自己会善始善终。

```javascript
<body>

    <p>回调函数等待 3 秒后执行。</p>
    <p id="demo"></p>
    <script>
        function print() {
            document.getElementById("demo").innerHTML = "邹老师厉害!";
        }
        setTimeout(print, 3000);
    </script>

</body>

```

这段程序中的 setTimeout 就是一个消耗时间较长（3 秒）的过程，它的第一个参数是个回调函数，第二个参数是毫秒数，这个函数执行之后会产生一个子线程，子线程会等待 3 秒，然后执行回调函数 "print"，在命令行输出 "邹老师厉害!"。

当然，JavaScript 语法十分友好，我们不必单独定义一个函数 print ，我们常常将上面的程序写成：

```javascript
<body>

    <p>回调函数等待 3 秒后执行。</p>
    <p id="demo"></p>
    <script>
        setTimeout(function() {
            document.getElementById("demo").innerHTML = "邹老师厉害!";
        }, 3000);
    </script>

</body>
```

**注意：**既然 setTimeout 会在子线程中等待 3 秒，在 setTimeout 函数执行之后主线程并没有停止，所以：

```javascript
<p>回调函数等待 3 秒后执行。</p>
<p id="demo1"></p>
<p id="demo2"></p>
<script>
setTimeout(function () {
    document.getElementById("demo1").innerHTML="邹老师厉害!!1";
}, 3000);
document.getElementById("demo2").innerHTML="邹老师厉害!!2";
</script>

</body>
```



### 13.3.异步ajax

除了 setTimeout 函数以外，异步回调广泛应用于 AJAX 编程。

XMLHttpRequest 常常用于请求来自远程服务器上的 XML 或 JSON 数据。一个标准的 XMLHttpRequest 对象往往包含多个回调：

```javascript
<body>

    <p><strong>以下内容是通过异步请求获取的：</strong></p>
    <p id="demo"></p>
    <script>
        var xhr = new XMLHttpRequest();

        xhr.onload = function() {
            // 输出接收到的文字数据
            document.getElementById("demo").innerHTML = xhr.responseText;
        }

        xhr.onerror = function() {
            document.getElementById("demo").innerHTML = "请求出错";
        }

        // 发送异步 GET 请求
        xhr.open("GET", "/try/ajax/ajax_info.txt", true);
        xhr.send();
    </script>

</body>

```

XMLHttpRequest 的 onload 和 onerror 属性都是函数，分别在它请求成功和请求失败时被调用。如果你使用完整的 jQuery 库，也可以更加优雅的使用异步 AJAX。异步AJAX我们会在后面的章节进行讲解



## 14.BOM

### 14.1.BOM介绍

BOM全称为“Browser Object Model”，即浏览器对象模型，它提供一些列操作浏览器的属性和方法。核心对象为window对象，不需要手动创建，跟随网页运行自动产生，直接使用，使用时可以省略书写。



### 14.2.window对象常用方法

- **网页弹框**

```javascript
alert()		//警告框
prompt()	//带输入框的弹框
confirm()	//确认框
```

- **网页打开与关闭**

```javascript
window.open("URL")  		// 新建窗口访问指定的URL-不提倡使用，因可能被拦截，更多使用超链接
window.close()				// 关闭当前窗口-关闭的是通过window.open()打开的窗口
```

- **定时器方法**

<img src="https://gitee.com/zou_tangrui/note-pic/raw/master/img/202309261845352.png" alt="image-20220710205603104" style="zoom:67%;" />

1. 周期性定时器：每隔一段时间就执行一次代码。

开启定时器：

```javascript
//开启定时器:
var timerID = setInterval(function,interval);
/*
参数 :
 function : 需要执行的代码,可以传入函数名;或匿名函数
 interval : 时间间隔,默认以毫秒为单位 1s = 1000ms
返回值 : 返回定时器的ID,用于关闭定时器
*/
```

关闭定时器：

```javascript
//关闭指定id对应的定时器
clearInterval(timerID);
```

2.一次性定时器：等待多久后执行一次代码。

<img src="https://gitee.com/zou_tangrui/note-pic/raw/master/img/202309261845353.png" alt="image-20220710222118074" style="zoom:50%;" />

```javascript
//开启超时调用:
var timerId = setTimeout(function,timeout);
//关闭超时调用:
clearTimeout(timerId);
```

使用场景：

```javascript
 周期性
     反复执行某动作
     同步系统时间
     倒计时
一次性
     按间隔时间一次性执行
     延时代码的执行
```

**案例1：每隔一秒输出一个OK，点击停止按钮停止：**

```javascript
<body>
    <!-- 需求：每隔1秒输出一个ok -->
    <button id="stop">停止</button>
    <script>
        // 启动定时器进程
        var taskId = setInterval(function() {
            console.log("ok");
        }, 1000);
        // 点击按钮，停止输出
        document.getElementById("stop").onclick = function() {
            // 停止定时器进程
            clearInterval(taskId);
        }
    </script>
</body>
```



**案例2：点击增加即增加，不点击则自动隔1秒加1：**

```javascript
<button id="btn">点我就增加</button>
<div id="tip"></div>
<script>
    //定义一个初始的变量
    var i=0;
    //绑定事件
    document.getElementById("btn").onclick=function(){
    //i增加1
    i++;
    //找到元素并赋值
    document.getElementById("tip").innerText=i;
}
//click()等价于用户的单击事件的行为
var task=window.setInterval(function(){
    document.getElementById("btn").click();
    //结束周期性的定时器
    if(i==11)
        window.clearInterval(task);
},1000)
</script>
```



**案例3：页面展示实时时间。**

![image-20220710214013914](https://gitee.com/zou_tangrui/note-pic/raw/master/img/202309261845354.png)

```javascript
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <title></title>
    <style>
        #box {
            width: 130px;
            border: solid 1px red;
            margin: 0 auto;
            padding: 10px 5px;
            overflow: hidden;
        }
        
        #box>span {
            width: 20px;
            font-size: 21px;
            text-align: center;
            float: left;
        }
    </style>
</head>

<body>
    <div id="box">
        <!-- 分别代表时分秒 -->
        <span id="hou">00</span>
        <span style="width: 30px;">:</span>
        <span id="min">00</span>
        <span style="width: 30px;">:</span>
        <span id="sec">00</span>
    </div>
    <script>
        // 获取系统时间
        //var dt = new Date();
        // 小时
        //document.getElementById("hou").innerText = dt.getHours();
        // 分钟
        //document.getElementById("min").innerText = dt.getMinutes();
        // 秒
        //document.getElementById("sec").innerText = dt.getSeconds();
        // 定义一个定时器，每个一秒获取一次时间对象值并赋值给元素
        var taskId = setInterval(function() {
            // 获取系统时间
            var dt = new Date();
            // 小时
            document.getElementById("hou").innerText = change(dt.getHours());
            // 分钟
            document.getElementById("min").innerText = change(dt.getMinutes());
            // 秒
            document.getElementById("sec").innerText = change(dt.getSeconds());
        }, 1000);
        // 定义一个一个数字变两个数字的函数，增加时间的美观性
        function change(n) {
            if (n < 10) {
                return "0" + n;
            } else {
                return n;
            }
        }
    </script>
</body>

</html>
```



**案例4：倒计时**

```javascript
<body>
    <div id="box"></div>
    <script>
        //    指定计时器到期时间，首先先封装函数antitime()
        function antitime() {
            var now = new Date(); //获取当前时间
            var to = new Date(2032, 7, 10, 0, 0, 0); //指定到期时间
            // 然后拿到当前时间和指定时间的时间差，注意 是毫秒数
            var deltaTime = (to - now) / 1000; //到期时间和当前时间相差的毫秒数/1000换算出总的秒数，方便后边用
            // console.log(deltaTime)
            // 判断 如果时间超了，停止倒计时
            if (deltaTime <= 0) {
                // 停止计时器
                window.clearInterval(antitime);
            }
            // 已知毫秒数，计算天数时分秒
            // 这里用到了取整数的方法，用到哪在哪除，并给其定义赋值，方便后面取用，
            // 用parseInt()取整或者Math.floor()取整,在这里用的是Math.floor()。
            // 计算天数并给其赋值
            var d = Math.floor(deltaTime / 3600 / 24),
                // 计算小时并给其赋值
                h = Math.floor(deltaTime / 3600 % 24),
                // 计算分钟并给其赋值
                m = Math.floor(deltaTime / 60 % 60),
                // 计算秒数并给其赋值
                s = Math.floor(deltaTime % 60);

            //为了增加用户体验，把时间的数字转成字符串，如果分秒毫秒不足10，则前面补0。
            // 这里应该有更好的方法进行封装，为了更好理解，这样写出来。
            if (d < 10) {
                d = '0' + d;
            } else if (h < 10) {
                h = '0' + h;
            } else if (m < 10) {
                m = '0' + m;
            } else if (s < 10) {
                s = '0' + s;
            }
            // 定义一个空的字符串用来接收最后的值
            var timer01 = '';
            timer01 = '距离2032年1月1日还有' + d + '天' + h + '小时' + m + '分' + s + '秒';
            // document.getElementById() 获取DOM元素节点，方便向节点填入数据并显示
            document.getElementById('box');
            // 让id拥有box属性的元素节点在页面显示timer01中的内容
            box.innerHTML = timer01;
        }
        // 开启定时器，并让其1000毫秒更新一次
        setInterval(antitime, 1000);
    </script>

</body>
```



**案例5：演示显示内容：**

```javascript
<script>
    var taskId01 = setTimeout(function() {
        console.log("今天是个好日子");
    }, 2000);
var taskId02 = setTimeout(function() {
    console.log("明天会下雨");
}, 4000);
</script>
```



### 14.3.window对象常用属性

window大部分属性是对象类型

- **history**：保存访问过的URL，length属性表示当前访问过的数量。

方法：

```javascript
back() 对应浏览器窗口的后退按钮，访问前一个记录
forward() 对应前进按钮，访问记录中的下一个URL
go(n) 参数为number值，翻阅几条历史记录，正值表示前进，负值表示后退
```

- **location**:保存当前窗口地址栏信息（URL），href属性设置或读取当前窗口的地址栏信息。

方法：

```javascript
reload(param) 重载页面(刷新)
参数为布尔值，默认为 false，表示从缓存中加载，设置为true,强制从服务器根目录加载
```

- **document**：提供操作HTML文档的方法，参见DOM。



**案例1：history对象上下切换页面。**

1.跳转到history的超链接页面temp.html：

```html
<body>
    <a href="87-history.html">进入下一页</a>

</body>
```

2.使用history对象跳转的页面：

```javascript
<body>
    <a href="https://www.baidu.com">百度</a>
    <script>
        // 获取history对象
        var his = window.history;
        console.log(his);
    </script>
    <!-- 通过history的back()方法返回上一页 -->
    <button onclick="window.history.back()">返回上一页</button>
    <!-- 通过history对象forword()前进 -->
    <button onclick="window.history.forward()">前进到下一页</button>
</body>
```



**案例2：location**

```javascript
<script>
    // 显示当前地址栏的url的信息
    // 获取localtion对象
    var loc = window.location;
console.log(loc.href); // file:///D:/%E7%AC%94%E8%AE%B0/HTML/js/code/89-localtion.html
// 重新刷新页面,默认false表示需要缓存对象刷新,true表示不需要缓存来刷新
loc.reload(true)
</script>
```



## 15.DOM节点操作

DOM全称为“Document Object Model”，文档对象模型，提供操作HTML文档的方法。（注：每个HTML文件在浏览器中都视为一篇文档，操作文档实际就是操作页面元素。）



### 15.1.节点对象

JS会对HTML文档中的元素、属性、文本内容甚至注释进行封装，称为节点对象，提供相关的属性和方法。常用的节点对象有：

- 元素节点（操作标签）
- 属性节点（操作标签属性）
- 文本节点（操作标签的文本内容）



### 15.2.获取元素节点

1.根据标签名获取元素节点列表

```javascript
var elems = document.getElementsByTagName("");
/*
参数 : 标签名
返回值 : 节点列表,需要从节点列表中获取具体的元素节点对象,添加相应下标。
*/
```



2.根据class属性值获取元素节点列表

```javascript
var elems = document.getElementsByClassName("");
/*
参数 : 类名(class属性值)
返回值 : 节点列表
*/
```



3.根据id属性值获取元素节点列表

```javascript
var elem = document.getElementById("");
/*
参数 : id属性值
返回值 : 元素节点
*/
```



4.根据 name 属性值取元素列表

```javascript
var elems = document.getElementsByName("");
/*
参数 : name属性值
返回 : 节点列表
*/
```



### 15.3.操作元素内容

元素节点对象提供了以下属性来操作元素内容：

```javascript
innerHTML:读取或设置元素文本内容，可识别标签语法
innerText:读取元素文本内容，不能识别标签语法
value:读取或设置表单控件的值
```



```javascript
<body>
    <div id="div01">1</div>
    <div>2</div>
    <div class="div03">3</div>
    <p class="p1">4</p>
    <p class="p1">5</p>
    <p class="p1">6</p>
    <input type="text">
    <span>1</span>
    <span>2</span>
    <script>
        // 获取第2个div元素
        var divs = document.getElementsByTagName("div");
        console.log(divs[1]);
        // 通过id获取
        var div01 = document.getElementById("div01");
        console.log(div01);
        // 通过class获取
        var div03 = document.getElementsByClassName("div03");
        console.log(div03);

        // 获取p集合
        var ps = document.getElementsByClassName("p1");
        // 控制台输出集合
        console.log(ps);
        // 在控制台输出第三个节点
        console.log(ps[2]);

        // 在文本框输入内容，内容在第一个span中显示
        var inputs = document.getElementsByTagName("input");
        var spans = document.getElementsByTagName("span");
        inputs[0].oninput = function() {
            spans[0].innerText = inputs[0].value;
        }
    </script>
</body>
```





### 15.4.操作元素属性

1.获取 DOM 树中的属性值:

<img src="https://gitee.com/zou_tangrui/note-pic/raw/master/img/202309261845355.png" alt="image-20220710232954285" style="zoom:67%;" />

2.设置 DOM 树中的属性值：

<img src="https://gitee.com/zou_tangrui/note-pic/raw/master/img/202309261845356.png" alt="image-20220710233016951" style="zoom:67%;" />

```javascript
elem.getAttribute("attrname");//根据指定的属性名返回对应属性值
elem.setAttribute("attrname","value");//为元素添加属性,参数为属性名和属性值
elem.removeAttribute("attrname");//移除指定属性
```



```javascript
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <style>
        span:hover {
            color: white;
            background-color: red;
        }
    </style>
</head>

<body>
    <div>
        <span class="focus">首页</span>
        <span>新闻</span>
        <span>图片</span>
        <span title="这是热点">热点</span>
    </div>
    <script>
        // 要求鼠标指向span标签，背景颜色变红-伪类选择器可实现
        // 给第一个span标签添加提示文字
        var spans = document.getElementsByTagName("span");
        spans[0].setAttribute("title", "这是首页");
        spans[1].setAttribute("title", spans[0].getAttribute("title"));
        // 删除热点title
        spans[3].removeAttribute("title");
    </script>
</body>

</html>
```





3.标签属性都是元素节点对象的属性,可以使用点语法访问，例如：

```javascript
h1.id = "d1"; 		 //set 方法
console.log(h1.id);  //get 方法
h1.id = null;		//remove 方法
```

注意：

- 属性值以字符串表示
- class属性需要更名为className，避免与关键字冲突，如：h1.className = "c1 c2 c3"。

```javascript
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        /* 定义类别名red */
        
        .red {
            color: red;
        }
        /* 定义类别名为fontSize */
        
        .fontSize {
            font-size: 100px;
        }
    </style>
</head>

<body>
    <div id="tip">你好</div>
    <script>
        document.getElementById("tip").className = "red fontSize";
    </script>
</body>
```



### 15.5.操作元素样式

1. 为元素添加id,class属性，对应选择器样式；
2. 操作元素的行内样式，访问元素节点的style属性，获取样式对象，样式对象中包含css属性，使用点语法操作：

```javascript
p.style.color = "white";
p.style.width = "300px";
p.style.fontSize = "20px";
```

注意：

- 属性值以字符串形式给出，单位不能省略；
- 如果css属性名包含连接符，使用JS访问时，一律去掉连接符，改为驼峰命名：font-size->fontSize。

案例：

<img src="https://gitee.com/zou_tangrui/note-pic/raw/master/img/202309261845357.png" alt="image-20220722111311408" style="zoom:67%;" />

```javascript
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <style>
        #fs {
            width: 260px;
            border: solid 1px red;
            padding: 10px;
        }
        
        .focus {
            color: black;
            /* 取消线 */
            text-decoration: none;
        }
    </style>
</head>

<body>
    <!-- 1.添加需求节点元素
         2.添加元素样式
         3.调整优化 -->
    <div id="fs">
        <div class="title">
            <!-- javascript:void()让超链接不跳转，保持在当前页 -->
            <a href="javascript:;">大</a>
            <a href="javascript:;">中</a>
            <a href="javascript:;" class="focus">小</a>
        </div>
        <p id="p1">操作元素的行内样式，访问元素节点的style属性，获取样式对象，样式对象中包含css属性，使用点语法操作</p>
    </div>
    <script>
        // 获取点击的对象，并绑定对象的单击事件，在事件中设置内容大小
        var as = document.getElementsByTagName("a");
        var p1 = document.getElementById("p1");

        // 使用函数移除全部链接样式-点击移除样式，称为focus样式
        function clearFocus() {
            // 遍历链接对象
            for (var i = 0; i < as.length; i++) {
                // 移除每一个链接对象的样式
                as[i].removeAttribute("class");
            }
        }

        as[0].onclick = function() {
            p1.style.fontSize = "20px";
            // 调用函数移除全部样式
            clearFocus();
            // 设置选中效果
            this.className = "focus";
        }
        as[1].onclick = function() {
            p1.style.fontSize = "18px";
            // 调用函数移除全部样式
            clearFocus();
            // 设置选中效果
            this.className = "focus";
        }
        as[2].onclick = function() {
            p1.style.fontSize = "16px";
            // 调用函数移除全部样式
            clearFocus();
            // 设置选中效果
            this.className = "focus";
        }
    </script>
</body>

</html>
```













## MDN: https://developer.mozilla.org/zh-CN/

















