// const galaxy = [
//   "수성",
//   "금성",
//   "지구",
//   "화성",
//   "목성",
//   "토성",
//   "천왕성",
//   "해왕성",
// ];

// function planet(n) {
//   return galaxy[n - 1];
// }

// console.log(planet(1));
const planets = [
  "수성",
  "금성",
  "지구",
  "화성",
  "목성",
  "토성",
  "천왕성",
  "해왕성",
];

const n = prompt("몇 번째 행성인가요?");

console.log(planets[n - 1]);
