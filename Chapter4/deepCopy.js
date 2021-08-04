// code for the Chapter-4's Deep Comparison exercise from Eloquent Javascript book.
function deepEqual(ob1, ob2) {
  if (ob1 == ob2) return true;

  const keys1 = Object.keys(ob1);
  const keys2 = Object.keys(ob2);
  if (keys1.length !== keys2.length) return false;

  for (let key of keys1) {
    if (keys2.includes(key)) {
      if (
        typeof ob1[key] === "object" &&
        typeof ob2[key] === "object" &&
        ob1 &&
        ob2
      ) {
        if (!deepEqual(ob1[key], ob2[key])) return false;
      } else if (ob1[key] !== ob2[key]) {
        return false;
      }
    } else {
      return false;
    }
  }
  return true;
}
