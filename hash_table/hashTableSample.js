//simple hashtable representation
class hashTable{
    constructor(capacity){
        this.table=new Array(capacity)
        this.capacity=capacity
    }

    hash(key){
        let total=0
        for(let i=0;i<key.length;i++){
            total+=key.charCodeAt(i)
        }
        return total%this.capacity
    }

    set(key,value){
        let index=this.hash(key)
        this.table[index]=value
    }

    get(key){
        let index=this.hash(key)
        return this.table[index]
    }

    display(){
        if(this.table.length==0){
            return console.log('array is empty ');
        }
        for(let i=0;i<this.table.length;i++){
            if(this.table[i]){
                console.log(i,this.table[i]);

            }
        }
    }

}

const hash=new hashTable(50)
hash.set('name','gopu')
console.log(hash.get('name'));
hash.display()
