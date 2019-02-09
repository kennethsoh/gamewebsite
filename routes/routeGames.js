"use strict";

const gameController = require('../controllers/gameController');
const GamesDB = require('../models/GamesDB');
const Game = require('../models/Game');
var db = require('../db-connection');



function routeGames(app)
{
    /*when the URL is http://localhost:8080/games and when the HTTP GET
    method is requested from the client, the get() func will be used to call
    the getAllGames() func in the controller. 

    The HTTP GET method is called in the getGameData() function in games.js
    The codes that called it is:
        var request = new XMLHttpRequest();
        request.open('GET', game_url, true);

    */
   
    
    /* WORKING */ 
    app.get('/games', function(request, response) {
        var sql = "SELECT * FROM game_review.games";
        db.query(sql, function(error, results) {
            if (error) {
                response.json(error)
            } else {
                response.json(results)
            }
        });
    });

    app.get('/game/:game_id', function(request, response) {
        var game_id = request.params.game_id;
        var sql = "SELECT * FROM game_review.games WHERE game_id =" + game_id;
        db.query(sql,[game_id], function(error, results) {
            if (error) {
                response.json(error)
            } else {
                response.json(results)
            }
        });
    });


    /* GET GAMES BY AGE */
    app.get('/agegames/:age', function(request, response) {
        var age = request.params.age;
        var sql = "SELECT * FROM game_review.games WHERE age_rating <=" + age;
        db.query(sql, [age], function(error, results) {
            if (error) {
                response.json(error);
            } else {
                response.json(results);
            }
        });
    });



    /* WORKING, CONSIDER POST and REQUEST.BODY.TITLE instead*/
    app.post('/searchapi/', function(request, response) {
        var title = request.body.title;
        var sql = "SELECT * FROM game_review.games WHERE title LIKE \"%" + title + "%\""; 
        db.query(sql, [title], function(error, results) {
            if (error) {
                response.json(error);
            } else {
                response.json(results);
            }
        });
    });
        
    /* SOMETHING WRONG ON FETCH API SIDE */ 
    app.post('/gameTitle/', function(request, response) {
        var game_id = request.body.game_id;
        var sql = "SELECT title FROM game_review.games WHERE game_id = " + game_id; 
        db.query(sql, [game_id], function(error, results){
            if (error) {
                response.json(error);
            } else {
                response.json(results);
            }
        });
    });

    app.get('/title/:game_id', function(request, response) {
        var game_id = request.params.game_id;
        var sql = "SELECT title FROM game_review.games WHERE game_id = "+ game_id;
        db.query(sql, [game_id], function(error, results) {
            if (error) {
                response.json(error);
            } else {
                response.json(results)
            }
        });
    });

    /* WORKING */
    app.get('/pcgames', function(request, response){

        var sql = "SELECT * FROM game_review.platforms LEFT JOIN game_review.games ON platforms.game_id=games.game_id WHERE platforms.platform = \"PC\"";
        db.query(sql, function(error, results) {
            if (error) {
                response.json(error);
            } else {
                response.json(results);
            }
        });
    });
    
    /* WORKING */
    app.get('/consolegames', function(request, response){

        var sql = "SELECT * FROM game_review.platforms LEFT JOIN game_review.games ON platforms.game_id=games.game_id WHERE platforms.platform = \"Console\"";
        db.query(sql, function(error, results) {
            if (error) {
                response.json(error);
            } else {
                response.json(results);
            }
        });
    });

    /* WORKING */
    app.get('/mobilegames', function(request, response){

        var sql = "SELECT * FROM game_review.platforms LEFT JOIN game_review.games ON platforms.game_id=games.game_id WHERE platforms.platform = \"Mobile\"";
        db.query(sql, function(error, results) {
            if (error) {
                response.json(error);
            } else {
                response.json(results);
            }
        });
    });

    /* WORKING */
    app.get('/androidgames', function(request, response){

        var sql = "SELECT * FROM game_review.platforms LEFT JOIN game_review.games ON platforms.game_id=games.game_id WHERE platforms.platform = \"android\"";
        db.query(sql, function(error, results) {
            if (error) {
                response.json(error);
            } else {
                response.json(results);
            }
        });
    });



    app.get('/code/:game_id/:user_id', function(request, response) {
        var game_id = request.params.game_id;
        var user_id = request.params.user_id;
        var resultsA = "";
        var resultsB = "";
        var A = 0;
        var B = 0;
        var arrayA = [];
        var arrayB = [];
        var sql = "SELECT game_id FROM game_review.games WHERE game_id = " + game_id; 
        db.query(sql,[game_id], function(error, results) {
            if (error){
                response.json(error);
            } else {
                console.log(results);
                resultsA = JSON.stringify(results);
                console.log(resultsA);
                resultsA = JSON.parse(resultsA);
                console.log(resultsA);
                arrayA = resultsA;
                A = arrayA[0].game_id;
                console.log(A);
            }
        });
        
        var sql2=  "SELECT user_id FROM game_review.users WHERE user_id = " + user_id;
        db.query(sql2, [user_id], function(error, results) {
            if (error){
                response.json(error);
            } else {
                resultsB = JSON.stringify(results);
                resultsB = JSON.parse(resultsB);
                arrayB = resultsB;
                B = arrayB[0].user_id;
                console.log(B);
            }
        });
        
        var sql3 = "INSERT INTO game_review.test (`game_id`, `user_id`) VALUES ( " + A + "," + B + ")";
        db.query(sql3, function(error, results) {
            if (error){
                response.json(error);
            } else {
                response.json(results);
                console.log("Success, check sql workbench");
            }
        });
    });

}


module.exports = { routeGames };