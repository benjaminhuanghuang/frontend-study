# Browser rendering
1. Parse Html, CSS
2. Calculate computed style: 层叠，继承，权重
3. Layout: position, size (width=%)
4. 

## 1. Parse HTML, CSS
DOM tree

CSSOM tree


Default css in chrome

https://source.chromium.org/chromium/chromium/src/+/main:third_party/blink/renderer/core/html/resources/html.css

```css
area {
  display: inline;
}

base, basefont, datalist, head, link, meta, noembed,
noframes, param, rp, script, style, template, title {
  display: none;
}
```

Styles in html
```js
document.styleSheets

document.styleSheets[0].addRule('div', 'border:2px solid red')

```

## 2. Recalculate Style
层叠，继承，权重

Computed Style


## 3. Layout
https://source.chromium.org/chromium/chromium/src/+/main:third_party/blink/renderer/core/layout/layout_object.h


## 4. Layer

堆叠上下文相关属性
z-index, opacity, transform


Create a layer
```css
.container {
  will-change: transform
}
```

Scroll bar is layer

## 5. Paint
Create a paint command for each of layer

## 6. Tiling


## 7. Raster

Pixels




