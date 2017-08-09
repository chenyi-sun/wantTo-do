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
