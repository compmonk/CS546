const express = require("express");
const path = require("path");

const app = express();
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded());
app.use("/public", express.static(__dirname + "/public"));
// app.engine('handlebars', exphbs());
// app.set('view engine', 'handlebars');
// path.resolve(__dirname, "index.html")
// app.set('view engine', 'html');
app.set('views', express.static(__dirname + "/views"));

app.get('/', function (request, response) {
    response.sendFile(path.resolve("index.html"));
});

app.use("*", (request, response) => {
    response.status(404).json({error: "Route not found"});
});

const port = 3000;

app.listen(port, () => {
    console.log("The server is up and running !!!");
    console.log(`The routes are running on http://localhost:${port}`);
});