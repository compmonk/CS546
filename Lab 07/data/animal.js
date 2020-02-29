const {ObjectId} = require('mongodb');

const collections = require("./collection");
const animals = collections.animals;
const posts = collections.posts;

async function create(newAnimal) {
    const error = new Error();
    error.http_code = 200;
    const errors = {};

    if (newAnimal === undefined || newAnimal === null) {
        errors['animal'] = "animal object not defined";
        error.http_code = 400
    } else if (typeof newAnimal !== "object") {
        errors['animal'] = "invalid type of animal";
        error.http_code = 400
    }

    if (!newAnimal.hasOwnProperty("name")) {
        errors['name'] = "missing property";
        error.http_code = 400
    }

    if (!newAnimal.hasOwnProperty("animalType")) {
        errors['animalType'] = "missing property";
        error.http_code = 400
    }

    if (error.http_code !== 200) {
        error.message = JSON.stringify({'errors': errors});
        throw error
    }

    if (!newAnimal.hasOwnProperty("likes")) {
        newAnimal["likes"] = []
    }


    try {
        const postCollection = await posts();
        for (let i = 0; i < newAnimal["likes"].length; i++) {
            let likedPost = newAnimal["likes"][i];
            if (typeof likedPost === "string") {
                let postId = ObjectId(likedPost);
                const post = await postCollection.findOne({_id: postId});
                if (post === null) {
                    errors['likes'] = `post with id ${postId} doesn't exist`;
                    error.message = JSON.stringify({'errors': errors});
                    error.http_code = 404;
                    throw error
                }
                newAnimal["likes"][i] = postId;
            }
        }
    } catch (e) {
        if (e instanceof Error) {
            errors['likes'] = errors['likes'] || e.message;
            error.http_code = error.http_code === 200 ? 400 : error.http_code;
            error.message = JSON.stringify({'errors': errors});
            throw error
        } else {
            throw e
        }
    }

    const animalCollection = await animals();

    const insertInfo = await animalCollection.insertOne(newAnimal);

    if (insertInfo.insertedCount === 0) {
        error.message = JSON.stringify({
            'error': "could not create animal",
            'object': newAnimal,
            'errors': errors
        });
        error.http_code = 400;
        throw error
    }

    const newId = insertInfo.insertedId.toString();

    return await get(newId);
}

async function getAll() {
    const animalCollection = await animals();

    return animalCollection.aggregate([
        {
            $unwind: {
                path: '$likes',
                preserveNullAndEmptyArrays: true
            }
        },
        {
            $lookup: {
                from: 'posts',
                localField: 'likes',
                foreignField: '_id',
                as: 'likes'
            }
        },
        {
            $unwind: {
                path: '$likes',
                preserveNullAndEmptyArrays: true
            }
        },
        {
            $group: {
                _id: '$_id',
                name: {$first: '$name'},
                animalType: {$first: '$animalType'},
                likes: {$addToSet: '$likes'}
            }
        },
        {
            $lookup: {
                from: 'posts',
                localField: '_id',
                foreignField: 'author',
                as: 'posts'
            }
        },
        {
            $project: {
                "name": true,
                "animalType": true,
                "likes._id": true,
                "likes.title": true,
                "posts._id": true,
                "posts.title": true,
            }
        }
    ]).toArray();
}

async function get(id) {
    const error = new Error();
    error.http_code = 200;
    const errors = {};

    if (id === undefined || id === null) {
        errors['id'] = "id is not defined";
        error.http_code = 400
    }
    if (typeof id === "string") {
        try {
            id = ObjectId(id);
        } catch (e) {
            errors['id'] = e.message;
            error.http_code = 400;
            error.message = JSON.stringify({
                errors: errors
            });
            throw error
        }
    } else if (!(id instanceof ObjectId)) {
        errors['id'] = "id is not defined";
        error.http_code = 400;
        error.message = JSON.stringify({
            errors: errors
        });
        throw error
    }

    const animalCollection = await animals();

    const animal = await animalCollection.findOne({_id: id});

    if (animal === null) {
        errors['id'] = `animal with id ${id} doesn't exists`;
        error.http_code = 404;
        error.message = JSON.stringify({
            errors: errors
        });
        throw error
    }

    const animalList = await animalCollection.aggregate([
        {
            $match: {_id: id}
        },
        {
            $unwind: {
                path: '$likes',
                preserveNullAndEmptyArrays: true
            }
        },
        {
            $lookup: {
                from: 'posts',
                localField: 'likes',
                foreignField: '_id',
                as: 'likes'
            }
        },
        {
            $unwind: {
                path: '$likes',
                preserveNullAndEmptyArrays: true
            }
        },
        {
            $group: {
                _id: '$_id',
                name: {$first: '$name'},
                animalType: {$first: '$animalType'},
                likes: {$addToSet: '$likes'}
            }
        },
        {
            $lookup: {
                from: 'posts',
                localField: '_id',
                foreignField: 'author',
                as: 'posts'
            }
        },
        {
            $project: {
                "name": true,
                "animalType": true,
                "likes._id": true,
                "likes.title": true,
                "posts._id": true,
                "posts.title": true,
            }
        }
    ]).toArray();

    return animalList[0];
}

