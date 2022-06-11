function christmastree(num) {
  let answer = "";

  for (let i = 0; i < num; i++) {
    let star = "";
    for (let j = 0; j < num - i; j++) {
      star += " ";
    }
    for (let n = 0; n < 2 * (i + 1) - 1; n++) {
      star += "*";
    }
    answer += star + "\n";
  }
  return answer;
}

console.log(christmastree(5));
