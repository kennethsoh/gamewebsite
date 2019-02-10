"use strict";

const express = require("express");
const multer = require('multer');
const bodyParser = require("body-parser");
const routeUsers = require('./routes/routeUsers');
const routeGames = require('./routes/routeGames');
const routeGenres = require('./routes/routeGenres');
const routePlatforms = require('./routes/routePlatforms');
const routeReviews = require('./routes/routeReviews');
const routeSearch = require('./routes/routeSearch');

var fs = require('fs')
var https = require('https')

const httpsOptions = {
    key: fs.readFileSync('./config/key.pem'),
    cert: fs.readFileSync('./config/cert.pem')
}

var app = express();
var host = "127.0.0.1";
var port = 80;
var startPage = "index.html";

app.use(express.static("./public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


routeUsers.routeUsers(app);
routeGames.routeGames(app);
routeGenres.routeGenres(app);
routePlatforms.routePlatforms(app);
routeReviews.routeReviews(app);
routeSearch.routeSearch(app);

function gotoIndex(req, res) {
    console.log(req.params);
    res.sendFile(__dirname + "/" + startPage);
}

app.get("/" + startPage, gotoIndex);

app.route("/");


var server = app.listen(port, host, function() {
    var port = server.address().port;
    var host = server.address().address;

    console.log("Application listening at http://%s:%s ; enter CTRL + C to stop", host, port);
})



module.exports = app;
