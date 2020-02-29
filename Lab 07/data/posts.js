const {ObjectId} = require('mongodb');

const collections = require("./collection");
const posts = collections.posts;
const animals = collections.animals;

async function create(newPost) {
    const error = new Error();
    error.http_code = 200;
    const errors = {};

    if (newPost === undefined || newPost === null) {
        errors['post'] = "post object not defined";
        error.http_code = 400
    } else if (typeof newPost !== "object") {
        errors['post'] = "invalid type of post";
        error.http_code = 400
    }

    if (!newPost.hasOwnProperty("title")) {
        errors['title'] = "missing property";
        error.http_code = 400
    }

    if (!newPost.hasOwnProperty("author")) {
        errors['author'] = "missing property";
        error.http_code = 400
    }

    if (error.http_code !== 200) {
        error.message = JSON.stringify({'errors': errors});
        throw error
    }

    try {
        let authorId = ObjectId(newPost["author"]);
        const animalCollection = await animals();
        const animal = await animalCollection.findOne({_id: authorId});
        if (animal === null) {
            errors['author'] = `author with id ${authorId} doesn't exist`;
            error.message = JSON.stringify({'errors': errors});
            error.http_code = 404;
            throw error
        }
        newPost["author"] = authorId;
    } catch (e) {
        if (e instanceof Error) {
            errors['author'] = errors['author'] || e.message;
            error.http_code = error.http_code === 200 ? 400 : error.http_code;
            error.message = JSON.stringify({'errors': errors});
            throw error
        } else {
            throw e
        }
    }

    if (!newPost.hasOwnProperty("content")) {
        errors['content'] = "missing property";
        error.message = JSON.stringify({'errors': errors});
        error.http_code = 400;
        throw error
    }

    const postCollection = await posts();

    const insertInfo = await postCollection.insertOne(newPost);

    if (insertInfo.insertedCount === 0) {
        error.message = JSON.stringify({
            'error': "could not create post",
            'object': newPost,
            'errors': errors
        });
        error.http_code = 400;
        throw error
    }

    const newId = insertInfo.insertedId.toString();

    return await get(newId);
}

async function getAll() {
    const postCollection = await posts();

    return postCollection.aggregate([
        {
            $lookup: {
                from: 'animals',
                localField: 'author',
                foreignField: '_id',
                as: 'author'
            }
        },
        {
            $unwind: '$author'
        },
        {
            $project: {
                "title": true,
                "content": true,
                "author._id": true,
                "author.name": true
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

    const postCollection = await posts();

    const post = await postCollection.findOne({_id: id});

    if (post === null) {
        errors['id'] = `post with id ${id} doesn't exists`;
        error.http_code = 404;
        error.message = JSON.stringify({
            errors: errors
        });
        throw error
    }

    const postList = await postCollection.aggregate([
        {
            $match: {_id: id}
        },
        {
            $lookup: {
                from: 'animals',
                localField: 'author',
                foreignField: '_id',
                as: 'author'
            }
        },
        {
            $unwind: '$author'
        },
        {
            $project: {
                "title": true,
                "content": true,
                "author._id": true,
                "author.name": true
            }
        }
    ]).toArray();

    return postList[0]
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

    const postCollection = await posts();

    const post = await postCollection.findOne({_id: id});

    if (post === null) {
        errors['id'] = `post with id ${id} doesn't exists`;
        error.http_code = 404;
        error.message = JSON.stringify({
            errors: errors
        });
        throw error
    }

    return await postCollection.removeOne({_id: id})
        .then(function (deletionInfo) {
            if (deletionInfo.deletedCount === 0) {
                error.message = JSON.stringify({
                    'error': "could not delete post",
                    'id': id,
                    'errors': errors
                });
                error.http_code = 400;
                throw error
            }
            return {
                deleted: true,
                data: post
            }
        });
}

async function update(id, newPost) {
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

    const postCollection = await posts();

    const post = await postCollection.findOne({_id: id});

    if (post === null) {
        errors['id'] = `post with id ${id} doesn't exists`;
        error.http_code = 404;
        error.message = JSON.stringify({
            errors: errors
        });
        throw error
    }

    if (newPost === undefined || newPost === null) {
        errors['post'] = "post object not defined";
        error.http_code = 400
    } else if (typeof newPost !== "object") {
        errors['post'] = "invalid type of post";
        error.http_code = 400
    }

    if (error.http_code !== 200) {
        error.message = JSON.stringify({'errors': errors});
        throw error
    }

    return await postCollection.updateOne({_id: id}, {$set: newPost})
        .then(async function (updateInfo) {
            if (updateInfo.nModified === 0) {
                error.message = JSON.stringify({
                    'error': "could not update post",
                    'object': newPost,
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