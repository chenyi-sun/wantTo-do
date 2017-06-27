console.log('y = ax 变速直线运动3次方');
//参考资料view-source:http://www.zhangxinxu.com/study/201312/js-parabola.html
var ball = document.getElementsByClassName('box')[0];

var start = 240;
var end = 600;
var time = 10;//2s;
var starttime = 8;
var starttime2 = 2;
ball.style.left = start + 'px';
var nowTime = 0;
var nowTime2 = 0;//

var where = (((end - start) * (starttime2 /= time)) * starttime2)+ start;
console.log(starttime2+'<>');
console.log('sss ' + where);

function starts(){
  var setTime = starttime2;
  var where = (((end - start) * (starttime2 /= time)) * starttime2*starttime2*starttime2)+ start;
  starttime2 = setTime +0.1;
  ball.style.left = where + 'px';
  if(starttime2 >= starttime){
    return 0;
  }
// move = move + 1;
// nowWhere = (end -start)/(time*24) + start;
 requestAnimationFrame(starts);
}

window.requestAnimationFrame(starts);

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
