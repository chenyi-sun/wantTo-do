(function(){
    all = {
        common:function(){
            return function Common(){
                    this.elements = {
                        lis:{
                            name:'弹窗(暂无数据/测试)',
                            type: 'css',
                        },
                        test:{
                            name:'测试组件',
                            type: 'css',
                        }
                    };
                    this.browers ={
                       'Insper':{
                           name: 'wobox',
                           nameA: '浪潮isTB(山东有线)',
                       },
                       'iPanel':{
                           name: 'iPanel',
                           nameA: '茁壮网络'
                       },
                       'firefox':{
                           name: 'firefox',
                           nameA: '火狐'
                       },
                       'chrome':{
                           name: 'chrome',
                           nameA: 'chrome浏览器'
                       }
                    };
                    this.tv = ['Insper','iPanel'];
                    this.istest = false;
                    this.windowVersion = {
                        ss: 'ddd'
                    };
                    this.init = function(){

                    }
                }
            },
    }
    var common = new all.common();
    var init = {
        setnoMessage: function Nomessage(message){
            var common = all.common();
            common.call(this);
            var self = this;
            var alert_box = document.getElementsByClassName('alert-box')[0];
            var alertInlinebox = document.getElementsByClassName('alert-box-inlinebox')[0];
            var body = document.getElementsByTagName('body')[0];
            var click_items = document.getElementsByClassName('lis');
            this.init = function(info){
                if(info){
                   this.infomessage(info);
                    return false;
                }
                for(item in click_items){
                    var click_item = click_items[item];
                        click_item.onclick = function(){
                            click_action(this);
                        };
                    }
                }
                function click_action (click_item){
                    alert_box.setAttribute('class', 'alert-box display-block');
                    var atrs = click_item.getAttribute('atr')||null;
                    if(atrs){
                         alertInlinebox.setAttribute('class', 'alert-box-inlinebox alert-box-opacity alert-box-inlinebox-change');
                    }
                    else{
                        alertInlinebox.setAttribute('class', 'alert-box-inlinebox alert-box-opacity');
                    }
                    var message = click_item.getAttribute('atr')||'暂无数据';
                    alertInlinebox.innerHTML= message;
                    setTimeout(set,1000);
                } 
                this.infomessage = function(info){
                    alert_box.setAttribute('class', 'alert-box display-block');
                    alertInlinebox.setAttribute('class', 'alert-box-inlinebox alert-box-opacity alert-box-inlinebox-change');
                    var message = info;
                    alertInlinebox.innerHTML = message;
                    setTimeout(set,1000);
                }
                function set(){
                    alert_box.setAttribute('class', 'alert-box');
                    alertInlinebox.setAttribute('class', 'alert-box-inlinebox');
                }
                
        },
        getplatformVersion:function GetVersion(name){
            var common = all.common();
            common.call(this);
            this.browerName = '';
            this.init = function(){
                var nu = navigator.userAgent.toLowerCase();
                if(this.version(nu)){
                    return this.browerName;
                }
                else{
                    return false;
                }
            }
            this.version = function(nu){
                for(item in this.browers){
                    if(nu.indexOf(this.browers[item].name)>=0){
                        // return this.browers[item].Aname;
                        this.browerName = item;
                        return true;
                        // return this.browers[item].name;
                    }
                }
            }
            this.isTV = function(){
                for(item in this.tv){
                    if(this.browerName == this.tv[item]){
                       return true;
                    }
                }
            }
        },
        testForm:function TestForm(){
            var common = all.common();
            common.call(this);
            this.init = function(test){
                if(this.istest||test){
                    document.getElementById('console').style.display="block";
                    
                }
                else{
                    return false;
                }
            }
            this.append = function(item){
               var p = document.createElement("p");
               p.innerHTML = item;
               var father = document.getElementById('console').getElementsByClassName("content");
               father[0].appendChild(p);
               if(father[0].childNodes.length>30){
                   father[0].innerHTML = '';
                };
            }
           
        }
    }

    //开启测试窗口
   var testflat = new init.testForm();
    testflat.init();
    testflat.append('sssssssssssssss');


    //点击带lis的div就会弹出窗口
    var initsetMessage = new init.setnoMessage();
    initsetMessage.init();
    // initsetMessage.init('ssss');
    
    //获取浏览器版本号
    var getplatform = new init.getplatformVersion();
    getplatform.init();
    // document.getElementById('version').setAttribute('atr',getplatform.init());
  
  
    window.common={
        isTV: getplatform.isTV()||false,
        currentBower: getplatform.init(),
        allBrowers: initsetMessage.browers,
        initsetMessage: initsetMessage,
        testflat: testflat,
    }
     
}())



 



