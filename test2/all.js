var tela = document.createElement('canvas');
tela.width = $(window).width();
tela.height = $(window).height();
$("body").append(tela);

if(!window.requestAnimationFrame){
  window.requestAnimationFrame = function(fn){
    setTimeout(fn,17);
  }
}
var random = Math.random();
// console.log(Math.sin(1/random));

var canvas = tela.getContext('2d');

var Particle = function(){
  function Particle(){
      var random = Math.random();
      this.progress = 0;
      this.canvas = canvas;
      this.width = $(window).width()/2;
      this.height = $(window).height()/2;
      this.x = this.width  + (Math.random() * this.width - Math.random() * this.width);
      this.y = $(window).height()/2 + (Math.random() * this.height - Math.random() * this.height);
      this.radius = random > 0.2 ? Math.random() * 3 : Math.random() * 5;
      this.variantx1 = Math.random() * 300;
      this.variantx2 = Math.random() * 400;
      this.varianty1 = Math.random() * 100;
      this.varianty2 = Math.random() * 120;
  }
  Particle.prototype.render = function(){
      this.canvas.beginPath();
      this.canvas.arc(this.x, this.y, 2, 0, 2 * Math.PI);
      this.canvas.lineWidth = 2;
      this.canvas.fillStyle = "#7DFFF2";
      this.canvas.fill();
      this.canvas.closePath();
  }
  Particle.prototype.move = function(){
    this.x += Math.sin(this.progress / this.variantx1) * Math.cos(this.progress / this.variantx2);;
    this.y += Math.cos(this.progress / this.varianty2);
    this.render();
    this.progress++;
    console.log(this.x);
    return true;
  }
  return Particle;
}();

var particles = [];
function populate(num){
    for(var i=0; i<num; i++){
      particles.push(new Particle());
    }
    return particles.length;
}

function clear(){
  canvas.globalAlpha = 0.05;
  canvas.fillStyle = '#000';
  canvas.fillRect(0, 0, tela.width, tela.height);
  canvas.globalAlpha = 1;
}
function update(){
  particles.filter(function(item){
    item.move();
  });
  clear();
  requestAnimationFrame(update);
}
populate(100);
update()
