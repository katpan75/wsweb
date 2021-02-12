$(function(){
    $(".change").click(function(){
        let x = Math.floor((Math.random() * 10));
        $("body").css("background-color","#"+x+"8B"+x+"B5");
    });

});