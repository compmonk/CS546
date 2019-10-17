const express = require("express");
const router = express.Router();

const animals = require('../data/animal');

router.get("/", async (request, response) => {
    try {
        const animalList = await animals.getAll();
        response.send(animalList);
    } catch (e) {
        response.status(400).json({errorMessage: e})
    }
});

router.get("/:id", async (request, response) => {
    try {
        const animal = await animals.get(request.params.id);
        response.send(animal);
    } catch (e) {
        response.setHeader('content-type', 'application/json');
        response.status(e.http_code).send(e.message)
    }
});

router.post("/", async (request, response) => {
    try {
        const animal = await animals.create(request.body);
        response.send(animal);
    } catch (e) {
        response.setHeader('content-type', 'application/json');
        response.status(e.http_code).send(e.message)
    }
});

router.put("/:id", async (request, response) => {
    try {
        const animal = await animals.update(request.params.id, request.body);
        response.send(animal);
    } catch (e) {
        response.setHeader('content-type', 'application/json');
        response.status(e.http_code).send(e.message)
    }
});

router.delete("/:id", async (request, response) => {
    try {
        const animal = await animals.remove(request.params.id);
        response.send(animal);
    } catch (e) {
        response.setHeader('content-type', 'application/json');
        response.status(e.http_code).send(e.message)
    }
});

module.exports = router;