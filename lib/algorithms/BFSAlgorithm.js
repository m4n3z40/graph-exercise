const AbstractAlgorithm = require('./AbstractAlgorithm');

function buildResult(parents, endNode) {
    const path = [endNode];
    let totalCost = 0;
    let targetNode = endNode;

    while ((
        (current = parents.get(targetNode)),
        (current && current.node !== null)
    )) {
        targetNode = current.node;

        path.unshift(targetNode);

        if (!isNaN(current.cost)) {
            totalCost += current.cost;
        }
    }

    return {path, totalCost};
}

module.exports = class BFSAlgorithm extends AbstractAlgorithm {
    fast(startNode, endNode, costDataAttrName = 'cost') {
        const visited = new Set([startNode]);
        const nodesToVisit = [startNode];
        const parents = new Map([[startNode, {node: null, cost: 0}]]);

        while (nodesToVisit.length > 0) {
            const node = nodesToVisit.shift();

            if (node === endNode) {
                break;
            }

            for (const [nextNode, data] of node.neighbours) {
                if (node === nextNode || visited.has(nextNode)) continue;

                visited.add(nextNode);
                parents.set(nextNode, {node, cost: data[costDataAttrName]});
                nodesToVisit.push(nextNode);
            }
        }

        return buildResult(parents, endNode);
    }
};
