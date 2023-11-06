//clearTimeout na prática
var x = 0;

var myTime = setTimeout(function(){
    console.log(" x é o 0")
},1500);

x = 5;
if(x > 0){
    clearTimeout(myTime);
    console.log("O x passou de 0");
}



//clearSetInterval na prática
var myInterval = setInterval(function() {
    console.log("Imprimento interval");
}, 500);

setTimeout(function(){
    console.log("Não precisamo mais repetir!");
    clearInterval(myInterval);
}, 1500);