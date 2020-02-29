const animalRoutes = require("./animals");
const postRoutes = require("./posts");
const likeRoutes = require("./likes");

const constructorMethod = app => {
    app.use("/animals", animalRoutes);
    app.use("/posts", postRoutes);
    app.use("/likes", likeRoutes);

    app.use("*", (request, response) => {
        response.status(404).json({error: "Route not found"});
    });
};

module.exports = constructorMethod;
