//f.	Print all elements by order & reverse by order

class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class linkedList {

    constructor() {
        this.head = null
        this.tail = null
        this.size = 0
    }

    isEmpty() {
        return this.size == 0
    }

    append(value) {
        const node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
            this.tail = node
        } else {
            this.tail.next = node
            this.tail = node
        }
        this.size++
    }


    printReverse() {
        this.printingInReverse(this.head);
        console.log('reversed list ');
    }
    
    printingInReverse(node) {
        if (node === null) {
            return;
        }
        this.printingInReverse(node.next);
        process.stdout.write(`${node.value} `);
    }

    printOrder() {
        let curr = this.head
        let dis = ''
        while (curr) {
            dis += `${curr.value} `
            curr = curr.next
        }
        console.log('linked list is ', dis);
    }
}

const list = new linkedList()
list.append(10)
list.append(20)
list.append(40)
list.append(50)
list.append(60)
list.printOrder()
list.printReverse()