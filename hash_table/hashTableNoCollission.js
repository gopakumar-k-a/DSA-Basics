
//hash table with collision handling
class hashTable {
    constructor(capacity) {
        this.table = new Array(capacity);
        this.capacity = capacity;
    }

    hash(key) {
        let total = 0;
        for (let i = 0; i < key.length; i++) {
            total += key.charCodeAt(i);
        }
        return total % this.capacity;
    }

    set(key, value) {
        const index = this.hash(key);
        const bucket = this.table[index];
        if (!bucket) {
            this.table[index] = [[key, value]];
        } else {
            const sameKeyItem = bucket.find(item => item[0] == key);
            if (sameKeyItem) {
                sameKeyItem[1] = value;
            } else {
                bucket.push([key, value]);
            }
        }
    }

    get(key) {
        const index = this.hash(key);
        const bucket = this.table[index];
        const sameKeyItem = bucket.find(item => item[0] == key);
        if (sameKeyItem) {
            return console.log(sameKeyItem[1]);
        }
        return null;
    }

    remove(key) {
        const index = this.hash(key);
        const bucket = this.table[index];
        const sameKeyItem = bucket.find(item => item[0] == key);
        if (sameKeyItem) {
            bucket.splice(bucket.indexOf(sameKeyItem), 1);
        } else {
            return null;
        }
    }

    display() {
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i]) {
                console.log(i, this.table[i]);
            }
        }
    }
}

const myHash = new hashTable(50);
myHash.set('name', 'gopu');
myHash.set('mane', 'bilal');
myHash.display();
myHash.get('name');
myHash.get('mane');
