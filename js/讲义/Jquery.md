# jQuery

jQuery 是一个 JavaScript 库，它极大地简化了 JavaScript 编程，对原生JS中的DOM操作、事件处理、包括数据处理和Ajax技术等进行封装,提供更完善，更便捷的方法。jQuery的核心思想就是“写得更少，做得更多”。

**优点：**

- 轻量：核心文件只有几十kb，不会影响页面加载速度；
- 兼容多个浏览器；
- 链式编程、隐式迭代；
- 简化DOM操作；
- 支持插件开发，如tree，日期控件、轮播图等；
- 免费、开源。



## 1.初体验

要求：点击文字，逐行消失。

```javascript
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8"> 
<title></title> 
<script src="https://cdn.staticfile.org/jquery/1.10.2/jquery.min.js">
</script>
<script>
    $(document).ready(function(){
        $("p").click(function(){
            $(this).hide();
        });
    });
</script>
</head>
<body>
    <p>如果你点我，我就会消失。</p>
    <p>继续点我!</p>
    <p>接着点我!</p>
</body>
</html>
```



## 2.jQuery安装

我们可以通过多种方法在网页中添加jQuery，如：

- 从jquery.com下载jQuery库；
- 从CDN中载入jQuery，比如Google等加载。

<img src="Jquery.assets/image-20220722120329308.png" alt="image-20220722120329308" style="zoom: 50%;" />

当前版本为3.6.0，如需下载其他版本可在https://code.jquery.com进行下载。下载时会有两个版本的标准：一个是生产环境的，另一个是开发环境的，一般我们都是采用生产环境下的，因为其比较轻量，点击进入生产环境下的版本，全选中后粘贴到jquery.min.js文件中，在JS文件通过script标签引入这个文件即引入了jQuery函数库。

![](Jquery.assets/2022-07-22_142819.png)

在HTML文件中使用<script></script>标签的src属性就可引入jquery：

```html
<head>
	<script src="jquery.min.js"></script>
</head>
```



**替代方案：**如不想下载并存放jquery，那么也可以使用CDN（内容发布网络）引用它。Staticfile CDN、百度、又拍云、新浪、谷歌和微软的服务器都存有 jQuery 。如果你的站点用户是国内的，建议使用百度、又拍云、新浪等国内CDN地址，如果你站点用户是国外的可以使用谷歌和微软。

Staticfile CDN：

```html
<head>
	<script src="https://cdn.staticfile.org/jquery/1.10.2/jquery.min.js"></script>
</head>
```

百度 CDN：

```html
<head>
	<script src="https://apps.bdimg.com/libs/jquery/2.1.4/jquery.min.js"></script>
</head>
```

又拍云 CDN：

```javascript
<head>
	<script src="https://upcdn.b0.upaiyun.com/libs/jquery/jquery-2.0.2.min.js"></script>
</head>
```

新浪 CDN：

```html
<head>
    <script src="https://lib.sinaapp.com/js/jquery/2.0.2/jquery-2.0.2.min.js"></script>
</head>
```

谷歌 CDN：

```html
<head>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js>		     </script>
</head>
```

微软 CDN：

```html
<head>
	<script src="https://ajax.aspnetcdn.com/ajax/jquery/jquery-1.9.0.min.js"></script>
</head>
```

​	使用CDN加载jquery有一个很大的优势：许多用户在访问其他站点时，已经从百度、又拍云等网站加载过jquery，所以结果是，当他们访问你的网站时，会从缓存中加载jquery，这样可以减少加载时间，同时大多数CDN都可以确保当用户向其请求文件时，会从离用户最近的服务器上返回响应，这样也可以提高加载速度。

<img src="Jquery.assets/2022-07-22_144430.png" style="zoom:50%;" />



## 3.jQuery语法

通过 jQuery，您可以选取（查询，query） HTML 元素，并对它们执行"操作"（actions）。jQuery 语法是通过选取 HTML 元素，并对选取的元素执行某些操作。



### 3.1.基础语法

基础语法必须等着DOM元素加载完毕后才能加载jquery，基础语法结构为：

