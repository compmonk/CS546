const animals = require('./data/animal');

let sashaId = "5d8d80d2b7b12a1459f47343";

async function addAnimalTest() {
    try {
        const result = await animals.create("Sasha", "Dog");
        sashaId = result._id;
        console.log("create(\"Sasha\", \"Dog\") passed successfully: ", result)
    } catch (e) {
        console.error("create(\"Sasha\", \"Dog\") failed test case: ", e)
    }
}

async function getAnimalByIdTest() {
    try {
        const result = await animals.get(sashaId);
        console.log(`get(${sashaId}) passed successfully: `, result)
    } catch (e) {
        console.error(`get(${sashaId}) failed test case: `, e)
    }
}

async function getAllAnimalsTest() {
    try {
        const result = await animals.getAll();
        console.log("getAll() passed successfully: ", result)
    } catch (e) {
        console.error("getAll() failed test case:", e)
    }
}

async function renameAnimalTest() {
    try {
        const result = await animals.rename(sashaId, "Sashita");
        console.log(`rename(${sashaId}, \"Sashita\") passed successfully:`, result)
    } catch (e) {
        console.error(`rename(${sashaId}, \"Sashita\") failed test case:`, e)
    }
}

async function removeAnimalTest() {
    try {
        const result = await animals.remove(sashaId);
        console.log(`remove(${sashaId}) passed successfully:`, result)
    } catch (e) {
        console.error(`remove(${sashaId}) failed test case:`, e)
    }
}

(async function () {
    await addAnimalTest();
    console.log();
    await getAnimalByIdTest();
    console.log();
    await getAllAnimalsTest();
    console.log();
    await renameAnimalTest();
    console.log();
    await removeAnimalTest();
}());