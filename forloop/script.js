let x = ["rose","Daisy","violet","Iris"];

let guess = document.getElementById("#guess");
let result = document.getElementById("yourguess");

guess.addEventListener('input', function () { result.textContent = this.value;});


function myfunction(){
    for(i=0; i<x.length; i++){
      if( N == x[i]){
            yes.setAttribute("style","display:block;");

     } else{
            no.setAttribute("style","display:block;");
       }
    }
}