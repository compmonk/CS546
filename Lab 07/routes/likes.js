const express = require("express");
const router = express.Router();

const likes = require('../data/likes');

router.post("/:id", async (request, response) => {
    try {
        const isLiked = await likes.like(request.params.id, request.query.postId);
        if (isLiked) {
            response.send(200);
        }
    } catch (e) {
        response.setHeader('content-type', 'application/json');
        response.status(e.http_code).send(e.message)
    }
});

router.delete("/:id", async (request, response) => {
    try {
        const isUnliked = await likes.unlike(request.params.id, request.query.postId);
        if (isUnliked) {
            response.send(200);
        }
    } catch (e) {
        response.setHeader('content-type', 'application/json');
        response.status(e.http_code).send(e.message)
    }
});

module.exports = router;