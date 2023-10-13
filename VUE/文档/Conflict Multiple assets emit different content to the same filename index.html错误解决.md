# Conflict: Multiple assets emit different content to the same filename index.html错误解决

​	在启动vue脚手架时出现以下错误：

![image-20230620091356454](https://gitee.com/zou_tangrui/note-pic/raw/master/img/202306200914593.png)

​	大致意识是在启动vue项目时出现了相同文件名`index.html`。可按以下方法修改：

- 修改项目目录下`node_modules--webpack--bin--webpack.js`文件，在文件上方添加如下内容：

```html
html:{template:'./src/index.ejs'}
```

<img src="https://gitee.com/zou_tangrui/note-pic/raw/master/img/202306200919812.png" alt="image-20230620091953730" style="zoom:50%;" />

- 将项目`public`下`index.html`的后缀名修改为`ejs`：

![image-20230620092115827](https://gitee.com/zou_tangrui/note-pic/raw/master/img/202306200921871.png)

- 再次启动，成功：

![image-20230620092213102](https://gitee.com/zou_tangrui/note-pic/raw/master/img/202306200922159.png)