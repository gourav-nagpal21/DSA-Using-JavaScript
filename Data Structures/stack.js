class Stack {
  constructor() {
    this.items = new Array();
  }

  isEmpty() {
    return this.items.length === 0;
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  push(element) {
    this.items.push(element);
  }

  pop(element) {
    return this.items.pop(element);
  }

  print() {
    return this.items.toString();
  }

  size() {
    return this.items.length;
  }
}

const stack = new Stack()
stack.push(10)
stack.push(20)
stack.push(30)

console.log(stack.pop())
console.log(stack.isEmpty())
console.log(stack.print())
console.log(stack.size())
console.log(stack.peek())

// It has constant time complexity but a Array sometime has linear time complexity.