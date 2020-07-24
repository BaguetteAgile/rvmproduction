
document.write('<scr'+'ipt type="text/javascript" charset="utf-8" src="./jquery.tubular.1.0.js"></scr'+'ipt>');
$(function(){
    // add the video on the body
    $('body').tubular({videoId: 'Cz6bP1eqyn4', start: 3});  
    // keep the main container clickable
    $('.background').css('z-index', 10);
    // make the video take the full window
    $('body').css('padding', 0);
})