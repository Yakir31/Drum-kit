
var numOfDrumButton = document.querySelectorAll(".drum").length;
// for loop to check which drum is pressed and attach event listener.
for (var i = 0; i < numOfDrumButton; i++) {
    
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        var btnInnerHtml = this.innerHTML;
        makeSound(btnInnerHtml);
        buttonAnimation(btnInnerHtml);
    }); 
}
//check which key in keyboard was pressed
//adding event listener to the specific key
document.addEventListener("keydown", function(e){
    makeSound(e.key);
    buttonAnimation(e.key);
});
//switch statment that will get a parameter and will check against the "case"

function makeSound(key){
    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            var kickBass = new Audio("sounds/kick-bass.mp3");
            kickBass.play();
            break;
    
        default:console.log()
            break;
    }
}

//adding animation to the buttons by adding class to the pressed button and when finish remove it. 
function buttonAnimation(currKey){
    var activButton = document.querySelector("." + currKey);
    
    activButton.classList.add("pressed");
    setTimeout(function(){
        activButton.classList.remove("pressed");
    }, 100);
  }



