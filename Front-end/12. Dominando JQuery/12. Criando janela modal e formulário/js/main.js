$(document).ready(function(){


    abrirJanela();
    fecharJanela();

    function abrirJanela(){
        $('.btn').click(function(e){
            $('.bg').fadeIn();
            e.stopPropagation();
        });
    }

    function fecharJanela(){
        let el = $('body, .btn-close');
        //let iconClose = $('.form img')

        el.click(function(){
            $('.bg').fadeOut();
        })

        $('.form').click(function(e){
            e.stopPropagation();
        });
    }

});