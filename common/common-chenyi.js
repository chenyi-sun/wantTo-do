//** 获取类名**//
var CHENYI = function(){
    return function(param){

    }
}();
var isArray = function(obj) { //判断某个元素是否是数组array
    return Object.prototype.toString.call(obj) === '[object Array]'
        || Object.prototype.toString.call(obj) === '[object HTMLCollection]' ;
}
var hasClass = function(domObj, className){//判断是否存在某个class
    if(domObj.className) {
        return domObj.className.match(new RegExp('(\\b|^)' + className + '(\\b|$)'))!=null?true:false;
    }else {
        return false;
    }
};

var addClass = function(domObj, className){//给某个dom添加某个class
    if (!hasClass(domObj, className)) {
        domObj.className = (domObj.className.trim()+" "+className.trim()).trim();
    }
};

var removeClass = function(domObj, className){//移除className
    var reg = new RegExp('(\\b|^)' + className + '(\\b|$)');
    if(isArray(domObj)){
        for(var index=0; index < domObj.length; index++){
            if (hasClass(domObj[index], className)) {
                domObj[index].className = domObj[index].className.replace(reg, '').trim();
            }
        }
    } else {
        if (hasClass(domObj, className)) {
            domObj.className = domObj.className.replace(reg, '').trim();
        }
    }
};

 function GetUrlParam(name)//获取url参数
{
     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
     var r = window.location.search.substr(1).match(reg);
     if(r!=null)return  unescape(r[2]); return null;
}

console.log(GetUrlParam('ask'));//获取url参数

var first = document.getElementsByClassName('first');
console.log(hasClass(first[0],'sss'));

var d = document.getElementById('d');
console.log(hasClass(d,'firsts'));

addClass(first[0],'  dds kk');
removeClass(first[0], 'dds');