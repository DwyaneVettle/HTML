# Ajax



## 1.什么是Ajax

Asynchronous Javascript And Xml异步的 JS 和   xml(EXtensible Markup Language)，通过 JS **异步的向服务器发送请求并接收响应数据**。它由**JavaScript、XMLHttpRequest、DOM**组成

**什么是同步访问？什么是异步异步？**

- **同步访问：**当客户端向服务器发送请求时，服务器在处理的过程中，浏览器只能等待，效率较低；
- **异步访问：**当客户端向服务器发送请求时，服务器在处理的过程中，客户端可以做其他的操作，不需要一直等待

如今日头条、京东搜索框、百度地图等网页都明显使用了Ajax的技术。

Ajax的优点：

1. 异步访问
2. 局部刷新

使用场景：

1. 1搜索建议
2. 表单验证
3. 前后端分离

<img src="Ajax.assets/image-20220725110429923.png" alt="image-20220725110429923" style="zoom:50%;" />

## 2.Ajax核心对象-异步对象（XMLHttpRequest）

XMLHttpRequest称为“异步对象”，代替浏览器向服务器发送异步请求并接收响应，xhr由JS提供。



### 2.1.创建xhr异步对象

​	1.IE7+,Chrome,Firefox,Safari,Opera)  -> 调用 XMLHttpRequest 生成 xhr对象

```javascript
xhr = new XMLHttpRequest();
```



​	2.IE低版本浏览器中(IE6以及以下) -> 调用 ActiveXObject() 生成xhr

```javascript
xhr = new ActiveXObject("Microsoft.XMLHTTP");
```

​	为了应对所有浏览器，包括 IE5 和 IE6，请检查浏览器是否支持 XMLHttpRequest 对象。如果支持，创建 XMLHttpRequest 对象，如果不支持，则创建 ActiveX 对象：

```javascript
var xmlhttp;
if (window.XMLHttpRequest)
{
    //  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
    xmlhttp=new XMLHttpRequest();
}
else
{
    // IE6, IE5 浏览器执行代码
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
}
```

常用方法：

<img src="https://img-blog.csdnimg.cn/20200315104357831.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L09yaWVudGFsXw==,size_16,color_FFFFFF,t_70" alt="img" style="zoom:50%;" />



xhr提供了一个状态码的属性`readyState`，该属性提供5中状态码值：

```javascript
 readyState === 0 : 表示未初始化完成，也就是 open 方法还没有执行 
 readyState === 1 : 表示配置信息已经完成，也就是执行完 open 之后 
 readyState === 2 : 表示 send 方法已经执行完成
 readyState === 3 : 表示正在解析响应内容
 readyState === 4 : 表示响应内容已经解析完毕，可以在客户端使用了
```

- 这个时候我们就会发现，当一个 ajax 请求的全部过程中，`只有当 readyState === 4 的时候，我们才可以正常使用服务端给我们的数据`，所以一般配合HTTP状态请求200来使用，xhr的status属性即可以表示HTTP状态码，所以一般返回成功的状态都有如下判断：

```javascript
if (xhr.readyState == 4 && xhr.status == 200)
```



浏览器中使用的XMLHttpRequest用法比较复杂，所以jQuery对XMLHttpRequest进行了封装，提供了一系列Ajax相关的函数，极大的降低了Ajax的使用难度。

jQuery中发起Ajax请求最常用的三个方法：

- **$.get():**从服务器获取数据
- **$.post():**提交数据到服务器
- **$.ajax():**既可提交，也可获取



### 2.2.$.ajax()函数

相比于`$.get()`和`$.post()`函数，$.ajax()是一个功能比较综合的函数，它允许我们对Ajax请求进行更详细的配置。其语法格式为：

```javascript
$.ajax({
    type: '', // 请求的方式，如GET和POST
    url: '', // 请求的URL地址
    async: '', // 是否异步，默认为true
    data: {}, // 请求要携带的参数
    dataType: {}, // 预期返回数据的类型
    success: function(res) {} // 请求成功后的回调函数
    error: function(res) {} // 失败时的回调函数
})
```

