class Queue {
  constructor() {
    this.items = new Array();
  }

  isEmpty() {
    return this.items.length === 0;
  }

  peek() {
    if(this.isEmpty()){
      return null;
    }
    return this.items[0];
  }

  push(element) {
    this.items.push(element);
  }

  shift(element) {
    return this.items.shift(element);
  }

  print() {
    return this.items.toString();
  }

  size() {
    return this.items.length;
  }
}

const queue = new Queue()
queue.push(10)
queue.push(20)
queue.push(30)
console.log(queue.print())
console.log(queue.shift())
console.log(queue.isEmpty())
console.log(queue.print())
console.log(queue.size())
console.log(queue.peek())