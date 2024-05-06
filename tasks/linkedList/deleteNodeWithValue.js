// d.	Delete node with the value specified




class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}

class linkedList{
    constructor(){
        this.head=null
        this.tail=null
        this.size=0
    }

    isEmpty(){
        return this.size==0
    }

    append(value){
        const node=new Node(value)
        if(this.isEmpty()){
            this.head=node
            this.tail=node
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

    deleteValue(value){
        while(this.isEmpty()){
            console.log('linked list is empty');
            return
        }
        let curr=this.head
        if(value)
        
        while(curr && curr.next){
            if(curr.next.value==value){
                let deleteNode=curr.next
                curr.next=deleteNode.next
                if(curr.next==null){
                    this.tail=curr
                }
                this.size--
            }
            curr=curr.next
        }
      
    }

    print(){
        let curr=this.head
        let dis=''
        while(curr){
           dis+=`${curr.value} `
           curr=curr.next
        }

        console.log('list is ',dis);
        
    }
}

const list = new linkedList()
list.append(10)
list.append(20)
list.prepend(5)
list.prepend(2)
list.print()
list.deleteValue(20)
list.print()
list.deleteValue(10)
list.print()


