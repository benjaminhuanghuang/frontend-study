- https://blog.csdn.net/crystal6918/article/details/52056459

display:inline 该元素生成一个或多个行内框
display:inline-block 该元素生成一个块级别框，但是整个框的行为就像是一个内联元素。


inline 和 inline-box的区别在于：

## margin与padding
inline元素只能设定左右margin、padding，上下的是不起作用的

inline-block的上下左右都可以设定margin和padding

## width与height
inline元素不能设定width与height

inline-block元素可以设定width和height


## 换行
如下图，改变窗口大小会发现，inline-block的元素在剩余空间不够一个块的宽度时就会换行，而inline则会断行显示。


## 而inline、inline-block与block的主要区别就是：

block元素前后有换行，一般占满父元素的整个宽度
inline、inline-block前后无换行，允许元素水平一个接一个排列。