$(function(){

let x = ["Rosie","Daisy","Violet","Iris"];
$(".guess").on("input", function(){
  for(i=0; i<x.length; i++){
    if(x[i]===$(".guess").val()){
      $(".answer.yes").css("display","block");
    }
  }
});



});