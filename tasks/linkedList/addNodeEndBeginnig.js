//c.	Add a node at the end & beginning

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
        this.size=0
    }

    isEmpty() {
        return this.size == 0
    }

    prepend(value) {
        const node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
            this.tail = node
        } else {
            node.next=this.head
            this.head = node
        }
        this.size++
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

    print() {
        let curr = this.head
        let dis = ''
        while (curr) {
            dis += `${curr.value} `
            curr = curr.next
        }
        console.log('list is ',dis);
    }
}

const list=new linkedList()
list.append(10)
list.append(20)
list.append(30)
list.append(40)
list.print()
list.prepend(5)
list.prepend(2)
list.print()
