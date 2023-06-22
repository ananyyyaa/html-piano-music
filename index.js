var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });

}


function makeSound(key) {

  switch (key) {
    case "w":
      var a = new Audio("music/piano_fifth_A_E.mp3");
      a.play();
      break;

    case "a":
      var v= new Audio("music/bb3_piano_note-98736.mp3");
      v.play();
      break;

    case "s":
      var n = new Audio('music/c3-95007.mp3');
      n.play();
      break;

    case "d":
      var t= new Audio('music/piano_Major_Sixth_A_F_sharp copy.mp3');
      t.play();
      break;

    case "j":
      var k = new Audio('music/piano-crash-sound-37898.mp3');
      k.play();
      break;

      case "z":
        var k = new Audio('music/piano-slide-high-note-to-low-note-31071.mp3');
        k.play();
        break;


    default: console.log(key);

  }
}




  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);


