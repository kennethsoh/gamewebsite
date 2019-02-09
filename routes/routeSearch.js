"use strict";

const gameController = require('../controllers/gameController');
const GamesDB = require('../models/GamesDB');
const Game = require('../models/Game');
var db = require('../db-connection');

function routeSearch(app)
{

    app.get('/searchgame/:title', function(request, response) {
        var title = request.params.title;
        var sql = "SELECT * FROM game_review.games WHERE title LIKE \"%" + title + "%\""; 
        db.query(sql, [title], function(error, results) {
            if (error) {
                response.json(error);
            } else {
                response.json(results);
            }
        });
    });
}

module.exports = { routeSearch };
