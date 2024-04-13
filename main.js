let AudioBird = document.getElementById("Audio-bird");
function BirdAudio() {
  AudioBird.play();
}
let CircleDisplay = document.getElementById("circle-display");
let menustate = 0;
function display(){
  if (menustate === 0) {
  CircleDisplay.style.display = "block";
  menustate = 1;
  }
  else {
    CircleDisplay.style.display = "none";
  menustate = 0;
  }
}

function style() {
 let sty = document.getElementById("circle-display");
  
  sty.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
  
  sty.style.boxShadow = " rgba(255, 255, 255, 0.35) 0px 5px 15px";
  return;
}

function styleoff() {
 let sty = document.getElementById("circle-display");
  
  sty.style.backgroundColor = "rgba(255, 167, 47, 0.3)";
  
  sty.style.boxShadow = "box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;";
  return;
}

let ImgBody = document.getElementById("body");
let IconChange = document.getElementById("IconC");

let IconState = 0;

let BirdImage = document.getElementById("BirdChangeTo");
let butterfly = document.getElementById("butterfly");
let a = document.getElementById("anchor");
function ImgChange() {
  if (IconState === 0) {
    IconState = 1;
    IconChange.className = "fa-solid fa-toggle-on";
    ImgBody.style.backgroundImage = "url('blackbg.png')";
    style();
    BirdImage.src = "bat.gif";
    butterfly.src = "birds-flying.gif";
    AudioBird.src = "Nightsound.mp3";
    a.style.color = "#ffffff";
    a.style.border = "1px solid #ffffff"
  } else{
 
    IconState = 0;
    IconChange.className = "fa-solid fa-toggle-off";
    ImgBody.style.backgroundImage = "url('bg.png')";
    styleoff();
    BirdImage.src = "bird.gif";
    butterfly.src = "butterfly.gif";
    AudioBird.src = "birdsSound.mp3";
    a.style.color = "#000000";
    a.style.border = "1px solid #000000"
  }
  
}

