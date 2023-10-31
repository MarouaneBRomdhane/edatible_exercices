function afterNyears(names, n) {
  // loop through names object
  for (const key in names) {
    // access to the key's value and add the absolute value of n
    names[key] += Math.abs(n);
  }
  return names;
}

var ages = { Joel: 1, Fred: 1, Reginald: 1, Susan: 1, Julian: 1 };
var x = prompt("give a number");
var n = Math.abs(x);
console.log(afterNyears(ages, n));
