"use strict";

const platformController = require('../controllers/platformController');
var db = require('../db-connection');

function routePlatforms(app)
{
    /* WORKING */
    app.get('/platforms/:game_id', function(request, response) {
        var game_id  = request.params.game_id;
        var sql = "SELECT platform FROM game_review.platforms WHERE game_id = " + game_id;
        db.query(sql, [game_id], function(error, results) {
            if (error) {
                response.json(error);
            } else {
                response.json(results);
            }
        });
    }); 
}

module.exports = { routePlatforms };