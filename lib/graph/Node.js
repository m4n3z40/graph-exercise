module.exports = class Node {
    constructor(neighbours = []) {
        this.neighbours = new Map;

        neighbours.forEach(({node, data}) => this.addNeighbour(node, data));
    }

    addNeighbour(node, data = null) {
        this.neighbours.set(node, data);
        node.neighbours.set(this, data);

        return this;
    }

    removeNeighbour(node) {
        this.neighbours.delete(node);

        return this;
    }
};
