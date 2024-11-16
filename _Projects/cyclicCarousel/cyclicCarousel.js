const doms = {
  carouselList: document.querySelector(".carousel-list"),
  arrowLeft: document.querySelector(".carousel-arrow-left"),
  arrowRight: document.querySelector(".carousel-arrow-right"),
  indicators: document.querySelectorAll(".indicators"),
};

const count = doms.indicators.length;
let currIndex = 0; // current index

function moveTo(index) {
  doms.carouselList.style.transform = `translateX(-${index * 100}%)`;
  // when the transform property of the element changes, the change should happen over 0.5 seconds
  doms.carouselList.style.transition = "transform 0.5s";
  // set indicator
  doms.indicators.forEach((indicator, i) => {
    // indicator.classList.remove('active');
    // if (i === index) {
    //     indicator.classList.add('active');
    // }
    indicator.className = i === index ? "active" : "";
  });
}

// Add event listener to the indicators
doms.indicators.forEach((indicator, i) => {
  indicator.addEventListener("click", () => {
    moveTo(i);
  });
});
function init() {
  // deep clone the first child and append it to the end of the list
  const firstClone = doms.carouselList.firstElementChild.cloneNode(true);
  const lastClone = doms.carouselList.lastElementChild.cloneNode(true);
  doms.carouselList.appendChild(firstClone);
  doms.carouselList.insertBefore(
    lastClone,
    doms.carouselList.firstElementChild
  );
  //moved element to the left by 100% of its own width. it will push the last clone out of the view
  lastClone.style.marginLeft = "-100%";
}

function left() {
  if (currIndex === 0) {
    doms.carouselList.style.transition = "none";
    // move the view port to clone of first element at the end of the list
    doms.carouselList.style.transform = `translateX(-${count * 100}%)`;
    // force browse reflow, refresh the page.
    // without this line, the transition = "none"; effect will not work
    doms.carouselList.offsetHeight; 
    moveTo(count - 1);
    
  } else {
    moveTo(currIndex--);
  }
}

function right () {
  if (currIndex === count - 1) {
    doms.carouselList.style.transition = "none";
    doms.carouselList.style.transform = `translateX(100%)`;
    doms.carouselList.offsetHeight;
    moveTo(0);
  } else {
    moveTo(currIndex++);
  }
}

doms.arrowLeft.addEventListener("click", () => {
  left();
});

doms.arrowRight.addEventListener("click", () => {
  right();
});

init();
