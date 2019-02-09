"use strict";

const userController = require('../controllers/userController');
const UsersDB = require('../models/UsersDB');
const User = require('../models/User');
var db = require('../db-connection');

function routeUsers(app)
{
    /*when the URL is http://localhost:8080/users and when the HTTP GET
    method is requested from the client, the get() func will be used to call
    the getAllGames() func in the controller. 

    The HTTP GET method is called in the getGameData() function in games.js
    The codes that called it is:
        var request = new XMLHttpRequest();
        request.open('GET', game_url, true);

    */

    /* WORKING */
    app.post('/login', function(request, response){
        var username = request.body.username;
        var password = request.body.password;
        var message = ""
        var sql = "SELECT * FROM game_review.users WHERE username = \"" + username +"\"";
        db.query(sql, [username], function(error, results) {
            if (error) {
                response.json(error)
            } else if (results.length > 0 ) {
                if (password == results[0].password) {
                    message = "success";
                    console.log(message); // for local cmd prompt
                    response.json(results) //change back to response.json(results) or json(message)
                } else {
                    message = "failure";
                    console.log(message); // for local cmd prompt
                    response.json(results) //change back to response.json(results) or json(mesaage)
                }
            } else {
                message = "no user"; 
                console.log(message); 
                response.json(message)

                }
            
        
            });
    });




    /* WORKING */
    app.get('/users', function(request, response) {
        var sql = "SELECT * FROM game_review.users";
        db.query(sql, function(error, results)
        {
            if (error) {
                response.json(error)
            } else {
                response.json(results)
            }
        });
    });
    
    /* WORKING */
    app.post('/adduser', function(request, response) {
        var message = ""
        var username = request.body.username;
        var email_address = request.body.email_address;
        var date_of_birth = request.body.date_of_birth;
        var gender = request.body.gender;
        var password = request.body.password;
        var sql = "INSERT INTO users (`username`,`email_address`,`date_of_birth`, `gender`, `password`) VALUES (\"" + username + "\",\"" + email_address + "\",\"" + date_of_birth + "\",\"" + gender + "\",\"" + password + "\")";
        return db.query(sql, [username, email_address, date_of_birth, gender, password], function(error, results) {
            if (error) {
                message = {"code":"0"};
                response.json(message)
            } else {
                message = {"code":"1"};
                response.json(message)
            }
        });
    });
    
    /* WORKING */
    app.get('/users/:user_id', function(request, response){
        var user_id = request.params.user_id;
        var sql = "SELECT * FROM game_review.users WHERE user_id = " + user_id;
        db.query(sql, [user_id], function(error, results){
            if (error) {
                response.json(error);
            } else {
                response.json(results);
            }
        });
    });

    app.get('/reviewusers/:user_id', function(request, response){
        var user_id = request.params.user_id;
        var sql = "SELECT username FROM game_review.users WHERE user_id = " + user_id;
        db.query(sql, [user_id], function(error, results){
            if (error) {
                response.json(error);
            } else {
                response.json(results);
            }
        });
    });
    
    /* WORKING */
    app.delete('/deleteuser/:user_id', function(request, response){
        var user_id = request.params.user_id;
        var sql = "DELETE from users WHERE user_id = " + user_id;
        return db.query(sql, [user_id], function(error, results) {
            if (error) {
                response.json(error);
            } else {
                response.json(results);
            }     
        });
    });


    /* JUST ADDED, not TESTED & NOT IN PART3 SUBMISSION */
    app.put('/updateuser/:user_id', function(request, response) {
        var user_id = request.params.user_id;
        var email_address = request.body.email_address;
        var password = request.body.password;
        var sql = "UPDATE users SET email_address = \"" + email_address + "\"," + "password = \"" + password  +"\" WHERE user_id =" + user_id;
        return db.query(sql, [email_address, password, user_id], function(error, results) {
            if (error) {
                response.json(error);
            } else {
                response.json(results);
            }
        });
    });
    
}





module.exports = { routeUsers };