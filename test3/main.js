class pariticale{
  constructor(top,left){
    this.top = top;
    this.left = left;
    this.r = Math.random()*6;
    this.moveX = Math.random();
    this.moveY = Math.random();
    this.moveX = this.moveX>=0.5?this.moveX:-this.moveX;
    this.moveY = this.moveY>=0.5?this.moveY:-this.moveY;
  }
  drawCircle(box){
    var x = this.left;
    var y = this.top;
    var r = this.r;

    box.beginPath();
    box.arc(x, y ,r, 0, 360);
    box.closePath();
    box.fillStyle = "rgba(204,204,204,0.2)";
    box.fill();
  }
  drawPath(thisbox,item){
    let widthPath = thisbox.left - item.left;
    let heightPath = thisbox.top - item.top;
    var dr = Math.sqrt(widthPath*widthPath + heightPath*heightPath);
    if(dr < 100){
      box.beginPath();
      box.moveTo(thisbox.left,thisbox.top);
      box.lineTo(item.left,item.top);
      box.closePath();
      box.strokeStyle="rgba(204,204,204,0.2)";
      box.stroke();
      }
  }
  move(){
    if(this.left> width||this.top < 0){
        this.moveX = -this.moveX;
    }
    if(this.top> height||this.top < 0){
       this.moveY = -this.moveY;
    }
    this.top += this.moveY/2;
    this.left += this.moveX/2;
  }
}

class CenterCircle extends pariticale{
  constructor(top,left){
    super(top,left);
  }
  drawCircle(){
    var x = this.left;
    var y = this.top;
    var r = 2;

    box.beginPath();
    box.arc(x, y ,r, 0, 360);
    box.closePath();
    box.fillStyle = "rgba(255, 77, 54,0.8)";
    box.fill();
  }
   drawPath(thisbox,item){
    let widthPath = thisbox.left - item.left;
    let heightPath = thisbox.top - item.top;
    var dr = Math.sqrt(widthPath*widthPath + heightPath*heightPath);
    if(dr < 120){
      box.beginPath();
      box.moveTo(thisbox.left,thisbox.top);
      box.lineTo(item.left,item.top);
      box.closePath();
      box.strokeStyle="rgba(255, 77, 54,0.2)";
      box.stroke();
      }
  }
}
let circles = [];
let canvas = document.getElementsByTagName('canvas')[0];
let box = canvas.getContext('2d');
let height = canvas.height = canvas.offsetHeight;
let width = canvas.width = canvas.offsetWidth;
let currentCanvas = new CenterCircle(0,0);


function init(values){
  for(let i = 0; i<=values; ++i){
    // console.log(Math.random());
    circles.push(new pariticale(Math.random()*height,Math.random()*width));
    // circles[i].drawCircle();
  }
  requestAnimationFrame(draw);
}

function draw(){
  box.clearRect(0,0,width,height);
  currentCanvas.drawCircle();
  // currentCanvas.drawPath();
  circles.forEach((item)=>{
    item.drawCircle(box);
    let thisBox = item;
    circles.forEach((item)=>{
      item.drawPath(thisBox,item);
    });
    item.move();
  });
  circles.forEach((item)=>{
    currentCanvas.drawPath(currentCanvas,item);
  });
  requestAnimationFrame(draw);

}
init(120);

window.onmousemove = function(e){
  let es = e||window.event;
  currentCanvas.left = es.clientX;
  currentCanvas.top = es.clientY;
  console.log('sss');
}
