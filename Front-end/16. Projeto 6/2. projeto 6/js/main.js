$(window).on('load', function(){
    $('#btn-mobile').click(function(){
        $('#menu').toggleClass('active');
        $('#hamburguer').toggleClass('active');
        $('#menu').animate({
            height: 'toggle'
          });
    })

    $('#menu li').click(function(){
        $('#menu').toggleClass('active');
        $('#hamburguer').toggleClass('active');
        $('#menu').animate({
            height: 'toggle'
          });
    })

    verificarTela()

    var widthActual = $(window).width();

    function verificarTela(){
        $(window).resize(function() {
            let widthWindow = $(window).width();
            if(widthActual != widthWindow){
                if(widthWindow <= 600){
                    document.location.reload(true);
                }
            }
        })
    }
})