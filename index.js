
var buttonList = document.querySelectorAll(".drum");

for(let i = 0; i < buttonList.length; i++){
    buttonList[i].addEventListener("click", handleClick);
}

function handleClick(){
    var buttonInnerHTML = this.innerHTML;
    makesound(buttonInnerHTML);
    buttonAnnimation(buttonInnerHTML);
  
}

document.addEventListener("keydown", function(event){
    var keyboardButton = event.key;
    makesound(keyboardButton);
    buttonAnnimation(keyboardButton);
});

function makesound(key){
    switch (key) {
        case "w":
            var tom1 = new Audio('./sounds/tom-1.mp3');
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio('./sounds/tom-2.mp3');
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio('./sounds/tom-3.mp3');
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio('./sounds/tom-4.mp3');
            tom4.play();
            break;
        case "j":
            var crash = new Audio('./sounds/crash.mp3');
            crash.play();
            break;
        case "k":
            var kickBase = new Audio('./sounds/kick-bass.mp3');
            kickBase.play();
            break;
        case "l":
            var snare = new Audio('./sounds/snare.mp3');
            snare.play();
            break;
    
        default: console.log(buttonInnerHTML);
            break;
    }
}

function buttonAnnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);
    
}