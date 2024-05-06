class Node {
    constructor() {
        this.children = {}
        this.isEnd = false
    }
}

class Trie {
    constructor() {
        this.root = new Node()
    }

    insert(word) {
        let node = this.root
        for (let char of word) {
            if (!node.children[char]) {
                node.children[char] = new Node()
            }
            node = node.children[char]
        }
        node.isEnd = true
    }

    search(word) {
        let node = this.root
        for (let char of word) {
            if (!node.children[char]) {
                return false
            }
            node = node.children[char]
        }
        return node.isEnd
    }

    startWith(word) {
        let node = this.root
        for (let char of word) {
            if (!node.children[char]) {
                return false
            }
            node = node.children[char]
        }
        return true
    }

    delete(word) {
        if (!this.search(word)) {
            return null
        }

        let node = this.root;
        let nodes = []

        for (let char of word) {
            nodes.push({ char, node })
            node = node.children[char]
        }
        node.isEnd = false
        while (nodes.length > 0) {
            const { char, node } = nodes.pop()

            if (Object.keys(node.children).length === 0 && node !== this.root) {
                delete node.children[char];
            } else {
                break;
            }
        }
    }



    getAllWords() {
        let result = [];
        let currentword = '';
        traverse(this.root, currentword)
        function traverse(node, word) {
            if (node.isEnd) {
                result.push(word)
            }
            for (let char in node.children) {
                traverse(node.children[char], word + char)
            }
        }
        return result;
    }

}

let trie = new Trie();

trie.insert('gopu')
trie.insert('gopika')
trie.insert('cross')
trie.insert('crossroads')
console.log(trie.startWith('cross'));
console.log(trie.search('gopu'))
console.log(trie.getAllWords())
trie.delete('gopu')
console.log(trie.getAllWords())

console.log(trie.wordWithPrefix('go'));