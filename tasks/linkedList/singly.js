class Node {
    constructor(value) {
        this.value = value
        this.next = 0
    }
}

class linkedList {
    constructor() {
        this.head = null
        this.size = 0
    }
    isEmpty() {
        return this.size == 0
    }

    append(value) {
        const node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
        } else {
            let prev = this.head
            while (prev.next) {
                prev = prev.next
            }
            prev.next = node
        }
        this.size++

    }

    prepend(value) {
        const node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
        } else {
            let curr = this.head
            node.next = curr
            this.head = node
        }
        this.size++
    }
    reverse() {
        if (this.isEmpty()) {
            console.log('your list is empty')
            return
        } else {
            let curr = this.head
            let prev = null
            while (curr) {
                let next = curr.next
                curr.next = prev
                prev = curr
                curr = next
            }
            this.head=prev
        }


    }
    print() {
        if (this.isEmpty()) {
            console.log('your list is empty ');
            return
        } else {
            let curr = this.head
            let dis = ''
            while (curr) {
                dis += `${curr.value} `
                curr = curr.next
            }
            console.log('linked list is ', dis);
        }
    }
}

const list = new linkedList()
list.append(10)
list.append(20)
list.append(30)
list.print()
list.prepend(1)
list.prepend(2)
list.prepend(3)
list.print()
list.reverse()
list.print()
