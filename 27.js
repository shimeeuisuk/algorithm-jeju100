const obj = {};
function grade(name1, name2, score1, score2) {
  obj[name1] = score1;
  obj[name2] = score2;
  return obj;
}
console.log(grade("Yujin", "Hyewon", 70, 100));
