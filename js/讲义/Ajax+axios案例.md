# Ajax+axios案例

API地址：https://v1.jinrishici.com/

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <script src="https://cdn.bootcss.com/jquery/3.4.1/jquery.js"></script>
    <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
</head>
<body>
    <button id="btn">发送请求</button>
    <h3 id="title"></h3>
    <script>
      var btn = document.getElementById("btn")
      var title = document.getElementById("title")
      // 原生XMLHttpRequest
      btn.onclick = function () {
        var xhr = new XMLHttpRequest()
        xhr.open("get", "https://v1.jinrishici.com/shuqing/aiguo")
        xhr.send()
        xhr.onreadystatechange = function () {
          if (xhr.readyState === 4 && xhr.status === 200) {
            // 获取服务器响应的数据
            console.log(xhr.responseText)
            var rt = JSON.parse(xhr.responseText)
            console.log(rt)
            title.innerText = rt.content
          }
        }
      }
      // axios请求
      //btn.onclick = function () {
      //  const a = axios.get("https://v1.jinrishici.com/shuqing/aiguo").then(
      //          res => {
      //              console.log(res)
      //              // title.innerText = res.data.content
      //          }
      //  ).catch(
      //              err => {
      //                  console.log(err)
      //              }
      //  )
      //}
      // 基于jq的Ajax请求
      //btn.onclick = function () {
      //  $.ajax({
      //    method:'get',
      //    url:"https://v1.jinrishici.com/shuqing/aiguo",
      //    success:function (res) {
      //      console.log(res)
      //
      //      title.innerText = res.content
      //    },
      //    error: function (err) {
      //      console.log(err)
      //    }
      //  })
      //}
    </script>
</body>
</html>
```

