//This function is to call the games api and get all the games for the home page


var message = "";
function getGames(){
    fetch("/games")
    .then((response) => response.json())
    .then((data) => {
        game_array = data;
        displayGamesTable1();
        displayGamesTable2();
        displayGamesTable3();
        displayGamesTable4();
        displayGamesTable5();
        displayGamesTable6();
        displayGamesTable7();
        displayGamesTable8();
        displayGamesTable9();

    });
}

// function getAgeGames() {
//     //GET AGE RATING
//     fetch('/agegames/'+age_rating)
//     .then((response) => response.json())
//     .then((data) = {
//         game_array = data
//     });
// }

function getPCGames(){
    fetch("/pcgames")
    .then((response) => response.json())
    .then((data) => {
        game_array = data;
        displayPCGamesTable1();
        displayPCGamesTable2();
        displayPCGamesTable3();
        

    });
}

function getConsoleGames(){
    fetch("/consolegames")
    .then((response) => response.json())
    .then((data) => {
        game_array = data;
        console.log(data);
        displayConsoleGamesTable1();
        displayConsoleGamesTable2();
        displayConsoleGamesTable3();
        

    });
}

function getMobileGames(){
    fetch("/mobilegames")
    .then((response) => response.json())
    .then((data) => {
        game_array = data;
        displayMobileGamesTable1();
        displayMobileGamesTable2();
        displayMobileGamesTable3();
        

    });
}

function displayGamesTable1(){

    var Lcell = document.getElementById("gamesTable1L");
    var CLcell = document.getElementById("gamesTable1CL");
    var CRcell = document.getElementById("gamesTable1CR");
    var Rcell = document.getElementById("gamesTable1R");

    L = '<div class="center"><img id="game0Img" class="thumbnail img-fluid img-thumbnail" onclick="tempSS(0)" src=' + game_array[0].thumbnail + ' />'
    CL = '<div class="center"><img id="game1Img" class="thumbnail img-fluid img-thumbnail" onclick="tempSS(1)" src=' + game_array[1].thumbnail + ' />'
    CR = '<div class="center"><img id="game2Img" class="thumbnail img-fluid img-thumbnail" onclick="tempSS(2)" src=' + game_array[2].thumbnail + ' />'
    R = '<div class="center"><img id="game3Img" class="thumbnail img-fluid img-thumbnail" onclick="tempSS(3)" src=' + game_array[3].thumbnail + ' /> '
    
    Lcell.innerHTML = L;
    CLcell.innerHTML = CL;
    CRcell.innerHTML = CR;
    Rcell.innerHTML = R;
}

function displayGamesTable2(){

    var Lcell = document.getElementById("gamesTable2L");
    var CLcell = document.getElementById("gamesTable2CL");
    var CRcell = document.getElementById("gamesTable2CR");
    var Rcell = document.getElementById("gamesTable2R");

    L = '<div class="center"><img id="game4Img" class="thumbnail img-fluid img-thumbnail" onclick="tempSS(4)" src=' + game_array[4].thumbnail + ' /> '    
    CL = '<div class="center"><img id="game5Img" class="thumbnail img-fluid img-thumbnail" onclick="tempSS(5)" src=' + game_array[5].thumbnail + ' /> '
    CR = '<div class="center"><img id="game6Img" class="thumbnail img-fluid img-thumbnail" onclick="tempSS(6)" src=' + game_array[6].thumbnail + ' /> '
    R = '<div class="center"><img id="game7Img" class="thumbnail img-fluid img-thumbnail" onclick="tempSS(7)" src=' + game_array[7].thumbnail + ' /> '
    
    Lcell.innerHTML = L;
    CLcell.innerHTML = CL;
    CRcell.innerHTML = CR;
    Rcell.innerHTML = R;
}

function displayGamesTable3(){

    var Lcell = document.getElementById("gamesTable3L");
    var CLcell = document.getElementById("gamesTable3CL");
    var CRcell = document.getElementById("gamesTable3CR");
    var Rcell = document.getElementById("gamesTable3R");

    L = '<div class="center"><img id="game8Img" class="thumbnail img-fluid img-thumbnail"  onclick="tempSS(8)" src=' + game_array[8].thumbnail + ' /> '
    CL = '<div class="center"><img id="game9Img" class="thumbnail img-fluid img-thumbnail"   onclick="tempSS(9)" src=' + game_array[9].thumbnail + ' /> '
    CR = '<div class="center"><img id="game10Img" class="thumbnail img-fluid img-thumbnail"  onclick="tempSS(10)" src=' + game_array[10].thumbnail + ' /> '
    R = '<div class="center"><img id="game11Img" class="thumbnail img-fluid img-thumbnail"  onclick="tempSS(11)" src=' + game_array[11].thumbnail + ' /> '
    
    Lcell.innerHTML = L;
    CLcell.innerHTML = CL;
    CRcell.innerHTML = CR;
    Rcell.innerHTML = R;
}

