// solution in the book uses the has method to check whether the value exsits or not before adding it
// both of them works but the solution provided in the book is cleaner
class Group {
  constructor() {
    this.values = [];
  }

  // solution in the book uses the has method
  add(value) {
    // calling the has() method here would result in the same effect because I am doing
    // the exact same thing inside the if statement
    if (!this.values.includes(value)) {
      this.values.push(value);
    }
  }

  // here filter is used instead of splices
  delete(value) {
    if (!this.values.includes(value)) {
      console.log("Value doesn't exsits");
    } else {
      // splice method changes the original array while filter will create a new array
      this.values.splice(this.values.indexOf(value), 1);
    }
  }

  has(value) {
    return this.values.includes(value);
  }

  static from(object) {
    let group = new Group();
    for (let element of object) {
      group.add(element);
    }
    return group;
  }
}

let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false
