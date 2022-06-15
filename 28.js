let str = "";
function gram(n) {
  for (let i = 0; i < n.length - 1; i++) {
    str += n[i] + " " + n[i + 1] + "\n";
  }
  return str;
}
console.log(gram("Javascript"));
