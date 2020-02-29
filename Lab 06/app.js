const express = require("express");
const app = express();
const configRoutes = require("./routes");

configRoutes(app);

const port = 3000;

app.listen(port, () => {
    console.log("The server is up and running !!!");
    console.log(`The routes are running on http://localhost:${port}`);
});