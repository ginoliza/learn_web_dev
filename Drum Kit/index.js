// Obtener el tamaño del array de botones 
var len = document.querySelectorAll(".drum").length;

function gotClicked(){
    alert("I got clicked");
}

// Iterar por todo el array de botones
for(var i=0;i<len;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", gotClicked);
}