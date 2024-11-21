const car = document.querySelector(".car");
const btn = document.querySelector(".btn");

const PLUS_ICON_SIZE = 30;
btn.onClick = function () {
  const div = document.createElement("div");
  div.className = "plus";
  div.innerHTML = `<i class= "iconfont icon-gouwuche"></i>`;

  // button position
  const btnRect = btn.getBoundingClientRect();
  const left = btnRect.left + btnRect.width / 2 - PLUS_ICON_SIZE / 2;
  const x = carRect.left + carRect.width / 2 - PLUS_ICON_SIZE / 2 - left;
  const y = carRect.top - PLUS_ICON_SIZE - top;

  div.style.setProperty("--left", `${left}px`);
  div.style.setProperty("--top", `${btnRect.top}px`);
  div.style.setProperty("--x", `${x}px`);
  div.style.setProperty("--y", `${y}px` )

  div.addEventListener('animationend', () => {
    div.remove();
  })
  document.body.appendChild(div);
};
