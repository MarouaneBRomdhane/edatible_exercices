function minMax(arr) {
  //sort arr
  var sortedArray = arr.sort(function (a, b) {
    return a - b;
  });
  return [sortedArray[0], sortedArray[sortedArray.length - 1]];
}
var arr = [1, 23, 43, 14, 5];
console.log(minMax(arr));
