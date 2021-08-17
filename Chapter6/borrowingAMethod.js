let map = { one: true, two: true, hasOwnProperty: true };

// looked at the hint
console.log(Object.prototype.hasOwnProperty.call(map, "one"));
// → true
