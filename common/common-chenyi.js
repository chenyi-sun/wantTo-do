//** 获取类名**//
var CHENYI = function(){
    return function(param){

    }
}();

var hasClass = function(domObj, className){
    if(domObj.className) {
        return domObj.className.match(new RegExp('(\\b|^)' + className + '(\\b|$)'));
    }else {
        return false;
    }
};

 function GetUrlParam(name)
{
     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
     var r = window.location.search.substr(1).match(reg);
     if(r!=null)return  unescape(r[2]); return null;
}
console.log(GetUrlParam('ask'));



