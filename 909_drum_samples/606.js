
document.querySelector("button.y").style.backgroundColor = "violet";
document.querySelector("button.u").style.backgroundColor = "violet";
document.querySelector("button.t").style.backgroundColor = "violet";

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
      var kick = new Audio("sounds/606kick.WAV");
      kick.play();
    break;

    case "w":
      var snare = new Audio("sounds/606snare.WAV");
      snare.play();
    break;

    case "e":
      var lowtom = new Audio("sounds/606lotom.WAV");
      lowtom.play();
    break;

    case "r":
      var hitom = new Audio("sounds/606hitom.WAV");
      hitom.play();
    break;

    case "t":
      var cymbal = new Audio("sounds/606cymbal.WAV");
      cymbal.play();
    break;

    case "y":
      var hhc = new Audio("sounds/606hhc.WAV");
      hhc.play();
    break;

    case "u":
      var hho = new Audio("sounds/606hho.WAV");
      hho.play();
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
