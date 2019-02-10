//Not working
function search(){

    var searchinput = new Object();
    searchinput.title = document.getElementById("searchfield").value;

    var searchRequest = new XMLHttpRequest();
    searchRequest.open('POST', search_url, true);
    searchRequest.setRequestHeader('Content-type', 'application/json');

    console.log(searchinput.title);

    //This function will be called when data returns from the web api
    searchRequest.onload = function() {

        //get all the games records into our searchResult array based on search
        searchResult_array = JSON.parse(searchRequest.responseText);

        //call the function so as to display all movies tiles for "Now Showing"
        displaySearchResult();
    };

    searchRequest.send(JSON.stringify(searchinput.title));
}

function showSearch() {
    window.location = "searchResults.html";
    sessionStorage.setItem("searchquery",document.getElementById('searchfield').value);
}

//working 
function fetchSearch() {
    var searchRequest = sessionStorage.getItem("searchquery");
    console.log(searchRequest);
    if (searchRequest == null){
        alert("enter search title")
    } else {
    //searchRequest = "\"" + searchRequest + "\""
    var sr = {title: searchRequest};
    

    fetch('/searchapi', {
        method: 'POST', 
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(sr)
        
    })
    .then((response) => response.json())
    .then(data => {
        search_array = data;
        console.log(search_array)

    let output = '';

    for (i in search_array) {
        output += 
        '<div class="row">\
            <div class="col-sm-3 col-md-offset-5"></div>\
            <div id="searchGameResultImg" class="curP col-sm-3 col-md-offset-5"><img class="thumbnail img-fluid img-thumbnail" onclick="goToDetails('+search_array[i].game_id+')" src=/'+search_array[i].thumbnail+'></div>\
            <div class="col-sm-3 col-md-offset-5">\
                <div id="searchGameResultTitle" style="font-weight:bold" class="whiteTxt">'+search_array[i].title+'</div>\
                <div id="searchGameResultTitle" class="whiteTxt">Publisher: &nbsp'+search_array[i].publisher+'</div>\
                <div id="searchGameResultTitle" class="whiteTxt">Age Rating: &nbsp'+search_array[i].age_rating+'+</div>\
                <div id="searchGameResultTitle" class="whiteTxt">Overall Rating: &nbsp'+search_array[i].overall_rating+'</div>\
            </div>\
            <div class="col-sm-3 col-md-offset-5"></div>\
        </div>'
    }

    document.getElementById("searchOutput").innerHTML = output;

    if (search_array.length == 0) {
        $('#noSearchOutput').removeClass('cannotSee'); }
        
    if (search_array.length >= 3) {
        $('#footer').removeClass('footerAbsolute'); }
        });
 
    }
    
}

function goToDetails(gameid) {
    var gameid = parseInt(gameid, 10);

    gameid -= 1;
    tempSS(gameid);
    
}

function placeholderType() {

    
}


    








