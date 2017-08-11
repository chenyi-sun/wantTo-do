(function(){
    var initParam = {
        istest: true,//内部函数测试是否打开,机顶盒的时候就关闭它，上线的时候关闭，false
    };
    var testFunction = function(){//测试函数写在这里

    };
    var init = new sliderCommon(initParam,testFunction);

    function sliderCommon(item,testFunction){
        this.data = {
            istest:item.istest||false,
        }
        this.test = testFunction;
    }
    window.slider = {
        istest: init.data.istest,
        testFunction: init.test,
        key: '',
        setKey: function(num){
            this.key = num;
            console.log(this.key);
            switch(num)
            {
                case 13: common.initsetMessage.init('确认');
                case 40: common.initsetMessage.init("下");break;
                case 38: common.initsetMessage.init("上");break;
                case 37: common.initsetMessage.init("左");break;
                case 39: common.initsetMessage.init('右');break;
            }
            
        }
    }   
}());
 
 if(!common.isTV||common.currentBower=="Insper"){
        // common.testflat.init(true);
        //开启测试
        if(slider.istest){
            slider.testFunction();
        }
        document.onkeydown = function(e) {
                    var keyCode = 0;
                    e = e || window.event;
                    keyCode = e.keyCode || e.which || e.charCode;
                    common.testflat.append(keyCode);//开启测试
                    common.initsetMessage.init(keyCode)
                    slider.setKey(keyCode);
        };
    }

    /*slider*/
var sliderPros = [];
function sliderPor(dom){
    this.dom = dom;
    this.isFouce = false;
    this.height = dom.offsetHeight;
    this.top = dom.offsetTop;
    this.father = dom.parentNode;
    this.fatherHeight = dom.parentNode.offsetHeight;
    this.chaildNone = this.father.getElementsByTagName('a');
    this.childLength = this.chaildNone.length;
    this.init = function(num){
        var self = this;
             this.dom.onfocus = function(){
               document.onkeydown = function(e){
                if(e.keyCode == 40){
                    if(self.father.getAttribute('slider')!= sliderPros[parseInt(num)+1].dom.parentNode.getAttribute('slider')) {return false;}
                    sliderPros[parseInt(num)+1].dom.focus();
                }
                else if(e.keyCode == 38){
                    if(num-1<0){
                        return false;
                    }
                    else if(self.father.getAttribute('slider')!= sliderPros[parseInt(num)-1].dom.parentNode.getAttribute('slider')){
                        return false;
                    }
                     sliderPros[parseInt(num)-1].dom.focus();
                }
               }
              if(slider.key == 40){
                common.initsetMessage.init('切换')
              }
              if((self.fatherHeight-self.dom.offsetTop)<self.height){
              }
            }
        }
}

(function(){
    var allPor = document.getElementsByTagName('a');
    var allClass = ['slider-portrait','slider-horizel'];
    var protrait = document.getElementsByClassName('slider-portrait');
    var length = 0;
    for(item in allClass){
        var items  = document.getElementsByClassName(allClass[item])
       for(index in items){
            if(typeof(items[index])=='object'){
                length = length + 1;
                items[index].setAttribute('slider',length);
            };
       }
    }

    for(item in allPor){
        if(!isNaN(item)){
            sliderPros.push(new sliderPor(allPor[item]));
            sliderPros[item].init(item);
        }
        // 
    }
}())









