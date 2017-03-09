function getNearestPath(origin, destiny) {
    const visited = new Set([origin]);
    const nodesToVisit = [origin];
    const path = [];
    let totalDistance = 0;

    while (nodesToVisit.length > 0) {
        const currentNode = nodesToVisit.shift();
        path.push(currentNode);

        if (currentNode === destiny) {
            break;
        }

        for(const [city, {distance}] of currentNode.neighbours) {
            if (visited.has(city)) continue;

            totalDistance += distance;

            visited.add(city);
            nodesToVisit.push(city);
        }
    }

    return {path, totalDistance};
}

module.exports = function getNearestPathByDFS(country, origin, destiny) {
    const originObj = country.get(origin);
    const destinyObj = country.get(destiny);

    if (!originObj) {
        throw new Error(`${originObj} does not exist`);
    }

    if (!destinyObj) {
        throw new Error(`${destinyObj} does not exist`);
    }

    return getNearestPath(originObj, destinyObj);
};
