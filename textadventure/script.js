$(function(){
    let nice1;
    let bad1;
    $(".true1").click(function(){
        nice1 = 1;
        bad1 = 0;
        $(".true1").css("background-color","grey");
        $(".false1").css("background-color","");
        checkvalue();
    });
    $(".false1").click(function(){
        bad1 = 1;
        nice1 = 0;
        $(".false1").css("background-color","grey");
        $(".true1").css("background-color","");
        checkvalue();
    });

    let nice2;
    let bad2;
    $(".true2").click(function(){
        nice2 = 0;
        bad2 = 1;
        $(".true2").css("background-color","grey");
        $(".false2").css("background-color","");
        checkvalue();
    });
    $(".false2").click(function(){
        bad2 = 0;
        nice2 = 1;
        $(".false2").css("background-color","grey");
        $(".true2").css("background-color","");
        checkvalue();
    });

    let nice3;
    let bad3;
    $(".true3").click(function(){
        nice3 = 0;
        bad3 = 1;
        $(".true3").css("background-color","grey");
        $(".false3").css("background-color","");
        checkvalue();
    });
    $(".false3").click(function(){
        bad3 = 0;
        nice3 = 1;
        $(".false3").css("background-color","grey");
        $(".true3").css("background-color","");
        checkvalue();
    });

    let nice4;
    let bad4;
    $(".true4").click(function(){
        nice4 = 0;
        bad4 = 1;
        $(".true4").css("background-color","grey");
        $(".false4").css("background-color","");
        checkvalue();
    });
    $(".false4").click(function(){
        bad4 = 0;
        nice4 = 1;
        $(".false4").css("background-color","grey");
        $(".true4").css("background-color","");
        checkvalue();
    });

    let nice5;
    let bad5;
    $(".true5").click(function(){
        nice5 = 0;
        bad5 = 1;
        $(".true5").css("background-color","grey");
        $(".false5").css("background-color","");
        checkvalue();
        
    });
    $(".false5").click(function(){
        bad5 = 0;
        nice5 = 1;
        $(".false5").css("background-color","grey");
        $(".true5").css("background-color","");
        checkvalue();
    });

    function checkvalue(){
        if(nice1+nice2+nice3+nice4+nice5>bad1+bad2+bad3+bad4+bad5){
            $(".answer").html("The weather is kind of ok.");
        }else if(bad1+bad2+bad3+bad4+bad5>nice1+nice2+nice3+nice4+nice5){
            $(".answer").html("The weather is bad.")
        }
    }


});