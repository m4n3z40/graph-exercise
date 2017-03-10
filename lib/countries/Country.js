const City = require('../graph/City');

module.exports = class Country {
    constructor(cities = [], searchAlgorithm = null) {
        this.cities = new Map();
        this.searchAlgorithm = searchAlgorithm;

        cities.forEach((city) => this.cities.set(city, new City(city)));
    }

    connectCities(cityA, cityB, data) {
        const cityAObj = this.cities.get(cityA);
        const cityBObj = this.cities.get(cityB);

        if (!cityAObj) {
            throw new Error(`${cityA} does not exist`);
        }

        if (!cityBObj) {
            throw new Error(`${cityB} does not exist`);
        }

        cityAObj.addNeighbour(cityBObj, data);
    }

    calculatePathAndDistance(from, to) {
        if (!this.searchAlgorithm) {
            throw new Error('No search algorithm was provided')
        }

        const origin = this.cities.get(from);
        const destiny = this.cities.get(to);

        if (!origin) {
            throw new Error(`${origin} does not exist`);
        }

        if (!destiny) {
            throw new Error(`${destiny} does not exist`);
        }

        const {path, totalCost} = this.searchAlgorithm.fast(origin, destiny, 'distance');

        return {path, totalDistance: totalCost};
    }
};
