# CSS (四)



## 1.鼠标样式cursor

设置或检索在对象上移动的鼠标指针采用何种系统预定义的光标形状

```css
li {
    cursor:pointer;
}
```

| 属性值      | 描述       |
| ----------- | ---------- |
| default     | 小白，默认 |
| pointer     | 小手       |
| move        | 移动       |
| text        | 文本       |
| not-allowed | 禁止       |





## 2.轮廓线

给表单添加 outline: 0; 或者 outline: none; 样式之后，就可以去掉默认的蓝色边框。

```css
input{
    outline:none;
}
```



## 3.防止文本域拖拽

我们可以防止文本域右下角的拖拽，以适应网页的布局。

```css
textarea{
    resize:none;
}
```



## 4.vertical-align属性

CSS 的 vertical-align 属性使用场景： 经常用于设置图片或者表单(行内块元素）和文字垂直对齐。

用于设置一个元素的垂直对齐方式，但是它只针对于行内元素或者行内块元素有效。

```css
vertical-align:属性值;
```

| 属性值   | 描述                               |
| -------- | ---------------------------------- |
| baseline | 默认，元素放置在父元素的基线上     |
| top      | 把元素顶端与行中最高元素的顶端对齐 |
| middle   | 把元素放置在父元素中部             |
| bottom   | 把元素与行中最低元素的顶端对齐     |

## 5.溢出文字省略号显示

### 	5.1.单行文本溢出显示-需满足三个条件	

```css
/*1. 先强制一行内显示文本*/
white-space: nowrap; （ 默认 normal 自动换行）
/*2. 超出的部分隐藏*/
overflow: hidden;
/*3. 文字用省略号替代超出的部分*/
text-overflow: ellipsis;
```



### 	5.2.多行文本溢出显示

```css
overflow: hidden;
text-overflow: ellipsis;
/* 弹性伸缩盒子模型显示 */
display: -webkit-box;
/* 限制在一个块元素显示的文本的行数 */
-webkit-line-clamp: 2;
/* 设置或检索伸缩盒对象的子元素的排列方式 */
-webkit-box-orient: vertical;
```

**实际开发中推荐此用法。**