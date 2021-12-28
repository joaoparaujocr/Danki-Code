$(function(){
    /*
    $(window).scroll(function(){
        console.log('Scroll ativo');
    })
    */

    /*
    $('a').click(function(e){
        e.preventDefault();
    })
    */

    /*
    var timer;

    $(window).resize(function(){
        //console.log('A tela esta sendo redimensionada')
        clearTimeout(timer);
        timer = setTimeout(function(){
            location.href = "http://127.0.0.1:5500/4.%20Mais%20sobre%20eventos/index.html";
        }, 2000);
    })*/

    $('.box-2').click(function(e){
        e.stopPropagation();
    })

    $('body').click(function(){
        $('.box-2').css('background-color', 'green');
    })
})
