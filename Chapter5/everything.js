// using loops
// function every(array, test) {
//   for (let element of array) {
//     if (!test(element)) {
//       return false;
//     }
//   }
//   return true;
// }

// using the some method
// couldn't figure this out yet
function every(array, test) {
  return;
}

console.log(every([1, 3, 5], (n) => n < 10));
// → true
console.log(every([2, 4, 16], (n) => n < 10));
// → false
console.log(every([], (n) => n < 10));
// → true
