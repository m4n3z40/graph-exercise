const RomaniaFactory = require('./lib/countries/Romania');
const BFSAlgorithm = require('./lib/algorithms/BFSAlgorithm');
const DFSAlgorithm = require('./lib/algorithms/DFSAlgorithm');

function resultsForAlgorithm(algorithm) {
    const Romania = RomaniaFactory.create(algorithm);

    return Romania.calculatePathAndDistance('Arad', 'Bucharest');
}

function logResultsFor(title, {path, totalDistance}) {
    console.log(
`===============================================
${title}
Path: ${path.map(city => city.name).join(' -> ')}
Total Distance: ${totalDistance}
===============================================
    `);
}

function logBestResult(bestResultName, bestResult, worstResult) {
    console.log(
`${bestResultName} was the best result! 
Total distance: ${bestResult.totalDistance}
Diff: ${bestResult.totalDistance - worstResult.totalDistance}
    `);
}


console.time('BFS Algorithm time');
const BFSResults = resultsForAlgorithm(new BFSAlgorithm);
console.timeEnd('BFS Algorithm time');

console.time('DFS Algorithm time');
const DFSResults = resultsForAlgorithm(new DFSAlgorithm);
console.timeEnd('DFS Algorithm time');

console.log('');

logResultsFor('BFS Algorithm', BFSResults);
logResultsFor('DFS Algorithm', DFSResults);

if (BFSResults.totalDistance < DFSResults.totalDistance) {
    logBestResult('BFS', BFSResults, DFSResults);
} else {
    logBestResult('DFS', BFSResults, DFSResults);
}
