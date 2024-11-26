/*
length()

usc 16bit,
utf-16    16bit or 32bit
emoji or other special characters have length 2
*/
const str = "这是一个🐤测试字符串";
console.log(str.length); // emoji has length 2
console.log("🐤".length); // 2

/*
index in based on 16bit
*/
console.log("🐤"[0]); // �

/*
slice(start, end), start and end are based on 16bit
*/
console.log(str.slice(2, 5)); // 一个�


/*
slice by code point 
*/
String.prototype.sliceByPoint = function (start, end) {
  let result = "";

  let pIndex = 0; // code point index, 32bit or 16bit
  let cIndex = 0; // 16bit index

  while (1) {
    if (pIndex >= end || cIndex >= this.length) {
      break;
    }
    const codePoint = this.codePointAt(cIndex);
    if (pIndex >= start) {
      result += String.fromCodePoint(codePoint);
    }
    pIndex++;
    cIndex += codePoint > 0xffff ? 2 : 1;
  }

  return result;
};

console.log(str.sliceByPoint(2, 5)); // 一个🐤