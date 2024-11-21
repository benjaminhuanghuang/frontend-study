# CSS Position

- Remove the element from the document flow or not?
- position relative to 
- Scroll

1. static [Default]
static 为position 属性的默认值，static 元素会遵循正常的文档流，且会忽略 top,bottom,left,right 等属性。

2. inherit
inherit 值如同其他 css 属性的 inherit 值，即继承父元素的 position 值。

3. relative
relative to where it normally would be in the document flow

change top, left, right, bottom based on static position

**Do NOTRemove the element from the document flow**, 周围的元素会忽略 relative 元素的移动，它们会认为 relative 元素仍然在原来的位置，并未进行移动，
```
  {
    position: relative;
    left: 10px
  }
```

4. absolute
Remove the element from the document flow, absolute 元素将会**脱离正常的文档流**，所以 其周围的元素将会忽略它的存在。

it is positioned relative to the nearest positioned ancestor (instead of positioned relative to the viewport, like fixed).


It is useful for when you want to stick something in a specific position

当对 absolute 元素添加 left:10px 定位后，这个 left 究竟是对哪个元素而言呢？此时将会往上查找 absolute 元素的第一个父元素，如果该父元素的 position 值存在（且不为 static）,那么这个 left:10px 就是根据该父元素进行的定位，否则将会继续查找该父元素的父元素，一直追溯到某个父元素具备**不为 static** 的 position 值为止，如果不存在满足条件的父元素，则会根据最外层的 window 进行定位。


5. fixed
fixed 元素将会脱离正常的文档流，所以它与 absolute 元素很相似，同样会被周围元素忽略，支持 top,bottom,left,right 属性，但两者仍有很大不同。
首先，fixed 元素定位与它的父元素无任何关系，它永远是相对最外层的 window 进行定位的。
第二，fixed 元素正如它的名字一样，它是固定在屏幕的某个位置，它不会因为屏幕的滚动而消失

6. sticky(new)
粘性定位是相对定位和固定定位的混合。元素在跨越特定阈值前为相对定位，之后为固定定位。例如：
```
#one { position: sticky; top: 10px; }
```
在 viewport 视口滚动到元素 top 距离小于 10px 之前，元素为相对定位。之后，元素将固定在与顶部距离 10px 的位置，直到 viewport 视口回滚到阈值以下。