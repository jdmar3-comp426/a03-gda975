import mpg_data from "./data/mpg_data.js";

/*
mpg_data is imported for you but that is for testing purposes only. All of the functions should use
a car_data param that is supplied as the first parameter.

As you write these functions notice how they could possibly be chained together to solve more complicated
queries.
 */

/**
 * @param {array} car_data - an instance of mpg_data that should be used for filtering.
 * @param minHorsepower {number}
 * @param minTorque {number}
 *
 * @return {array} An array of car objects with horsepower >= minHorsePower and torque >= minTorque
 * sorted by horsepower in descending order.
 *
 */
export function searchHighPower(car_data, minHorsepower, minTorque) {
    for (let i = car_data.length - 1; i >= 0; i--) {
        if (car_data[i].horsepower < minHorsepower || car_data[i].torque < minTorque) {
            car_data.splice(i, 1);
        }
    }
    car_data.sort((a, b) => {
        if (a.horsepower >= b.horsepower) {
            return 1;
        } else {
            return -1;
        }
    })
    return car_data;
}


/**
 * @param {array} car_data
 * @param minCity
 * @param minHighway
 *
 *
 * @return {array} An array of car objects with highway_mpg >= minHighway and city_mpg >= minCity
 * sorted by highway_mpg in descending order
 *
 */
export function searchMpg(car_data, minCity, minHighway) {
    for (let i = car_data.length - 1; i >= 0; i--) {
        if (car_data[i].highway_mpg < minHighway || car_data[i].city_mpg < minCity) {
            car_data.splice(i, 1);
        }
    }
    car_data.sort((a, b) => {
        if (a.highway_mpg >= b.highway_mpg) {
            return 1;
        } else {
            return -1;
        }
    })
    return car_data;
}


/**
 * Find all cars where 'id' contains the search term below.
 * Sort the results so that if the term appears earlier in the string
 * it will appear earlier in the list. Make sure searching and sorting ignores case.
 * @param car_data
 * @param searchTerm A string to that is used for searching
 * @returns {[]} array of cars
 */
export function searchName(car_data, searchTerm) {
    car_data = car_data.filter(function (term) {
        return term.id.toLowerCase().includes((searchTerm.toLowerCase()));
    });
    
    car_data.sort((a, b) => {
        if (a.id >= b.id) {
            return 1;
        } else {
            return -1;
        }
    })
    return car_data;
}


/**
 * Find all cars made in the years asked for.
 * Sort the results by year in descending order.
 *
 * @param car_data
 * @param {number[]} years - array of years to be included in the results e.g. [2010, 2012]
 * @returns {[]} an array of car objects
 */
export function searchByYear(car_data, years) {
    let array = [];
    for (let i = car_data.length - 1; i >= 0; i--) {
        for (let j = 0; j < years.length; j++) {
            if (car_data[i].year == years[j]) {
                array.push(car_data[i]);
            }
        }
    }
    array.sort((a, b) => {
        if (a.year >= b.year) {
            return 1;
        } else {
            return -1;
        }
    })
    return array;
}
