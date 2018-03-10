const trees = [
  "redwood",
  "bay",
  "cedar",
  "oak",
  "maple",
];

console.log(0 in trees);
console.log(3 in trees);
console.log(6 in trees);
console.log("bay" in trees);

console.log("length" in trees);
console.log(Symbol.iterator in trees);

console.log("PI" in Math);

const mycar = {
  make: "Honda",
  model: "Accord",
  year: 1998,
};
console.log("make" in mycar);
console.log("model" in mycar);