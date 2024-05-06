// e.	Insert a node after & before a node with x data




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

    prepend(value) {
        const node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
            this.tail = node
        } else {
            node.next = this.head
            this.head = node

        }
        this.size++
    }

    insertAfter(target, value) {
        if (this.isEmpty()) {
            console.log('your linked list is empty ');
            return
        }
        let curr = this.head
        while (curr) {
            if (curr.value == target) {
                const node = new Node(value)
                let next = curr.next
                curr.next = node
                node.next = next
                if (node.next === null) {
                    this.tail = curr
                }
               return
            }
            curr = curr.next
        }
    }

    print() {
        let curr = this.head
        let dis = ''
        while (curr) {
            dis += `${curr.value} `
            curr = curr.next
        }

        console.log('list is ', dis);

    }
}

const list = new linkedList()
list.append(10)
list.append(20)
list.prepend(5)
list.prepend(2)
list.print()
list.insertAfter(2, 200)
list.print()
list.insertAfter(20, 500)
list.print()




