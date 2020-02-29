main = require("./main");

async function getPeopleTests() {
    const people = await main.getPeople();
    console.log("getPeople() passed successfully, people.json has " + people.length + " records");
}

async function getWeatherDetailsTests() {
    const weatherDetails = await main.getWeatherDetails();
    console.log("getWeatherDetails() passed successfully, weather.json has " + weatherDetails.length + " records");
}

async function getWorkDetailsTests() {
    const workDetails = await main.getWorkDetails();
    console.log("getWorkDetails() passed successfully, work.json has " + workDetails.length + " records");
}

async function getPersonByIdTests() {
    try {
        const result = await main.getPersonById(131);
        console.log("getPersonById(131) passed successfully:", result);
    } catch (e) {
        console.error("getPersonById(131) failed test case:", e)
    }


    try {
        const result = await main.getPersonById();
        console.log("getPersonById() did not error:", result);
    } catch (e) {
        console.error("getPersonById() failed successfully:", e)
    }


    try {
        const result = await main.getPersonById(-10);
        console.log("getPersonById(-10) did not error:", result);
    } catch (e) {
        console.error("getPersonById(-10) failed successfully:", e)
    }

    try {
        const result = await main.getPersonById(0);
        console.log("getPersonById(0) did not error:", result);
    } catch (e) {
        console.error("getPersonById(0) failed successfully:", e)
    }

    try {
        const result = await main.getPersonById(1000);
        console.log("getPersonById(1000) did not error:", result);
    } catch (e) {
        console.error("getPersonById(1000) failed successfully:", e)
    }
}


async function lexIndexTests() {
    try {
        const result = await main.lexIndex(2);
        console.log("lexIndex(2) passed successfully:", result);
    } catch (e) {
        console.error("lexIndex(2) failed test case:", e)
    }


    try {
        const result = await main.lexIndex();
        console.log("lexIndex() did not error:", result);
    } catch (e) {
        console.error("lexIndex() failed successfully:", e)
    }


    try {
        const result = await main.lexIndex(-10);
        console.log("lexIndex(-10) did not error:", result);
    } catch (e) {
        console.error("lexIndex(-10) failed successfully:", e)
    }

    try {
        const result = await main.lexIndex(1000);
        console.log("lexIndex(1000): did not error", result);
    } catch (e) {
        console.error("lexIndex(1000) failed successfully:", e)
    }
}

async function firstNameMetricsTests() {
    const result = await main.firstNameMetrics();
    console.log("firstNameMetrics() passed successfully:", result)
}

async function shouldTheyGoOutsideTests() {
    try {
        const result = await main.shouldTheyGoOutside("Scotty", "Barajaz");
        console.log("shouldTheyGoOutside(\"Scotty\", \"Barajaz\") passed successfully:", result);
    } catch (e) {
        console.error("shouldTheyGoOutside(\"Scotty\", \"Barajaz\") failed test case", e)
    }

    try {
        const result = await main.shouldTheyGoOutside("Calli", "Ondrasek");
        console.log("shouldTheyGoOutside(\"Calli\", \"Ondrasek\") passed successfully:", result);
    } catch (e) {
        console.error("shouldTheyGoOutside(\"Calli\", \"Ondrasek\") failed test case:", e)
    }

    try {
        const result = await main.shouldTheyGoOutside();
        console.log("shouldTheyGoOutside() did not error:", result);
    } catch (e) {
        console.error("shouldTheyGoOutside() failed successfully:", e)
    }


    try {
        const result = await main.shouldTheyGoOutside("Bob");
        console.log("shouldTheyGoOutside(\"Bob\") did not error:", result);
    } catch (e) {
        console.error("shouldTheyGoOutside(\"Bob\") failed successfully:", e)
    }

    try {
        const result = await main.shouldTheyGoOutside("Bob", "Smith");
        console.log("shouldTheyGoOutside(\"Bob\", \"Smith\") did not error:", result);
    } catch (e) {
        console.error("shouldTheyGoOutside(\"Bob\", \"Smith\") failed successfully:", e)
    }
}

