
/* code Google anal à coller dans JS */

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-137580905-1', 'auto');
ga('send', 'pageview');



document.write('<scr'+'ipt type="text/javascript" charset="utf-8" src="./jquery.tubular.1.0.js"></scr'+'ipt>');
$(function(){
    // add the video on the body
    $('body').tubular({videoId: 'Cz6bP1eqyn4', start: 3});  
    // keep the main container clickable
    $('.background').css('z-index', 0);
    // make the video take the full window
    $('body').css('padding', 0);
})




  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-137580905-1');
