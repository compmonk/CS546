const express = require("express");
const session = require('express-session');
const bodyParser = require("body-parser");
const exphbs = require('express-handlebars');
const users = require('./users');

const app = express();
const bcrypt = require('bcryptjs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');


app.use(session({
    name: 'AuthCookie',
    secret: 'gfhjfgrfbvjnjrfj',
    resave: false,
    saveUninitialized: true
}));

const isLoggedIn = function (request) {
    return !!request.session.user;
};

const isCredentialsValid = function (request) {
    const username = request.body['username'];
    const password = request.body['password'];

    if (username === undefined || password === undefined) {
        return false
    }

    for (let i = 0; i < users.length; i++) {
        const user = users[i];
        if (user.username === username && bcrypt.compareSync(password, user.hashedPassword)) {
            return user
        }
    }

    return false
};

// logging middleware
const logger = function (request, response, next) {
    console.log(`[${new Date().toUTCString()}]: ${request.method}\t${request.originalUrl}\t\t${isLoggedIn(request) ? 'Authenticated' : 'Not Authenticated'}`);
    next()
};
app.use(logger);


app.get('/', function (request, response) {
    if (isLoggedIn(request)) {
        response.redirect('/private')
    } else {
        response.render('login', {title: "Login"})
    }
});


// authentication middleware
app.use('/private', function (request, response, next) {
    if (isLoggedIn(request)) {
        next()
    } else {
        response.status(403);
        response.render('not-logged-in-error', {title: "Error"})
    }
});

app.get('/private', function (request, response, next) {
    response.render('information', {title: "Information", user: request.session.user})
});

app.post('/login', function (request, response) {
    if (isLoggedIn(request)) {
        response.redirect('/private')
    }
    const user = isCredentialsValid(request);
    if (user) {
        request.session.user = user;
        response.redirect('/private')
    } else {
        response.status(401);
        response.render('login', {title: "Error", error: "Invalid Username and/or Password"})
    }
});

app.get('/logout', function (request, response) {
    request.session.destroy(function (err) {
        response.render('logout', {title: "Logout"})
    })
});

app.use("*", (request, response) => {
    response.status(404).json({error: "Route not found"});
});

const port = 3000;

app.listen(port, () => {
    console.log("The server is up and running !!!");
    console.log(`The routes are running on http://localhost:${port}`);
});