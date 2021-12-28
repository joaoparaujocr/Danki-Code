$(document).ready(function (){

    var indiceAtual = 0;
    var indiceMaximo = $('.slider img').length;

    initSlider();
    cliqueSlider();

    function initSlider(){
        for(var i = 0; i < indiceMaximo; i++){
            if(i == 0){
                $('.bullets-nav').append('<span style="background-color: black;"></span>');
            }else{
                $('.bullets-nav').append('<span></span>');
            }
        }

        $('.slider img').eq(0).fadeIn();
        setInterval(function(){
            alternarSlider();
        }, 5000);
    }

    function cliqueSlider(){
        $('.bullets-nav span').click(function(){
            $('.slider img').eq(indiceAtual).stop().fadeOut(2000);
            $('.bullets-nav span').css('background-color', '')
            indiceAtual = $(this).index();
            $('.slider img').eq(indiceAtual).stop().fadeIn(2000);
            $(this).css('background-color', 'black')
        })
    }

    function alternarSlider(){
        $('.slider img').eq(indiceAtual).stop().fadeOut(2000);
        indiceAtual += 1;
        if(indiceAtual == indiceMaximo)
            indiceAtual = 0;
        $('.slider img').eq(indiceAtual).stop().fadeIn(2000);
        $('.bullets-nav span').css('background-color', '');
        $('.bullets-nav span').eq(indiceAtual).css('background-color', 'black');
    }

});