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

    getSize() {
        return this.size
    }

    append(value) {
        const node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
            this.tail = node
        }else{
            this.tail.next=node
            this.tail=node 
        }
        this.size++
    }

    prepend(value){
        const node=new Node(value)
        if(this.isEmpty()){
            this.head=node
            this.tail=node
        }else{
            node.next=this.head
            this.head=node
        }
        this.size++
    }

    insertIndex(value,index){
        if(index<0 || index>this.getSize()){
            console.log('invalid index ');
            return 
        }
        if(index==0){
            this.prepend(value)
        }else{
            let prev=this.head
            for(let i=0;i<index-1;i++){
                prev=prev.next
            }
            
        }
      
    }

    print(){
        if(this.isEmpty()){
            console.log('your list is empty ');
        }else{
            let curr=this.head
            let dis=''
            while(curr){
                dis+=`${curr.value}  `
                curr=curr.next
            }
            console.log('linked list is ',dis);
        }
    }
}


const list = new linkedList()
list.append(10)
list.append(20)
list.print()
list.prepend(5)
list.prepend(3)
list.print()