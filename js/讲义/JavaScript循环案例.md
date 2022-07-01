# JavaScript循环案例

## 1.打印100以内7的倍数

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
        for (var i = 1; i < 100; i++) {
            if (i % 7 == 0)
                console.log(i);
        }
    </script>
</body>

</html>
```



## 2.打印100以内所有偶数的和

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
        var sum = 0;
        for (var i = 0; i < 100; i++) {
            if (i % 2 == 0) {
                sum += i;
            }
        }
        console.log(sum);
    </script>
</body>

</html>
```



## 3.计算100的阶乘100!

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
        var res = 1;
        for (var i = 100; i >= 1; i--) {
            res *= i;
        }
        console.log(res);
    </script>
</body>

</html>
```



## 4.100-999之间的水仙花数，abc=a3+b3+c3

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
        for (var i = 100; i <= 999; i++) {
            var n1 = parseInt(i / 100);
            var n2 = parseInt(i % 100 / 10); //632==>32==>3.2==>3
            var n3 = i % 10;
            if (i == n1 * n1 * n1 + n2 * n2 * n2 + n3 * n3 * n3) {
                console.log(i);
            }
        }
    </script>
</body>

</html>
```



## 5.打印出1000-2000之间所有的闰年数，并以每行4个数的形式输出

```javascrip
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
    </script>
</body>

</html>
```



## 6.打印99乘法表

for循环：

```javascrip
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
        document.write("<ul>")
        for (let i = 1; i <= 9; i++) {
            document.write("<li>")
            for (let j = 1; j <= i; j++) {
                document.write("<span>" + i + "*" + j + "=" + i * j + "&emsp;</span>")
            }
            document.write("</li>")

        }
        document.write("</ul>")
    }
    show99(); //函数的调用
</script>

</html>
```

while循环：

```javascrip
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
</head>

<body>

</body>

</html>
```

