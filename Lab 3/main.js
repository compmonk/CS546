const axios = require("axios");
const isIp = require("is-ip");

async function getPeople() {
    const {data} = await axios.get('https://gist.githubusercontent.com/robherley/5112d73f5c69a632ef3ae9b7b3073f78/raw/24a7e1453e65a26a8aa12cd0fb266ed9679816aa/people.json');
    return data // this will be the array of people
}

async function getWeatherDetails() {
    const {data} = await axios.get('https://gist.githubusercontent.com/robherley/1b950dc4fbe9d5209de4a0be7d503801/raw/eee79bf85970b8b2b80771a66182aa488f1d7f29/weather.json');
    return data // this will be the array of weather information
}

async function getWorkDetails() {
    const {data} = await axios.get('https://gist.githubusercontent.com/robherley/61d560338443ba2a01cde3ad0cac6492/raw/8ea1be9d6adebd4bfd6cf4cc6b02ad8c5b1ca751/work.json');
    return data // this will be the array of work information
}

async function getPersonById(index) {
    if (index === undefined || index === null) {
        throw "Argument index is not defined"
    } else if (typeof index !== "number") {
        throw "Invalid argument type : index"
    }


    const people = await getPeople();

    let person = people.find((person) => (person.id === index));

    if (person) {
        return person
    }

    throw "person with id " + index + " not found"
}

async function lexIndex(index) {
    if (index === undefined || index === null) {
        throw "Argument index is not defined"
    } else if (typeof index !== "number") {
        throw "Invalid argument type : index"
    }

    const people = await getPeople();

    people.sort((a, b) => (a.lastName < b.lastName ? -1 : 1));

    if (index < 0 || people.length < index) {
        throw "index out of bounds"
    }

    return people[index].firstName + " " + people[index].lastName;
}

async function firstNameMetrics() {
    const people = await getPeople();

    let totalLetters = 0; //sum of all the letters in all the firstNames
    let totalVowels = 0; //sum of all the vowels in all the firstNames
    let totalConsonants = 0; //sum of all the consonants in all the firstNames
    let longestName = 0; // the longest firstName in the list,
    let shortestName = 0; //the shortest firstName in the list

    people.forEach(function (person) {
        if (!person.hasOwnProperty("firstName")) {
            return;
        }
        totalLetters += person.firstName.length;
        totalVowels += getNumberOfVowel(person.firstName);
        totalConsonants += getNumberOfConsonants(person.firstName);
        if (longestName === 0 || person.firstName.length > longestName.length) {
            longestName = person.firstName;
        }
        if (shortestName === 0 || person.firstName.length < shortestName.length) {
            shortestName = person.firstName;
        }
    });

    return {
        "totalLetters": totalLetters,
        "totalVowels": totalVowels,
        "totalConsonants": totalConsonants,
        "longestName": longestName,
        "shortestName": shortestName
    }
}

async function shouldTheyGoOutside(firstName, lastName) {
    const person = await getPersonByName(firstName, lastName);

    const weatherDetails = await getWeatherDetails();

    let weatherDetail = weatherDetails.find((weatherDetail) => (weatherDetail.zip === person.zip));

    if (weatherDetail.temp >= 34) {
        return "Yes, " + firstName + " should go outside."
    } else {
        return "No, " + firstName + " should not go outside."
    }

}

async function whereDoTheyWork(firstName, lastName) {

    const person = await getPersonByName(firstName, lastName);

    const workDetails = await getWorkDetails();

    let workDetail = workDetails.find((workDetail) => (workDetail.ssn === person.ssn));

    let result = firstName + " " + lastName + " - " + workDetail.jobTitle + " at " + workDetail.company

    if (workDetail.willBeFired) {
        result += ". They will be fired."
    } else {
        result += ". They will not be fired."
    }

    return result
}

async function findTheHacker(ip) {
    if (ip === undefined || ip === null) {
        throw "Argument ip is not defined"
    } else if (typeof ip !== "string") {
        throw "Invalid argument type : firstName"
    } else if (!isIp(ip)) {
        throw "Invalid IP address format type"
    }

    const workDetails = await getWorkDetails();

    let workDetail = workDetails.find((workDetail) => (workDetail.ip === ip));

    if (!workDetail) {
        throw "IP address " + ip + " not found"
    }

    const people = await getPeople();

    let person = people.find((person) => (person.ssn === workDetail.ssn));

    return person.firstName + " " + person.lastName + " is the hacker"

}

async function getPersonByName(firstName, lastName) {
    if (firstName === undefined || firstName === null) {
        throw "Argument firstName is not defined"
    } else if (typeof firstName !== "string") {
        throw "Invalid argument type : firstName"
    }

    if (lastName === undefined || lastName === null) {
        throw "Argument lastName is not defined"
    } else if (typeof lastName !== "string") {
        throw "Invalid argument type : lastName"
    }

    const people = await getPeople();

    let person = people.find((person) => (person.firstName === firstName && person.lastName === lastName));

    if (!person) {
        throw firstName + " " + lastName + " not found"
    }

    return person;
}

function getNumberOfVowel(string) {
    let s = 0;

    for (let i = 0; i < string.length; i++) {
        if ("aeiou".includes(string[i])) {
            s++;
        }
    }

    return s;
}

function getNumberOfConsonants(string) {
    return string.length - getNumberOfVowel(string);
}

module.exports = {
    getPeople,
    getWeatherDetails,
    getWorkDetails,
    getPersonById,
    lexIndex,
    firstNameMetrics,
    shouldTheyGoOutside,
    whereDoTheyWork,
    findTheHacker,
    getPersonByName,
    getNumberOfConsonants,
    getNumberOfVowel,
};