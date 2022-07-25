function findWordCount(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      count++;
    }
  }
  return count + 1;
}

console.log(
  findWordCount("안녕하세요. 저는 제주대학교 컴퓨터공학전공 혜림입니다.")
);
