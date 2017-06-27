console.log('sss');
class pariticale{
  constructor(top,left){
    this.top = top;
    this.left = left;
    this.r = Math.random()*2;
    this.moveX = Math.random();
    this.moveY = Math.random();
  }
  drawCircle(box){
    var x = this.left;
    var y = this.top;
    var r = this.r;
    // if(x>width||x<0){
    //   console.log('sss ddd');
    // }
    box.beginPath();
    box.arc(x, y ,r, 0, 360);
    box.closePath();
    box.fillStyle = "rgba(204,204,204,0.3)";
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
      box.strokeStyle="rgba(204,204,204,0.3)";
      box.stroke();
      }
    }
  move(){
    this.top += this.moveX;
    this.left += this.moveY
    if(this.top> width||this.top < 0){
        this.moveX = -this.moveX;
    }
    if(this.top> height||this.top < 0){
       this.moveY = -this.moveY;
    }
  }
}

let circles = [];
let canvas = document.getElementsByTagName('canvas')[0];
let box = canvas.getContext('2d');
let height = canvas.height = canvas.offsetHeight;
let width = canvas.width = canvas.offsetWidth;

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
  circles.forEach((item)=>{
    item.drawCircle(box);
    let thisBox = item;
    circles.forEach((item)=>{
      item.drawPath(thisBox,item)
    });
    item.move();

  });
  requestAnimationFrame(draw);

}
init(120);