async function whereDoTheyWorkTests() {
    try {
        const result = await main.whereDoTheyWork("Demetra", "Durrand");
        console.log("whereDoTheyWork(\"Demetra\", \"Durrand\") passed successfully:", result);
    } catch (e) {
        console.error("whereDoTheyWork(\"Demetra\", \"Durrand\") failed test case", e)
    }

    try {
        const result = await main.whereDoTheyWork("Hank", "Tarling");
        console.log("whereDoTheyWork(\"Hank\", \"Tarling\") passed successfully:", result);
    } catch (e) {
        console.error("whereDoTheyWork(\"Hank\", \"Tarling\") failed test case:", e)
    }

    try {
        const result = await main.whereDoTheyWork();
        console.log("whereDoTheyWork() did not error:", result);
    } catch (e) {
        console.error("whereDoTheyWork() failed successfully:", e)
    }


    try {
        const result = await main.whereDoTheyWork("Bob");
        console.log("whereDoTheyWork(\"Bob\") did not error:", result);
    } catch (e) {
        console.error("whereDoTheyWork(\"Bob\") failed successfully:", e)
    }

    try {
        const result = await main.whereDoTheyWork("Bob", "Smith");
        console.log("whereDoTheyWork(\"Bob\", \"Smith\") did not error:", result);
    } catch (e) {
        console.error("whereDoTheyWork(\"Bob\", \"Smith\") failed successfully:", e)
    }
}

async function findTheHackerTests() {
    try {
        const result = await main.findTheHacker("79.222.167.180");
        console.log("findTheHacker(\"79.222.167.180\") passed successfully:", result);
    } catch (e) {
        console.error("findTheHacker(\"79.222.167.180\") failed test case", e)
    }

    try {
        const result = await main.findTheHacker("79.222.167.181");
        console.log("findTheHacker(\"79.222.167.180\") passed successfully:", result);
    } catch (e) {
        console.error("findTheHacker(\"79.222.167.180\") failed test case", e)
    }

    try {
        const result = await main.findTheHacker("foobar");
        console.log("findTheHacker(\"foobar\") did not error:", result);
    } catch (e) {
        console.error("findTheHacker(\"foobar\") failed successfully:", e)
    }

    try {
        const result = await main.findTheHacker();
        console.log("findTheHacker() did not error:", result);
    } catch (e) {
        console.error("findTheHacker() failed successfully:", e)
    }

    try {
        const result = await main.findTheHacker("256:256:256:256");
        console.log("findTheHacker(\"256:256:256:256\") did not error:", result);
    } catch (e) {
        console.error("findTheHacker(\"256:256:256:256\") failed successfully:", e)
    }
}


function getNumberOfVowelTest() {

    console.assert(main.getNumberOfVowel("") === 0,
        "getNumberOfVowel(\"\") failed");

    console.assert(main.getNumberOfVowel("aeiou") === 5,
        "getNumberOfVowel(\"aeiou\") failed");

    console.assert(main.getNumberOfVowel("aeiouaeiou") === 10,
        "getNumberOfVowel(\"aeiouaeiou\") failed");
}

function getNumberOfConsonantsTests() {

    console.assert(main.getNumberOfConsonants("") === 0,
        "getNumberOfConsonants(\"aeiou\") failed");

    console.assert(main.getNumberOfConsonants("abcdefghijklmnopqrstuvwxyz") === 21,
        "getNumberOfConsonants(\"abcdefghijklmnopqrstuvwxyz\") failed");

    console.assert(main.getNumberOfConsonants("abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz") === 42,
        "getNumberOfConsonants(\"abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz\") failed");
}

async function getPersonByNameTests() {
    try {
        const result = await main.getPersonByName("Demetra", "Durrand");
        console.log("getPersonByName(\"Demetra\", \"Durrand\") passed successfully:", result);
    } catch (e) {
        console.error("getPersonByName(\"Demetra\", \"Durrand\") failed test case", e)
    }

    try {
        const result = await main.getPersonByName("Hank", "Tarling");
        console.log("getPersonByName(\"Hank\", \"Tarling\") passed successfully:", result);
    } catch (e) {
        console.error("getPersonByName(\"Hank\", \"Tarling\") failed test case:", e)
    }

    try {
        const result = await main.getPersonByName();
        console.log("getPersonByName() did not error:", result);
    } catch (e) {
        console.error("getPersonByName() failed successfully:", e)
    }


    try {
        const result = await main.getPersonByName("Bob");
        console.log("getPersonByName(\"Bob\") did not error:", result);
    } catch (e) {
        console.error("getPersonByName(\"Bob\") failed successfully:", e)
    }

    try {
        const result = await main.getPersonByName("Bob", "Smith");
        console.log("getPersonByName(\"Bob\", \"Smith\") did not error:", result);
    } catch (e) {
        console.error("getPersonByName(\"Bob\", \"Smith\") failed successfully:", e)
    }
}

getPeopleTests();
getWeatherDetailsTests();
getWorkDetailsTests();
getPersonByIdTests();
lexIndexTests();
firstNameMetricsTests();
shouldTheyGoOutsideTests();
whereDoTheyWorkTests();
findTheHackerTests();
getNumberOfVowelTest();
getNumberOfConsonantsTests();
getPersonByNameTests();