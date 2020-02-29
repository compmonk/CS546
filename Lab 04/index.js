const animals = require('./data/animal');

let sashaId = null;
let lucyId = null;
let dukeId = null;

async function addSasha() {
    try {
        const result = await animals.create("Sasha", "Dog");
        sashaId = result._id;
        console.log("create(\"Sasha\", \"Dog\") passed successfully: ", result)
    } catch (e) {
        console.error("create(\"Sasha\", \"Dog\") failed test case:", e)
    }
}

async function getSasha() {
    try {
        const result = await animals.get(sashaId);
        console.log("get(sashaId) passed successfully: ", result)
    } catch (e) {
        console.error("get(sashaId) failed test case:", e)
    }
}

async function addLucy() {
    try {
        const result = await animals.create("Lucy", "Dog");
        lucyId = result._id;
        console.log("create(\"Lucy\", \"Dog\") passed successfully: ", result)
    } catch (e) {
        console.error("create(\"Lucy\", \"Dog\") failed test case:", e)
    }
}

async function getAll() {
    try {
        const result = await animals.getAll();
        console.log("getAll() passed successfully: ", result)
    } catch (e) {
        console.error("getAll() failed test case:", e)
    }
}

async function addDuke() {
    try {
        const result = await animals.create("Duke", "Walrus");
        dukeId = result._id;
        console.log("create(\"Duke\", \"Walrus\") passed successfully: ", result)
    } catch (e) {
        console.error("create(\"Duke\", \"Walrus\") failed test case:", e)
    }
}

async function getDuke() {
    try {
        const result = await animals.get(dukeId);
        console.log("get(dukeId) passed successfully: ", result)
    } catch (e) {
        console.error("get(dukeId) failed test case:", e)
    }
}

async function renameSasha() {
    try {
        const result = await animals.rename(sashaId, "Sashita");
        console.log("rename(sashaId, \"Sashita\") passed successfully: ", result)
    } catch (e) {
        console.error("rename(sashaId, \"Sashita\") failed test case:", e)
    }
}

async function removeLucy() {
    try {
        const result = await animals.remove(lucyId);
        console.log("remove(lucyId) passed successfully: ", result)
    } catch (e) {
        console.error("remove(lucyId) failed test case:", e)
    }
}

(async function () {
    await addSasha();
    console.log();
    await getSasha();
    console.log();
    await addLucy();
    console.log();
    await getAll();
    console.log();
    await addDuke();
    console.log();
    await getDuke();
    console.log();
    await renameSasha();
    console.log();
    await getSasha();
    console.log();
    await removeLucy();
    console.log();
    await getAll();
}());