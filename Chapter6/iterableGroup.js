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

  [Symbol.iterator]() {
    return new GroupIterator(this);
  }
}

class GroupIterator {
  constructor(group) {
    this.i = 0;
    this.group = group;
  }

  next() {
    if (this.i == this.group.values.length) return { done: true };

    let value = this.group.values[this.i];
    this.i++;
    return { value, done: false };
  }
}

for (let value of Group.from(["a", "b", "c", 1, 2, 99])) {
  console.log(value);
}
