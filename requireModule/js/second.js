require(['vue','jquery','ueditor','ZeroClipboard'], function (Vue,$,UE,ZeroClipboard){
    // var ue = UE.getEditor('container');
    // var ue = UE.getEditor('container');
    window['ZeroClipboard'] = ZeroClipboard;
    var ue = UE.getEditor('container');
});