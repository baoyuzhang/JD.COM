# 商城分类导航
[【CSS实现效果预览】](https://baoyuzhang.github.io/JD.COM/module/NavCateMenu/nav_cate_menu_css.html)
[【JS实现效果预览】](https://baoyuzhang.github.io/JD.COM/module/NavCateMenu/nav_cate_menu_js.html)

## CSS实现
1. 二级菜单的div要放在一级菜单项li里面，hover才能显示出来：`<li>  <div class="cate_pop"></div>   </li>`

  同时注意，此处hover选择器：（为什么有的时候空格可以，有的时候~可以？）
  ```
  /*是空格，而不是~*/
  /*正确*/
  .cate_menu li:hover .cate_pop{
	display: block;
  }
  /*错误，效果出不来*/
  .cate_menu li:hover~.cate_pop{
	display: block;
  }
  ```
2. 外发光效果： `box-shadow: 2px 0 5px rgba(0,0,0,.3);`
3. [CSS3选择器](http://www.w3school.com.cn/cssref/css_selectors.asp)：`:nth-of-type(n)` `:last-child` `:last-of-type`
4.兼容IE6的hover：`behavior:url(css/csshover.htc);`

#### 待解决
- [x] hover选择器：为什么有的时候空格可以，有的时候~可以？

  答：`父元素:hover 子元素` `兄弟元素:hover~兄弟元素`

## JavaScript实现

CSS实现的缺点：
1. 不够灵活
2. 存在很多兼容性问题，要写很多hack
因此JavaScript实现更好
