function optimized(){
    this.x = x;
    this.y = y;
}
optimized.prototype.func = function(){
    console.log('ssss');

}
var oj = new optimized();
oj.func();
