function homeCheckInSession() {
    // Check if user is already in session. 
    // If he is: Present user.html when account icon is clicked, else: present login page.
    var check = sessionStorage.getItem("user_id");
    if (check == null){
        getHomePageGames();
    } else {
        // SET TO OTHER
        getHomePageGamesAge();
    }
}



function getHomePageGames(){
    fetch("/games")
    .then((response) => response.json())
    .then((data) => {
        game_array = data;
        displayHomeGamesTable1();
        displayHomeGamesTable2();
    });

    fetch('https://newsapi.org/v2/top-headlines?sources=polygon&apiKey=45ea3de766734628bac088677c066323')
    .then((response) => response.json())
    .then(data => {
        news_array = data.articles;
        console.log(data.articles);
        displayHomeNewsTable();
        displayHomeNewsTitleTable()
    });
}


// GET content by age
function getHomePageGamesAge() {
    var age = sessionStorage.getItem('age');
    if (age < 9) {
        age = 9
    } 
    fetch("/agegames/"+age)
    .then((response) => response.json())
    .then((data) => {
        game_array = data;
        console.log(game_array);
        displayHomeGamesTable1();
        displayHomeGamesTable2();
    });
    

    fetch('https://newsapi.org/v2/top-headlines?sources=polygon&apiKey=45ea3de766734628bac088677c066323')
    .then((response) => response.json())
    .then(data => {
        news_array = data.articles;
        console.log(data.articles);
        displayHomeNewsTable();
        displayHomeNewsTitleTable()
    });
}

function displayHomeGamesTable1(){


    var Lcell = document.getElementById("homeGamesTable1L");
    var Ccell = document.getElementById("homeGamesTable1C");
    var Rcell = document.getElementById("homeGamesTable1R");

    L = '<div class="center" count="0"><img id="game0Img" class="bigthumbnail img-fluid img-thumbnail" style="display:flex, align-items:center, justify-content:center" count="0" onclick="tempSS(0)" src=' + game_array[0].thumbnail + ' />'
    
    C = '<div class="center" count="1"><img id="game1Img" class="bigthumbnail img-fluid img-thumbnail" style="display:flex, align-items:center, justify-content:center" count="1" onclick="tempSS(1)" src=' + game_array[1].thumbnail + ' />'

    R = '<div class="center" count="2"><img id="game2Img" class="bigthumbnail img-fluid img-thumbnail" style="display:flex, align-items:center, justify-content:center" count="2" onclick="tempSS(2)" src=' + game_array[2].thumbnail + ' /> '
    
    Lcell.innerHTML = L;
    Ccell.innerHTML = C;
    Rcell.innerHTML = R;


}

function displayHomeGamesTable2(){


    var Lcell = document.getElementById("homeGamesTable2L");
    var Ccell = document.getElementById("homeGamesTable2C");
    var Rcell = document.getElementById("homeGamesTable2R");


    L = '<div class="center" count="3"><img id="game3Img" class="bigthumbnail img-fluid img-thumbnail" style="display:flex, align-items:center, justify-content:center" count="3" onclick="tempSS(3)" src=' + game_array[3].thumbnail + ' /> '
    
    C = '<div class="center" count="4"><img id="game4Img" class="bigthumbnail img-fluid img-thumbnail" style="display:flex, align-items:center, justify-content:center" count="4" onclick="tempSS(4)" src=' + game_array[4].thumbnail + ' /> '

    R = '<div class="center" count="5"><img id="game5Img" class="bigthumbnail img-fluid img-thumbnail" style="display:flex, align-items:center, justify-content:center" count="5" onclick="tempSS(5)" src=' + game_array[5].thumbnail + ' /> '
    
    Lcell.innerHTML = L;
    Ccell.innerHTML = C;
    Rcell.innerHTML = R;


}