function displayGamesTable4(){

    var Lcell = document.getElementById("gamesTable4L");
    var CLcell = document.getElementById("gamesTable4CL");
    var CRcell = document.getElementById("gamesTable4CR");
    var Rcell = document.getElementById("gamesTable4R");

    L = '<div class="center"><img id="game12Img" class="thumbnail img-fluid img-thumbnail"  onclick="tempSS(12)" src=' + game_array[12].thumbnail + ' /> '
    CL = '<div class="center"><img id="game13Img" class="thumbnail img-fluid img-thumbnail" onclick="tempSS(13)" src=' + game_array[13].thumbnail + ' /> '
    CR = '<div class="center"><img id="game14Img" class="thumbnail img-fluid img-thumbnail" onclick="tempSS(14)" src=' + game_array[14].thumbnail + ' /> '
    R = '<div class="center"><img id="game15Img" class="thumbnail img-fluid img-thumbnail"  onclick="tempSS(15)" src=' + game_array[15].thumbnail + ' /> '
    
    Lcell.innerHTML = L;
    CLcell.innerHTML = CL;
    CRcell.innerHTML = CR;
    Rcell.innerHTML = R;
}

function displayGamesTable5(){

    var Lcell = document.getElementById("gamesTable5L");
    var CLcell = document.getElementById("gamesTable5CL");
    var CRcell = document.getElementById("gamesTable5CR");
    var Rcell = document.getElementById("gamesTable5R");

    L = '<div class="center"><img id="game16Img" class="thumbnail img-fluid img-thumbnail"  onclick="tempSS(16)" src=' + game_array[16].thumbnail + ' /> '
    CL = '<div class="center"><img id="game17Img" class="thumbnail img-fluid img-thumbnail" onclick="tempSS(17)" src=' + game_array[17].thumbnail + ' /> '
    CR = '<div class="center"><img id="game18Img" class="thumbnail img-fluid img-thumbnail" onclick="tempSS(18)" src=' + game_array[18].thumbnail + ' /> '
    R = '<div class="center"><img id="game19Img" class="thumbnail img-fluid img-thumbnail"  onclick="tempSS(19)" src=' + game_array[19].thumbnail + ' /> '
    
    Lcell.innerHTML = L;
    CLcell.innerHTML = CL;
    CRcell.innerHTML = CR;
    Rcell.innerHTML = R;
}

function displayGamesTable6(){

    var Lcell = document.getElementById("gamesTable6L");
    var CLcell = document.getElementById("gamesTable6CL");
    var CRcell = document.getElementById("gamesTable6CR");
    var Rcell = document.getElementById("gamesTable6R");

    L = '<div class="center"><img id="game20Img" class="thumbnail img-fluid img-thumbnail"  onclick="tempSS(20)" src=' + game_array[20].thumbnail + ' /> '
    CL = '<div class="center"><img id="game21Img" class="thumbnail img-fluid img-thumbnail" onclick="tempSS(21)" src=' + game_array[21].thumbnail + ' /> '
    CR = '<div class="center"><img id="game22Img" class="thumbnail img-fluid img-thumbnail" onclick="tempSS(22)" src=' + game_array[22].thumbnail + ' /> '
    R = '<div class="center"><img id="game23Img" class="thumbnail img-fluid img-thumbnail"  onclick="tempSS(23)" src=' + game_array[23].thumbnail + ' /> '
    
    Lcell.innerHTML = L;
    CLcell.innerHTML = CL;
    CRcell.innerHTML = CR;
    Rcell.innerHTML = R;
}

