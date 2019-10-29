const axios = require("axios");

async function getPeople() {
    const {data} = await axios.get('https://gist.githubusercontent.com/robherley/5112d73f5c69a632ef3ae9b7b3073f78/raw/24a7e1453e65a26a8aa12cd0fb266ed9679816aa/people.json');
    return data // this will be the array of people
}

async function getPersonById(id) {
    const error = new Error();
    error.http_code = 200;
    const errors = {};

    if (id === undefined || id === null) {
        errors['id'] = "id is not defined";
        error.http_code = 400
    } else if (typeof id !== "number") {
        errors['id'] = "Invalid argument type";
        error.http_code = 400
    }

    if (error.http_code !== 200) {
        error.message = JSON.stringify({'errors': errors});
        throw error
    }

    const people = await getPeople();

    let person = people.find((person) => (person.id === id));

    if (person === undefined || person === null) {
        errors['id'] = `person with id ${id} not found`;
        error.http_code = 404;
        error.message = JSON.stringify({'errors': errors});
        throw error
    }

    return person
}

async function getPersonByName(personName) {
    const error = new Error();
    error.http_code = 200;
    const errors = {};

    if (personName === undefined || personName === null) {
        errors['personName'] = "personName is not defined";
        error.http_code = 400
    } else if (typeof personName !== "string") {
        errors['personName'] = "invalid data type";
        error.http_code = 400
    } else if (personName === "") {
        errors['personName'] = "personName is empty";
        error.http_code = 400
    }

    if (error.http_code !== 200) {
        error.message = JSON.stringify({'errors': errors});
        throw error
    }

    const people = await getPeople();

    const peopleFound = [];
    people.forEach(function (person) {
        if (person.firstName.includes(personName) || person.lastName.includes(personName)) {
            peopleFound.push(person)
        }
    });

    return peopleFound.slice(0, 20);
}

module.exports = {
    getPeople,
    getPersonById,
    getPersonByName
};