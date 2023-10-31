function getBudgets(arr) {
  var s = 0;
  for (const elemen of arr) {
    s += elemen.budget;
  }
  return s;
}

var budget = [
  { name: "John", age: 21, budget: 23000 },
  { name: "Steve", age: 32, budget: 40000 },
  { name: "Martin", age: 16, budget: 2700 },
];
var somme = getBudgets(budget);
console.log("la somme des budget est: " + somme);
