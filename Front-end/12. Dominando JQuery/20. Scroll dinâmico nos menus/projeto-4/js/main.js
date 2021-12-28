$(document).ready(function(){
    $('#btn-mobile').click(function(e){
        e.stopPropagation()
        $('#menu').toggleClass('active')
        $('#hamburguer').toggleClass('active')
    })

    $('#menu a').click(function(){
        let href = $(this).attr('href');
        let offSetTop = $(href).offset().top;

        $('html, body').animate({
            scrollTop: offSetTop
        })

        return false;
    })
})