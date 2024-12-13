.indicator > span:
Targets all <span> elements that are `direct` children of elements with the indicator class.


## Add style to element except the first one
```css
.list {
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  .list-item:not(:first-child) {
    padding-top: 12px;
  }
}
```