module.exports = class AbstractAlgorithm {
    fast(startNode, endNode, costDataAttrName = 'cost') {
        throw new Error('fast() method is not implemented.');
    }

    best(startNode, endNode, costDataAttrName = 'cost') {
        throw new Error('best() method is not implemented.');
    }
};
