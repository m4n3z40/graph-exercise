const RomaniaFactory = require('./lib/countries/Romania');
const DFSAlgorithm = require('./lib/algorithms/DFSAlgorithm');

const Romania = RomaniaFactory.create(new DFSAlgorithm());

const {path, totalDistance} = Romania.calculatePathAndDistance('Arad', 'Bucharest');

console.log(path.map(city => city.name).join(' -> '));
console.log(`Total Distance$ ${totalDistance}`);
