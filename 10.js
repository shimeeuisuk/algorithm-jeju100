function christmastree(num) {
  let answer = "";

  for (let i = 1; i <= num; i++) {
    let star = "-";

    answer += star + "\n";
  }
  return answer;
}

console.log(christmastree(5));
