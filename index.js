// document.querySelectorAll("button")[0].addEventListener("click", handleClick);
// instead of doing for all like array [0] [1] [2]

// we use for loops
var numberOfButtons = document.querySelectorAll(".drum").length;

 for (var i = 0; i < numberOfButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
}

function handleClick() {

  var buttonInnerHtml = this.innerHTML;
  // this.style.transform: scale(0.9);
   makeSound(buttonInnerHtml);
   buttonAnimation(buttonInnerHtml);


}

  // document.addEventListener('keydown', function(){alert("keyPress");});
// detecting keyboard press
  window.addEventListener('keydown', e=> {
   makeSound(e.key);
   buttonAnimation(e.key);
  });

function makeSound(key){


  switch (key) {
    case "w":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;

    case "a":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
    case "s":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
    case "d":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
    case "j":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
    case "k":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
    case "l":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
    default:

  }

}

// adding animation or changing css on the fly

function buttonAnimation(currentKey){
  var activeKey = document.querySelector("."+currentKey);
  // we are adding "." becoz in out html all button has their own class so to activate
  // or adding new things we need to access them here we access them as a class via query querySelector

  activeKey.classList.add("pressed");

  // delay added to remove pressed class to add animation

  setTimeout(function(){ activeKey.classList.remove("pressed"); } , 100);


}






// var audio = new Audio("sounds/tom-1.mp3");
// audio.play();
