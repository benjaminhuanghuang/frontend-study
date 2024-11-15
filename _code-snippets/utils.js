// Random color
const randomColor = () =>
    "#" +
    Math.floor(Math.random() * 0xffffff)
      .toString(16)
      .padEnd(6, "0");
  // 36 is the highest base supported by toString(),
  const randomString = () => Math.random().toString(36).slice(2);
  
  // Remove tag
  const removeTag = (fragment) =>
    new DOMParser().parseFromString(fragment, "text/html").body.textContent || "";
  
  removeTag("<h1>Hello, World!</h1>"); // "Hello, World!"
  