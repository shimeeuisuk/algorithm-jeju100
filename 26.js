const planets = [
  "수성",
  "금성",
  "지구",
  "화성",
  "목성",
  "토성",
  "천황성",
  "해왕성",
];
const eng = [
  "Mercury",
  "Venus",
  "Earth",
  "Mars",
  "Jupiter",
  "Saturn",
  "Uranus",
  "Neptune",
];
function change(n) {
  for (let i in planets) {
    if (planets[i] === n) {
      return eng[i];
    }
  }
}
console.log(change("지구"));