```javascript
$(selector).action()
/*
1.$定义jquery
2.选择符（selector）"查询"和"查找" HTML 元素
3.jQuery 的 action() 执行对元素的操作
*/
```

```javascript
$(this).hide() - 隐藏当前元素
$("p").hide() - 隐藏所有 <p> 元素
$("p.test").hide() - 隐藏所有 class="test" 的 <p> 元素
$("#test").hide() - 隐藏 id="test" 的元素
```

利用jquery隐藏div盒子：

```javascript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <script src="jquery.min.js"></script>
    <style>
        div {
            width: 200px;
            height: 200px;
            background-color: red;
        }
    </style>
</head>
<body>
    <div></div>
    <script>
        $("div").hide();
    </script>
</body>
</html>
```



### 3.2.文档就绪事件

为了防止文档在完全加载（就绪）之前运行jquery代码，即在DOM加载完毕之后才可以对DOM进行操作，我们可以使用文档就绪事件函数，将jquery代码放在一个document.ready函数中：

```javascript
$(document).ready(function(){
 
   // 开始写 jQuery 代码...
 
});
```

```javascript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <script src="jquery.min.js"></script>
    <style>
        div {
            width: 200px;
            height: 200px;
            background-color: red;
        }
    </style>
</head>
<body>
    <div></div>
    <script>
        $(document).ready(function() {
            $("div").hide();
        });
    </script>
</body>
</html>
```



**以上方式可以简写为：**

```javascript
$(function(){
 
   // 开始写 jQuery 代码...
 
});
```



### 3.3.jquery和原生JS入口函数的区别

jquery入口函数：

```javascript
$(document).ready(function(){
    // 执行代码
});
或者
$(function(){
    // 执行代码
});
```

原生JS入口函数：

```javascript
window.onload = function () {
    // 执行代码
}
```

-  jQuery 的入口函数是在 html 所有标签(DOM)都加载之后，就会去执行。
- JavaScript 的 window.onload 事件是等到所有内容，包括外部图片之类的文件加载完后，才会执行。

load和ready的区别：

|          | window.onload                                              | $(document).ready()                                 |
| -------- | ---------------------------------------------------------- | --------------------------------------------------- |
| 执行时机 | 必须等待网页全部加载完毕（包括图片等），然后再执行包裹代码 | 只需要等待网页中的DOM结构加载完毕，就能执行包裹代码 |
| 执行次数 | 只能执行一次，如果要执行第二次，那么第一次的执行就会被覆盖 | 可以执行多次，第N次不会被上一次覆盖                 |



### 3.4.顶级对象$

$是jQuery的别称，在代码中可以使用$代替jQuery，但一般为了方便，通常直接使用$。并且$是jQuery的顶级对象，相当于原生JS的window，把元素利用$包装成jQuery对象，就可以调用jQuery方法。

```javascript
jQuery(function() {
    $("div").hide();
});
```

另外，JS对象和jQuery对象是可以相互转换的，JS转jQuery对象是直接用$()。

```javascript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <script src="jquery.min.js"></script>
</head>
<body>
    <video src="mov.mp4"></video>
    <script>
        // DOM对象转jQuery对象
    $("video");
    // 使用原生JS获取DOM对象，jQuery中没有play方法
    var vidio01 = document.getElementsByTagName("video");
    // $("vidio01").play(); // 没有play方法
	// 通过伪数组特点获取对象
    vidio01[0].play();
    // vidio01.get(0).play();
    </script>
</body>
</html>
```





## 4.jQuery选择器

jQuery 选择器允许你对 HTML 元素组或单个元素进行操作。jQuery 选择器基于元素的 id、类、类型、属性、属性值等"查找"（或选择）HTML 元素。 它基于已经存在的 CSS 选择器，除此之外，它还有一些自定义的选择器。

**jQuery 中所有选择器都以美元符号开头：$()。**



### 4.1.元素选择器

jQuery 元素选择器基于元素名选取元素。在页面中选取所有 <p> 元素:

```javascript
$("p");
```

案例：用户点击按钮后，所有p元素消失。

