//Change color of buttons to appropriate color section
document.querySelector("button.i").style.backgroundColor = "violet";
document.querySelector("button.o").style.backgroundColor = "violet";


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
      var kick = new Audio("sounds/909kick.WAV");
      kick.play();
    break;

    case "w":
      var snare = new Audio("sounds/909snare.WAV");
      snare.play();
    break;

    case "e":
      var lowtom = new Audio("sounds/909lowtom.WAV");
      lowtom.play();
    break;

    case "r":
      var midtom = new Audio("sounds/909midtom.WAV");
      midtom.play();
    break;

    case "t":
      var hitom = new Audio("sounds/909hitom.WAV");
      hitom.play();
    break;

    case "y":
      var rim = new Audio("sounds/909rimshot.WAV");
      rim.play();
    break;

    case "u":
      var clap = new Audio("sounds/909clap.WAV");
      clap.play();
    break;

    case "i":
      var hho = new Audio("sounds/909hho.WAV");
      hho.play();
    break;

    case "o":
      var hhc = new Audio("sounds/909hhc.WAV");
      hhc.play();
    break;

    case "p":
      var crash = new Audio("sounds/909crash.WAV");
      crash.play();
    break;


    case "a":
      var ride = new Audio("sounds/909ride.WAV");
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
