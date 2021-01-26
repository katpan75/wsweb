function namefunction(){
    var names = ['Mary', 'Tom', 'Jack'];
    var number = Math.floor(Math.random() * names.length);
    var name = names[number]
    return name;
}

function myfunction(){
    document.getElementById("button").innerHTML = namefunction();}