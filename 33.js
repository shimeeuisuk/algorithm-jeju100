function reverseArr(arr) {
  const newarr = [];
  for (let i = 0; i < arr.length; i++) {
    newarr.push(arr[arr.length - 1 - i]);
  }
  return newarr;
}

console.log(reverseArr([1, 2, 3, 4, 5]));
console.log(reverseArr([2, 4, 6, 8, 10]));
