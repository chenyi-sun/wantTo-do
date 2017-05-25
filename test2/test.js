var tela = document.querySelector('canvas');
var canvas = tela.getContext('2d');
var windowWidth = document.body.clientWidth;
var windowHeight = document.body.clientHeight;
tela.style.width = windowWidth;
tela.style.height = windowHeight;
tela.width = windowWidth;
tela.height = windowHeight;



var Particle = function(){
  function Particle(){
      this.x = 200;
      this.y = 200;
      this.plusx = 2;
      this.plusy = 2;
  }
  Particle.prototype.render = function(){
    canvas.beginPath();
    canvas.fillStyle = '#eee';
    canvas.lineWidth = 2;
    canvas.arc(this.x,this.y,2,0,2*Math.PI);
    canvas.closePath();
    canvas.fill();
  }
  Particle.prototype.move = function(){
    this.x = this.x+ this.plusx;
    this.y = this.y + this.plusy;
    if(this.x == 250){
      this.plusy = 0;
      this.plusx = -2;
    }
    if(this.x == 150){
      this.plusy = -2;
      this.plusx = 2;
    }
    if(this.y == 200){
      this.plusy = 2;
      this.plusx = 2;
    }
    this.render();
  }
  return Particle;
}();

var item = {};
function create(){
    item = new Particle();
    item.render();
}
create();
function clear(){
  item.move();
  canvas.fillStyle = "#000";
  canvas.globalAlpha = 0.1;
  canvas.fillRect(0, 0 , tela.width, tela.height);
  canvas.fill();
  canvas.globalAlpha = 1;
  requestAnimationFrame(clear);
}
clear();
