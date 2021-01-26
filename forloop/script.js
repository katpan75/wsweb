let x = ["rose","Daisy","violet","Iris"];

let yes = document.getElementsByClassName("answeryes");
let no = document.getElementsByClassName("answerno");

function myfunction(){
    let N = document.getElementById("guess").value;
    console.log(N);
    for(i=0; i<x.length; i++){
      if( N == x[i]){
            yes.setAttribute("style","display:block;");

     } else{
            no.setAttribute("style","display:block;");
       }
    }
}