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

            for (const [nextNode, data] of node.neighbours) {
                if (visited.has(nextNode)) continue;

                visited.add(nextNode);
                nodesToVisit.push({node: nextNode, cost: data[costDataAttrName]});
            }
        }

        return {path, totalCost};
    }
};
