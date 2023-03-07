var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var started = false;
var level = 0;

function playSound(name) {
    var audio = new Audio(name);
    audio.play();
}

function animatePress(currentColour) {
    $("#" + currentColour).addClass("pressed");
    setTimeout(function () {
        $("#" + currentColour).removeClass("pressed");
    }, 100);
}

function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#" + randomChosenColour).fadeOut(200).fadeIn(200);
    playSound("sounds/" + randomChosenColour + ".mp3");
    level++;
    $("h1").text("Level " + level);
}

$(".btn").click(function () {
    var userChosenColour = this.id;
    userClickedPattern.push(userChosenColour);
    playSound("sounds/" + userChosenColour + ".mp3");
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length - 1);
});

$(document).keypress(function () {
    if (started === false) {
        nextSequence();
        started = true;

        $("h1").text("Level " + level);
    }
});

function checkAnswer(currentLevel) {
    if (userClickedPattern[currentLevel]===gamePattern[currentLevel]) {
        console.log("success");
        setTimeout(() => {
            nextSequence();
        }, 1000);
    } else {
        console.log("wrong");
    }
}

