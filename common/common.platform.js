//http://www.jb51.net/article/79764.htm
(function(){
    var BrowerMatch = {
        init: function(){
            this.brower = this.getBrower().brower||"UnKnow Bower";
            this.version = this.getBrower().version||"Unknow Version";
            this.OS = this.getOS()||"Unknow OS";
        },
        getOS: function(){

        }
    }
}())