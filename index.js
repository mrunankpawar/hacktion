// Detecting Button press 

var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for(var i = 0; i < numberOfDrumButtons; i++){

    document.querySelectorAll(".drum")[i].addEventListener("click", function (){

        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);

    });
}

// Detecting KeyBoard press 

document.addEventListener("keydown", function(event){

    makeSound(event.key);
    buttonAnimation(event.key);

})

function makeSound(key){

    switch (key) {
        case "w":
            var pushpa = new Audio('sounds/joker.mp3');
            pushpa.play();
            break;
        
        case "a":
            var petta = new Audio('sounds/petta.mp3');
            petta.play();
            break;
            
        case "s":
            var saaho = new Audio('sounds/saaho.mp3');
            saaho.play();
            break;

        case "d":
            var heatWaves = new Audio('sounds/heat\ waves.mp3');
            heatWaves.play();
            break;
        
        case "j":
            var tom2 = new Audio('sounds/tokyo\ drift.mp3');
            tom2.play();
            var yenti = new Audio('sounds/yenti-yenti.mp4a');
            yenti.play();
            break;

        case "k":
            var tom3 = new Audio('sounds/end game.mp3');
            tom3.play();
            break;

        case "l":
            var tom4 = new Audio('sounds/blinding lights.mp3');
            tom4.play();
            break;
    
        default:
            console.log(buttonInnerHTML);
    }
}

function buttonAnimation(currentKey){

    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed")
    }, 100);

}