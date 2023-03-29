# Vue作业

## 1.仿照如下页面，设计一个比较两数大小的程序

![image-20230329212421453](https://gitee.com/zou_tangrui/note-pic/raw/master/img/202303292124564.png)

```html
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
        .compare-val {
            color: red;
        }
 
        .large {
            font-size: 16px;
        }
 
        .default {
            font-size: 14px;
        }
 
        .small {
            font-size: 12px;
        }
    </style>
</head>
<body>
    <div id="app">
        <!-- 定义页面结构 -->
        <div class="compare">
          <ul>
            <li>数据1<input type="text" v-model="num1"></li>
            <li>数据2<input type="text" v-model="num2"></li>
            <li><input type="button" value="比较" @click='compare()'></li>
          </ul>
          <div class="result">{{result}}</div>
        </div>
    </div>
    <script>
        var vm = new Vue({
          el: '#app',
          data: {
            num1: '',
            num2: '',
            result: ''
          },
        
          methods: {
            compare() {
              if (!this.num1 || !this.num2) {
                this.result = '输入的数不能为空'
              } else {
                this.result = parseInt(this.num1) == parseInt(this.num2) ? '两个数相等' : parseInt(this.num1) > parseInt(this.num2) ? '数据1大于数据2' : '数据2大于数据1'
              }
            }
          }
        })
      </script>

</body>
</html>
```



## 2.仿照如下页面，设计一个模拟计算器的页面

![image-20230329212508253](https://gitee.com/zou_tangrui/note-pic/raw/master/img/202303292125307.png)

```html
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
      <div id="app">
    <input type="text" v-model="n1">
    <select v-model="opt">
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
    </select>
    <input type="text" v-model="n2">
    <input type="button" value="=" @click="calculator">
    <input type="text" v-model="result">
</div>

<script>
    var vm = new Vue({
        el: '#app',
        data: {
            n1: 0,
            n2: 0,
            opt: '+',
            result: 0
        },
        methods: {
            calculator() {
                switch (this.opt) {
                    case '+':
                        this.result = Number(this.n1) + Number(this.n2);
                        break;
                    case '-':
                        this.result = Number(this.n1) - Number(this.n2);
                        break;
                    case '*':
                        this.result = Number(this.n1) * Number(this.n2);
                        break;
                    case '/':
                        this.result = Number(this.n1) / Number(this.n2);
                        break;
                }
            }
        }
    });
</script>
</body>
</html>
```

