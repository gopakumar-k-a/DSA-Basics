class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = new Set();
        }
    }

    addEdge(vertex1, vertex2) {
        if (!this.adjacencyList[vertex1]) {
            this.addVertex(vertex1);
        }
        if (!this.adjacencyList[vertex2]) {
            this.addVertex(vertex2);
        }

        this.adjacencyList[vertex1].add(vertex2);
        this.adjacencyList[vertex2].add(vertex1);
    }

    hasEdge(vertex1, vertex2) {
        return (
            this.adjacencyList[vertex1].has(vertex2) &&
            this.adjacencyList[vertex2].has(vertex1)
        );
    }

    display() {
        for (let vertex in this.adjacencyList) {
            console.log(vertex + ' -> ' + [...this.adjacencyList[vertex]]);
        }
    }

    dfs(startVertex) {
        const stack = [startVertex];
        const visited = new Set();

        while (stack.length > 0) {
            const currentVertex = stack.pop();

            if (!visited.has(currentVertex)) {
                console.log(currentVertex);
                visited.add(currentVertex);

                for (const neighbor of this.adjacencyList[currentVertex]) {
                    if (!visited.has(neighbor)) {
                        stack.push(neighbor);
                    }
                }
            }
        }
    }

    bfs(startVertex) {
        const queue = [startVertex];
        const visited = new Set();
        visited.add(startVertex);

        while (queue.length > 0) {
            const currentVertex = queue.shift();
            console.log(currentVertex);

            for (const neighbor of this.adjacencyList[currentVertex]) {
                if (!visited.has(neighbor)) {
                    visited.add(neighbor);
                    queue.push(neighbor);
                }
            }
        }
    }
}

let graph = new Graph();

graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');

graph.addEdge('A', 'B');
graph.addEdge('B', 'A');
graph.addEdge('C', 'B');

console.log('Graph:');
graph.display();

console.log('\nDFS:');
graph.dfs('A');

console.log('\nBFS:');
graph.bfs('A');
