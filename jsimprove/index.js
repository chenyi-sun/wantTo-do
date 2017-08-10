//with是干什么的?
function lakees(){//构造方法
    this.name = "bls";
    this.age = "28";
    this.gender = "boy";
    this.ask = function(){
        console.log(this.name);
    }
    this.new = function(){
            console.log(this.age);
    }
}
var people = new lakees();
people.age = 100;
people.ask();
people.new();
with(people){
    var str = 'name='+name;
    str = str + '//age='+age;
    str = str + '//gender='+gender;
    console.log(str);
}
////////////////////////with方法

//call方法?
function lakee(){
    lakees.call(this);
    /////////call方法把lakess的变量和方法全部继承
    this.ask = 'sss';
    this.ages = '1000';
}
var people2 = new lakee();
with(people2){
    var str = 'name='+name+'//age='+age+'//gender='+gender+'//ages='+ages;
    console.log('=======');
    console.log(str);
}
console.log('===============');

//switch方法,外面是闭包其中的变量外部不可读取
var sss = (function(){
    var num = 200,
    ask = '2222';
    switch(num){
        case 100: ask = 200; break;
        case 200: ask = 'dddd';break;
    }
    console.log(ask);
    return {
        ask: ask
    };
}())

console.log(sss);

//闭包的另一种实现方法，ask方式和func都不可被调用
var asks = (function(){
    return function ask(){
        this.ask = 'dddd';
        this.func = function(){
            console.log('menu');
        };
        return {
            new: 'sss',
            menu: 'menus'
        }
    }
}());
var menu = asks();
console.log(menu.new);

//闭包实现，然后内部可以继承
var asks2 = (function(){
    return function asks(){
        return {
            ask: function(){},
            news: function(){

            }
        }
    }
}());

var menus = new asks2();

//try catch尝试执行某个操作，如果有问题就报错
try{
    console.log('want to try');
}
catch(e){
    console.log(e);
}
//try catch尝试执行某个操作，如果有问题就报错结束//


//prototype的基本用法
function Range(from, to){
    this.x = from;
    this.y = to;
    this.create = function(){
        return this.x + this.y;
    }
}
var rangeObject = new Range(2,3);
console.log(rangeObject.create());

function rangarr(from,to){
    this.x = from;
    this.y = to;
}

rangarr.prototype = {
    plus: function(){
        return this.x + this.y;
    },
    cut: function(){
        return this.x - this.y;
    }
}

var ran = new rangarr(10,20);
console.log(ran.plus());
console.log(ran.cut());
//prototype的基本用法结束//


//split，快速拼接数组
var array1 = "ddd,sss,dddd";
var array2 = array1.split(",");
console.log(array2);
//split，快速拼接数组结束//


//indexof的用法
var ask = 'djsjs,jsjsj';
var nsws = ['ddd', 'dsss', 'dksksk'];
console.log(ask.indexOf(','));
console.log(nsws.indexOf('tt'));
//indexof的用法结束//


//call继承方法
function A(x){
    this.x = x;
} 
A.prototype.a = function(){
    return this.x;
};
A.prototype.d = 'ssss';

function B(x){
    this.y = x;
    A.call(this);
}
B.prototype.c = 'd';

var a = new B('2'); 
console.log(a.a); 
//call继承A构造函数的this属性和方法，不继承prototype的方法

//prototype的方法继承
function C(x){
    A.call(this,2);
    this.y = x+2;
    this.x = 'dddddd';
}
C.prototype = new A();
var c = new C('333');
console.log(c.x);

//
function D(x){
    this.y = x+'23'+'44';
}
D.prototype = new A();
// D.prototype.constructor = A;
D.prototype.dd = function(){
    console.log('dd');

}
var c = new D('333');
console.log(c.x);
console.log(c.d);
c.dd();
c.__proto__.new = 'ddd';
console.log(c.__proto__);
console.log(D.prototype.constructor);
console.log(D.prototype);

var s = {
    ss: function(){
        this.ask = 'ddd';
        C.call(this,2);
    }
}
var sd = new s.ss();
console.log(sd.x);
console.log(s.__proto__);