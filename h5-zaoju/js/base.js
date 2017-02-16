// JavaScript Document
(function(win,doc){
    function change(){
        //320是分辨率的基数，20是html的font-size
        doc.documentElement.style.fontSize=20*doc.documentElement.clientWidth/320+'px';
    }
    change();
    win.addEventListener('resize',change,false);
})(window,document);

