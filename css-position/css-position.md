# CSS Position


- static [Default]
in common doc flow

- relative
relative to where it normally would be in the document flow

change top, left, right, bottom based on static position
```
  {
    position: relative;
    left: 10px
  }
```

- absolute
Remove the element from the document flow

It is useful for when you want to stick something in a specific position

absolute定位元素的任何祖先元素没有进行任何的“relative”或者“absolute”设置，那么absolute定位的元素的参考物就是html

如果一个元素absolute定位后，其参照物是以**离自身最近**元素是否设置了相对定位，如果有设置将以离自己最近元素定位，如果没有将往其祖先元素寻找相对定位元素，一直找到html为止。

