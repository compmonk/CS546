const express = require("express");
const router = express.Router();

const posts = require('../data/posts');

router.get("/", async (request, response) => {
    try {
        const postsList = await posts.getAll();
        response.send(postsList);
    } catch (e) {
        response.status(400).json({errorMessage: e})
    }
});

router.get("/:id", async (request, response) => {
    try {
        const post = await posts.get(request.params.id);
        response.send(post);
    } catch (e) {
        response.setHeader('content-type', 'application/json');
        response.status(e.http_code).send(e.message)
    }
});

router.post("/", async (request, response) => {
    try {
        const post = await posts.create(request.body);
        response.send(post);
    } catch (e) {
        response.setHeader('content-type', 'application/json');
        response.status(e.http_code).send(e.message)
    }
});

router.put("/:id", async (request, response) => {
    try {
        const post = await posts.update(request.params.id, request.body);
        response.send(post);
    } catch (e) {
        response.setHeader('content-type', 'application/json');
        response.status(e.http_code).send(e.message)
    }
});

router.delete("/:id", async (request, response) => {
    try {
        const post = await posts.remove(request.params.id);
        response.send(post);
    } catch (e) {
        response.setHeader('content-type', 'application/json');
        response.status(e.http_code).send(e.message)
    }
});

module.exports = router;