- **$.ajax()发起GET请求：**将type值设为GET。

```javascript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="../lib/jquery.js"></script>
</head>
<body>
    <button id="btn">显示数据</button>
    <script>
       $('#btn').click(function() {
        $.ajax({
            type: 'get', // 请求方式
            url:'../lib/data.txt', // 请求地址
            data: { // 请求数据,没有可不写

            },
            dataType:'json',
            // 请求成功后的回调函数
            success:function(res) {
                // console.log(res);
                var ul = $('<ul></ul>')
                for(var i=0;i<res.length;i++) {
                    var user = res[i]
                    console.log(user);
                    var li = "<li>" + user.userName + '</li>'
                    ul.append(li)
                }
                // 将ul放到body中
                $('body').append(ul)
            }
        })
       })
    </script>
</body>
</html>
```



- get和post请求的区别：
  - get请求不会将参数携带到url请求，传输的数据大概是2k-4k；
  - post请求会将参数携带到url请求中，传输数据的大小可以配置。



### 2.4.Ajax模拟登录

创建login.html：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="../lib/jquery.js"></script>
</head>
<body>
    姓名：<input type="text" id="userName">
    密码：<input type="password" id="pwd">
    <button onclick="login()">登录</button>
    <script>
        function login() {
            $.ajax({
                type:"get",
                url: 'index.html',
                success: function(res) {
                    var userName = $("#userName").val();
                    var pwd = $("#pwd").val();
                    if(userName == "ajax" && pwd == "123456") {
                        location.href = "index.html"
                    }
                }
            })
        }
    </script>
</body>
</html>
```

index.html:

```xml
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    登录成功
</body>
</html>
```



### 2.5.axios

​	Axios是一个基于promise的HTTP库，类似于jQuery的ajax，用于http请求。可以应用于浏览器端和node.js，既可以用于客户端，也可以用于node.js编写的服务端。

​	语法格式：

- 不带参数：

```javascritp
axios
      .get("/data.json")
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
```

- 带参数：

```javascript
axios
      .get("/data.json", {
        params: {
          id: 12
        }
      })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
```



```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="../lib/jquery.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
</head>
<body>
    姓名：<input type="text" id="userName">
    密码：<input type="password" id="pwd">
    <button onclick="login()">登录</button>
    <script>
        function login() {
            /* $.ajax({
                type:"get",
                url: 'index.html',
                success: function(res) {
                    var userName = $("#userName").val();
                    var pwd = $("#pwd").val();
                    if(userName == "ajax" && pwd == "123456") {
                        location.href = "index.html"
                    }
                }
            }) */
            axios.get("index.html").then(res => {
                var userName = $("#userName").val();
                var pwd = $("#pwd").val();
                if(userName == "ajax" && pwd == "123456") {
                        location.href = "index.html"
                } else {
                    alert('用户名或密码错误！')
                }
            })
        }
    </script>
