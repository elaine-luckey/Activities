// create the Stack class with two methods to remove and add an element
class Stack {
  constructor(container = []){
    this.container = container;

  }

  addToStack (p) {
    return this.container.push(p);
  }

  removeFromStack() {
    return this.container.pop();
  }
}

module.exports = Stack;
