function namefunction(){
    var names = ['Mary', 'Tom', 'Jack','Eddie','Henry','Yuki','Lee'];
    var number = Math.floor(Math.random() * names.length);
    var name = names[number]
    return name;
}

function myfunction(){
    document.getElementById("button").innerHTML = namefunction();}