function displayHomeNewsTable() {
    var Lcell = document.getElementById("homeNewsTableL");
    var Ccell = document.getElementById("homeNewsTableC");
    var Rcell = document.getElementById("homeNewsTableR");

    L = '<div class="center"><img id="game3Img" class="bigthumbnail img-fluid img-thumbnail" style="display:flex, align-items:center, justify-content:center" onclick="readNews(0)" src=' + news_array[0].urlToImage + ' /> '
    
    C = '<div class="center"><img id="game4Img" class="bigthumbnail img-fluid img-thumbnail" style="display:flex, align-items:center, justify-content:center" onclick="readNews(1)" src=' + news_array[3].urlToImage + ' /> '

    R = '<div class="center"><img id="game5Img" class="bigthumbnail img-fluid img-thumbnail" style="display:flex, align-items:center, justify-content:center" onclick="readNews(2)" src=' + news_array[2].urlToImage + ' /> '
    
    Lcell.innerHTML = L;
    Ccell.innerHTML = C;
    Rcell.innerHTML = R;
}

function displayHomeNewsTitleTable() {
    var Lcell = document.getElementById("homeNewsTableTL");
    var Ccell = document.getElementById("homeNewsTableTC");
    var Rcell = document.getElementById("homeNewsTableTR");

    L = '<div class="center"><h6 class="whiteTxt" style="text-align:center">'+ news_array[0].title +'</h6>'
    
    C = '<div class="center"><h6 class="whiteTxt"  style="text-align:center">'+ news_array[1].title +'</h6>'

    R = '<div class="center"><h6 class="whiteTxt" style="text-align:center">'+ news_array[2].title +'</h6>'
    
    Lcell.innerHTML = L;
    Ccell.innerHTML = C;
    Rcell.innerHTML = R;
    
    
}

function displayGameDetails() {
    var id = parseInt(sessionStorage.getItem('game_id'), 10);
    console.log(id);
    

    id += 1;
    console.log(id);

    fetch("/game/"+ id)
    .then((reponse) => reponse.json())
    .then((data) => {
        single_game_array = data; 
        console.log(single_game_array);
        

        document.getElementById('gameTitle').innerHTML = single_game_array[0].title;
        document.getElementById('gamePublisher').innerHTML = single_game_array[0].publisher;
        P = '<img class="poster img-fluid img-thumbnail" src="'+single_game_array[0].poster+'">'
        document.getElementById('gamePoster').innerHTML = P;
        document.getElementById('gameAge').innerHTML = single_game_array[0].age_rating + '+';
        document.getElementById('gameOverall').innerHTML = single_game_array[0].overall_rating+'/10';
        document.getElementById('gamePrice').innerHTML = '$' + single_game_array[0].price;
        document.getElementById('gameDescription').innerHTML = single_game_array[0].description;
        document.getElementById("trailer1").src = single_game_array[0].video1;
        document.getElementById("trailer2").src = single_game_array[0].video2;

        sessionStorage.setItem("buylink", single_game_array[0].buy);
    });
    

}

function tempSS(id){
    sessionStorage.setItem('game_id', id);

    id = parseInt(id, 10);
    id += 1;
    console.log(id);
    fetch("game/"+ id)
    .then((response) => response.json())
    .then((data) => {
        title = data[0].title;
        console.log(data);
        sessionStorage.setItem('game_title', title );
    });
    window.location = "gameDetails.html";
}

function buygame() {
    var buylink = sessionStorage.getItem("buylink");
    window.open(buylink);
    sessionStorage.removeItem("buylink");
}

function readNews(i) {
    fetch('https://newsapi.org/v2/top-headlines?sources=polygon&apiKey=45ea3de766734628bac088677c066323')
    .then((response) => response.json())
    .then(data => {
        news_array = data.articles;
        window.open(data.articles[i].url);
    });
}

function openFB() {
    window.open('https://www.facebook.com')
}

function openTwitter() {
    window.open('https://www.twitter.com')
}

function hax() {
    sessionStorage.clear();
    sessionStorage.setItem('user_id', 1);
    sessionStorage.setItem('username', 'root');
    sessionStorage.setItem('age', 99);
}