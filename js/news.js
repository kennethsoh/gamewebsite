function getNews() {
    fetch('https://newsapi.org/v2/top-headlines?sources=ign&apiKey=45ea3de766734628bac088677c066323')
    .then(function(res) {
        return res.json();
    })
    .then(function(myJson) {
        console.log(JSON.stringify(myJson));
    });
}


function displayNews(){

    fetch('https://newsapi.org/v2/top-headlines?sources=polygon&apiKey=45ea3de766734628bac088677c066323')
    .then((response) => response.json())
    .then(data => {
        news_array = data.articles;
        console.log(data.articles);
   
    let output = "<p></p>"; //Don't delete this 

    for (i in data.articles) {
        if (data.articles[i].content != null && data.articles[i].urlToImage != null) { 
        var content = data.articles[i].content;
        subContent = content.substring(0, 236);

        output += 
        '<div class= "row newsbox" style="margin:auto"> \
            <img class="thumbnail curDf col-sm-4 col-md-offset-5"" style="align-content:left" src=' + data.articles[i].urlToImage + '> \
            <div class="col-sm-8 col-md-offset-5">\
                <h3 class="whiteTxt">' + data.articles[i].title +' </h3> \
                <p class="whiteTxt">' + subContent + ' ...</p> \
                <form><button class="newsButton" type="submit" formtarget="_blank" formaction="'+data.articles[i].url+'">Read More</button></form> \
            </div>\
        </div>\
        <br>\
        <hr>'
        ;
        } else {
        output += 
        '<div class= "row newsbox" style="margin:auto"> \
            <img class="thumbnail curDf col-sm-4 col-md-offset-5"" style="align-content:left, border:0.5px" src="/images/Polygon.jpg"> \
            <div class="col-sm-8 col-md-offset-5">\
                <h3 class="whiteTxt">' + data.articles[i].title +' </h3> \
                <form><button class="newsButton" type="submit" formtarget="_blank" formaction="'+data.articles[i].url+'">Read More</button></form> \
            </div>\
        </div>\
        <br>\
        <hr>'
        ;
        }
    }

document.getElementById('output').innerHTML = output;

})
}