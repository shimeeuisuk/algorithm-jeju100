function check(n) {
  if (n.toUpperCase() === n) {
    return "YES";
  }
  return "NO";
}
console.log(check("A"));
console.log(check("a"));
