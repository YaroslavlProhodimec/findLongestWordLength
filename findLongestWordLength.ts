// Задача
//
// Вернуть длину самого длинного слова в проверяемом предложении.
let str = "privet meny zovut nautilius";

const x = (input) => {
  let strLength = input.split(" ");
  let str = 0;
  str = strLength.reduce((acc, el) => {
    return acc.length > el.length ? acc : el;
  }, 0);
  console.log(str);
  return str.length;
};
console.log(x(str));

// Решение с использованием цикла for
function findLongestWordLength(str) {
  let maxVal = 0;

  const wordArr = str.split(" ");

  for (let i = 0; i < wordArr.length; i++) {
    let word = wordArr[i];
    if (word.length > maxVal) {
      maxVal = word.length;
    }
  }
  return maxVal;
}

// Решение с использованием метода array.forEach
function findLongestWordLength(str) {
  let maxVal = 0;

  const wordArr = str.split(" ");

  wordArr.forEach((word) => {
    if (word.length > maxVal) {
      maxVal = word.length;
    }
  });
  return maxVal;
}