```javascript
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8"> 
<title></title> 
<script src="jquery.min.js">
</script>
<script>
    $(document).ready(function(){
    $("button").click(function(){
        $("p").hide();
    });
    });
</script>
</head>

<body>
    <h2>这是一个标题</h2>
    <p>这是一个段落。</p>
    <p>这是另一个段落。</p>
    <button>点我</button>
</body>
</html>
```



### 4.2.id选择器

jQuery #id 选择器通过 HTML 元素的 id 属性选取指定的元素。页面中元素的 id 应该是唯一的，所以您要在页面中选取唯一的元素需要通过 #id 选择器。通过 id 选取元素语法如下：

```javascript
$("#test")
```

案例：当用户点击按钮后，id为test的元素将被隐藏。

```javascript
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8"> 
<title></title> 
<script src="jquery.min.js">
</script>
<script>
    $(document).ready(function(){
    $("button").click(function(){
        $("#test").hide();
    });
    });
</script>
</head>

<body>
    <h2>这是一个标题</h2>
    <p>这是一个段落</p>
    <p id="test">这是另外一个段落</p>
    <button>点我</button>
</body>
```



### 4.3.class选择器

jQuery 类选择器可以通过指定的 class 查找元素。语法如下：

```javascript
$(".test")
```

案例：当用户点击按钮后，class="test"属性的元素隐藏。

```javascript
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8"> 
<title></title> 
<script src="jquery.min.js">
</script>
<script>
    $(document).ready(function(){
    $("button").click(function(){
        $(".test").hide();
    });
    });
</script>
</head>
<body>
    <h2 class="test">这是一个标题</h2>
    <p class="test">这是一个段落。</p>
    <p>这是另外一个段落。</p>
    <button>点我</button>
</body>
</html>
```



### 4.4.其他语法

| 语法                     | 描述                                                    |
| ------------------------ | ------------------------------------------------------- |
| $("*")                   | 选取所有元素                                            |
| $(this)                  | 选取当前 HTML 元素                                      |
| $("p.intro")             | 选取 class 为 intro 的 <p> 元素                         |
| $("p:first")             | 选取第一个 <p> 元素                                     |
| $("ul li:first")         | 选取第一个 <ul> 元素的第一个 <li> 元素                  |
| $("ul li:first-child")   | 选取每个 <ul> 元素的第一个 <li> 元素                    |
| $("[href]")              | 选取带有 href 属性的元素                                |
| $("a[target='_blank']")  | 选取所有 target 属性值等于 "_blank" 的 <a> 元素         |
| $("a[target!='_blank']") | 选取所有 target 属性值不等于 "_blank" 的 <a> 元素       |
| $(":button")             | 选取所有 type="button" 的 <input> 元素 和 <button> 元素 |
| $("tr:even")             | 选取偶数位置的 <tr> 元素                                |
| $("tr:odd")              | 选取奇数位置的 <tr> 元素                                |



```javascript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <script src="jquery.min.js"></script>
</head>
<body>
    <div class="gf">
        <div class="father">
            <div class="son">儿子</div>
        </div>
    </div>
    <div class="nav">
        <p>p元素</p>
        <div>
            <p>这是第二个P元素</p>
        </div>
    </div>
    <script>
        $(function() {
            // 1.获取父元素parent()，返回最近一级的父元素
            console.log($(".son").parent());
            // 2.获取子元素
            $(".nav").children("p").css("color","red");
            // 3.获取所有子元素，包括儿子孙子-find()
            $(".nav").find("p").css("color","blue");


        });
    </script>
</body>
</html>
```





### 4.5.隐式迭代

jQuery可以实现隐式迭代，因为其DOM元素内部是以伪数组的形式存在的。

```javascript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <script src="jquery.min.js"></script>
</head>
<body>
    <div>hello,jQuery</div>
    <div>hello,jQuery</div>
    <div>hello,jQuery</div>
    <div>hello,jQuery</div>
    <script>
        console.log($("div"));
        // 设置字体颜色为红色,通过隐式迭代获取全部div
        $("div").css("color","red");
    </script>
</body>
</html>
```



案例：新浪下拉菜单栏。

<img src="Jquery.assets/image-20220722171505967.png" alt="image-20220722171505967" style="zoom:50%;" />

