//Looks at number of buttons with class 'drum' and sets variable numberButtons = to that number
var numberButtons = document.querySelectorAll(".drum").length;

//Goes through each button and applies animation element and sound effect
for ( i = 0; i<numberButtons; i++){

document.querySelectorAll(".drum")[i].addEventListener("click", function(){


  var buttonInnerHTML = this.innerHTML;

  makeSound(buttonInnerHTML);
  buttonAnimation(buttonInnerHTML);

 });

}

document.addEventListener("keydown", function(event) {

makeSound(event.key);
buttonAnimation(event.key);

})


function makeSound(key){
  switch (key) {
    case "q":
      var kick = new Audio("sounds/707kick.WAV");
      kick.play();
    break;

    case "w":
      var snare = new Audio("sounds/707snare.WAV");
      snare.play();
    break;

    case "e":
      var lowtom = new Audio("sounds/707lowtom.WAV");
      lowtom.play();
    break;

    case "r":
      var midtom = new Audio("sounds/707midtom.WAV");
      midtom.play();
    break;

    case "t":
      var hitom = new Audio("sounds/707hitom.WAV");
      hitom.play();
    break;

    case "y":
      var rim = new Audio("sounds/707rimshot.WAV");
      rim.play();
    break;

    case "u":
      var cowbell = new Audio("sounds/707cowbell.WAV");
      cowbell.play();
    break;

    case "i":
      var clap = new Audio("sounds/707clap.WAV");
      clap.play();
    break;

    case "o":
      var tambourine = new Audio("sounds/707tambourine.WAV");
      tambourine.play();
    break;

    case "p":
      var hhc = new Audio("sounds/707HHC.WAV");
      hhc.play();
    break;

    case "a":
      var hho = new Audio("sounds/707HHO.WAV");
      hho.play();
    break;

    case "s":
      var crash = new Audio("sounds/707crash.WAV");
      crash.play();
    break;

    case "d":
      var ride = new Audio("sounds/707ride.WAV");
      ride.play();
    break;

    default: console.log(buttonInnerHTML);
  }

}

function buttonAnimation(currentKey){

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function(){

    activeButton.classList.remove("pressed");

  }, 100);

}
