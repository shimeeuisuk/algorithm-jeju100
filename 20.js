function divide(a, b) {
  let mod = Math.floor(a / b);
  let rem = a % b;
  return `${mod} ${rem}`;
}
console.log(divide(10, 2));
