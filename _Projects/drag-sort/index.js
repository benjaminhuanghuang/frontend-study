const list = document.querySelector(".list");
let sourceNode;
let flip;

// 延迟改变被拖拽的item的样式，避免跟随鼠标的item的样式被改变
list.ondragstart = (e) => {
  setTimeout(() => {
    e.target.classList.add("moving");
  }, 0);
  sourceNode = e.target;
  flip = new flip(list.children, -0.5);
};

list.ondragover = (e) => {
  e.preventDefault();
};

list.ondragenter = (e) => {
  e.preventDefault();
  if (e.target == list || e.target == sourceNode) {
    return;
  }

  const children = [...list.children];
  const targetIndex = children.indexOf(e.target);
  const sourceIndex = children.indexOf(sourceNode);

  if (targetIndex > sourceIndex) {
    // under the sourceNode
    list.insertBefore(sourceNode, e.target.nextElementSibling);
  } else {
    // above the sourceNode
    list.insertBefore(sourceNode, e.target);
  }
  flip.play();
};

list.ondragend = (e) => {
    sourceNode.classList.remove("moving");
};
