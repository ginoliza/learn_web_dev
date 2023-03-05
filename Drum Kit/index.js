// Obtener el tamaño del array de botones 
var len = document.querySelectorAll(".drum").length;

function playSound() {
    var foo = this.innerHTML;
    var audio = new Audio("sounds/tom-1.mp3");
    switch (foo) {
        case "w":
            audio = new Audio("sounds/tom-1.mp3");
            break;
        case "a":
            audio = new Audio("sounds/tom-2.mp3");
            break;
        case "s":
            audio = new Audio("sounds/tom-3.mp3");
            break;
        case "d":
            audio = new Audio("sounds/tom-4.mp3");
            break;
        case "j":
            audio = new Audio("sounds/snare.mp3");
            break;
        case "k":
            audio = new Audio("sounds/crash.mp3");
            break;
        case "l":
            audio = new Audio("sounds/kick-bass.mp3");
            break;
        default:
            break;
    }
    audio.play();
}

// Iterar por todo el array de botones
for (var i = 0; i < len; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", playSound);
}