function displayGamesTable7(){

    var Lcell = document.getElementById("gamesTable7L");
    var CLcell = document.getElementById("gamesTable7CL");
    var CRcell = document.getElementById("gamesTable7CR");
    var Rcell = document.getElementById("gamesTable7R");

    L = '<div class="center"><img id="game24Img" class="thumbnail img-fluid img-thumbnail"  onclick="tempSS(24)" src=' + game_array[24].thumbnail + ' /> '
    CL = '<div class="center"><img id="game25Img" class="thumbnail img-fluid img-thumbnail" onclick="tempSS(25)" src=' + game_array[25].thumbnail + ' /> '
    CR = '<div class="center"><img id="game26Img" class="thumbnail img-fluid img-thumbnail" onclick="tempSS(26)" src=' + game_array[26].thumbnail + ' /> '
    R = '<div class="center"><img id="game27Img" class="thumbnail img-fluid img-thumbnail"  onclick="tempSS(27)" src=' + game_array[27].thumbnail + ' /> '
    
    Lcell.innerHTML = L;
    CLcell.innerHTML = CL;
    CRcell.innerHTML = CR;
    Rcell.innerHTML = R;
}

function displayGamesTable8(){

    var Lcell = document.getElementById("gamesTable8L");
    var CLcell = document.getElementById("gamesTable8CL");
    var CRcell = document.getElementById("gamesTable8CR");
    var Rcell = document.getElementById("gamesTable8R");

    L = '<div class="center"><img id="game28Img" class="thumbnail img-fluid img-thumbnail"  onclick="tempSS(28)" src=' + game_array[28].thumbnail + ' /> '
    CL = '<div class="center"><img id="game29Img" class="thumbnail img-fluid img-thumbnail" onclick="tempSS(29)" src=' + game_array[29].thumbnail + ' /> '
    CR = '<div class="center"><img id="game30Img" class="thumbnail img-fluid img-thumbnail" onclick="tempSS(30)" src=' + game_array[30].thumbnail + ' /> '
    R = '<div class="center"><img id="game31Img" class="thumbnail img-fluid img-thumbnail"  onclick="tempSS(31)" src=' + game_array[31].thumbnail + ' /> '
    
    Lcell.innerHTML = L;
    CLcell.innerHTML = CL;
    CRcell.innerHTML = CR;
    Rcell.innerHTML = R;
}

function displayGamesTable9(){

    var Lcell = document.getElementById("gamesTable9L");
    var CLcell = document.getElementById("gamesTable9CL");
    var CRcell = document.getElementById("gamesTable9CR");
    var Rcell = document.getElementById("gamesTable9R");

    L = '<div class="center"><img id="game32Img" class="thumbnail img-fluid img-thumbnail"  onclick="tempSS(32)" src=' + game_array[32].thumbnail + ' /> '
    CL = '<div class="center"><img id="game33Img" class="thumbnail img-fluid img-thumbnail" onclick="tempSS(33)" src=' + game_array[33].thumbnail + ' /> '
    CR = '<div class="center"><img id="game34Img" class="thumbnail img-fluid img-thumbnail" onclick="tempSS(34)" src=' + game_array[34].thumbnail + ' /> '
    R = '<div class="center"><img id="game35Img" class="thumbnail img-fluid img-thumbnail"  onclick="tempSS(35)" src=' + game_array[35].thumbnail + ' /> '
    
    Lcell.innerHTML = L;
    CLcell.innerHTML = CL;
    CRcell.innerHTML = CR;
    Rcell.innerHTML = R;
}


function displayPCGamesTable1(){

    var Lcell = document.getElementById("gamesTable1L");
    var CLcell = document.getElementById("gamesTable1CL");
    var CRcell = document.getElementById("gamesTable1CR");
    var Rcell = document.getElementById("gamesTable1R");

    L = '<div class="center"><img id="game0Img" class="thumbnail img-fluid img-thumbnail" onclick="tempSS(0)" src=' + game_array[0].thumbnail + ' />'
    CL = '<div class="center"><img id="game1Img" class="thumbnail img-fluid img-thumbnail" onclick="tempSS(1)" src=' + game_array[1].thumbnail + ' />'
    CR = '<div class="center"><img id="game2Img" class="thumbnail img-fluid img-thumbnail" onclick="tempSS(2)" src=' + game_array[2].thumbnail + ' />'
    R = '<div class="center"><img id="game3Img" class="thumbnail img-fluid img-thumbnail" onclick="tempSS(3)" src=' + game_array[3].thumbnail + ' /> '
    
    Lcell.innerHTML = L;
    CLcell.innerHTML = CL;
    CRcell.innerHTML = CR;
    Rcell.innerHTML = R;
}

