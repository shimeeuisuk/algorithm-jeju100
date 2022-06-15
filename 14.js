function game(n) {
  if (n !== 0 && n % 3 === 0) {
    return "짝";
  }
  return n;
}
console.log(game(0));
console.log(game(15));
console.log(game(2));
console.log(game(3));
