const {ObjectId} = require('mongodb');

const collections = require("./collection");
const animals = collections.animals;
const posts = collections.posts;

async function like(animalId, postId) {
    const error = new Error();
    error.http_code = 200;
    const errors = {};

    if (animalId === undefined || animalId === null) {
        errors['animalId'] = "animalId is not defined";
        error.http_code = 400
    }
    if (typeof animalId === "string") {
        try {
            animalId = ObjectId(animalId);
        } catch (e) {
            errors['animalId'] = e.message;
            error.http_code = 400;
            error.message = JSON.stringify({
                errors: errors
            });
            throw error
        }
    } else if (!(animalId instanceof ObjectId)) {
        errors['animalId'] = "animalId is not defined";
        error.http_code = 400;
        error.message = JSON.stringify({
            errors: errors
        });
        throw error
    }

    if (postId === undefined || postId === null) {
        errors['postId'] = "postId is not defined";
        error.http_code = 400
    }
    if (typeof postId === "string") {
        try {
            postId = ObjectId(postId);
        } catch (e) {
            errors['postId'] = e.message;
            error.http_code = 400;
            error.message = JSON.stringify({
                errors: errors
            });
            throw error
        }
    } else if (!(postId instanceof ObjectId)) {
        errors['postId'] = "postId is not defined";
        error.http_code = 400;
        error.message = JSON.stringify({
            errors: errors
        });
        throw error
    }

    if (error.http_code !== 200) {
        error.message = JSON.stringify({'errors': errors});
        throw error
    }

    const animalCollection = await animals();
    const animal = await animalCollection.findOne({_id: animalId});

    if (animal === null) {
        errors['animalId'] = `animal with id ${animalId} doesn't exists`;
        error.http_code = 404;
        error.message = JSON.stringify({
            errors: errors
        });
        throw error
    }

    const postCollection = await posts();
    const post = await postCollection.findOne({_id: postId});

    if (post === null) {
        errors['postId'] = `post with id ${postId} doesn't exists`;
        error.http_code = 404;
        error.message = JSON.stringify({
            errors: errors
        });
        throw error
    }

    return await animalCollection.updateOne({_id: animalId}, { $push: {'likes': postId}})
        .then(async function (updateInfo) {
            if (updateInfo.nModified === 0) {
                error.message = JSON.stringify({
                    'error': "could not like",
                    'animalId': animalId,
                    'postId': postId,
                    'errors': errors
                });
                error.http_code = 400;
                throw error
            }
            return true;
        });
}

async function unlike(animalId, postId) {
    const error = new Error();
    error.http_code = 200;
    const errors = {};

    if (animalId === undefined || animalId === null) {
        errors['animalId'] = "animalId is not defined";
        error.http_code = 400
    }
    if (typeof animalId === "string") {
        try {
            animalId = ObjectId(animalId);
        } catch (e) {
            errors['animalId'] = e.message;
            error.http_code = 400;
            error.message = JSON.stringify({
                errors: errors
            });
            throw error
        }
    } else if (!(animalId instanceof ObjectId)) {
        errors['animalId'] = "animalId is not defined";
        error.http_code = 400;
        error.message = JSON.stringify({
            errors: errors
        });
        throw error
    }

    if (postId === undefined || postId === null) {
        errors['postId'] = "postId is not defined";
        error.http_code = 400
    }
    if (typeof postId === "string") {
        try {
            postId = ObjectId(postId);
        } catch (e) {
            errors['postId'] = e.message;
            error.http_code = 400;
            error.message = JSON.stringify({
                errors: errors
            });
            throw error
        }
    } else if (!(postId instanceof ObjectId)) {
        errors['postId'] = "postId is not defined";
        error.http_code = 400;
        error.message = JSON.stringify({
            errors: errors
        });
        throw error
    }

    if (error.http_code !== 200) {
        error.message = JSON.stringify({'errors': errors});
        throw error
    }

    const animalCollection = await animals();
    const animal = await animalCollection.findOne({_id: animalId});

    if (animal === null) {
        errors['animalId'] = `animal with id ${animalId} doesn't exists`;
        error.http_code = 404;
        error.message = JSON.stringify({
            errors: errors
        });
        throw error
    }

    const postCollection = await posts();
    const post = await postCollection.findOne({_id: postId});

    if (post === null) {
        errors['postId'] = `post with id ${postId} doesn't exists`;
        error.http_code = 404;
        error.message = JSON.stringify({
            errors: errors
        });
        throw error
    }

    return await animalCollection.updateOne({_id: animalId}, { $pull: {'likes': postId}})
        .then(async function (updateInfo) {
            if (updateInfo.nModified === 0) {
                error.message = JSON.stringify({
                    'error': "could not like",
                    'animalId': animalId,
                    'postId': postId,
                    'errors': errors
                });
                error.http_code = 400;
                throw error
            }
            return true;
        });
}

module.exports = {
    like,
    unlike
};