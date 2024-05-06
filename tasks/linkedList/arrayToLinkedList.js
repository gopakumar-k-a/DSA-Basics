//array to linked list

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

    print() {
        if (this.isEmpty()) {
            console.log('This list is empty');
            return;
        }
    
        let curr = this.head;
        let dis = '';
        while (curr) {
            dis += `${curr.value} `;
            curr = curr.next;
        }
        console.log('List is:', dis);
    }

}

function arrayToLinkedList(arr) {

  
    const list = new linkedList()
    for (let val of arr) {
        list.append(val)
    }
    list.print()
}

let demo = [1, 5, 7, 84, 6, 98, 5, 9]
arrayToLinkedList(demo)


