const aboutRoutes = require("./about");
const educationRoutes = require("./education");
const storyRoutes = require("./story");

const constructorMethod = app => {
    app.use("/about", aboutRoutes);
    app.use("/education", educationRoutes);
    app.use("/story", storyRoutes);

    app.use("*", (request, response) => {
        response.status(404).json({error: "Route not found"});
    });
};

module.exports = constructorMethod;
