const AbstractAlgorithm = require('./AbstractAlgorithm');

module.exports = class DFSAlgorithm extends AbstractAlgorithm {
    fast(startNode, endNode, costDataAttrName = 'cost') {
        const visited = new Set([startNode]);
        const nodesToVisit = [{node: startNode, cost: 0}];
        const path = [];
        let totalCost = 0;

        while (nodesToVisit.length > 0) {
            const {node, cost} = nodesToVisit.pop();

            path.push(node);

            if (!isNaN(cost)) {
                totalCost += cost;
            }

            if (node === endNode) {
                break;
            }

            for (const [city, data] of node.neighbours) {
                if (visited.has(city)) continue;

                visited.add(city);
                nodesToVisit.push({node: city, cost: data[costDataAttrName]});
            }
        }

        return {path, totalCost};
    }
};
