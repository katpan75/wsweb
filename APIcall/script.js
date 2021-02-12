$(function(){
    let url="https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=VAeNesSjclZwmGDVrAXSgakaDGHvUx9T"
    $.getJSON(url, function(data){
        let y = data.results.books;
       console.log(y);
       $(".pickme").click(function(){
        let x = Math.floor((Math.random() * 10) + 1);
        console.log("<p>"+y[x].author+"</p>")
        $(".answer").html("<p>"+y[x].author+"</p>");
    });
    })


});