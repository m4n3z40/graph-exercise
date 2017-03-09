const City = require('./City');
const getNearestPathByDFS = require('./getNearestPathByDFS');

function createCountry(cities) {
    return cities.reduce((allCities, city) => {
        return allCities.set(city, new City(city));
    }, new Map());
}

function connectNeighbourCities(country, cityA, cityB, data) {
    const cityAObj = country.get(cityA);
    const cityBObj = country.get(cityB);

    if (!cityAObj) {
        throw new Error(`${cityA} does not exist`);
    }

    if (!cityBObj) {
        throw new Error(`${cityB} does not exist`);
    }

    cityAObj.addNeighbour(cityBObj, data);
}

function createRomania() {
    return createCountry([
        'Arad', 'Zerind', 'Timisoara', 'Sibiu', 'Oradea', 'Fagaras', 'R.V.', 'Lugoj',
        'Mehadia', 'Dobreta', 'Craiova', 'Pitesti', 'Bucharest', 'Giugiu', 'Urziceni',
        'Hirsova', 'Eforie', 'Vaslui', 'Lasi', 'Neamt'
    ]);
}

const Romania = createRomania();

connectNeighbourCities(Romania, 'Arad', 'Sibiu', {distance: 140});
connectNeighbourCities(Romania, 'Arad', 'Zerind', {distance: 75});
connectNeighbourCities(Romania, 'Arad', 'Timisoara', {distance: 118});
connectNeighbourCities(Romania, 'Zerind', 'Oradea', {distance: 71});
connectNeighbourCities(Romania, 'Oradea', 'Sibiu', {distance: 151});
connectNeighbourCities(Romania, 'Timisoara', 'Lugoj', {distance: 111});
connectNeighbourCities(Romania, 'Lugoj', 'Mehadia', {distance: 70});
connectNeighbourCities(Romania, 'Mehadia', 'Dobreta', {distance: 75});
connectNeighbourCities(Romania, 'Dobreta', 'Craiova', {distance: 120});
connectNeighbourCities(Romania, 'Craiova', 'R.V.', {distance: 146});
connectNeighbourCities(Romania, 'R.V.', 'Sibiu', {distance: 80});
connectNeighbourCities(Romania, 'R.V.', 'Pitesti', {distance: 97});
connectNeighbourCities(Romania, 'Pitesti', 'Bucharest', {distance: 111});
connectNeighbourCities(Romania, 'Bucharest', 'Fagaras', {distance: 211});
connectNeighbourCities(Romania, 'Fagaras', 'Sibiu', {distance: 99});
connectNeighbourCities(Romania, 'Bucharest', 'Giugiu', {distance: 90});
connectNeighbourCities(Romania, 'Bucharest', 'Urziceni', {distance: 85});
connectNeighbourCities(Romania, 'Urziceni', 'Hirsova', {distance: 98});
connectNeighbourCities(Romania, 'Hirsova', 'Eforie', {distance: 86});
connectNeighbourCities(Romania, 'Urziceni', 'Vaslui', {distance: 142});
connectNeighbourCities(Romania, 'Vaslui', 'Lasi', {distance: 92});
connectNeighbourCities(Romania, 'Lasi', 'Neamt', {distance: 87});

const {path, totalDistance} = getNearestPathByDFS(Romania, 'Arad', 'Bucharest');

console.log(path.map(city => city.name).join(' -> '));
console.log(`Total Distance$ ${totalDistance}`);
