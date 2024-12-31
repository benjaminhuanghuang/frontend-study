/*
https://www.bilibili.com/video/BV1FR3CeLE4c
*/

const suggestions = document.querySelector(".suggestions");
const input = document.querySelector("input");

function createSuggestions(list) {
  suggestions.innerHtml = list.map((item) => `<span>${item}</span>`).join("");
  if (list.length > 0) {
    suggestions.classList.add("active");
  } else {
    suggestions.classList.remove("active");
  }
}

let controller = null;
input.oninput = async () => {
  // cancel the previous request
  controller && controller.abort();

  controller = new AbortController();

  try {
    const list = await fetch(
      "https://jsonplaceholder.typicode.com/posts" + input.value,
      {
        signal: controller.signal,
      }
    ).then((res) => res.json());
    createSuggestions(list);
  } catch (e) {
    console.log("Request cancelled");
  }
};
