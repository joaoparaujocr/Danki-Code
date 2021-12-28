$(document).ready(function (){
    $('#btn-mobile').click(function(){
        $('#nav').toggleClass('active', 1000);
    })

    $('#menu a').click(function(e){
        e.stopPropagation();
        let href = $(this).attr('href');
        let offSetTop = $(href).offset().top;

        $('html, body').animate({
            scrollTop: offSetTop
        })
    })
})