</body>
</html>
```





## 3.同源策略和跨域

- **同源：**如果两个页面的协议、域名和端口都相同，则两个页面具有相同的源。如下表给出了和http://www.test.com/index.html页面的同源检测：

| url                                | 是否同源 | 原因                   |
| ---------------------------------- | -------- | ---------------------- |
| http://www.test.com/other.html     | 是       | 协议，域名和端口都相同 |
| https://www.test.com/about.html    | 否       | 协议不同               |
| http://blog.test.com/movie.html    | 否       | 域名不同               |
| http://www.test.com:8080/home.html | 否       | 端口不同               |
| http://www.test.com/main.html      | 是       | 协议，域名和端口都相同 |

同源策略（Same origin policy）是浏览器提供的一个安全功能。MDN官方给定的一个概念：同源策略限制了从同一个源加载的文档或脚本如何与来自另一个源的资源交互。这是一个用于隔离潜在恶意文件的重要安全机制。通俗的理解为：浏览器规定，A网站的JS不允许和非同源的C网站之间进行资源交互。具体表现为：

- 无法读取非同源网页的cookie，LocalStorage和IndexedDB
- 无法接触非同源网页的DOM
- 无法向非同源地址发送Ajax请求



- **跨域：**只要有协议、域名或端口任意一项不一样就是跨域。出现跨域的根本原因是：浏览器不允许非同源的url之间进行资源交互。如：
  - 网页：http://www.test.com/index.html
  - 接口：http://www.api.com/userList



### 7.1.如何实现跨域请求

如果要实现跨域请求获取数据，肯定会因为同源策略而拦截。但这种现象还是可以被解决的，现如今最主要的两种解决方案分别是：JSONP和CORS。

JSONP：出现的比较早，兼容性好。是前端常用的解决跨域的一种技术，但JSONP也有明显的缺点，就是只支持get请求，不支持post请求。

CORS：出现的较晚，是W3C标准，属于跨域Ajax请求的根本解决方案，支持get和post请求，但不支持较低版本浏览器。

反向代理：Nginx等

JSONP(JSON with Padding)是JSON的一种使用模式，可用于解决主流浏览器的跨域数据访问问题。它的原理是通过<script>标签的src属性不受同源策略限制的特性，通过函数调用的形式接收跨域接口响应回来的数据。



### 7.2.案例：淘宝搜索框

- **UI效果：**

<img src="https://gitee.com/zou_tangrui/note-pic/raw/master/img/202312071009456.png" alt="image-20220803213322622" style="zoom:50%;" />

- **主要代码：**

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <title>Document</title>
  <!-- 导入页面的基本样式 -->
  <link rel="stylesheet" href="./css/search.css" />
  <!-- 导入 jQuery -->
  <script src="./lib/jquery.js"></script>
  <!-- 导入模板引擎 -->
  <script src="./lib/template-web.js"></script>
</head>

<body>
  <div class="container">
    <!-- Logo -->
    <img src="./images/taobao_logo.png" alt="" class="logo" />

    <div class="box">
      <!-- tab 栏 -->
      <div class="tabs">
        <div class="tab-active">宝贝</div>
        <div>店铺</div>
      </div>
      <!-- 搜索区域（搜索框和搜索按钮） -->
      <div class="search-box">
        <input id="ipt" type="text" class="ipt" placeholder="请输入要搜索的内容" /><button class="btnSearch">
          搜索
        </button>
      </div>
      <!-- 搜索建议列表 -->
      <div id="suggest-list"></div>
    </div>
  </div>

  <!-- 模板结构 -->
  <script type="text/html" id="tpl-suggestList">
    {{each result}}
      <!--搜索建议项-->
      <div class="suggest-item">{{$value[0]}}</div>
    {{/each}}
  </script>

  <script>
    $(function () {
      // 1. 定义延时器的Id
      var timer = null
      // 定义全局缓存对象
      var cacheObj = {}

      // 2. 定义防抖的函数
      function debounceSearch(kw) {
        timer = setTimeout(function () {
          getSuggestList(kw)
        }, 500)
      }

      // 为输入框绑定 keyup 事件
      $('#ipt').on('keyup', function () {
        // 3. 清空 timer
        clearTimeout(timer)
        var keywords = $(this).val().trim()
        if (keywords.length <= 0) {
          return $('#suggest-list').empty().hide()
        }

        // 先判断缓存中是否有数据
        if (cacheObj[keywords]) {
          return renderSuggestList(cacheObj[keywords])
        }

        // TODO:获取搜索建议列表
        // console.log(keywords)
        // getSuggestList(keywords)
        debounceSearch(keywords)
      })

      function getSuggestList(kw) {
        $.ajax({
           // 淘宝提供的接口
          url: 'https://suggest.taobao.com/sug?q=' + kw,
          dataType: 'jsonp',
          success: function (res) {
            // console.log(res)
            renderSuggestList(res)
          }
        })
      }

      // 渲染UI结构
      function renderSuggestList(res) {
        if (res.result.length <= 0) {
          return $('#suggest-list').empty().hide()
        }
        var htmlStr = template('tpl-suggestList', res)
        $('#suggest-list').html(htmlStr).show()

        // 1. 获取到用户输入的内容，当做键
        var k = $('#ipt').val().trim()
        // 2. 需要将数据作为值，进行缓存
        cacheObj[k] = res
      }
    })
  </script>
</body>

</html>
```



