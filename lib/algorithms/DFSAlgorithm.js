const AbstractAlgorithm = require('./AbstractAlgorithm');

module.exports = class DFSAlgorithm extends AbstractAlgorithm {
    fast(startNode, endNode, costDataAttrName = 'cost') {
        const visited = new Set([startNode]);
        const nodesToVisit = [startNode];
        const path = [];
        let totalCost = 0;

        while (nodesToVisit.length > 0) {
            const currentNode = nodesToVisit.shift();
            path.push(currentNode);

            if (currentNode === endNode) {
                break;
            }

            for(const [city, data] of currentNode.neighbours) {
                if (visited.has(city)) continue;

                const cost = data[costDataAttrName];

                if (!isNaN(cost)) {
                    totalCost += data[costDataAttrName];
                }

                visited.add(city);
                nodesToVisit.push(city);
            }
        }

        return {path, totalCost};
    }
};
