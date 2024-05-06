// g.	Write a program to remove duplicates in a sorted singly linked list

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
    removeDuplicate(){
        let curr=this.head
        while(curr && curr.next){
            if(curr.value==curr.next.value){
                let removeNode=curr.next
                curr.next=removeNode.next
                if(curr.next==null){
                    this.tail=curr
                }
            }else{
                curr=curr.next
            }
        }
    }

    print() {
        let curr = this.head
        let dis = ''
        while (curr) {
            dis += `${curr.value} `
            curr = curr.next
        }
        console.log('linked list is ',dis);
    }
}

const list=new linkedList()
list.append(10)
list.append(10)
list.append(20)
list.append(30)
list.append(30)
list.append(30)
list.append(40)
list.print()
list.removeDuplicate()
list.print()
