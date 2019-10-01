const {ObjectId} = require('mongodb');

const collections = require("./collection");
const animals = collections.animals;

async function create(name, animalType) {
    if (name === undefined || name === null) {
        throw "Argument name is not defined"
    } else if (typeof name !== "string") {
        throw "Invalid argument type : name"
    }

    if (animalType === undefined || animalType === null) {
        throw "Argument animalType is not defined"
    } else if (typeof animalType !== "string") {
        throw "Invalid argument type : animalType"
    }

    const newAnimal = {
        name: name,
        animalType: animalType
    };

    const animalCollection = await animals();

    const insertInfo = await animalCollection.insertOne(newAnimal);

    if (insertInfo.insertedCount === 0) {
        throw `Could not add ${newAnimal}`
    }

    const newId = insertInfo.insertedId.toString();

    return await get(newId);
}

async function getAll() {
    const animalCollection = await animals();

    return animalCollection.find({}).toArray();
}

async function get(id) {
    if (id === undefined || id === null) {
        throw "Argument id is not defined"
    }
    if (typeof id === "string") {
        id = ObjectId(id);
    } else if (!(id instanceof ObjectId)) {
        throw "Invalid argument type : id";
    }

    const animalCollection = await animals();

    const animal = await animalCollection.findOne({_id: id});

    if (animal === null) {
        throw `No animal with id: ${id} present`
    }
    return animal
}

async function remove(id) {
    if (id === undefined || id === null) {
        throw "Argument id is not defined"
    }
    if (typeof id === "string") {
        id = ObjectId(id);
    } else if (!(id instanceof ObjectId)) {
        throw "Invalid argument type : id";
    }

    const animalCollection = await animals();

    const animal = await animalCollection.findOne({_id: id});

    if (animal === null) {
        throw `No animal with id: ${id} present`
    }

    return await animalCollection.removeOne({_id: id})
        .then(function (deletionInfo) {
            if (deletionInfo.deletedCount === 0) {
                throw `No animal with id: ${id} present`
            }
            return {
                deleted: true,
                data: animal
            }
        });
}

async function rename(id, newName) {
    if (id === undefined || id === null) {
        throw "Argument id is not defined"
    }
    if (typeof id === "string") {
        id = ObjectId(id);
    } else if (!(id instanceof ObjectId)) {
        throw "Invalid argument type : id";
    }


    if (newName === undefined || newName === null) {
        throw "Argument newName is not defined"
    } else if (typeof newName !== "string") {
        throw "Invalid argument type : newName"
    }

    id = ObjectId(id);

    const animalCollection = await animals();

    const animal = await animalCollection.findOne({_id: id});

    if (animal === null) {
        throw `No animal with id: ${id} present`
    }

    return await animalCollection.updateOne({_id: id}, {$set: {name: newName}})
        .then(async function (updateInfo) {
            if (updateInfo.nModified === 0) {
                throw "Could not update animal successfully";
            }
            return await get(id);
        });
}

module.exports = {
    create,
    getAll,
    get,
    remove,
    rename
};