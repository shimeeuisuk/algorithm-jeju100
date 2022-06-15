function reverse(n) {
  let str = "";
  for (let i = 0; i < n.length; i++) {
    str += n[n.length - i - 1];
  }
  return str;
}
console.log(reverse("거꾸로"));
