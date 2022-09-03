-  horizontally centers
```
div {
  margin: auto;
}
```

-  horizontally right
```
div {
  margin-left: auto;
}
```




## margin-left: auto 为什么可以使的元素靠右
https://segmentfault.com/q/1010000008431088
```
div {
  width: 100px;
  margin-left: auto;
}
```
'margin-left' + 'border-left-width' + 'padding-left' + 'width' + 'padding-right' +'border-right-width' + 'margin-right' = width of containing block

在上述等式中除了 width 和 margin-left 其他值都是 0 ，把width带入公式计算得到 
margin-left + -100px = 包含块的宽度 。所以最终 div 会靠近包含块的右边。
同理 margin: auto 会让元素居中
```
div {
  margin: auto
}
```
If both 'margin-left' and 'margin-right' are 'auto', their used values are equal. This horizontally centers the element with respect to the edges of the containing block.