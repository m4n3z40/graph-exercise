const Node = require('./Node');

module.exports = class City extends Node {
    constructor(name, neighbours) {
        super(neighbours);

        this.name = name;
    }
};