function displayPCGamesTable2(){

    var Lcell = document.getElementById("gamesTable2L");
    var CLcell = document.getElementById("gamesTable2CL");
    var CRcell = document.getElementById("gamesTable2CR");
    var Rcell = document.getElementById("gamesTable2R");

    L = '<div class="center"><img id="game4Img" class="thumbnail img-fluid img-thumbnail" onclick="tempSS(4)" src=' + game_array[4].thumbnail + ' /> '    
    CL = '<div class="center"><img id="game5Img" class="thumbnail img-fluid img-thumbnail" onclick="tempSS(5)" src=' + game_array[5].thumbnail + ' /> '
    CR = '<div class="center"><img id="game6Img" class="thumbnail img-fluid img-thumbnail" onclick="tempSS(6)" src=' + game_array[6].thumbnail + ' /> '
    R = '<div class="center"><img id="game7Img" class="thumbnail img-fluid img-thumbnail" onclick="tempSS(7)" src=' + game_array[7].thumbnail + ' /> '
    
    Lcell.innerHTML = L;
    CLcell.innerHTML = CL;
    CRcell.innerHTML = CR;
    Rcell.innerHTML = R;
}

function displayPCGamesTable3(){

    var Lcell = document.getElementById("gamesTable3L");
    var CLcell = document.getElementById("gamesTable3CL");
    var CRcell = document.getElementById("gamesTable3CR");
    var Rcell = document.getElementById("gamesTable3R");

    L = '<div class="center"><img id="game8Img" class="thumbnail img-fluid img-thumbnail"  onclick="tempSS(8)" src=' + game_array[8].thumbnail + ' /> '
    CL = '<div class="center"><img id="game9Img" class="thumbnail img-fluid img-thumbnail"   onclick="tempSS(9)" src=' + game_array[9].thumbnail + ' /> '
    CR = '<div class="center"><img id="game10Img" class="thumbnail img-fluid img-thumbnail"  onclick="tempSS(10)" src=' + game_array[10].thumbnail + ' /> '
    R = '<div class="center"><img id="game11Img" class="thumbnail img-fluid img-thumbnail"  onclick="tempSS(11)" src=' + game_array[11].thumbnail + ' /> '
    
    Lcell.innerHTML = L;
    CLcell.innerHTML = CL;
    CRcell.innerHTML = CR;
    Rcell.innerHTML = R;
}

function displayConsoleGamesTable1(){

    var Lcell = document.getElementById("gamesTable1L");
    var CLcell = document.getElementById("gamesTable1CL");
    var CRcell = document.getElementById("gamesTable1CR");
    var Rcell = document.getElementById("gamesTable1R");

    L = '<div class="center"><img id="game0Img" class="thumbnail img-fluid img-thumbnail" onclick="tempSS(12)" src=' + game_array[0].thumbnail + ' />'
    CL = '<div class="center"><img id="game1Img" class="thumbnail img-fluid img-thumbnail" onclick="tempSS(13)" src=' + game_array[1].thumbnail + ' />'
    CR = '<div class="center"><img id="game2Img" class="thumbnail img-fluid img-thumbnail" onclick="tempSS(14)" src=' + game_array[2].thumbnail + ' />'
    R = '<div class="center"><img id="game3Img" class="thumbnail img-fluid img-thumbnail" onclick="tempSS(15)" src=' + game_array[3].thumbnail + ' /> '
    
    Lcell.innerHTML = L;
    CLcell.innerHTML = CL;
    CRcell.innerHTML = CR;
    Rcell.innerHTML = R;
}

function displayConsoleGamesTable2(){

    var Lcell = document.getElementById("gamesTable2L");
    var CLcell = document.getElementById("gamesTable2CL");
    var CRcell = document.getElementById("gamesTable2CR");
    var Rcell = document.getElementById("gamesTable2R");

    L = '<div class="center"><img id="game4Img" class="thumbnail img-fluid img-thumbnail" onclick="tempSS(16)" src=' + game_array[4].thumbnail + ' /> '    
    CL = '<div class="center"><img id="game5Img" class="thumbnail img-fluid img-thumbnail" onclick="tempSS(17)" src=' + game_array[5].thumbnail + ' /> '
    CR = '<div class="center"><img id="game6Img" class="thumbnail img-fluid img-thumbnail" onclick="tempSS(18)" src=' + game_array[6].thumbnail + ' /> '
    R = '<div class="center"><img id="game7Img" class="thumbnail img-fluid img-thumbnail" onclick="tempSS(19)" src=' + game_array[7].thumbnail + ' /> '
    
    Lcell.innerHTML = L;
    CLcell.innerHTML = CL;
    CRcell.innerHTML = CR;
    Rcell.innerHTML = R;
}

