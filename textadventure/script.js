


function answerquestion(){
    if (document.getElementsByClassName("answer").id = "yes"){
        document.getElementById("changling").innerHTML = "The bear has brutally murdered you and you're a ghost. Want to fly?";
        document.getElementById("yes").innerHTML = "I want to fly as high as possible!";
        document.getElementById("no").innerHTML = "I'll try to become human again";
        document.getElementsByClassName("answer").onclick = "secondquestion()"

    }
    if (document.getElementsByClassName("answer").id = "no"){
        document.getElementById("changling").innerHTML = "The bear is catching up to you and in front of you is a sprawling forest.";
        document.getElementById("yes").innerHTML = "I'm going to climb on a tree and hide.";
        document.getElementById("no").innerHTML = "I'm going to hide behind a tree.";
        document.getElementsByClassName("answer").onclick = "secondquestion()"

    }

}


