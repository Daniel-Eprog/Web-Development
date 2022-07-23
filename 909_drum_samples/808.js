document.querySelector("button.a").style.backgroundColor = "blue";
document.querySelector("button.o").style.backgroundColor = "blue";
document.querySelector("button.d").style.backgroundColor = "blue";
document.querySelector("button.p").style.backgroundColor = "yellow";
document.querySelector("button.y").style.backgroundColor = "yellow";
document.querySelector("button.u").style.backgroundColor = "yellow";
document.querySelector("button.i").style.backgroundColor = "yellow";
document.querySelector("button.s").style.backgroundColor = "yellow";

//Looks at number of buttons with class 'drum' and sets variable numberButtons = to that number
var numberButtons = document.querySelectorAll(".drum").length;

//Change button size to fit
for (i = 0; i<numberButtons; i++){

  document.querySelectorAll("button.drum")[i].style.width = "65px";
  document.querySelectorAll("button.drum")[i].style.height = "90px";

}

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
      var kick = new Audio("sounds/808kick.WAV");
      kick.play();
    break;

    case "w":
      var snare = new Audio("sounds/808snare.WAV");
      snare.play();
    break;

    case "e":
      var lotom = new Audio("sounds/808tomlo.WAV");
      lotom.play();
    break;

    case "r":
      var midtom = new Audio("sounds/808tommid.WAV");
      midtom.play();
    break;

    case "t":
      var hitom = new Audio("sounds/808tomhi.WAV");
      hitom.play();
    break;

    case "y":
      var congalo = new Audio("sounds/808congalo.WAV");
      congalo.play();
    break;

    case "u":
      var congamid = new Audio("sounds/808congamid.WAV");
      congamid.play();
    break;

    case "i":
      var congahi = new Audio("sounds/808congahi.WAV");
      congahi.play();
    break;

    case "o":
      var rimshot = new Audio("sounds/808rimshot.WAV");
      rimshot.play();
    break;

    case "p":
      var clave = new Audio("sounds/808clave.WAV");
      clave.play();
    break;

    case "a":
      var clap = new Audio("sounds/808clap.WAV");
      clap.play();
    break;

    case "s":
      var maracas = new Audio("sounds/808maracas.WAV");
      maracas.play();
    break;

    case "d":
      var cowbell = new Audio("sounds/808cowbell.WAV");
      cowbell.play();
    break;

    case "f":
      var cymbal = new Audio("sounds/808cymbal.WAV");
      cymbal.play();
    break;

    case "g":
      var hho = new Audio("sounds/808hho.WAV");
      hho.play();
    break;

    case "h":
      var hhc = new Audio("sounds/808hhc.WAV");
      hhc.play();
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
