
//stack array
class Stack {

    constructor() {
        this.items = []
    }

    push(element) {
        this.items.push(element)
    }

    pop(){
        this.items.pop()
    }

    isEmpty(){
        return console.log(this.items.length==0);
    }

    getSize(){
       return console.log(this.items.length);
    }

    peek(){
        return console.log(this.items[this.items.length-1]);
    }

    print(){
        return console.log(this.items);
    }
}

const stack=new Stack()
stack.push(10)
stack.push(20)
stack.push(30)
stack.push(40)
stack.print()
stack.pop()
stack.pop()
stack.print()
stack.peek()