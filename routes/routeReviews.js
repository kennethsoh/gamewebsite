"use strict";

const reviewController = require('../controllers/reviewController');
const ReviewsDB = require('../models/ReviewsDB');
const Review = require('../models/Review');
var db = require('../db-connection');

function routeReviews(app)
{
    /* WORKING */
    app.get('/reviews', function(request, response) {
        var sql = "SELECT * FROM game_review.reviews"
        db.query(sql , function(error, results){
            if (error) {
                response.json(error);
            } else {
                response.json(results);
            }
        });
    });

    /* WORKING, Currently retrieve by game_id (think about retrive by title) */
    app.get('/gamereview/:game_id', function(request, response) {
        var game_id = request.params.game_id;
        var sql = "SELECT * FROM game_review.reviews WHERE game_id = " + game_id;
        db.query(sql, [game_id], function(error, results) {
            if (error) {
                response.json(error);
            } else {
                response.json(results);
            }
        });
    });

    app.get('/idreview/:review_id', function(request, response) {
        var review_id = request.params.review_id;
        var sql = "SELECT * FROM game_review.reviews WHERE review_id = " + review_id;
        db.query(sql, [review_id], function(error, results) {
            if (error) {
                response.json(error);
            } else {
                response.json(results);
            }
        });
    });

    /* WORKING, CHECK DATE */
    app.post('/postreview', function(request, response) {
        var game_id = request.body.game_id;
        var user_id = request.body.user_id;
        var username = request.body.username;
        var reviewTitle = request.body.reviewTitle;
        var rating = request.body.rating;
        var review = request.body.review;
        var datePosted = new Date();
        datePosted = datePosted.toString();
        var sql = "INSERT INTO reviews (`game_id`, `user_id`,`username`,`reviewTitle`, `rating`, `review`, `datePosted`) VALUES (\"" + game_id + "\",\"" + user_id + "\",\"" + username + "\",\"" + reviewTitle + "\",\"" + rating + "\",\"" + review + "\",\"" + datePosted + "\")";
        return db.query(sql, [game_id, user_id, username, reviewTitle, rating, review, datePosted], function(error, results) {
            if (error) {
                response.json(error);
            } else {
                // retrieve review that was just posted
                var sql2 = "SELECT * FROM game_review.reviews ORDER BY review_id DESC LIMIT 1" 
                db.query(sql2, function(error, results) {
                    if (error) {
                        response.json(error);
                    } else {
                        response.json(results);
                    }
                })

            } 
        });
    });
    
    /* WORKING, CHECK DATE */
    app.put('/updatereview', function(request, response) {
        var game_id = request.body.game_id;
        var user_id = request.body.user_id;
        var username = request.body.username;
        var reviewTitle = request.body.reviewTitle;
        var rating = request.body.rating;
        var review = request.body.review;
        var datePosted = new Date()
        datePosted = datePosted.toString();

        var review_id = request.body.review_id;
        var sql = "UPDATE reviews SET game_id = " + game_id + "," +  "user_id = " + user_id + "," + "username = \"" + username + "\"," + "reviewTitle = \"" + reviewTitle + "\"," + "rating = " + rating + "," + "review = \"" + review + "\"," + "datePosted = \""  + datePosted +"\" WHERE review_id = " + review_id;
        return db.query(sql, [game_id, user_id, username, reviewTitle, rating, review, datePosted, review_id], function(error, results) {
            if (error) {
                response.json(error);
            } else {
                response.json(results);
            }
        });
    });
        
    /* WORKING, changed to HTTP 'POST' so as to use request.body.review_id instead of request.params.review_id */
    app.delete('/deletereview', function(request, response) {
        var review_id = request.body.review_id;
        var sql = "DELETE from reviews WHERE review_id = " + review_id;
        return db.query(sql, [review_id], function(error, results) {
            if (error){
                response.json(error);
            } else {
                response.json(results);
            }
        });
    });

}

module.exports = {routeReviews};