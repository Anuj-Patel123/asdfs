x = 0;
y = 0;

screen_width = 0;
screen_height = 0;

draw_apple = "";
apple = "";

speak_data = "";
to_number= "";


var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function preload() {
  loadImage(apple);
}


function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {
to_number = Number(content);
if(Number.isInteger(to_number)) {
  apple = "Started drawing apple";
  draw_apple = "set";
  console.log(apple)
} else {
  apple = "The speech has not reconginzed a number"
  console.log(apple)
}

 console.log(event); 

 content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 

}

function setup() {
  screen_width = window.innerWidth;
  screen_height = window.innerHeight;
  createCanvas(screen_width, screen_height-150);
  canvas.position(0, 150)
}

function draw() {
  if(draw_apple == "set")
  {
    for (var i = 1; i <= to_number; i++) {
      x = Math.floor((Math.random() * 700) +1)
      y = Math.floor((Math.random() * 400) +1)
      Image(apple = "apple.png", 350, 200, 20, 20)
    }

    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    speak_data = (to_number.concat("Apples drawn"))
    speak()
    draw_apple = "";
  }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}
