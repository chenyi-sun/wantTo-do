console.log('y = 2px^2 抛物线方程式,x轴匀速运动');
//参考资料view-source:http://www.zhangxinxu.com/study/201312/js-parabola.html
var ball = document.getElementsByClassName('box')[0];

var xcenter = 200;
var add = 0.3;//x的匀速速度
var x = xcenter;
var ycenter = 200;
var xend = 500;
var yend = 500;

var p = ((yend -ycenter)/2)/((xend - xcenter)*(xend - xcenter));
// y = 2p(x-xcenter)^2 + ycenter;
//200 = 2p(200-200)^2 + 200;
//600 = 2p(300-200)^2 + 200;
// p = ((yend - xend)/2)/((xend - xcenter)的平方)
ball.style.top = ycenter + 'px';
//x轴匀速运动
function set(){
  x = x + add;
  var y = 2*p*(x-xcenter)*(x-xcenter) + ycenter;
  ball.style.left = x + 'px';
  ball.style.top =  y + 'px';
  // console.log(y);
  if(y >= 600){
    console.log('ss');
    return 1;
  }
  else{
    requestAnimationFrame(set);
  }
}
window.requestAnimationFrame(set);
// setInterval(set, 100);
