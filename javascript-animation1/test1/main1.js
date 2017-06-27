console.log('y = ax 匀速直线运动');
//参考资料view-source:http://www.zhangxinxu.com/study/201312/js-parabola.html
var ball = document.getElementsByClassName('box')[0];
var ball2 = document.getElementsByClassName('box2')[0];


var start = 240;
var end = 600;
var time = 10;//2s;
var starttime = 10;
ball.style.left = start + 'px';
ball2.style.left = start + 'px';
var nowTime = 0;
var nowTime2 = 0;//

var where = (end - start)/time * starttime +20;



function starts(){
  nowTime = nowTime + 1/(24*1);

  var nowWhere = ((end - start)/(time*1)) * (nowTime*1) + start;


  ball.style.left = nowWhere + 'px';

  if(nowTime >= starttime){
    return 0;
  }
// move = move + 1;
// nowWhere = (end -start)/(time*24) + start;
 requestAnimationFrame(starts);
}

function start2(){
  nowTime2 = nowTime2 + 1/(24*14);//
  var nowWhere2 = ((end - start)/(time)) * (nowTime2*14) + start;//
  ball2.style.left = nowWhere2 + 'px';//
    console.log(nowWhere2);
    if(nowTime2 >= (starttime/14)){
      return 0;
    }
    requestAnimationFrame(start2);
}
window.requestAnimationFrame(starts);
window.requestAnimationFrame(start2);
// var xcenter = 200;
// var add = 0.4;//x的匀速速度
// var x = xcenter;
// var ycenter = 200;
// var xend = 500;
// var yend = 500;
//
// var p = ((yend -ycenter)/2)/((xend - xcenter)*(xend - xcenter));
// // y = 2p(x-xcenter)^2 + ycenter;
// //200 = 2p(200-200)^2 + 200;
// //600 = 2p(300-200)^2 + 200;
// // p = ((yend - xend)/2)/((xend - xcenter)的平方)
// ball.style.top = ycenter + 'px';
// //x轴匀速运动
// function set(){
//   x = x + add;
//   var y = 2*p*(x-xcenter)*(x-xcenter) + ycenter;
//   ball.style.left = x + 'px';
//   ball.style.top =  y + 'px';
//   // console.log(y);
//   if(y >= yend){
//     console.log('ss');
//     return 1;
//   }
//   else{
//     requestAnimationFrame(set);
//   }
// }
// window.requestAnimationFrame(set);
// setInterval(set, 100);
