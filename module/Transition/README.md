# 标签过渡效果
[【CSS实现效果预览】](https://baoyuzhang.github.io/JD.COM/module/Transition/Transition_css.html)
[【JS实现效果预览】](https://baoyuzhang.github.io/JD.COM/module/Transition/Transition_js.html)

## CSS
1. `font-size: 0;`：清除display:inline-block元素换行符间隙<br>
在firefox，safari，opera，ie8+中的 inline-block 元素之间会莫名其妙多出3px的间距，其实这个是换行符<br>
将 inline-block 元素间的换行符去掉：在inline-block的父元素中加上 `font-size：0;`，然后在 inline-block将字体设回来
2. `white-space: nowrap;`：文本不换行，在同一行上继续，直到遇到 `<br>` 标签为止<br>
white-space 属性设置如何处理元素内的空白。
3. `text-overflow: ellipsis;`：显示省略符号来代表被修剪的文本。<br>
`text-overflow: clip|ellipsis|string;`规定当文本溢出包含元素时发生的事情。
