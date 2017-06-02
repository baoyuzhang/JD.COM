# 商城分类导航

## 纯CSS实现
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



## 待解决
- [ ] hover选择器：为什么有的时候空格可以，有的时候~可以？