async function remove(id) {
    const error = new Error();
    error.http_code = 200;
    const errors = {};

    if (id === undefined || id === null) {
        errors['id'] = "id is not defined";
        error.http_code = 400
    }
    if (typeof id === "string") {
        try {
            id = ObjectId(id);
        } catch (e) {
            errors['id'] = e.message;
            error.http_code = 400;
            error.message = JSON.stringify({
                errors: errors
            });
            throw error
        }
    } else if (!(id instanceof ObjectId)) {
        errors['id'] = "id is not defined";
        error.http_code = 400;
        error.message = JSON.stringify({
            errors: errors
        });
        throw error
    }

    const animalCollection = await animals();

    let animal = await animalCollection.findOne({_id: id});

    if (animal === null) {
        errors['id'] = `animal with id ${id} doesn't exists`;
        error.http_code = 404;
        error.message = JSON.stringify({
            errors: errors
        });
        throw error
    }

    animal = await get(id);

    const postCollection = await posts();
    const postList = await animalCollection.aggregate([
        {
            $match: {_id: id}
        },
        {
            $lookup: {
                from: 'posts',
                localField: '_id',
                foreignField: 'author',
                as: 'posts'
            }
        },
        {
            $unwind: '$posts'
        },
        {
            $project: {
                _id: false,
                id: '$posts._id'
            }
        }
    ]).toArray();

    postList.forEach(function(post){
        postCollection.remove({_id: post['id']})
    });

    return await animalCollection.removeOne({_id: id})
        .then(function (deletionInfo) {
            if (deletionInfo.deletedCount === 0) {
                error.message = JSON.stringify({
                    'error': "could not delete animal",
                    'id': id,
                    'errors': errors
                });
                error.http_code = 400;
                throw error
            }
            return {
                deleted: true,
                data: animal
            }
        });
}

async function update(id, newAnimal) {
    const error = new Error();
    error.http_code = 200;
    const errors = {};

    if (id === undefined || id === null) {
        errors['id'] = "id is not defined";
        error.http_code = 400
    }
    if (typeof id === "string") {
        try {
            id = ObjectId(id);
        } catch (e) {
            errors['id'] = e.message;
            error.http_code = 400;
            error.message = JSON.stringify({
                errors: errors
            });
            throw error
        }
    } else if (!(id instanceof ObjectId)) {
        errors['id'] = "id is not defined";
        error.http_code = 400;
        error.message = JSON.stringify({
            errors: errors
        });
        throw error
    }

    const animalCollection = await animals();

    const animal = await animalCollection.findOne({_id: id});

    if (animal === null) {
        errors['id'] = `animal with id ${id} doesn't exists`;
        error.http_code = 404;
        error.message = JSON.stringify({
            errors: errors
        });
        throw error
    }

    if (newAnimal === undefined || newAnimal === null) {
        errors['animal'] = "animal object not defined";
        error.http_code = 400
    } else if (typeof newAnimal !== "object") {
        errors['animal'] = "invalid type of animal";
        error.http_code = 400
    }


    return await animalCollection.updateOne({_id: id}, {$set: newAnimal})
        .then(async function (updateInfo) {
            if (updateInfo.nModified === 0) {
                error.message = JSON.stringify({
                    'error': "could not update animal",
                    'id': id,
                    'errors': errors
                });
                error.http_code = 400;
                throw error
            }
            return await get(id);
        });
}

module.exports = {
    create,
    getAll,
    get,
    remove,
    update
};