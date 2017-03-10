const Country = require('./Country');

module.exports = {
    create(searchAlgorithm) {
        const Romania = new Country(
            [
                'Arad', 'Zerind', 'Timisoara', 'Sibiu', 'Oradea', 'Fagaras', 'R.V.', 'Lugoj',
                'Mehadia', 'Dobreta', 'Craiova', 'Pitesti', 'Bucharest', 'Giugiu', 'Urziceni',
                'Hirsova', 'Eforie', 'Vaslui', 'Lasi', 'Neamt'
            ],
            searchAlgorithm
        );

        Romania.connectCities('Arad', 'Sibiu', {distance: 140});
        Romania.connectCities('Arad', 'Zerind', {distance: 75});
        Romania.connectCities('Arad', 'Timisoara', {distance: 118});
        Romania.connectCities('Zerind', 'Oradea', {distance: 71});
        Romania.connectCities('Oradea', 'Sibiu', {distance: 151});
        Romania.connectCities('Timisoara', 'Lugoj', {distance: 111});
        Romania.connectCities('Lugoj', 'Mehadia', {distance: 70});
        Romania.connectCities('Mehadia', 'Dobreta', {distance: 75});
        Romania.connectCities('Dobreta', 'Craiova', {distance: 120});
        Romania.connectCities('Craiova', 'R.V.', {distance: 146});
        Romania.connectCities('R.V.', 'Sibiu', {distance: 80});
        Romania.connectCities('R.V.', 'Pitesti', {distance: 97});
        Romania.connectCities('Pitesti', 'Bucharest', {distance: 111});
        Romania.connectCities('Bucharest', 'Fagaras', {distance: 211});
        Romania.connectCities('Fagaras', 'Sibiu', {distance: 99});
        Romania.connectCities('Bucharest', 'Giugiu', {distance: 90});
        Romania.connectCities('Bucharest', 'Urziceni', {distance: 85});
        Romania.connectCities('Urziceni', 'Hirsova', {distance: 98});
        Romania.connectCities('Hirsova', 'Eforie', {distance: 86});
        Romania.connectCities('Urziceni', 'Vaslui', {distance: 142});
        Romania.connectCities('Vaslui', 'Lasi', {distance: 92});
        Romania.connectCities('Lasi', 'Neamt', {distance: 87});

        return Romania;
    }
};
