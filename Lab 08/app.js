const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const exphbs = require('express-handlebars');
const data = require("./data");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use("/public", express.static(__dirname + "/public"));
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');


app.get('/', function (request, response) {
    const context = {
        title: "People Finder"
    };
    response.render('home', context);
});

app.post('/search', async function (request, response) {
    const personName = request.body['personName'];

    try {
        const peopleFound = await data.getPersonByName(personName);
        const context = {
            title: "People Found",
            peopleFound: peopleFound,
            personName: personName
        };
        response.render('search', context);
    } catch (e) {
        const context = {
            title: "People Found : Error",
            errors: e.message,
        };
        response.status(e.http_code);
        response.render('error', context);
    }
});

app.get('/details/:id', async function (request, response) {
    const id = request.params['id'];

    try {
        const person = await data.getPersonById(parseInt(id));
        const context = {
            title: "Person Found",
            person: person
        };
        response.render('person', context);
    } catch (e) {
        const context = {
            title: "Person Found : Error",
            errors: e.message,
        };
        response.status(e.http_code);
        response.render('error', context);
    }
});

app.use("*", (request, response) => {
    response.status(404).json({error: "Route not found"});
});

const port = 3000;

app.listen(port, () => {
    console.log("The server is up and running !!!");
    console.log(`The routes are running on http://localhost:${port}`);
});