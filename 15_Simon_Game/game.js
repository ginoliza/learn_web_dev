var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];

function playSound(name){
    var audio = new Audio(name);
    audio.play();        
}

function animatePress(currentColour){
    $("#"+currentColour).addClass("pressed");
    setTimeout(function(){
        $("#"+currentColour).removeClass("pressed");
    }, 100);
}

function nextSequence(){
    var randomNumber = Math.floor(Math.random()*4);    
    var randomChosenColour = buttonColours[randomNumber];    
    gamePattern.push(randomChosenColour);    
    $("#"+randomChosenColour).fadeOut(200).fadeIn(200);    
    playSound("sounds/"+randomChosenColour+".mp3");
}

$(".btn").click(function () {
    var userChosenColour = this.id;
    userClickedPattern.push(userChosenColour);
    playSound("sounds/"+userChosenColour+".mp3");
    animatePress(userChosenColour);
});

nextSequence();