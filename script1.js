

/*  first type

document.getElementsByClassName("w")[0].addEventListener("click" , handleclick);
function handleclick(){
    alert(" clicked")
}
*/
/*
var numberOfDrumButtons = document.querySelectorAll(".drum").length;
for(var i=0; i<numberOfDrumButtons; i++){
document.getElementsByClassName("drum")[i].addEventListener("click" , function(){
    var audio = new Audio('/Drum Kit Starting Files/sounds/tom-1.mp3')
    audio.play();
});}

*/



/* ony for sound 
var numberOfDrumButtons = document.querySelectorAll(".drum").length;
for(var i=0; i<numberOfDrumButtons; i++){
document.querySelectorAll(".drum") [i].addEventListener("click", function() {
    var buttonInnerHTML = this.innerHTML;
    switch (buttonInnerHTML) {
    case "w":
    var tom1 = new Audio ("/Drum Kit Starting Files/sounds/tom-1.mp3");
    tom1.play();
    break;
    case "a":
    var tom2 = new Audio("/Drum Kit Starting Files/sounds/tom-2.mp3");
    tom2.play();
    break;
    case "s":
    var tom3 = new Audio('/Drum Kit Starting Files/sounds/tom-3.mp3');
    tom3.play();
    break;
    case "d":
    var tom4 = new Audio ('/Drum Kit Starting Files/sounds/tom-4.mp3');
    tom4.play();
    break;
    case "j":
    var snare = new Audio('/Drum Kit Starting Files/sounds/snare.mp3');
    snare.play();
    break;
    case "k":
    var crash = new Audio('/Drum Kit Starting Files/sounds/crash.mp3');
    crash.play();
    case "l":
    var kick= new Audio('/Drum Kit Starting Files/sounds/kick-bass.mp3');
    kick.play();

    default:
    }});
}

// key listner so we can control website by keys

document.addEventListener("keydown", function(event){
    console.log.event;

});


*/

// ---------------combing/////////////


var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });

}

document.addEventListener("keypress", function(event) {

  makeSound(event.key);

  buttonAnimation(event.key);

});


function makeSound(key) {

  switch (key) {
    case "w":
      var tom1 = new Audio("./sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("./sounds/tom-2.mp3");
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
      var snare = new Audio('./sounds/snare.mp3');
      snare.play();
      break;

    case "k":
      var crash = new Audio('./sounds/crash.mp3');
      crash.play();
      break;

    case "l":
      var kick = new Audio('./sounds/kick-bass.mp3');
      kick.play();
      break;


    default: console.log(key);

  }
}


function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}


setTimeout(function() {
  alert("Dont forget to hire me!")
  
}, 5000);
