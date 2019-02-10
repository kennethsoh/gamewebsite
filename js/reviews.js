
function displayReviewsPage() {
    var game_id = sessionStorage.getItem('game_id');
    window.location = "reviews.html";
}

function displayAddReviewsPage() {
    var game_id = sessionStorage.getItem('game_id');

    var check = sessionStorage.getItem("user_id");
    if (check == null){
        window.location = "/login.html";
    } else {
        // Alert to login first
        window.location = "addreviews.html";
    }
}

// Display all reviews for a game
function displayAllReviews() {
    var game_id = parseInt(sessionStorage.getItem('game_id'), 10);
    var game_title = sessionStorage.getItem('game_title');
    

    game_id += 1;

    var allReviewsForGame = document.getElementById("allReviewsForGame");
    allReviewsForGame.innerHTML = "All reviews for "+game_title;

    // GET all review data: review_id, game_id, user_id, rating, review, datePosted.
    fetch("/gamereview/"+game_id)
    .then((response) => response.json())
    .then((data) => {
        review_array = data;
        console.log(review_array);

        

        var output ='<p></p>';

        for (i in review_array) {

            var dater = review_array[i].datePosted;
            var subDate = dater.substring(4, 15);

            output += 
            '<div style="margin:auto">\
            <div class="reviewsbox" style="background-color:white;border:4px solid purple; width:1000px; padding:20px;">\
                <div class="row">\
                    <div class="col-sm-3 col-md-offset-5" id="reviewTitles" style="font-weight:bold" class="whiteTxt">ReviewTitle:</div>\
                    <div class="col-sm-2 col-md-offset-5" id="reviewRating" style="font-weight:bold" class="whiteTxt">Rating:</div>\
                    <div class="col-sm-2 col-md-offset-5" id="reviewRating" style="font-weight:bold" class="whiteTxt">Date:</div>\
                    <div class="col-sm-2 col-md-offset-5" id="reviewUser" style="font-weight:bold" class="whiteTxt">User:</div>\
                    <button class="loginButton col-sm-1 col-md-offset-5" type="submit" onclick="editReview('+review_array[i].review_id+')">Edit</button> \
                    <button class="loginButton col-sm-1 col-md-offset-5" type="submit" onclick="deleteReview('+review_array[i].review_id+')">Delete</button> \
                </div>\
                <div class="row">\
                    <div class="col-sm-3 col-md-offset-5" id="reviewTitles" class="whiteTxt">'+review_array[i].reviewTitle+'</div>\
                    <div class="col-sm-2 col-md-offset-5" id="reviewRating" class="whiteTxt">'+review_array[i].rating+'/10</div>\
                    <div class="col-sm-2 col-md-offset-5" id="reviewRating" class="whiteTxt">'+subDate+'</div>\
                    <div class="col-sm-2 col-md-offset-5" id="reviewUser" class="whiteTxt">'+review_array[i].username+'</div>\
                </div>\
                <br>\
                <div class="row">\
                    <div class="col-sm-12 col-md-offset-5" id="reviewTitles" style="font-weight:bold" class="whiteTxt">Review:</div>\
                </div>\
                <div class="row">\
                    <div class="col-sm-12 col-md-offset-5" id="reviewTitles" class="whiteTxt">'+review_array[i].review+'</div>\
                </div>\
            </div>\
            </div>'    
        }

        document.getElementById('ReviewsOutput').innerHTML = output;
    });


}

// WORKING
function postReview() {
    gameR = sessionStorage.getItem("game_id");
    userR = sessionStorage.getItem("user_id");
    userN = sessionStorage.getItem("username");
    titleR = document.getElementById("reviewTitleInput").value;
    ratingR = document.getElementById("reviewRatingInput").value;
    reviewR = document.getElementById("reviewTextInput").value;
    
    if (titleR == "" || ratingR == "" || reviewR == ""){
        alert("Fill in all input fields")
    } else {

    gameR = parseInt(gameR, 10);
    gameR += 1;
    gameR = gameR.toString();

    var reviewPost = {game_id: gameR, user_id: userR, username: userN, reviewTitle: titleR, rating: ratingR, review: reviewR};
    console.log(reviewPost);

    fetch("/postreview", {
        method: "POST",
        headers: {
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        body: JSON.stringify(reviewPost)
    })
    .then((response) => response.json())
    .then((data) => {
        data = data;
        console.log("Review Added");
        console.log(data);
        window.location = "reviews.html";

        //Show newly posted review details except review_id (visibility hidden)
    });
}
}

// WORKING
function clearPostReview() {
    titleR = document.getElementById("reviewTitleInput");
    ratingR = document.getElementById("reviewRatingInput");
    reviewR = document.getElementById("reviewTextInput");

    titleR.value = "";
    ratingR.value = "";
    reviewR.value = "";
}

function editReview(review_id) {

    fetch("/idreview/"+review_id)
    .then((response) => response.json())
    .then((data) => {
        var username = data[0].username;
        var currentuser = sessionStorage.getItem("username");

    if (username != currentuser) {
        alert("Not authorised");
    } else {
        window.location = "editreviews.html";
        sessionStorage.setItem("editRid", review_id);
    }
})
    
}

function updateReview(review_id) {
    var review_id = sessionStorage.getItem("editRid");
    gameR = sessionStorage.getItem("game_id");
    userR = sessionStorage.getItem("user_id");
    userN = sessionStorage.getItem("username");
    titleR = document.getElementById("reviewTitleInput").value;
    ratingR = document.getElementById("reviewRatingInput").value;
    reviewR = document.getElementById("reviewTextInput").value;

    gameR = parseInt(gameR, 10);
    gameR += 1;
    gameR = gameR.toString();

    if (titleR == "" || ratingR == "" || reviewR == ""){
        alert("Fill in all input fields")
    } else {
    var updateInfo = {game_id: gameR, user_id: userR, username: userN, reviewTitle: titleR, rating: ratingR, review: reviewR, review_id: review_id};

    fetch("/updatereview", {
        method: "PUT",
        headers: {
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        body: JSON.stringify(updateInfo)
    })
    .then((response) => response.json())
    .then((data) => {
        data = data;
        console.log("Review Successfully Updated");
        console.log(data);
        window.location = "reviews.html";
    });
}
}


function deleteReview(review_id) {
    fetch("/idreview/"+review_id)
    .then((response) => response.json())
    .then((data) => {
        var username = data[0].username;
        var currentuser = sessionStorage.getItem("username");

    if (username != currentuser) {
        alert("Not authorised");
    } else {
        
    console.log(review_id);
    var deleteInfo = {review_id: review_id};

    fetch("/deletereview" , {
        method: "DELETE",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(deleteInfo)
    })
    .then((response) => response.json())
    .then((data) => {
        data = data;
        console.log("Review Successfully Deleted");
        window.location = "reviews.html";
    });

}
})
}