```javascript
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        * {
            margin: 0;
            padding: 0;
        }
        
        li {
            list-style-type: none;
        }
        
        a {
            text-decoration: none;
            font-size: 14px;
        }
        
        .nav {
            margin: 100px;
        }
        
        .nav>li {
            position: relative;
            float: left;
            width: 80px;
            height: 41px;
            text-align: center;
        }
        
        .nav li a {
            display: block;
            width: 100%;
            height: 100%;
            line-height: 41px;
            color: #333;
        }
        
        .nav>li>a:hover {
            background-color: #eee;
        }
        
        .nav ul {
            display: none;
            position: absolute;
            top: 41px;
            left: 0;
            width: 100%;
            border-left: 1px solid #FECC5B;
            border-right: 1px solid #FECC5B;
        }
        
        .nav ul li {
            border-bottom: 1px solid #FECC5B;
        }
        
        .nav ul li a:hover {
            background-color: #FFF5DA;
        }
    </style>
    <script src="jquery.min.js"></script>
</head>

<body>
    <ul class="nav">
        <li>
            <a href="#">微博</a>
            <ul>
                <li>
                    <a href="">私信</a>
                </li>
                <li>
                    <a href="">评论</a>
                </li>
                <li>
                    <a href="">@我</a>
                </li>
            </ul>
        </li>
        <li>
            <a href="#">微博</a>
            <ul>
                <li>
                    <a href="">私信</a>
                </li>
                <li>
                    <a href="">评论</a>
                </li>
                <li>
                    <a href="">@我</a>
                </li>
            </ul>
        </li>
        <li>
            <a href="#">微博</a>
            <ul>
                <li>
                    <a href="">私信</a>
                </li>
                <li>
                    <a href="">评论</a>
                </li>
                <li>
                    <a href="">@我</a>
                </li>
            </ul>
        </li>
        <li>
            <a href="#">微博</a>
            <ul>
                <li>
                    <a href="">私信</a>
                </li>
                <li>
                    <a href="">评论</a>
                </li>
                <li>
                    <a href="">@我</a>
                </li>
            </ul>
        </li>
    </ul>
    <script>
        $(function() {
            // 鼠标经过
            $(".nav>li").mouseover(function() {
                // $(this) jQuery 当前元素  this不要加引号
                // show() 显示元素  hide() 隐藏元素
                $(this).children("ul").show();
            });
            // 鼠标离开
            $(".nav>li").mouseout(function() {
                $(this).children("ul").hide();
            })
        })
    </script>
</body>

</html>
```



案例：jQuery具有排他性。

```javascript
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <script src="jquery.min.js"></script>
</head>

<body>
    <button>jQuery</button>
    <button>jQuery</button>
    <button>jQuery</button>
    <button>jQuery</button>
    <button>jQuery</button>
    <button>jQuery</button>
    <button>jQuery</button>
    <script>
        $(function() {
            // 1. 隐式迭代 给所有的按钮都绑定了点击事件
            $("button").click(function() {
                // 2. 当前的元素变化背景颜色
               // $(this).css("background", "pink");
                // 3. 其余的兄弟去掉背景颜色 隐式迭代
               // $(this).siblings("button").css("background", "");
               // 如上方式可以采用jQuery的链式编程来完成
               $(this).css("background", "pink").siblings("button").css("background", "");
            });
        })
    </script>
</body>

</html>
```







## 5.jQuery事件

jQuery是为事件处理做特别设计的。页面对不同访问者的响应叫做事件，事件处理程序是指当HTML中发生某些事件时所调用的方法。如：在元素上移动鼠标、选取单选按钮、点击元素等。

在事件中经常使用的术语：**触发（或激发**）。例如当按下按键时触发的"keypress"事件。

常见的DOM事件有：

| 鼠标事件   | 键盘事件 | 表单事件 | 文档/窗口事件 |
| ---------- | -------- | -------- | ------------- |
| click      | keypress | submit   | load          |
| dblclick   | keydown  | change   | resize        |
| mouseenter | keyup    | focus    | scroll        |
| mouseleave |          | blur     | unload        |
| hover      |          |          |               |

