console.log('y = ax 匀速直线运动');
//参考资料view-source:http://www.zhangxinxu.com/study/201312/js-parabola.html
var ball = document.getElementsByClassName('box')[0];
var ball2 = document.getElementsByClassName('box2')[0];


var start = 240;
var end = 600;
var duraction = 400;
var time = 10;//2s;
var starttime = 10;

ball.style.left = start + 'px';
ball2.style.left = start + 'px';
var nowTime = 0;
var nowTime2 = 0;//

var where = (end - start)/time * starttime +20;



function starts(){
  nowTime = nowTime + 0.2;
  var nowWhere = Tween.Quint.easeOut(nowTime,10, 400, 200);;
  ball.style.left = nowWhere + 'px';
  if(nowTime >= starttime){
    return 0;
  }
// move = move + 1;
// nowWhere = (end -start)/(time*24) + start;
 requestAnimationFrame(starts);
}

function start2(){
  // nowTime2 = nowTime2 + 1/(24*14);//
  // var nowWhere2 = Tween.Quad.easeIn(nowTime2,10, 400, 200);//
  // ball2.style.left = nowWhere2 + 'px';//
  //   if(nowTime2 >= (starttime/14)){
  //     return 0;
  //   }
  //   requestAnimationFrame(start2);
}
window.requestAnimationFrame(starts);
window.requestAnimationFrame(start2);


//返回当前时间的所在的位置
var Tween = {
  Linear : function(nowtime, alltime, duraction, startOption){
      return (duraction / alltime) * nowtime + startOption
  },
  Quad: {
    easeIn: function(nowtime, alltime, duraction, startOption){
      return duraction*(nowtime/=alltime)*nowtime + startOption;
    },
    easeOut: function(nowtime, alltime, duraction, startOption){
      return (-duraction)*(nowtime/=alltime)*(nowtime-2) + startOption;
    },
    easeInOut: function(nowtime, alltime, duraction, startOption){
      if(nowtime>(alltime/2)) return duraction*(nowtime /= alltime)*nowtime + startOption;
      return (-duraction/2)*((nowtime/=alltime)*(nowtime-2)) + startOption;
    }
  },
  Cubic: {
    easeIn : function(nowtime, alltime, duraction, startOption){
        return duraction*(nowtime/=alltime)*nowtime*nowtime + startOption;
    },
    easeOut: function(nowtime, alltime, duraction, startOption){
        return duraction*((nowtime = nowtime/alltime-1)*nowtime*nowtime + 1) + startOption;
    },
  },
  Quart: {
    easeIn: function(nowtime, alltime, duraction, startOption){
        return duraction*(nowtime/=alltime)*nowtime*nowtime*nowtime + startOption;
    },
    easeOut: function(nowtime, alltime, duraction, startOption){
        return -duraction*((nowtime = nowtime/alltime-1)*nowtime*nowtime*nowtime - 1) + startOption;
    }
  },
  Quint: {
    easeIn: function(nowtime, alltime, duraction, startOption){
        return duraction*(nowtime/=alltime)*nowtime*nowtime*nowtime*nowtime + startOption;
    },
    easeOut: function(nowtime, alltime, duraction, startOption){
        return duraction*((nowtime = nowtime/alltime-1)*nowtime*nowtime*nowtime*nowtime + 1) + startOption;
    }
  }
};
console.log();
