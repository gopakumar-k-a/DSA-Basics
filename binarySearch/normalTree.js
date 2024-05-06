class Node {
    constructor(value) {
        this.value = value;
        this.children = [];
    }
}

class Tree {
    constructor() {
        this.root = null;
    }

    isEmpty() {
        return this.root === null;
    }

    insert(value, parentValue) {
        const newNode = new Node(value);

        if (this.isEmpty()) {
            this.root = newNode;
        } else {
            const parentNode = this.findNode(parentValue, this.root);
            if (parentNode) {
                parentNode.children.push(newNode);
            } else {
                console.error(`Parent node with value ${parentValue} not found.`);
            }
        }
    }

    findNode(value, startNode = null) {
        if (!startNode) {
            startNode = this.root;
        }

        if (!startNode) {
            return null;
        }

        if (startNode.value === value) {
            return startNode;
        }

        for (const child of startNode.children) {
            const foundNode = this.findNode(value, child);
            if (foundNode) {
                return foundNode;
            }
        }

        return null;
    }

   
}


const tree = new Tree();

tree.insert(1);
tree.insert(2, 1);
tree.insert(3, 1);
tree.insert(4, 2);
tree.insert(5, 2);

console.log(tree);
