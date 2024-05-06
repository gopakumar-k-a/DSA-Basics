
class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class linkedList {
    constructor() {
        this.head = null
        this.size = 0
    }

    isEmpty() {
        return this.size === 0
    }

    getSize() {
        return this.size
    }

    prepend(value) {
        const node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
        } else {
            node.next = this.head
            this.head = node
        }
        this.size++
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

    insert(value, index) {
        if (index < 0 || index > this.size) {
            console.log('invalid index')
            return
        }
        if (index == 0) {
            this.prepend(value)
        } else {
            const node = new Node(value)
            let prev = this.head
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next
            }
            node.next = prev.next
            prev.next = node
            this.size++

        }
    }

    removeFromIndex(index) {
        if (index < 0 || index > this.size) {
            console.log('invalid index ');
            return
        }
        let removedNode
        if (index === 0) {
            removedNode = this.head
            this.head = removedNode.next
        } else {
            let prev = this.head
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next
            }
            removedNode = prev.next
            prev.next = removedNode.next


        }
        return removedNode.value
    }

    
    removeValue(value) {
        if (this.isEmpty()) {
            console.log('list is empty nothing to delete ');
            return
        }
        if (this.head.value == value) {
            this.head = this.head.next
            this.size--
        } else {
            let removed
            let prev = this.head
            while (prev.next!==null && prev.next.value !== value) {
                prev = prev.next
            }
            if (prev.next) {
                console.log('prev ', prev);
                removed = prev.next
                prev.next = removed.next
                this.size--
            } else {
                console.log('value not found in the linked list ');
                return
            }

        }


    }
    print() {
        if (this.isEmpty()) {
            console.log('yout linked list is empty ');
        } else {
            let curr = this.head
            let dis = ''
            while (curr) {
                dis += `${curr.value} `
                curr = curr.next
            }
            console.log('linked list ', dis)

        }
    }



}

const list = new linkedList()
list.append(10)
list.append(20)
list.prepend(5)
list.print()
console.log('is empty ', list.isEmpty());
console.log('size ', list.getSize());
list.insert(100, 0)
list.print()
console.log('is empty ', list.isEmpty());
console.log('size ', list.getSize());

// list.removeFromIndex(1)
list.removeValue(10)
list.print()
// console.log('is empty ', list.isEmpty());
// console.log('size ', list.getSize());