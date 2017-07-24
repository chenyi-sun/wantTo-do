//** 获取类名**//
function className(classname){
    var array = document.getElementsByClassName(classname);
    return array;
}
console.log(className('first')[0]);

function addClass(item,classname){
    var dom = item;
    dom.className = dom.className + ' ' + classname;
};

function hasClass(ele, classname){

}
addClass(className('first')[0],'second');
console.log(className('first')[0]);

var obj = [{
    x:1,
}];

console.log(obj);
console.log(obj[0].x);
obj[0].x = 2;
console.log(obj);
console.log(obj[0].x);
