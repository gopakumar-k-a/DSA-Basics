//insert element to a specific index

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
        return this.size == 0
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

    insertIndex(value, index) {
        if (index < 0 || index > this.getSize()) {
            console.log('invalid index ')
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
        console.log('inserted ', value, ' at index ', index);
    }
    removeIndex(index) {
        if (index < 0 || index > this.getSize()) {
            console.log('invalid index ');
            return
        } else {
            let prev = this.head
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next
            }
            let removed = prev.next
            prev.next = removed.next
            this.size--
        }

    }

    removeValue(value) {
        if (this.isEmpty()) {
            console.log('the list is empty');
            return
        } else {

            let prev = this.head
            if (prev.value == value) {
                this.head = prev.next
            } else {

                while (prev.next && prev.next.value !== value) {
                    prev = prev.next
                }
                let removed = prev.next
                prev.next = removed.next
            }
            this.size--


        }
    }

    search(value) {
        if (this.isEmpty()) {
            console.log('value not found');
            return -1
        } else {
            let curr = this.head
            let i = 0
            while (curr) {

                if (curr.value == value) {
                    console.log(`value found at ${i} th position`);

                    return i
                }
                curr = curr.next
                i++
            }
            console.log('value not found');
            return -1
        }
    }

    reverse() {
        if (this.isEmpty()) {
            console.log('linked list is empty ');
            return
        } else {
            let prev = null
            let curr = this.head
            while (curr) {
                let next = curr.next
                curr.next=prev
                prev=curr
                curr=next

            }
            this.head=prev
        }
    }

    removeMiddle(){
        if(this.isEmpty()){
            console.log('array is empty ');
            return 
        }
            
        let fast=this.head
        let slow=this.head
        while(slow && slow.next && current.next.next){
            slow=slow.next
            fast=fast.next.next
        }

        slow.next=slow.next.next
    }

    print() {
        let curr = this.head
        let dis = ''
        while (curr) {
            dis += `${curr.value} `
            curr = curr.next
        }
        console.log('linked list ', dis);
    }
}

const list = new linkedList()

list.append(10)
list.append(20)
list.print()
list.prepend(5)
list.print()
list.prepend(2)
list.print()
list.insertIndex(30, 3)
list.print()
// list.removeIndex(2)
// list.print()
list.removeValue(2)
list.print()
list.reverse()
list.print()
list.removeMiddle()
list.print()