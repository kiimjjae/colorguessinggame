class ColorPanel{
  constructor(element){
    this.element = element;
    // .style.backgroundColor
    this.color = null;
  }
}

// Global variables
const p1 = new ColorPanel(document.getElementById('1'));
const p2 = new ColorPanel(document.getElementById('2'));
const p3 = new ColorPanel(document.getElementById('3'));
const p4 = new ColorPanel(document.getElementById('4'));
const p5 = new ColorPanel(document.getElementById('5'));
const p6 = new ColorPanel(document.getElementById('6'));

var chosen;
var correctColor;
const arr = [p1, p2, p3, p4, p5, p6 ];
const colorName = document.getElementById("colorName");


// Functions
function random_rgb() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgb(' + o(r()*s) + ', ' + o(r()*s) + ', ' + o(r()*s) + ')';
}

function newColors(){
  for (let i = 0; i < arr.length; i++) {
    arr[i].color = random_rgb();
    arr[i].element.style.backgroundColor = arr[i].color;
  }
  chosen = Math.floor(Math.random() * 6) + 1;
  colorName.innerHTML = arr[chosen].color.toUpperCase();
  correctColor = arr[chosen].color.toUpperCase();
}

function setupPanelLogic(){
  for (var i = 0; i < arr.length; i++) {
    arr[i].element.addEventListener("click", function(){
      let clickedColor = this.style.backgroundColor.toUpperCase();
      if(clickedColor == correctColor){
        colorName.innerHTML = "CORRECT";
        for (var i = 0; i < arr.length; i++) {
          arr[i].element.style.backgroundColor = correctColor;
        }
      } else {
        this.style.backgroundColor = "#0b0e1a"

      }
    });
  }
}

function wrongColor(){
  this.element.style.backgroundColor = "#0b0e1a";
}

function init(){
  setupPanelLogic();
  newColors();
}

init();