### 7.3.防抖和节流

- **防抖策略(debounce)：**当事件被触发后，延迟n秒后再执行回调，如果在这n秒内事件又被触发，则重新计时。

<img src="https://gitee.com/zou_tangrui/note-pic/raw/master/img/202312071009004.png" alt="image-20220803213920441" style="zoom: 67%;" />

<img src="https://gitee.com/zou_tangrui/note-pic/raw/master/img/202312071009448.png" alt="image-20220803214047229" style="zoom:67%;" />

- 防抖的应用策略：用户在输入框中连续输入一串字符时，可以通过防抖策略，只在输入完后，才执行查询请求，这样可以减少请求次数，节约请求资源。如上案例的以下代码就是防抖的实现：

```javascript
// 2. 定义防抖的函数
      function debounceSearch(kw) {
        timer = setTimeout(function () {
          getSuggestList(kw)
        }, 500)
      }

      // 为输入框绑定 keyup 事件
      $('#ipt').on('keyup', function () {
        // 3. 清空 timer
        clearTimeout(timer)
        var keywords = $(this).val().trim()
        if (keywords.length <= 0) {
          return $('#suggest-list').empty().hide()
        }

        // 先判断缓存中是否有数据
        if (cacheObj[keywords]) {
          return renderSuggestList(cacheObj[keywords])
        }

        // TODO:获取搜索建议列表
        // console.log(keywords)
        // getSuggestList(keywords)
        debounceSearch(keywords)
      })
```



- **节流策略(throttle)：**可以减少事件一段时间内触发的频率。

<img src="https://gitee.com/zou_tangrui/note-pic/raw/master/img/202312071009745.png" alt="image-20220803214535543" style="zoom:67%;" />

<img src="https://gitee.com/zou_tangrui/note-pic/raw/master/img/202312071009758.png" alt="image-20220803214556363" style="zoom:67%;" />

- 节流的应用场景：
  - 鼠标连续不断的触发某事件（如点击），只在单位时间内触发一次；
  - 懒加载时要监听计算滚动条的位置，但不必每次都触发，可以降低计算频率，而不必浪费CPU资源。

案例：鼠标跟随按钮：图片跟随鼠标滑动：

<img src="https://gitee.com/zou_tangrui/note-pic/raw/master/img/202312071009905.png" alt="image-20220803214846475" style="zoom: 67%;" />

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
  <script src="./lib/jquery.js"></script>
  <style>
    html,
    body {
      margin: 0;
      padding: 0;
      overflow: hidden;
    }

    #angel {
      position: absolute;
    }
  </style>
</head>

<body>
  <img src="./angel.gif" alt="" id="angel" />

  <script>
    $(function () {
      // 1. 获取到图片
      var angel = $('#angel')
      // 步骤1. 定义节流阀
      var timer = null
      // 2. 绑定 mousemove 事件
      $(document).on('mousemove', function (e) {
        // 步骤3：判断节流阀是否为空
        if (timer) { return }
        // 3. 设置图片的位置
        // 步骤2：开启延时器
        timer = setTimeout(function () {
          $(angel).css('top', e.pageY + 'px').css('left', e.pageX + 'px')
          console.log('ok')
          timer = null
        }, 16)

      })
    })
  </script>
</body>

</html>
```