function displayConsoleGamesTable3(){

    var Lcell = document.getElementById("gamesTable3L");
    var CLcell = document.getElementById("gamesTable3CL");
    var CRcell = document.getElementById("gamesTable3CR");
    var Rcell = document.getElementById("gamesTable3R");

    L = '<div class="center"><img id="game8Img" class="thumbnail img-fluid img-thumbnail"  onclick="tempSS(20)" src=' + game_array[8].thumbnail + ' /> '
    CL = '<div class="center"><img id="game9Img" class="thumbnail img-fluid img-thumbnail"   onclick="tempSS(21)" src=' + game_array[9].thumbnail + ' /> '
    CR = '<div class="center"><img id="game10Img" class="thumbnail img-fluid img-thumbnail"  onclick="tempSS(22)" src=' + game_array[10].thumbnail + ' /> '
    R = '<div class="center"><img id="game11Img" class="thumbnail img-fluid img-thumbnail"  onclick="tempSS(23)" src=' + game_array[11].thumbnail + ' /> '
    
    Lcell.innerHTML = L;
    CLcell.innerHTML = CL;
    CRcell.innerHTML = CR;
    Rcell.innerHTML = R;
}

function displayMobileGamesTable1(){

    var Lcell = document.getElementById("gamesTable1L");
    var CLcell = document.getElementById("gamesTable1CL");
    var CRcell = document.getElementById("gamesTable1CR");
    var Rcell = document.getElementById("gamesTable1R");

    L = '<div class="center"><img id="game0Img" class="thumbnail img-fluid img-thumbnail" onclick="tempSS(24)" src=' + game_array[0].thumbnail + ' />'
    CL = '<div class="center"><img id="game1Img" class="thumbnail img-fluid img-thumbnail" onclick="tempSS(25)" src=' + game_array[1].thumbnail + ' />'
    CR = '<div class="center"><img id="game2Img" class="thumbnail img-fluid img-thumbnail" onclick="tempSS(26)" src=' + game_array[2].thumbnail + ' />'
    R = '<div class="center"><img id="game3Img" class="thumbnail img-fluid img-thumbnail" onclick="tempSS(27)" src=' + game_array[3].thumbnail + ' /> '
    
    Lcell.innerHTML = L;
    CLcell.innerHTML = CL;
    CRcell.innerHTML = CR;
    Rcell.innerHTML = R;
}

function displayMobileGamesTable2(){

    var Lcell = document.getElementById("gamesTable2L");
    var CLcell = document.getElementById("gamesTable2CL");
    var CRcell = document.getElementById("gamesTable2CR");
    var Rcell = document.getElementById("gamesTable2R");

    L = '<div class="center"><img id="game4Img" class="thumbnail img-fluid img-thumbnail" onclick="tempSS(28)" src=' + game_array[4].thumbnail + ' /> '    
    CL = '<div class="center"><img id="game5Img" class="thumbnail img-fluid img-thumbnail" onclick="tempSS(29)" src=' + game_array[5].thumbnail + ' /> '
    CR = '<div class="center"><img id="game6Img" class="thumbnail img-fluid img-thumbnail" onclick="tempSS(30)" src=' + game_array[6].thumbnail + ' /> '
    R = '<div class="center"><img id="game7Img" class="thumbnail img-fluid img-thumbnail" onclick="tempSS(31)" src=' + game_array[7].thumbnail + ' /> '
    
    Lcell.innerHTML = L;
    CLcell.innerHTML = CL;
    CRcell.innerHTML = CR;
    Rcell.innerHTML = R;
}

function displayMobileGamesTable3(){

    var Lcell = document.getElementById("gamesTable3L");
    var CLcell = document.getElementById("gamesTable3CL");
    var CRcell = document.getElementById("gamesTable3CR");
    var Rcell = document.getElementById("gamesTable3R");

    L = '<div class="center"><img id="game8Img" class="thumbnail img-fluid img-thumbnail"  onclick="tempSS(32)" src=' + game_array[8].thumbnail + ' /> '
    CL = '<div class="center"><img id="game9Img" class="thumbnail img-fluid img-thumbnail"   onclick="tempSS(33)" src=' + game_array[9].thumbnail + ' /> '
    CR = '<div class="center"><img id="game10Img" class="thumbnail img-fluid img-thumbnail"  onclick="tempSS(34)" src=' + game_array[10].thumbnail + ' /> '
    R = '<div class="center"><img id="game11Img" class="thumbnail img-fluid img-thumbnail"  onclick="tempSS(35)" src=' + game_array[11].thumbnail + ' /> '
    
    Lcell.innerHTML = L;
    CLcell.innerHTML = CL;
    CRcell.innerHTML = CR;
    Rcell.innerHTML = R;
}